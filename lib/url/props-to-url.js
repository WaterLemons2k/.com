/** URL properties with setter */
const URLProps = {
  hash: '',
  host: '',
  hostname: '',
  password: '',
  pathname: '',
  port: '',
  protocol: '',
  search: '',
  username: ''
};

/**
 * Sets the properties of the given url.
 * 
 * @param {string | URL} url - The url to set. If the url is a string, it will be parsed to a URL.
 * @param {URLProps} props - The properties to be set.
 * @returns {URL} - The URL with the given properties.
 */
export default function propsToURL(url, props = URLProps) {
  if (!(url instanceof URL)) url = new URL(url);

  for (const prop of Object.keys(props)) {
    if (props[prop] !== '') url[prop] = props[prop];
  }

  return url;
}