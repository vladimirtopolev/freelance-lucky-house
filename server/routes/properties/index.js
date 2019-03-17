import Property from '../../models/properties/property';

function getProperties(req, response) {
    Property
        .find({})
        .exec((error, res) => response.json(res));
}

function changePropertyValue(req, response) {
    const {propName} = req.params;
    const {value} = req.body;
    Property
        .findOneAndUpdate({internalName: propName}, {$set: {value}}, {new: true})
        .exec((err, res) => {
            console.log(err);
            response.json(res);
        })
}

export default (app) => {
    app.route('/api/properties')
        .get(getProperties);

    app.route('/api/properties/:propName')
        .post(changePropertyValue);
}