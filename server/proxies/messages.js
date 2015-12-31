/*jshint node:true*/
var proxyPath = '/api';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    // must delete otherwise the target server would match the wrong host
    delete req.headers.host;

    // include root path in proxied request
    req.url = req.url.replace('/api', '/');
    proxy.web(req, res, { target: 'http://private-227b9-jsonapifizzbuzz.apiary-mock.com/' });
  });
};
