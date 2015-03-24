RegisterAsyncHelper = function (options, fn) {
  var template = options.template, helperName = options.helperName;

  var value = new ReactiveVar();

  template.onCreated(function () {
    this.autorun(function () {
      fn(function (result) {
        value.set(result);
      });
    });
  });

  var helper = {};
  helper[helperName] = function () {
    return value.get();
  };
  template.helpers(helper);
};
