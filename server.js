'use strict';
require('dotenv').config({silent: true});

const bunyan = require('bunyan');
const restify = require('restify');
const log = bunyan.createLogger({name: "dev server"});
const serverInfo = {
  name: 'LocalServer',
  version: '1.0.0'
};
const server = restify.createServer(serverInfo);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());

require('./routes/main')(server, serverInfo);

server.listen(process.env.ROOT_SERVER_PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
});
