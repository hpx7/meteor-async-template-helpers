RegisterAsyncHelper = function (options, fn) {
  var template = options.template, helperName = options.helperName, shared = options.shared;

  var value = new ReactiveVar();

  var setupAutorun = function () {
    Template.instance().autorun(function () {
      fn(function (result) {
        value.set(result);
      });
    });
  }

  template.created = shared ? _.once(setupAutorun) : setupAutorun;

  var helper = {};
  helper[helperName] = function () {
    return value.get();
  };
  template.helpers(helper);
};
