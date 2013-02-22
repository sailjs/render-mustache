require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'render-mustache', location: '../../../..', main: 'render-mustache' },
    { name: 'mocha-cloud', location: '../support', main: 'mocha-cloud' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
