#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
var fs	= require('fs');

/** set path public */
app.use(express.static(__dirname + '/public'));

/** connection to local or openshift */
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port,ip);


