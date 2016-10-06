// third-party
const Bluebird = require('bluebird');

// own
const errors = require('../errors');

exports.resolve = function (authToken, domain) {
  if (!authToken) { return Bluebird.reject(new errors.Unauthorized()); }

  if (!domain) {
    return Bluebird.reject(new errors.InvalidOption('domain', 'required', 'domain is required'));
  }

  return this._authReq(
    'GET',
    '/website/' + domain + '/resolve',
    {
      authToken: authToken,
    }
  );
};
