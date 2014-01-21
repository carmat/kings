module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'app/assets/lib/angular.min.js',
      'test/lib/angular/angular-mocks.js',
      'app/assets/js/**/*.js',
      'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
