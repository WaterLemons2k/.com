'use strict';

const QRCODE_HOSTNAME = 'qrcode-2cc.pages.dev';
location.href = rootingLocationWithHostname(QRCODE_HOSTNAME);

/**
 * Returns a new URL string with the specified hostname and root path based on location.href.
 * @param {string} hostname - The hostname of the new URL.
 * @returns {string} - The new URL string based on location.href.
 */
function rootingLocationWithHostname(hostname) {
  const ROOT_PATH = '/';
  const url = new URL(location.href);

  url.hostname = hostname;
  url.pathname = ROOT_PATH;

  return url.href;
}
