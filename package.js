Package.describe({
  name: 'hpx7:async-template-helpers',
  summary: 'Use asynchronous functions inside your template helpers',
  version: '0.0.2',
  git: 'https://github.com/hpx7/meteor-async-template-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');
  api.use('reactive-var', 'client');
  api.addFiles('async-template-helpers.js', 'client');
  api.export('RegisterAsyncHelper', 'client');
});
