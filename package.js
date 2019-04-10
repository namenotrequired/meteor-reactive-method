Package.describe({
  name: 'bartoftutormundi:reactive-method',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'The old and trusted simple:reactive-method, fixed for meteor 1.8 / lodash 4',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/namenotrequired/meteor-reactive-method',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(["tracker", "meteor", "ddp", "ejson"]);

  api.addFiles('reactive-method.js');

  api.export("ReactiveMethod");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['simple:reactive-method', 'test-helpers', 'reactive-var']);
  api.addFiles('reactive-method-tests.js');
});
