import config from 'config';
import cloudinary from 'cloudinary';

import properties from './properties';
import table from './moduleTable';
import auth from './auth';
import navigation from './navigation';
import orderedCalls from './orderedCalls';
import subscriptions from './subscription';
import googleAnalitics from './googleAnalitics';

const cloudinaryConfig = config.get('cloudinary');


cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret
});

function saveCloudinaryImage(req, res) {
    const values = Object.values(req.files);
    const promises = values.map(image => cloudinary.uploader.upload(image.path));

    Promise
        .all(promises)
        .then(results => res.json(results))
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

export default (app) => {
    properties(app);
    table(app);
    auth(app);
    navigation(app);
    orderedCalls(app);
    subscriptions(app);
    googleAnalitics(app);

    app.route('/api/image-upload')
        .post(saveCloudinaryImage);
}