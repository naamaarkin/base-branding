var Cookies = require('js-cookie');
const settings = require('./settings');
const authCookieName = 'ALA-Auth';
const loginClass = 'signedIn';
const logoutClass = 'signedOut';

if (document.location.host === settings.mainDomain || document.location.host === 'localhost:3333') {
  if (settings.isDevel) console.log("We are in the main url, let's see if we are authenticated");
  // As this page is plain html, we have to detect if with are authenticated via Cookies
  let authCookie = Cookies.get(authCookieName);
  var in30Minutes = 1/48;

  if (typeof authCookie === 'undefined' && settings.isDevel) {
    console.log("We set a test cookie if we are in development");
    Cookies.set(authCookieName, '/', { expires: in30Minutes });
  }

  if (typeof authCookie !== 'undefined') {
    // https://github.com/AtlasOfLivingAustralia/ala-bootstrap3/blob/master/grails-app/taglib/au/org/ala/bootstrap3/HeaderFooterTagLib.groovy
    if (settings.isDevel) console.log("Auth cookie present so logged in");
    $("#drawer-nav-menu").removeClass("signedOut").addClass("signedIn");
  } else {
    if (settings.isDevel) console.log("No auth cookie not present so not-logged in");
    $("#drawer-nav-menu").removeClass("signedIn").addClass("signedOut");
  }
}
else {
  if (settings.isDevel) console.log("We aren't in the main url");
}
