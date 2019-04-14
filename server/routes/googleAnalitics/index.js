import config from 'config';
import _ from 'lodash';

const { viewId, privateKey, clientEmail } = config.get('googleAnalitics');
import GoogleAnalitics from './googleAnalitics';

const googleAnalitics = new GoogleAnalitics(clientEmail, privateKey, viewId);

import requestTemplates from './requestTemplates';

function getReport(req, res) {
    const reportName = req.params.reportName;
    if (!requestTemplates[reportName]) {
        return res.status(404).json({ error: `Cannot fins template with name ${reportName}` })
    }

    const dateRanges = [{
        startDate: _.get(req, 'query.startDate', '360daysAgo'),
        endDate: _.get(req, 'query.endDate', 'today'),
    }];
    const reportRequests = {
        dateRanges,
        ...requestTemplates[reportName]
    };

    googleAnalitics.getData(reportRequests)
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(505).json(err)
        });
}

export default (app) => {
    app.route('/api/google-analytics/:reportName')
        .get(getReport)
}
