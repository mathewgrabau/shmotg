/*!
*  filename: ej.checkbox.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.checkbox.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html CheckBox elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/

(function ($, ej, undefined) {
    /**
   * @namespace ej
   * @class ejCheckBox
   * @requires jQuery
   * @requires ej.core.js
   * @requires ej.checkbox.js
   * @classdesc Custom Design for Html CheckBox Control.
   * @example 
   
   *&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
   * // Create Checkbox  
   * $("#chkbox").ejCheckBox(); 
   * &lt;/script&gt;
   */

    ej.widget("ejCheckBox", "ej.CheckBox", {
        _rootCSS: "e-checkbox",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,

        // default model
        defaults: {
            /**
			* Specifies the id atribute of the Checkbox.
			* @default null
			* @type {String}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set id API value during initialization  
			* $("#chkbox").ejCheckBox({  id: "sync" });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            id: null,
            /**
			* Specifies the name attribute of the Checkbox.
			* @default null
			* @type {String}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set name API value during initialization  
			* $("#chkbox").ejCheckBox({  name: "sync" });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            name: null,
            /**
			* Specifies the value attribute of the Checkbox.
			* @default null
			* @type {String}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set value API value during initialization  
			* $("#chkbox").ejCheckBox({ value: "Hello World"});
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            value: null,
            /**
			* Specifies the check attribute of the Checkbox.
			* @default false
			* @type {Boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set check API value during initialization  
			* $("#chkbox").ejCheckBox({ checked:  true });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            checked: null,
            /**
			* Specifies the checkbox control state.
			* @default true
			* @type {boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To Enable checkbox on initialization. 
			* //To set width API value 
			* $("#chkbox").ejCheckBox ({ enabled: true });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            enabled: true,
            /**
			* Specifies the enable or disable Tri-State for checkbox control.
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* // Specifies to enable or disable Tri-State option checkbox while initialization. 
			* //To set enableTriState API value 
			* $("#chkbox").ejCheckBox({  enableTriState: true });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            enableTriState: false,
            /**
			* Specify the rounded corner to checkbox
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To Set the rounded corner during initialization.
			* $("#chkbox").ejCheckBox({ showRoundedCorner: true });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            showRoundedCorner: false,
            /**
			* Specifies the persist property for Checkbox while initialization. The persist API save current model value to browser cookies for state maintains. While refreshing the Checkbox control page the model value apply from browser cookies. 
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set persist API value 
			* $("#chkbox").ejCheckBox({ enablePersistence : false });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            enablePersistence: false,
            /**
			* Specify the CSS class to CheckBox to achieve custom theme.
			* @default ""
			* @type {string}
			* @example
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt;  
			* // Set the root class for Checkbox control theme. This cssClass API helps to use custom skinning option for Checkbox control. By defining the root class using this API, we need to include this root class in CSS. 			
			* $("#chkbox").ejCheckBox({cssClass: "gradient-lime"}); 
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            cssClass: "",
            /**
			* Specifies the text content for CheckBox.
			* @default ""
			* @type {string}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   
   * &lt;script&gt; 
			* // To set text API value 
			* $("#chkbox").ejCheckBox({ text: "Hello World"});
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            text: "",
            /**
			* Specify the Right to Left direction to CheckBox
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* // Set the RTL during initialization.
			* $("#chkbox").ejCheckBox({  enableRTL : true });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            enableRTL: false,
            /**
			* Specify the idprefix value to be added before the current id of the checkbox.
			* @default "ej"
			* @type {String}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* // To set  idPrefix  API value
			* $("#chkbox").ejCheckBox ({  idPrefix : "ej" });
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            idPrefix: "ej",
            /**
			* Specifies the size of the CheckBox.See {@link CheckboxSize}
			* @default "mini"
			* @type {enum}
			* @example 
			*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			* //To set size API value during initialization
			* $("#chkbox").ejCheckBox({  size: "medium"});
			* &lt;/script&gt;
			* @memberof ejCheckBox
			* @instance
			*/
            size: "",
            /**
           * Specifies the State of ChecKBox.See {@link CheckState}
           * @default null
           * @type {enum}
           * @example 
           *&lt;input type="checkbox" id="chkbox"/&gt;
           *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
           * &lt;script&gt; 
           * //To set CheckState API value during initialization
           * $("#chkbox").ejCheckBox({ enableTriState: true , checkState:"indeterminate"});
           * &lt;/script&gt;
           * @memberof ejCheckBox
           * @instance
           */
            checkState: null,
            /**
            * Fires before the Checkbox is going to changed its state successfully
            * @event
            * @name ejCheckBox#beforeChange
            * @param {Object} argument Event parameters from CheckBox     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {boolean} argument.model returns the Checkbox model
            * @param {boolean} argument.type returns the name of the event
            * @param {boolean} argument.data.element returns the current element
            * @param {boolean} argument.data.isChecked  returns the status of the element
            * @example 
            *&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt;  
            * //To create beforeChange event for checkbox
            * $("#chkbox").ejCheckBox({
            * beforeChange: function (args) {}
            * });
            * &lt;/script&gt;
            * @memberof ejCheckBox
            * @instance
            */
            beforeChange: null,
            /**
            * Fires when the Checkbox state  is changed successfully
            * @event
            * @name ejCheckBox#change
            * @param {Object} argument Event parameters from CheckBox
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {boolean} argument.model returns the Checkbox model
            * @param {boolean} argument.type returns the name of the event
            * @param {boolean} argument.data.element returns the current element
            * @param {boolean} argument.data.isChecked  returns the status of the element
            * @example
            *&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
            * // change event for checkbox
            * $("#chkbox").ejCheckBox({
            * change: function (args) {}
            * });
            * &lt;/script&gt;
            * @memberof ejCheckBox
            * @instance
            */
            change: null,
            /**
			 * Fires when the Checkbox state  is created successfully
			 * @event
			 * @name ejCheckBox#create
			 * @param {Object} argument Event parameters from CheckBox
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
             * @param {boolean} argument.model returns the Checkbox model
             * @param {boolean} argument.type returns the name of the event             
			 * @example 
			 *&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			 * //To create event for checkbox
             * $("#chkbox").ejCheckBox({
             *   create: function (args) {}
             * });    
             * &lt;/script&gt;
			 * @memberof ejCheckBox
			 * @instance
			 */
            create: null,
            /**
			 * Fires when the Checkbox state  is destroyed successfully
			 * @event
			 * @name ejCheckBox#destroy
			 * @param {Object} argument Event parameters from CheckBox
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
             * @param {boolean} argument.model returns the Checkbox model
             * @param {boolean} argument.type returns the name of the event             
			 * @example 
			 *&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
			 * //To create destroy event for checkbox
             * $("#chkbox").ejCheckBox({
             * destroy: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejCheckBox
			 * @instance
			 */
            destroy: null

        },
        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            id: "string",
            name: "string",
            checked: "boolean",
            enablePersistence: "boolean",
            enableTriState: "boolean",
            size: "enum",
            checkState: "enum",
            enabled: "boolean",
            idPrefix: "string"
        },
        /**
        * Create the CheckBox widget
        * @private
        */

        // constructor function
        _init: function () {
            this._setValue();
            this._renderControl();
            if (this.model.enabled)
                this._wireEvents();
            this._setEnabled(this.model.enabled);
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */

        _setModel: function (options) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var prop in options) {
                switch (prop) {
                    case "checked":
                        this._isChecked = options[prop];
                        if (this._isChecked)
                            this._checked();
                        else
                            this._unChecked();
                        break;
                    case "enableTriState":
                        if (options[prop]) {
                            this._setIndeterminate(this._indeterminateState);
                        }
                        break;
                    case "checkState":
                        if (this.model.enableTriState) {
                            this.model.checkState = options[prop];
                            this._changeState(this.model.checkState);
                        }
                        break;
                    case "cssClass": this._changeSkin(options[prop]); break;
                    case "enableRTL":
                        if (options[prop])
                            $("#" + this.model.idPrefix + this.model.id + "_wrapper").addClass("e-rtl");
                        else
                            $("#" + this.model.idPrefix + this.model.id + "_wrapper").removeClass("e-rtl");
                        break;
                    case "text": this._setText(options[prop]); break;
                    case "id": this._setIdAttr(options[prop]); break;
                    case "name": this.chkbx.attr('name', options[prop]); break;
                    case "value": this.chkbx.attr('value', options[prop]); break;
                    case "size": this._setSize(options[prop]); break;
                    case "showRoundedCorner": this._setRoundedCorner(options[prop]); break;
                    case "enabled": this._setEnabled(options[prop]); break;
                }
            }
        },
        /**
        * destroy the CheckBox widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* // Create Checkbox instance
		* var chkObj = $("#chkbox").data("ejCheckBox");
		* chkObj.destroy();// Destroy the CheckBox control
		* &lt;/script&gt;
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* //To destroy the CheckBox control
		* $("#chkbox").ejCheckBox("destroy");
		* &lt;/script&gt;
		* @memberof ejCheckBox
		* @instance
         */

        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.chkbx.removeClass("e-checkbox e-input");
            this.chkbx.insertBefore(this.element);
            this.element.remove();
            this.element = this.chkbx;
        },
        /**
         * To configure the custom theme for checkbox using cssClass property		
		 * @private
         */
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
                $("#" + this.model.idPrefix + this.model.id + "_wrapper").removeClass(this.model.cssClass).addClass(skin);
            }
        },
        /**
         * To configure the Value		
		 * @private
         */
        _setValue: function () {
            this._indeterminateState = false;
            if (this.model.id == null)
                this.model.id = this.element.attr('id');
            if (!this.model.id)
                this.model.id = this.element.attr('name');
            !ej.isNullOrUndefined(this.element.attr('name')) && (this.model.name = this.element.attr('name'));
            !ej.isNullOrUndefined(this.element.attr('value')) && (this.model.value = this.element.attr('value'));
            this._isChecked = this.element.attr('checked') == 'checked' ? true : false;
            this._isChecked = this.model.checked == null ? this._isChecked : this.model.checked;
        },
        /**
         * To configure the Size of the CheckBox		
		 * @private
         */
        _setSize: function (val) {
            if (val == ej.CheckboxSize.Medium)
                this.innerdiv.removeClass('e-chkbox-small').addClass('e-chkbox-medium');
            else
                this.innerdiv.removeClass('e-chkbox-medium').addClass('e-chkbox-small');
        },
        /**
         * To configure the showRoundedCorner of the CheckBox		
		 * @private
         */
        _setRoundedCorner: function (val) {
            if (val)
                this.span.addClass("e-corner-all");
            else
                this.span.removeClass("e-corner-all");
        },
        /**
         * To configure the Enable status of the CheckBox		
		 * @private
         */
        _setEnabled: function (val) {
            if (val) {
                this.enable();
            } else {
                this.disable();
            }
        },
        _setCheckBoxState: function () {
            if (this.model.enableTriState) {
                if (this.model.checkState == "indeterminate")
                    this._indeterminateState = true
                else if (this.model.checkState == "check") {
                    this.model.checked = true;
                    this._isChecked = this.model.checked == null ? this._isChecked : this.model.checked;
                }
                else if (this.model.checkState == "uncheck") {
                    this.model.checked = false;
                    this._isChecked = this.model.checked == null ? this._isChecked : this.model.checked;
                }
            }
        },
        /**
         * Render Section For CheckBox control		
		 * @private
         */
        _renderControl: function () {
            this._setCheckBoxState();
            this.maindiv = ej.buildTag("span.e-chkbox-wrap e-widget " + this.model.cssClass + "#" + this.model.idPrefix + this.model.id, "", {}, { "role": "checkbox", tabindex: 0 });
            this.innerdiv = $('<div></div>');
            this._setSize(this.model.size);
            this.span = $('<span></span>');
            this.spanImg = $('<span class="e-chk-image"></span>').attr("role", "presentation");
            this.element.addClass("e-input");
            this.element.attr("id", this.model.id);
            //this.span.addClass("e-innerspan");
            this._setRoundedCorner(this.model.showRoundedCorner);
            if (this._isChecked) {
                this.spanImg.addClass("e-chk-activeicon");
                this.span.addClass("e-chk-act");
                this.maindiv.attr({ "aria-checked": true });
            }
            else {
                this.span.addClass("e-chk-inact");
                this.maindiv.attr({ "aria-checked": false });
            }
            this.span.append(this.spanImg);
            this.innerdiv.append(this.span);
            this.maindiv.insertBefore(this.element);
            this.maindiv.append(this.element);
            this.maindiv.append(this.innerdiv);
            this._setTextWrapper(this.model.text);
            this.chkbx = this.element;
            this.element = this.maindiv;
            if (this.model.enableTriState == true && this._indeterminateState == true)
                this._setIndeterminate(this._indeterminateState);
        },
        _changeState: function (state) {
            if (state == "indeterminate") {
                this.spanImg.removeClass("e-chk-activeicon").addClass("e-chk-indetericon");
                this.span.removeClass("e-chk-act").removeClass("e-chk-inact").addClass("e-chk-indeter");
                this.maindiv.attr({ "aria-checked": "mixed" });
                this.element.find('input').prop('enableTriState', true);
                this.model.checked = null;
            }
            else if (state == "check") {
                this.spanImg.removeClass("e-chk-indetericon").addClass("e-chk-activeicon");
                this.span.removeClass("e-chk-act").removeClass("e-chk-inact").removeClass("e-chk-indeter").addClass("e-chk-act");
                this.maindiv.attr({ "aria-checked": true });
            }
            else if (state == "uncheck") {
                this.spanImg.removeClass("e-chk-activeicon").removeClass("e-chk-indetericon");
                this.span.removeClass("e-chk-act").removeClass("e-chk-indeter").addClass("e-chk-inact");
                this.maindiv.attr({ "aria-checked": false });
            }
        },
        /**
        * To configure checkbox tri-state type		
        * @private
        */
        _setIndeterminate: function (indeter) {
            if (indeter) {
                this.spanImg.removeClass("e-chk-activeicon").addClass("e-chk-indetericon");
                this.span.removeClass("e-chk-act").removeClass("e-chk-inact").addClass("e-chk-indeter");
                this.maindiv.attr({ "aria-checked": "mixed" });
                this.element.find('input').prop('enableTriState', true);
                this.model.checked = null;
            }
            else {
                this.element.find(".e-chk-indeter").removeClass("e-chk-indeter");
                this.element.find(".e-chk-image").removeClass("e-chk-indetericon");
                this.element.find('input').removeAttr('enableTriState');
                this.element.find('input').prop('enableTriState', false);
                if (this.model.checked)
                    this._checked();
                else
                    this._unChecked();
            }
        },
        /**
         * To configure checkbox textwrapper		
		 * @private
         */
        _setTextWrapper: function (val) {
            if (val != "") {
                //this.textWrapDiv = ej.buildTag("div.e-chkbox-wrap " + this.model.cssClass + "#" + this.model.idPrefix + this.model.id + "_wrapper");
                //this.maindiv.wrap(this.textWrapDiv);
                this.txtSpan = ej.buildTag("div.e-text", val);
                this.maindiv.append(this.txtSpan);
                if (this.model.enableRTL)
                    $("#" + this.model.idPrefix + this.model.id + "_wrapper").addClass("e-rtl");
            }
        },
        /**
         * To configure checkbox text value
		 * @private
         */
        _setText: function (val) {
            if ((this.model.text == "") && (val != "")) {
                this._setTextWrapper(val);
            } else {
                this.txtSpan.html(val);
            }
        },
        /**
         * To configure checkbox ID attribute value
		 * @private
         */
        _setIdAttr: function (val) {
            $("#" + this.model.idPrefix + this.model.id + "_wrapper").attr('id', this.model.idPrefix + val + "_wrapper");
            this.chkbx.attr('id', val);
        },
        /**
        * Wiring the events to checkbox control
        * @private
        */
        _wireEvents: function () {
            this._on(this.element, "click", this._checkedHandler);
            this._on(this.element, "focus", this._focusIn);
            this._on(this.element, "focusout", this._focusOut);
        },
        /**
         * Unwiring the events to checkbox control
		 * @private
         */

        _unWireEvents: function () {
            this._off(this.element, "click");
            this._off(this.element, "focus");
            this._off(this.element, "focusout");
        },
        _focusIn: function (evt) {
            $(this.element).addClass("e-focus");
            $(this.element).bind("keypress", $.proxy(this._checkUnCheck, this));
        },
        _focusOut: function (evt) {
            $(this.element).removeClass("e-focus");
            $(this.element).unbind("keypress", $.proxy(this._checkUnCheck, this));
        },
        _checkUnCheck: function (evt) {
            //Space bar to check and uncheck
            if (evt.keyCode == 32) {
                evt.preventDefault();
                this._checkedHandler();
            }
        },
        _checkedHandler: function (evt) {
            var data = { isChecked: this._isChecked, event: evt };
            if (true == this._trigger("beforeChange", data)) {
                return false;
            }
            if (this.element.find("span:first").hasClass("e-chk-inact")) {
                this._checked();
                this._isChecked = this.model.checked = true;
                if (this.model.enableTriState) {
                    this._indeterminateState = true;
                }
            }
            else if (this.element.find("span:first").hasClass("e-chk-act")) {
                if ((this.model.enableTriState == true) && (this._indeterminateState == true)) {
                    this._setIndeterminate(true);
                    this._isChecked = this.model.checked = true;
                } else {
                    this._unChecked();
                    this._isChecked = this.model.checked = false;
                }


            }
            else if (this.element.find("span:first").hasClass("e-chk-indeter")) {
                this._isChecked = this.model.checked = false;
                this._setIndeterminate(false);
                this._indeterminateState = false;
            }
            var data = { isChecked: this._isChecked, event: evt };
            this._trigger("change", data);
            return true;
        },
        /**
         * Section For handling the Check event handler
		 * @private
         */

        _checked: function () {
            this.element.find("span:first").removeClass("e-chk-inact").addClass("e-chk-act");
            this.element.find(".e-chk-image").removeClass("e-chk-indetericon").addClass("e-chk-activeicon");
            this.maindiv.attr({ "aria-checked": true });
            this.element.find('input[type=checkbox]').prop('checked', true);
            this.model.checkState = "check";
        },
        /**
         * Section For handling the Uncheck event handler
		 * @private
         */

        _unChecked: function () {
            this.element.find("span:first").removeClass("e-chk-act").addClass("e-chk-inact");
            this.maindiv.attr({ "aria-checked": false });
            this.element.find(".e-chk-image").removeClass("e-chk-activeicon").removeClass("e-chk-indetericon");
            this.element.find('input[type=checkbox]').removeAttr('checked');
            this.model.checkState = "uncheck";
        },
        /**
        * To disable the checkbox
		* @return jQuery
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* // Create Checkbox instance 
		* var chkObj = $("#chkbox").data("ejCheckBox");
		* chkObj.disable(); //disables the CheckBox
		* &lt;/script&gt;
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* //To disable the CheckBox
		* $("#chkbox").ejCheckBox("disable");
		* &lt;/script&gt;
		* @memberof ejCheckBox
		* @instance
        */

        disable: function () {
            if (!this.element.hasClass("e-disable")) {
                this.element.addClass("e-disable").attr("aria-disabled", true);
                this._unWireEvents();
                this.model.enabled = false;
            }
        },
        /**
        * To enable the checkbox
		* @return jQuery
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* // Create Checkbox instance 
		* var chkObj = $("#chkbox").data("ejCheckBox");
		* chkObj.enable(); // enables the CheckBox
		* &lt;/script&gt;
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* //To enable the CheckBox
		* $("#chkbox").ejCheckBox("enable");
		* &lt;/script&gt;
		* @memberof ejCheckBox
		* @instance
        */
        enable: function () {
            if (this.element.hasClass("e-disable")) {
                this.element.removeClass("e-disable").attr("aria-disabled", false);
                this._wireEvents();
                this.model.enabled = true;
            }
        },
        /**
        * To Check the status of checkbox
		* @return jQuery
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* // Create Checkbox  instance
		* var chkObj = $("#chkbox").data("ejCheckBox");
		* chkObj.isChecked(); // check the status of checkbox
		* &lt;/script&gt;
		* @example 
		*&lt;input type="checkbox" id="chkbox"/&gt;
   *&lt;label for="chkbox"&gt;Experienced&lt;/label&gt;
   * &lt;script&gt; 
        * $("#chkbox").ejCheckBox();
		* //To check the status of checkbox
		* $("#chkbox").ejCheckBox("isChecked");
		* &lt;/script&gt;
		* @memberof ejCheckBox
		* @instance
        */
        isChecked: function () {
            if ((this._isChecked != null) && (this._isChecked != undefined))
                return this._isChecked;
        }
    });
    /**
	 * Enum for various checkbox sizes	 
	 * @enum {string}
	 * @global 
	 */
    ej.CheckboxSize = {
        /**  Creates checkbox with inbuilt small size height, width specified */
        Small: "small",
        /**  Creates checkbox with inbuilt medium size height, width specified */
        Medium: "medium"
    };
    /**
    * Enum for various checkbox states	 
    * @enum {string}
    * @global 
    */
    ej.CheckState = {
        /**  Specifies the Check attribute of the Checkbox */
        Check: "check",
        /**  Specifies the Uncheck attribute of the Checkbox */
        Uncheck: "uncheck",
        /**  Specifies the Indeterminate state of the Checkbox */
        Indeterminate: "indeterminate"
    };
})(jQuery, Syncfusion);;;