// constants
const TRAILING_SLASH_RE = /\/$/;

function PrivateHWebsiteClient(options) {
  if (!options.serverURI) { throw new TypeError('serverURI is required'); }

  this.serverURI = options.serverURI.replace(TRAILING_SLASH_RE, '');
}

/**
 * Expose errors
 * @type {Object}
 */
PrivateHWebsiteClient.errors = PrivateHWebsiteClient.prototype.errors = require('./errors');

Object.assign(PrivateHWebsiteClient.prototype, require('./aux'));
Object.assign(PrivateHWebsiteClient.prototype, require('./methods/private'));
Object.assign(PrivateHWebsiteClient.prototype, require('./methods/shared'));

module.exports = PrivateHWebsiteClient;
