/*!
*  filename: ej.widget.ko.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function ($, ej, wd, ko, undefined) {
    'use strict';

    var eKO = {
        binder: function (element, valueAccessor, allBindings, viewModel, bindingContext, proto, name) {
            var evt = !$(element).data(name), value = koUnwrap(valueAccessor, proto["ob.ignore"], !evt), changeFn, modelVal;

            if (evt && proto.type === "editor" && ko.isObservable(value.value)) {
                modelVal = value.value;
                changeFn = eKO.modelChange(modelVal);
                value = $.extend({}, value, { value: value.value() });
            }
            $(element)[name](value);
            if (changeFn){
                modelVal.subscribe(eKO.valueChange($(element)[name]("model.change", changeFn).data(name)));
            }
        },
        modelChange: function (accessor) {
            return function (val) {
                accessor(val.value);
            };
        },
        valueChange: function(instance){
            return function (val) {
                instance.option("value", eKO.processData(val));
            };
        },
        processData: function (value) {
            return value === "true" ? true :
                value === "false" ? false :
                +value + "" === value ? +value : value;
        },

        bindKoHandler: function (name, proto) {
            proto["ob.ignore"] = [];
            [].push.apply(proto["ob.ignore"], proto.observables || []);

            ko.bindingHandlers[name] = {
                init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    //eKO.binder(element, valueAccessor, allBindings, viewModel, bindingContext, proto, name, "init");
                },
                update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    eKO.binder(element, valueAccessor, allBindings, viewModel, bindingContext, proto, name);
                }
            };
        }
    }

    var koUnwrap = function (valueAccessor, ignoreProps, removeIgnores, pre) {
        var val = ko.utils.unwrapObservable(valueAccessor), res = {};
        pre = pre || "";
        if (typeof val === "function")
            val = val();
        if (ej.isPlainObject(val)) {
            for (var prop in val) {
                if (ignoreProps.indexOf(pre + prop) === -1) {
                    res[prop] = ko.utils.unwrapObservable(val[prop]);

                    if (ej.isPlainObject(res[prop]) || ko.isObservable(res[prop])) {
                        res[prop] = koUnwrap(res[prop], ignoreProps, removeIgnores, pre + prop + ".");
                    }
                } else {
                    if (removeIgnores)
                        continue;
                    res[prop] = val[prop];
                }
            }
        }
        return res;
    }

    var widgets = wd.registeredWidgets;
    for (var name in widgets) {
        eKO.bindKoHandler(widgets[name].name, widgets[name].proto);
    }

    ej.extensions.ko = {
        subscriptions: {},
        register: function (value, field, instance) {
            if (!window.ko || !ko.isObservable(value))
                return value;

            ej.widget.observables.subscriptions[field] = value.subscribe(ej.proxy(ej.widget.observables.raise, { instance: instance, field: field }));
            return value;
        },
        raise: function (value) {
            if (this.instance["ob.values"][this.field] !== value) {
                this.instance.option(this.field, ej.extensions.modelGUID, true);
                this.instance["ob.values"][this.field] = value;
            }
        }
    };

    ej.widget.observables = ej.extensions.ko;
})(window.jQuery, window.Syncfusion, window.Syncfusion.widget, window.ko);;