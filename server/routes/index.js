import config from 'config';
import cloudinary from 'cloudinary';

import table from './table';
import auth from './auth';
import navigation from './navigation';

const cloudinaryConfig = config.get('cloudinary');


cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret
});

function saveCloudinaryImage(req, res) {
    const values = Object.values(req.files);
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => res.json(results))
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

export default (app) => {
    table(app);
    auth(app);
    navigation(app);

    app.route('/api/image-upload')
        .post(saveCloudinaryImage);
}