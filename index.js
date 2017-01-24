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
    var query = _.defaultsDeep(req.query, opts);
    console.log(query, opts, req.query);
    if(Object.keys(query).length === 0) {
      return next();
    }
    req.query = query;
    return next();
  };
};
