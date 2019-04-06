import config from 'config';

const { viewId, privateKey, clientEmail } = config.get('googleAnalitics');
import GoogleAnalitics from './GoogleAnalitics';
const googleAnalitics = new GoogleAnalitics(clientEmail, privateKey, viewId);


function getAnalitics(req, res) {

    const newUsersRequest = {

    };

    googleAnalitics.getData([{
        dateRanges: [{
            startDate: '30daysAgo',
            endDate: 'today',
        }],
        metrics: [
            { expression: 'ga:users' }
        ],
        dimensions: [
            { name: 'ga:userType' },
            {name: 'ga:country'}
        ]
    }])

        .then((result) => {
            console.log('SUCCESS');
            res.json(result)
        })
        .catch(err => {
            console.log('ERROR');
            res.json(err)
        });
}


export default (app) => {
    app.route('/api/googleanalitics')
        .get(getAnalitics);
}