// constants
const TRAILING_SLASH_RE = /\/$/;

function HWebsiteClient(options) {
  if (!options.serverURI) { throw new TypeError('serverURI is required'); }

  this.serverURI = options.serverURI.replace(TRAILING_SLASH_RE, '');
}

/**
 * Expose errors
 * @type {Object}
 */
HWebsiteClient.errors = HWebsiteClient.prototype.errors = require('./errors');

Object.assign(HWebsiteClient.prototype, require('./aux'));
Object.assign(HWebsiteClient.prototype, require('./methods/public'));
Object.assign(HWebsiteClient.prototype, require('./methods/shared'));

module.exports = HWebsiteClient;
