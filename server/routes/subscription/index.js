import Subscriptions from '../../models/subscription/subscription';
import mongoose from 'mongoose'
import STATUSES from '../../models/orderedCalls/status';

function getSubscriptions(req, res) {
    Subscriptions.find({ isDeleted: { $eq: false } }).exec((err, items) => {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        return res.json(items);
    });
}

function subscribe(req, res) {
    const subscription = new Subscriptions();

    subscription.email = req.body.email || '';
    subscription.isDeleted = false;

    subscription.save((err, item) => {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        return res.json(item);
    })
}

function unsubscribe(req, res) {
    Subscriptions.findOne({ email: req.params.email }, function (err, subscription) {
        if (err) {
            return res.status(500).json({ error: 'Internal issue' });
        }
        if (!subscription) {
            res.status(404).json({ error: 'Could not find call this email' });
        }
        subscription.isDeleted = true;
        subscription.save(function (err) {
            if (err) {
                return res.status(500).json({ error: 'Internal issue' });
            }
            res.json(subscription);
        });
    });
}


export default (app) => {
    app.route('/api/subscriptions')
        .get(getSubscriptions)
        .post(subscribe);


    app.route('/api/unsubscribe/:email')
        .get(unsubscribe);
}