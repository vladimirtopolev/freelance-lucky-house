import OrderedCall from '../../models/orderedCalls/orderedCall';
import mongoose from 'mongoose'
import STATUSES from '../../models/orderedCalls/status';

function getOrderedCalls(req, res) {
    OrderedCall.find({ isDeleted: { $eq: false } }).exec((err, items) => {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        return res.json(items);
    });
}

function orderCall(req, res) {
    const orderedCall = new OrderedCall();

    orderedCall.firstName = req.body.firstName || '';
    orderedCall.lastName = req.body.lastName || '';
    orderedCall.phone = req.body.phone || '';
    orderedCall.email = req.body.email || '';
    orderedCall.clientDescriptions = req.body.clientDescriptions || '';

    orderedCall.ownDescriptions = '';
    orderedCall.statusDates = { [STATUSES.CREATED]: new Date() };
    orderedCall.status = STATUSES.CREATED;
    orderedCall.isDeleted = false;

    orderedCall.save((err, item) => {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        return res.json(item);
    })
}

function deleteOrderedCall(req, res) {
    OrderedCall.findById(req.params.callId, function (err, ordedCall) {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        if (!ordedCall) {
            res.status(404).json({error: 'Could not fil call with this id'});
        }
        ordedCall.isDeleted = true;
        ordedCall.save(function (err) {
            if (err) {
                return res.status(500).json({ error: 'Internal issue' });
            }
            res.json(ordedCall);
        });
    });
}


export default (app) => {
    app.route('/api/orderCall')
        .get(getOrderedCalls)
        .post(orderCall);


    app.route('/api/orderCall/:callId')
        .delete(deleteOrderedCall);
}