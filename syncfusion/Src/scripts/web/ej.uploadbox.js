/*!
*  filename: ej.uploadbox.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.uploadbox.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Button elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/
/*global _comma_separated_list_of_variables_*/

(function ($, ej, undefined) {
    /**
* @namespace ej
* @class ejUploadbox
* @requires jQuery
* @requires jquery.easing.1.3.min.js
* @requires ej.core.js
* @requires ej.uploadbox.js
* @requires ej.dialog.js
* @requires ej.scroller.js
* @requires ej.draggable.js

* @classdesc Custom Design for Html Uploadbox control.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Create Uploadbox
* $('#uploadbox1').ejUploadbox(); 	
* &lt;/script&gt;
*/
    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejUploadbox", "ej.Uploadbox", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-uploadbox",

        // default model
        defaults: {
            /// <summary>This Contains default property of upload button </summary>
            /**		
* Specifies the text content for Uploadbox browse button while initialization.
* @default "Browse"
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  browseButtonText API value 
* 	$("#uploadbox1").ejUploadbox({ buttonText:{ browse:"Choose File", upload:"Upload the File", cancel:"Cancel the Upload"}});	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            buttonText: {
                /**		
                * Sets the text for the Browse button.
                * @alias ejUploadbox#buttonText->browse
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { browse: "Choose File" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                browse: "Browse",
                /**		
                * Sets the text for the Upload button inside the dialog popup.
                * @alias ejUploadbox#buttonText->upload
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { upload: "Upload the File" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                upload: "Upload",
                /**		
                * Sets the text for the Cancel button inside the dialog popup.
                * @alias ejUploadbox#buttonText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { cancel: "Cancel the Upload" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                cancel: "Cancel",
            },
            /**
            * Sets the text for the inside the dialog popup.
            * @default UploadBox
            * @type {string}
            * @example 
            * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //To set  dialogText API value during initialization
            * 	$("#uploadbox1").ejUploadbox({ dialogText:{title:"Upload File List",name:"File Name",size:"File Size",status:"File Status" }});
            * &lt;/script&gt;
            * @memberof ejUploadbox
            * @instance
            */
            dialogText: {
                /**		
                * Sets the title text dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { title: "Upload Box" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                title: "Upload Box",
                /**		
                * Sets the Name text for the dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { name: "Name" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                name: "Name",
                /**		
                * Sets the Size text for dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { size: "Size" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                size: "Size",
                /**		
                * Sets the Status text for dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { status: "Status" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                status: "Status"
            },
            /**		
* Sets the culture in uploadbox. 
* @default en-US
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  asyncUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ locale: vi-VN });	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            locale: "en-US",
            /**		
* Uploadbox supports both synchronous and asynchronous upload. This can be achieved by this property asyncUpload.
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  asyncUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ asyncUpload: false });	
 
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            asyncUpload: true,
            /**		
* Enables or disables Uploadbox based on boolean value.
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set enabled API value during initialization
* 	$("#uploadbox1").ejUploadbox({ enabled: false });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            enabled: true,
				/**		
				* Enables to select multiple files
				* @default false
				* @type {boolean}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set multipleFilesSelection API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ multipleFilesSelection: false });
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            	
            multipleFilesSelection: false,
            /**		
* Uploadbox supports auto uploading of files after the file selection is done.The auto upload is performed if autoUpload is set to true.   
* @default false
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set autoUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ autoUpload: true });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            autoUpload: false,
            /**		
* Specifies to display the file details of files while selected for uploading can be done when showFileDetails set to true.  
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set showFileDetails API value during initialization
* 	$("#uploadbox1").ejUploadbox({ showFileDetails: false });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            showFileDetails: true,
				/**		
				* Specifies the file extension to allow for uploading the file while initialization. This could be mentioned in string format.  
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set extensionsAllow API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ extensionsAllow: ".zip"  });	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/

            extensionsAllow: "",
                /**		
				* Specifies the file extension to deny for uploading the file while initialization. This could be mentioned in string format.  
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set extensionsDeny API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ extensionsDeny: ".zip"  });	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            extensionsDeny: "",
            /**		
* Specifies the save action which has to be performed after the file is pushed for uploading. Here we have to mention the server address which has to perform this action.  
* @default ""
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set saveUrl API value during initialization
* 	$("#uploadbox1").ejUploadbox({ saveUrl: "http://js.syncfusion.com/demos/beta/saveFiles.ashx"});	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            saveUrl: "",
            /**		
* Specifies the remove action which has to be performed after the file uploading is completed. Here we have to mention the server address which has to perform this action.  
* @default ""
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set removeUrl API value during initialization
* 	$("#uploadbox1").ejUploadbox({ removeUrl: "http://js.syncfusion.com/demos/beta/removeFiles.ashx"});	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            removeUrl: "",
				/**		
				* Set the root class for Uploadbox control theme. This cssClass  API helps to use custom skinning option for Uploadbox control.   
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set cssClass  API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ cssClass : "gradient-lime"});	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/

            cssClass : "",
                /**		
				* Specifies the Right to Left direction property for Uploadbox control.   
				* @default false
				* @type {boolean}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set enableRTL API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ enableRTL: true});	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            enableRTL: false,
            /**     
* Fires when Uploadbox control is created.
* @event
* @name ejUploadbox#create	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //create event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    create: function (args) {}
* });   
 
* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            create: null,
            /**     
* Fires when the file is selected for upload successfully.
* @event
* @name ejUploadbox#fileSelect	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt; 
* //fileSelect event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    fileSelect: function (args) {}
* });  
 
* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            fileSelect: null,
            /**     
* Fires when the upload progress begins.
* @event
* @name ejUploadbox#begin	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //begin event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    begin: function (args) {}
* });   
 
* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            begin: null,
            /**     
* Fires when the upload progress is cancelled.
* @event
* @name ejUploadbox#cancel	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //cancel event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    cancel: function (args) {}
* });

* &lt;/script&gt;     
* @memberof ejUploadbox
* @instance
*/
            cancel: null,
            /**     
* Fires when the file upload progress is completed.
* @event
* @name ejUploadbox#complete	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {object}  argument.files returns file entries and its details
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //complete event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    complete: function (args) {}
* });   

* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            complete: null,
            /**     
* Fires when the uploaded file is removed successfully.
* @event
* @name ejUploadbox#remove	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {object}  argument.status returns the file details of the file object
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //remove event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    remove: function (args) {}
* });  
 
* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            remove: null,
            /**     
* Fires when the Upload process ends in Error.
* @event
* @name ejUploadbox#error	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {string}  argument.action returns the action name
* @param {object}  argument.files returns the file details of the file uploaded
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //error event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    error: function (args) {}
* });  

* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            error: null,
            /**     
* Fires when Uploadbox control is destroyed.
* @event
* @name ejUploadbox#destroy	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //destroy event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    destroy: function (args) {}
* });  

* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            destroy: null
        },
        /**
* Specify the data types for default properties 
* @private
*/
        //Data Types
        dataTypes: {
            buttonText: "data",
            dialogText: "data",
            disbled: "boolean",
            multipleFilesSelection: "boolean",
            autoUpload: "boolean",
            showFileDetails: "boolean",
            extensionsAllow: "string",
            extensionsDeny: "string",
            saveUrl: "string",
            removeUrl: "string",
            cssClass : "string",
            enableRTL: "boolean"
        },
        // sample public function
        //Disables the upload box
        /**
* To disable the Uploadbox control  
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Disable Uploadbox
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.disable(); // disable the Uploadbox
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // disable the Uploadbox
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("disable");	
* &lt;/script&gt;
*@memberof ejUploadbox
* @instance
*/
        disable: function () {
            /// <summary>This will disable the upload button </summary>
            this.element.addClass("e-disable");
            this.model.enabled = false;
        },
        /**
* To enable the Uploadbox control  
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // enable Uploadbox
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.enable(); // enable the Uploadbox
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // enable the Uploadbox
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("enable");	
* &lt;/script&gt;
*@memberof ejUploadbox
* @instance
*/
        enable: function () {
            /// <summary>This will enable upload button </summary>
            if (this.element.hasClass("e-disable")) {
                this.element.removeClass("e-disable");
                this.model.enabled = true;
            }
        },
        // constructor function
        /**
* Create the Uploadbox widget
* @private
*/
        _init: function () {
            /// <summary>This will initialize upload button </summary>
            this.s = ej.browserInfo();
            this._initialize();
            this._wireEvents();
            /*Sync Uploads*/
            if (!this.model.asyncUpload) {
                this._initObjectsSyncUpload();
            }
            //disable status
            this._controlStatus(this.model.enabled);
            this._buttonText(this.model.buttonText);
        },
        /**
* To configure the properties at runtime using SetModel		
* @private
*/
        _setModel: function (options) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "buttonText":
                        this._buttonText(options[option]);
                        break;
                    case "dialogText":
                        this._dialogText(options[option]);
                        break;
                    case "cssClass ":
                        this._setSkin(options[option]);
                        break;
                    case "enableRTL":
                        this._setRTL(options[option]);
                        break;
                    case "enabled":
                        this._controlStatus(options[option]);
                        break;
                    case "locale":
                        this.model.locale = options[option];
                        this._buttonText(ej.Uploadbox.Locale[this.model.locale].buttonText);
                        this._dialogText(ej.Uploadbox.Locale[this.model.locale].dialogText);
                        break;
                }
            }
        },
        /**
* To ensure the status of the control;either enabled or disabled	
* @private
*/
        _controlStatus: function (value) {
            //disable status
            value != true ? this.disable() : this.enable();
        },
        /**
* To set rtl property if enabled	
* @private
*/
        _setRTL: function (val) {
            if (val) {
                this.element.addClass("e-rtl");
                if (this.s.name == "msie") {
                    this.inputupload.css('right', '-153px');
                }
            } else {
                this.element.removeClass("e-rtl");
                if (this.s.name == "msie") {
                    this.inputupload.css('right', '0px');
                }
            }
            if (this.updialog) this.updialog.ejDialog({ enableRTL: val });
        },
        _getLocalizedLabels: function (property) {
            var textType;
            if (property == "browse" || property == "upload" || property == "cancel")
                textType = "buttonText";
            else
                textType = "dialogText";
            return (ej.Uploadbox.Locale[this.model.locale] === undefined || ej.Uploadbox.Locale[this.model.locale][property] === undefined) ?
            ej.Uploadbox.Locale[this.model.locale][textType][property] :
            ej.Uploadbox.Locale[this.model.locale][property];

        },
        /**
* To set the Display Text to Buttons.
* @private
*/
        _buttonText: function (data) {
            $.extend(this.model.buttonText, data);
            this.buttondiv.val(this.model.buttonText.browse);
            this.element.find(".e-file-upload .e-uploadbtn").html(this.model.buttonText.upload);
            this.element.find(".e-file-upload .e-uploadclosebtn").html(this.model.buttonText.cancel);
        },
        /**
* To set the Text to Dialog popup.
* @private
*/
        _dialogText: function (data) {
            $.extend(this.model.dialogText, data);
            if (!(this.diaObj == undefined))
                this.diaObj.option('title', this.model.dialogText.title);
            $('.e-head-content .e-head-name').html(this.model.dialogText.name);
            $('.e-head-content .e-head-size').html(this.model.dialogText.size);
            $('.e-head-content .e-head-status').html(this.model.dialogText.status);
        },
        // all events bound using this._on will be unbind automatically
        /**
* destroy the Upload control
* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
* @alias destroy
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Destroy Upload
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.destroy(); // destroy the Upload control
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // destroy the Upload control
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("destroy");	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
        _destroy: function () {
            /// <summary>This will destroy the  upload button </summary>
            if (this.element.hasClass("e-uploadbox")) {
                this.element.removeClass("e-uploadbox e-widget");
                this.element.empty();
            }
        },
        /**
* To set custom skin theme if cssClass  property is enabled.
* @private
*/
        _setSkin: function (skin) {
            this.element.removeClass(this.model.cssClass );
            this.element.addClass(skin);
        },
        /**
* To initialize the Uploadbox control	
* @private
*/
        //initialize the control
        _initialize: function () {
            /// <summary>This will initialize upload button </summary>
            /*Upload Control*/
            this.control = this.element[0];
            this.element.addClass("e-widget " + this.model.cssClass );
            this.innerdiv = ej.buildTag('div.e-selectpart e-select');
            this.element.append(this.innerdiv);
            this.buttondiv = ej.buildTag('input.e-inputbtn e-btn#' + this.control.id + '_SelectButton', '', {}, { type: 'button', value: this._getLocalizedLabels("browse") });
            this.inputupload = ej.buildTag('input.e-uploadinput', "", {}, { type: 'file', name: this.control.id });
            if (this.model.multipleFilesSelection) {
                this.inputupload.attr('multiple', 'multiple');
            }
            this.innerdiv.append(this.buttondiv);
            this.innerdiv.append(this.inputupload);
            this._Selector = this.buttondiv[0];
            this._setRTL(this.model.enableRTL);
            this.Uploadframes = []; //For IFrame
            this.UploadForms = [];
            this.UploadType = this._isXhrSupported() ? "Xhr" : "IFrame";
           
            
        },
        //Wiring Events
        /**
* Wiring the events to Uploadbox control		
* @private
*/
        _wireEvents: function () {
            /// <summary>This will wire events of  upload button </summary>
            this._on(this.element, "click", this._disableclickselect);
            this._bindInputChangeEvent();
        },
        // disable click of select button.
        /**
* To prevent click action on disable state		
* @private
*/
        _disableclickselect: function (e) {
            if (this.element.hasClass("e-disable")) {
                e.preventDefault();
            }
        },
        //Bind input change function
        /**
* This will bind input change event of upload button 	
* @private
*/
        _bindInputChangeEvent: function () {
            //file selection changed event
            this._on(this.inputupload, "change", this._inputValueChange);
        },
        //Internal Events 
        /**
* This will bind input value change event of upload button 	
* @private
*/
        _inputValueChange: function (e) {
            var input, files;
            input = $(e.target);
            this.element.find(".e-uploadbtn").removeAttr('disabled').removeClass('e-disable');
            files = this._getInputFileInfo(input);
            this._trigger("fileSelect");
            if (this._isAllowed(files)) {
                if (!this.model.asyncUpload) {
                    this._onSelectSyncUpload(e); //Sync Upload
                } else {
                    if (this.UploadType == "Xhr") {
                        this._onXhrSelect(e); //removed uploadcore // For XHR Upload
                    } else {
                        this._onSelectIFrame(e); //For Iframe
                    }
                }
            }
        },
        // When Auto upload is false
        /**
* This will fire on upload button	
* @private
*/
        __uploadButtonClick: function (e) {
            //removed uploadcore
            if (this.UploadType == "Xhr") {
                this._xhrOnUploadButtonClick(e); // Xhr Upload
            } else {
                this._onUploadButtonClickIFrame(e); //Iframe Upload
            }
            $(e.target).attr('disabled','disabled').addClass('e-disable');
        },
        /**
* This will fire the upload button
* @private
*/
        _actionClick: function (e) {
            var targetAction, fileItem, file;
            targetAction = $(e.target);
            fileItem = targetAction.closest(".e-upload-file");
            file = $(fileItem).data("file");
            if (targetAction.hasClass("e-file-delete")) {
                //Trigger on Remove hanlder
                this._trigger("remove", { fileStatus: file });
                //removed uploadcore
                if (this.UploadType == "Xhr") {
                    this._xhrOnRemove(e, fileItem); //XHr Remove
                } else {
                    this._onRemoveIFrame(e, fileItem); //IFrame File Upload
                }
            } else if (targetAction.hasClass("e-file-cancel")) {
                //Trigger on Cancel hanlder
                this._trigger("cancel", { fileStatus: file }); //removed uploadcore
                if (!this.model.asyncUpload) {
                    this._onCancelSyncUpload(e, fileItem); //sync
                } else {
                    if (this.UploadType == "Xhr") {
                        this._xhrOnCancel(e, fileItem); //Xhr Cancel Item
                    } else {
                        this._onCancelIFrame(e, fileItem); //IFrame Cancel Item
                    }
                }
            } else if (targetAction.hasClass("e-file-retry")) {//removed uploadcore
                if (this.UploadType == "Xhr") {
                    this._xhrOnRetry(e, fileItem); //xhr remove
                } else {
                    this._onRetryIFrame(e, fileItem); //IFrame Remove
                }
            }

        },
        /**
* This Remove file entry upload button 
* @private
*/
        _removeFileEntry: function (file) {
            file.remove();
        },
        // Internal Methods
        /**
* This will fire is on file upload button 
* @private
*/
        _isFileUpload: function (fileEntry) {
            var actiondiv = $(fileEntry).find("div.e-icon");
            return actiondiv.is(".e-file-cancel");
        },
        /*Supporting Browsers */
        /**
* Validates upload type is xhr or not
* @private
*/
        _isXhrSupported: function () {
            return (((this.s.name == "msie" && parseInt(this.s.version) < 9) || ((this.s.name == "safari" && this.s.name == "chrome") && this.s.version == "536")) ? false : (typeof (FormData) != "undefined") && (typeof (File) != "undefined"));
        },
        /*Getting File Details*/
        /**
* To get the file details of the uploaded file
* @private
*/
        _getFileName: function (input) {
            /// <summary>This will get file name in upload button </summary>
            return $.map(this._getAllFileInfo(input), function (file) {
                return file.name;
            }).join(", ");
        },
        /**
* To get the file size of the uploaded file
* @private
*/
        _getFileSize: function (input) {
            /// <summary>This will get file size in upload button </summary>
            var tempProxy = this;
            return $.map(this._getAllFileInfo(input), function (file) {
                return tempProxy._formatSize(file.size);
            }).join(", ");
        },
        /**
* Pushes the uploaded file in uplaod dialog box
* @private
*/
        _pushFile: function (files, datapart) {
            /// <summary>This will push file in upload button </summary>
            var fileListDetails, addedFile, actionlist, i, action, diaObj, addedheading;
            addedheading = $("<div class='e-head-content'><div class='e-file-head e-head-name'>" + this._getLocalizedLabels("name") + "</div><div class='e-file-head e-head-size'>" + this._getLocalizedLabels("size") + "</div><div class='e-file-head e-head-status'>" + this._getLocalizedLabels("status") + "</div></div>");
            filedialog = this.updialog;
            if (filedialog && filedialog.length != 0) {
                if (this.model.showFileDetails) {
                    this.diaObj.open();
                }
            }
            else {
                this.updialog = ej.buildTag('div.uploaddialog#' + this.element[0].id + '_dialog', "", {}, { 'title': this._getLocalizedLabels("title") });
                this.element.append(this.updialog);
            }
            fileListDetails = this.element.find(".e-ul"); /// <reference path="IframeUpload.js" />
            if (fileListDetails.length == 0) {
                addedheading.appendTo(this.updialog);
                fileListDetails = ej.buildTag('ul.e-ul').appendTo(this.updialog);
                fileListActions = ej.buildTag('div.e-file-upload').appendTo(this.updialog);
                dialogActions = ej.buildTag('button.e-uploadclosebtn e-btn e-select', this._getLocalizedLabels("cancel"), {}, { type: 'button' }).appendTo(fileListActions);
                this._on(dialogActions, "click", this._dialogclose);
            }
            var xpos = (this.element.offset().left + this.element.width()) / 3, ypos = this.element.offset().top;
            this.updialog.ejDialog({ showOnInit: false, width: 510, cssClass: this.model.cssClass, close: $.proxy(this._uploadFileListDelete, this), position: { X: xpos, Y: ypos }, enableRTL: this.model.enableRTL, content: "#" + this.element[0].id, enableResize: false });
            this.diaObj = this.updialog.data('ejDialog');
            if (!this.model.multipleFilesSelection) {
                this.element.find(".e-ul>.e-upload-file").remove();
            }
            for (i = 0; i < files.length; i++) {//localization can be given for not started
                /*things to be redefined*/
                addedFile = $("<li class='e-upload-file'><div class='e-file-list'>" +
                    "<div class='e-file-progress e-file-view'><div class='e-file-name e-file-view'><span class='e-file-name-txt'>"
                    + files[i].name + "</span></div></div><div class='e-file-size e-file-view'><span class='e-file-name-txt'>"
                    + files[i].size + "</span></div>" +
                    "<div class='e-file-percentage e-file-view'><div class='e-file-progress-bar'><div class='e-file-progress-status'></div></div></div><div class='e-action-perform'><div class='e-icon e-file-view'></div></div></div></li>").appendTo(fileListDetails).data(datapart);

                if (this._getFileSize(files[i]).toString().toLowerCase() == "nankb" || files[i].size == null) {
                    addedFile.find(".e-file-size").remove();
                }
                action = "cancel";
                addedFile.find(".e-icon").remove().addClass(action.toString());
                if (action == "cancel") {
                    actionlist = ej.buildTag('div.e-icon e-file-cancel', '', {}, { title: 'cancel' });
                } else if (action == "remove") {
                    actionlist = ej.buildTag('div.e-icon e-file-delete', '', {}, { title: 'remove' });
                } else if (action == "retry") {
                    actionlist = ej.buildTag('div.e-icon e-file-retry', '', {}, { title: 'retry' });
                }
                //appending list
                addedFile.find(".e-action-perform").append(actionlist);
                //FileList Click
                this._on(actionlist, "click", this._actionClick);
            }
            if (this.model.showFileDetails) {
                this.diaObj.open();
            }
            this._buttonText(this.model.buttonText);
            this._dialogText(this.model.dialogText);
            return addedFile;
        },
        /**
* This will push file details in upload button
* @private
*/
        _pushFileDetails: function (files) {
            var fileListDetails, addedFile, actionlist, i, action, me, diaObj, addedheading;
            addedheading = $("<div class='e-head-content'><div class='e-file-head e-head-name'>" + this._getLocalizedLabels("name") + "</div><div class='e-file-head e-head-size'>" + this._getLocalizedLabels("size") + "</div><div class='e-file-head e-head-status'>" + this._getLocalizedLabels("status") + "</div></div>");
            me = this;
            filedialog = this.updialog;
            if (filedialog && filedialog.length != 0) {
                if (this.model.showFileDetails) {
                    me.diaObj.open();
                }
            } else {
                this.updialog = ej.buildTag('div.uploaddialog#' + this.element[0].id + '_dialog', "", {}, { 'title': this._getLocalizedLabels("title") });
                this.element.append(this.updialog);
            }
            var fileListDetails, addedFile;
            fileListDetails = this.element.find(".e-ul");
            if (fileListDetails.length == 0) {
                addedheading.appendTo(this.updialog);
                fileListDetails = ej.buildTag('ul.e-ul').appendTo(this.updialog);
                fileListActions = ej.buildTag('div.e-file-upload').appendTo(this.updialog);
                dialogActions = ej.buildTag('button.e-uploadclosebtn e-btn e-select', this._getLocalizedLabels("cancel"), {}, { type: 'button' }).appendTo(fileListActions);
                this._on(dialogActions, "click", this._dialogclose);
            }
            var xpos = (this.element.offset().left + this.element.width()) / 3, ypos = this.element.offset().top + this.element.height();
            if (!this.model.multipleFilesSelection) {
                this.element.find(".e-ul>.e-upload-file").remove();
            }
            addedFile = $("<li class='e-upload-file'><div class='e-file-list'><div class='e-file-progress e-file-view'><div class='e-file-name e-file-view'><span class='e-file-name-txt'>" + files.name + "</span></div></div><div class='e-file-size e-file-view'><span class='e-file-name-txt'>" + this._formatSize(0) + "\\" + this._formatSize(files.size) + "</span></div><div class='e-file-percentage e-file-view'><div class='e-file-progress-bar'><div class='e-file-progress-status'></div></div></div><div class='e-action-perform'><div class='e-icon e-file-view'></div></div></div></li>").appendTo(fileListDetails).data("file", files);
            this.updialog.ejDialog({ showOnInit: false, width: 520, height: "auto", cssClass: this.model.cssClass, close: $.proxy(this._uploadFileListDelete, this), position: { X: xpos, Y: ypos }, enableRTL: this.model.enableRTL, content: "#" + this.element[0].id, enableResize: false })
            //create object for ejDialog 
            me.diaObj = this.updialog.data("ejDialog");
            if (this.model.showFileDetails) {
                me.diaObj.open();
            }
            this._buttonText(this.model.buttonText);
            this._dialogText(this.model.dialogText);
            return addedFile;
        },
        /**
* Specifies uploading/ progress state of the file uploaded
* @private
*/
        _setProgress: function (filelist, percentage, e) {
            var progressbar, progress, filesize, loaded, total;
            progressbar = $(filelist).find(".e-file-progress-status");
            progressbar.width(percentage + "%");
           
            filesize = $(filelist).find(".e-file-size .e-file-name-txt");
            loaded = this._formatSize(e.loaded);
            total = this._formatSize(e.total);
            filesize.html(loaded + "\\" + total);
        },
        /**
* Specifies the current action of the file uploaded
* @private
*/
        _setAction: function (element, action) {
            //localization can be provided for the strings cancel,remove and retry.
            var actionlist;
            element.find(".e-icon").remove().addClass(action.toString());
            if (action == "cancel") {
                actionlist = ej.buildTag('div.e-icon e-file-cancel', '', {}, { title: 'cancel' });
            } else if (action == "remove") {
                actionlist = ej.buildTag('div.e-icon e-file-delete', '', {}, { title: 'remove' });
            } else if (action == "retry") {
                actionlist = ej.buildTag('div.e-icon e-file-retry', '', {}, { title: 'retry' });
            }
            //appending list
            element.find(".e-action-perform").append(actionlist);
            //FileList Click
            this._on(actionlist, "click", this._actionClick);
        },
        /**
* Sets status of the file uploaded
* @private
*/
        _setStatus: function (element, status) {
            var progress, upstatus = ej.buildTag('div');
            if (status == "success") {
                element.find(".file-status").addClass("e-file-status-success").html("Completed");
                element.find(".e-file-percentage").html("").attr("title", "Completed");
                upstatus.addClass("e-icon e-file-percentage-success");
                element.find(".e-file-percentage").append(upstatus);
            }
            if (status == "failed") {
                element.find(".file-status").addClass("e-file-status-failed").html("Failed");
                element.find(".e-file-percentage").html("").attr("title", "Failed");
                upstatus.addClass("e-icon e-file-percentage-failed");
                element.find(".e-file-percentage").append(upstatus);
            }
            if (status == "progress") {
                element.find(".file-status").addClass("file-status-inprogress").html("in progress");
            }
            if (status == "uploading") {
                element.find(".file-status").addClass("file-status-inprogress").html("uploading");
                progress = element.find(".e-file-percentage");
                progress.html("");
            }
        },
        /**
* Sets input field for multiple file upload
* @private
*/
        _createInputandBind: function () {
            // creating input field. 
            var tempInput = ej.buildTag('input', '', {}, { type: 'file' });
            tempInput.attr("name", this.control.id).attr("autocomplete", "off").attr("class", "e-uploadinput");
            if (this.model.multipleFilesSelection) {
                tempInput.attr("multiple", "multiple");
            }
            tempInput.appendTo(this.element.find(".e-selectpart"));
            this.inputupload = tempInput;
            this._bindInputChangeEvent();
        },
        /**
* This will show upload button
* @private
*/
        _showUploadButton: function () {
            var uploadbutton = this.element.find(".e-uploadbtn");
            if (uploadbutton.length == 0) {
                uploadbutton = ej.buildTag('button.e-uploadbtn e-btn e-select', this._getLocalizedLabels("upload"), {}, { type: "button" });
                this.element.find(".e-file-upload").append(uploadbutton);
                //File_upload_button Click
                this._on(uploadbutton, "click", this.__uploadButtonClick);
            }
			this._buttonText(this.model.buttonText);
        },
        /**
* This will reset the uplaod button
* @private
*/
        _resetFileInput: function ($element) {
            var clone = $element.clone(false, false);
            this._on(clone, "change", this._inputValueChange);
            $element.replaceWith(clone);
        },
        /**
* Ensures the file format
* @private
*/
        _isAllowed: function (files) {
            var inputfield, denied, uploadControl, args, allowExtension, denyExtension;
            inputfield = this.element.find(".e-uploadinput");
            denied = false;
            uploadControl = this;
            if (this.model.extensionsAllow != "") {
                allowExtension = this.model.extensionsAllow.split(",");
                $(files).each(function () {
                    if ($.inArray(this.extension, allowExtension) == -1) {
                        // Raise Event
                        args = { action: "ExtensionsAllow", files: files };
                        uploadControl._trigger('error', args);
                        denied = true;
                        return false;
                    }
                }
                    );
            }
            if (this.model.extensionsDeny != "") {
                denyExtension = this.model.extensionsDeny.split(",");
                $(files).each(function () {
                    if ($.inArray(this.extension, denyExtension) != -1) {
                        // Raise Event
                        args = { action: "ExtensionsDeny", files: files };
                        uploadControl._trigger('error', args);
                        denied = true;
                        return false;
                    }
                });
            }
            if (denied) {
                this._resetFileInput(inputfield);
            }
            return !denied;
        },
        /**
* This will sets the file remove status.
* @private
*/
        _fileListRemove: function () {
            fileList = this.element.find(".e-upload-file .e-file-delete");
            if (fileList.length == 0) {
                this.element.find(".e-uploadbtn").attr('disabled', 'disabled').addClass('e-disable');
                this.updialog.ejDialog('close');
            }
        },
        /**
* This will sets the uplaod disabled
* @private
*/
        _uploadHide: function () {
            fileList = this.element.find(".e-upload-file .e-file-cancel");
            if (fileList.length == 0) {
                this.element.find(".e-ul").empty();
                this.element.find(".e-uploadbtn").attr('disabled', 'disabled').addClass('e-disable');
                this.updialog.ejDialog('close');
            }
        },
        /**
* Section of handling dialog close action
* @private
*/
        _dialogclose: function () {
            var inputfield;
            this.updialog.find(".e-ul").empty();
            inputfield = this.element.find(".e-uploadinput");
            this._resetFileInput(inputfield);
            this.updialog.ejDialog('close');
        },
        /**
* Deletes the file list from the dialog box.
* @private
*/
        _uploadFileListDelete: function () {
            var inputfield;
            this.updialog.find(".e-ul").empty();
            inputfield = this.element.find(".e-uploadinput");
            this._resetFileInput(inputfield);
        },
        /* XHR Upload  */
        /**/
        /**
* Section for handling XHR upload
* @private
*/
        _onXhrSelect: function (e) {
            var inputField, files, xhrUpload, addedFile;
            inputField = $(e.target);
            files = this._getInputFileInfo(inputField);
            this._xhrBeforeUpload(files, inputField);
            xhrUpload = this;
            $.each(files, function (i, fileItem) {
                addedFile = $(fileItem).data("filelist");
                xhrUpload._setAction(addedFile, "cancel"); // XhrUpload._Uploader._setAction(addedFile, "cancel");
                if (xhrUpload.model.autoUpload) {
                    xhrUpload._xhrPerformUpload(fileItem);
                } else {
                    xhrUpload._showUploadButton();
                }
            });
        },
        /**
* Action performed before XHR upload
* @private
*/
        _xhrBeforeUpload: function (files, inputField) {
            var fileEntry, xhrUpload, formdata, addedFile;
            fileEntry = files;
            xhrUpload = this;
            $.each(fileEntry, function (i, fileItem) {
                formdata = xhrUpload._createFormObjectXhr(fileItem);
                $(fileItem).data("formobject", formdata);
                addedFile = xhrUpload._pushFileDetails(fileItem);
                $(fileItem).data("filelist", addedFile);
            });

            return fileEntry;
        },
        /**
* Action performed during XHR upload
* @private
*/
        _xhrPerformUpload: function (fileItem) {
            var isPrevented, url, xhrUpload, formdata, xhr;
            this._trigger('begin');
            url = this.model.saveUrl; //
            xhrUpload = this;
            formdata = $(fileItem).data("formobject");
            xhr = new XMLHttpRequest();
            $(fileItem).data("xhr", xhr);
            xhr.addEventListener("load", function (e) {
                xhrUpload._onRequestSuccess(xhrUpload, e, fileItem);
            }, false);
            xhr.addEventListener("error", function (e) {
                xhrUpload._onRequestError(xhrUpload, e, fileItem);
            }, false);
            xhr.upload.addEventListener("progress", function (e) {
                xhrUpload._onRequestProgress(xhrUpload, e, fileItem);
            }, false);
            xhr.open("POST", url);
            xhr.send(formdata);
        },
        /**
* secifies Action performed during XHR upload button click
* @private
*/
        _xhrOnUploadButtonClick: function (e) {
            var xhrUpload, fileEntry, started;
            xhrUpload = this;
            $(".e-ul li.e-upload-file", xhrUpload.control).each(function () {
                fileEntry = $(this);
                started = xhrUpload._isFileUpload(fileEntry);
                if (started) {
                    xhrUpload._xhrPerformUpload($(fileEntry).data("file"));
                }
            });
        },
        /**
* secifies Action performed during XHR uploaded file remove
* @private
*/
        _xhrOnRemove: function (e, fileItem) {
            var filename = $(fileItem).find(".e-file-name").text().toString().split(","), proxy = this;
            $.ajax({
                url: this.model.removeUrl,
                type: "POST",
                data: "fileNames=" + filename,
                success: function () {
                    $(fileItem).remove();
                    proxy._fileListRemove();
                }
            });
        },
        /**
* secifies cancel action performed during XHR uploaded
* @private
*/
        _xhrOnCancel: function (e, fileItem) {
            var file, xhr;
            file = $(fileItem).data("file");
            xhr = $(file).data("xhr");
            if (xhr) {
                $(file).data("xhr").abort();
            }
            $(file).data("xhr", null);
            $(fileItem).data("file", null);
            $(fileItem).remove();
            this._uploadHide();
        },
        /**
* secifies retry action performed during XHR uploaded
* @private
*/
        _xhrOnRetry: function (e, fileItem) {
            var file = $(fileItem).data("file");
            this._xhrPerformUpload(file);
        },
        /**
* section for handling request success for uploading
* @private
*/
        _onRequestSuccess: function (xhrUpload, e, fileEntry) {
            var xhr = $(fileEntry).data("xhr");
            if (xhr.status >= 200 && xhr.status <= 299) {
                xhrUpload._onXhrUploadSuccess(xhrUpload, e, fileEntry);
            }
            else {
                xhrUpload._onRequestError(xhrUpload, e, fileEntry);
            }
        },
        /**
* section for handling when upload is successful
* @private
*/
        _onXhrUploadSuccess: function (xhrUpload, e, fileEntry) {
            var addedFile, xhr, progressbar, size, fSize, filesize, args;
            addedFile = $(fileEntry).data("filelist");
            xhr = $(fileEntry).data("xhr");
            if (xhrUpload.model.removeUrl) {
                xhrUpload._setAction(addedFile, "remove");
                xhrUpload._setStatus(addedFile, "success");
            } else {
                addedFile.find(".e-icon").remove();
                xhrUpload._setStatus(addedFile, "success");
            }
            if ($(fileEntry).length > 0) {
                progressbar = $(addedFile).find(".e-file-progress-status");
                progressbar.width("100%");
                size = $(fileEntry)[0].size;
                fSize = this._formatSize(size);
                filesize = $(addedFile).find(".e-file-size .e-file-name-txt");
                filesize.html(fSize + "\\" + fSize);
            }
            args = { files: fileEntry, xhr: xhr, e: e };
            xhrUpload._trigger('complete', args);
        },
        /**
* section for handling when upload is failed
* @private
*/
        _onRequestError: function (xhrUpload, e, fileEntry) {
            var addedFile, xhr, args;
            addedFile = $(fileEntry).data("filelist");
            xhr = $(fileEntry).data("xhr");
            xhrUpload._setAction(addedFile, "retry");
            xhrUpload._setStatus(addedFile, "failed");
            args = { action: "Error", files: fileEntry, xhr: xhr, e: e };
            xhrUpload._trigger('error', args);
        },
        /**
* section for handling when upload is in progress
* @private
*/
        _onRequestProgress: function (xhrUpload, e, fileEntry) {
            var percentage, addedFile;
            percentage = Math.round(e.loaded * 100 / e.total);
            addedFile = $(fileEntry).data("filelist");
            xhrUpload._setProgress(addedFile, percentage, e);
            xhrUpload._setStatus(addedFile, "progress");
        },
        /**
* section for handling xhr form object
* @private
*/
        _createFormObjectXhr: function (file) {
            var formData = new FormData();
            formData.append(this.control.id, file.rawFile);
            return formData;
        },
        /**/
        //Utility functions
        /**/
        /**
* This will input File Info upload button 
* @private
*/
        _getInputFileInfo: function ($input) {
            var input = $input[0];
            if (input.files) {
                return this._getAllFileInfo(input.files);
            } else {
                return [{
                    name: this._GetName(input.value),
                    extension: this._getFileExtensionType(input.value),
                    size: this._getFileSizeinIE(input.value)
                }];
            }
        },
        /**
* This will get File Size IE upload button
* @private
*/
        _getFileSizeinIE: function (fileName) {
            var actievXObj, fileSize;
            actievXObj = null;
            fileSize = null;
            try {
                actievXObj = new ActiveXObject("Scripting.FileSystemObject");
            } catch (e) {
                fileSize = null;
            }
            if (actievXObj) {
                fileSize = actievXObj.getFile(fileName).size;
            }
            return fileSize;
        },
        /**
* This will get FileExtensionType of upload file
* @private
*/
        _getFileExtensionType: function (fileName) {
            return fileName.match ? (fileName.match(/\.([^\.]+)$/)[0] || "") : "";
        },
        /**
* This will return information about all files uploaded
* @private
*/
        _getAllFileInfo: function (rawFiles) {
            var tempProxy = this;
            return $.map(rawFiles, function (file) {
                return tempProxy._getFileInfo(file || rawFiles);
            });
        },
        /**
* This will return full names of files
* @private
*/
        _GetName: function (fullname) {
            var nameIndex = fullname.lastIndexOf("\\");
            return (nameIndex != -1) ? fullname.substr(nameIndex + 1) : fullname;
        },
        /**
* This will return file details in firefox older versions
* @private
*/
        _getFileInfo: function (rawFile) {
            // Older Firefox versions (before 3.6) use fileName and fileSize
            var fileName = rawFile.name || rawFile.fileName || rawFile;
            return {
                name: fileName,
                extension: this._getFileExtensionType(fileName),
                size: rawFile.size || rawFile.fileSize,
                rawFile: rawFile
            };
        },
        /**
* This will return file size type
* @private
*/
        _formatSize: function (bytes) {
            var i = -1;
            do {
                bytes = bytes / 1024;
                i++;
            } while (bytes > 99);
            return Math.max(bytes, 0.1).toFixed(1) + ['KB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
        },
        /**/
        //Start
        // IFrame Uploads
        /**
* Section for handling IFrame uploads
* @private
*/
        _onSelectIFrame: function (e) {
            var input, files, addedFile, uploadframe;
            input = $(e.target);
            files = this._getInputFileInfo(input);
            addedFile = this._beforeUploadIFrame(files);
            uploadframe = addedFile.data("iframe");
            if (this.model.autoUpload) {
                this._performUploadIFrame(addedFile);
            } else {
                this._showUploadButton();
            }
            this._off(this.inputupload, "change");
            this._bindInputChangeEvent();
        },
        /**
* Section for handling files removed from IFrame
* @private
*/
        _onRemoveIFrame: function (e, fileItem) {
            var iframe, fileNames, proxy, fileDetails;
            iframe = fileItem.data("iframe");
            fileDetails = $(fileItem).data("file");
            fileNames = fileDetails[0].name;
            proxy = this;
            if (iframe) {
                this._removeFileEntry(fileItem);
                if (this.model.removeUrl) {
                    $.ajax({
                        url: this.model.removeUrl,
                        type: "POST",
                        data: "fileNames=" + fileNames,
                        success: function () {
                            proxy._fileListRemove();
                        }
                    });
                }
            } else {
                this._removeFileEntry(fileItem);
            }
        },
        /**
* Section for handling cancel action performed during file upload
* @private
*/
        _onCancelIFrame: function (e, fileItem) {
            var iframe;
            //trigger  cancel
            this._trigger('cancel', { Status: fileItem });
            iframe = fileItem.data("iframe");
            if (iframe) {
                this._removeFileEntry(fileItem);
                if (typeof (iframe.stop) != "undefined") {
                    iframe.stop();
                } else if (iframe.document) {
                    iframe.document.execCommand("Stop");
                    iframe.contentWindow.location.href = iframe.contentWindow.location.href;
                }
                this._processServerResponse(iframe, "");
            }
            this._uploadHide();
        },
        /**
* Section for handling retry action performed during file upload
* @private
*/
        _onRetryIFrame: function (e, fileItem) {
            this._performUploadIFrame(fileItem);
        },
        /**
* Section for handling actions performed during before IFrame upload
* @private
*/
        _beforeUploadIFrame: function (files) {
            var uploadframe, uploadform, addedfile;
            //creating iframe and adding it to the upload div block.
            uploadframe = this._createFrame(this.control.id + "_Iframe" + this.Uploadframes.length);
            this.Uploadframes.push(uploadframe);
            uploadform = this._createForm(this.model.saveUrl, uploadframe[0].id);
            this.element.find("input.e-uploadinput").removeClass("e-uploadinput").css("display", "none").appendTo(uploadform);
            this._createInputandBind();
            addedfile = this._pushFile(files, { "iframe": uploadframe, "form": uploadform, "file": files });
            uploadframe.data({ "filelist": addedfile });
            this._setAction(addedfile, "cancel");
            return addedfile;
        },
        /**
* Section for handling actions performed during IFrame upload
* @private
*/
        _performUploadIFrame: function (addedFile) {
            var isPrevented, files, uploadframe, uploadform;
            this._trigger('begin');
            files = addedFile.data("file");
            this._setStatus(addedFile, "uploading");
            uploadframe = addedFile.data("iframe");
            uploadform = addedFile.data("form");
            uploadframe.appendTo(document.body);
            uploadform.appendTo(document.body);
            //error here calls the upload even if the url is wrong
            this._on(uploadframe, "load", this._removeFramesIFrame);
            uploadform.submit();
        },
        /**
* Section for handling actions performed during IFrame upload button click
* @private
*/
        _onUploadButtonClickIFrame: function (e) {
            var iframeUpload, fileEntry, started;
            iframeUpload = this;
            $(".e-ul li.e-upload-file", iframeUpload.control).each(function () {
                fileEntry = $(this);
                started = iframeUpload._isFileUpload(fileEntry);
                if (started) {
                    iframeUpload._performUploadIFrame(fileEntry);
                }
            });
        },
        /**
* Section for handling actions when IFrame files removed before upload
* @private
*/
        _removeFramesIFrame: function (e) {
            var uploadframe, response, filelist, fileEntry, args;
            uploadframe = $(e.target);
            filelist = uploadframe.data("filelist");
            try {
                response = uploadframe.contents().text();
            } catch (e) {
                response = "Error trying to get server response: " + e;
            }
            if (response == "") {
                this._processServerResponse(uploadframe, response);
                this._setIframeProgress(filelist, 100, e);
                this._setStatus(filelist, "progress");
                this._successIframeUpload(filelist);
            }
            else { this._failureIframeUpload(filelist); }
        },
        //prog bar
        /**
* Specifies the progress state during IFrame upload
* @private
*/
        _setIframeProgress: function (filelist, percentage, e) {
            var progressbar, progress, filesize, loaded, total;
            progressbar = $(filelist).find(".e-file-progress-status");
            progressbar.width(percentage + "%");
        },
        /**
* Section for handling actions when IFrame upload is successfull
* @private
*/
        _successIframeUpload: function (filelist) {
            fileEntry = filelist.data("file");
            //trigger complete functionality
            if (this.model.removeUrl) {
                this._setAction(filelist, "remove");
                this._setStatus(filelist, "success");
            } else {
                filelist.find(".file-action").remove();
                this._setStatus(filelist, "success");
            }
            args = { files: fileEntry };
            this._trigger('complete', args);
        },
        /**
* Section for handling actions when IFrame upload fails
* @private
*/
        _failureIframeUpload: function (filelist) {
            fileEntry = filelist.data("file");
            //trigger Error functionality
            if (this.model.saveUrl) {
                this._setAction(filelist, "retry");
                this._setStatus(filelist, "failed");
            } else {
                filelist.find(".file-action").remove();
                this._setStatus(filelist, "failed");
            }
            args = { files: fileEntry };
            this._trigger('error', args);
        },
        /**
* Section for handling response from server
* @private
*/
        _processServerResponse: function (uploadframe) {
            var uploadform;
            uploadform = $(document.body).find("form[target='" + $(uploadframe).attr("id") + "']");
            setTimeout(function () {
                uploadform.remove();
                uploadframe.remove();
            }, 0);
        },
        /**
* Returns div block created
* @private
*/
        _createDivBlock: function (className) {
            return ej.buildTag('div.' + className);
        },
        /**
* Returns form tag as object
* @private
*/
        _createForm: function (action, target) {
            return ej.buildTag('form', '', {}, { enctype: 'multipart/form-data', method: 'POST', action: action, target: target });
        },
        /**
* Section for creating IFrame for handling IFrame uploads
* @private
*/
        _createFrame: function (id) {
            return ej.buildTag('iframe#' + id, '', { display: 'none' }, { name: id });
        },
        /**
* Returns file type input tag whwn id is specified 
* @private
*/
        _createInput: function (id) {
            return ej.buildTag('input', '', {}, { type: 'file', name: id });
        },
        //end
        /*Sync Start*/
        /**
* Section for synchronous upload
* @private
*/
        _initObjectsSyncUpload: function () {

            this.element.closest("form")
                    .attr("enctype", "multipart/form-data")
                    .attr("encoding", "multipart/form-data");
            this._wireEventsSyncUpload();
        },
        /**
* Binds events for handling sync upload 
* @private
*/
        _wireEventsSyncUpload: function () {
            var closestform = this.element.closest("form")[0];
            //form submit event. 
            this._on($(closestform), "submit", this._formSubmitSyncUpload);
            // form reset event.
            this._on($(closestform), "reset", this._formResetSyncUpload);
        },
        /**
* handles actions performed while sync upload 
* @private
*/
        _onSelectSyncUpload: function (e) {
            var input, files, selection, addedfile;
            input = $(e.target);
            files = this._getInputFileInfo(input);
            selection = $(".e-selectpart", this.control);
            this.element.find("input.e-uploadinput").removeClass("e-uploadinput").css("display", "none").appendTo(selection);
            this._createInputandBind();
            addedfile = this._pushFile(files, { "file": files, "Input": input });
        },
        /**
* Binds events for handling sync upload canceled
* @private
*/
        _onCancelSyncUpload: function (e, fileItem) {
            var inputfield = fileItem.data("Input");
            fileItem.data("file", null);
            fileItem.data("Input", null);
            fileItem.remove();
            inputfield.remove();
            this._uploadHide();
        },
        /**
* Performs upload during form submit
* @private
*/
        _formSubmitSyncUpload: function (e) {
            var input, uploader;
            input = $(".e-uploadinput", this.control);
            input.attr("name", "");
            uploader = this.control;
            setTimeout(function () {
                input.attr("name", uploader.id);
            }, 0);
        },
        /**
* Section for handling actions when form is reset.
* @private
*/
        _formResetSyncUpload: function (e) {
            $(".e-selectpart", this.control).children('input[type="file"]').each(function () {
                if (this.className == " ") {
                    $(this).remove();
                }
            });
            $(".e-ul", this.control).remove();
        }
        /*Sync End*/
    });
    ej.Uploadbox.Locale = {};

    ej.Uploadbox.Locale["en-US"] = {
        buttonText: {
            upload: "Upload",
            browse: "Browse",
            cancel: "Cancel"
        },
        dialogText: {
            title: "Upload Box",
            name: "Name",
            size: "Size",
            status: "Status"
        }
    };
})(jQuery, Syncfusion);;