Package.describe({
  name: 'hpx7:async-template-helpers',
  summary: 'Use asynchronous functions inside your template helpers',
  version: '0.4.0',
  git: 'https://github.com/hpx7/meteor-async-template-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.4');
  api.use(['templating', 'underscore', 'reactive-var'], 'client');
  api.addFiles('async-template-helpers.js', 'client');
  api.export('RegisterAsyncHelper', 'client');
});
