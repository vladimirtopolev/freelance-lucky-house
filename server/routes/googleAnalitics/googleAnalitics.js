const { google } = require('googleapis');
const _ = require('lodash');

export default class GoogleAnalitycs {
    constructor(clientEmail, privateKey, viewId, scopes = ['https://www.googleapis.com/auth/analytics.readonly']) {
        this.viewId = viewId;
        this.jwtClient = new google.auth.JWT(clientEmail, null, privateKey, scopes, null);
        this.authorizedClient = this.jwtClient.authorize();
        this.analitics = google.analyticsreporting('v4');
    }


    /**
     * @param reportRequest {Array<Object> | Object} -
     * Each object should have the following shape:
     * {
     *     dateRanges:     <Object>       (Ex.: {startDate: 'today', endDate: 'today'})
     *     metrics:  Array<Object>  (Ex.: [{expression: 'ga:users'}])
     *     dimensions: Array<Object>  (Ex.: [{name: 'ga:country'}])
     * }
     * */
    getData(reportRequests) {
        const requests = _.castArray(reportRequests).map(({ dateRanges, metrics, dimensions }) => {
            return {
                viewId: this.viewId,
                dateRanges,
                metrics,
                dimensions
            };
        });

        const resource = {reportRequests: requests};

        return this.authorizedClient
            .then(() => {
                return this.analitics.reports.batchGet({
                    auth: this.jwtClient,
                    resource
                })
            })
    }
}
