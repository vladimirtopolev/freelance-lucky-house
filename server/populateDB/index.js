import async from 'async';

import populateTable from './moduletable/populate';
import populateUsers from './users/populate';
import populateNavigation from './navigation/populate';
import populateProperties from './properties/populate'


export default (endCallback) => {
    async.series([
        cb => populateTable(cb),
        cb => populateUsers(cb),
        cb => populateNavigation(cb),
        cb => populateProperties(cb)
    ], (err, res) => {
        endCallback(err);
    })
}