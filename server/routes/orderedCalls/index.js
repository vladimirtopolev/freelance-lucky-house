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
    OrderedCall.findById(req.params.callId, function (err, orderedCall) {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        if (!orderedCall) {
            res.status(404).json({ error: 'Could not fil call with this id' });
        }
        orderedCall.isDeleted = true;
        orderedCall.save(function (err) {
            if (err) {
                return res.status(500).json({ error: 'Internal issue' });
            }
            res.json(orderedCall);
        });
    });
}

function updateOrderedCall(req, res) {
    OrderedCall.findById(req.params.callId, function (err, orderedCall) {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        if (!orderedCall) {
            res.status(404).json({ error: 'Could not fil call with this id' });
        }

        const changedFields = req.body;

        if (changedFields.status !== orderedCall.status) {
            changedFields.statusDates = Object.assign({}, orderedCall.statusDates, {
                [changedFields.status]: new Date()
            })
        }
        orderedCall.set(changedFields);
        orderedCall.save(function (err) {
            if (err) {
                return res.status(500).json({ error: 'Internal issue' });
            }
            res.json(orderedCall);
        })
    })
}


export default (app) => {
    app.route('/api/orderCall')
        .get(getOrderedCalls)
        .post(orderCall);


    app.route('/api/orderCall/:callId')
        .put(updateOrderedCall)
        .delete(deleteOrderedCall);
}