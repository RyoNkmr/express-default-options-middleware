var _ = require('lodash');

/**
 * Express Default Options Middleware
 *
 * the middleware, merge default options to request query
 *
 * @param {object} [options]
 * @return {Function} middleware
 * @public
 */

module.exports = function(options) {
  var opts = options || {};

  return function expressDefaultOptionsMiddleware(req, res, next) {
    var query = _.defaultsDeep({}, req.query, opts);
    req.query = _.mapValues(query, function(val, key){
      return JSON.stringify(val);
    });
    return next();
  };
};
