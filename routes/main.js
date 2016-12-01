

module.exports = function(server, serverInfo) {
  /**
 * @api {get} /status Server health
 * @apiGroup Util
 * @apiDescription for checking server
 */
  server.get('/status', function(req, res, next) {
      const statusMessage = {
        server: serverInfo
      };
      res.send(statusMessage);
    });

  server.get('/', (req, res, next) => {
   const result = {name: "beckend server", status: "working"};
    res.send(result);
  });
}
