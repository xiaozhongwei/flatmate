/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flatmate',
    environment: environment,
    baseURL: '/',
    apiRoot: 'api',
    locationType: 'auto',
    host: "http://192.168.0.50:8001",
    uploadHost: "http://192.168.0.50:8001/api/upload",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // host:"http://192.168.0.50:8001"
    }
  };

  ENV['ember-cli-toggle'] = {
    includedThemes: ['light','ios', 'default', 'flip'],
    excludedThemes: ['light'],
    defaultTheme: 'ios',  // defaults to 'default'
    defaultOff: 'No',    // defaults to 'Off'
    defaultOn: 'Yes'       // defaults to 'On'
  };


  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline' https://cdn.mxpnl.com", // Allow scripts from https://cdn.mxpnl.com
    'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://192.168.0.50:8001 https://api.mixpanel.com http://custom-api.local", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self' http://7u2qna.com1.z0.glb.clouddn.com",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  };

  ENV['simple-auth'] = {
    authenticationRoute: 'index',
    crossOriginWhitelist: ['*'],
    authorizer: 'simple-auth-authorizer:oauth2-bearer'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: 'http://192.168.0.50:8001/token'
  };

  if (environment === 'development') {
    ENV.host = "http://localhost:4200";
    uploadHost: "api/upload";
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'http://localhost:4200/token'
    };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = "http://121.40.221.53:4200";
    uploadHost: "api/upload";
    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'http://121.40.221.53:4200/token'
    };
  }



  return ENV;
};
