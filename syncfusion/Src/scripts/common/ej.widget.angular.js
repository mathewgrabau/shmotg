/*!
*  filename: ej.widget.angular.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function ($, ej, wd, ang, undefined) {
    'use strict';
    var module = ang.module("ejangular", []);

    var eA = {
        firstCap: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        generatePropMap: function (obj, mapObj, prepend, preVal) {
            var map = mapObj || {}, field, tmp;
            if (preVal)
                preVal += ".";
            else preVal = "";
            prepend = prepend || "";
            for (var prop in obj) {
                field = prepend + eA.firstCap(prop.toLowerCase());

                if (ej.isPlainObject(obj[prop])) {
                    eA.generatePropMap(obj[prop], map, field, preVal + prop);
                }

                map[field] = preVal + prop;
            }
            return map;
        },
        getModel: function (ctrl, attrs, scope, watches, twoWays, isEdit) {
            var model = {}, t = "", cMap = map[ctrl], value;
            for (var att in attrs.$attr) {
                if (att[0] === "e" && /[A-Z]/.test(att[1])) {
                    value = attrs[att];
                    t = cMap[att.slice(1)];
                    if (!t)
                        t = att.slice(1);
                    if (+value || /^['"].+['"]$/.test(value) || !(value.split('.')[0] in scope)) {
                        ej.createObject(t, eA.processData(value.replace(/^['"]|['"]$/g, '')), model)
                        continue;
                    }
                    watches.push({ key: value, value: t });
                    if (twoWays.indexOf(t) !== -1 && !(isEdit && att[1] === "V" && att === "eValue"))
                        value = eA.addTwoWays(value, scope, ej.getObject(value, scope));
                    else
                        value = scope[value];
                    ej.createObject(t, value, model);
                }
            }
            return model;
        },
        addTwoWays: function (prop, scope, value) {
            return function (newVal) {
                if (ej.isNullOrUndefined(newVal))
                    return value;
                value = newVal;
                ej.createObject(prop, value, scope);
                eA.applyScope(scope);
            };
        },
        processData: function (value) {
            return value === "true" ? true :
                value === "false" ? false :
                +value + "" === value ? +value : value;
        },
        addWatches: function (scope, watches, ctl, raise) {
            var watch;
            for (var i = 0; i < watches.length; i++) {
                watch = "$watch";
                if (scope[watches[i].key] instanceof Array)
                    watch = "$watchCollection";
                scope[watch](watches[i].key, ej.proxy(raise, scope, { control: ctl, watch: watches[i] }));
            }
        },
        raise: function (e, val, old) {
            if (val === old) return;
            var value = ej.getObject(e.watch.value, e.control.model);
            if (typeof value === "function")
                value = value();

            if (value === val && !(value instanceof Array))
                return;
            if (e.control.observables.indexOf(e.watch.value) !== -1 && !(e.control.type === "editor" && e.watch.value === "value"))
                val = eA.addTwoWays(e.watch.key, this, val);
            e.control.option(e.watch.value, val);
        },
        angToEjProp: function (prop, map) {
            for (var p in map) {
                if (map[p] === prop)
                    return p;
            }
        },
        modelChange: function (scope, key) {
            this.option("change", function (e) {
                if (e.value === scope[key])
                    return;
                scope[key] = e.value;
                eA.applyScope(scope);
            });
        },
        getDirectiveName: function (name) {
            if (name.length < 4) return "";
            var startIndex = name[2] === "m" ? 4 : 3;
            return name.slice(0, startIndex) + name.slice(startIndex).toLowerCase();
        },
        applyScope: function (scope) {
            setTimeout(function () {
                scope.$apply();
            }, 0);
        }
    };

    var defaultSetting = {
        transclude: {
            transclude: true,
            template: function () {
                return "<div ng-transclude></div>";
            }
        }
    };

    var generateDirective = function (name, proto) {
        map[name] = eA.generatePropMap(proto.defaults);
        proto.observables = proto.observables || [];
        var settings = $.extend({}, defaultSetting[proto.type] || {}, proto.angular);
        module.directive(eA.getDirectiveName(name), function () {
            return $.extend({
                restrict: 'CEA',
                link: function (scope, element, attrs) {
                    var watches = [], isEdit = proto.type === "editor", model = eA.getModel(name, attrs, scope, watches, proto.observables, isEdit),
                        instance = $(element)[name](model).data(name);

                    eA.addWatches(scope, watches, instance, eA.raise);

                    if (isEdit) {
                        eA.modelChange.apply(instance, [scope, attrs["eValue"]]);
                    }

                    scope.$on("$destroy", function () {
                        instance.destroy();
                        instance = undefined;
                    });
                }
            }, settings);
        });
    }

    var map = {};
    var widgets = wd.registeredWidgets;
    for (var name in widgets) {
        generateDirective(widgets[name].name, widgets[name].proto);
    }
})(window.jQuery, window.Syncfusion, window.Syncfusion.widget, window.angular);;