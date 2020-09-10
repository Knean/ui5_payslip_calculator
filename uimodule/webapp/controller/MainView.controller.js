sap.ui.define([
  "com/myorg/helloWorld/controller/BaseController",
  "sap/base/Log",
  "sap/ui/core/mvc/Controller"
], function (Controller, log) {
  "use strict";
  return Controller.extend("com.myorg.helloWorld.controller.MainView", {

    onInit: function () {
      var model = this.getView().getModel("stuff"); //genious name for a data model
      this.getView().byId("empTable").setModel(model);
      log.info(model.getProperty("/employees"));
    },

    onSubmit: function () {
      var model = this.getView().getModel("stuff");
      var form = JSON.parse(JSON.stringify(model.getProperty("/form")));//ugly way to make a copy
      form.mo_salary = form.salary / 12;
      model.getProperty("/employees").push(form);
      log.info(model.getProperty("/employees"));
      log.info(this.getView().byId("empForm"));
      this.getView().byId("empTable").getModel().updateBindings(true);
    }
  });
});
