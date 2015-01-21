RegisterAsyncHelper = function (template, helperName, fn) {
  var helper = {};
  helper[helperName] = function () {
    return Template.instance()[helperName].get();
  };
  template.helpers(helper);

  template.created = function () {
    var self = this;
    self[helperName] = new ReactiveVar();
    self.autorun(function () {
      fn(function (value) {
        self[helperName].set(value);
      });
    });
  };
};
