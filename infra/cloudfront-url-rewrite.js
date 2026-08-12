// CloudFront Function (viewer request) — paste this into a CloudFront
// Function and associate it with the distribution's default cache
// behavior. Next.js's static export produces flat files like
// about.html and services/audio-visual.html rather than directories
// with index.html, so S3/CloudFront needs this rewrite to resolve
// clean URLs like /about or /services/audio-visual.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === "/") {
    request.uri = "/index.html";
    return request;
  }

  // Already has a file extension (e.g. /images/logo.png, /sitemap.xml)
  if (uri.includes(".")) {
    return request;
  }

  // Trailing slash: /work/ -> /work.html would be wrong; strip it first
  if (uri.endsWith("/")) {
    uri = uri.slice(0, -1);
  }

  request.uri = uri + ".html";
  return request;
}
