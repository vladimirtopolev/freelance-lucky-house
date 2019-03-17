import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import formData from 'express-form-data';


import expressBootDev from './expressBootDev';
import bootRotes from '../routes';
import {AVAILABLE_ENVIROMENTS} from '../constants';


export default (app, dirname) => {


    app.use('*', express.static(path.join(dirname, '..', 'build')));

    app.use('/node_modules', express.static(path.join(dirname, '..', 'node_modules')));


    // parse application/json and look for raw text
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({type: 'application/json'}));
    app.use(formData.parse());

    // initialize routers
    bootRotes(app);

    if (process.env.NODE_ENV === AVAILABLE_ENVIROMENTS.DEVELOPMENT) {
        expressBootDev(app, dirname);
    } else {
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });
    }

}