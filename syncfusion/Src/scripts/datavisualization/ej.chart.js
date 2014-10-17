/*!
*  filename: ej.chart.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

ej.EjVmlRender = function (element) {
   var doc = document;
    this.vmlNamespace = "urn:schemas-microsoft-com:vml";
    this.vmStyle = "#default#VML";
    doc.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
    doc.createStyleSheet().cssText =
  'v\\:fill, v\\:path, v\\:polyline, v\\:line, v\\:rect,v\\:shape,v\\:oval, v\\:stroke' +
  '{ behavior:url(#default#VML); display: inline-block; } ';
    this._rootId = jQuery(element).attr("id");
    this.svgObj = doc.createElement("div");
    this.svgObj.style.position = 'relative';
    this.svgObj.setAttribute('id', this._rootId + '_vml');
    this.isdocmode8 = doc.documentMode === 8;
    this.changeOptions = {'id':'id',
        'fill': 'fillcolor', 'stroke': 'strokecolor', 'stroke-width': 'strokeweight', 'd': 'path', 'font-size': 'font-size', 'font-family': 'font-family', 'font-style': 'font-style',
        'font-weight': 'font-weight', 'points':'points'

        };
};
(function($) {
ej.EjVmlRender.prototype = {
  
    drawPath: function (options, element) {
        var darray= options.d.split(" ");
        if($.inArray('A', darray) != -1)
        {
            var w = parseFloat(darray[4]);
            var h = parseFloat(darray[5]);
            options.d=this.drawArc(w, h, options);
        }
        if ($("#" + options.id).length > 0) {
            options.d = this.changePathValue(options.d);
            this.applyVMLStyle($("#" + options.id), options);
        }
        else {
            options.d = this.changePathValue(options.d);
            var shape = document.createElement("v:shape");
            var $shapeEle = $(shape);
            this.applyVMLStyle($shapeEle, options);
            $shapeEle.appendTo(element);
        }
    },
    drawPolyline: function (options, element) {
        var darray = options.points.split(" ");
        
        if ($("#" + options.id).length > 0) {
            options.points = this.changePathValue(options.points);
            this.applyVMLStyle($("#" + options.id), options);
        }
        else {
            options.points = this.changePathValue(options.points);
            var shape = document.createElement("v:polyline");
            var $shapeEle = $(shape);
            this.applyVMLStyle($shapeEle, options);
            $shapeEle.appendTo(element);
        }
    },
    setFillAttribute: function (element, options) {
        var fill = document.createElement("v:fill");
        var opacity = options["fill-opacity"] ? options["fill-opacity"] : options["opacity"];
        opacity = (opacity) ?opacity: (options["opacity"]) ?  options["opacity"]:1;
        var fillcolor = options["fill"];
        if (fillcolor != "none" && !ej.util.isNullOrUndefined(fillcolor)) {
          
            if (!(fillcolor).match('gradient'))
                $(element).attr("fillcolor", fillcolor);
            else {
                var colorName = ((fillcolor).replace('gradient', ""));
                fill.setAttribute('type', "gradient");
                fill.setAttribute("colors", colorName);
            }
        }
        else 
            opacity = 0.1;
        
        
        fill.setAttribute('opacity', opacity);
        $(fill).appendTo(element);
    },
    setStrokeAttribute: function (element, options) {
        var stroke = options['stroke'];
        if (stroke == "transparent") 
            options['opacity'] = 0.1;
        
         
        var opacity = options["opacity"];
        if (opacity) {
            var fill = document.createElement("v:stroke");

           

            fill.setAttribute('opacity', opacity);
            $(fill).appendTo(element);
        }
    },
    changePathValue: function (options) {
        if (!options["d"]) {
            var pathArray = options.split(" ");
            for (var i = 0; i < pathArray.length; i++) {
                var matches = pathArray[i].match(/\d+/g);
                if (matches != null) {
                    pathArray[i] = Math.round(parseFloat(pathArray[i]));
                }
            }
            options = pathArray.join(' ');
            return options;
        }
    },


    drawArc: function ( w, h, options) {
    var x = 0, y = 0;
    var startAngle = options.start-1.571,
    endAngle =options.end-1.571,
    endAngle = (Number(Math.PI.toFixed(2)) == Number((endAngle + startAngle).toFixed(2))) ? endAngle - 0.01 : endAngle,
    radius = options.r || w || h,
    cosStart = Math.cos(startAngle),
    sinStart = Math.sin(startAngle),
    cosEnd = Math.cos(endAngle),
    sinEnd = Math.sin(endAngle),
    innerRadius = options.innerR,
    circleCorrection = 0.08 / radius, 
    innerCorrection = (innerRadius && 0.1 / innerRadius) || 0,
    path;

    if (endAngle - startAngle === 0) {
            return '';

    } else if (2 * Math.PI - endAngle + startAngle < circleCorrection) {
            cosEnd = -circleCorrection;
    } else if (endAngle - startAngle < innerCorrection) {
            cosEnd = Math.cos(startAngle + innerCorrection);
        }

        path = [
    'wa', // To draw clockwise arc
    x - radius, 
    y - radius, 
    x + radius, 
    y + radius, 
    x + radius * cosStart, 
    y + radius * sinStart, 
    x + radius * cosEnd, 
    y + radius * sinEnd  
        ];

        if (options.open && !innerRadius) {
            path.push(
        'e',
        M,
        x, 
        y
    );
        }

        path.push(
            // To draw anti clockwise arc
    'at', 
    x - innerRadius, 
    y - innerRadius, 
    x + innerRadius, 
    y + innerRadius, 
    x + innerRadius * cosEnd, 
    y + innerRadius * sinEnd, 
    x + innerRadius * cosStart, 
    y + innerRadius * sinStart, 
    'x', 
    'e' 
);
        path=path.join(" ");
        return path;

  },
    changeVMLStyle: function ($element, options) {
        var chart = this;
		var strokeColor = options.stroke;
        $element.css("width", options.width).css("visibility", options.visibility).css("height", options.height).css("position", "absolute").css('left', options.x).css('top', options.y);
        $.each(options, function (index, val) {
            if (chart.changeOptions[index] != null || chart.changeOptions[index] != undefined) {
                if (index == 'd' || index=='points') {
                    val = chart.changePathValue(options[index]).toLowerCase();
                }
                if (val == 'transparent') {
                    options[index] = val = 'white';
                     if(index=="fill" && (!options.hasOwnProperty('opacity') ||  !options['opacity'])) 
                       options['opacity'] = 0.1;                  
                }
                if ($element[0].tagName === "SPAN") {
                    if (index == "fill") $element.css('color', val);
                    else {
                        if (index == "id") $element.attr(chart.changeOptions[index], val);
                        else
                            $element.css(chart.changeOptions[index], val);
                    }
                } else {
                   
                    if (chart.isdocmode8) { // IE8 setAttribute bug
                        $element.get(0)[chart.changeOptions[index]] = val;
                    } else {
                        $element.get(0).setAttribute(chart.changeOptions[index], val);
                    }      
                }
            }
        });
        if (options.hasOwnProperty('fill-opacity') || options.hasOwnProperty('opacity') || options.hasOwnProperty('fill'))
            if (!($element[0].tagName === "SPAN")) {
                chart.setFillAttribute($element, options);
               if (options.hasOwnProperty('stroke')) {
                    options.stroke = strokeColor;
                    chart.setStrokeAttribute($element, options);
                }
            }
    },
    applyVMLStyle: function ($element, options) {
        
        if ($element[0].tagName !== "SPAN") {
            if (ej.util.isNullOrUndefined(options.width)) options.width = "1000px";
            if (ej.util.isNullOrUndefined(options.height)) options.height = "1000px";
        }
        if (ej.util.isNullOrUndefined(options.x)) options.x = "0px";
        if (ej.util.isNullOrUndefined(options.y)) options.y = "0px";

        this.changeVMLStyle($element, options);
    },
    drawLine: function (options, element) {
        if ($("#" + options.id).length > 0) {
            var from = (options.x1) + ',' + (options.y1);
            var to = (options.x2) + ',' + (options.y2);
            $(options).attr("from", from).attr("to", to);
            this.applyVMLStyle($("#" + options.id), options);
        }
        else {
            var line = document.createElement("v:line");
            var $lineEle = $(line);
            var from = (options.x1) + ',' + (options.y1);
            var to = (options.x2) + ',' + (options.y2);
            $lineEle.attr("from", from).attr("to", to);
            this.applyVMLStyle($lineEle, options);
            $lineEle.appendTo(element);
        }
     },
    //drawPolygon: function (options, element) {
     
    //},
     drawCircle: function (options, element) {
         if ($("#" + options.id).length > 0) {
             options.x = options.cx - options.r;
             options.y = options.cy - options.r;
             options.width = options.height = (2 * options.r);
             this.applyVMLStyle($("#" + options.id), options);
         }
         else {
             var circle = document.createElement("v:oval");
             var $circleEle = $(circle);
             options.x = options.cx - options.r;
             options.y = options.cy - options.r;
             options.width = options.height = (2 * options.r);
             this.applyVMLStyle($circleEle, options);
             if ($("#" + options.id).length == 0)
             $circleEle.appendTo(element);
         }
     },
    
   drawEllipse: function (options, element) {
       if ($("#" + options.id).length > 0) {
           options.x = options.cx - options.rx;
           options.y = options.cy - options.ry;
           options.width = (2 * options.rx);
           options.height = (2 * options.ry);
           this.applyVMLStyle($("#" + options.id), options);
       }
       else {
           var ellipse = document.createElement("v:oval");
           var $ellipseEle = $(ellipse);
           options.x = options.cx - options.rx;
           options.y = options.cy - options.ry;
           options.width = (2 * options.rx);
           options.height = (2 * options.ry);
           this.applyVMLStyle($ellipseEle, options);
           $ellipseEle.appendTo(element);
       }
    },
    drawRect: function (options, element) {
        if ($("#" + options.id).length > 0) {
            this.applyVMLStyle($("#" + options.id), options);
        } else {
            var rect = document.createElement("v:rect");
            var $rectEle = $(rect);
            this.applyVMLStyle($rectEle, options);
            $rectEle.appendTo(element);
        }
    },
    _getAttrVal: function (ele, val, option) {
          val = (val == "x") ? "left" : val;
        val = (val == "y") ? "top" : val;
        var value1 = $(ele).attr(val);
        var value = value1 ? value1 : ($(ele).css(val));
        
        if (value != null)
            return value;
        else
            return option;
    },
    _setAttr: function (element, attribute) { 
        if (attribute.transform) {
		  var attrTrans=attribute.transform;
            var trans = attrTrans.slice(attrTrans.indexOf('(') + 1, attrTrans.indexOf(')')).split(',');
            attribute.x = trans[0];
            attribute.y = trans[1];
        }
        var $ele = $(element);
        if($ele.length>0)
            this.changeVMLStyle($ele, attribute);
    },
    createGradientElement: function (name, colors) {
        var colorName;
       
        if (Object.prototype.toString.call(colors) == '[object Array]') {
            colorName = "gradient" + " ";
            var appendString = "";
            for (var j = 0, i=colors.length-1 ; i>=0, j < colors.length ; j++,i--){
                colorName += appendString + colors[j]["colorStop"] + " " + colors[i]["color"];
                appendString = ",";
            }
        }
        else {
            colorName = colors;
        }
        return colorName; 
    },

    //drawGradient: function (options, gradientEle, element) {

      
    //},
    setSpanAttr: function (options, label, element) {
	    var fontSize = (options["font-size"] > 0) ? (options["font-size"] + "px") : options["font-size"];
        var font = { size: fontSize, fontStyle: options["font-style"], fontFamily: options["font-weight"] };
        var bounds = ej.EjSvgRender.utils._measureText(label, null, font);
        
            $(element).css("white-space", "nowrap");
        
        if (options["text-anchor"] === "middle")
            options.x = Math.round(options.x - bounds.width / 2);
        else if (options["text-anchor"] === "end")
            options.x = Math.round(options.x - bounds.width);
        options.y = Math.round(options.y -( font.size.replace("px","")));
        this.applyVMLStyle(element, options);
        
       
    },
    drawText: function (options, label, groupEle,font) {
        var textDoc = document;
        var $Ele = $("#" + options.id);
        if ($Ele.length > 0) {
            this._textAttrReplace(options, label, font, $Ele);
        } else {
            var span = textDoc.createElement("span");
            var $spanEle = $(span);
            if (jQuery.type(label) == "array") {
                this.setSpanAttr(options, label, $spanEle);
                for (var i = 0; i < label.length; i++) {
                    var textspan = textDoc.createElement("span");
                    $(textspan).html(label[i]);                
                    $(textspan).appendTo(span);
                    var brtag = textDoc.createElement("br");
                    $(brtag).appendTo(span);
                    
                }
            } else {
                this.setSpanAttr(options, label, $spanEle);
                $spanEle.html(label);
            }         
            $spanEle.appendTo(groupEle);          
        }
    },
    //text element attributes values are replaced 
    _textAttrReplace: function (options, label, font, $Ele) {
        if (jQuery.type(label) == "array") {
            var elements = $("#" + options.id).children("span");
            this.setSpanAttr(options, label, $Ele);
            if (elements.length > 0 && elements.length == label.length) {
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    $(element).text(label[i]);
                }
            }
            else {
                $("#" + options.id).remove();
                this.drawText(options, label, this.gTransToolEle, font);

            }
        } else {
            this.setSpanAttr(options, label, $Ele);
            $Ele.text(label);
        }

    },

   drawImage: function (options, element) {
        var imgElement = document.createElement("img");
        var $imgElement = $(imgElement);
          $imgElement.css({ 'position': 'absolute' });
          $.each(options, function (index, val) {
              if (index == "href") index = "src";
                $imgElement.attr(index, val);
        });
        $imgElement.appendTo(element);
       
    },

    createDefs: function () {
        
    },

    //createClipPath: function (options) {
        
    //},
    //createForeignObject: function (options) {
      
    //},
    createGroup: function (options) {
        var group = document.createElement("div");
        if (!ej.util.isNullOrUndefined(options.transform)) {
            var trans = options.transform.slice(options.transform.indexOf('(') + 1, options.transform.indexOf(')')).split(',');
            $(group).css({ 'position': 'absolute', 'left': trans[0] + 'px', 'top': trans[1] + 'px' });
        }
		 if (options.cursor) 
            $(group).css({ 'cursor': options.cursor });
        
        $.each(options, function(index, val) {
            if (index !== 'transform' && index !="clip-path")
                $(group).attr(index, val);
        });
      
        return group;
    },

    createText: function (options, label) {
        var text = document.createElement("span");
        $(text).attr(options);
        if (!ej.util.isNullOrUndefined(label))
            text.textContent = label;
        return text;
        
        
    },

    //createPath: function (options) {
       
    //},

    //createCircle: function (options) {
       
    //},

    //createLine: function (options) {
       
    //},
   
   
    //Draw clip path for each series to avoid series overlap in multiple axes zooming
    drawAxesBoundsClipPath: function (gSeriesGroupEle, options, invertedAxis) {
        var clipOptions;
        var element = $(gSeriesGroupEle);
        element.removeAttr("clip-path");
        var trans = this._getTransform(options.xAxis, options.yAxis, invertedAxis);
        clipOptions = {
            'id': gSeriesGroupEle.id + '_ClipRect',
            'x': 0,
            'y': 0,
            'width': (trans.width),
            'height': (trans.height),
            'fill': 'white',
            'stroke-width': 1,
            'stroke': 'transparent'
        };
        this.drawClipPath(clipOptions, gSeriesGroupEle);
        element.attr('clip-path', 'url(#' + clipOptions.id + ')');

    },
   
    getAttrVal: function (ele, val, option) {
        var value = $(ele).attr(val);
        if (value != null)
            return value;
        else
            return option;
    },
   
    round: function (value, div, up) {

        return div * (up ? Math.ceil(value / div) : Math.floor(value / div));
    },
    
   
   
    
    hexFromRGB: function (color) {
        var r = color.R;
        var g = color.G;
        var b = color.B;
        var hex = [r.toString(16), g.toString(16), b.toString(16)];
        $.each(hex, function (nr, val) { if (val.length === 1) { hex[nr] = "0" + val; } });
        return hex.join("").toUpperCase();
    },

    createDelegate: function (context, handler) {
        return function (e) {
            handler.apply(context, [e, this]);
        };
    },

    drawClipPath: function (options, element) {
        if (options.id.indexOf("ChartAreaClipRect") == -1) {
            var left = Math.round(options.x)+'px';
            var top = Math.round(options.y)+'px';
            var right = Math.round(options.width)+'px';
            var bottom = Math.round(options.height) + 'px';
            var cssClip = 'rect(' + top + ' ' + right + ' ' + bottom + ' ' +left + ')';
            $(element).css("position", "absolute").css('clip',cssClip);
        }
    },
   
    append: function (childEle, parentEle) {
        $(childEle).appendTo(parentEle);
    }
};
})(jQuery);;
ej.EjSvgRender = function (element) {

    this.svgLink = "http://www.w3.org/2000/svg";
    this.svgObj = document.createElementNS(this.svgLink, "svg");
    this._rootId = jQuery(element).attr("id");
    this.svgObj.setAttribute('id', this._rootId + '_svg');

};
(function ($) {
ej.EjSvgRender.prototype = {
    drawPath: function (options, element) {
        if ($("#" + options.id).length > 0) { 
            $("#" + options.id).attr(options);
        }
        else {
            var path = document.createElementNS(this.svgLink, "path");
            $(path).attr(options).appendTo(element);
        }

    },
    drawPolyline: function (options, element) {
        if ($("#" + options.id).length > 0) {
            $("#" + options.id).attr(options);
        }
        else {
            var polyline = document.createElementNS(this.svgLink, "polyline");
            $(polyline).attr(options).appendTo(element);
        }

    },

    drawLine: function (options, element) {
        if ($("#" + options.id).length > 0) {
            $("#" + options.id).attr(options);
        }
        else {
            var path = document.createElementNS(this.svgLink, "line");
            $(path).attr(options);
            $(path).appendTo(element);
        }
    },
    drawPolygon: function (options, element) {
        if ($("#" + options.id).length > 0) {
            $("#" + options.id).attr(options);
        }
        else {
            var polygon = document.createElementNS(this.svgLink, "polygon");
            $(polygon).attr(options);
            $(polygon).appendTo(element);
        }
    },
    drawCircle: function (options, element) {
        if ($("#" + options.id).length > 0) {
            $("#" + options.id).attr(options);
        }
        else {
            var circle = document.createElementNS(this.svgLink, "circle");
            $(circle).attr(options).appendTo(element);
        }
    },
    drawEllipse: function (options, element) {
        if ($("#" + options.id).length > 0) {
            $("#" + options.id).attr(options);
        }
        else {
            var ellipse = document.createElementNS(this.svgLink, "ellipse");
            $(ellipse).attr(options).appendTo(element);
        }
    },
    
    drawRect: function (options, element) {
            if ($("#" + options.id).length > 0) {
                $("#" + options.id).attr(options);
            }
            else {
                var rect = document.createElementNS(this.svgLink, "rect");
                $(rect).attr(options).appendTo(element);
            }    
    },

    createGradientElement: function (name, colors, x1, y1, x2, y2, element) {
        var colorName;
        if (Object.prototype.toString.call(colors) == '[object Array]') {
            var options = {
                'id': this.svgObj.id + '_' + name + 'Gradient',
                'x1': x1 + '%',
                'y1': y1 + '%',
                'x2': x2 + '%',
                'y2': y2 + '%'
            };
            var cName = '#' + this.svgObj.id + '_' + name + 'Gradient';
                this.drawGradient(options, colors, element);
            colorName = 'url(#' + this.svgObj.id + '_' + name + 'Gradient)';
        }
        else {
            colorName = colors;
        }
        return colorName;
    },

    drawGradient: function (options, gradientEle, element) {

        var defs = this.createDefs();
        var linerGradient = document.createElementNS(this.svgLink, "linearGradient");
        $(linerGradient).attr(options);
        for (var i = 0; i < gradientEle.length; i++) {
            var stop = document.createElementNS(this.svgLink, "stop");
            $(stop).attr({
                'offset': gradientEle[i].colorStop,
                'stop-color': gradientEle[i].color,
                'stop-opacity': 1
            });
            $(stop).appendTo(linerGradient);
        }

        $(linerGradient).appendTo(defs);
        $(defs).appendTo(element);
    },

    drawText: function (options, label, groupEle,font) {
        
        if ($("#" + options.id).length > 0) 
            this._textAttrReplace(options, label,font);           
       else{
            var text = document.createElementNS(this.svgLink, "text");
            var $text = $(text);


            if (jQuery.type(label) == "array") {
                var j = 0;
                $text.attr(options);
                for (var i = 0; i < label.length; i++) {
                    var textspan = document.createElementNS(this.svgLink, "tspan");
                    textspan.textContent = label[i];
                    $(textspan).attr({ "x": options.x, "dy": j });
                    $(textspan).appendTo(text);
                    var bounds = ej.EjSvgRender.utils._measureText(label[i],null,font);
                    j = bounds.height+2;
                }
            } else {
                text.textContent = label;
                $text.attr(options);
            }
            $text.appendTo(groupEle);

 
        }
    },
    //text element attributes values are replaced 
    _textAttrReplace: function (options, label, font) {
        $("#" + options.id).attr(options);

        if (jQuery.type(label) == "array") {
            var elements = $("#" + options.id).children("tspan");
            var j = 0;
            if (elements.length > 0 && elements.length == label.length) {
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    $(element).attr({ "x": options.x, "dy": j });
                    element.textContent = label[i];
                    var bounds = ej.EjSvgRender.utils._measureText(label[i], null, font);
                    j = bounds.height + 2;
                }
            }
            else {
                $("#" + options.id).remove();
                this.drawText(options, label, this.gTransToolEle,font);

            }
        } else {
            $("#" + options.id).text(label);
        }

    },

    drawImage: function (options, element) {

        var img = document.createElementNS(this.svgLink, 'image');
        img.setAttributeNS(null, 'height', options.height);
        img.setAttributeNS(null, 'width', options.width);
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
        img.setAttributeNS(null, 'x', options.x);
        img.setAttributeNS(null, 'y', options.y);
        img.setAttributeNS(null, 'id', options.id);
        img.setAttributeNS(null, 'visibility', options.visibility);
        if (!ej.util.isNullOrUndefined(options.clippath) || !ej.util.isNullOrUndefined(options.preserveAspectRatio)) {
            img.setAttributeNS(null, 'clip-path', options.clippath);
            img.setAttributeNS(null, "preserveAspectRatio", options.preserveAspectRatio);
        }
        $(img).appendTo(element);

    },

    createDefs: function () {
        var defs = document.createElementNS(this.svgLink, "defs");
        return defs;
    },

    createClipPath: function (options) {
        var clipPath = document.createElementNS(this.svgLink, "clipPath");
        $(clipPath).attr(options);
        return clipPath;
    },
    createForeignObject: function (options) {
        var object = document.createElementNS(this.svgLink, "foreignObject");
        $(object).attr(options);
        return object;
    },
    createGroup: function (options) {
        var group = document.createElementNS(this.svgLink, "g");
        $(group).attr(options);
        return group;
    },

    createText: function (options, label) {
        var text = document.createElementNS(this.svgLink, "text");
        $(text).attr(options);
        if (!ej.util.isNullOrUndefined(label))
            text.textContent = label;
        return text;
    },

    createPath: function (options) {
        var path = document.createElementNS(this.svgLink, "path");
        $(path).attr(options);
        return path;
    },

    createCircle: function (options) {
        var circle = document.createElementNS(this.svgLink, "circle");
        $(circle).attr(options);
        return circle;
    },

    createLine: function (options) {
        var line = document.createElementNS(this.svgLink, "line");
        $(line).attr(options);
        return line;
    },

   
    _getAttrVal: function (ele, val, option) {
        var value = $(ele).attr(val);
        if (value != null)
            return value;
        else
            return option;
    },
 
    
    hexFromRGB: function (color) {
        var r = color.R;
        var g = color.G;
        var b = color.B;
        var hex = [r.toString(16), g.toString(16), b.toString(16)];
        $.each(hex, function (nr, val) { if (val.length === 1) { hex[nr] = "0" + val; } });
        return hex.join("").toUpperCase();
    },

    createDelegate: function (context, handler) {
        return function (e) {
            handler.apply(context, [e, this]);
        };
    },

    drawClipPath: function (options, element) {

        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        this.drawRect(options, clipPath);

        this.append(clipPath, defs);

        this.append(defs, element);

    },
   
   append: function (childEle, parentEle) {
        $(childEle).appendTo(parentEle);
   },
   _setAttr: function (element, attribute) {
       $(element).attr(attribute);
   }
};

ej.EjSvgRender.commonChartEventArgs = {
    cancel: false,
    data: null
};
ej.EjSvgRender.utils = {

   

    _decimalPlaces: function (num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; }
        return Math.max(
       0,
        // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
        // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
    },
    _getLabelContent: function (pos, axis) {
        switch (axis._categoryValueType) {
            case 'number':
                var customFormat = (ej.util.isNullOrUndefined(axis.labelFormat)) ? null : axis.labelFormat.match('{value}');
                return (ej.util.isNullOrUndefined(axis.labelFormat)) ? axis.labels[Math.floor(pos)] : (customFormat != null) ? axis.labelFormat.replace('{value}', axis.labels[Math.floor(pos)]) : (Globalize.format(axis.labels[Math.floor(pos)], axis.labelFormat));
            case 'date':
                return (Globalize.format(new Date(axis.labels[Math.floor(pos)]), ((ej.util.isNullOrUndefined(axis.labelFormat)) ? "dd/MM/yyyy" : axis.labelFormat)));
            case 'string':
                return axis.labels[Math.floor(pos)];
            default:
                return "";
        }
    },
    
    //Calculation for label size in template
    _getSeriesTemplateSize: function (point, pointIndex, series, isLeft, sender) {
        var point;
        var pointIndex;
        var areaType = sender.model.AreaType;
         
        var chartContainer = sender._id;
        var seriesIndex = $.inArray(series, sender.model._visibleSeries);

            if ($('#template_group_' + chartContainer).length != 0)
                var templateContainer = $('#template_group_' + chartContainer);
            else
                templateContainer = $("<div></div>").attr('id', "template_group_" + chartContainer);

            templateContainer.css('position', 'relative').css('z-index', 1000);
            var cloneNode = $("#" + series.marker.dataLabel.template).clone();
            $(cloneNode).attr("id", series.marker.dataLabel.template + '_' + seriesIndex + '_' + pointIndex + '_' + chartContainer);
            var $cloneNode = $(cloneNode);
            $cloneNode.css("position", "absolute");
           
            point.count = 1;
            var data = { series: series, point: point };
            $cloneNode.html($cloneNode.html().parseTemplate(data));

            var display = (areaType == "cartesianaxes" || !series.enableAnimation || series.type.toLowerCase() == "pyramid") ? "block" : "none";
            $cloneNode.css("display", display).appendTo($(templateContainer));
            $(templateContainer).appendTo('#' + chartContainer);
            point.size = { height: $cloneNode.height(), width: $cloneNode.width() };
         
            if (isLeft) {
                if (ej.util.isNullOrUndefined(series.LeftLabelMaxHeight) || series.LeftLabelMaxHeight < point.size.height) {
                    series.LeftLabelMaxHeight = point.size.height;
                }
                if (ej.util.isNullOrUndefined(series.LeftLabelMaxWidth) || series.LeftLabelMaxWidth < point.size.width) {
                    series.LeftLabelMaxWidth = point.size.width;
                }
            }
            else {
                if (ej.util.isNullOrUndefined(series.RightLabelMaxHeight) || series.RightLabelMaxHeight < point.size.height) {
                    series.RightLabelMaxHeight = point.size.height;
                }
                if (ej.util.isNullOrUndefined(series.RightLabelMaxWidth) || series.RightLabelMaxWidth < point.size.width) {
                    series.RightLabelMaxWidth = point.size.width;
                }
            }
        
    },
    getMinPointsDelta: function (axis, chartObj, start) {
        var chart = chartObj;
        var m_minPointsDelta = Number.MAX_VALUE;
        $.each(chart.model._visibleSeries, function (index, series) {
            if (series.visibility.toLowerCase() == 'visible' && axis.name == series.xAxisName) {
                var xValues = ej.DataManager(series.points, ej.Query().sortBy("X")).executeLocal();
                if (xValues.length == 1) {
                    var minValue = (start) ? start : series.xAxis.visibleRange.min;
                    var delta = xValues[0].X - minValue;
                    if (delta != 0)
                        m_minPointsDelta = Math.min(m_minPointsDelta, delta);
                }
                else {
                    $.each(xValues, function (pointIndex, point) {
                        if (pointIndex > 0) {
                            var deltaValue = point.X - xValues[pointIndex - 1].X;
                            if (deltaValue != 0) {
                                m_minPointsDelta = Math.min(m_minPointsDelta, deltaValue);
                            }
                        }
                    });
                }
            }
        });

        if (m_minPointsDelta == Number.MAX_VALUE) {
            m_minPointsDelta = 1;
        }
        return m_minPointsDelta;
    },
    //Calculation for label size
    _getSeriesMaxLabel: function (series) {
        var maxTxtDim = { width: 0, height: 0 };
        var width = $(this.svgObject).width();
        var labels=[];
        if (series.labels.length > 0) {
            for (var j = 0; j < series.labels.length; j++) {
                var dim = this._measureText(series.visibleLabels[j], width, series.marker.dataLabel.font);
                if (maxTxtDim.width < dim.width) {
                    maxTxtDim.width = dim.width;
                }
                if (maxTxtDim.height < dim.height) {
                    maxTxtDim.height = dim.height;
                }
            }
            series.LabelMaxHeight = maxTxtDim.height;
            series.LabelMaxWidth = maxTxtDim.width;
        }
        else {
            labels.push(series.rightsidePoints);
            labels.push(series.leftsidePoints);

            for (var k = 0; k < labels.length; k++) {
                for (var j = 0; j < labels[k].length; j++) {
                    var text = (labels[k][j].text) ? labels[k][j].text : labels[k][j].y;
                    var dim = this._measureText(text, width, series.marker.dataLabel.font);
                    if (maxTxtDim.width < dim.width) {
                        maxTxtDim.width = dim.width;
                    }
                    if (maxTxtDim.height < dim.height) {
                        maxTxtDim.height = dim.height;
                    }
                }
                if (k == 0) {
                    series.RightLabelMaxHeight = maxTxtDim.height;
                    series.RightLabelMaxWidth = maxTxtDim.width;
                }
                else {
                    series.LeftLabelMaxHeight = maxTxtDim.height;
                    series.LeftLabelMaxWidth = maxTxtDim.width;
                }
             }
        }
       

    },
    _getMaxLabelWidth: function (axis, sender) {
        var maxTxtDim = { width: 0, height: 0 };
        var rotateLabel = '';
        var currentRow = 1;
        var vmlrendering = sender.svgRenderer.vmlNamespace;
        var range = axis.visibleRange;
        var intersectAction = axis.labelIntersectAction ? axis.labelIntersectAction.toLowerCase() : "";
        var labelPlacement = axis.labelPlacement;
        var opposedPosition = axis.opposedPosition;
        var roundingPlaces = axis.roundingPlaces;
        var labelRotation = axis.labelRotation;
        var orientation = axis.orientation;
        var maxHeight = 0;
        var prevLabels = [];
		
        if (axis.visible) {
		    var visibleLabels = axis.visibleLabels;
            for (var j = 0; j < axis.visibleLabels.length; j++) {
			    axis.visibleLabels[j].y = 0;
                var dim = this._measureText(axis.visibleLabels[j].Text, $(this.svgObject).width(), axis.font, axis.labelRotation);
                if (maxTxtDim.width < dim.width) {
                    maxTxtDim.width = dim.width;
                    rotateLabel = axis.visibleLabels[j].Text;
                }
                if (maxTxtDim.height < dim.height)
                    maxTxtDim.height = dim.height;
            }
			
			 // initialize rows to 1
                maxTxtDim.rows = 1;
                maxTxtDim.maxWidth = maxTxtDim.width;
                maxTxtDim.maxHeight = maxTxtDim.height;
				
            if (!vmlrendering && labelRotation) {
                    maxHeight = this.rotatedLabel(axis, sender, labelRotation, rotateLabel);
                    if (axis.labelIntersectAction && axis.labelIntersectAction.toLowerCase() == 'multiplerows')
                        maxHeight = maxTxtDim.height + maxHeight;
                    maxTxtDim.height = maxHeight;
                }

                if (axis.labelIntersectAction) {
                    if (!vmlrendering) {
                        if (intersectAction == 'rotate90')
                            maxTxtDim.height = this.rotatedLabel(axis, sender, 90, rotateLabel);
                        else if (intersectAction == 'rotate45')
                            maxTxtDim.height = this.rotatedLabel(axis, sender, 45, rotateLabel);
                    }
                    if (intersectAction == 'wrap') {
                        // pointX calculation to find the gap between the ticks
                        labelPlacement = (!(labelPlacement)) ? ej.datavisualization.Chart.LabelPlacement.BetweenTicks : labelPlacement;
                        var ticksbwtLabel = ((axis.labels.length > 1) && (labelPlacement.toLowerCase() == "betweenticks")) ? -0.5 : 0;
                        var tempInterval = ((axis.labels.length > 1) && (ticksbwtLabel < 0)) ? 1 + ticksbwtLabel : visibleLabels[1].Value;
                        tempInterval = (!(roundingPlaces)) ? parseFloat(tempInterval.toFixed((ej.EjSvgRender.utils._decimalPlaces(range.interval) == 0 ?
                            1 : ej.EjSvgRender.utils._decimalPlaces(range.interval)))) : parseFloat(tempInterval.toFixed(roundingPlaces));
                        var pointX = Math.ceil(((tempInterval - range.min) / (range.max - range.min)) * (axis.length));
                        var row = Math.round(maxTxtDim.width / pointX);
                        maxTxtDim.rows = labelRotation ? row - currentRow : row + currentRow;
                        maxTxtDim.height = (maxTxtDim.height + (row) * maxTxtDim.height);
                    }
                    else if (intersectAction == 'multiplerows') {
                        var spaceValue = sender._getLegendSpace();
                        var chartBorderWidth = sender.model.border.width;
                      
                        var verticalaxis = sender.model.axes[1];
                        var realWidth = $(sender.svgObject).width() - sender.model.margin.left - sender.model.margin.right;
                        var axisTitleHeight = (axis.title.text == "" || !(axis.visible)) ? 0 : (this._measureText(axis.title.text, realWidth, axis.title.font).height + (2 * sender.model.elementSpacing));
                        var vAxesWidth = sender.model.elementSpacing + axisTitleHeight + axis.majorTickLines.size + axis.axisLine.width;
                        var yLabels = sender._getYValues(sender.model._visibleSeries[0]);
                        var largest = Math.max.apply(Math, yLabels);
                        var vaxis = sender.model.axes[1];
                        var dim = this._measureText(largest, $(this.svgObject).width(), vaxis.font, vaxis.labelRotation);
 
                        var rightSpacing = spaceValue.rightLegendWidth + vAxesWidth + dim.width + sender.model.margin.right + sender.model.margin.left + (2 * chartBorderWidth);
                        var boundsWidth = $(sender.svgObject).width() - (rightSpacing);
                        if (orientation.toLowerCase() == 'horizontal') {
                            var addedMaxHeight = 0;
                            //loop to get current label
                            for (j = 0; j < visibleLabels.length; j++) {
                                //declaration
                                var currentLabel = visibleLabels[j];
                                var flag = false;
                                maxHeight = Math.max(maxHeight, addedMaxHeight)
                                addedMaxHeight = currentLabel.y = maxTxtDim.height;
                                var text = this._measureText(currentLabel.Text, $(this.svgObject).width(), axis.font);
                                var textWidth = text.width;
                                var textHeight = text.height;
                                var currentPoint = Math.abs(Math.floor(((currentLabel.Value - range.min) / (range.delta)) * (boundsWidth)));
                                // loop to get previous labels                         
                                for (var k = 0; k < prevLabels.length && !flag; k++) {
                                    for (var l = 0; prevLabels[k] && l < prevLabels[k].length; l++) {
                                        var prevLabel = prevLabels[k][l];
                                        var prevPoint = Math.abs(Math.floor(((prevLabel.Value - range.min) / (range.delta)) * (boundsWidth)));
                                        var preTextWidth = this._measureText(prevLabel.Text, $(this.svgObject).width(), axis.font).width;
                                        var value = prevPoint + preTextWidth / 2;
                                        if (value > currentPoint - textWidth / 2 && !ej.util.isNullOrUndefined(currentLabel.y)) {
                                            addedMaxHeight = currentLabel.y + textHeight;
                                            currentLabel.y += textHeight;
                                            if (k + 1 == prevLabels.length)
                                            flag = true;
                                        }
                                        else {
                                            if (l + 1 == prevLabels[k].length) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                    }
                                  
                                 }
                                currentLabel.y = addedMaxHeight;
                                row = (addedMaxHeight / textHeight) - 1;
                                if( prevLabels[row]==undefined)
                                prevLabels[row] = [];
                                prevLabels[row].push(currentLabel);
                               
                            }
                            maxHeight = (prevLabels.length * textHeight);
                         //   maxHeight = opposedPosition ? maxHeight + textHeight : maxHeight;
                            maxTxtDim.height = maxTxtDim.height > maxHeight ? maxTxtDim.height : maxHeight;
                            //calculating rows
                            if (opposedPosition)
                                maxTxtDim.rows = Math.round((maxHeight + textHeight) / textHeight);
                            else
                                maxTxtDim.rows = Math.round((maxHeight + textHeight) / textHeight);
                            maxTxtDim.rows = labelRotation ? maxTxtDim.rows - 1 : maxTxtDim.rows + 1;
                            if (maxTxtDim.rows < 1) maxTxtDim.rows = 1;
                        }
                        if (orientation.toLowerCase() == 'vertical') {
                            var addedMaxWidth = 0;
                            //loop to get current label
                            for (j = 0; j < axis.visibleLabels.length; j++) {
                                currentLabel = axis.visibleLabels[j];
                                text = this._measureText(currentLabel.Text, $(this.svgObject).width(), axis.font);
                                textWidth = text.width;
                                textHeight = text.height;
                                currentPoint = Math.abs(Math.floor(((currentLabel.Value - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.length)));
                                for (i = 0; i < j; i++) {
                                    // loop to get previous labels
                                    prevLabel = axis.visibleLabels[i];
                                    prevPoint = Math.abs(Math.floor(((prevLabel.Value - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.length)));
                                    var prevTextHeight = this._measureText(prevLabel.Text, $(this.svgObject).width(), axis.font).height;
                                    value = prevPoint + prevTextHeight / 2;
                                    if (value > currentPoint - textHeight / 2 && axis.visibleLabels[i].y == currentLabel.y) {
                                        addedMaxWidth = currentLabel.y + textWidth;
                                        currentLabel.y = addedMaxWidth;
                                    }
                                }
                               var maxheight = addedMaxWidth;
                            }
                            // label width + multiple rows width + gap between the rows
                            maxTxtDim.width = maxTxtDim.width + maxheight +5;
                        }
                    }
            }

        }
        return maxTxtDim;
    },
	
        rotatedLabel: function (axis, sender, value, rotatedLabel) {
            // to get height of rotated labels
            var rotatedOptions = {
                'font-size': axis.font.size,
                'transform': 'rotate(' + value + ',0,0)',
                'font-family': axis.font.fontFamily,
                'font-style': axis.font.fontStyle,
                'text-anchor': 'middle'
            };
            var text = sender.svgRenderer.createText(rotatedOptions, rotatedLabel);
            var height = Math.ceil((this._measureBounds(text, sender).height));
            return height;
        },
		
    _getTransform: function (xAxis, yAxis, invertedAxis) {
        var x , y , width, height;
        if (invertedAxis) {
            x = yAxis.x;
            y = xAxis.y;
            width = yAxis.width;
            height = xAxis.height;
        } else {
            {
                x = xAxis.x;
                y = yAxis.y;
                width = xAxis.width;
                height = yAxis.height;
            }
        }
        return { x: x, y: y, width: width, height: height };
    },
    _measureText: function (text, maxwidth, font) {
        var element = $(document).find("#measureTex");
        if (element.length==0) {
            var textObj = document.createElement('text');
            $(textObj).attr({ 'id': 'measureTex'});
            document.body.appendChild(textObj);
        }
        else
        {
            var textObj = element[0];
        }
       
        var style=null, size=null, family=null;
        textObj.innerHTML = text;
        if (font != undefined && font.size == undefined) {
            var fontarray = font;
            fontarray=fontarray.split(" ");
            style = fontarray[0];
            size = fontarray[1];
            family = fontarray[2];
        }
       
        if (font != null) {
            textObj.style.fontSize = (font.size > 0) ? (font.size + "px") : font.size? font.size : size ;
            textObj.style.fontStyle = font.fontStyle? font.fontStyle : style ;
            textObj.style.fontFamily = font.fontFamily ? font.fontFamily : family;
        }
        textObj.style.backgroundColor = 'white';
        textObj.style.position = 'absolute';
        textObj.style.top = -100;
        textObj.style.left = 0;
		textObj.style.visibility = 'hidden';
        if (maxwidth)
            textObj.style.maxwidth = maxwidth + "px";
         
    
        var bounds = { width: textObj.offsetWidth, height: textObj.offsetHeight };
        
        return bounds;
    },
    _measureBounds: function (element, sender) {
        sender.svgRenderer.append(element, sender.svgObject);
        sender.svgRenderer.append(sender.svgObject, sender.element);
        var box = element.getBoundingClientRect();
        var bounds = { left: box.left, right: box.right, top: box.top, bottom: box.bottom, width: (box.right - box.left), height: (box.bottom - box.top) };
        $(element).remove();
        return bounds;
    },
    //Draw clip path for each series to avoid series overlap in multiple axes zooming
    _drawAxesBoundsClipPath: function (gSeriesGroupEle, options, sender) {
        var clipOptions;
        var element = $(gSeriesGroupEle);
        var trans = this._getTransform(options.xAxis, options.yAxis, sender.model.requireInvertedAxes);
        var width = (sender.model.AreaType == "polaraxes") ? $(sender.svgObject).width() : trans.width;
        var height = (sender.model.AreaType == "polaraxes") ? $(sender.svgObject).height() : trans.height;

        clipOptions = {
            'id': gSeriesGroupEle.id + '_ClipRect',
            'x': 0,
            'y': 0,
            'width': width,
            'height': height,
            'fill': 'white',
            'stroke-width': 1,
            'stroke': 'transparent'
        };
        
        sender.svgRenderer.drawClipPath(clipOptions, gSeriesGroupEle);
        element.attr('clip-path', 'url(#' + clipOptions.id + ')');

    },
    _getStringBuilder: function () {

        var data = [];
        var counter = 0;

        return {
            // adds string s to the stringbuilder

            append: function (s) {
                data[counter++] = s;
                return this;
            },

            // removes j elements starting at i, or 1 if j is omitted

            remove: function (i, j) {
                data.splice(i, j || 1);
                return this;
            },

            // inserts string s at i

            insert: function (i, s) {
                data.splice(i, 0, s);
                return this;
            },

            // builds the string

            toString: function (s) { return data.join(s || ""); }
        };


    },
    _addRegion: function (chart, bounds, series, point, pointIndex) {
	    var type = series.type;
        var seriesIndex = $.inArray(series, chart.model._visibleSeries);
        if (seriesIndex >= 0) {
	        var regionItem = { SeriesIndex: seriesIndex, Region: { PointIndex: pointIndex, Bounds: bounds }, type: type };
	        chart.model.chartRegions.push(regionItem);
	    }
    },

    AddRegion: function (chart, bounds, isStripLine) {
       
        if (isStripLine) {
            var regionItem = { isStripLine: isStripLine, Region: { Bounds: bounds } };
            chart.model.chartRegions.push(regionItem);
        }
    },


    _getSvgXY: function (x, y, series, sender) {
        var svgX, svgY;
        if (!(sender.model.requireInvertedAxes)) {
              svgX = x + series.xAxis.x;
              svgY = y + series.yAxis.y;
        } else {
              svgX = x + series.yAxis.x;
              svgY = y + series.xAxis.y;
        }
        return { X: svgX, Y: svgY };
    },
    _getPoint: function (point, series) {
        var x = point.X;
        var y = point.YValues[0];

        var xvalue = (series.xAxis._valueType == "logarithmic") ? ej.EjSvgRender.utils._logBase((x == 0 ? 1 : x), series.xAxis.logBase) : x;
        var yvalue = (series.yAxis._valueType == "logarithmic") ? ej.EjSvgRender.utils._logBase((y == 0 ? 1 : y), series.xAxis.logBase) : y;
      
        xvalue =this._getPointXY(xvalue, series.xAxis.visibleRange, series.xAxis.isInversed) * (series.xAxis.width);
        yvalue = (1 - this._getPointXY(yvalue, series.yAxis.visibleRange, series.yAxis.isInversed)) * (series.yAxis.height);

        return  { X: xvalue, Y: yvalue };
    },
    _getPointXY: function (value, Range, isInversed) {
         
        var result = 0;
        result = (value - Range.min) / (Range.delta);
     
        return (isInversed) ? (1 - result) : result;   
        
    },
    
    _dateTimeLabelFormat: function (intervalType) {
        var format = 'd';
        if (intervalType.toLowerCase() == 'years')
            format = 'MMM, yyyy';
        else if (intervalType.toLowerCase() == 'months')
            format = 'dd, MMM';
        else if (intervalType.toLowerCase() == 'days')
            format = 'MM/dd/yyyy';
        else if (intervalType.toLowerCase() == 'hours')
            format = 'dd, hh:mm';
        else if (intervalType.toLowerCase() == 'seconds' || intervalType.toLowerCase() == 'minutes')
            format = 'hh:mm:ss';
        else if (intervalType.toLowerCase() == 'milliseconds')
            format = 'hh:mm:ss:tt';
        return format;
    },
    _getFontString: function (fontObj) {
        if (fontObj == null)
            fontObj = {};
        if (!fontObj.FontFamily)
            fontObj.FontFamily = "Arial";
        if (!fontObj.FontStyle)
            fontObj.FontStyle = "Normal";
        if (!fontObj.Size)
            fontObj.Size = "12px";

        return fontObj.FontStyle + " " + fontObj.Size + " " + fontObj.FontFamily;
    },

    _valueToVector: function (axis, value) {
        return this._coefficientToVector(this._valueToPolarCoefficient(axis, value));
    },

    TransformToVisible: function (currentseries, x, y, sender) {
        x = (currentseries.xAxis._valueType == "logarithmic") && x > 0 ? Math.log(x, currentseries.xAxis.logBase) : x;
        y = (currentseries.xAxis._valueType == "logarithmic") && y > 0 ? Math.log(y, currentseries.yAxis.logBase) : y;
        var radius = sender.model.Radius * this._valueToCoefficient(currentseries.yAxis, y);
        //var radius = this.chartObj.model.Radius * ej.EjSvgRender.utils._valueToPolarCoefficient(currentseries.yAxis, y);
        var point = this._valueToVector(currentseries.xAxis, x);
        return { X: sender.model.centerX + radius * point.X, Y: sender.model.centerY + radius * point.Y };
    },

    _valueToPolarCoefficient:function(axis, value)
         {
            var start = axis.visibleRange.min;
            var delta = axis.visibleRange.delta;

            result = (value - start) / delta;
            result *= 1 - 1 / (axis.visibleLabels.length);

            return axis.isInversed ?  result : 1 - result;
        },

    _coefficientToVector: function (coefficient)
       {
            var angle = Math.PI * (1.5 - 2 * coefficient);

            return  {X:Math.cos(angle), Y: Math.sin(angle)};
      },


    _valueToCoefficient: function (axis, value, sender) {
        if (sender && sender.model.AreaType=='polaraxes') {
            var yvalue = value;
        }
        else
        var yvalue = (axis._valueType.toLowerCase() == "logarithmic") ?
          ej.EjSvgRender.utils._logBase((value == 0 ? 1 : value), axis.logBase) : value;

        yvalue = (yvalue - axis.visibleRange.min) / (axis.visibleRange.delta);
        
        return (axis.isInversed) ? 1 - yvalue : yvalue;
    },
    _getBoundingClientRect: function (element, sender,series,invertedAxes) {
        var box = element.getBoundingClientRect();
        var position = $("#" + (sender.svgObject.id))[0].getBoundingClientRect();
        var xSeries, ySeries;
        if (invertedAxes) {
            xSeries = this._getTransform(series.xAxis, series.yAxis, true).x;
            ySeries = this._getTransform(series.xAxis, series.yAxis, true).y;
        } else {
            xSeries = this._getTransform(series.xAxis, series.yAxis, false).x;
            ySeries = this._getTransform(series.xAxis, series.yAxis, false).y;
        }
        var x = box.left - (xSeries + position.left);
        var y = box.top - (ySeries + position.top);
        return { x: x, y: y, width: (box.right - box.left), height: (box.bottom - box.top) };
    },
    _minMax: function (value, min, max) {
        return value > max ? max : (value < min ? min : value);
    },
    _inside: function (value, range) {
        if (value === "")
            return false;
        return (value <= range.max) && (value >= range.min);
    },
    _logBase: function (val, base) {
        return Math.log(val) / Math.log(base);
    },
    _correctRect: function (x1, y1, x2, y2) {
        return { X: Math.min(x1, x2), Y: Math.min(y1, y2), Width: Math.abs(x2 - x1), Height: Math.abs(y2 - y1) };
    },
    _getValuebyPoint: function (x, y, series) {


      
        var xValue = (series.xAxis.isInversed) ? (1 - (x / series.xAxis.width)) : (x / series.xAxis.width);
        var yValue = (series.yAxis.isInversed) ? (1 - (y / series.yAxis.height)) : (y / series.yAxis.height);

        xValue = xValue * (series.xAxis.visibleRange.delta) + series.xAxis.visibleRange.min;

        yValue = yValue * (series.yAxis.visibleRange.delta) + series.yAxis.visibleRange.min;

        xValue = (series.xAxis._valueType == "logarithmic") ? Math.pow(series.xAxis.logBase, xValue) : xValue;

        yValue = (series.yAxis._valueType == "logarithmic") ? Math.pow(series.yAxis.logBase, yValue) : yValue;

        return { PointX: xValue, PointY: yValue };

    }
   
};
ej.EjSvgRender.chartSymbol =
{
    _drawSeriesType: function (location, symbolStyle, sender) {
        switch (sender.model.series[symbolStyle.SeriesIndex].type) {
            case ej.datavisualization.Chart.Type.Pie:
            case ej.datavisualization.Chart.Type.Bubble:
                this._drawCircle(location, symbolStyle, sender, sender.gLegendItemEle);
                break;
            case ej.datavisualization.Chart.Type.Column:
                this._drawRectangle(location, symbolStyle, sender, sender.gLegendItemEle);
                break;
            default:
                this._drawRectangle(location, symbolStyle, sender, sender.gLegendItemEle);
                break;
        }

    },

    _drawCircle: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var radius = Math.sqrt(style.height * style.height + style.width * style.width) / 2;

        var options = {
            'id': symbolStyle.ID, 'cx': location.startX, 'cy': location.startY, 'r': radius,
            'fill': symbolStyle.Style.Color, 'stroke-width': symbolStyle.Style.BorderWidth, 'stroke': symbolStyle.Style.BorderColor, 'opacity': symbolStyle.Style.Opacity, 'visibility':symbolStyle.Style.Visibility
        };

        svgRender.drawCircle(options, element);
    },

    _drawLeftArrow: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + ((location.startX - (style.width / 2)) + style.width) + " " + (location.startY + (style.height / 4)) + " " + "L" + " " + ((location.startX - (style.width / 2)) + style.width) + " " + (location.startY + (-style.height / 4)) + " " + "L" + " " + ((location.startX - (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (-style.height / 4)) + " " + "L" + " " + ((location.startX - (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + ((location.startX - (style.width / 2))) + " " + (location.startY) + " " + "L" + " " + ((location.startX - (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + ((location.startX - (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (style.height / 4)) + " " + "L" + " " + ((location.startX - (style.width / 2)) + style.width) + " " + (location.startY + (style.height / 4));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility':symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },


    _drawRightArrow: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + ((location.startX + (style.width / 2)) + style.width) + " " + (location.startY + (style.height / 4)) + " " + "L" + " " + ((location.startX + (style.width / 2)) + style.width) + " " + (location.startY + (-style.height / 4)) + " " + "L" + " " + ((location.startX + (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (-style.height / 4)) + " " + "L" + " " + ((location.startX + (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + ((location.startX + (style.width / 2))) + " " + (location.startY) + " " + "L" + " " + ((location.startX + (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + ((location.startX + (style.width / 2)) + (style.width / 2)) + " " + (location.startY + (style.height / 4)) + " " + "L" + " " + ((location.startX + (style.width / 2)) + style.width) + " " + (location.startY + (style.height / 4));
        var x = ((location.startX + (style.width / 2)));
        var y = location.startY;
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'transform': 'rotate(180,' + x + ',' + y + ')',
            'opacity': symbolStyle.Style.Opacity,
            'visibility':symbolStyle.Style.Visibility,
            'd': path
        };


        svgRender.drawPath(options, element);


    },


    _drawUpArrow: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + ((location.startX) + style.width) + " " + (location.startY - (style.height / 2) + (style.height / 4)) + " " + "L" + " " + ((location.startX) + style.width) + " " + (location.startY - (style.height / 2) + (-style.height / 4)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY - (style.height / 2) + (-style.height / 4)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY - (style.height / 2) + (-style.height / 2)) + " " + "L" + " " + ((location.startX)) + " " + (location.startY - (style.height / 2)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY - (style.height / 2) + (style.height / 2)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY - (style.height / 2) + (style.height / 4)) + " " + "L" + " " + ((location.startX) + style.width) + " " + (location.startY - (style.height / 2) + (style.height / 4));
        var x = ((location.startX));
        var y = (location.startY - (style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'transform': 'rotate(90,' + x + ',' + y + ')',
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };


        svgRender.drawPath(options, element);


    },

    _drawDownArrow: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + ((location.startX) + style.width) + " " + (location.startY + (style.height / 2) + (style.height / 4)) + " " + "L" + " " + ((location.startX) + style.width) + " " + (location.startY + (style.height / 2) + (-style.height / 4)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY + (style.height / 2) + (-style.height / 4)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY + (style.height / 2) + (-style.height / 2)) + " " + "L" + " " + ((location.startX)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY + (style.height / 2) + (style.height / 2)) + " " + "L" + " " + ((location.startX) + (style.width / 2)) + " " + (location.startY + (style.height / 2) + (style.height / 4)) + " " + "L" + " " + ((location.startX) + style.width) + " " + (location.startY + (style.height / 2) + (style.height / 4));


        var x = ((location.startX));
        var y = (location.startY + (style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'transform': 'rotate(-90,' + x + ',' + y + ')',
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };


        svgRender.drawPath(options, element);

    },

    _drawCross: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " "+ (location.startX + (style.width / 2)) + " " + (location.startY) + " " +
        "M" + " " + (location.startX) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY + (-style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'opacity': symbolStyle.Style.Opacity,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.Color,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },

    _drawHorizLine: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY);
        var options = {
            'id': symbolStyle.ID,
            'opacity': symbolStyle.Style.Opacity,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.Color,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);


    },
    _drawVertLine: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + (location.startX) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY + (-style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'opacity': symbolStyle.Style.Opacity,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.Color,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };


        svgRender.drawPath(options, element);

    },

    _drawTriangle: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },

    _drawInvertedTriangle: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 2));
        var x = location.startX;
        var y = location.startY;
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'transform': 'rotate(180,' + x + ',' + y + ')',
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);


    },

    _drawHexagon: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX + (-style.width / 4)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 4)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX + (style.width / 4)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 4)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY);
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },

    _drawWedge: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX + style.width) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (3 * (style.width / 4))) + " " + (location.startY) + " " + "L" + " " + (location.startX + (style.width)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY);
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },

    _drawPentagon: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var eq = 72;
        var radius = Math.sqrt(style.height * style.height + style.width * style.width) / 2;
        var sb = ej.EjSvgRender.utils._getStringBuilder();
        for (var i = 0; i <= 5; i++) {
            var deg = i * eq;
            var rad = (Math.PI / 180) * deg;
            var x1 = radius * Math.cos(rad);
            var y1 = radius * Math.sin(rad);
            if (i == 0)
                sb.append("M" + " " + (location.startX + x1) + " " + (location.startY + y1) + " ");

            else
                sb.append("L" + " " + (location.startX + x1) + " " + (location.startY + y1) + " ");


        }
        var path = sb.toString();
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);


    },

    _drawStar: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var style = symbolStyle.ShapeSize;
        var svgObj = sender.svgObject;

        var path;
        path = "M" + " " + (location.startX + (style.width / 3)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 6)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY + (style.height / 6)) + " " + "L" + " " + (location.startX + (-style.width / 3)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 3)) + " " + (location.startY + (-style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);


    },

    _drawRectangle: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (-style.height / 2));
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);



    },

    _drawTrapezoid: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (-style.height / 4)) + " " + "L" + " " + (location.startX + (-style.width / 2) + (style.width)) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2) + (style.width)) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY + (style.height / 4)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY);
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);

    },

    _drawDiamond: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var path;
        path = "M" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX) + " " + (location.startY + (-style.height / 2)) + " " + "L" + " " + (location.startX + (style.width / 2)) + " " + (location.startY) + " " + "L" + " " + (location.startX) + " " + (location.startY + (style.height / 2)) + " " + "L" + " " + (location.startX + (-style.width / 2)) + " " + (location.startY);

        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'd': path
        };

        svgRender.drawPath(options, element);


    },
    _drawEllipse: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;

        var x = location.startX;
        var y = location.startY;
        var options = {
            'id': symbolStyle.ID,
            'fill': symbolStyle.Style.Color,
            'stroke-width': symbolStyle.Style.BorderWidth,
            'stroke': symbolStyle.Style.BorderColor,
            'opacity': symbolStyle.Style.Opacity,
            'visibility': symbolStyle.Style.Visibility,
            'cx': x,
            'cy': y,
            'rx': style.width,
            'ry': style.height / 2
        };


        svgRender.drawEllipse(options, element);


    },
    _drawImage: function (location, symbolStyle, sender, element) {
        var svgRender = sender.svgRenderer;
        var svgObj = sender.svgObject;
        var style = symbolStyle.ShapeSize;
        var x = location.startX + (-style.width / 2);
        var y = location.startY + (-style.width / 2);
        var width = style.width;
        var height = style.height;
        var options = { 'id': svgObj.id + '_image' + symbolStyle.PointIndex, 'height': height, 'width': width, 'href': symbolStyle.Imageurl,
            'x': x, 'y': y, 'visibility': 'visible'
        };

        svgRender.drawImage(options, element);


    }
};
ej.EjSvgRender.seriesPalette = {
    defaultMetro: ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A", "#FB954F", "#005277", "#8BC652", "#69D2E7", "#E27F2D", "#6A4B82"],
    defaultGradient:
        {
            borderColors: ["#F34649", "#F6D321", "#6EB9B0", "#CBC26A", "#FBAF4F", "#E2CDB1", "#FFC0B7", "#68E1E6", "#E1A62D", "#9C6EBF"],
            seriesColors: [[{ color: "#F34649", colorStop: "0%" }, { color: "#B74143", colorStop: "100%"}],
     [{ color: "#F6D321", colorStop: "0%" }, { color: "#F6AE26", colorStop: "100%"}],
     [{ color: "#6EB9B0", colorStop: "0%" }, { color: "#3F77BD", colorStop: "100%"}],
     [{ color: "#CBC26A", colorStop: "0%" }, { color: "#9AAD21", colorStop: "100%"}],
     [{ color: "#FBAF4F", colorStop: "0%" }, { color: "#F07542", colorStop: "100%"}],
     [{ color: "#E2CDB1", colorStop: "0%" }, { color: "#AAA089", colorStop: "100%"}],
     [{ color: "#8BC652", colorStop: "0%" }, { color: "#6F9E41", colorStop: "100%"}],
     [{ color: "#68E1E6", colorStop: "0%" }, { color: "#3D9CBE", colorStop: "100%"}],
     [{ color: "#E1A62D", colorStop: "0%" }, { color: "#B66824", colorStop: "100%"}],
     [{ color: "#9C6EBF", colorStop: "0%"}], [{ color: "#593F6D", colorStop: "100%"}]]
        },
    blueMetro: ["#005378", "#006691", "#007EB5", "#0D97D4", "#00AEFF", "#14B9FF", "#54CCFF", "#87DBFF", "#ADE5FF", "#C5EDFF"],
    blueGradient:
     {
         seriesColors: [[{ color: "#005277", colorStop: "0%" }, { color: "#00304F", colorStop: "100%"}],
            [{ color: "#006590", colorStop: "0%" }, { color: "#004068", colorStop: "100%"}],
            [{ color: "#007DB4", colorStop: "0%" }, { color: "#00558B", colorStop: "100%"}],
            [{ color: "#0D97D4", colorStop: "0%" }, { color: "#057FC7", colorStop: "100%"}],
            [{ color: "#00ADFE", colorStop: "0%" }, { color: "#008BE9", colorStop: "100%"}],
            [{ color: "#14B8FE", colorStop: "0%" }, { color: "#0798EB", colorStop: "100%"}],
            [{ color: "#53CBFF", colorStop: "0%" }, { color: "#35AFEB", colorStop: "100%"}],
            [{ color: "#86DAFF", colorStop: "0%" }, { color: "#64C0EC", colorStop: "100%"}],
            [{ color: "#ACE5FF", colorStop: "0%" }, { color: "#8DCEED", colorStop: "100%"}],
            [{ color: "#C4ECFF", colorStop: "0%"}], [{ color: "#A3D1E6", colorStop: "100%"}]],
         borderColors: ["#005277", "#006590", "#007DB4", "#0D97D4", "#00ADFE", "#14B8FE", "#53CBFF", "#86DAFF", "#ACE5FF", "#C4ECFF"]
     },
    greenMetro: ["#496612", "#597B15", "#709A1B", "#87B62A", "#9AD926", "#A6DC37", "#BCE654", "#C8E780", "#D5EFA5", "#E2F3BE"],
    greenGradient:
     {

         seriesColors: [[{ color: "#5C7F16", colorStop: "0%" }, { color: "#384C08", colorStop: "100%"}],
            [{ color: "#6A9319", colorStop: "0%" }, { color: "#486009", colorStop: "100%"}],
            [{ color: "#739D1C", colorStop: "0%" }, { color: "#57760B", colorStop: "100%"}],
            [{ color: "#90B546", colorStop: "0%" }, { color: "#6E9215", colorStop: "100%"}],
            [{ color: "#9AD826", colorStop: "0%" }, { color: "#75A010", colorStop: "100%"}],
            [{ color: "#A5DB36", colorStop: "0%" }, { color: "#8EB91D", colorStop: "100%"}],
            [{ color: "#BBE554", colorStop: "0%" }, { color: "#A4C849", colorStop: "100%"}],
            [{ color: "#C8E780", colorStop: "0%" }, { color: "#B4D072", colorStop: "100%"}],
            [{ color: "#D4EEA5", colorStop: "0%" }, { color: "#BFD593", colorStop: "100%"}],
            [{ color: "#E1F2BD", colorStop: "0%"}], [{ color: "#C8D7A8", colorStop: "100%"}]],
         borderColors: ["#5C7F16", "#6A9319", "#739D1C", "#90B546", "#9AD826", "#A5DB36", "#BBE554", "#C8E780", "#D4EEA5", "#E1F2BD"]
     },

    sandleMetro: ["#6C450C", "#82520D", "#A36812", "#C07F1F", "#E69719", "#E89A2B", "#EEB564", "#F3CB93", "#F7DEB4", "#F9E6CA"],
    sandleGradient:
     {


         seriesColors: [[{ color: "#7F602F", colorStop: "0%" }, { color: "#512D04", colorStop: "100%"}],
            [{ color: "#986827", colorStop: "0%" }, { color: "#673803", colorStop: "100%"}],
            [{ color: "#A16C1F", colorStop: "0%" }, { color: "#8A4B05", colorStop: "100%"}],
            [{ color: "#BF812A", colorStop: "0%" }, { color: "#AD630D", colorStop: "100%"}],
            [{ color: "#E49519", colorStop: "0%" }, { color: "#B86607", colorStop: "100%"}],
            [{ color: "#E7992A", colorStop: "0%" }, { color: "#D7780D", colorStop: "100%"}],
            [{ color: "#EDB463", colorStop: "0%" }, { color: "#D98F31", colorStop: "100%"}],
            [{ color: "#F2CA92", colorStop: "0%" }, { color: "#DAAC6F", colorStop: "100%"}],
            [{ color: "#F6DDB3", colorStop: "0%" }, { color: "#DABE8F", colorStop: "100%"}],
            [{ color: "#F8E5C9", colorStop: "0%"}], [{ color: "#DDBE92", colorStop: "100%"}]],
         borderColors: ["#7F602F", "#986827", "#A16C1F", "#BF812A", "#E49519", "#E7992A", "#EDB463", "#F2CA92", "#F6DDB3", "#F8E5C9"]

     }
};

ej.EjSvgRender.themes = {
    flatlight:
    {
        background: 'transparent',
        legend:
        {
            font: { color: "#282828"} 
        },
        title:
        {
            font: { color: '#565656' }
        },
        primaryXAxis:
        {
            majorGridLines:
            {
                color: "#DFDFDF"
            },
            majorTickLines:
            {
                color: "#8E8E8E"
            },
            minorGridLines:
            {
                color: "#DFDFDF"
            },
            minorTickLines:
            {
                color: "#8E8E8E"
            },
            axisLine: { color: '#8E8E8E' },
            font: { color: '#282828' },
            title:
            {
                font: { color: '#282828' }
            },
            crosshairLabel: { rx: 0, ry: 0, border: { color: '#3D3D3D', width: 1 }, fill: '#3D3D3D', font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB' } }
        },
        secondaryX:
        {
            majorGridLines:
            {
                color: "#DFDFDF"
            },
            majorTickLines:
            {
                color: "#8E8E8E"
            },
            minorGridLines:
            {
                color: "#DFDFDF"
            },
            minorTickLines:
            {
                color: "#8E8E8E"
            },
            axisLine: { color: '#8E8E8E' },
            font: { color: '#282828' },
            title:
            {
                font: { color: '#282828' }
            },
            crosshairLabel: { rx: 0, ry: 0, border: { color: '#3D3D3D' ,width: 1 }, fill: '#3D3D3D', font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB'} }
        },

        primaryYAxis:
        {
            majorGridLines:
            {
                color: "#DFDFDF"
            },
            majorTickLines:
            {
                color: "#8E8E8E"
            },
            minorGridLines:
            {
                color: "#DFDFDF"
            },
            minorTickLines:
            {
                color: "#8E8E8E"
            },
            axisLine: { color: '#8E8E8E' },
            font: { color: '#282828' },
            title:
            {
                font: { color: '#282828' }
            },
            crosshairLabel: { rx: 0, ry: 0, border: { color: '#3D3D3D', borderWidth: 1 }, fill: '#3D3D3D', font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB' } }
        },
        secondaryY:
        {
            majorGridLines:
            {
                color: "#DFDFDF"
            },
            majorTickLines:
            {
                color: "#8E8E8E"
            },
            minorGridLines:
            {
                color: "#DFDFDF"
            },
            minorTickLines:
            {
                color: "#8E8E8E"
            },
            axisLine: { color: '#8E8E8E' },
            font: { color: '#282828' },
            title:
            {
                font: { color: '#282828' }
            },
            crosshairLabel: { rx: 0, ry: 0, border: { color: '#3D3D3D', width: 1 }, fill: '#3D3D3D', font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB' } }
        },
        crosshair:
        {
            line:
            {
                width: 1,
                color: 'Black'
            }
        },
        
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.defaultMetro,
        colors: ej.EjSvgRender.seriesPalette.defaultMetro

    },

    flatdark:
        {
            background: '#111111',

            legend:
            {
                font: { color: "#C9C9C9"} 
            },
            title:
            {
                font: { color: '#C9C9C9' }
            },
            primaryXAxis:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: { rx: 0, ry: 0, fill: '#B5B5B5', border: { color: '#B5B5B5', width: 1 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444' } }
             },
            secondaryX:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 }, 
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: {   rx: 0, ry: 0, fill: '#B5B5B5', border:{color: '#B5B5B5', width: 1 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444' } }
             },
            primaryYAxis:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: { rx: 0, ry: 0, fill: '#B5B5B5', border:{color: '#B5B5B5', width: 1 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444' } }
             },
            secondaryY:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: { rx: 0, ry: 0, fill: '#B5B5B5', border: { color: '#B5B5B5', width: 1 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444'} }
             },
            crosshair:
             {
                 line:
                 {
                     width: 1,
                     color: 'White'
                 }
             },
            
            seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.defaultMetro,
            colors: ej.EjSvgRender.seriesPalette.defaultMetro

        },


    gradientlight:
        {
            background: 'transparent',
            legend:
            {
                font: { color: "#282828"} 
            },
            title:
            {
                font: { color: '#565656' }
            },
            primaryXAxis:
             {
                 majorGridLines:
                 {
                     color: "#DFDFDF"
                 },
                 majorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 minorGridLines:
                  {
                      color: "#DFDFDF"
                  },
                 minorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 axisLine: { color: '#8E8E8E' },
                 font: { color: '#282828' },
                 title:
                 {

                     font: { color: '#282828' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#3D3D3D',border:{color: '#3D3D3D',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB'} }
             },
            secondaryX:
             {
                 majorGridLines:
                 {
                     color: "#DFDFDF"
                 },
                 majorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 minorGridLines:
                  {
                      color: "#DFDFDF"
                  },
                 minorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 axisLine: { color: '#8E8E8E' },
                 font: { color: '#282828' },
                 title:
                 {

                     font: { color: '#282828' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#3D3D3D',border:{color: '#3D3D3D',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB'} }
             },
            primaryYAxis:
             {
                 majorGridLines:
                 {
                     color: "#DFDFDF"
                 },
                 majorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 minorGridLines:
                  {
                      color: "#DFDFDF"
                  },
                 minorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 axisLine: { color: '#8E8E8E' },
                 font: { color: '#282828' },
                 title:
                 {

                     font: { color: '#282828' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#3D3D3D',border:{color: '#3D3D3D',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB'} }
             },
            secondaryY:
             {
                 majorGridLines:
                 {
                     color: "#DFDFDF"
                 },
                 majorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 minorGridLines:
                  {
                      color: "#DFDFDF"
                  },
                 minorTickLines:
                  {
                      color: "#8E8E8E"
                  },
                 axisLine: { color: '#8E8E8E' },
                 font: { color: '#282828' },
                 title:
                 {

                     font: { color: '#282828' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#3D3D3D',border:{color: '#3D3D3D',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#DBDBDB'} }
             },
            crosshair:
             {
                 line:
                 {
                     width: 1,
                     color: 'Black'
                 }
             },
            
            seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.defaultGradient.borderColors,
            colors: ej.EjSvgRender.seriesPalette.defaultGradient.seriesColors

        },

    gradientdark:
        {
            background: '#111111',
            legend:
            {
                 font: { color: "#C9C9C9"} 
            },
            title:
            {
                font: { color: '#C9C9C9' }
            },
            primaryXAxis:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#B5B5B5',border:{color: '#B5B5B5',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444'} }
             },
            secondaryX:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#B5B5B5',border:{color: '#B5B5B5',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444'} }
             },
            primaryYAxis:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#B5B5B5',border:{color: '#B5B5B5',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444'} }
             },
            secondaryY:
             {
                 majorGridLines:
                 {
                     color: "#333333"
                 },
                 majorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 minorGridLines:
                  {
                      color: "#333333"
                  },
                 minorTickLines:
                  {
                      color: "#AAAAAA"
                  },
                 axisLine: { color: '#AAAAAA' },
                 font: { color: '#C9C9C9' },
                 title:
                 {

                     font: { color: '#C9C9C9' }
                 },
                 crosshairLabel: {rx: 3, ry: 3, fill: '#B5B5B5',border:{color: '#B5B5B5',  width: 2 }, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1, color: '#444444'} }
             },
            crosshair:
             {
                 line:
                 {
                     width: 1,
                     color: 'White'
                 }
             },
             
            seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.defaultGradient.borderColors,
            colors: ej.EjSvgRender.seriesPalette.defaultGradient.seriesColors

        }
};
$.extend(ej.EjSvgRender.themes, {

    "azure":
    {

        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.blueMetro,
        colors: ej.EjSvgRender.seriesPalette.blueMetro
    },

    "azuredark":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.blueMetro,
        colors: ej.EjSvgRender.seriesPalette.blueMetro
    },
    "gradient-azure":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.blueGradient.borderColors,
        colors: ej.EjSvgRender.seriesPalette.blueGradient.seriesColors
    },

    "gradient-azuredark":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.blueGradient.borderColors,
        colors: ej.EjSvgRender.seriesPalette.blueGradient.seriesColors
    },

    "lime":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.greenMetro,
        colors: ej.EjSvgRender.seriesPalette.greenMetro
    },

    "limedark":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.greenMetro,
        colors: ej.EjSvgRender.seriesPalette.greenMetro
    },
    "gradient-lime":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.greenGradient.borderColors,
        colors: ej.EjSvgRender.seriesPalette.greenGradient.seriesColors
    },

    "gradient-limedark":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.greenGradient.borderColors,
        colors: ej.EjSvgRender.seriesPalette.greenGradient.seriesColors
    },
    "saffron":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.sandleMetro,
        colors: ej.EjSvgRender.seriesPalette.sandleMetro
    },

    "saffrondark":
    {
        seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.sandleMetro,
        colors: ej.EjSvgRender.seriesPalette.sandleMetro
    },
    "gradient-saffron":
{
    seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.sandleGradient.borderColors,
    colors: ej.EjSvgRender.seriesPalette.sandleGradient.seriesColors
},

    "gradient-saffrondark":
{
    seriesBorderDefaultColors: ej.EjSvgRender.seriesPalette.sandleGradient.borderColors,
    colors: ej.EjSvgRender.seriesPalette.sandleGradient.seriesColors
}
});
})(jQuery);;
ej.axisTypes = {};

ej.EjAxisRenderer = function () {
};
var _sideBySeriesPadding = function (chartObj, start, end, axis) {
    var visibleSeries = ej.DataManager(chartObj.model._visibleSeries, ej.Query().sortBy("_zOrder")).executeLocal();
    var isHorizontal = false;
    var isVertical = false;
    var data, startPadding, endPadding;
    for (var i = 0; i < visibleSeries.length; i++) {
        var type = visibleSeries[i].type.toLowerCase();
        if (axis.orientation.toLowerCase()=="horizontal" && (type == "column" || type == "rangecolumn" || type == "stackingcolumn" || type == "candle" || type == "hilo" || type == "hiloopenclose")) {
            isHorizontal = true;
            break;
        } else
            if (axis.orientation.toLowerCase() == "vertical" && (type == "bar" || type == "stackingbar")) {
                isVertical = true;
                break;
        }
    }
    if ((isHorizontal && axis.orientation.toLowerCase() == 'horizontal') || (isVertical && axis.orientation.toLowerCase() == 'vertical')) {
        axis.m_minPointsDelta = undefined;
        var padding = ej.EjSvgRender.utils.getMinPointsDelta(axis, chartObj, start) * 0.5;
        start = start - padding;
        end = end + padding;
		axis.padding = padding;
    }
    
    return data = { startPadding: start, endPadding: end };
};
ej.EjStripline = function (chartobj) {
    this.chart = chartobj;
};
(function ($) {
    ej.EjAxisRenderer.prototype = {

        //Calculate min/max value for series
        _seriesMinMax: function (chartObj, axis, seriesCollection, type) {
            if (seriesCollection.length > 0 && seriesCollection[0].points.length > 0) {

                var maxX, minY, minX, maxY;
                var maxMinXValue = { maxX: null, minX: null };
                var maxMinYValue = { maxY: null, minY: null };

                for (var i = 0; i < seriesCollection.length; i++) {
                    if (seriesCollection.length > 0 && seriesCollection[0].points.length > 0) {
                        if (seriesCollection[i].points.length > 0) {
                            if (seriesCollection[i].visibility.toLowerCase() === 'visible' && seriesCollection[i].points.length > 0) {
                                minX = maxX = seriesCollection[i].points[0].X;
                                maxY = minY = seriesCollection[i].points[0].YValues[0];
                                for (var j = 0; j < seriesCollection[i].points.length; j++) {
                                    var currentPoint = seriesCollection[i].points[j];
                                    if (minX > currentPoint.X)
                                        minX = currentPoint.X;
                                    if (maxX < currentPoint.X)
                                        maxX = currentPoint.X;
                                    if (seriesCollection[i]._hiloTypes) {
                                        for (var y = 0; y < 2; y++) {
                                            if (minY > currentPoint.YValues[y])
                                                minY = currentPoint.YValues[y];
                                            if (maxY < currentPoint.YValues[y])
                                                maxY = currentPoint.YValues[y];
                                        }
                                    } else {
                                        if (minY > currentPoint.YValues[0])
                                            minY = currentPoint.YValues[0];
                                        if (maxY < currentPoint.YValues[0])
                                            maxY = currentPoint.YValues[0];
                                    }
                                }
                                seriesCollection[i].minX = minX;
                                seriesCollection[i].maxX = maxX;
                                seriesCollection[i].minY = minY;
                                seriesCollection[i].maxY = maxY;


                            }
                        }


                    }
                    if (i == 0) {
                        maxMinXValue.maxX = seriesCollection[0].maxX;
                        maxMinXValue.minX = seriesCollection[0].minX;
                        maxMinYValue.maxY = seriesCollection[0].maxY;
                        maxMinYValue.minY = seriesCollection[0].minY;
                    }

                    if (maxMinXValue.minX > seriesCollection[i].minX) {
                        maxMinXValue.minX = seriesCollection[i].minX;
                    }
                    if (maxMinXValue.maxX < seriesCollection[i].maxX) {
                        maxMinXValue.maxX = seriesCollection[i].maxX;
                    }
                    if (maxMinYValue.minY > seriesCollection[i].minY) {
                        maxMinYValue.minY = seriesCollection[i].minY;
                    }
                    if (maxMinYValue.maxY < seriesCollection[i].maxY) {
                        maxMinYValue.maxY = seriesCollection[i].maxY;
                    }

                }
                // Find min/max for stacked series
                if (this.chartObj.model.stackedValue[axis.name]) {
                    var value = this.chartObj.model.stackedValue[axis.name];
                    if (maxMinYValue.minY > value.min)
                        maxMinYValue.minY = value.min;
                    if (maxMinYValue.maxY < value.max)
                        maxMinYValue.maxY = value.max;
                }

                if (maxMinXValue.maxX == maxMinXValue.minX)
                    maxMinXValue.maxX += 1;
               
			    if (maxMinYValue.maxY == maxMinYValue.minY) {                   // max == min
                    if (maxMinYValue.maxY < 0)                                  // value less than 0
                        maxMinYValue.maxY = 0;
                    else if (maxMinYValue.maxY <= 1 && maxMinYValue.maxY > 0)   // value between 0 and 1
                        maxMinYValue.minY = 0;
                    else {                                                      // value greater than 1
                        maxMinYValue.minY = 0;
                        maxMinYValue.maxY += 1;
                    }
                }
               
                var deltaY = maxMinYValue.maxY - maxMinYValue.minY;
                if (type == "double") {
                        var data = _sideBySeriesPadding(chartObj, maxMinXValue.minX, maxMinXValue.maxX, axis);
                        maxMinXValue.minX = data.startPadding;
                        maxMinXValue.maxX = data.endPadding;
                        deltaX = maxMinXValue.maxX - maxMinXValue.minX;                   
                }


                //Set range for each axis
                if (axis.orientation.toLowerCase() == "horizontal") {
                    axis.range = (!(chartObj.model.requireInvertedAxes)) ?
                     (type == "double") ? this._getDoubleAutoRange(axis, maxMinXValue.minX, maxMinXValue.maxX, deltaX)
                         : this._getLogAutoRange(axis, maxMinXValue.minX, maxMinXValue.maxX, deltaX)
                    : (type == "double") ? this._getDoubleAutoRange(axis, maxMinYValue.minY, maxMinYValue.maxY, deltaY)
                        : this._getLogAutoRange(axis, maxMinYValue.minY, maxMinYValue.maxY, deltaY);
                }
                if (axis.orientation.toLowerCase() == "vertical") {
                    axis.range = (!(chartObj.model.requireInvertedAxes)) ?
                         (type == "double") ? this._getDoubleAutoRange(axis, maxMinYValue.minY, maxMinYValue.maxY, deltaY)
                             : this._getLogAutoRange(axis, maxMinYValue.minY, maxMinYValue.maxY, deltaY)
                       : (type == "double") ? this._getDoubleAutoRange(axis, maxMinXValue.minX, maxMinXValue.maxX, deltaX)
                           : this._getLogAutoRange(axis, maxMinXValue.minX, maxMinXValue.maxX, deltaX);
                }
            } else {
                if (!axis.setRange)
                    axis.range = { min: 0, max: 5, interval: 1, Delta: 4 };
            }
        },

    AlignRangeStart: function (sDate, intervalSize, intervalType) {
        var sResult = new Date(sDate);
        if (intervalType.toLowerCase() == "days") {
            var day = Math.floor(Math.floor((sDate.getDate()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), sDate.getMonth(), day, 0, 0, 0);
        } else if (intervalType.toLowerCase() == "hours") {
            var hour = Math.floor(Math.floor((sDate.getHours()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate(), hour, 0, 0);
        } else if (intervalType.toLowerCase() == "milliseconds") {
            var milliseconds = Math.floor(Math.floor((sDate.getMilliseconds()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate(), sDate.getHours(), sDate.getMinutes(), sDate.getSeconds(), milliseconds);
        } else if (intervalType.toLowerCase() == "seconds") {
            var seconds = Math.floor(Math.floor((sDate.getSeconds()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate(), sDate.getHours(), sDate.getMinutes(), seconds, 0);
        } else if (intervalType.toLowerCase() == "minutes") {
            var minutes = Math.floor(Math.floor((sDate.getMinutes()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate(), sDate.getHours(), minutes, 0, 0);
        } else if (intervalType.toLowerCase() == "months") {
            var month = Math.floor(Math.floor((sDate.getMonth()) / intervalSize) * intervalSize);
            sResult = new Date(sDate.getFullYear(), month, sDate.getDate(), 0, 0, 0);
        } else if (intervalType.toLowerCase() == "years") {
            var year = Math.floor(Math.floor(sDate.getFullYear() / intervalSize) * intervalSize);
            sResult = new Date(year, sDate.getMonth(), sDate.getDate(), 0, 0, 0);
        }
        return sResult;
    },
    _increaseDateTimeInterval: function (date, interval, intervalType) {
        var result = new Date(date);
        if (intervalType.toLowerCase() == "days") {
            result.setDate(date.getDate() + interval);
        } else if (intervalType.toLowerCase() == "hours") {
            result.setHours(date.getHours() + interval);
        } else if (intervalType.toLowerCase() == "milliseconds") {
            result.setMilliseconds(date.getMilliseconds() + interval);
        } else if (intervalType.toLowerCase() == "seconds") {
            result.setSeconds(date.getSeconds() + interval);
        } else if (intervalType.toLowerCase() == "minutes") {
            result.setMinutes(date.getMinutes() + interval);
        } else if (intervalType.toLowerCase() == "months") {
            result.setMonth(date.getMonth() + interval);
        } else if (intervalType.toLowerCase() == "years") {
            result.setYear(date.getFullYear() + interval);
        }

        return result;
    },

    _calculatePadding: function (axis) {

        var start = (typeof axis.range.min == "string" && !isNaN(Date.parse(axis.range.min))) ? Date.parse(axis.range.min) : (axis.range.min).getTime();
        var end = (typeof axis.range.max == "string" && !isNaN(Date.parse(axis.range.max))) ? Date.parse(axis.range.max) : (axis.range.max).getTime();
        var interval = ((this._increaseDateTimeInterval(new Date(start), axis.range.interval, axis.intervalType)).getTime()) - start;
        if (!this.chartObj.zoomed && !axis.setRange) {
            start = new Date(start);
            end = new Date(end);
            var intervalType = axis.intervalType.toLowerCase();
            if (axis.rangePadding.toLowerCase() == 'none') {
                start =  start.getTime();
                end = end.getTime();
            } else if (axis.rangePadding.toLowerCase() == 'additional' || axis.rangePadding.toLowerCase() == 'round') {
                switch (intervalType) {
                    case 'years':
                        var startYear = (start.getFullYear() / axis.range.interval) * axis.range.interval;
                        var endYear = end.getFullYear() + (start.getFullYear() - startYear);
                        if (startYear <= 0) {
                            startYear = 1;
                        }
                        if (endYear <= 0) {
                            endYear = 1;
                        }
                        if (axis.rangePadding.toLowerCase() == 'additional') {
                            start = (new Date(startYear - axis.range.interval, 1, 1, 0, 0, 0)).getTime();
                            end = (new Date(endYear + axis.range.interval, 1, 1, 0, 0, 0)).getTime();
                        } else {
                            start = (new Date(startYear, 1, 1, 0, 0, 0)).getTime();
                            end = (new Date(endYear, 1, 1, 0, 0, 0)).getTime();
                        }
                        break;
                    case 'months':
                        var month = (start.getMonth() / axis.range.interval) * axis.range.interval;
                        if (month <= 0) {
                            month = 1;
                        }
                        var endMonth = end.getMonth() + (start.getMonth() - month);
                        if (endMonth <= 0) {
                            endMonth = 1;
                        }
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), month, 1, 0, 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), endMonth, endMonth == 2 ? 28 : 30, 0, 0, 0)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), month + (-axis.range.interval), 1, 0, 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), endMonth + (axis.range.interval), endMonth == 2 ? 28 : 30, 0, 0, 0)).getTime();
                        }
                        break;
                    case 'days':
                        var day = (start.getDate() / axis.range.interval) * axis.range.interval;
                        if (day <= 0) {
                            day = 1;
                        }
                        var endDay = end.getDate() + (start.getDate() - day);
                        if (endDay <= 0) {
                            endDay = 1;
                        }
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), start.getMonth(), day, 0, 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), endDay, 0, 0, 0)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), start.getMonth(), day + (-axis.range.interval), 0, 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), endDay + (axis.range.interval), 0, 0, 0)).getTime();
                        }
                        break;
                    case 'hours':
                        var hour = (start.getHours() / axis.range.interval) * axis.range.interval;
                        var endHour = end.getHours() + (start.getHours() - hour);
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), hour, 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), endHour, 0, 0)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), hour + (-axis.range.interval), 0, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), endHour + (axis.range.interval), 0, 0)).getTime();
                        }
                        break;
                    case 'minutes':
                        var minute = (start.getMinutes() / axis.range.interval) * axis.range.interval;
                        var endMinute = end.getMinutes() + (start.getMinutes() - minute);
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHour(), minute, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHour(), endMinute, 0)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHours(), minute + (-axis.range.interval), 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHours(), minute + (axis.range.interval), 0)).getTime();
                        }
                        break;
                    case 'seconds':
                        var second = (start.getSeconds() / axis.range.interval) * axis.range.interval;
                        var endSecond = end.getSeconds() + (start.getSeconds() - second);
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHours(), start.getMinutes(), second, 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHour(), end.getMinutes(), endSecond, 0)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHours(), start.getMinutes(), second + (-axis.range.interval), 0)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHours(), end.getMinutes(), endSecond + (axis.range.interval), 0)).getTime();
                        }
                        break;
                    case 'milliseconds':
                        var milliSecond = (start.getMilliseconds() / axis.range.interval) * axis.range.interval;
                        var endMilliSecond = end.getMilliseconds() + (start.getMilliseconds() - milliSecond);
                        if (axis.rangePadding.toLowerCase() == 'round') {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHours(), start.getMinutes(), start.getSeconds(), milliSecond)).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHours(), end.getMinutes(), end.getSeconds(), endMilliSecond)).getTime();
                        } else {
                            start = (new Date(start.getFullYear(), start.getMonth(), start.getDay(), start.getHours(), start.getMinutes(), start.getSeconds(), milliSecond + (-axis.range.interval))).getTime();
                            end = (new Date(end.getFullYear(), end.getMonth(), end.getDay(), end.getHours(), end.getMinutes(), end.getSeconds(), endMilliSecond + (axis.range.interval))).getTime();
                        }
                        break;
                }

            }

        }
        axis.actualRange.interval = interval;
        axis.actualRange.min = start;
        axis.actualRange.max = end;
        axis._intervalType = axis.intervalType;
        axis._interval = axis.range.interval;
        axis.actualRange.delta = (axis.actualRange.max - axis.actualRange.min);
        axis.range.min = new Date(start);
        axis.range.max = new Date(end);
        this._calculateVisibleRange(axis);

    },
    _calculateVisibleRange: function (axis) {
        axis.visibleRange = $.extend(true, {}, axis.actualRange);
        axis._intervalType = axis.intervalType;
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {

            var baseRange = axis.actualRange;
            if (axis.isInversed) {
                var start = axis.actualRange.max - axis.zoomPosition * axis.actualRange.delta;
                var end = start - axis.zoomFactor * axis.actualRange.delta;
            }
            else {
                var start = axis.actualRange.min + axis.zoomPosition * axis.actualRange.delta;
                var end = start + axis.zoomFactor * axis.actualRange.delta;
            }

            if (start < baseRange.min) {
                end = end + (baseRange.min - start);
                start = baseRange.min;
            }

            if (end > baseRange.max) {
                start = start - (end - baseRange.max);
                end = baseRange.max;
            }

            var startDate = new Date(start);
            var endDate = new Date(end);
            //Use below code to find min,max and interval for visible range
            var intervalX = this.calculateDateTimeNiceInterval(axis, startDate, endDate);
            axis.visibleRange.min = Math.min(startDate.getTime(), endDate.getTime());
            axis.visibleRange.max = Math.max(startDate.getTime(),endDate.getTime());
            var interval = ((this._increaseDateTimeInterval(startDate, intervalX.interval, intervalX.intervalType)).getTime()) - axis.visibleRange.min;
            axis._intervalType = intervalX.intervalType;
            axis.visibleRange.interval = interval;
            axis.visibleRange.delta = Math.abs(axis.visibleRange.max - axis.visibleRange.min);
            axis._interval = intervalX.interval;
        }

    },
    _calculateAxisLabels: function (axis) {
        var position;
        if (this.chartObj.zoomed || axis.zoomed || !axis.setRange)
            position = (this.AlignRangeStart(new Date(axis.visibleRange.min), axis._interval, axis._intervalType)).getTime();

        else
            position = axis.visibleRange.min;
        while (position <= axis.visibleRange.max) {
            if (position >= axis.visibleRange.min && position <= axis.visibleRange.max) {

                axis.visibleLabels.push({ Value: position, Text: (Globalize.format(new Date(position), ((!(axis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(axis._intervalType) : axis.labelFormat))) });
            }
            position = (this._increaseDateTimeInterval(new Date(position), axis._interval, axis._intervalType)).getTime();
            var commonAxesEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonAxesEventArgs.data = { label: axis.visibleLabels[axis.visibleLabels.length - 1], axis: axis };
            this.chartObj._trigger("axesLabelRendering", commonAxesEventArgs);
            axis.visibleLabels[axis.visibleLabels.length - 1] = commonAxesEventArgs.data.label;
        }
        axis._LableMaxWidth = ej.EjSvgRender.utils._getMaxLabelWidth(axis, this.chartObj);
    },
    calculateDateTimeNiceInterval: function (axis, startDate, endDate) { 
        var oneDay = 24 * 60 * 60 * 1000;
        //var axisInterval ;
        var totalDays = (Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));
        var interval = this.calculateNumericNiceInterval(totalDays / 365, axis);

        if (interval >= 1) {
            return { interval: interval, intervalType: "Years" };
        }

        interval = this.calculateNumericNiceInterval(totalDays / 30, axis);

        if (interval >= 1) {
            return { interval: interval, intervalType: "Months" };
        }

        interval = this.calculateNumericNiceInterval(totalDays, axis);

        if (interval >= 1) {


            return { interval: interval, intervalType: "Days" };
        }

        var totalHours = totalDays * 24;

        interval = this.calculateNumericNiceInterval(totalHours, axis);

        if (interval >= 1) {

            return { interval: interval, intervalType: "Hours" };
        }

        var totalMinutes = totalDays * 24 * 60;

        interval = this.calculateNumericNiceInterval(totalMinutes, axis);

        if (interval >= 1) {

            return { interval: interval, intervalType: "Minutes" };
        }

        var totalSeconds = totalDays * 24 * 60 * 60;

        interval = this.calculateNumericNiceInterval(totalSeconds, axis);

        if (interval >= 1) {

            return { interval: interval, intervalType: "Seconds" };
        }

        var totalMilliseconds = totalDays * 24 * 60 * 60 * 1000;

        interval = this.calculateNumericNiceInterval(totalMilliseconds, axis);

        if (interval >= 1) {

            return { interval: interval, intervalType: "Milliseconds" };
        }

    },
    calculateNumericNiceInterval: function (delta, axis) {
        var desiredIntervalsCount = this.GetActualDesiredIntervalsCount(axis, axis.length);
        var niceInterval = delta / desiredIntervalsCount;
        var minInterval = Math.pow(10, Math.floor(ej.EjSvgRender.utils._logBase(niceInterval, 10)));
        var intervalDivs = [10, 5, 2, 1];

        for (var i = 0; i < intervalDivs.length; i++) {
            var currentInterval = minInterval * intervalDivs[i];
            if (desiredIntervalsCount < (delta / currentInterval)) {
                return niceInterval;
            }

            niceInterval = currentInterval;
        }

        return niceInterval;
    },
    GetActualDesiredIntervalsCount: function (axis, size) {
        if (ej.util.isNullOrUndefined(axis.desiredIntervals)) {
            var desiredIntervalsCount = (axis.orientation.toLowerCase() == "horizontal" ? 0.533 : 1) * axis.maximumLabels;
            desiredIntervalsCount = Math.max((size * (desiredIntervalsCount / 100)), 1);
            axis.desiredIntervals = desiredIntervalsCount;
            return desiredIntervalsCount;
        } else {
            return axis.desiredIntervals;
        }
    },
    _calculateRange: function (axis, seriesCollection) {
        if (!this.chartObj.zoomed) {
            var defaultDate = new Date();
            if (seriesCollection.length > 0 && seriesCollection[0].points.length > 0) {
                var maxX, minY;
                var maxY, minX;
                var maxMinXValue = { maxX: null, minX: null };
                var maxMinYValue = { maxY: null, minY: null };
                for (var i = 0; i < seriesCollection.length; i++) {
                    if (seriesCollection[i].points.length > 0) {
                        if (seriesCollection[i].visibility.toLowerCase() === 'visible' && seriesCollection[i].points.length > 0) {
                            minX = maxX = seriesCollection[i].points[0].X;
                            maxY = minY = seriesCollection[i].points[0].YValues[0];
                            for (var j = 0; j < seriesCollection[i].points.length; j++) {
                                if (minX > seriesCollection[i].points[j].X)
                                    minX = seriesCollection[i].points[j].X;
                                if (maxX < seriesCollection[i].points[j].X)
                                    maxX = seriesCollection[i].points[j].X;
                                if (minY > seriesCollection[i].points[j].YValues[0])
                                    minY = seriesCollection[i].points[j].YValues[0];
                                if (maxY < seriesCollection[i].points[j].YValues[0])
                                    maxY = seriesCollection[i].points[j].YValues[0];
                            }
                            seriesCollection[i].minX = minX;
                            seriesCollection[i].maxX = maxX;
                            seriesCollection[i].minY = minY;
                            seriesCollection[i].maxY = maxY;
                        }
                    }
                    
                    if ((maxMinXValue.minX = (maxMinXValue.minX == null  && typeof seriesCollection[i].minX != "number") ? seriesCollection[i].minX : maxMinXValue.minX) > seriesCollection[i].minX) {
                        maxMinXValue.minX = (typeof seriesCollection[i].minX != "number") ? seriesCollection[i].minX : maxMinXValue.minX;
                        }
                    if ((maxMinXValue.maxX = (maxMinXValue.maxX == null && typeof seriesCollection[i].maxX != "number") ? seriesCollection[i].maxX : maxMinXValue.maxX) < seriesCollection[i].maxX) {
                        maxMinXValue.maxX = (typeof seriesCollection[i].maxX != "number") ? seriesCollection[i].maxX : maxMinXValue.maxX;
                        }
                        if (maxMinYValue.minY > seriesCollection[i].minY) {
                            maxMinYValue.minY = seriesCollection[i].minY;
                        }
                        if (maxMinYValue.maxY < seriesCollection[i].maxY) {
                            maxMinYValue.maxY = seriesCollection[i].maxY;
                        }
               
                }
                maxMinXValue.minX = (maxMinXValue.minX == null) ? defaultDate : maxMinXValue.minX;
                maxMinXValue.maxX = (maxMinXValue.maxX == null) ? new Date(new Date().setMonth(defaultDate.getMonth() + 5)) : maxMinXValue.maxX;
                if (maxMinXValue.minX == maxMinXValue.maxX) {
                    maxMinXValue.minX = new Date(Date.parse(maxMinXValue.minX) - 2592000000);
                    maxMinXValue.maxX = new Date(Date.parse(maxMinXValue.maxX) + 2592000000);
                }

                var data = _sideBySeriesPadding(this.chartObj, Date.parse(maxMinXValue.minX), Date.parse(maxMinXValue.maxX), axis);
                maxMinXValue.minX = new Date(data.startPadding);
                maxMinXValue.maxX = new Date(data.endPadding);

                var intervalX = this.calculateDateTimeNiceInterval(axis, maxMinXValue.minX, maxMinXValue.maxX);                
            
                    if ((!axis.setRange)) {
                        axis.range = { min: maxMinXValue.minX, max: maxMinXValue.maxX, interval: intervalX.interval };
                        axis.intervalType = intervalX.intervalType;

                    } else {
                        if (ej.util.isNullOrUndefined(axis.actual_Range)) {
                            if (ej.util.isNullOrUndefined(axis.range.interval))
                                axis.range.interval = intervalX.interval;
                            if (!axis.range.max)
                                axis.range.max = maxMinXValue.maxX;
                            if (!axis.range.min)
                                axis.range.min = maxMinXValue.minX;
                            if (!axis.intervalType)
                                axis.intervalType = intervalX.intervalType;
                            if (typeof axis.range.min == "string" && axis.range.min.indexOf("/Date(") != -1)
                                axis.range.min = new Date(parseInt(axis.range.min.substr(6)));
                            if (typeof axis.range.max == "string" && axis.range.max.indexOf("/Date(") != -1)
                                axis.range.max = new Date(parseInt(axis.range.max.substr(6)));
                            axis.actual_Range = $.extend(true, {}, axis.range);
                            axis.interval_Type = axis.intervalType;
                            axis.setRange = true;
                        }
                        axis.range = { min: axis.actual_Range.min, max: axis.actual_Range.max, interval: axis.actual_Range.interval };
                        axis.intervalType = axis.interval_Type;
                    }
            } else {
                if (!axis.setRange) {
                    axis.range = { min: defaultDate, max: new Date(new Date().setMonth(defaultDate.getMonth() + 5)), interval: 1 };
                    axis.intervalType = 'Months';
                }

            }
        }
    },

    _calculateRanges: function (chartObj, axis, seriesCollection) {

        this.chartObj = chartObj;

        this._calculateRange(axis, seriesCollection);

        this._calculatePadding(axis);

        this._calculateAxisLabels(axis);
    }
};

function ejExtendClass(parent, members) {
    var object = function () {
    };
    object.prototype = new parent();
    $.extend(object.prototype, members);
    return object;
}

//DateTime calculation
var ejDateTimeValue = ejExtendClass(ej.EjAxisRenderer);
ej.axisTypes.datetime = ejDateTimeValue;

var ejDoubleValue = ejExtendClass(ej.EjAxisRenderer, {
    
  
    _calculateRange: function (chartObj, axis, seriesCollection) {
        if (!chartObj.zoomed) {
            this._seriesMinMax(chartObj,axis, seriesCollection, "double");
        }
    },
    
    _getDoubleAutoRange: function (axis, min, max, delta) {
        var interval = this.calculateNumericNiceInterval(delta, axis);
        if (!axis.setRange) {
            return axis.range = { min: min, max: max, interval: interval, Delta: delta };

        } else {
            if (ej.util.isNullOrUndefined(axis.range.interval))
                      axis.range.interval = interval;
            if (ej.util.isNullOrUndefined(axis.range.max))
                       axis.range.max = max;          
            if (ej.util.isNullOrUndefined(axis.range.min))
                       axis.range.min = min;
            if (ej.util.isNullOrUndefined(axis.actual_Range)) {
                axis.actual_Range = $.extend(true, {}, axis.range);
                axis.setRange = true;
            }
            return axis.range = { min: axis.actual_Range.min, max: axis.actual_Range.max, interval: axis.actual_Range.interval, delta: (axis.actual_Range.max - axis.actual_Range.min) };
        }
    },
    _calculatePadding: function (chartObj, axis, baseRange) {
        var start = baseRange.min;
        var end = baseRange.max;
        var rangePadding = axis.rangePadding.toLowerCase();
        var interval= baseRange.interval;
        if ((!axis.setRange) && (!chartObj.zoomed)) {
               
            if (rangePadding == 'normal') {
                var minimum = 0, remaining;
                if (start < 0) {
                    start = 0;
                    minimum = baseRange.min + (baseRange.min / 20);

                    remaining =  interval + (minimum %  interval);

                    if ((0.365 *  interval) >= remaining) {
                        minimum -= interval;
                    }

                    if (minimum %  interval < 0) {
                        minimum = (minimum -  interval) - (minimum % interval);
                    }
                } else {
                    minimum = start < ((5.0 / 6.0) * end)
                        ? 0
                        : (start - (end - start) / 2);
                    if (minimum %  interval > 0) {
                        minimum -= (minimum %  interval);
                    }
                }
                var maximum = (end + (end - start) / 20);

                remaining = interval - (maximum % interval);

                if ((0.365 *  interval) >= remaining) {
                    maximum +=  interval;
                }

                if (maximum %  interval > 0) {
                    maximum = (maximum +  interval) - (maximum % interval);
                }
                 if (minimum <= 0) {
                    interval = this.calculateNumericNiceInterval(maximum - minimum, axis);
                    maximum = Math.ceil(maximum / interval) * interval;
                }
                start = (!(axis.roundingPlaces)) ? parseFloat(minimum.toFixed((ej.EjSvgRender.utils._decimalPlaces(interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(interval)))) : parseFloat(minimum.toFixed(axis.roundingPlaces));
                end = (!(axis.roundingPlaces)) ? parseFloat(maximum.toFixed((ej.EjSvgRender.utils._decimalPlaces(interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(interval)))) : parseFloat(maximum.toFixed(axis.roundingPlaces));

            } else if (rangePadding == 'additional' || rangePadding == 'round') {
                start = Math.floor((start / interval) * interval);
                end = Math.ceil((end / interval) * interval);
                if (rangePadding == 'additional') {
                    start -= interval;
                    end +=  interval;
                }
            }


        }
        axis.actualRange.min = start;
        axis.actualRange.max = end;
        axis.actualRange.interval = interval;
        axis.range.min = start;
        axis.range.max = end;
        axis.range.interval =  interval;
        axis.actualRange.delta = end - start;
        this._calculateVisibleRange(axis);
    },
    _calculateVisibleRange: function (axis) {
        axis.visibleRange = $.extend(true, {}, axis.actualRange);
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            var baseRange = axis.actualRange;

            if (axis.isInversed) {
                var start=axis.actualRange.max - axis.zoomPosition * axis.actualRange.delta;
                var end = start - axis.zoomFactor * axis.actualRange.delta;
            }
            else {
                var start = axis.actualRange.min + axis.zoomPosition * axis.actualRange.delta;
                var end = start + axis.zoomFactor * axis.actualRange.delta;
            }

            if (start < baseRange.min) {
                end = end + (baseRange.min - start);
                start = baseRange.min;
            }

            if (end > baseRange.max) {
                start = start - (end - baseRange.max);
                end = baseRange.max;
            }
            var delta =Math.abs(end-start);
            axis.visibleRange.interval = (this.calculateNumericNiceInterval(delta, axis));
            var factor = (ej.util.isNullOrUndefined(axis.roundingPlaces)) ? (ej.EjSvgRender.utils._decimalPlaces(axis.visibleRange.interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(axis.visibleRange.interval)) : axis.roundingPlaces;
            axis.visibleRange.interval = parseFloat(axis.visibleRange.interval.toFixed(factor));
            axis.visibleRange.min = Math.min(start, end);
            axis.visibleRange.max = Math.max(start, end);
            axis.visibleRange.delta = delta;
            axis.zoomed = (this.chartObj.zoomed === null || this.chartObj.zoomed === undefined) ? true : this.chartObj.zoomed;
        }

    },
    _calculateAxisLabels: function (chartObj, currentAxis) {

        var tempInterval;
		if (chartObj.zoomed || currentAxis.zoomed || currentAxis.padding)
            tempInterval = currentAxis.visibleRange.min - (currentAxis.visibleRange.min % currentAxis.visibleRange.interval);
		else
            tempInterval = currentAxis.visibleRange.min;
        for (; tempInterval <= currentAxis.visibleRange.max; tempInterval += currentAxis.visibleRange.interval) {
            tempInterval = (!(currentAxis.roundingPlaces)) ? parseFloat(tempInterval.toFixed((ej.EjSvgRender.utils._decimalPlaces(currentAxis.visibleRange.interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(currentAxis.visibleRange.interval)))) : parseFloat(tempInterval.toFixed(currentAxis.roundingPlaces));

            if (ej.EjSvgRender.utils._inside(tempInterval, currentAxis.visibleRange)) {


                var customFormat = (!(currentAxis.labelFormat)) ? null : currentAxis.labelFormat.match('{value}');
                var labelText = (!(currentAxis.labelFormat)) ? tempInterval : (customFormat != null) ? currentAxis.labelFormat.replace('{value}', tempInterval) : (Globalize.format(tempInterval, currentAxis.labelFormat));
                currentAxis.visibleLabels.push({ Value: tempInterval, Text: labelText });
                // customize label by event
                var commonAxesEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                commonAxesEventArgs.data = { label: currentAxis.visibleLabels[currentAxis.visibleLabels.length - 1], axis: currentAxis };
                chartObj._trigger("axesLabelRendering", commonAxesEventArgs);
                currentAxis.visibleLabels[currentAxis.visibleLabels.length - 1] = commonAxesEventArgs.data.label;
            }
        }

        currentAxis._LableMaxWidth = ej.EjSvgRender.utils._getMaxLabelWidth(currentAxis, this.chartObj);

    },

    _calculateRanges: function (chartObj, axis, seriesCollection) {
        this.chartObj = chartObj;

        this._calculateRange(chartObj, axis, seriesCollection);


        this._calculatePadding(chartObj, axis, axis.range);


        this._calculateAxisLabels(chartObj, axis);

    }
});
ej.axisTypes.double = ejDoubleValue;
//log axis
var ejLogValue = ejExtendClass(ej.EjAxisRenderer, {
    
    // Get value for log min and max
   _getRoundValue:function (x,div,up)
    {
        return (up ? Math.ceil(x / div) : Math.floor(x / div)) * div;
   },
   
   // Caculate log nice interval
  calculateLogNiceInterval: function (delta, axis) {
       var desiredIntervalsCount = this.GetActualDesiredIntervalsCount(axis, axis.length);
       var niceInterval = delta;
       var minInterval = Math.pow(10, Math.floor(ej.EjSvgRender.utils._logBase(niceInterval, 10)));
       var intervalDivs = [10, 5, 2, 1];

       for (var i = 0; i < intervalDivs.length; i++) {
           var currentInterval = minInterval * intervalDivs[i];
           if (desiredIntervalsCount < (delta / currentInterval)) {
               return niceInterval;
           }

           niceInterval = currentInterval;
       }

       return niceInterval;
  },
   
    // Get log value for auto range
    _getLogAutoRange: function (axis, min, max, delta) {
        
        var logStart = ej.EjSvgRender.utils._logBase(min, axis.logBase);
        logStart = $.isNumeric(logStart) ? logStart : min;
        var logEnd = ej.EjSvgRender.utils._logBase(max, axis.logBase);
        logEnd = $.isNumeric(logEnd) ? logEnd : max;
     
        var mulS = this._getRoundValue(logStart, 1, false);
        var mulE = this._getRoundValue(logEnd, 1, true);
        delta = mulE - mulS;
        
        var interval = this.calculateLogNiceInterval(delta, axis);
        if (!axis.setRange) {
            return axis.range = { min: mulS, max: mulE, interval: interval, Delta: delta };

        } else {
            if (ej.util.isNullOrUndefined(axis.range.interval))
                axis.range.interval = interval;
            if (ej.util.isNullOrUndefined(axis.range.max))
                axis.range.max = mulE;
            if (ej.util.isNullOrUndefined(axis.range.min))
                axis.range.min = mulS;
            if (ej.util.isNullOrUndefined(axis.actual_Range)) {
                axis.actual_Range = $.extend(true, {}, axis.range);
                axis.setRange = true;
            }
            return axis.range = {
                min: axis.actual_Range.min,
                max: axis.actual_Range.max,
                interval: axis.actual_Range.interval,
                delta: (axis.actual_Range.max - axis.actual_Range.min)
            };
        }
    },
   
      //Calcualte auto log range from series
        _calculateLogRange: function (chartObj, axis, seriesCollection) {
            if (!chartObj.zoomed) {
                this._seriesMinMax(chartObj,axis, seriesCollection, "logarithmic");
            }
        },
   
       //Assign base range values to actual range
        _calculateLogPadding: function (chartObj, axis, baseRange) {
            // No padding support for log axis
            var start = baseRange.min;
            var end = baseRange.max;
            var interval = baseRange.interval;
            axis.actualRange.min = start;
            axis.actualRange.max = end;
            axis.actualRange.interval = interval;
            axis.range.min = start;
            axis.range.max = end;
            axis.range.interval = interval;
            axis.actualRange.delta = end - start;
            this._calculateVisibleRange(axis);
        },
   
        // Calculate visible range for zooming
        _calculateVisibleRange: function (axis) {
            axis.visibleRange = $.extend(true, {}, axis.actualRange);
            if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
                var baseRange = axis.actualRange;
                if (axis.isInversed) {
                    var start = axis.actualRange.max - axis.zoomPosition * axis.actualRange.delta;
                    var end = start - axis.zoomFactor * axis.actualRange.delta;
                }
                else {
                    var start = axis.actualRange.min + axis.zoomPosition * axis.actualRange.delta;
                    var end = start + axis.zoomFactor * axis.actualRange.delta;
                }

                if (start < baseRange.min) {
                    end = end + (baseRange.min - start);
                    start = baseRange.min;
                }

                if (end > baseRange.max) {
                    start = start - (end - baseRange.max);
                    end = baseRange.max;
                }
                var delta = Math.abs(end - start);
                axis.visibleRange.interval = (this.calculateLogNiceInterval(delta, axis));
                var factor = (ej.util.isNullOrUndefined(axis.roundingPlaces)) ?
                    (ej.EjSvgRender.utils._decimalPlaces(axis.visibleRange.interval) == 0 ? 1
                    : ej.EjSvgRender.utils._decimalPlaces(axis.visibleRange.interval)) : axis.roundingPlaces;
                axis.visibleRange.interval = parseFloat(axis.visibleRange.interval.toFixed(factor));
                axis.visibleRange.min = Math.min(start, end);
                axis.visibleRange.max = Math.max(start, end);
                axis.visibleRange.delta = delta;
                axis.zoomed = (this.chartObj.zoomed === null || this.chartObj.zoomed === undefined) ? true : this.chartObj.zoomed;
            }

        },
   
        //Method implementation for Generate Labels in ChartAxis
        _calculateAxisLabels: function (chartObj, currentAxis) {

            var tempInterval;
            if (chartObj.zoomed || currentAxis.zoomed)
                tempInterval = currentAxis.visibleRange.min - (currentAxis.visibleRange.min % currentAxis.visibleRange.interval);
            else
                tempInterval = currentAxis.visibleRange.min;
            for (; tempInterval <= currentAxis.visibleRange.max; tempInterval += currentAxis.visibleRange.interval) {
                

                if (ej.EjSvgRender.utils._inside(tempInterval, currentAxis.visibleRange)) {      
                    var customFormat = (!(currentAxis.labelFormat)) ? null : currentAxis.labelFormat.match('{value}');
                    var tempIntervaltext = Math.pow(currentAxis.logBase, tempInterval);
                    tempIntervaltext = (!(currentAxis.roundingPlaces)) ?
                        parseFloat(tempIntervaltext.toFixed((ej.EjSvgRender.utils._decimalPlaces(currentAxis.visibleRange.interval) == 0 ? 1
                            : ej.EjSvgRender.utils._decimalPlaces(currentAxis.visibleRange.interval))))
                            : parseFloat(tempIntervaltext.toFixed(currentAxis.roundingPlaces));
                    var labelText = (!(currentAxis.labelFormat)) ? tempIntervaltext : (customFormat != null) ?
                             currentAxis.labelFormat.replace('{value}', tempIntervaltext) :
                              (Globalize.format(tempIntervaltext, currentAxis.labelFormat));
                    currentAxis.visibleLabels.push({ Value:tempInterval, Text: labelText });
                    // customize label by event
                    var commonAxesEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                    commonAxesEventArgs.data = { label: currentAxis.visibleLabels[currentAxis.visibleLabels.length - 1], axis: currentAxis };
                    chartObj._trigger("axesLabelRendering", commonAxesEventArgs);
                    currentAxis.visibleLabels[currentAxis.visibleLabels.length - 1] = commonAxesEventArgs.data.label;
                }
            }

            currentAxis._LableMaxWidth = ej.EjSvgRender.utils._getMaxLabelWidth(currentAxis, this.chartObj);

        },


        //Category axis calculation
        _calculateRanges: function (chartObj, axis, seriesCollection) {
            this.chartObj = chartObj;
            this._calculateLogRange(chartObj,axis, seriesCollection);
            this._calculateLogPadding(chartObj,axis,axis.range);
            this._calculateAxisLabels(chartObj,axis);
        }

        
    });
    ej.axisTypes.logarithmic = ejLogValue;
    
//Category Axes calculation
var ejCategoryValue = ejExtendClass(ej.EjAxisRenderer, {
    //axis range calculation and assign indexed value to x value of points
    _calculateCategoryRange: function (axis, seriesCollection) {
        if (!this.chartObj.zoomed) {
            var maxXValue = { maxX: null, minX: 0 };
            if (seriesCollection.length > 0 && seriesCollection[0].points.length > 0) {
                for (var l = 0; l < seriesCollection.length; l++) {
                    seriesCollection[l]._pointCollection = [];
                    for (var k = 0; k < seriesCollection[l].points.length; k++) {
                        seriesCollection[l]._pointCollection.push(seriesCollection[l].points[k].x);
                        seriesCollection[l].points[k].X = k;
                        seriesCollection[l].minX = 0;
                        seriesCollection[l].maxX = (seriesCollection[l]._pointCollection.length - 1);
                    }
                    // To find maximum x value of axis from series collection
                    if (l == 0) {
                        maxXValue.maxX = (seriesCollection[l]._pointCollection.length - 1);
                        axis.labels = seriesCollection[l]._pointCollection;
                        axis._categoryValueType = seriesCollection[l]._xAxisValueType;
                    }
                    if (maxXValue.maxX < (seriesCollection[l].maxX)) {
                        maxXValue.maxX = seriesCollection[l].maxX;
                        axis.labels = [];
                        axis.labels = seriesCollection[l]._pointCollection;
                    }
                }
                var deltaX = maxXValue.maxX - maxXValue.minX;
                var intervalX = this._calculateActualInterval(deltaX, axis);
                axis.range = { min: maxXValue.minX, max: maxXValue.maxX, interval: intervalX, Delta: deltaX };
            }
            else {
                if(axis.labels.length>0)
                    axis.range = { min: 0, max: axis.labels.length - 1, interval: 1, Delta: axis.labels.length - 1 };
            }       
        }
    },

    //Calculates actual interval
    _calculateActualInterval: function (delta, axis) {
        if (axis.categoryInterval == null)
            return Math.max(1, Math.floor(delta / this.GetActualDesiredIntervalsCount(axis, axis.length)));
        else
            return axis.categoryInterval;
    },

    //Apply padding based on labelPlacement
    _applyRangePadding: function (axis) {
        if (!this.chartObj.zoomed) {
            // ticks based on labelplacement and polaraxes
            var ticks = 0;
            if(this.chartObj.model.AreaType !== 'polaraxes')
            ticks = ((axis.labelPlacement === null || axis.labelPlacement === undefined)) ? -0.5 : (axis.labelPlacement.toLowerCase() == "betweenticks") ? (-0.5) : 0;
			 if (ticks < 0) {
                axis.range.min = axis.range.min + ticks;
                axis.range.max = axis.range.max - ticks;
                axis.range.delta = axis.range.max - axis.range.min;
                axis.actualRange = axis.range;
            } else {
                var data = _sideBySeriesPadding(this.chartObj, axis.range.min, axis.range.max, axis);
                axis.range.min = data.startPadding;
                axis.range.max = data.endPadding;
                axis.range.delta = axis.range.max - axis.range.min;
                axis.actualRange = axis.range;
			}
        }
        this._calculateVisibleRange(axis);
    },

    //Calculates the visible range  
    _calculateVisibleRange: function (axis) {
        axis.visibleRange = $.extend(true, {}, axis.actualRange);
        if (axis.zoomFactor < 1 || axis.zoomPosition > 0) {
            var baseRange = axis.actualRange;
            if (axis.isInversed) {
                var start = axis.actualRange.max - axis.zoomPosition * axis.actualRange.delta;
                var end = start - axis.zoomFactor * axis.actualRange.delta;
            }
            else {
                var start = axis.actualRange.min + (axis.zoomPosition * axis.actualRange.delta);
                var end = start + axis.zoomFactor * axis.actualRange.delta;
            }

            if (start < baseRange.min) {
                end = end + (baseRange.min - start);
                start = baseRange.min;
            }

            if (end > baseRange.max) {
                start = start - (end - baseRange.max);
                end = baseRange.max;
            }
            var delta = Math.abs(end - start);
            axis.visibleRange.interval = this._calculateActualInterval(delta, axis);
            axis.visibleRange.min = Math.min(start,end);
            axis.visibleRange.max = Math.max(start, end);
            axis.visibleRange.delta = delta;
            axis.zoomed = (this.chartObj.zoomed === null || this.chartObj.zoomed === undefined) ? true : this.chartObj.zoomed;
        }

    },

    //Generate category label for axis
    _calculateAxisLabels: function (axis) {
        var interval = axis.visibleRange.interval;
        var position = axis.visibleRange.min - (axis.visibleRange.min % axis.range.interval);
        for (; position <= axis.visibleRange.max; position += interval) {
            if (ej.EjSvgRender.utils._inside(position, axis.visibleRange)) {
                var pos = Math.round(position);
                axis.visibleLabels.push({ Value: pos, Text: ej.EjSvgRender.utils._getLabelContent(pos, axis) });

                // customize label by event
                var commonAxesEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                commonAxesEventArgs.data = { label: axis.visibleLabels[axis.visibleLabels.length - 1], axis: axis };
                this.chartObj._trigger("axesLabelRendering", commonAxesEventArgs);
                axis.visibleLabels[axis.visibleLabels.length - 1] = commonAxesEventArgs.data.label;
            }
        }
        axis._LableMaxWidth = ej.EjSvgRender.utils._getMaxLabelWidth(axis, this.chartObj);
    },

    //Category axis calculation
    _calculateRanges: function (chartObj, axis, seriesCollection) {
        this.chartObj = chartObj;

        this._calculateCategoryRange(axis, seriesCollection);
        this._applyRangePadding(axis);

        this._calculateAxisLabels(axis);
    }
});
ej.axisTypes.category = ejCategoryValue;

ej.EjAxisRenderer.prototype = {
    _drawAxes: function (axisIndex, axis) {

        if (this.model.AreaType == "cartesianaxes") {
            if (axis.orientation.toLowerCase() == "horizontal") {
                this._drawXAxisGridLine(axisIndex, axis);
                if (axis.visible) {
                    this._drawXAxisLabels(axisIndex, axis);

                    this._drawXTitle(axisIndex, axis);
                }
            }

            if (axis.orientation.toLowerCase() == "vertical") {
                this._drawYAxisGridLine(axisIndex, axis);
                if (axis.visible) {
                    this._drawYAxisLabels(axisIndex, axis);

                    this._drawYTitle(axisIndex, axis);
                }
            }
        }
        else {
            if (axis.orientation.toLowerCase() == "horizontal") {
                this._drawPolarGridLine(axis);
                this._drawPolarLabels(axis);
                 
            }
             else 
                this._drawPolarCircle(axis);           
         }
    },
    _getSharpPath:function (width) {
        var value = ((width % 2) == 0) ? 0 : 0.5;
        return value;
    },
    _drawAxisLine: function (axis) {

        // Yaxis MajorGridlines, Ticklines and Labels.
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisLine' });
        var sbYMajorTick = ej.EjSvgRender.utils._getStringBuilder();
        var x1 = this.model.centerX;
        var y1 = this.model.centerY;
        var x2 = this.model.centerX;
        var y2 = this.model.centerY - this.model.Radius;
        var axisLine = "M" + " " + x1 + " " + y1 + " " + "L" + " " + x2 + " " + y2;
        if (axis.axisLine.visible) {
            var options = {
                'id': this.svgObject.id + '_YAxisLines',
                'fill': 'none',
                'stroke-width': axis.axisLine.width,
                'stroke': axis.axisLine.color,
                'opacity': axis.axisLine.opacity,
                'stroke-dasharray': axis.axisLine.dashArray,
                'd': axisLine
            };
            this.svgRenderer.drawPath(options, gEle);
        }
        //Drawing Major Grid Lines 
        $(gEle).appendTo(this.gPolarAxisEle);

        if (axis.majorTickLines.visible) {
            gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisMajorTicks' });
                for (var j = 0; j < axis.visibleLabels.length; j++) {
                    var label = axis.visibleLabels[j];
                    var radius = this.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(axis, label.Value, this);
                    var line = {};
                    line.X1 = this.model.centerX;
                    line.Y1 = this.model.centerY - radius;
                    line.X2 = line.X1 - axis.majorTickLines.size;
                    line.Y2 = line.Y1;
                    sbYMajorTick.append("M" + " " + line.X1 + " " + line.Y1 + " " + "L" + " " + line.X2 + " " + line.Y2 + " ");
                }
               
                  yMajorTickDir = sbYMajorTick.toString();
                    var options = {
                        'id': this.svgObject.id + '_YAxisMajorTicks',
                        'fill': 'none',
                        'stroke-width': axis.majorTickLines.width,
                        'stroke': axis.majorTickLines.color,
                        'd': yMajorTickDir
                    };
            //Drawing Major Tickline Lines
                    this.svgRenderer.drawPath(options, gEle);
                    $(gEle).appendTo(this.gPolarAxisEle);
                
        }

        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisLabels' });
        var font = axis.font;
        for (var j = 0; j < axis.visibleLabels.length; j++) {
            var radius = this.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(axis, axis.visibleLabels[j].Value, this);
            var labelText = axis.visibleLabels[j].Text;

            var size = ej.EjSvgRender.utils._measureText(labelText, null, axis.font);
           
            var X = this.model.centerX - axis.majorTickLines.size- (this.model.elementSpacing/3);
            var Y = this.model.centerY - radius + (size.height/5);
            
           
            var options = {
                'id': this.svgObject.id + '_' + axis.name + '_YLabel_' + j,
                'x': X,
                'y': Y,
                'fill': font.color,
                'font-size': font.size,
                'font-family': font.fontFamily,
                'font-style': font.fontStyle,
                'font-weight': font.fontWeight,
                'opacity': font.opacity,
                'text-anchor': 'end'
            };

            this.svgRenderer.drawText(options, labelText, gEle);

        }
        //Drawing YAxis Labels
        $(gEle).appendTo(this.gPolarAxisEle);
       

    },
    _drawPolarLabels: function (axis) {
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxisLabels'  });
        var aroundRadius = this.model.Radius + axis.majorTickLines.size;
        var font = axis.font;
        for (var j = 0; j < axis.visibleLabels.length; j++) {
            var coef = ej.EjSvgRender.utils._valueToPolarCoefficient(axis, axis.visibleLabels[j].Value);

            var vector = ej.EjSvgRender.utils._valueToVector(axis, axis.visibleLabels[j].Value);
            var labelText = axis.visibleLabels[j].Text;
            var x = this.model.centerX + aroundRadius * vector.X;
            var y = this.model.centerY + aroundRadius * vector.Y;
            var textAnchor = (x < this.model.centerX) ? 'end' : ((x > this.model.centerX) ? 'start' : 'middle');

            var size= ej.EjSvgRender.utils._measureText(labelText, this.model.m_AreaBounds.Height, axis.font);
            // calculation for positioning the label along the arc
            if (coef == 0.25)
            {
                x -= this.model.elementSpacing / 2;
                y += (size.height) / 4;
            }
           else if (coef == 0.5)
            {
               y += (size.height) ;
            }
           else if (coef == 0.75)
           {
               x += this.model.elementSpacing / 2;
               y += (size.height) / 4;
           }
           else if (coef == 1 || coef==0) {
               y -= (size.height) / 2;
           }
               
           else if (0.25 < coef && coef < 0.5) {
               x -= this.model.elementSpacing / 2;
               y += (size.height) / 2;
           }
           else if (0.5 < coef && coef <= 0.75) {
               x += this.model.elementSpacing / 2;
               y += (size.height) / 2;
           }
           else if (0 < coef && coef < 0.25)
             {
                   x -= this.model.elementSpacing / 2;
           }
           else
               x += this.model.elementSpacing / 2;


            var options = {
                'id': this.svgObject.id + '_' + axis.name + '_XLabel_' + j,
                'x': x,
                'y': y,
                'fill': font.color,
                'font-size': font.size,
                'font-family': font.fontFamily,
                'font-style': font.fontStyle,
                'font-weight': font.fontWeight,
                'opacity': font.opacity,
                'text-anchor': textAnchor
            };

            this.svgRenderer.drawText(options, labelText, gEle);

        }
        $(gEle).appendTo(this.gXaxisEle);

    },
    _drawPolarCircle: function (axis) {
        if (axis.majorGridLines.visible) {
            var sbYMajorGrid = ej.EjSvgRender.utils._getStringBuilder();
            var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisGrid' });
            if (this.model.isPolar) {
                for (var j = 0; j < axis.visibleLabels.length; j++) {
                    var label = axis.visibleLabels[j];
                    var radius = this.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(axis, label.Value, this);

                    var options = {
                        'id': this.svgObject.id + '_YAxisGridLines_' + j,
                        'cx': this.model.centerX,
                        'cy': this.model.centerY,
                        'r': radius,
                        'fill': 'transparent',
                        'stroke-width': axis.majorGridLines.width,
                        'stroke': axis.majorGridLines.color,
                         'opacity': (this.vmlRendering) ? 0.3: axis.majorGridLines.opacity
                    };

                    //Drawing Major Grid Lines for polar
                    this.svgRenderer.drawCircle(options, gEle);
                   
                }
            }
            else {
                for (var j = 0; j < axis.visibleLabels.length; j++) {
                    
                        var label = axis.visibleLabels[j];
                        var radius = this.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(axis, label.Value, this);
                        // calculation for spider web
                        for (var i = 0; i < this.model.axes[0].visibleLabels.length; i++) {
                            var xAxis = this.model.axes[0];
                            var vector = ej.EjSvgRender.utils._valueToVector(xAxis, xAxis.visibleLabels[i].Value);
                            var vector2;
                            if ((i + 1) < xAxis.visibleLabels.length) {
                                vector2 = ej.EjSvgRender.utils._valueToVector(xAxis, xAxis.visibleLabels[i + 1].Value);
                            }
                            else {
                                vector2 = ej.EjSvgRender.utils._valueToVector(xAxis, xAxis.visibleLabels[0].Value);
                            }
                            var connectPoint = { X: this.model.centerX + radius * vector.X, Y: this.model.centerY + radius * vector.Y };
                            var endPoint = { X: this.model.centerX + radius * vector2.X, Y: this.model.centerY + radius * vector2.Y };
                            sbYMajorGrid.append("M" + " " + connectPoint.X + " " + connectPoint.Y + " " + "L" + " " + endPoint.X + " " + endPoint.Y + " ");
                        }
                }
                if (axis.majorGridLines.visible) {
                    yMajorGridDir = sbYMajorGrid.toString();
                    var options = {
                        'id': this.svgObject.id + '_XAxisGridLines',
                        'fill': 'none',
                        'stroke-width': axis.majorGridLines.width,
                        'stroke': axis.majorGridLines.color,
                        'opacity': axis.majorGridLines.opacity,
                        'stroke-dasharray': axis.majorGridLines.dashArray,
                        'd': yMajorGridDir
                    };
                    //Drawing Major Grid Lines for radar
                    this.svgRenderer.drawPath(options, gEle);
                }
            }
        }
        $(gEle).appendTo(this.gYaxisEle);

    },
    _drawPolarGridLine: function (axis) {

        var legXSpace = 0;
        var legYSpace = 0;

        var sbXMajorGrid = ej.EjSvgRender.utils._getStringBuilder();
        var sbXMajorTick = ej.EjSvgRender.utils._getStringBuilder();

        var legend = this.model.legend;
        if (legend.visible && legend.position.toLowerCase() != "custom") {
            if (legend.position.toLowerCase() == "right" || legend.position.toLowerCase() == "left")
                legXSpace = ((legend.position.toLowerCase() == "right") ? this.model.margin.right : this.model.margin.left)  + this.model.LegendBounds.Width;
            else
                legYSpace = ((legend.position.toLowerCase() == "top") ? this.model.margin.top : this.model.margin.bottom)  + this.model.LegendBounds.Height;

        }
        // calculating the radius of the chart with avaible size
        var yOffset = ((this.model.title.text) ? this.model._titleLocation.Y : 0) + legYSpace;

        var actualWidth = $(this.svgObject).width() - legXSpace;
        var actualHeight = $(this.svgObject).height() - yOffset;

        this.model.centerX = actualWidth * 0.5 + ((legend.position.toLowerCase() === "left") ? legXSpace : 0);
        this.model.centerY = actualHeight * 0.5 + ((legend.position.toLowerCase() === "top") ? yOffset : ((this.model.title.text) ? (this.model._titleLocation.Y) : 0));

        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxisGrid' });
        this.model.finalSize = { width: actualWidth, height: actualHeight };

        this.model.Radius = Math.min(this.model.finalSize.width, this.model.finalSize.height) / 2- (2*this.model.elementSpacing)-axis.majorTickLines.size-axis._LableMaxWidth.maxHeight;
       
        var pos = 0;
        var isRadar = false;
        
        if (axis.majorGridLines.visible)
        {
            
            for (var j = 0; j < axis.visibleLabels.length; j++)
            {

            var vector = ej.EjSvgRender.utils._valueToVector(axis, axis.visibleLabels[j].Value);
            var line = {};
            line.X1 = this.model.centerX;

            line.Y1 = this.model.centerY;
            line.X2 = this.model.centerX + this.model.Radius * vector.X;
            line.Y2 = this.model.centerY + this.model.Radius * vector.Y;
            sbXMajorGrid.append("M" + " " + line.X1 + " " + line.Y1 + " " + "L" + " " + line.X2 + " " + line.Y2 + " ");
            }

        }
        if (axis.majorTickLines.visible) {
            var radius=this.model.Radius;
            for (var j = 0; j < axis.visibleLabels.length; j++)
            {
            var vector = ej.EjSvgRender.utils._valueToVector(axis, axis.visibleLabels[j].Value);
            var line = {};
            line.X1 = this.model.centerX + radius * vector.X;
            line.Y1 =this.model.centerY + radius * vector.Y;
            line.X2 = line.X1 + axis.majorTickLines.size * vector.X;
            line.Y2 = line.Y1 + axis.majorTickLines.size * vector.Y;
            sbXMajorTick.append("M" + " " + line.X1 + " " + line.Y1 + " " + "L" + " " + line.X2 + " " + line.Y2 + " ");
           }
        }
    

   
        if (axis.majorGridLines.visible) {
            xMajorGridDir = sbXMajorGrid.toString();
            var options = {
                'id': this.svgObject.id + '_XAxisGridLines',
                'fill': 'none',
                'stroke-width': axis.majorGridLines.width,
                'stroke': axis.majorGridLines.color,
                'opacity': axis.majorGridLines.opacity,
                'stroke-dasharray': axis.majorGridLines.dashArray,
                'd': xMajorGridDir
            };
            //Drawing XAxis Major Grid Lines
            this.svgRenderer.drawPath(options, gEle);
            $(gEle).appendTo(this.gXaxisEle);
        }

            if (axis.majorTickLines.visible) {
                xMajorTickDir = sbXMajorTick.toString();
                var options = {
                    'id': this.svgObject.id + '_XAxisMajorTicks',
                    'fill': 'none',
                    'stroke-width': axis.majorTickLines.width,
                    'stroke': axis.majorTickLines.color,
                    'd': xMajorTickDir
                };
                //Drawing XAxis Major Ticks Lines
                this.svgRenderer.drawPath(options, gEle);
                $(gEle).appendTo(this.gXaxisEle);
            }
            
           

        
    },
    _drawXAxisGridLine: function (axisIndex, xAxis) {
        var xMajorGridDir, xMajorTicksDir, xMinorTicksDir, xMinorGridDir;
        var sbXMinorTicks = ej.EjSvgRender.utils._getStringBuilder();
        var sbXMinorGrid = ej.EjSvgRender.utils._getStringBuilder();
        var sbXMajorTicks = ej.EjSvgRender.utils._getStringBuilder();
        var sbXMajorGrid = ej.EjSvgRender.utils._getStringBuilder();
        var minorPointX;

        var x1 = Math.floor(xAxis.x);
        var x2 =  Math.floor(xAxis.x + xAxis.width);
        var y1 = Math.floor(xAxis.y);
        var y2 = Math.floor(xAxis.y);

        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxisGrid' + '_' + axisIndex });

        if (xAxis.axisLine.visible) {
            var offset = xAxis.axisLine.offset;
            var val=this._getSharpPath(xAxis.axisLine.width);
            var optionsLine = {
                'id': this.svgObject.id + '_XAxisLine',
                x1: (x1 - xAxis.plotOffset)+ val + offset ,
                y1: y1+val,
                x2: (x2 + xAxis.plotOffset) -offset+val,
                y2: y2+val,
                'stroke-dasharray': xAxis.axisLine.dashArray,
                'stroke-width': xAxis.axisLine.width,
                'stroke': xAxis.axisLine.color,
                'opacity': (this.vmlRendering) ? 0.1 : xAxis.axisLine.opacity
            };

            this.svgRenderer.drawLine(optionsLine, gEle);
        }

        xAxis.labelPlacement = (!(xAxis.labelPlacement)) ? ej.datavisualization.Chart.LabelPlacement.BetweenTicks : xAxis.labelPlacement;
        var ticksbwtLabel = ((xAxis.labels.length > 1) && (xAxis.labelPlacement.toLowerCase() == "betweenticks")) ? -0.5 : 0;
        var collectionLength = xAxis.visibleLabels.length;
        //For between ticks and gridlines
        if ((xAxis._valueType.toLowerCase() == ej.datavisualization.Chart.ValueType.Category) && ticksbwtLabel < 0) {
            collectionLength = xAxis.labels.length + 1;
        }
        for (var i = 0; i < collectionLength; i++) {

           var tempInterval = ((xAxis.labels.length > 1) && (ticksbwtLabel < 0)) ? i + ticksbwtLabel : xAxis.visibleLabels[i].Value;

            tempInterval = (!(xAxis.roundingPlaces)) ? parseFloat(tempInterval.toFixed((ej.EjSvgRender.utils._decimalPlaces(xAxis.visibleRange.interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(xAxis.visibleRange.interval)))) : parseFloat(tempInterval.toFixed(xAxis.roundingPlaces));

            if (ej.EjSvgRender.utils._inside(tempInterval, xAxis.visibleRange)) {

                if ((xAxis.hidePartialLabels) && ((i == 0) || (i == (collectionLength - 1))))
                    continue;
            
                //Calculate Minor Ticks and Grid lines
                if (xAxis.minorGridLines.visible || xAxis.minorTickLines.visible) {
                    var ticksVal = this._getSharpPath(xAxis.minorTickLines.width);
                    var linesVal = this._getSharpPath(xAxis.minorGridLines.width);
                    var yTickPosition;
                    if (xAxis._valueType == "logarithmic"){
                    minorTicks = tempInterval;
                    var logmax = xAxis.visibleRange.max;
                    var logmin = xAxis.visibleRange.min;

                    var logtickstart = Math.pow(xAxis.logBase, minorTicks - xAxis.visibleRange.interval);
                    var logtickend = Math.pow(xAxis.logBase, minorTicks);
                    var logtickInterval = (logtickend - logtickstart) / (xAxis.minorTicksPerInterval + 1);
                    var logtickPos = logtickstart + logtickInterval;
                    minorTicks = ej.EjSvgRender.utils._logBase(logtickPos, xAxis.logBase);
                    for (var j = 0; j < xAxis.minorTicksPerInterval; j++) {


                        if (minorTicks < logmax && minorTicks > logmin) {

                            minorPointX = Math.ceil(((minorTicks - logmin) / (logmax - logmin)) * (xAxis.width));

                            //Calculate Minor Ticks
                            if ((xAxis.minorTickLines) && xAxis.minorTickLines.visible) {
                                yTickPosition = (xAxis.opposedPosition) ? Math.floor(y1 - xAxis.minorTickLines.size) : Math.floor(xAxis.minorTickLines.size + y1);
                                var xTickPosition =Math.floor(minorPointX + x1);
                                sbXMinorTicks.append("M" + " " + (xTickPosition + ticksVal) + " " + (yTickPosition + ticksVal) + " " + "L" + " " + (xTickPosition + ticksVal) + " " + (y1  + ticksVal) + " ");
                            }

                            //Calculate Minor Gridlines
                            if ((xAxis.minorGridLines) && xAxis.minorGridLines.visible) {
                                var tickPosition = Math.floor(minorPointX + x1) ;
                                sbXMinorGrid.append("M" + " " + (tickPosition + linesVal) + " " + (y1 + linesVal) + " " + "L" + " " + (tickPosition + linesVal) + " " + (Math.floor(this.model.m_AreaBounds.Y) + linesVal) + " ");
                            }

                        }
                        logtickPos += logtickInterval;
                        minorTicks = ej.EjSvgRender.utils._logBase(logtickPos, xAxis.logBase);
                    }
                    } else {
                        for (var j = 0, minorTicks = tempInterval ; j < xAxis.minorTicksPerInterval; j++) {
                            minorTicks += xAxis.visibleRange.interval / (xAxis.minorTicksPerInterval + 1);
                            if (minorTicks < xAxis.visibleRange.max && minorTicks > xAxis.visibleRange.min) {
                                minorPointX = Math.ceil(((minorTicks - xAxis.visibleRange.min) / (xAxis.visibleRange.max - xAxis.visibleRange.min)) * (xAxis.width));

                                //Calculate Minor Ticks
                                if ((xAxis.minorTickLines) && xAxis.minorTickLines.visible) {
                                    yTickPosition = (xAxis.opposedPosition) ? Math.floor(y1 - xAxis.minorTickLines.size) : Math.floor(xAxis.minorTickLines.size + y1);
                                    var points = Math.floor(minorPointX + x1);
                                    sbXMinorTicks.append("M" + " " + (points + ticksVal) + " " + (yTickPosition + ticksVal) + " " + "L" + " " + (points + ticksVal) + " " + (y1  + ticksVal) + " ");
                                }

                                //Calculate Minor Gridlines
                                if ((xAxis.minorGridLines) && xAxis.minorGridLines.visible)
                                    sbXMinorGrid.append("M" + " " + (Math.floor(minorPointX + x1) + linesVal) + " " + (y1 + linesVal) + " " + "L" + " " + (Math.floor(minorPointX + x1) + linesVal) + " " + (Math.floor(this.model.m_AreaBounds.Y) + linesVal) + " ");
                            }
                        }
                    }
            }

                if (xAxis.majorTickLines.visible || xAxis.majorGridLines.visible) {
                    var mtVal = this._getSharpPath(xAxis.majorTickLines.width);
                    var mlVal = this._getSharpPath(xAxis.majorGridLines.width);
                    //Calculate Major Ticks and Grid lines
                    var pointX = this.pointX = Math.ceil(ej.EjSvgRender.utils._getPointXY(tempInterval, xAxis.visibleRange, xAxis.isInversed) * (xAxis.width));
                    //Calculate Major Ticks
                    if (xAxis.majorTickLines.visible) {
                        var lineStart = xAxis.majorTickLines.size + xAxis.axisLine.width / 2;
                        var yPosition = (xAxis.opposedPosition) ? y1 - lineStart : lineStart + y1;
                        sbXMajorTicks.append("M" + " " + (Math.floor(pointX + x1) + mtVal) + " " + (Math.floor(yPosition) + mtVal) + " " + "L" + " " + (Math.floor(pointX + x1) + mtVal) + " " + (Math.floor(y1 + ((xAxis.opposedPosition) ? (-xAxis.axisLine.width / 2) : (xAxis.axisLine.width / 2))) + mtVal) + " ");
                    }
                    var mX1 = (Math.floor(pointX + x1));
                    if (i == 0) {
                        if (mX1 == Math.floor(this.model.m_AreaBounds.X))
                            continue;
                    }
                    if ((i == (collectionLength - 1)) && (this.model.chartArea.border.color != "transparent" && this.model.chartArea.border.width > 0)) {
                         if (mX1 == Math.floor(this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width))
                                continue;
                       
                    }
                     
                    //Calculate Major Gridlines
                    if (xAxis.majorGridLines.visible)
                        sbXMajorGrid.append("M" + " " + (mX1 + mlVal) + " " + (Math.floor(this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) + mlVal) + " " + "L" + " " + (mX1 + mlVal) + " " + (Math.floor(this.model.m_AreaBounds.Y) + mlVal) + " ");
                }

            }

        }
        //Drawing Minor Ticks
        if (xAxis.minorTickLines.visible && xAxis.visible && xAxis.minorTicksPerInterval>0) {
            xMinorTicksDir = sbXMinorTicks.toString();
            var optionsMinorTicks = {
                'id': this.svgObject.id + '_XAxisMinorTicks',
                'fill': 'none',
                'stroke-width': xAxis.minorTickLines.width,
                'stroke': xAxis.minorTickLines.color,
                'd': xMinorTicksDir
            };

            this.svgRenderer.drawPath(optionsMinorTicks, gEle);

        }
        if (xAxis.minorGridLines.visible && xAxis.minorTicksPerInterval > 0) {
            xMinorGridDir = sbXMinorGrid.toString();
            //Drawing Minor Grid Lines
            var optionsMinorGrid = {
                'id': this.svgObject.id + '_XAxisMinorGridLines',
                'fill': 'none',
                'stroke-width': xAxis.minorGridLines.width,
                'stroke': xAxis.minorGridLines.color,
                'stroke-dasharray': xAxis.minorGridLines.dashArray,
                'd': xMinorGridDir
            };
            this.svgRenderer.drawPath(optionsMinorGrid, gEle);


        }

        //Drawing Major Ticks

        if (xAxis.majorTickLines.visible && xAxis.visible) {
            xMajorTicksDir = sbXMajorTicks.toString();
            var optionsMajorTicks = {
                'id': this.svgObject.id + '_XAxisMajorTicks',
                'fill': 'none',
                'stroke-width': xAxis.majorTickLines.width,
                'stroke': xAxis.majorTickLines.color,
                'd': xMajorTicksDir
            };
            this.svgRenderer.drawPath(optionsMajorTicks, gEle);
        }

        xMajorGridDir = sbXMajorGrid.toString();
        if (xAxis.majorGridLines.visible) {
            var options = {
                'id': this.svgObject.id + '_XAxisMajorGridLines',
                'fill': 'none',
                'stroke-width': xAxis.majorGridLines.width,
                'stroke': xAxis.majorGridLines.color,
                'opacity': xAxis.majorGridLines.opacity,
                'stroke-dasharray': xAxis.majorGridLines.dashArray,
                'd': xMajorGridDir
            };

            //Drawing Major Grid Lines
            this.svgRenderer.drawPath(options, gEle);

        }
        $(gEle).appendTo(this.gXaxisEle);
    },

    _drawYAxisGridLine: function (axisIndex, yAxis) {

        var yMajorGridDir = "", yMajorTicksDir = "", yMinorTicksDir = "", yMinorGridDir = "";
        var pointY = 0;
        var x1 = Math.floor(yAxis.x);
        var y1 = Math.floor(yAxis.y + yAxis.height);
        var x2 = Math.floor(yAxis.x);
        var y2 = Math.floor(yAxis.y);

        var sbYMinorTicks = ej.EjSvgRender.utils._getStringBuilder();
        var sbYMinorGrid = ej.EjSvgRender.utils._getStringBuilder();
        var sbYMajorTicks = ej.EjSvgRender.utils._getStringBuilder();
        var sbYMajorGrid = ej.EjSvgRender.utils._getStringBuilder();
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisGrid' + '_' + axisIndex });

        if (yAxis.axisLine.visible) {
            var offset = yAxis.axisLine.offset;
            var val = this._getSharpPath(yAxis.axisLine.width);
            
            var optionsLine = {
                'id': this.svgObject.id + '_YAxisLine',
                x1: x1+val,
                y1: (y2 - yAxis.plotOffset) + offset+val,
                x2: x2+val,
                y2: (y1 + yAxis.plotOffset) - offset+val,
                'stroke-width': yAxis.axisLine.width,
                'stroke-dasharray': yAxis.axisLine.dashArray,
                'stroke': yAxis.axisLine.color,
                'opacity': (this.vmlRendering) ? 0.1 :yAxis.axisLine.opacity
            };
            this.svgRenderer.drawLine(optionsLine, gEle);
        }
     
        if (yAxis.axisBottomLine) {
            if (yAxis.axisBottomLine.visible) {
                var optionsBottomLine = {
                    'id': this.svgObject.id + '_YAxisBottomLine',
                    x1: this.model.m_AreaBounds.X,
                    y1: y1,
                    x2: this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width,
                    y2: y1,
                    'stroke-width': yAxis.axisBottomLine.width,
                    'stroke': yAxis.axisBottomLine.color
                };
                this.svgRenderer.drawLine(optionsBottomLine, gEle);
            }
        }

        for (var i = 0; i < yAxis.visibleLabels.length; i++) {
            var tempInterval = yAxis.visibleLabels[i].Value;
            tempInterval = (!(yAxis.roundingPlaces)) ? parseFloat(tempInterval.toFixed((ej.EjSvgRender.utils._decimalPlaces(yAxis.visibleRange.interval) == 0 ? 1 : ej.EjSvgRender.utils._decimalPlaces(yAxis.visibleRange.interval)))) : parseFloat(tempInterval.toFixed(yAxis.roundingPlaces));

            if (ej.EjSvgRender.utils._inside(tempInterval, yAxis.visibleRange)) {

                if ((yAxis.hidePartialLabels) && ((i == 0) || (i == (yAxis.visibleLabels.length - 1))))
                    continue;

                // Calculate Minor Ticks and Grid lines      
                if (yAxis.minorGridLines.visible || yAxis.minorTickLines.visible) {
                    var minorPointY;
                    var tickVal = this._getSharpPath(yAxis.minorTickLines.width);
                    var lineVal = this._getSharpPath(yAxis.minorGridLines.width);
                    if (yAxis._valueType == "logarithmic") {
                        minorTicks = tempInterval;
                        var logmax = yAxis.visibleRange.max;
                        var logmin = yAxis.visibleRange.min;

                        var logtickstart = Math.pow(yAxis.logBase, minorTicks - yAxis.visibleRange.interval);
                        var logtickend = Math.pow(yAxis.logBase, minorTicks);
                        var logtickInterval = (logtickend - logtickstart) / (yAxis.minorTicksPerInterval + 1);
                        var logtickPos = logtickstart + logtickInterval;
                        minorTicks = ej.EjSvgRender.utils._logBase(logtickPos, yAxis.logBase);
                        for (var j = 0; j < yAxis.minorTicksPerInterval; j++) {


                            if (minorTicks < logmax && minorTicks > logmin) {

                                minorPointY = Math.ceil(((minorTicks - logmin) / (logmax - logmin)) * (yAxis.height));

                                //Calculate Minor Ticks
                                if ((yAxis.minorTickLines) && yAxis.minorTickLines.visible) {
                                      ytickPosition = (yAxis.opposedPosition) ? yAxis.minorTickLines.size : -yAxis.minorTickLines.size;
                                      sbYMinorTicks.append("M" + " " + (Math.floor(ytickPosition + x1) + tickVal) + " " + (Math.floor((minorPointY * -1) + y1) + tickVal) + " " + "L" + " " + (x1 + tickVal) + " " + (Math.floor((minorPointY * -1) + y1) + tickVal) + " ");
                                }
                              
                                //Calculate Minor Gridlines
                                if (yAxis.minorGridLines.visible)
                                    sbYMinorGrid.append("M" + " " + (Math.floor(this.model.m_AreaBounds.X) + lineVal) + " " + (Math.floor((minorPointY * -1) + y1) + lineVal) + " " + "L" + " " + (Math.floor(this.model.m_AreaBounds.Width + this.model.m_AreaBounds.X) + lineVal) + " " + (Math.floor((minorPointY * -1) + y1) + lineVal) + " ");

                            }
                            logtickPos += logtickInterval;
                            minorTicks = ej.EjSvgRender.utils._logBase(logtickPos,yAxis.logBase);
                        }
                    } else {
                        for (var j = 0, minorTicks = tempInterval; j < yAxis.minorTicksPerInterval; j++) {

                            minorTicks += yAxis.visibleRange.interval / (yAxis.minorTicksPerInterval + 1);
                            if (minorTicks < yAxis.visibleRange.max && minorTicks > yAxis.visibleRange.min) {
                                  minorPointY = ((minorTicks - yAxis.visibleRange.min) / (yAxis.visibleRange.delta)) * (yAxis.height);
                                // Calculate Minor Ticks   
                                if (yAxis.minorTickLines.visible) {
                                    var ytickPosition = (yAxis.opposedPosition) ? yAxis.minorTickLines.size : -yAxis.minorTickLines.size;
                                    sbYMinorTicks.append("M" + " " + (Math.floor(ytickPosition + x1) + tickVal) + " " + (Math.floor((minorPointY * -1) + y1) + tickVal) + " " + "L" + " " + (x1 + tickVal) + " " + (Math.floor((minorPointY * -1) + y1) + tickVal) + " ");
                                }
                                // Calculate Minor Grid lines   
                                if (yAxis.minorGridLines.visible)
                                    sbYMinorGrid.append("M" + " " + (Math.floor(this.model.m_AreaBounds.X) + lineVal) + " " + (Math.floor((minorPointY * -1) + y1) + lineVal) + " " + "L" + " " + (Math.floor(this.model.m_AreaBounds.Width + this.model.m_AreaBounds.X) + lineVal) + " " + (Math.floor((minorPointY * -1) + y1) + lineVal) + " ");
                            }
                        }
                    }
                } 
                // Calculate Major Ticks and Grid lines
                if (yAxis.majorTickLines.visible || yAxis.majorGridLines.visible) {
                    var mtVal = this._getSharpPath(yAxis.minorTickLines.width);
                    var mlVal = this._getSharpPath(yAxis.majorGridLines.width);
                    // Calculate Major Ticks
                    if (yAxis.majorTickLines.visible) {
                        pointY = ej.EjSvgRender.utils._getPointXY(tempInterval, yAxis.visibleRange, yAxis.isInversed) * (yAxis.height);
                        var xPosition = (yAxis.opposedPosition) ? yAxis.majorTickLines.size + yAxis.axisLine.width / 2 : -(yAxis.majorTickLines.size + yAxis.axisLine.width / 2);
                        sbYMajorTicks.append("M" + " " + (Math.floor(xPosition + x1) + mtVal) + " " + (Math.floor((pointY * -1) + y1) + mtVal) + " " + "L" + " " + (Math.floor(x1 + ((yAxis.opposedPosition) ? (yAxis.axisLine.width / 2) : (yAxis.axisLine.width / 2))) + mtVal) + " " + (Math.floor((pointY * -1) + y1) + mtVal) + " ");
                    }
                    
                    
                    // Calculate Major Grid lines
                    if (yAxis.majorGridLines.visible) {
                        pointY = ej.EjSvgRender.utils._getPointXY(tempInterval, yAxis.visibleRange, yAxis.isInversed) * (yAxis.height);
                        var mX1 = (Math.floor(this.model.m_AreaBounds.X) + mlVal);
                        var mY1 = (Math.floor((pointY * -1) + y1) );
                        var mX2 = (Math.floor(this.model.m_AreaBounds.Width + this.model.m_AreaBounds.X) + mlVal);
                        if (i == 0) {
                            if (mY1==Math.floor(this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height))
                                continue;
                        }
                        if ((i == (yAxis.visibleLabels.length - 1)) && (this.model.chartArea.border.color != "transparent" && this.model.chartArea.border.width > 0)) {
                            if (mY1 == (Math.floor(this.model.m_AreaBounds.Y)))
                                continue;

                        }
                         
                        sbYMajorGrid.append("M" + " " + mX1 + " " + (mY1+mlVal) + " " + "L" + " " + mX2 + " " + (mY1+mlVal) + " ");
                    }
                }
            }
        }

        //Drawning Minor Ticks
        if (yAxis.minorTickLines.visible && yAxis.visible && yAxis.minorTicksPerInterval > 0) {
            yMinorTicksDir = sbYMinorTicks.toString();
            var optionsMinotTick = {
                'id': this.svgObject.id + '_YAxisMinorTicks',
                'fill': 'none',
                'stroke-width': yAxis.minorTickLines.width,
                'stroke': yAxis.minorTickLines.color,
                'd': yMinorTicksDir
            };

            this.svgRenderer.drawPath(optionsMinotTick, gEle);
        }
        if (yAxis.minorGridLines.visible && yAxis.minorTicksPerInterval > 0) {
            //Drawning Minor Grid Lines
            yMinorGridDir = sbYMinorGrid.toString();
            var optionsMinorGrid = {
                'id': this.svgObject.id + '_YAxisMinorGridLines',
                'fill': 'none',
                'stroke-width': yAxis.minorGridLines.width,
                'stroke': yAxis.minorGridLines.color,
                'stroke-dasharray': yAxis.minorGridLines.dashArray,
                'd': yMinorGridDir
            };
            this.svgRenderer.drawPath(optionsMinorGrid, gEle);

        }

        if (yAxis.majorTickLines.visible && yAxis.visible) {
            yMajorTicksDir = sbYMajorTicks.toString();
            //Drawning Major Ticks
            var optionsMajorTick = {
                'id': this.svgObject.id + '_YAxisMajorTicks',
                'fill': 'none',
                'stroke-width': yAxis.majorTickLines.width,
                'stroke': yAxis.majorTickLines.color,
                'd': yMajorTicksDir
            };
            this.svgRenderer.drawPath(optionsMajorTick, gEle);

        }
        //Drawing Major Grid Lines
        yMajorGridDir = sbYMajorGrid.toString();
        if (yAxis.majorGridLines.visible) {
            var options = {
                'id': this.svgObject.id + '_YAxisMajorGridLines',
                'fill': 'none',
                'stroke-width': yAxis.majorGridLines.width,
                'opacity': yAxis.majorGridLines.opacity,
                'stroke-dasharray': yAxis.majorGridLines.dashArray,
                'stroke': yAxis.majorGridLines.color,
                'd': yMajorGridDir
            };

            this.svgRenderer.drawPath(options, gEle);

        }
        $(gEle).appendTo(this.gYaxisEle);
    },
	
    _drawXAxisLabels: function (axisIndex, xAxis) {
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxisLabels' + '_' + axisIndex, 'cursor': 'default' });
        var prevLabels = [];
       
        // loop to draw labels
        for (var i = 0; i < xAxis.visibleLabels.length; i++) {
            var label = xAxis.visibleLabels[i];
			var labelText = label.displayText = label.Text;
            if (ej.EjSvgRender.utils._inside(label.Value, xAxis.visibleRange)) {
                //Declaration
                    var gap = xAxis.width / xAxis.visibleLabels.length;       //space between ticks
                    var range = xAxis.visibleRange;
                    var areaBoundWidth = this.model.m_AreaBounds.Width;
                    var pointX = Math.abs(Math.floor(ej.EjSvgRender.utils._getPointXY(label.Value, range, xAxis.isInversed) * (xAxis.width)));
                    var textSize = ej.EjSvgRender.utils._measureText(labelText, areaBoundWidth, xAxis.font);
                    var textWidth = textSize.width;
                    var textHeight = textSize.height;
                    var labelMaxWidth = xAxis._LableMaxWidth;
                    var labelMaxHeight = labelMaxWidth.height;
                    var labelMaxRow = labelMaxWidth.rows;
                    var vmlrendering = this.svgRenderer.vmlNamespace;
                    var opposedPosition = xAxis.opposedPosition;
                    var lineWidth = xAxis.axisLine.width;
                    var font = xAxis.font;
                    var labelRotation = xAxis.labelRotation;            
                    var count = 0;
                    var flag = false;
                    this.edgeLabel = false; // flag to find the supprot for edge labels
                    var anchor = textWidth / 2;
                    var chartAreaWidth = this.model.m_AreaBounds.Width;
                    var chartAreaX = this.model.m_AreaBounds.X;
					
                if (!ej.util.isNullOrUndefined(label.Text)) {
                    var x = pointX + xAxis.x - anchor;
                        var y = (opposedPosition) ? (xAxis.y - xAxis.majorTickLines.size + textHeight / 2 - (lineWidth / 2)
                            - (labelMaxHeight / (2 * labelMaxRow)) - 5) : (xAxis.y + xAxis.majorTickLines.size + (lineWidth / 2)
                            + (labelMaxHeight / (2 * labelMaxRow)) + 5);
                        var options = {
                            'id': this.svgObject.id + '_' + xAxis.name + '_XLabel_' + i,
                            'x': x,
                            'y': y,
                            'fill': font.color,
                            'font-size': font.size,
                            'font-family': font.fontFamily,
                            'font-style': font.fontStyle,
                            'font-weight': font.fontWeight,
                            'opacity': font.opacity
                        };
              
                    // To set position of edge labels
                        if (xAxis.edgeLabelPlacement) {
                            var position = xAxis.edgeLabelPlacement.toLowerCase();
                            var lastLabel = xAxis.visibleLabels.length - 1;
                            switch (position) {
                                case "none":
                                    break;
                                case "shift":
                                    {
                                        if (i == 0) {  // Shift first label
                                            if (options.x < xAxis.x) {
                                                var diff = xAxis.x - options.x;
                                                options.x = x = options.x + diff;
                                                this.diff = diff;
                                                this.edgeLabel = true;
                                            }
                                        } else if (i == lastLabel)  // Shift last label
                                            if (options.x + textSize.width > xAxis.x + xAxis.width) {
                                                diff = (options.x + textSize.width) - (xAxis.x + xAxis.width);
                                                options.x = x = options.x - diff;
                                                this.diff = diff;
                                                this.edgeLabel = true;
                                            }
                                        break;
                                    }
                                  case "hide": // to hide the edge labels
                                    if ((i == 0 && options.x < xAxis.x) || (i == lastLabel && options.x + textWidth >  chartAreaWidth + chartAreaX)) {
                                        labelText = "";
                                    }
                            }
                        }
                    
                    //To perform rotation 
                        if (!vmlrendering && labelRotation && labelRotation != 0)
                            this.labelRotation(xAxis, x + anchor , y, options, label, labelRotation);

                        if (xAxis.labelIntersectAction) {
                            this.diff = ej.util.isNullOrUndefined(this.diff) ? 0 : this.diff;
                            //To perform label intersect action
                            var intersectAction = xAxis.labelIntersectAction.toLowerCase();
                            if (intersectAction == 'none') { // addded enum - none to labelIntersect action
                                this.svgRenderer.drawText(options, labelText, gEle);
                                $(gEle).appendTo(this.gXaxisEle);
                                continue;
                            } 
                            else if (intersectAction == 'trim') {
                                for (var t = 4; t > 0; t--) {
                                    if (textWidth > gap && labelText!="") {
                                        labelText = labelText.toString().substring(0, t) + '...';
                                        textWidth = ej.EjSvgRender.utils._measureText(labelText, areaBoundWidth, font).width;
                                        label.displayText = labelText;
                                        if(this.edgeLabel)
                                        x= options.x = (i==lastLabel)? x + anchor:
                                        x ;
                                        else 
                                            x = options.x = x + anchor - textWidth / 2;
                                    } else
                                        break;
                                }
                            } else if (intersectAction == 'wrap') {
                                options.y = opposedPosition ? options.y + textHeight : options.y - textHeight;
                                var text = labelText.toString();
                                var textLength = text.length;
                                if (this.edgeLabel) gap = (i == 0) ? gap - this.diff : gap;
                                if (textWidth > gap) {
                                    var line = 0;
                                    if (this.edgeLabel) options.x = (i == 0) ? options.x - this.diff : options.x + this.diff;
                                    options.x = options.x + anchor;
                                    for (var w = 1; w <= text.length; w++) {
                                        labelText = text.substring(0, w);
                                        textWidth = ej.EjSvgRender.utils._measureText(labelText, areaBoundWidth, font).width;
                                        if (textWidth > gap) {
                                            line = line + 1; // To find the no of rows splitted
                                            count = +1;
                                            labelText = text.substring(0, w - 1);
                                            text = text.slice(w - 1, textLength);
                                            options.y = opposedPosition ? options.y - (textHeight * count - 1) : options.y + (textHeight * count - 1);
                                            var newTextWidth = ej.EjSvgRender.utils._measureText(labelText, areaBoundWidth, font).width;
                                            if(line==1) // Check for first label
                                                options.x = options.x - newTextWidth / 2;                                          
                                            this.svgRenderer.drawText(options, labelText, gEle);
                                            w = 0;
                                        }
                                    }
                                }
                                options.y = opposedPosition ? options.y - textHeight : options.y + textHeight;
                                this.svgRenderer.drawText(options, labelText, gEle);
                                continue;
                            } else if (labelRotation != 0 && !vmlrendering && intersectAction == 'rotate90')
                                this.labelRotation(xAxis, x + anchor, y, options, label, 90, i);
                            else if (labelRotation != 0 && !vmlrendering && intersectAction == 'rotate45')
                                this.labelRotation(xAxis, x + anchor, y, options, label, 45, i);
                            else if (intersectAction == 'hide') {
                                for (var j = 0; j < i; j++) {
                                    // loop to get previous label
                                    var preLabel = xAxis.visibleLabels[j];
                                    var temp = 0;
                                    opposedPosition = xAxis.opposedPosition;
                                    areaBoundWidth = this.model.m_AreaBounds.Width;
                                   
                                    var prePoint = Math.abs(Math.floor(ej.EjSvgRender.utils._getPointXY(preLabel.Value, range, xAxis.isInversed) * (xAxis.width)));
                                    var preTextWidth = ej.EjSvgRender.utils._measureText(preLabel.displayText, areaBoundWidth, xAxis.font).width;
                                    var value = prePoint + ((xAxis.isInversed) ? -preTextWidth / 2 : preTextWidth / 2);
                                    value = (j == 0) ? value + this.diff : value;
                                    if (intersectAction == 'hide' && ((xAxis.isInversed) ? (value < pointX + textWidth / 2) : (value > pointX - textWidth / 2)))
                                        label.displayText = labelText = '';
                                }
                            }
                            else if(intersectAction == 'multiplerows'){ // to perform multipleRows on intersect
                                for (var k = 0; k < prevLabels.length && !flag; k++) {
                                    for (var l = 0; prevLabels[k] && l < prevLabels[k].length; l++) {
                                        var preLabel = prevLabels[k][l];
                                        var temp = 0;
                                        opposedPosition = xAxis.opposedPosition;
                                        areaBoundWidth = this.model.m_AreaBounds.Width;

                                        var prePoint = Math.abs(Math.floor(ej.EjSvgRender.utils._getPointXY(preLabel.Value, range, xAxis.isInversed) * (xAxis.width)));
                                        var preTextWidth = ej.EjSvgRender.utils._measureText(preLabel.displayText, areaBoundWidth, xAxis.font).width;
                                        var value = prePoint + ((xAxis.isInversed) ? -preTextWidth / 2 : preTextWidth / 2);
                                        if (this.edgeLabel || prevLabels.length==1) {
                                            value = value + this.diff;
                                        }
                                        if ((xAxis.isInversed) ? (value < pointX + textWidth / 2) : (value > pointX - textWidth / 2)) {
                                            if (opposedPosition) {
                                                temp = options.y - textHeight;
                                                options.y = temp;
                                                if (k + 1 == prevLabels.length)
                                                    flag = true;
                                                count++;
                                                break;
                                            } else {
                                                temp = options.y + textHeight;
                                                options.y = temp;
                                                if (k + 1 == prevLabels.length)
                                                    flag = true;
                                                count++;
                                                break;
                                              
                                            }
                                        }
                                        else {
                                            if (l + 1 == prevLabels[k].length) {
                                                flag = true;
                                                break;
                                            }
                                        }                           
                                    }
                                }
                                if (temp == undefined) {
                                    if (prevLabels[0] == undefined)
                                        prevLabels[0] = [];
                                    prevLabels[0].push(label);
                                }
                                else {                                  
                                    if (prevLabels[count] == undefined)
                                        prevLabels[count] = [];
                                    prevLabels[count].push(label);
                                }
                         }         
                        }
                    if ((!this.edgeLabel) && !this.zoomed && !xAxis.zoomed && !(labelRotation) && (((pointX + xAxis.x) + (textWidth/2)) > ($(this.svgObject).width()))) {
                        $(options).attr('x', ($(this.svgObject).width() - 2));
                        $(options).attr('text-anchor', 'end');
                    }
					xAxis.visibleLabels[i].y = options.y;
                    this.svgRenderer.drawText(options, labelText, gEle);
                }
            }
        }
        $(gEle).appendTo(this.gXaxisEle);
    },
	
	labelRotation: function (axis, x, y, options, label, degree, i) {
	        // To rotate axis labels
	        var labelText = label.Text;
            var angle = (degree > 360) ? degree - 360 : (degree < -360) ? degree + 360 : degree;
            var rotate = 'rotate(' + angle + ',' + (x) + ',' + y + ')';
            $(options).attr('transform', rotate);
            var textElement = this.svgRenderer.createText(options, labelText);
            var diffHeight = Math.ceil(ej.EjSvgRender.utils._measureBounds(textElement, this).height - ej.EjSvgRender.utils._measureText(labelText, null, axis.font).height);
            diffHeight = axis._LableMaxWidth.height - diffHeight - ej.EjSvgRender.utils._measureText(labelText, null, axis.font).height;
            var yLocation = (axis.opposedPosition) ? (diffHeight / 2) : (-diffHeight / 2);
            rotate = 'rotate(' + angle + ',' + (x) + ',' + (y + yLocation) + ')';
	        if (this.edgeLabel && degree== 90)
	            y = (i == 0) ? options.y + this.diff : options.y - this.diff;
	    
	        $(options).attr({
                'transform' :rotate,
                'y': (y + yLocation)
            });
        },
		
    _drawYAxisLabels: function (axisIndex, yAxis) {
	   // method to draw y axis labels
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisLabels' + '_' + axisIndex });
        for (var i = 0; i < yAxis.visibleLabels.length; i++) {
            var label = yAxis.visibleLabels[i];
			var visibleRange = yAxis.visibleRange;
            if (ej.EjSvgRender.utils._inside(label.Value, visibleRange)) {
                var pointY = Math.abs(ej.EjSvgRender.utils._getPointXY(label.Value, visibleRange, yAxis.isInversed) * (yAxis.height));
					var text = ej.EjSvgRender.utils._measureText(label.Text, this.model.m_AreaBounds.Height, yAxis.font);
                    var textHeight = text.height;
                    var opposedPosition = yAxis.opposedPosition;
                    var font = yAxis.font;
                    var range = yAxis.visibleRange;
                    var lineWidth = yAxis.axisLine.width;
                    var x = (opposedPosition) ? ((yAxis.majorTickLines.size) + (lineWidth / 2) + yAxis.x + 5)
                        : (yAxis.x - (lineWidth / 2) - 5 - yAxis.majorTickLines.size);
                    var y = ((pointY * -1) + (yAxis.y + yAxis.height) + textHeight/4);
                    var options = {
                        'id': this.svgObject.id + '_YLabel_' + i,
                        'x': x,
                        'y': y,
                        'fill': font.color,
                        'font-size': font.size,
                        'font-family': font.fontFamily,
                        'font-style': font.fontStyle,
                        'font-weight': font.fontWeight,
                        'opacity': font.opacity,
                        'text-anchor': (opposedPosition) ? 'start' : 'end'
                    };
					
                // To set position of edge labels in yAxis
                    if (yAxis.edgeLabelPlacement) {
                        var position = yAxis.edgeLabelPlacement.toLowerCase();
                        var lastLabel = yAxis.visibleLabels.length - 1;

                        switch (position) {
                            case "none":
                                break;
                            case "shift":
                                {
                                    if (i == 0) {  // Shift first label
                                        if (options.y > yAxis.y + yAxis.height) {
                                            var diff = options.y - (yAxis.y + yAxis.height);
                                            options.y = y = options.y - diff;
                                            this.diff = diff;
                                            this.edgeLabel = true;
                                        }
                                    } else if (i == lastLabel) // Shift last label
                                        if (options.y - textHeight/2 < yAxis.y) {
                                            diff = yAxis.y - (options.y - textHeight / 2);
                                            options.y = y = options.y + diff;
                                            this.diff = diff;
                                            this.edgeLabel = true;
                                        }
                                    break;
                                }
                            case "hide": //to hide the edge labels
                                if ((i == 0 && options.y > yAxis.y + yAxis.height) || (i == lastLabel && options.y - textHeight / 2 < this.model.m_AreaBounds.Y)) {
                                    label.Text = "";
                                }
                        }
                    }

				 //Label intersection
                    if (yAxis.labelIntersectAction) {
                        if (intersectAction == 'none') {
                            this.svgRenderer.drawText(options, label.Text, gEle);
                            $(gEle).appendTo(this.gYaxisEle);
                            continue;
                        }
                        var intersectAction = yAxis.labelIntersectAction.toLowerCase();
                        for (var j = 0; j < i; j++) {
                            var prevLabel = yAxis.visibleLabels[j];
                            var temp = 0;
                            var prevPoint = Math.abs((ej.EjSvgRender.utils._getPointXY(prevLabel.Value, range, yAxis.isInversed) * (yAxis.height)));
                                var prevTextHeight = ej.EjSvgRender.utils._measureText(prevLabel.Text, this.model.m_AreaBounds.Height, font).height;
                                var value = ((prevPoint * -1) + (yAxis.y + yAxis.height) + prevTextHeight/4);
                                value = value + ((yAxis.isInversed) ? prevTextHeight / 2 : -prevTextHeight / 2);
                            if (this.edgeLabel)
                                value = (j == 0) ? value - prevTextHeight / 4 : value;
                                if (intersectAction == 'hide' && prevLabel.Text.toString()!="" && ((yAxis.isInversed) ? value > options.y - textHeight / 4 : value < options.y + textHeight / 4))
                                    label.Text = '';
                                else if (intersectAction == 'multiplerows' && ((yAxis.isInversed) ? value > options.y - textHeight / 4 : value < options.y + textHeight / 4) && prevLabel.x == options.x) {
                                    if (opposedPosition) {
                                        temp = prevLabel.x + yAxis._LableMaxWidth.maxWidth + 5; // gap between the rows
                                        options.x = temp;
                                    }
                                    else {
                                        temp = prevLabel.x - yAxis._LableMaxWidth.maxWidth - 5; // gap between the rows
                                        options.x = temp;
                                     }
                                }
                            }
                        }

                    yAxis.visibleLabels[i].x = options.x;	
                this.svgRenderer.drawText(options, label.Text, gEle);
            }
        }
        $(gEle).appendTo(this.gYaxisEle);
    },
	
    _drawXTitle: function (axisIndex, axis) {

        if (axis.title.text != "" && axis.title.text) {
            var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxisTitle' + '_' + axisIndex });
            var xtitleLocation = (this.model.elementSpacing) + axis._LableMaxWidth.height;
            var titlesize = (ej.EjSvgRender.utils._measureText(axis.title.text, (axis.width), axis.title.font).height / 2);
            var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgs.data = { title: axis.title.text, location: { x: (axis.width) / 2, y: (xtitleLocation + titlesize + axis.majorTickLines.size + axis.axisLine.width) }, axes: axis };
            this._trigger("axesTitleRendering", commonEventArgs);
            var options = {
                'id': this.svgObject.id + '_XAxisTitle' + '_' + axisIndex,
                'x': commonEventArgs.data.location.x + axis.x,
                'y': (axis.opposedPosition) ? (axis.y - commonEventArgs.data.location.y) : (commonEventArgs.data.location.y + axis.y),
                'fill': axis.title.font.color,
                'font-size': axis.title.font.size,
                'font-family': axis.title.font.fontFamily,
                'font-style': axis.title.font.fontStyle,
                'font-weight': axis.title.font.fontWeight,
                'opacity': axis.title.font.opacity,
                'text-anchor': 'middle',
                'dominant-baseline': 'middle'
            };
            if ($(this.svgObject).find("#" + this.svgObject.id + '_XAxisTitle' + '_' + axisIndex).length > 0)
                $(this.svgObject).find("#" + this.svgObject.id + '_XAxisTitle' + '_' + axisIndex).attr(options);
            else
                this.svgRenderer.drawText(options, commonEventArgs.data.title, gEle);
            $(gEle).appendTo(this.gXaxisEle);
        }

    },
    _drawYTitle: function (axisIndex, yAxis) {

        if (yAxis.title.text != "" && yAxis.title.text) {
            var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxisTitle' + '_' + axisIndex });
            var titleSize = ej.EjSvgRender.utils._measureText(yAxis.title.text, (yAxis.height), yAxis.title.font);
            var x = (yAxis.opposedPosition) ? yAxis.x + ((3 * this.model.elementSpacing) + yAxis._LableMaxWidth.width + yAxis.majorTickLines.size + yAxis.axisLine.width) : yAxis.x - ((3 * this.model.elementSpacing) + yAxis._LableMaxWidth.width + yAxis.majorTickLines.size + yAxis.axisLine.width);

            var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgs.data = { title: yAxis.title.text, location: { x: titleSize.width / 2, y: 0 }, axes: yAxis };
            this._trigger("axesTitleRendering", commonEventArgs);

            var y = commonEventArgs.data.location.y + (yAxis.y + yAxis.height) + (((yAxis.height) / 2) * -1);

            var labelRotation = (yAxis.opposedPosition) ? 90 : -90;

            var options = {
                'id': this.svgObject.id + '_YAxisTitle' + '_' + axisIndex,
                'x': x,
                'y': y,
                'fill': yAxis.title.font.color,
                'transform': 'rotate(' + labelRotation + ',' + (x) + ',' + y + ')',
                'font-size': yAxis.title.font.size,
                'font-family': yAxis.title.font.fontFamily,
                'font-style': yAxis.title.font.fontStyle,
                'font-weight': yAxis.title.font.fontWeight,
                'opacity': yAxis.title.font.opacity,
                'text-anchor': 'middle',
                'dominant-baseline': 'middle'
            };
            if ($(this.svgObject).find("#" + this.svgObject.id + '_YAxisTitle' + '_' + axisIndex).length > 0)
                $(this.svgObject).find("#" + this.svgObject.id + '_YAxisTitle' + '_' + axisIndex).attr(options);
            else
                this.svgRenderer.drawText(options, commonEventArgs.data.title, gEle);
            $(gEle).appendTo(this.gYaxisEle);
        }

    }
},
ej.EjStripline.prototype = {
    _drawStripline: function (axis, stripLine) {

        var x = 0, height = 0, angle = 0;
        var y = 0, pointYstart = 0, yHeight = 0;
        var width = 0, widthValue = 0, textX = 0, textY = 0;
        if (stripLine.visible) {
            var striplineid = (stripLine.zIndex == 'over') ? this.gStriplineOver : this.gStriplineBehind;
            var isVisible = true;
            if (axis.orientation.toLowerCase() == "horizontal") {
                var pointstart = 0;

                if (stripLine.startFromAxis) {

                    var point = (ej.util.isNullOrUndefined(stripLine.offset)) ? axis.visibleRange.min : axis.visibleRange.min + stripLine.offset;
                    pointstart = (((point - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.width)) + axis.x; //($(this.svgObject).width() - this.model.m_Spacing.Left - this.model.m_Spacing.Right);

                    widthValue = (((point + (ej.util.isNullOrUndefined(stripLine.width) ? 0 : stripLine.width) - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.width));

                } else {
                    if (ej.util.isNullOrUndefined(stripLine.start) && (ej.util.isNullOrUndefined(stripLine.end) || ej.util.isNullOrUndefined(stripLine.width))) {
                        isVisible = false;
                    } else {
                        stripLine.start = (jQuery.type(stripLine.start) == "date") ? (stripLine.start).getTime() : stripLine.start;
                        if (!ej.util.isNullOrUndefined(stripLine.end) && (jQuery.type(stripLine.end) == "date")) {
                            stripLine.end = (stripLine.end).getTime();
                        }
                        pointstart = (ej.EjSvgRender.utils._getPointXY(stripLine.start, axis.visibleRange, axis.isInversed) * (axis.width)) + axis.x; //($(this.svgObject).width() - this.model.m_Spacing.Left - this.model.m_Spacing.Right);
                        var pointend = (ej.EjSvgRender.utils._getPointXY(stripLine.end, axis.visibleRange, axis.isInversed) * (axis.width)) + axis.x; //($(this.svgObject).width() - this.model.m_Spacing.Left - this.model.m_Spacing.Right);
                        var widthMax = (ej.EjSvgRender.utils._getPointXY((stripLine.start + (ej.util.isNullOrUndefined(stripLine.width) ? 0 : stripLine.width)), axis.visibleRange, axis.isInversed) * (axis.width)) + axis.x;

                        widthValue = (axis.isInversed ? (pointend < widthMax) : (pointend > widthMax)) ? Math.abs(pointstart - pointend) : Math.abs(pointstart - widthMax);
                        
                    }
                }
                width = widthValue;
                height = this.chart.model.m_AreaBounds.Height;
                x = (axis.isInversed) ? (pointstart - widthValue) : pointstart;
                y = this.chart.model.m_AreaBounds.Y;
                angle = -90;
                var textWidth = ej.EjSvgRender.utils._measureText(stripLine.text, null, stripLine.font).height;
                if (stripLine.textAlignment == 'middletop') {
                    textX = x - (textWidth / 2);
                    textY = Math.abs(y + height / 2);
                } else if (stripLine.textAlignment == 'middlecenter') {
                    textX = (Math.floor(x + width / 2) + (textWidth / 3));
                    textY = Math.abs(y + height / 2);
                } else if (stripLine.textAlignment == 'middlebottom') {
                    textX = x + width + (textWidth);
                    textY = Math.abs(y + height / 2);
                }


            } else {
                if (stripLine.startFromAxis) {
                    var pointY = (ej.util.isNullOrUndefined(stripLine.offset)) ? axis.visibleRange.min : axis.visibleRange.min + stripLine.offset;
                    pointYstart = (axis.y + axis.height) - (((pointY - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.height));
                    widthValue = (((pointY + (ej.util.isNullOrUndefined(stripLine.width) ? 0 : stripLine.width) - axis.visibleRange.min) / (axis.visibleRange.delta)) * (axis.height));
                    yHeight = widthValue;
                } else {

                    if (ej.util.isNullOrUndefined(stripLine.start) && (ej.util.isNullOrUndefined(stripLine.end) || ej.util.isNullOrUndefined(stripLine.width))) {
                        isVisible = false;
                    } else {
                        stripLine.start = (jQuery.type(stripLine.start) == "date") ? (stripLine.start).getTime() : stripLine.start;
                        if (!ej.util.isNullOrUndefined(stripLine.end) && (jQuery.type(stripLine.end) == "date")) {
                            stripLine.end = (stripLine.end).getTime();
                        }
                        pointYstart = (axis.y + axis.height) - (ej.EjSvgRender.utils._getPointXY(stripLine.start, axis.visibleRange, axis.isInversed) * (axis.height));
                        var pointYend = (axis.y + axis.height) - (ej.EjSvgRender.utils._getPointXY((ej.util.isNullOrUndefined(stripLine.end) ? 0 : stripLine.end), axis.visibleRange, axis.isInversed) * (axis.height));
                        var widthYValue = (axis.y + axis.height) - (ej.EjSvgRender.utils._getPointXY((stripLine.start + (ej.util.isNullOrUndefined(stripLine.width) ? 0 : stripLine.width)), axis.visibleRange, axis.isInversed) * (axis.height));
                        yHeight = (axis.isInversed ? (pointYend > widthYValue) : (pointYend < widthYValue)) ? Math.abs(pointYstart - pointYend) : Math.abs(pointYstart - widthYValue);
                    }
                }
                height = yHeight;
                x = this.chart.model.m_AreaBounds.X;
                width = this.chart.model.m_AreaBounds.Width;
                y = pointYstart + ((axis.isInversed) ? 0 : -yHeight);
                var textHeight = ej.EjSvgRender.utils._measureText(stripLine.text, width, stripLine.font).height;

                if (stripLine.textAlignment == 'middletop') {
                    textX = x + width / 2;
                    textY = y - (textHeight / 3);
                } else if (stripLine.textAlignment == 'middlecenter') {
                    textX = x + width / 2;
                    textY = (Math.abs(y + (height / 2)) + (textHeight / 3));
                } else if (stripLine.textAlignment == 'middlebottom') {
                    textX = x + width / 2;
                    textY = y + height + (textHeight);
                }


            }
            if (isVisible) {
                if (!ej.util.isNullOrUndefined(stripLine.imageUrl)) {
                    var imgOptions = {
                        'height': height,
                        'width': width,
                        'href': stripLine.imageUrl,
                        'x': x,
                        'y': y,
                        'id': striplineid.id + '_backImage',
                        'visibility': 'visible',
                        'preserveAspectRatio': 'none'
                    };

                    this.svgRenderer.drawImage(imgOptions, striplineid);
                } else {
                    var options = {
                        'id': striplineid.id + '_striplineRect',
                        'x': x,
                        'y': y,
                        'width': width,
                        'height': height,
                        'fill': stripLine.color,
                        'opacity': stripLine.opacity,
                        'stroke-width': stripLine.borderWidth,
                        'stroke':(stripLine.borderWidth==0)?"transparent": stripLine.borderColor
                    };
                    var textOptions = {
                        'id': striplineid.id + '_striplineRectText',
                        'x': textX,
                        'y': textY,
                        'fill': stripLine.font.color,
                        'transform': 'rotate(' + angle + ',' + (textX) + ',' + textY + ')',
                        'font-size': stripLine.font.size,
                        'font-family': stripLine.font.fontFamily,
                        'font-style': stripLine.font.fontStyle,
                        'font-weight': stripLine.font.fontWeight,
                        'text-anchor': 'middle'
                    };

                    var bounds = { X: x, Y: y, Width: width, Height: height };
                    var isStripline = stripLine.zIndex == "over" ? true : false;
                    ej.EjSvgRender.utils.AddRegion(this.chart, bounds, isStripline)

                    this.svgRenderer.drawRect(options, striplineid);
                    this.svgRenderer.drawText(textOptions, stripLine.text, striplineid);
                }
            }

        }
    }
};
})(jQuery);
ej.EjLegendRender = function (chartobj) {

    this.chartObj = chartobj;
};


(function ($) {
ej.EjLegendRender.prototype =
{

    drawLegendItem: function (legendItem, x, y) { 
        var shapeSize= this.chartObj.model.legend.itemStyle; 
        var location = { startX: x + shapeSize.width / 2, startY: (y + shapeSize.height / 2) };
        
        var style = { ShapeSize:shapeSize, Style: legendItem.LegendStyle, Gradient: legendItem.Gradient, SeriesIndex: legendItem.SeriesIndex };
        var symbolName;
        for (name in this.chartObj.model.symbolShape) {
            if (legendItem.Shape.toLowerCase() == name.toLowerCase()) {
                symbolName = name;
                break;
            }     
        }
        if (symbolName == "None")
            symbolName = "SeriesType";
			
        var index = (ej.util.isNullOrUndefined(legendItem.PointIndex)) ? legendItem.SeriesIndex : legendItem.PointIndex;
        this.chartObj.gLegendItemEle = this.chartObj.svgRenderer.createGroup({ 'id': this.chartObj.svgObject.id + '_Legend' + index, 'cursor': 'pointer' });

        var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonEventArgs.data = { legendItem: legendItem, location: location, legend: true, model: this.chartObj.model, svgRenderer: this.chartObj.svgRenderer, svgObject: this.chartObj.svgObject, symbolShape: symbolName, style: style, gLegendItemEle: this.chartObj.gLegendItemEle };

        this.chartObj._trigger("legendItemRendering", commonEventArgs);
        
        
        ej.EjSvgRender.chartSymbol["_draw" + commonEventArgs.data.symbolShape](commonEventArgs.data.location, commonEventArgs.data.style, commonEventArgs.data, this.chartObj.gLegendItemEle);
        var color; 
        if (legendItem.LegendStyle.Color && legendItem.LegendStyle.Color.toLowerCase() !== 'gray')
            color = this.chartObj.model.legend.font.color;
        else
            color = 'gray';
    
        var fontLegend = this.chartObj.model.legend.font;
        var itemInfo = commonEventArgs.data.legendItem;
        var heightText = ej.EjSvgRender.utils._measureText(itemInfo.Text, this.chartObj.model.LegendBounds.Width, fontLegend).height;
        
        var options = {
            'id': this.chartObj.svgObject.id + '_LegendItemText',
            'x': shapeSize.width + x + this.chartObj.model.legend.itemPadding/2,
            'y': commonEventArgs.data.location.startY,
            'fill': color,
            'font-size': fontLegend.size,
            'font-style': fontLegend.fontStyle,
            'font-family': fontLegend.fontFamily,
            'font-weight': fontLegend.fontWeight,
            'text-anchor': 'start'
        };
        var matched = jQuery.uaMatch(navigator.userAgent);
		var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
        if (matched.browser.toLowerCase() == "msie" || isIE11) 
            options.y = (commonEventArgs.data.location.startY +(heightText / 3));
        else 
            this.chartObj.svgRenderer._setAttr($(options), { 'dominant-baseline': 'middle' });
			
		this.chartObj.svgRenderer.drawText(options,commonEventArgs.data.legendItem.Text,this.chartObj.gLegendItemEle);
		this.chartObj.svgRenderer.append(this.chartObj.gLegendItemEle, this.chartObj.gLegendEle);
        var legendbound = { X: this.chartObj.model.LegendBounds.X, Y: this.chartObj.model.LegendBounds.Y };
        var itembound = { X: (x), Y: (y) };
        var bounds = { LegendBound: legendbound, ItemBound: itembound };
        var legendRegion = { LegendItem: legendItem, Location: location, SymbolShape: symbolName, Style: style, Bounds: bounds };
        this.chartObj.model.legendRegion.push(legendRegion);
    },

    drawLegend: function () {
        
        if (!ej.util.isNullOrUndefined(this.chartObj.model.legend) && this.chartObj.model.legend.visible) {
            // draw legend.

            if (this.chartObj.model.legend.position.toLowerCase() == this.chartObj.model.legendPosition.bottom) {
                this.chartObj.model.LegendBounds.Y = $(this.chartObj.svgObject).height() - (this.chartObj.model.elementSpacing* 1.5)- this.chartObj.model.LegendBounds.Height;

                this.chartObj.model.LegendBounds.X = ($(this.chartObj.svgObject).width() / 2) - (this.chartObj.model.LegendBounds.Width / 2);

            }
            else if (this.chartObj.model.legend.position.toLowerCase() == this.chartObj.model.legendPosition.top) {
                this.chartObj.model.LegendBounds.Y = ((this.chartObj.model._titleLocation) ? this.chartObj.model._titleLocation.Y : 0) + this.chartObj.model.elementSpacing;
                 this.chartObj.model.LegendBounds.X = ($(this.chartObj.svgObject).width() / 2) - (this.chartObj.model.LegendBounds.Width / 2);
            }

            else if (this.chartObj.model.legend.position.toLowerCase() == this.chartObj.model.legendPosition.right) {
                this.chartObj.model.LegendBounds.Y = ($(this.chartObj.svgObject).height()) / 2 - (this.chartObj.model.LegendBounds.Height / 2);
                this.chartObj.model.LegendBounds.X = $(this.chartObj.svgObject).width() - this.chartObj.model.elementSpacing - this.chartObj.model.LegendBounds.Width;
            }

             else if (this.chartObj.model.legend.position.toLowerCase() == this.chartObj.model.legendPosition.left) {
                 this.chartObj.model.LegendBounds.Y = ($(this.chartObj.svgObject).height()) / 2 - (this.chartObj.model.LegendBounds.Height / 2);
                 this.chartObj.model.LegendBounds.X = this.chartObj.model.elementSpacing;
             }
             else {
                this.chartObj.model.LegendBounds.Y = (this.chartObj.model.legend.location.y < $(this.chartObj.svgObject).height()) ? this.chartObj.model.legend.location.y : 0;
                this.chartObj.model.LegendBounds.X = (this.chartObj.model.legend.location.x < $(this.chartObj.svgObject).width()) ? this.chartObj.model.legend.location.x : 0;
            }
            if (this.chartObj.model.legend.position.toLowerCase() == 'left' || this.chartObj.model.legend.position.toLowerCase() == 'right') {
                if (this.chartObj.model.legend.alignment.toLowerCase() == 'center') {
                    this.chartObj.model.LegendBounds.Y = ($(this.chartObj.svgObject).height()) / 2 - (this.chartObj.model.LegendBounds.Height / 2);
                } else if (this.chartObj.model.legend.alignment.toLowerCase() == 'near') {
                    this.chartObj.model.LegendBounds.Y = this.chartObj.model.m_Spacing.Top + this.chartObj.model.elementSpacing + (this.chartObj.model.legend.itemPadding / 2);
                } else {
                    this.chartObj.model.LegendBounds.Y = $(this.chartObj.svgObject).height() - this.chartObj.model.m_Spacing.Bottom - this.chartObj.model.LegendBounds.Height - this.chartObj.model.elementSpacing - 5;
                }
            }
            else {
                if (this.chartObj.model.legend.position.toLowerCase() != 'custom') {
                    if (this.chartObj.model.legend.alignment.toLowerCase() == 'center') {
                        if (this.chartObj.model.AreaType == "cartesianaxes") 
                            this.chartObj.model.LegendBounds.X = (this.chartObj.model.m_AreaBounds.Width / 2) - (this.chartObj.model.LegendBounds.Width / 2)
                            + this.chartObj.model.m_AreaBounds.X;
                        else
                            this.chartObj.model.LegendBounds.X = ($(this.chartObj.svgObject).width() / 2) - (this.chartObj.model.LegendBounds.Width / 2);
                    } else if (this.chartObj.model.legend.alignment.toLowerCase() == 'near') {
                        this.chartObj.model.LegendBounds.X = this.chartObj.model.m_Spacing.Left + this.chartObj.model.elementSpacing + (this.chartObj.model.legend.itemPadding / 2);
                    } else {
                        this.chartObj.model.LegendBounds.X = $(this.chartObj.svgObject).width() - this.chartObj.model.m_Spacing.Right - this.chartObj.model.LegendBounds.Width - this.chartObj.model.elementSpacing - 5;
                    }
                }
            }

            var legnTx = this.chartObj.model.LegendBounds.X;

            var legnTy = this.chartObj.model.LegendBounds.Y;
            if (ej.util.isNullOrUndefined(this.chartObj.svgRenderer.vmlNamespace))
                this.chartObj.svgRenderer._setAttr($(this.chartObj.gLegendEle), { 'transform': 'translate(' + legnTx + ',' + legnTy + ')' });
            else {
                $(this.chartObj.gLegendEle).css({ 'position': 'absolute', 'left': legnTx, 'top': legnTy });
            }
             
                var options = {
                    'id': this.chartObj.svgObject.id + '_LegendArea', 'x': 0, 'y': 0, 'width': this.chartObj.model.LegendBounds.Width, 'height': this.chartObj.model.LegendBounds.Height,
                    'fill': 'none', 'stroke-width': this.chartObj.model.legend.border.width, 'stroke': this.chartObj.model.legend.border.color
                };

                this.chartObj.svgRenderer.drawRect(options, this.chartObj.gLegendEle);
            

            var currentX, currentY;
            var startX, startY;
            currentX = startX = this.chartObj.model.legend.itemPadding;
            currentY = startY = this.chartObj.model.legend.itemPadding;

            for (var k = 0; k < this.chartObj.model.legendCollection.length; k++) {
                var position = this.chartObj.model.legend.position.toLowerCase();
                if (position == this.chartObj.model.legendPosition.top || position == this.chartObj.model.legendPosition.bottom || position == this.chartObj.model.legendPosition.custom || this.chartObj.model.legend.rowCount || this.chartObj.model.legend.columnCount) {
                    if ((currentX + this.chartObj.model.legendCollection[k].Bounds.Width) > this.chartObj.model.LegendBounds.Width + startX) {
                        currentX = this.chartObj.model.legend.itemPadding;
                        currentY += this.chartObj.model.legendCollection[k].Bounds.Height;
                    }
                    this.drawLegendItem(this.chartObj.model.legendCollection[k], currentX, (currentY));
                    currentX += this.chartObj.model.legendCollection[k].Bounds.Width;
                }
                else {
                    if (((currentY + this.chartObj.model.legendCollection[k].Bounds.Height) > this.chartObj.model.LegendBounds.Height + startY)) {
                        currentY = this.chartObj.model.legend.itemPadding;
                        currentX = (this.chartObj.model.legendCollection[k].Bounds.Width) + (this.chartObj.model.legend.itemPadding);

                    }
                    this.drawLegendItem(this.chartObj.model.legendCollection[k], (currentX), (currentY));
                    currentY += this.chartObj.model.legendCollection[k].Bounds.Height;
                }
            }

            this.chartObj.svgRenderer.append(this.chartObj.gLegendEle, this.chartObj.svgObject);

        }
    }
};
})(jQuery);;

ej.seriesTypes = {};

ej.EjSeriesRender = function () {

};
(function ($) {
 
    ej.EjSeriesRender.prototype = {

    setLineSeriesStyle: function (currentSeries) {

        var seriesIndex = $.inArray(currentSeries, this.chartObj.model._visibleSeries);
        var serColor = this.chartObj.model.seriesColors[seriesIndex];
       
        
        var seriesInterior = this.chartObj.svgRenderer.createGradientElement(this.getSeriesName(currentSeries) + seriesIndex, serColor, 0, 0, 0, $(this.chartObj.svgObject).height(), this.chartObj.gSeriesEle);
        var seriesBorder = this.chartObj.model.seriesBorderColors[seriesIndex];
        return { SeriesInterior: seriesInterior, SeriesBorder: seriesBorder };

    },
    getSeriesName: function(series) {
        var serName;
        if (series.name)
            serName = series.name.replace(/\s/g, '');
        else
            serName = "series";
        
        return serName;
    },
    
    drawAreaPath: function (series, style, direction) {
        var seriesIndex = $.inArray(series, this.chartObj.model.series);
        var translate = null;
        if (this.chartObj.model.AreaType == "cartesianaxes") {
            var transX = series.xAxis.x;
            var transY = series.yAxis.y;
            translate = 'translate(' + transX + ',' + transY + ')'
        }
        var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': translate};

        this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
        if (direction != "") {
            var options = {
                'id': this.chartObj.svgObject.id + "_" + seriesIndex,
                'fill': style.SeriesInterior,
                'fill-opacity': series.opacity,
                'stroke-width': series.border.width,
                'stroke': series.border.color,
                'stroke-linecap': series.lineCap,
                'stroke-linejoin': series.lineJoin,
                'd': direction
            };
            this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);
        } 
    },

    setAreaSeriesStyle: function (series) {

        var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
        var maxY = Math.max.apply(0,$.map(series.points, function(v) {return v.YValues[0];
        }));
        var minY = Math.min.apply(0, $.map(series.points, function(v) {
            return v.YValues[0];
        }));
        var minX = Math.min.apply(0, $.map(series.points, function (v) {
            return v.X;
        }));

        var point1Xy = ej.EjSvgRender.utils._getPointXY(minX, minY, series);
        var point2Xy = ej.EjSvgRender.utils._getPointXY(minX, maxY, series);
        var serColor = this.chartObj.model.seriesColors[seriesIndex];

        var seriesInterior = this.chartObj.svgRenderer.createGradientElement(this.getSeriesName(series) + seriesIndex, serColor, point1Xy.X, point1Xy.Y, point2Xy.X, point2Xy.Y, this.chartObj.gSeriesEle);

        return { SeriesInterior: seriesInterior };

    },





    naturalSpline: function (points) {
        var count = points.length;
        //constant
        var yIndex = 0, a = 6;
        var ySpline = [], ySplineDuplicate = [];

        // assigning the first and last value as zero
        ySpline[0] = ySplineDuplicate[0] = 0;
        ySpline[points.length - 1] = 0;

        for (var i = 1; i < count - 1; i++) {
            var d1 = points[i].X - points[i - 1].X;
            var d2 = points[i + 1].X - points[i - 1].X;
            var d3 = points[i + 1].X - points[i].X;
            var dy1 = points[i + 1].YValues[yIndex] - points[i].YValues[yIndex];
            var dy2 = points[i].YValues[yIndex] - points[i - 1].YValues[yIndex];

            if (d1 == 0 || d2 == 0 || d3 == 0) {
                ySpline[i] = 0;
                ySplineDuplicate[i] = 0;
            }
            else {
                var p = 1 / (d1 * ySpline[i - 1] + 2 * d2);

                ySpline[i] = -p * d3;
                ySplineDuplicate[i] = p * (a * (dy1 / d3 - dy2 / d1) - d1 * ySplineDuplicate[i - 1]);
            }
        }

        for (var k = count - 2; k >= 0; k--)
            ySpline[k] = ySpline[k] * ySpline[k + 1] + ySplineDuplicate[k];


        return ySpline;

    },
    getBezierControlPoints: function (point1, point2, ySpline1, ySpline2, yIndex) {
        var controlPoint1;
        var controlPoint2;
        var one3 = 1 / 3.0;
        var deltaX2 = (point2.X - point1.X);

        deltaX2 = deltaX2 * deltaX2;

        var dx1 = 2 * point1.X + point2.X;
        var dx2 = point1.X + 2 * point2.X;

        var dy1 = 2 * point1.YValues[yIndex] + point2.YValues[yIndex];
        var dy2 = point1.YValues[yIndex] + 2 * point2.YValues[yIndex];

        var y1 = one3 * (dy1 - one3 * deltaX2 * (ySpline1 + 0.5 * ySpline2));
        var y2 = one3 * (dy2 - one3 * deltaX2 * (0.5 * ySpline1 + ySpline2));

        controlPoint1 = { X: dx1 * one3, YValues: [y1] };
        controlPoint2 = { X: dx2 * one3, YValues: [y2] };

        return { controlPoint1: controlPoint1, controlPoint2: controlPoint2 };


    },

    improveChartPerformance: function(chartSeries) {
        var tempPoints = [];
        var prevXValue = 0;
        var prevYValue = 0;
        var xDelta = chartSeries.xAxis.visibleRange.max - chartSeries.xAxis.visibleRange.min;
        var yDelta = chartSeries.yAxis.visibleRange.max - chartSeries.yAxis.visibleRange.min;

        var xTolerance = Math.abs((xDelta * 1) / this.chartObj.model.m_AreaBounds.Width);
        var yTolerance = Math.abs((yDelta * 1) / this.chartObj.model.m_AreaBounds.Height);

        var xVal = 0;
        for (var k = 0; k < chartSeries.points.length; k++) {
            var isEmpty = (chartSeries.points[k].isEmpty === null || chartSeries.points[k].isEmpty === undefined) ? false : chartSeries.points[k].isEmpty;
            chartSeries.points[k].visible = (chartSeries.points[k].visible === null || chartSeries.points[k].visible === undefined) ? true : chartSeries.points[k].visible;
            if (chartSeries.points[k].X === null || chartSeries.points[k].X === undefined) {
                chartSeries.points[k].isEmpty = true;
                chartSeries.points[k].visible = false;
                chartSeries.points[k].X = chartSeries.xAxis.visibleRange.min;
            } else
                chartSeries.points[k].isEmpty = isEmpty;
            if ((chartSeries.points[k].YValues[0] == null) || (chartSeries.points[k].YValues[0] == 'undefined')) {
                chartSeries.points[k].isEmpty = true;
                chartSeries.points[k].visible = false;
                chartSeries.points[k].YValues[0] = chartSeries.yAxis.visibleRange.min;
            } else {
                chartSeries.points[k].isEmpty = chartSeries.points[k].isEmpty;
                chartSeries.points[k].visible = (chartSeries.points[k].isEmpty) ? !chartSeries.points[k].isEmpty : chartSeries.points[k].visible;
            }

            var xVal = chartSeries.points[k].X;
            var yVal = chartSeries.points[k].YValues[0];
            if (Math.abs(prevXValue - xVal) >= xTolerance || Math.abs(prevYValue - yVal) >= yTolerance) {

                tempPoints.push(chartSeries.points[k]);
                prevXValue = xVal;
                prevYValue = yVal;
            }
        }
        return tempPoints;

    },
    _isVisiblePoints: function(chartSeries) {
        for (var k = 0; k < chartSeries.points.length; k++) {
            var isEmpty = (ej.util.isNullOrUndefined(chartSeries.points[k].isEmpty)) ? false : chartSeries.points[k].isEmpty;
            chartSeries.points[k].visible = (ej.util.isNullOrUndefined(chartSeries.points[k].visible)) ? true : chartSeries.points[k].visible;
            if (ej.util.isNullOrUndefined(chartSeries.points[k].X)) {
                chartSeries.points[k].isEmpty = true;
                chartSeries.points[k].visible = false;
                chartSeries.points[k].X = chartSeries.xAxis.visibleRange.min;
            } else
                chartSeries.points[k].isEmpty = isEmpty;
            if ((chartSeries.points[k].YValues[0]==null) || (chartSeries.points[k].YValues[0]=='undefined')) {
                chartSeries.points[k].isEmpty = true;
                chartSeries.points[k].visible = false;
                if (ej.util.isNullOrUndefined(chartSeries.points[k].YValues))
                    chartSeries.points[k].YValues = [];
                chartSeries.points[k].YValues[0] = chartSeries.yAxis.visibleRange.min;
            } else {
                chartSeries.points[k].isEmpty = chartSeries.points[k].isEmpty;
                chartSeries.points[k].visible = (chartSeries.points[k].isEmpty) ? !chartSeries.points[k].isEmpty : chartSeries.points[k].visible;
            }
            if (jQuery.type(chartSeries.points[k].X) == "date")
                chartSeries.points[k].X = (chartSeries.points[k].X).getTime();

        }
        return chartSeries.points;
    },
   
    _calculatePolarAxesSegment: function (currentseries) {

        var points = currentseries.visiblePoints;
        var segment = ej.EjSvgRender.utils._getStringBuilder();
        var SeriesIndex=$.inArray(currentseries, this.chartObj.model._visibleSeries)
        var size;
        var interval;
        var centerX = this.chartObj.model.centerX;
        var centerY = this.chartObj.model.centerY;
        // calculating side by side info.
        var sideInfo = this._getSeriesPosition(currentseries);

        size = $.extend(true, {}, currentseries.marker.size, size);
        if (size.width <= 10) {
            size.width = size.height = (1.5 * this.chartObj.model.elementSpacing);
        }
        if (currentseries.drawType.toLowerCase() == 'column' && !currentseries.regionAdded) {
           
            var innerRadius = 0;
            var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + SeriesIndex };
            this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
            var interval = currentseries.xAxis.visibleRange.interval;
            var ticks = (currentseries.xAxis.labelPlacement && currentseries.xAxis.labelPlacement.toLowerCase() == "onticks" && this.chartObj.model.isPolar) ? interval / 2 : 0;
            var inversed = (currentseries.xAxis.isInversed) ? 0 : 1;
            interval = interval / sideInfo.all;
            var nextPoint = interval;
            // calculation for start and end angle for each positions.
            for (var l = 0; l < currentseries.visiblePoints.length; l++) {
                var itemCurrentXPos=temp= (currentseries.visiblePoints[l].X - currentseries.xAxis.visibleRange.min) + ((interval) * sideInfo.pos - ticks);
                itemCurrentXPos = (itemCurrentXPos) / this.chartObj.model.sumofYValues;
                point = currentseries.visiblePoints[l];
               
                var nextPoint = (currentseries.xAxis.visibleRange.interval) / sideInfo.all;
                point.startAngle = 2 * Math.PI * itemCurrentXPos;
                point.endAngle = 2 * Math.PI * (itemCurrentXPos + ((nextPoint) / this.chartObj.model.sumofYValues));
            }
        }
        for (var i = 0; i < points.length; i++) {
            var point1;
            var point2;

            // drawType 'Line' calculation
            if (currentseries.drawType.toLowerCase() == 'line') {
                point1 = ej.EjSvgRender.utils.TransformToVisible(currentseries, points[i].X, points[i].y, this.chartObj);

                if (i < points.length - 1) {
                    point2 = ej.EjSvgRender.utils.TransformToVisible(currentseries, points[i + 1].X, points[i + 1].y, this.chartObj);
                    segment.append("M" + " " + (point1.X) + " " + (point1.Y) + " " + "L" + " " + (point2.X) + " " + (point2.Y) + " ");
                }
                    // when isClosed is true
                else {
                    if (currentseries.isClosed) {
                        point2 = ej.EjSvgRender.utils.TransformToVisible(currentseries, points[0].X, points[0].y, this.chartObj);
                        segment.append("M" + " " + (point1.X) + " " + (point1.Y) + " " + "L" + " " + (point2.X) + " " + (point2.Y) + " ");
                    }
                }            
            }

            else if (currentseries.drawType.toLowerCase() == 'column') {
                var interval = currentseries.xAxis.visibleRange.interval;
                var inversed= (currentseries.xAxis.isInversed) ? 0 : 1;
                var interval = interval / sideInfo.all;
                // radius for each point based on the y values.
                var radius = this.chartObj.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(currentseries.yAxis, points[i].y);
                
                var chartStartAngle = -.5 * Math.PI;
                var startAngle = points[i].startAngle + chartStartAngle;
                var endAngle = points[i].endAngle + chartStartAngle - 0.000001;

                var x1,y1, x2, y2;
           
                // calculating arc when the Stacking mode is enabled
               
                if (currentseries.isStacking) {
                    radius = this.chartObj.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(currentseries.yAxis, currentseries.stackedValue.EndValues[i]);

                    x1 = centerX + radius * Math.cos(startAngle);
                    y1 = centerY + radius * Math.sin(startAngle);

                    x2 = centerX + radius * Math.cos(endAngle);
                    y2 = centerY + radius * Math.sin(endAngle);

                    innerRadius = this.chartObj.model.Radius * ej.EjSvgRender.utils._valueToCoefficient(currentseries.yAxis, currentseries.stackedValue.StartValues[i]);

                    var dStartX = centerX + innerRadius * Math.cos(startAngle);
                    var dStartY = centerY + innerRadius * Math.sin(startAngle);

                    var dEndX = centerX + innerRadius * Math.cos(endAngle);
                    var dEndY = centerY + innerRadius * Math.sin(endAngle);
                     if (this.chartObj.model.isPolar) 
                            direction = "M" + " " + x1 + " " + y1 + " " + "A" + " " + radius + " " + radius + " " + "0" + " " + "0" + " " + inversed + " " + x2 + " " + y2 + " " + "L" + " " + dEndX + " " + dEndY + " " + "A" + " " + innerRadius + " " + innerRadius + " " + "1" + " " + "0" + " " + "0" + " " + dStartX + " " + dStartY + " " + "z";
                       else
                            direction = "M" + " " + x1 + " " + y1 + " " + "L" + " " + x2 + " " + y2 + " " + "L" + " " + dEndX + " " + dEndY + " " + "L" + " " + dStartX + " " + dStartY + " " + "z";
                    }
                        // calculating arc for normal mode.
                    else {

                        x1 = centerX + radius * Math.cos(startAngle);
                        y1 = centerY + radius * Math.sin(startAngle);

                        x2 = centerX + radius * Math.cos(endAngle);
                        y2 = centerY + radius * Math.sin(endAngle);
                      if (this.chartObj.model.isPolar)
                            direction = "M" + " " + x1 + " " + y1 + " " + "A" + " " + radius + " " + radius + " " + "0" + " " + "0" + " " + inversed + " " + x2 + " " + y2 + " " + "L" + " " + centerX + " " + centerY + " " + "z";
                     else
                          direction = "M" + " " + x1 + " " + y1 + " " + "L" + " " + x2 + " " + y2 + " " + "L" + " " + centerX + " " + centerY + " " + "z";
                    }                   
        
                   // gradient creation
                var seriesInterior = this.chartObj.svgRenderer.createGradientElement(this.getSeriesName(currentseries) + "_" + SeriesIndex + i, this.chartObj.model.seriesColors[SeriesIndex], 0, 0, 0, 100, this.chartObj.gSeriesEle);
                options = {
                     'id': this.chartObj.svgObject.id + "_" + this.getSeriesName(currentseries) + SeriesIndex + "_path" + i,
                     'fill': seriesInterior,
                    'stroke': currentseries.border.color,
                    'stroke-width': currentseries.border.width,
                    'seriesIndex': SeriesIndex,
                    'pointIndex': i,
                    'd': direction,
                    'start': points[i].startAngle,
                    'end': points[i].endAngle,
                    'innerR': innerRadius,
                };
                if (this.chartObj.model.isPolar) {
                    options.x = centerX;
                    options.y = centerY;
                }
                            
                this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);

            }

                // drawType 'Area' calculation
            else {
                point1 = ej.EjSvgRender.utils.TransformToVisible(currentseries, points[i].X, points[i].y, this.chartObj);
                if (i == 0) {
                    segment.append("M" + " " + (point1.X) + " " + (point1.Y) + " ");
                }
                    // when isClosed is enabled
                else if (i == points.length - 1) {
                    if(!currentseries.isClosed){
                        segment.append("L" + " " + (point1.X) + " " + (point1.Y) + " " + "L" + " " + (centerX) + " " + (centerY)  );
                    }
                    else
                        segment.append("L" + " " + (point1.X) + " " + (point1.Y) + " " + "z");
                }
                    
                else {
                    segment.append("L" + " " + (point1.X) + " " + (point1.Y) + " ");
                }
            }
            if (!currentseries.regionAdded && currentseries.drawType.toLowerCase() != 'column') {
                var bounds = { X: point1.X - size.width / 2, Y: point1.Y - size.height / 2, Width: size.width, Height: size.height };
                ej.EjSvgRender.utils._addRegion(this.chartObj, bounds, currentseries, points[i], i);
            }
        }

        if (!currentseries.regionAdded && currentseries.drawType.toLowerCase() == 'column') {
            ej.EjSvgRender.utils._addRegion(this.chartObj, bounds, currentseries, null, null);
        }
        return segment.toString();
    },
    _pieVisiblePoints: function (currentseries) {
        var visiblePoints = [];
        var visibleLabels = [];
        var point;
        for (var i = 0; i < currentseries.points.length; i++) {
            point = currentseries.points[i];
            if (ej.util.isNullOrUndefined(point.visible))
                point.visible = true;
            if (point.y < 0) {
                point.YValues[0] = Math.abs(point.YValues[0])
            }
            if (point.visible == true && !ej.util.isNullOrUndefined(point.y)) {
                visiblePoints.push(point);
                visibleLabels.push(point.text ? point.text : point.y);
            }
        }
        currentseries.visiblePoints = visiblePoints;
        currentseries.visibleLabels = visibleLabels;
        return visiblePoints;
    },
    calculatingSliceAngle: function (currentseries) {
        var visiblePoints = this._pieVisiblePoints(currentseries);
        var legXSpace = 0;
        var legYSpace = 0;
        this.chartObj.model.arcData = [];
        currentseries.rightsidePoints = [];
        currentseries.leftsidePoints = [];
        currentseries.labels = [];
        this.chartObj.model.chartRegions = [];
        this.chartObj.model.sumofYValues = 0;
        this.chartObj.model.midPoint = 0;
        this.chartObj.model.centerX = 0, this.chartObj.model.centerY = 0;
        this.chartObj.model.startX = [], this.chartObj.model.startY = [];
        var point;
        this.chartObj.model.Radius = 0;
        var itemCurrentXPos = 0;

        for (j = 0; j < visiblePoints.length; j++) {
            this.chartObj.model.sumofYValues += visiblePoints[j].YValues[0];
        }
        if (currentseries.startAngle) {
            if (currentseries.startAngle > 360 || currentseries.startAngle == 360)
                currentseries.startAngle = currentseries.startAngle % 360;
            else if (currentseries.startAngle < 0) {
                if (currentseries.startAngle < -360 || currentseries.startAngle == -360)
                    currentseries.startAngle = currentseries.startAngle % 360;
                currentseries.startAngle += 360;
            }
            itemCurrentXPos = (currentseries.startAngle) ? ((this.chartObj.model.sumofYValues / 360) * currentseries.startAngle) : 0;
            itemCurrentXPos = itemCurrentXPos / this.chartObj.model.sumofYValues;
            this.chartObj.model.itemCurrentXPos = itemCurrentXPos;
        }

        var legend = this.chartObj.model.legend;
        if (legend.visible && legend.position.toLowerCase() != "custom") {
            if (legend.position.toLowerCase() == "right" || legend.position.toLowerCase() == "left")
                legXSpace = ((legend.position.toLowerCase() == "right") ? this.chartObj.model.margin.right : this.chartObj.model.margin.left) + this.chartObj.model.LegendBounds.Width;
            else
                legYSpace = ((legend.position.toLowerCase() == "top") ? this.chartObj.model.margin.top : this.chartObj.model.margin.bottom) + this.chartObj.model.LegendBounds.Height;

        }

        var yOffset = ((this.chartObj.model.title.text) ? this.chartObj.model._titleLocation.Y : 0) + legYSpace;

        var actualWidth = $(this.chartObj.svgObject).width() - legXSpace;
        var actualHeight = $(this.chartObj.svgObject).height() - yOffset;

        this.chartObj.model.centerX = actualWidth * 0.5 + ((legend.position.toLowerCase() === "left") ? legXSpace : 0);
        this.chartObj.model.centerY = actualHeight * 0.5 + ((legend.position.toLowerCase() === "top") ? yOffset : ((this.chartObj.model.title.text) ? (this.chartObj.model._titleLocation.Y) : 0));

        for (var l = 0; l < currentseries.points.length; l++) {
            point = currentseries.points[l];
            if(point.visible) {
            var pointIndex = l;
            point.startAngle = 2 * Math.PI * itemCurrentXPos;
            point.endAngle = 2 * Math.PI * (itemCurrentXPos + (point.YValues[0] / this.chartObj.model.sumofYValues));
            point.midAngle = (point.endAngle + point.startAngle) / 2;
            point.pointIndex = pointIndex;
            var chartStartingAngle = -.5 * Math.PI;
            
            point.radian = (point.midAngle) % (2 * Math.PI)
            
            if (currentseries.labelPosition.toLowerCase() == "outsideextended") {

                if (point.radian < Math.PI)
                    currentseries.rightsidePoints.push(point);
                else
                   currentseries.leftsidePoints.push(point);
            }
            itemCurrentXPos += point.YValues[0] / this.chartObj.model.sumofYValues;

            var midAngle = point.midAngle + chartStartingAngle;

            if ((pointIndex == currentseries.explodeIndex || currentseries.explodeAll) && !this.chartObj.vmlRendering) {

                this.chartObj.model.startX[pointIndex] = this.chartObj.model.centerX + Math.cos(midAngle) * currentseries.explodeOffset;
                this.chartObj.model.startY[pointIndex] = this.chartObj.model.centerY + Math.sin(midAngle) * currentseries.explodeOffset;
            }
            else {
                this.chartObj.model.startX[pointIndex] = this.chartObj.model.centerX;
                this.chartObj.model.startY[pointIndex] = this.chartObj.model.centerY;
            }
        }
          
        }

        if (currentseries.labelPosition.toLowerCase() == "outsideextended") {
            currentseries.rightsidePoints = ej.DataManager(currentseries.rightsidePoints, ej.Query().sortBy("radian")).executeLocal();
            currentseries.leftsidePoints = ej.DataManager(currentseries.leftsidePoints, ej.Query().sortBy("radian")).executeLocal();
        }
        if (currentseries.marker.dataLabel.template) {
            if (currentseries.labelPosition.toLowerCase() == "outsideextended") {
                for (var i = 0; i < currentseries.rightsidePoints.length; i++) {
                    ej.EjSvgRender.utils._getSeriesTemplateSize(currentseries.rightsidePoints[i], currentseries.rightsidePoints[i].pointIndex, currentseries, false, this.chartObj);
                }
                for (var k = 0; k < currentseries.leftsidePoints.length; k++) {
                    ej.EjSvgRender.utils._getSeriesTemplateSize(currentseries.leftsidePoints[k], currentseries.leftsidePoints[k].pointIndex, currentseries, true, this.chartObj);
                }

            }
            else {
                for (var j = 0; j < currentseries.visiblePoints.length; j++) {
                    ej.EjSvgRender.utils._getSeriesTemplateSize(currentseries.visiblePoints[j], currentseries.visiblePoints[j].pointIndex, currentseries, true, this.chartObj);
                }
            }
            
        }
        else {
            ej.EjSvgRender.utils._getSeriesMaxLabel(currentseries);
        }

      
        currentseries.finalSize= { width: actualWidth, height: actualHeight };
        return currentseries.finalSize;
    },
	 _drawHiloPath: function (series, style, interior, direction, i, pointbounds) {

	     var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);

        var options = {
            'id': this.chartObj.svgObject.id + "_" + seriesIndex + "_" + i,
            'fill':"none" ,
            'stroke-dasharray': series.dashArray,
            'stroke-width': style.borderWidth,
            'stroke': interior,
            'stroke-linecap': series.lineCap,
            'stroke-linejoin': series.lineJoin,
            'opacity': series.opacity,
            'd': direction
        };
        this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);
        var valWidth, valHeight;
        x = (Math.min(pointbounds.point2.X, pointbounds.point1.X) + series.xAxis.x) - (style.borderWidth);
	    y = (Math.min(pointbounds.point2.Y , pointbounds.point1.Y) + series.yAxis.y) ;
        if (pointbounds.point1.Y != pointbounds.point2.Y) {
            valWidth = style.borderWidth + (style.borderWidth / 2);
              valHeight = Math.abs(pointbounds.point1.Y - pointbounds.point2.Y);
        }
	     else {
            valWidth = Math.abs(pointbounds.point2.X - pointbounds.point1.X);
            valHeight = style.borderWidth + (style.borderWidth / 2); 
        }
        var bounds = { X: x, Y: y, Width: valWidth, Height: valHeight };
        ej.EjSvgRender.utils._addRegion(this.chartObj, bounds, series, null, i);
      
	 },
	 isIntersec: function (other, currBounds) {
	     if (currBounds.Bottom < other.Top || currBounds.Right < other.Left
               || currBounds.Top > other.Bottom || currBounds.Left > other.Right) {
	         return false;
	     }
	      return true;
	 },
	 IntersectWith: function (sender, point, currBounds) {
	     var chartObj = this;
	     var intersect = false;
	     var bounds;
	     if (point.radian > Math.PI && (sender.model.bounds["left"])) {
	         bounds = (sender.model.bounds["left"]);
	         if (bounds.length > 0) {
	             for (var i = point.index + 1; i < bounds.length; i++) {
	                 var other = bounds[i];
	                 if (other && this.isIntersec(other, currBounds)) {
	                     return true;
	                 }
	             }
	         }

	     }
	     else {
	         bounds = (sender.model.bounds["right"]) ? sender.model.bounds["right"] : sender.model.bounds;
	         var chartObj = this;
   	         if (bounds.length > 0) {
   	               for (var i = point.index - 1; i >= 0; i--) {
   	                 var other = bounds[i];
   	                 if (other && this.isIntersec(other, currBounds)) {
   	                     return true;
   	                 }
   	             }
   	         }
	     }
	     return intersect;
	     
	 },
   
   
	 _calculateArcData: function (sender, pointIndex, point, series) {
	     var visiblePoints = series.visiblePoints;
	     var chartObj = sender;
	     var chartStartAngle = -.5 * Math.PI;
	     var currBounds;
	     var startAngle = point.startAngle + chartStartAngle;
	     var endAngle = point.endAngle + chartStartAngle - 0.000001;

	     var longArc = endAngle - startAngle < Math.PI ? 0 : 1;
	     var midAngle = (startAngle + endAngle) / 2;
	     var direction;
	     var startX;
         var startY

	     if ((pointIndex == series.explodeIndex || series.explodeAll) && !chartObj.vmlRendering) {
           
	         startX = chartObj.model.centerX + Math.cos(midAngle) * series.explodeOffset;
	         startY = chartObj.model.centerY + Math.sin(midAngle) * series.explodeOffset;
	     }
	     else {
	         startX = chartObj.model.centerX;
	         startY = chartObj.model.centerY;
	     }


	     var x1 = startX + chartObj.model.Radius * Math.cos(startAngle);
	     var y1 = startY + chartObj.model.Radius * Math.sin(startAngle);

	     var x2 = startX + chartObj.model.Radius * Math.cos(endAngle);
	     var y2 = startY + chartObj.model.Radius * Math.sin(endAngle);
	    
	     if (series.type.toLowerCase() == "doughnut") {
	         var dStartX = startX + chartObj.model.dRadius * Math.cos(startAngle);
	         var dStartY = startY + chartObj.model.dRadius * Math.sin(startAngle);

	         var dEndX = startX + chartObj.model.dRadius * Math.cos(endAngle);
	         var dEndY = startY + chartObj.model.dRadius * Math.sin(endAngle);

	         direction = "M" + " " + x1 + " " + y1 + " " + "A" + " " + chartObj.model.Radius + " " + chartObj.model.Radius + " " + "0" + " " + longArc + " " + "1" + " " + x2 + " " + y2 + " " + "L" + " " + dEndX + " " + dEndY + " " + "A" + " " + chartObj.model.dRadius + " " + chartObj.model.dRadius + " " + "1" + " " + longArc + " " + "0" + " " + dStartX + " " + dStartY + " " + "z";
	     }

	     else{
	         direction = "M" + " " + x1 + " " + y1 + " " + "A" + " " + chartObj.model.Radius + " " + chartObj.model.Radius + " " + "0" + " " + longArc + " " + "1" + " " + x2 + " " + y2 + " " + "L" + " " + startX + " " + startY + " " + "z";
	     }

        // display label for pie and doughnut chart
	     

        return { Direction: direction };

    },

    getXCordinate: function (x, radius, angle) {
        var x1 = x + radius * (Math.cos(angle));
        return x1;
    },

    getYCordinate: function (y, radius, angle) {
        var y1 = y + radius * (Math.sin(angle));
        return y1;
    },
 getDoubleRange: function (start, end) {
        var mstart;
        var mend;
        if (start > end) {
            mstart = end;
            mend = start;
        }
        else {
            mstart = start;
            mend = end;
        }

        var mdelta = mend - mstart;
        var mmedian = (mstart + mend) / 2;
        var misEmpty = isNaN(mstart) || isNaN(mend);

        return { Start: mstart, End: mend, Delta: mdelta, Median: mmedian, IsEmpty: misEmpty };

    },
    isDependentSeries: function (series) {
        var type = series.type.toLowerCase();
        if (!this.chartObj.model.requireInvertedAxes)
            return (type == ej.datavisualization.Chart.Type.Candle || type == ej.datavisualization.Chart.Type.Column || type == ej.datavisualization.Chart.Type.Hilo || type == ej.datavisualization.Chart.Type.HiloOpenClose || type == ej.datavisualization.Chart.Type.StackingColumn || type == ej.datavisualization.Chart.Type.RangeColumn) ? true : false;
        else
            return (type == ej.datavisualization.Chart.Type.Bar || type == ej.datavisualization.Chart.Type.StackingBar) ? true : false;
    },

    getPointXYOrgin: function (x, y, series) {
        var xvalue = ej.EjSvgRender.utils._valueToCoefficient(series.xAxis, x) * (series.xAxis.width);
        var yvalue = (1 - ej.EjSvgRender.utils._valueToCoefficient(series.yAxis, y)) * (series.yAxis.height);
        return { X: xvalue, Y: yvalue };
    },
    getRectangle: function (x1, y1, x2, y2, series) {
        var pt1 = this.getPointXYOrgin(x1, y1, series);
        var pt2 = this.getPointXYOrgin(x2, y2, series);
        return ej.EjSvgRender.utils._correctRect(pt1.X, pt1.Y, pt2.X, pt2.Y);
    },
    calculateSides: function (point, sidebysideinfo) {
        var x1 = point.X + sidebysideinfo.Start;
        var x2 = point.X + sidebysideinfo.End;
        return { x1: x1, x2: x2 };
    },
    _getSeriesPosition: function (currentSeries) {
     // calculation for position of series in radar and polar.
        if (ej.util.isNullOrUndefined(currentSeries.position) || this.chartObj.model.legendCollapsed) {
            var stacked;
            var stackingposition
            var all=0;
            var seriesCollection=[];
            for (var i = 0; i < this.chartObj.model._visibleSeries.length; i++) {
                var series=this.chartObj.model._visibleSeries[i];
                if (series.visibility.toLowerCase() === 'visible' && series.drawType.toLowerCase() == 'column') {
                    seriesCollection.push(series);
                }
            }
            for (var j = 0; j < seriesCollection.length; j++) {
                var series = seriesCollection[j];
                    if (series.isStacking) {
                        if (!stacked) {
                            stackingposition = all;
                            all++;
                            stacked = true;
                        }
                        series.position = stackingposition;
                    }
                    else {
                        series.position = all;
                        all++;
                      }
            }
            for (var k = 0; k < seriesCollection.length; k++) 
                seriesCollection[k].all = all;
            
        }
        return { all: currentSeries.all, pos: currentSeries.position };
    },
     getSideBySidePositions: function (currentSeries) {

         var chart = this;
         var stackingGroup = [];
         var model = chart.chartObj.model;
         
         if (ej.util.isNullOrUndefined(currentSeries.position) || model.legendCollapsed) {
             var hAxes = (model.requireInvertedAxes) ? model.vAxes : model.hAxes;
             var vAxes = (model.requireInvertedAxes) ? model.hAxes : model.vAxes;

             $.each(hAxes, function (index, hAxis) {
                 var all = 0;
                 var seriesCollection = [];
                 for (j = 0; j < model._visibleSeries.length; j++) {
                     var series = model._visibleSeries[j];
                     if (series.visibility.toLowerCase() === 'visible') {
                         if (chart.isDependentSeries(series)) {
                             if (hAxis.name == series.xAxisName) {
                                 seriesCollection.push(series);
                             }
                         }
                     }
                 }
                 var vAxeseries = [];
                 for (var j = 0; j < seriesCollection.length; j++) {
                     var index = (model.requireInvertedAxes) ? seriesCollection[j].yAxis.columnIndex : seriesCollection[j].yAxis.rowIndex;
                     if (!vAxeseries[index])
                         vAxeseries[index] = [];
                     vAxeseries[index].push(seriesCollection[j]);
                 }

                 for (var i = 0; i < vAxeseries.length; i++) {
                     if (!ej.util.isNullOrUndefined(vAxeseries[i])) {
                         vAxeseries[i].all = 0;
                         for (var j = 0; j < vAxeseries[i].length; j++) {
                             series = vAxeseries[i][j];
                             if (series.type.toLowerCase().indexOf("stacking") != -1) {
                                 if (series.stackingGroup) {
                                     if (ej.util.isNullOrUndefined(stackingGroup[series.stackingGroup])) {
                                         vAxeseries[i].all++;
                                         series.position = vAxeseries[i].all;
                                         stackingGroup[series.stackingGroup] = vAxeseries[i].all;
                                     }
                                     else
                                         series.position = stackingGroup[series.stackingGroup];
                                 }
                                 else {
                                     if (ej.util.isNullOrUndefined(series.yAxis.position) || model.legendCollapsed) {
                                         vAxeseries[i].all++;
                                         series.position = vAxeseries[i].all;
                                         series.yAxis.position = vAxeseries[i].all;
										 model.legendCollapsed=false;
                                     }
                                     else
                                         series.position = series.yAxis.position;
                                 }
                             }
                             else {
                                 vAxeseries[i].all++;
                                 series.position = vAxeseries[i].all;
                             }
                         }
                     }
                 }

                 for (var k = 0; k < seriesCollection.length; k++) {
                     var index = (seriesCollection[k].type.toLowerCase().indexOf("bar") != -1) ? seriesCollection[k].yAxis.columnIndex : seriesCollection[k].yAxis.rowIndex;
                     if (seriesCollection[k].type.toLowerCase().indexOf("stacking") != -1)
                         seriesCollection[k].all = vAxeseries[index].all;
                     else
                         seriesCollection[k].all = vAxeseries[index].length;
                 }

             });

         }
         return { all: currentSeries.all, pos: currentSeries.position };
     },
	
    getSideBySideInfo: function (series) {
        var pos;
        var all;

        var data = this.getSideBySidePositions(series);
        pos = data.pos;
        all = data.all;

        var seriesSpacing = 0;
        var pointSpacing = 0.3 - 0;
        if (series.xAxis.m_minPointsDelta == undefined)
            series.xAxis.m_minPointsDelta = ej.EjSvgRender.utils.getMinPointsDelta(series.xAxis, this.chartObj);
        var width = series.xAxis.m_minPointsDelta * (1 - pointSpacing);
        var div = 1 / all;
        var loc = 0.5 - div * (pos - 1);

        var range = this.getDoubleRange(-loc, -loc + div);

        // multiplying with width  and scaling
        if (!range.IsEmpty) {
            range = this.getDoubleRange(range.Start * width, range.End * width);
            var radius = 0.5 * (1 - seriesSpacing) * range.Delta;
            var median = range.Median;
            range = this.getDoubleRange(median - radius, median + radius);
        }

        return range;

    },



    draw: function (chart, options) {

        this.chartObj = chart;
        
        //DrawLineGraph
        var lDirection;
        var sb = ej.EjSvgRender.utils._getStringBuilder();
        var currentseries = options;
        var style = this.setLineSeriesStyle(currentseries);
        if (currentseries.sorting)
            currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
        var visiblePoints = this.improveChartPerformance(currentseries);

        var firstPoint = null;
        var secondPoint;
        var firstIndex = -1;
        for (var i = 0; i < visiblePoints.length; i++) {
            secondPoint = visiblePoints[i];
            if (secondPoint.visible) {
                if (firstPoint != null) {
                    if (visiblePoints.length > firstIndex + 1) {
                        var nextpoint = visiblePoints[firstIndex + 1];
                        var point1 = ej.EjSvgRender.utils._getPoint(firstPoint,currentseries);
                        var point2 = ej.EjSvgRender.utils._getPoint(nextpoint,currentseries);
                        sb.append("M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " ");

                    }

                }
                firstPoint = secondPoint;
                firstIndex = i;

            }
            else {
                firstPoint = null;
            }

        }

        lDirection = sb.toString();

        this._drawLinePath(currentseries, style, lDirection);
        
        this.chartObj.svgRenderer.append(this.gSeriesGroupEle,this.chartObj.gSeriesEle);
       
        

    },
    _doLineSymbol: function(element, sec, val, series, invertedAxes) {
        var beginTime = parseInt(val * sec);
        var chartObj=this.chartObj;
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, invertedAxes);
        var centerX = box.x + (box.width / 2);
        var centerY = box.y + (box.height / 2);
        var scaleVal;
        var $ele = $(element);
        var rotate = chartObj.svgRenderer._getAttrVal($ele, "transform");
        rotate = !ej.util.isNullOrUndefined(rotate) ? rotate : " " ;
        chartObj.svgRenderer._setAttr($ele, { "transform": "scale(0)" });
        $ele.delay(beginTime).animate(
            {
                scale: 1
            },
            {
                duration: 200,

                step: function(now) {
                    scaleVal = now;
                    chartObj.svgRenderer._setAttr($ele, { "transform": "translate(" + centerX + " " + centerY + ") scale(" + scaleVal + ") translate(" + (-centerX) + " " + (-centerY) + ")" + rotate });

                }
            }
        );
    },
    animateSymbol: function(element,delayInterval,series,invertedAxes) {
        var chartObj=this.chartObj;
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, invertedAxes);
        var centerX = box.x + (box.width / 2);
        var centerY = box.y + (box.height / 2);
        var scaleVal;
        var $ele = $(element);
        var rotate = chartObj.svgRenderer._getAttrVal($ele, "transform");
        rotate = !ej.util.isNullOrUndefined(rotate) ? rotate : " ";
        chartObj.svgRenderer._setAttr($ele,{"transform": "scale(0)"});
        $ele.delay(delayInterval).each(function () {this.scale = 0.5; }).animate(
            {
                scale: 1
            },
            {
                duration: 500,

                step: function(now) {
                    scaleVal = now;
                    chartObj.svgRenderer._setAttr($ele, { "transform": "translate(" + centerX + " " + centerY + ") scale(" + scaleVal + ") translate(" + (-centerX) + " " + (-centerY) + ")" + (rotate) });
                }
            }
        );
    },
    animateStackingRect: function (element, series, invertedAxes) {
        var chartObj = this.chartObj;

        var boxY = (1 - ej.EjSvgRender.utils._valueToCoefficient(series.yAxis, 0)) * (series.yAxis.height);
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, invertedAxes);

        var centerX, centerY;
        var $element = $(element);
        if (chartObj.svgRenderer._getAttrVal($element, "plot")) {
            centerX = box.x;
            centerY = boxY;
        }
        var scaleVal;
        $element.animate(
            {
                scale: 1
            },
            {
                duration: 1000,

                step: function (now) {
                    scaleVal = now;
                    chartObj.svgRenderer._setAttr($element, { "transform": "translate(" + centerX + " " + centerY + ") scale(1," + scaleVal + ") translate(" + (-centerX) + " " + (-centerY) + ")" });
                }
            });
    },
    animateRect: function (element, series) {
        var chartObj = this.chartObj;
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, false);
        var centerX, centerY;
        var $element = $(element);
        if (chartObj.svgRenderer._getAttrVal($element,"plot")) {
            if (chartObj.svgRenderer._getAttrVal($element,"plot") === "negative") {
                centerX = box.x;
                centerY = box.y;
            } else {
                centerX = (box.x +box.width);
                centerY = (box.y + box.height);
            }
        } else {    
            centerX = (box.x + (box.width / 2));
            centerY = box.y + (box.height / 2);
        }
        var scaleVal;
        $element.animate(
            {
                scale: 1
            },
            {
                duration: 1000,

                step: function(now) {
                    scaleVal = now;
                    chartObj.svgRenderer._setAttr($element, { "transform": "translate(" + centerX + " " + centerY + ") scale(1," + scaleVal + ") translate(" + (-centerX) + " " + (-centerY) + ")" });
                }
            });

    },
    animateBarRect: function (element,series,invertedAxes) {
        var chartObj = this.chartObj;
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, invertedAxes);
        var centerX, centerY;
        var $element= $(element);
        if (chartObj.svgRenderer._getAttrVal($element,"plot") === "negative") {
            centerX = box.x + box.width;
            centerY = box.y + box.height;
        } else {
            
            centerX = box.x;
            centerY = box.y;
        }
        var scaleVal;
        $element.animate(
            {
                scale: 1
            },
            {
                duration: 1000,

                step: function (now) {
                    scaleVal = now; 
                    chartObj.svgRenderer._setAttr($element, {"transform": "translate(" + centerX + " " + centerY + ") scale(" + scaleVal + ",1) translate(" + (-centerX) + " " + (-centerY) + ")"});
                }
            });

    },
    animateStackingBar: function (element, series, invertedAxes) {
        var chartObj = this.chartObj;

        var boxX = (ej.EjSvgRender.utils._valueToCoefficient(series.yAxis, 0)) * (series.yAxis.width);
        var box = ej.EjSvgRender.utils._getBoundingClientRect(element, chartObj, series, invertedAxes);

        var centerX, centerY;
        var $element = $(element);
       
            centerX = boxX;
            centerY = box.y;
        
        var scaleVal;
        $element.animate(
            {
                scale: 1
            },
            {
                duration: 1000,

                step: function (now) {
                    scaleVal = now;
                    chartObj.svgRenderer._setAttr($element, { "transform": "translate(" + centerX + " " + centerY + ") scale(" + scaleVal + ",1) translate(" + (-centerX) + " " + (-centerY) + ")" });
                }
            });
    },
    _doLineAnimation: function (series) {
        var chartObj=this.chartObj;
        var clipRect = $(chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id + "_ClipRect").children();
        $(clipRect).animate(
            { width: parseFloat(chartObj.svgRenderer._getAttrVal($(chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id + "_ClipRect").children(),"width")) },
            {
                duration: 2000,

                step: function (now) {
                    chartObj.svgRenderer._setAttr($(clipRect), { "width": now });
                }
            });
        var elements = $(chartObj.gSymbolGroupEle).children().not("defs");
        var secondsPerPoint = 2000 / elements.length;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            this._doLineSymbol(element, secondsPerPoint, i, series, this.chartObj.model.requireInvertedAxes);
        }        
        

    },
    doAnimation: function (series) {

        this._doLineAnimation(series);
    },
    
    _drawLinePath: function (series, style, direction) {

        var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
        var translate = null;
        if (this.chartObj.model.AreaType == "cartesianaxes") {
            var transX = series.xAxis.x;
            var transY = series.yAxis.y;
            translate = 'translate(' + transX + ',' + transY + ')'
        }
        
        var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': translate };
        this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
        if (direction != "") {
            var options = {
                'id': this.chartObj.svgObject.id + "_" + seriesIndex,
                'fill': 'none',
                'stroke-dasharray': series.dashArray,
                'stroke-width': series.width,
                'stroke': style.SeriesInterior,
                'stroke-linecap': series.lineCap,
                'stroke-linejoin': series.lineJoin,
                'opacity': series.opacity,
                'd': direction
            };

            this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);
        }


    },
   
   
    
    

    drawDataLabel: function (series, index, point, x, y) {
	       // method for data label symbols - cartesianaxes
                var labelFormat = series.yAxis.labelFormat?series.yAxis.labelFormat:"";
                var pointText = (point.text) ? point.text : point.y + labelFormat.substring(labelFormat.indexOf('}') + 1);
                var seriesIndex = $.inArray(series, this.chartObj.model.series);
                var textAlign, textBaseline;
				var marker = point.marker? point.marker : series.marker;
			    marker = $.extend(true, {}, series.marker, marker);
                var dataLabelFont = marker.dataLabel.font;
                var size, fontStyle, fontFamily;
				var type = series.type.toLowerCase();
                size = ej.util.isNullOrUndefined(dataLabelFont.size) ? "11px" : dataLabelFont.size;
                fontStyle = ej.util.isNullOrUndefined(dataLabelFont.fontStyle) ? "Normal" : dataLabelFont.fontStyle;
                fontFamily = ej.util.isNullOrUndefined(dataLabelFont.fontFamily) ? "Segoe UI" : dataLabelFont.fontFamily;
                    var labelfont = { size: size, fontStyle: fontStyle, fontFamily: fontFamily };
                    var textOffset = ej.EjSvgRender.utils._measureText(pointText, null, labelfont);
                   
                    var position = this.textPosition(series,index, textOffset, type, x, y);

                    var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                    commonEventArgs.data = { text: pointText, location: { x: position.x, y: position.y }, seriesIndex: seriesIndex, pointIndex: index};
                    this.chartObj._trigger("displayTextRendering", commonEventArgs);
                    
                    var dataLabelOffset = marker.dataLabel.offset;
					if (series.marker.dataLabel.offset) {
                        if (series.marker.dataLabel.textPosition == 'bottom')
                            commonEventArgs.data.location.y = commonEventArgs.data.location.y + dataLabelOffset;
                        else
                            commonEventArgs.data.location.y = commonEventArgs.data.location.y - dataLabelOffset;
                    }
					
                    if (!commonEventArgs.cancel)
                    {
                          var options ={
                            'id': this.chartObj.svgObject.id + '_SeriesText' + index + seriesIndex,
                            'x': commonEventArgs.data.location.x,
                            'y': commonEventArgs.data.location.y,
                            'fill': dataLabelFont.color,
                            'font-size': dataLabelFont.size,
                            'font-family': dataLabelFont.fontFamily,
                            'font-style': dataLabelFont.fontStyle,
                            'font-weight': dataLabelFont.fontWeight,
                            'text-anchor': 'middle'
                          };
					   var margin = marker.dataLabel.margin;
                       var width = textOffset.width + margin.left + margin.right;
                       var height = textOffset.height + margin.top + margin.bottom;
                       var location = { X: commonEventArgs.data.location.x, Y: commonEventArgs.data.location.y };

                        if (ej.util.isNullOrUndefined(series.marker.dataLabel.template)) {
                            if (marker.dataLabel.shape)
                                var element = marker.dataLabel.shape;
                            else if (series.marker.dataLabel.shape)
                                element=  marker.dataLabel.shape;
                            else 
                                element = "None";

                            $.each(this.chartObj.model.symbolShape, function (name) {
                                if (element.toLowerCase() == name.toLowerCase())
                                    symbolName = name;
                            });
							
							var xXalue = commonEventArgs.data.location.x - (margin.left) / 2 + (margin.right) / 2;
							var yValue = commonEventArgs.data.location.y - (margin.top) / 2 - (height/margin.top) + (margin.bottom) / 2;
                            this.dataLabelSymbol(seriesIndex, series, index, xXalue, yValue, width, height, symbolName, this.chartObj);
                            this.chartObj.svgRenderer.drawText(options, commonEventArgs.data.text, this.chartObj.gSeriesTextEle);
						}

                         else {
                            this.drawLabelTemplate(series, point, index, location, this.chartObj);
                        } 
                            
                }
    },

    //smart labels for pie and doughnut

    updateSmartLabelPosition: function (currentseries, point, pointIndex, bounds, midAngle, startPoint, size, sender) {
        var renderingPoints = [];
        var chartObj = sender;
        var seriesType = new ej.seriesTypes[currentseries.type]();
        var connectorDirection = "";

        var connectorX = bounds.connector.connectorX;
        var connectorY = bounds.connector.connectorY;
        var midX = bounds.midPoint.midX;
        var midY = bounds.midPoint.midY;
        var dMidX = bounds.doughnutMidPoint.dMidX;
        var dMidY = bounds.doughnutMidPoint.dMidY;
        var startX = startPoint.startX;
        var startY = startPoint.startY;
        var textGap = (currentseries.marker.dataLabel.template) ? 0 : 4;

        var outerX;
        var textOffset = currentseries.marker.dataLabel.connectorLine.height;
        var radius = chartObj.model.Radius;

        var isIntersectedLabel;
        var angle = midAngle;
         
        //calculation for inside labels
        if (currentseries.labelPosition.toLowerCase() == 'inside') {
            positionX = (midX + startX) / 2;
            positionY = (midY + startY) / 2;

            positionX = (midX + positionX) / 2;
            positionY = (midY + positionY) / 2;

            if (point.isIntersected && chartObj.model.bounds[pointIndex]) {
                currBounds = chartObj.model.bounds[pointIndex];
            }
            else {
                if (midX > startX)
                    currBounds = { X: positionX, Y: positionY, Left: positionX, Top: positionY, Right: positionX + size.width, Bottom: positionY + size.height };
                else
                    currBounds = { X: positionX, Y: positionY, Left: positionX - size.width, Top: positionY, Right: positionX, Bottom: positionY + size.height };
             }

            do {
                isIntersectedLabel = false;
                if (!this.IntersectWith(chartObj, point, currBounds)) continue;
                angle += 0.01;
                point.isIntersected = true;
                currBounds.Angle = angle;
                if (midX > startX) {
                    currBounds.X = currBounds.Left = seriesType.getXCordinate(startX, (radius) + textOffset, angle);
                    currBounds.Right = currBounds.X + size.width;
                }
                else {
                    currBounds.X = currBounds.Right = seriesType.getXCordinate(startX, (radius) + textOffset, angle);
                    currBounds.Left = currBounds.Right - size.width;
                }
                currBounds.Y = currBounds.Top = seriesType.getYCordinate(startY, (radius) + textOffset, angle);
                currBounds.Bottom = currBounds.Y + size.height;
                isIntersectedLabel = true;
            } while (isIntersectedLabel)
            chartObj.model.bounds[pointIndex] = currBounds;

            if (point.isIntersected && chartObj.model.bounds[pointIndex].Angle) {

                positionX = seriesType.getXCordinate(startX, (radius) + textOffset, chartObj.model.bounds[pointIndex].Angle);
                positionY = seriesType.getYCordinate(startY, (radius) + textOffset, chartObj.model.bounds[pointIndex].Angle);

                var connectorMidX = seriesType.getXCordinate(startX, (radius) + textOffset / 3, midAngle);
                var connectorMidY = seriesType.getYCordinate(startY, (radius) + textOffset / 3, midAngle);
                connectorDirection = "M" + " " + midX + " " + midY + " " + "L" + " " + connectorMidX + " " + connectorMidY + "M" + " " + connectorMidX + " " + connectorMidY + "L" + " " + positionX + " " + positionY;

            }
        }

       //calculation for outside labels
        else if (currentseries.labelPosition.toLowerCase() == 'outside') {
           
            if (midX > startX) 
                currBounds = { X: connectorX, Y: connectorY, Left: connectorX, Top: connectorY, Right: connectorX + size.width, Bottom: connectorY + size.height };
           else
               currBounds = { X: connectorX , Y: connectorY, Left: connectorX - size.width, Top: connectorY, Right: connectorX, Bottom: connectorY + size.height };
            
            do {
                isIntersectedLabel = false;
                if (!this.IntersectWith(chartObj, point, currBounds)) continue;
                angle += 0.01;
                point.isIntersected = true;
                if (midX > startX) {
                    currBounds.X = currBounds.Left = seriesType.getXCordinate(startX, (radius) + textOffset, angle);
                    currBounds.Right = currBounds.X + size.width;
                }
                else {
                    currBounds.X = currBounds.Right = seriesType.getXCordinate(startX, (radius) + textOffset, angle);
                   currBounds.Left = currBounds.Right - size.width;
                }

                currBounds.Y = currBounds.Top = seriesType.getYCordinate(startY, (radius) + textOffset, angle);              
                currBounds.Bottom = currBounds.Y + size.height;
                isIntersectedLabel = true;
            } while (isIntersectedLabel)

            chartObj.model.bounds[pointIndex] = currBounds;

            var connectorMidX = seriesType.getXCordinate(startX, (radius) + textOffset / 3, midAngle);
            var connectorMidY = seriesType.getYCordinate(startY, (radius) + textOffset / 3, midAngle);

            renderingPoints.push({ X: midX, Y: midY });
            renderingPoints.push({ X: connectorMidX, Y: connectorMidY });
            renderingPoints.push({ X: currBounds.X, Y: currBounds.Y });
            positionX = currBounds.X;
            positionY = currBounds.Y;
            if (textOffset > 0) {
                if (midX < startX) {
                    outerX = currBounds.X - chartObj.model.elementSpacing;
                    positionX = outerX - textGap;
                }
                else {
                    outerX = currBounds.X + chartObj.model.elementSpacing;
                    positionX = outerX + textGap;
                }
                renderingPoints.push({ X: outerX, Y: currBounds.Y });
            }
            if (currentseries.marker.dataLabel.connectorLine.type.toLowerCase() == 'bezier' && !chartObj.vmlRendering) {
                seriesType.drawBezierSegment(renderingPoints, currentseries, pointIndex, chartObj);
            }
            else {
                connectorDirection = "M" + " " + midX + " " + midY + " " + "L" + " " + connectorMidX + " " + connectorMidY + "M" + " " + connectorMidX + " " + connectorMidY + "L" + " " + currBounds.X + " " + currBounds.Y + "M" + " " + currBounds.X + " " + currBounds.Y + "L" + " " + outerX + " " + currBounds.Y;
              }
                      
        }


         //calculation for outsideExtended labels
        else {
            var labelX = midX;
            var labelY = midY;

            midX = midX + (Math.cos((midAngle)) * (-(radius / 10)));
            midY = midY + (Math.sin((midAngle)) * (-(radius / 10)));

            var connectorHeight = radius / 4;

            renderingPoints.push({ X: midX, Y: midY });
            midX = midX + (Math.cos((midAngle)) * connectorHeight);
            midY = midY + (Math.sin((midAngle)) * connectorHeight);

            renderingPoints.push({ X: midX, Y: midY });

            var legendWidth = (chartObj.model.legend.visible && chartObj.model.legend.position.toLowerCase() == "left") ? (chartObj.model.margin.left + chartObj.model.LegendBounds.Width) : 0;
            var centerX = chartObj.model.centerX;
            var labelEdge;

            if (midX < startX) {

                midX = ((centerX - radius - (connectorHeight * 2) - currentseries.LeftLabelMaxWidth > 0)
                                 ? centerX - radius - (connectorHeight * 2) + legendWidth
                                 : (currentseries.LeftLabelMaxWidth > labelX) ? labelX : currentseries.LeftLabelMaxWidth) - size.width / 2;

                labelEdge = renderingPoints[1].X - currentseries.LeftLabelMaxWidth;

                var height = (centerX - radius - (connectorHeight * 2) - currentseries.LeftLabelMaxWidth > 0) ? connectorHeight
                             : (currentseries.LeftLabelMaxWidth > labelX) ? 0
                             : (labelEdge > 3 * (connectorHeight / 2)) ? connectorHeight : labelEdge / 2;

                connectorLineEdge = +size.width / 2;

            }
            else {
                midX = ((centerX + radius + (connectorHeight * 2) + currentseries.RightLabelMaxWidth < $(chartObj.svgObject).width())
               ? centerX + radius + (connectorHeight * 2) - legendWidth
               : ((centerX + radius + currentseries.RightLabelMaxWidth) > $(chartObj.svgObject).width()) ? labelX : $(chartObj.svgObject).width() - currentseries.RightLabelMaxWidth) + size.width / 2;


                labelEdge = ($(chartObj.svgObject).width() - currentseries.RightLabelMaxWidth) - renderingPoints[1].X;

                var height = (centerX + radius + (connectorHeight * 2) + currentseries.RightLabelMaxWidth < $(chartObj.svgObject).width()) ? connectorHeight
                            : ((centerX + radius + currentseries.RightLabelMaxWidth) > $(chartObj.svgObject).width()) ? 0
                            : (labelEdge > 3 * (connectorHeight / 2)) ? connectorHeight : labelEdge / 2;
                connectorLineEdge = -size.width / 2;
            }

            var distanceFromOrigin = (Math.sqrt(Math.pow(labelX - midX, 2) + Math.pow(labelY - midY, 2))) / 10;

            var isLeft = (midX < startX) ? true : false;
            midX = isLeft ? midX + distanceFromOrigin : midX - distanceFromOrigin;
            var index = isLeft ? 1 : -1;

            var bounds = isLeft ? chartObj.model.bounds["left"] : chartObj.model.bounds["right"];
            var currBounds = { X: midX, Y: midY, Left: midX, Top: midY, Right: midX + size.width, Bottom: midY + size.height, index: pointIndex };
            if (this.IntersectWith(chartObj, point, currBounds)) {
                renderingPoints.push(midX < startX
                       ? { X: midX + height + connectorLineEdge, Y: midY }
                       : { X: midX - height + connectorLineEdge, Y: midY });
                midY = bounds[point.index + index].Bottom + 2;

                currBounds.Y = midY;
                currBounds.Top = midY;
                currBounds.Bottom = midY + size.height;

            }

            renderingPoints.push({ X: midX + connectorLineEdge, Y: midY });

            if (!isLeft)
                chartObj.model.bounds["right"][point.index] = (currBounds);
            else
                chartObj.model.bounds["left"][point.index] = (currBounds);


            connectorDirection = ej.EjSvgRender.utils._getStringBuilder();
            if (currentseries.marker.dataLabel.connectorLine.type.toLowerCase() == 'bezier' && !chartObj.vmlRendering) {
                seriesType.drawBezierSegment(renderingPoints, currentseries, pointIndex, chartObj);
            }
            else {
                for (k = 0; k < renderingPoints.length; k++) {
                    if (k == renderingPoints.length - 1)
                        connectorDirection.append(" ");
                    else
                        connectorDirection.append("M" + " " + (renderingPoints[k].X) + " " + (renderingPoints[k].Y) + " " + "L" + " " + (renderingPoints[k + 1].X) + " " + (renderingPoints[k + 1].Y) + " ");
                }
                connectorDirection = connectorDirection.toString();
            }
            positionX = renderingPoints[renderingPoints.length - 1].X + ((midX < startX) ? -textGap : textGap);
            positionY = renderingPoints[renderingPoints.length - 1].Y;
        }
        return { positionX: positionX, positionY: positionY, connectorDirection: connectorDirection };
    },

    updateLabelPosition: function (currentseries, point, pointIndex, bounds, midAngle, startPoint, size, sender) {

        var renderingPoints=[];
        var chartObj=sender; 
        var seriesType = new ej.seriesTypes[currentseries.type]();
        var connectorDirection = "";

        var connectorX = bounds.connector.connectorX;
        var connectorY = bounds.connector.connectorY;
        var midX = bounds.midPoint.midX;
        var midY = bounds.midPoint.midY;
        var dMidX = bounds.doughnutMidPoint.dMidX;
        var dMidY = bounds.doughnutMidPoint.dMidY;
        var startX = startPoint.startX;
        var startY = startPoint.startY;
        var textGap = (currentseries.marker.dataLabel.template) ? 0 :4;
       
        var outerX;
        var textOffset=currentseries.marker.dataLabel.connectorLine.height;
        var radius = chartObj.model.Radius;

        //calculation for outside labels

        renderingPoints.push({ X: midX, Y: midY });
        renderingPoints.push({ X: connectorX, Y: connectorY });
        positionX = connectorX;
        positionY = connectorY;

        if (currentseries.labelPosition.toLowerCase() == 'outside') {
            if (textOffset > 0) {
                if (connectorX < startX) {
                    outerX = connectorX - chartObj.model.elementSpacing;
                    positionX = outerX - textGap;
                }
                else {
                    outerX = connectorX + chartObj.model.elementSpacing;
                    positionX = outerX + textGap;
                }
                renderingPoints.push({ X: outerX, Y: connectorY });
            } 
           
            if (currentseries.marker.dataLabel.connectorLine.type.toLowerCase() == 'bezier' && !chartObj.vmlRendering) {
                seriesType.drawBezierSegment(renderingPoints, currentseries, pointIndex, chartObj);
            }
            else {
                connectorDirection = "M" + " " + midX + " " + midY + " " + "L" + " " + connectorX + " " + connectorY + " " + "M" + " " + connectorX + " " + connectorY + "L" + " " + outerX + " " + connectorY;
            }
          
        }


            //calculation for outsideextended labels
        else if (currentseries.labelPosition.toLowerCase() == 'outsideextended') {

            labelX=midX;
            labelY=midY;

            midX = midX + (Math.cos((midAngle)) * (-(radius / 10)));
            midY = midY + (Math.sin((midAngle)) * (-(radius / 10)));


            var renderingPoints = [];

            var connectorHeight = radius / 4;

            renderingPoints.push({ X: midX, Y: midY });
            connectorX = midX + (Math.cos((midAngle)) * connectorHeight);
            connectorY = midY + (Math.sin((midAngle)) * connectorHeight);

            renderingPoints.push({ X: connectorX, Y: connectorY });

            var legendWidth = (chartObj.model.legend.visible && (chartObj.model.legend.position.toLowerCase() == "left" || chartObj.model.legend.position.toLowerCase() == "right")) ? (chartObj.model.elementSpacing) : 0;

            if (midX < startX) {
                connectorX = (chartObj.model.centerX - radius - (connectorHeight * 2) - currentseries.LeftLabelMaxWidth > 0)
                                     ? chartObj.model.centerX - radius - (connectorHeight * 2) + legendWidth
                                     : (currentseries.LeftLabelMaxWidth > labelX) ? labelX : currentseries.LeftLabelMaxWidth;
            }
            else {
                connectorX = (chartObj.model.centerX + radius + (connectorHeight * 2) + currentseries.RightLabelMaxWidth < $(chartObj.svgObject).width())
                     ? chartObj.model.centerX + radius + (connectorHeight * 2) - legendWidth
                     : ((chartObj.model.centerX + radius + currentseries.RightLabelMaxWidth) > $(chartObj.svgObject).width()) ? labelX : $(chartObj.svgObject).width() - currentseries.RightLabelMaxWidth;
                      
            }

            renderingPoints.push({ X: connectorX, Y: connectorY });

            connectorDirection = ej.EjSvgRender.utils._getStringBuilder();
            if (currentseries.marker.dataLabel.connectorLine.type.toLowerCase() == 'bezier' && !chartObj.vmlRendering) {
                seriesType.drawBezierSegment(renderingPoints, currentseries, pointIndex, chartObj);
            }
            else {
                for (k = 0; k < renderingPoints.length; k++) {
                    if (k == renderingPoints.length - 1)
                        connectorDirection.append(" ");
                    else
                        connectorDirection.append("M" + " " + (renderingPoints[k].X) + " " + (renderingPoints[k].Y) + " " + "L" + " " + (renderingPoints[k + 1].X) + " " + (renderingPoints[k + 1].Y) + " ");
                }
                connectorDirection = connectorDirection.toString();
            }
            positionX = renderingPoints[renderingPoints.length - 1].X + ((midX < startX) ? -textGap : textGap);;
            positionY = renderingPoints[renderingPoints.length - 1].Y;
        }

       //calculation for inside labels

        else {
            if (currentseries.type.toLowerCase() == "doughnut") {
                positionX = (midX + dMidX) / 2;
                positionY = (midY + dMidY) / 2;
            }
            else {
                positionX = (midX + startX) / 2;
                positionY = (midY + startY) / 2;

                positionX = (midX + positionX) / 2;
                positionY = (midY + positionY) / 2;
            }
        }

        return { positionX: positionX, positionY: positionY, connectorDirection: connectorDirection };
    },

	drawDataLabelAcc: function (sender, currentseries, pointIndex, point) {
	    // method for data label symbols - accumulation series
	    if (point.visible) {
	        var chartObj = sender;
	        var seriesType = new ej.seriesTypes[currentseries.type]();
	        var outerX;
	        var connectorDirection;
	        var positionX = 0;
	        var positionY = 0;
	        var pointColor;
	        var numberToFixed = ej.util.isNullOrUndefined(chartObj.model.roundingPlaces) ? 2 : chartObj.model.roundingPlaces;

	        var _labelPosition = currentseries.labelPosition.toLowerCase();


	        var text = (Math.round(point.YValues[0]) == point.YValues[0]) ? point.YValues[0] : point.YValues[0].toFixed(numberToFixed);
	        var labelfont = { size: currentseries.marker.dataLabel.font.size, fontStyle: currentseries.marker.dataLabel.font.fontStyle, fontFamily: currentseries.marker.dataLabel.font.fontFamily };
	        var textsize = ej.EjSvgRender.utils._measureText((ej.util.isNullOrUndefined(point.text) ? text : point.text), null, labelfont);

	        var margin = currentseries.marker.dataLabel.margin;

	        var textWidth = textsize.width + margin.left + margin.right;
	        var textHeight = textsize.height + margin.top + margin.bottom;

	        if (currentseries.type.toLowerCase() == "pyramid") {
	            var measureTitle = (chartObj.model.title.text) ? ej.EjSvgRender.utils._measureText(chartObj.model.title.text, $(this.svgObject).width() - chartObj.model.margin.left - chartObj.model.margin.right, chartObj.model.title.font) : 0;
	            var pyrX = chartObj.model.elementSpacing + chartObj.model.margin.left +
                           (chartObj.model.legend.position.toLowerCase() === "left") ?
                           (chartObj.model.LegendBounds.Width) : 0;
	            var pyrY = ((chartObj.model.legend.position.toLowerCase() === "top")
                            ? (chartObj.model.LegendBounds.Height) : 0) +
                            ((chartObj.model.title.text) ? (chartObj.model._titleLocation.Y + measureTitle.height) : (chartObj.model.margin.top + chartObj.model.elementSpacing));
	            textWidth = textWidth + 10;
	            var Location = { X: point.xLocation + pyrX, Y: point.yLocation + pyrY };
	            positionX = point.xLocation;
	            positionY = point.yLocation;
	            var marker = point.marker ? point.marker : currentseries.marker;
	            marker = $.extend(true, {}, currentseries.marker, marker);
	            connectorDirection = point.connectorLine;

	        }

	        if (currentseries.type.toLowerCase() != "pyramid") {
	            var textOffset;
	            var radius = chartObj.model.Radius;

	            if (ej.util.isNullOrUndefined(currentseries.marker.dataLabel.connectorLine.height)) {
	                text = ej.util.isNullOrUndefined(point.text) ? point.y : point.text;
	                currentseries.marker.dataLabel.connectorLine.height = ej.EjSvgRender.utils._measureText(text, null, currentseries.marker.dataLabel.font).height;
	            }

	            textOffset = currentseries.marker.dataLabel.connectorLine.height;

	            var chartStartingAngle = -.5 * Math.PI; // to move the arc to 90 degree from the start.
	            var renderingPoints = [];

	            var startX, startY;

	            var midAngle = point.midAngle + chartStartingAngle;
	            if ((pointIndex == currentseries.explodeIndex || currentseries.explodeAll) && !chartObj.vmlRendering) {

	                startX = chartObj.model.centerX + Math.cos(midAngle) * currentseries.explodeOffset;
	                startY = chartObj.model.centerY + Math.sin(midAngle) * currentseries.explodeOffset;
	            }
	            else {
	                startX = chartObj.model.centerX;
	                startY = chartObj.model.centerY;
	            }
	            var midX = seriesType.getXCordinate(startX, (radius), midAngle);
	            var midY = seriesType.getYCordinate(startY, (radius), midAngle);

	            var dMidX = seriesType.getXCordinate(startX, (chartObj.model.dRadius), midAngle);
	            var dMidY = seriesType.getYCordinate(startY, (chartObj.model.dRadius), midAngle);

	            var connectorX = this.getXCordinate(startX, (radius) + textOffset, midAngle);
	            var connectorY = this.getYCordinate(startY, (radius) + textOffset, midAngle);

	            if (currentseries.marker.dataLabel.template) {
	                size = point.size;
	            }
	            else {
	                var marker = point.marker ? point.marker : currentseries.marker;
	                marker = $.extend(true, {}, currentseries.marker, marker);
	                var shape = marker.dataLabel.shape;
	                size = ej.EjSvgRender.utils._measureText(currentseries.visibleLabels[pointIndex], $(chartObj.svgObject).width(), currentseries.marker.dataLabel.font);
	                if (shape.toLowerCase() != "none") {
	                    var margin = currentseries.marker.dataLabel.margin;
	                    size.height = size.height + margin.top + margin.bottom;
	                    size.width = size.width + margin.left + margin.right;
	                }
	            }

	            var midPoint = { midX: midX, midY: midY };
	            var doughnutMidPoint = { dMidX: dMidX, dMidY: dMidY };
	            var connector = { connectorX: connectorX, connectorY: connectorY };
	            var bounds = { midPoint: midPoint, doughnutMidPoint: doughnutMidPoint, connector: connector };
	            var startPoint = { startX: startX, startY: startY };

	            if (!currentseries.enableSmartLabels) {
	                position = seriesType.updateLabelPosition(currentseries, point, pointIndex, bounds, midAngle, startPoint, size, sender);
	                positionX = position.positionX;
	                positionY = position.positionY;
	                connectorDirection = position.connectorDirection;
	            }
	                // smart labels

	            else {

	                position = seriesType.updateSmartLabelPosition(currentseries, point, pointIndex, bounds, midAngle, startPoint, size, sender);
	                positionX = position.positionX;
	                positionY = position.positionY;
	                connectorDirection = position.connectorDirection;
	            }



	        }
	        var textAnchor = ((_labelPosition != 'inside' && _labelPosition != 'insidenooverlap') || (currentseries.type.toLowerCase() == "pyramid" && _labelPosition == 'outside')) ? ((positionX < chartObj.model.centerX) ? 'end' : 'start') : 'middle';
        var width = (_labelPosition == 'inside' || _labelPosition == 'insidenooverlap') ? 0 : (positionX < chartObj.model.centerX) ? -textsize.width : textsize.width;
        if (!currentseries.marker.dataLabel.template) {
            var textOptions = {
                'id': chartObj.svgObject.id + '_PointText'  + pointIndex,
                'x': positionX,
                'y': positionY + textsize.height / 4,
                'fill': currentseries.marker.dataLabel.font.color,
	                'font-size': currentseries.marker.dataLabel.font.size,
	                'font-family': currentseries.marker.dataLabel.font.fontFamily,
	                'font-style': currentseries.marker.dataLabel.font.fontStyle,
	                'font-weight': currentseries.marker.dataLabel.font.fontWeight,
	                'opacity': currentseries.marker.dataLabel.font.opacity,
	                'text-anchor': textAnchor
	            };
	            chartObj.svgRenderer.drawText(textOptions, ((ej.util.isNullOrUndefined(point.text) ? text : point.text)), chartObj.gSeriesTextEle);
	        }

	        if (currentseries.marker.dataLabel.template) {
	            Location = ej.util.isNullOrUndefined(Location) ? { X: positionX, Y: positionY } : Location;
	            seriesType.drawLabelTemplate(currentseries, point, pointIndex, Location, sender);
	        }

	        else {
	            $.each(chartObj.model.symbolShape, function (name) {
	                var marker = point.marker ? point.marker : currentseries.marker;
	                marker = $.extend(true, {}, currentseries.marker, marker);
	                var shape = marker.dataLabel.shape;
	                if (shape.toLowerCase() == name.toLowerCase())
	                    symbolName = name;
	            });

	            positionX = positionX - (margin.left) / 2 + (margin.right) / 2 + width / 2;
	            positionY = positionY - (margin.top) / 2 + (margin.bottom) / 2;

	            seriesType.dataLabelSymbol(0, currentseries, pointIndex, positionX, positionY, textWidth, textHeight, symbolName, chartObj);

	        }
	        pointColor = jQuery.type(chartObj.model.pointColors[pointIndex]) == "array" ? chartObj.model.pointColors[pointIndex][0].color : chartObj.model.pointColors[pointIndex];
	        if ((currentseries.marker.dataLabel.connectorLine.type.toLowerCase() != 'bezier' || chartObj.vmlRendering || currentseries.type.toLowerCase() == "pyramid") && (connectorDirection != '')) {
	            if (connectorDirection){
	                var connectorOptions = {
	                    'id': chartObj.svgObject.id +  "_connectorLine" + pointIndex,
	                    'stroke': (currentseries.marker.dataLabel.connectorLine.color) ? currentseries.marker.dataLabel.connectorLine.color : pointColor,
	                    'stroke-width': currentseries.marker.dataLabel.connectorLine.width,
	                    'd': connectorDirection
	                };
	            chartObj.svgRenderer.drawPath(connectorOptions, chartObj.gSeriesConnectorEle);
	            }
	        }
	    }
        
	},
	drawBezierSegment: function (controlpoints, currentseries, pointIndex, sender) {
	    var polyLine = ej.EjSvgRender.utils._getStringBuilder();
	    var seriesType = new ej.seriesTypes[currentseries.type]();
	    for (var i = 0; i <= 16; i++) {
	        var t = i / 16;
	        var points = seriesType.GetBezierPoint(t, controlpoints, 0, controlpoints.length, currentseries);
	        polyLine.append(points.X + "," + points.Y + " ");
	    }
	    var connectorOptions = {
	        'id': sender.svgObject.id + "_bezierLine" + pointIndex,
	        'stroke': (currentseries.marker.dataLabel.connectorLine.color) ? currentseries.marker.dataLabel.connectorLine.color : sender.model.pointColors[pointIndex],
	        'stroke-width': currentseries.marker.dataLabel.connectorLine.width,
            'fill':'none',
	        'points': polyLine.toString()
	    };
	    sender.svgRenderer.drawPolyline(connectorOptions, sender.gSeriesConnectorEle);
	},
	GetBezierPoint:function(t, controlPoints, index, count, currentseries)
	{
	    var seriesType = new ej.seriesTypes[currentseries.type]();
	    if (count == 1)
	        return controlPoints[index];
	    var p0 = seriesType.GetBezierPoint(t, controlPoints, index, count - 1, currentseries);
	    var p1 = seriesType.GetBezierPoint(t, controlPoints, index + 1, count - 1, currentseries);

	    var X = (1 - t) * p0.X + t * p1.X;
	    var Y = (1 - t) * p0.Y + t * p1.Y;

	    return {X:X, Y:Y};


       // return new Point((1 - t) * p0.X + t * p1.X, (1 - t) * p0.Y + t * p1.Y);
    },
	
    drawLabelTemplate: function (series, point, pointIndex, location, sender) {
        // method for data label template
        if(sender)
        this.chartObj = sender;
	    var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
        var areaType = this.chartObj.model.AreaType;
        var currentSeries = this.chartObj.model.series[seriesIndex];
		var xPosition = 0, yPosition = 0;
        var chartContainer = this.chartObj._id;
		var marker = point.marker? point.marker : series.marker;
	    marker = $.extend(true, {}, series.marker, marker);
        var style = { 'interior': series.marker.dataLabel.fill, 'opacity': series.marker.dataLabel.opacity, 'borderColor': series.marker.dataLabel.border.color, 'borderWidth': series.marker.dataLabel.border.width };
        var color, width, height;
		var type = this.chartObj.model.chartRegions[pointIndex] ? this.chartObj.model.chartRegions[pointIndex].type : "";
        if (areaType !="none") {

            if ($('#template_group_' + chartContainer).length != 0)
                var templateContainer = $('#template_group_' + chartContainer);
            else
                templateContainer = $("<div></div>").attr('id', "template_group_" + chartContainer);

            templateContainer.css('position', 'relative').css('z-index', 1000);
			if ($("#" + series.marker.dataLabel.template).length == 0) // To check the specified div is in DOM
                return;
            else
            var cloneNode = $("#" + series.marker.dataLabel.template).clone();
            $(cloneNode).attr("id", series.marker.dataLabel.template + '_' + seriesIndex + '_' + pointIndex + '_' + chartContainer);
            var $cloneNode = $(cloneNode);
            $cloneNode.css("position", "absolute");

            if (series.xAxis._valueType.toLowerCase() == "datetime")
                point.x = (Globalize.format(new Date(point.X), ((ej.util.isNullOrUndefined(series.xAxis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(series.xAxis.intervalType) : series.xAxis.labelFormat)));
            if (series.xAxis._valueType.toLowerCase() == "category")
                point.x = ej.EjSvgRender.utils._getLabelContent(pointIndex, series.xAxis);

            point.count = 1;
            var data = { series: series, point: point };
            $cloneNode.html($cloneNode.html().parseTemplate(data));

            var display = (areaType == "cartesianaxes" || !series.enableAnimation || series.type.toLowerCase() == "pyramid") ? "block" : "none";
            $cloneNode.css("display", display).appendTo($(templateContainer));
            $(templateContainer).appendTo('#' + chartContainer);
            if (areaType == "cartesianaxes") {
            var areaBound = this.chartObj.model.m_AreaBounds;
            xPosition = areaBound.X;
            yPosition = currentSeries.yAxis.y;
            }
            width = $cloneNode.width() / 2;
            height = $cloneNode.height();
            if (ej.util.isNullOrUndefined(style) && style.interior)
                color = style.interior;
            else
                color= this.chartObj.model.seriesColors[seriesIndex];
        }
        else {
            if (ej.util.isNullOrUndefined(style) && style.interior)
                color = style.interior;
            else
                color = this.chartObj.model.pointColors[pointIndex];
           width = this.chartObj.model.centerX > location.X ? point.size.width : 0;
            $cloneNode = $('#template_group_' + chartContainer).find("#" + series.marker.dataLabel.template + '_' + seriesIndex + '_' + pointIndex + '_' + chartContainer);
            height = point.size.height / 2;
        }
        
        if (currentSeries.type == 'hilo' || currentSeries.type == 'hiloopenclose' || currentSeries.type == 'candle')
            color = currentSeries.points[pointIndex].interior;
            color = jQuery.type(color) == "array" ? color[0].color : color;
			
       if (type == 'bar' || type == 'stackingbar') {
            var left = location.X + xPosition - width;
            var top = location.Y + areaBound.Y -height;
        } else {
        var left =location.X + xPosition - width;
        var top = yPosition + location.Y - height;
		}
		
        $cloneNode.css("left", left).css("top", top).css("background-color", color);
        if (areaType == "cartesianaxes") {
            if ((left > xPosition + areaBound.Width || top > yPosition + areaBound.Height) || (this.chartObj.zoomed && (left < xPosition || top < yPosition || left > xPosition + areaBound.Width || top > yPosition + areaBound.Height)))
                $cloneNode.css("display", "none");
        }
    },
	
	animateLabelTemplate : function(options) {
	// method to animate data label template
        var seriesIndex = $.inArray(options, this.chartObj.model._visibleSeries);
        var length = options.points.length;
        var secondsPerPoint = 1000;
        
        for (var i = 0; i < length; i++) {
            if (options.points[i].marker && options.points[i].marker.dataLabel && options.points[i].marker.dataLabel.visible) {
            var ele = options.marker.dataLabel.template + '_' + seriesIndex + '_' + i + '_' + this.chartObj._id;
            ele = $('#' + ele);
            ele.css("display", "none");
            ele.delay(secondsPerPoint).fadeIn(300);
			}
			else
			continue;
        }
    },
	
	textPosition: function (series, index, textOffset, type, x, y) {
        var horizontalTextAlignment = series.marker.dataLabel.horizontalTextAlignment;
        var verticalTextAlignment = series.marker.dataLabel.verticalTextAlignment;
	    var lineHeight = 10;

       if (type == 'column' || type == 'stackingcolumn') {
            var length = this.chartObj.model.chartRegions.length - series.points.length;
            length = length + index;
            var pointHeight = this.chartObj.model.chartRegions[length].Region.Bounds.Height;
            if (series.marker.dataLabel.textPosition.toLowerCase() == "bottom")
                y += pointHeight + textOffset.height / 4;
            else if (series.marker.dataLabel.textPosition.toLowerCase() == "middle")
                y += pointHeight / 2 + (textOffset.height) / 4;
            else
                y += (textOffset.height) / 4;

            if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "far")
                x += textOffset.width + lineHeight;
            else if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "near")
                x -= ((textOffset.width) + lineHeight);

            if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "near")
                y += textOffset.height / 3;
            else if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "far")
                y -= textOffset.height / 3;
        }

        else if (type == 'bar' || type == 'stackingbar') {
            length = this.chartObj.model.chartRegions.length - series.points.length;
            length = length + index;
            var pointWidth = this.chartObj.model.chartRegions[length].Region.Bounds.Width;
			y = y+ textOffset.height / 4;
            if (series.marker.dataLabel.textPosition.toLowerCase() == "bottom")
                x -= pointWidth + textOffset.width / 4;
            else if (series.marker.dataLabel.textPosition.toLowerCase() == "middle")
                x -= pointWidth / 2 + textOffset.width / 2;
            else
                x = x - textOffset.width / 4;

            if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "far")
                x += textOffset.width - textOffset.width/4 ;
            else if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "near")
                x -= textOffset.width / 4;
            else // for center
                x += textOffset.width / 4;
				
            if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "near")
                y += textOffset.height;
            else if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "far")
                y -= textOffset.height;
        }
        else if (type == "polar" || type == "radar") {
                y += textOffset.height / 4;
            if (series.marker.dataLabel.textPosition.toLowerCase() == "bottom")
                y += (textOffset.height);
            else if (series.marker.dataLabel.textPosition.toLowerCase() == "top")
                y -=  (textOffset.height);

            if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "far")
                x += textOffset.width;
            else if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "near")
                x -= (textOffset.width);

            if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "near")
                y += (textOffset.height)/2;
            else if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "far")
                y -= ((textOffset.height)/2);
        }
        else {
            if (series.marker.dataLabel.textPosition.toLowerCase() == "bottom")
                y += (2 * textOffset.height + lineHeight);
            else if (series.marker.dataLabel.textPosition.toLowerCase() == "top")
                y -= (lineHeight + (2 * textOffset.height) / 2);

            if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "far")
                x += textOffset.width + lineHeight;
            else if (horizontalTextAlignment && horizontalTextAlignment.toLowerCase() == "near")
                x -= ((textOffset.width) + lineHeight);

            if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "near")
                y += (textOffset.height + lineHeight);
            else if (verticalTextAlignment && verticalTextAlignment.toLowerCase() == "far")
                y -= (lineHeight + (textOffset.height) / 2);
        }
        var location = { x: x, y: y };
        return location;
    },
	
    drawSymbolImage: function (series, pointIndex) {
                var point = series.points[pointIndex];
                if (point.visible) {

                if (point.marker) {
                    if (!(point.marker.visible || series.marker.visible) || point.marker.shape != this.chartObj.model.symbolShape.image)
                        return;
                }

                
                var element = (point.marker) ? point : series;
                element = $.extend(true, {}, series.marker, element);
                if (element.shape.toLowerCase() == "image") {
                    var img = new Image();
                    img.src = element.imageUrl;
                    element.image = img;
					}
			}
        
    },

    changeCrossHairSymbol: function(element, track, ptIndex, serIndex, series) {
        if (!ej.util.isNullOrUndefined(track)) {
            var trackMarker = {};
            element = $.extend(true, {}, series.marker, element);
            trackMarker = $.extend(true, {}, this.chartObj.model.crosshair.marker, trackMarker);

            if (ej.util.isNullOrUndefined(trackMarker.shape)) {
                trackMarker.shape = element.shape;
            }
            
            if ((!this.chartObj.model.crosshair.visible || ej.util.isNullOrUndefined(trackMarker.fill)) && series.type.toLowerCase() != "bubble" && series.type.toLowerCase() != "scatter") {
                if(trackMarker.shape.toLowerCase()=="cross" ||trackMarker.shape.toLowerCase()=="horizline"||trackMarker.shape.toLowerCase()=="vertline" )   
                    trackMarker.fill = jQuery.type(this.chartObj.model.seriesColors[serIndex]) == "array" ? this.chartObj.model.seriesColors[serIndex][0].color : this.chartObj.model.seriesColors[serIndex];         
                else
                    trackMarker.fill = element.border.color;
            }
            if (series.type.toLowerCase() == "bubble") {
                var box = $(this.chartObj.gSeriesEle).find("#" + this.chartObj.svgObject.id + '_circlesymbol_' + ptIndex + "_" + serIndex)[0].getBoundingClientRect();
                trackMarker.size.width = (box.right - box.left) / 2 + 15;
                trackMarker.size.height = (box.bottom - box.top) / 2 + 15;
            } else {
                if (trackMarker.size.width <= element.size.width)
                    trackMarker.size.width = element.size.width + 2;
                if (trackMarker.size.height <= element.size.height)
                    trackMarker.size.height = element.size.height + 2;
               
                if (ej.util.isNullOrUndefined(trackMarker.border.color) || !this.chartObj.model.crosshair.visible){              
                 if (!ej.util.isNullOrUndefined(element.fill))
                    trackMarker.border.color = jQuery.type(element.fill) == "array" ? element.fill._gradientStop[0].color : element.fill;
                else
                  trackMarker.border.color = jQuery.type(this.chartObj.model.seriesColors[serIndex]) == "array" ? this.chartObj.model.seriesColors[serIndex][0].color : this.chartObj.model.seriesColors[serIndex];
                }
            }
        }
        series._trackMarker = trackMarker;
        return trackMarker;


    },
	
    dataLabelSymbol: function (seriesIndex, series, pointIndex, x, y, width, height, symbolName, sender) {
        var chartObj = sender;
        if (symbolName == 'None')
            return;
            var point = series.points[pointIndex];
            var location = { startX: x, startY: y };
            var symbolEle = chartObj.gSymbolGroupEle;
            var element = point.marker ? point.marker : series.marker;
            var gradientName = "symbol";
            var style = { 'interior': series.marker.dataLabel.fill, 'opacity': series.marker.dataLabel.opacity, 'borderColor': series.marker.dataLabel.border.color, 'borderWidth': series.marker.dataLabel.border.width };
            var options = {
                'style': style,
                'gradientName': gradientName,
                'symbolEle': symbolEle,
                'width': width,
                'height': height,
                'point': point,
                'location': location,
                'seriesIndex': seriesIndex,
                'pointIndex': pointIndex,
                'element': element,
                'symbolName': symbolName,
                'id': chartObj.svgObject.id + '_dataLabel_' + seriesIndex + "_" + pointIndex
            };
            this.drawSymbolStyle(options, chartObj);
    },

    drawSymbolStyle: function (options, sender) {
        var chartObj = sender;
        var borderColor, borderWidth, opacity;
        var style = options.style, gradientName = options.gradientName, symbolEle = options.symbolEle, width = options.width;
        var height = options.height, point = options.point, location = options.location, seriesIndex = options.seriesIndex, visibility=options.visibility;
        var pointIndex = options.pointIndex, element = options.element, symbolName = options.symbolName;
        if (style != null) {
            if (style.borderColor != "")
                borderColor = style.borderColor ? style.borderColor: "transparent";

            opacity = style.opacity;
            if (style.borderWidth)
                borderWidth = style.borderWidth;
        }
        var colors = null;
        if (style.interior) {
            colors = ej.util.isNullOrUndefined(style.interior._gradientStop) ? style.interior : style.interior._gradientStop;
        }
        else {       
            if (point.fill)
                colors = ej.util.isNullOrUndefined(point.fill._gradientStop) ? point.fill : point.fill._gradientStop;
            else
                colors = (chartObj.model.seriesColors[seriesIndex]) ? chartObj.model.seriesColors[seriesIndex] : chartObj.model.pointColors[pointIndex];
        }
       chartObj.symbolColorName = chartObj.svgRenderer.createGradientElement(gradientName + seriesIndex, colors, 0, 0, 0, $(chartObj.svgObject).height(), symbolEle);

        var symbolStyle = { ShapeSize: {width:width, height:height}, Style: { BorderColor: borderColor, BorderWidth: borderWidth, Opacity: opacity, Visibility:visibility, Color: chartObj.symbolColorName}, PointIndex: pointIndex, SeriesIndex: seriesIndex, Imageurl: element.imageUrl, Image: element.image, ID:options.id };

        var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonEventArgs.data = { location: location, style: symbolStyle };
        chartObj._trigger("symbolRendering", commonEventArgs);

        if (!commonEventArgs.Cancel)
            ej.EjSvgRender.chartSymbol["_draw" + symbolName](commonEventArgs.data.location, commonEventArgs.data.style, chartObj, symbolEle);

        if (chartObj.model.AreaType == "none" && $(symbolEle).children().not("defs").length > chartObj.model._visibleSeries[seriesIndex].visiblePoints.length) {
            $(symbolEle.childNodes[options.pointIndex]).replaceWith($(symbolEle.childNodes[$(symbolEle.childNodes).length - 1]));
        }

    },
	
    drawSymbol: function (seriesIndex,series, pointIndex, x, y,chart,trackSymbol) {

        if (ej.util.isNullOrUndefined(this.chartObj)) this.chartObj = chart;


        var point = series.points[pointIndex];
       

             var symbolName = "None";
             var tracker = this.changeCrossHairSymbol(point.marker ? point.marker : series.marker, trackSymbol, pointIndex, seriesIndex, series);
             var element = tracker ? tracker : $.extend(true, {}, series.marker, point.marker);

             $.each(this.chartObj.model.symbolShape, function(name) {
                 if (element.shape.toLowerCase() == name.toLowerCase())
                     symbolName = name;
             });
                if (symbolName == "None")
                    return;
                var location = { startX: x, startY: y };
                var style = {'interior' : element.fill, 'opacity': element.opacity, 'borderColor': element.border.color, 'borderWidth' :element.border.width };

                var symbolEle = (trackSymbol) ? this.chartObj.gTrackerEle : this.chartObj.gSymbolGroupEle;
                var id = (trackSymbol) ? (this.chartObj.svgObject.id + '_trackSymbol_' + seriesIndex + "_" + pointIndex) : (this.chartObj.svgObject.id + '_symbol_' + seriesIndex + "_" + pointIndex);
                var gradientName = trackSymbol ? "TrackSymbol" : "symbol";
                var width = element.size.width;
                var height = element.size.height;
                var options = {
                    'style': style,
                    'gradientName': gradientName,
                    'symbolEle': symbolEle,
                    'width': width,
                    'height': height,
                    'point': point,
                    'location': location,
                    'seriesIndex': seriesIndex,
                    'pointIndex': pointIndex,
                    'element': element,
                    'visibility': (point.visible) ? 'visible' : 'hidden',
                    'symbolName': symbolName,
                    'id': id
                };
                this.drawSymbolStyle(options, this.chartObj);
        
    },

    chartAreaType: "cartesianAxes",
    requireInvertedAxes: false,
    stackingSeries: false,
    hiloTypes:false
    
};


function ejExtendClass(parent, members) {
    var object = function () { };
    object.prototype = new parent();
    $.extend(object.prototype, members);
    return object;
}

ej.ejLineSeries = ejExtendClass(ej.EjSeriesRender);

ej.seriesTypes.line = ej.ejLineSeries;


ej.ejStepLineSeries = ejExtendClass(ej.EjSeriesRender, {

    draw: function (chart, options) {
        this.chartObj = chart;
        var lDirection;
        var sb = ej.EjSvgRender.utils._getStringBuilder();
        var currentseries = options;
        var style = this.setLineSeriesStyle(currentseries);
        if (currentseries.sorting)
            currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
        var visiblePoints = this.improveChartPerformance(currentseries);

        var firstPoint = null;
        var secondPoint;
        var firstIndex = -1;
        var xOffset = 0;
        if (currentseries.xAxis._valueType.toLowerCase() == "category" && currentseries.xAxis.labelPlacement.toLowerCase() != "onticks")
            xOffset = 0.5;
        for (var i = 0; i <= visiblePoints.length; i++) {
            //secondPoint = visiblePoints[i];
            if (i < visiblePoints.length && visiblePoints[i].visible) {
                    secondPoint = { X: visiblePoints[i].X - xOffset, YValues: [visiblePoints[i].y] };
                    point1 = ej.EjSvgRender.utils._getPoint(secondPoint, currentseries);
                if (firstPoint != null) {
                    if (visiblePoints.length > firstIndex + 1) {
                        var step = {X:secondPoint.X , YValues:[firstPoint.YValues[0]]};
                        var stepPoint = ej.EjSvgRender.utils._getPoint(step, currentseries);
                        sb.append("M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (stepPoint.X) + " " + (stepPoint.Y) + " " + "L" + " " + (point2.X) + " " + (point2.Y) + " ");
                    }
                }
                    firstPoint = secondPoint;
                    point2 = point1;  
            }
            else {
                if (i == visiblePoints.length && xOffset > 0) {
                    secondPoint = { X: visiblePoints[i-1].X + xOffset, YValues: [visiblePoints[i-1].y] };
                    var point1 = ej.EjSvgRender.utils._getPoint(secondPoint, currentseries);
                    sb.append("M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (point2.X) + " " + (point2.Y) + " ");
                }
                else
                    firstPoint = null;
            }
        }
        lDirection = sb.toString();

        this._drawLinePath(currentseries, style, lDirection);

        this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

      
       
       
    },
    doAnimation: function (series) {

        this._doLineAnimation(series);
    }

});

ej.ejStepAreaSeries = ejExtendClass(ej.EjSeriesRender, {

    draw: function (chart, options) {
        this.chartObj = chart;
        var aDirection;
        var sb = ej.EjSvgRender.utils._getStringBuilder();
        var currentseries = options;
        var style = this.setAreaSeriesStyle(currentseries);
        if (currentseries.sorting)
            currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
        var visiblePoints = this.improveChartPerformance(currentseries);
        var xOffset = 0;
        var firstPoint = null;
        var secondPoint;
        if (currentseries.xAxis._valueType.toLowerCase() == "category" && currentseries.xAxis.labelPlacement.toLowerCase() != "onticks")
            xOffset = 0.5;
        var origin = Math.max(options.yAxis.visibleRange.min, 0);
        var startPoint = null;
        var start = true;
        for (var i = 0; i <= visiblePoints.length; i++) {

            if (i < visiblePoints.length) {
                if (visiblePoints[i].visible) {

                    secondPoint = { X: visiblePoints[i].X - xOffset, YValues: [visiblePoints[i].y] };
                    point1 = ej.EjSvgRender.utils._getPoint(secondPoint, currentseries);
                    if (!startPoint) {
                        startPoint = { X: visiblePoints[i].X - xOffset, YValues: [origin] }
                        var startLoc = ej.EjSvgRender.utils._getPoint(startPoint, currentseries);
                        sb.append("M" + " " + (startLoc.X) + " " + (startLoc.Y));
                    }
                    if (firstPoint != null) {
                        var step = { X: secondPoint.X, YValues: [firstPoint.YValues[0]] };
                        var stepPoint = ej.EjSvgRender.utils._getPoint(step, currentseries);
                        if (start) {
                            sb.append(" " + "L" + " " + (point2.X) + " " + (point2.Y) + " ");
                            start = false;
                        }
                        sb.append("L" + " " + (stepPoint.X) + " " + ((stepPoint.Y)) + " " + "L" + " " + (point1.X) + " " + (point1.Y) + " ");
                        if ((xOffset == 0 && i == visiblePoints.length - 1) || (i < (visiblePoints.length - 1) && !visiblePoints[i + 1].visible)) {
                            if (xOffset > 0) {
                                secondPoint = { X: visiblePoints[i].X + xOffset, YValues: [visiblePoints[i].y] };
                                var point1 = ej.EjSvgRender.utils._getPoint(secondPoint, currentseries);
                                sb.append("L" + " " + (point1.X) + " " + (point1.Y) + " " + "L" + " " + (point1.X) + " " + (startLoc.Y) + " ");
                            }
                            else
                                sb.append("L" + " " + point1.X + " " + (startLoc.Y) + " ");
                            startPoint = null;
                            firstPoint = null;
                            start = true;
                        }
                    }
                    if (startPoint) {
                        point2 = point1;
                        firstPoint = secondPoint;
                    }
                }

              }
             else {
                    if  (visiblePoints[i-1].visible && xOffset > 0) {
                                secondPoint = { X: visiblePoints[i - 1].X + xOffset, YValues: [visiblePoints[i - 1].y] };
                                var point1 = ej.EjSvgRender.utils._getPoint(secondPoint, currentseries);
                                sb.append("L" + " " + (point1.X) + " " + (point1.Y) + " " + "L" + " " + (point1.X) + " " + (startLoc.Y) + " ");
                       }                           
                }
            
         }
        aDirection = sb.toString();

        this.drawAreaPath(currentseries, style, aDirection);

        this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

       
     
    },

    doAnimation: function (series) {

        this._doLineAnimation(series);
    }

});
ej.seriesTypes.steparea = ej.ejStepAreaSeries;


ej.seriesTypes.stepline = ej.ejStepLineSeries;


 ej.ejColumnSeries = ejExtendClass(ej.EjSeriesRender, {
   
  
      
     draw: function (chart,options)
      { 
         this.chartObj=chart;
         var series = options;
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);    
         var origin = Math.max(options.yAxis.visibleRange.min, 0);
        
         var sidebysideinfo = this.getSideBySideInfo(series);    
         var visiblePoints = this._isVisiblePoints(series);
              
         var transX = series.xAxis.x;
         var transY = series.yAxis.y;
         
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         
         var cSer = this;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex=i;
             var point=visiblePoints[i];
           
             var y1 = point.YValues[0];
             var y2 = origin;
             if (point.visible) {
             //calculate sides
             var data = cSer.calculateSides(point, sidebysideinfo);
             var x1 = data.x1;
             var x2 = data.x2;
             
			 var styleOptions= this.chartObj.setStyle(cSer, series, seriesIndex, pointIndex);

			 var rect = cSer.getRectangle(x1, y1, x2, y2, series);

             if (rect.X < 0) {
                 rect.Width = rect.Width + rect.X;
                 rect.X = 0;
             }
			 
             rect.Width = ((rect.X + rect.Width) > cSer.chartObj.model.m_AreaBounds.Width) ? cSer.chartObj.model.m_AreaBounds.Width - rect.X : rect.Width;
             //drawing part
             var xr = Math.min(0, rect.Width);
             var yr = Math.min(0, rect.Height);

             var  bounds;        
             if ((xr == 0 || yr == 0) && rect.Width>0) {                      
                         options = {
                             'id': cSer.chartObj.svgObject.id + '_Series' + seriesIndex+ '_Point' + pointIndex,
                             'x': (rect.X  ),
                             'y': (rect.Y) ,
                             'width': rect.Width,
                             'height': rect.Height,
                             'fill': styleOptions.interior,
                             'stroke-width': styleOptions.borderWidth,
                             'plot': y1 < 0 ? "negative" : "positive",
                              'opacity': styleOptions.opacity,
                             'stroke': styleOptions.borderColor
                         };

                         cSer.chartObj.svgRenderer.drawRect(options, cSer.gSeriesGroupEle);

                         var svgXy = ej.EjSvgRender.utils._getSvgXY(rect.X, (rect.Y), series, cSer.chartObj);
                        bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };
                        ej.EjSvgRender.utils._addRegion(cSer.chartObj, bounds, series, point, pointIndex);
                 }
                 if ((!ej.util.isNullOrUndefined(series.marker) && series.marker.visible) ||(!ej.util.isNullOrUndefined(series.marker) && series.marker.dataLabel.visible)) {
                     point.symbolLocation = { X: rect.X + (rect.Width / 2), Y: ((y1 < 0 && !series.yAxis.isInversed) || (series.yAxis.isInversed && y1 > 0)) ? ((rect.Y) + (rect.Height)) : (rect.Y) };
                 }
             }
         }

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

        
     },
   
     doAnimation: function (series) {
       var elements = $(this.chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id).children("rect");
       for (var i = 0; i < elements.length; i++) {
           var element = elements[i];
           this.animateRect(element, series);
       }
        var symbolElements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
        for (var j = 0; j < symbolElements.length; j++) {
            var symbol = symbolElements[j];
            this._doLineSymbol(symbol, 500, 2, series, this.chartObj.model.requireInvertedAxes);
        }   
   }

 });
 ej.seriesTypes.column = ej.ejColumnSeries;

 ej.ejStackingColumnSeries = ejExtendClass(ej.EjSeriesRender, {

     draw: function (chart, options) {
         this.chartObj = chart;
         var series = options;
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
         //var origin = Math.max(options.yAxis.visibleRange.min, 0);
        
         var sidebysideinfo = this.getSideBySideInfo(series);
         var visiblePoints = this._isVisiblePoints(series);

         var transX = series.xAxis.x;
         var transY = series.yAxis.y;

         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         var cSer = this;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             var point = visiblePoints[i];

             var y2 = series.stackedValue.StartValues[i];
             var y1= series.stackedValue.EndValues[i];
             if (point.visible) {
                 //calculate sides
                 var data = cSer.calculateSides(point, sidebysideinfo);
                 var x1 = data.x1;
                 var x2 = data.x2;
                 
				 var styleOptions= this.chartObj.setStyle(cSer, series, seriesIndex, pointIndex);

                 var rect = cSer.getRectangle(x1, y1, x2, y2, series);
                 if (rect.X < 0) {
                     rect.Width = rect.Width + rect.X;
                     rect.X = 0;
                 }

                 rect.Width = ((rect.X + rect.Width) > cSer.chartObj.model.m_AreaBounds.Width) ? cSer.chartObj.model.m_AreaBounds.Width - rect.X : rect.Width;
                 //drawing part
                 var xr = Math.min(0, rect.Width);
                 var yr = Math.min(0, rect.Height);

                 var bounds;
                 if (xr == 0 || yr == 0) {
                     options = {
                         'id': cSer.chartObj.svgObject.id + '_Series' + seriesIndex + '_Point' + pointIndex,
                         'x': (rect.X),
                         'y': (rect.Y),
                         'width': rect.Width,
                         'height': rect.Height,
                         'fill': styleOptions.interior,
                         'stroke-width': styleOptions.borderWidth,
                         'plot': y1 < 0 ? "negative" : "positive",
                         'opacity': styleOptions.opacity,
                         'stroke': styleOptions.borderColor
                     };

                     cSer.chartObj.svgRenderer.drawRect(options, cSer.gSeriesGroupEle);

                     var svgXy = ej.EjSvgRender.utils._getSvgXY(rect.X, (rect.Y), series, cSer.chartObj);
                     bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };
                     ej.EjSvgRender.utils._addRegion(cSer.chartObj, bounds, series, point, pointIndex);
                 }
                 if ((!ej.util.isNullOrUndefined(series.marker) && series.marker.visible) || (!ej.util.isNullOrUndefined(series.marker) && series.marker.dataLabel.visible)) {
                     point.symbolLocation = { X: rect.X + (rect.Width / 2), Y: ((y1 < 0 && !series.yAxis.isInversed) || (series.yAxis.isInversed && y1 > 0)) ? ((rect.Y) + (rect.Height)) : (rect.Y) };
                 }
             }
         }

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

        

     },
     doAnimation: function (series) {
         var elements = $(this.chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id).children("rect");
         for (var i = 0; i < elements.length; i++) {
             var element = elements[i];
             this.animateStackingRect(element, series, this.chartObj.model.requireInvertedAxes);
         }
         var symbolElements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
         for (var j = 0; j < symbolElements.length; j++) {
             var symbol = symbolElements[j];
             this._doLineSymbol(symbol, 500, 2, series, this.chartObj.model.requireInvertedAxes);
         }
     },
     
     stackingSeries: true

 });
 ej.seriesTypes.stackingcolumn = ej.ejStackingColumnSeries;
 
 ej.seriesTypes.rangecolumn = ej.ejRangeColumnSeries;

 ej.ejRangeColumnSeries = ejExtendClass(ej.EjSeriesRender, {
   
     draw: function (chart, options) {
         this.chartObj = chart;
         var series = options;
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
      
         var sidebysideinfo = this.getSideBySideInfo(series);
         var visiblePoints = this._isVisiblePoints(series);

         var transX = series.xAxis.x;
         var transY = series.yAxis.y;

         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         var cSer = this;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             var point = visiblePoints[i];

             var y1 = point.YValues[0];
             var y2 = point.YValues[1];
             if (point.visible) {
                 //calculate sides
                 var data = cSer.calculateSides(point, sidebysideinfo);
                 var x1 = data.x1;
                 var x2 = data.x2;
                  
				 var styleOptions = this.chartObj.setStyle(cSer, series, seriesIndex, pointIndex);
				  
                 var rect = cSer.getRectangle(x1, y1, x2, y2, series);
                 if (rect.X < 0) {
                     rect.Width = rect.Width + rect.X;
                     rect.X = 0;
                 }
                 var width=cSer.chartObj.model.m_AreaBounds.Width;
                 rect.Width = ((rect.X + rect.Width) > width) ? width - rect.X : rect.Width;
                 //drawing part
                 var xr = Math.min(0, rect.Width);
                 var yr = Math.min(0, rect.Height);

                 var bounds;
                 if (xr == 0 || yr == 0) {
                     options = {
                         'id': cSer.chartObj.svgObject.id + '_series' + seriesIndex + '_Point' + pointIndex,
                         'x': (rect.X),
                         'y': (rect.Y),
                         'width': rect.Width,
                         'height': rect.Height,
                         'fill': styleOptions.interior,
                         'stroke-width': styleOptions.borderWidth,
                         'opacity': styleOptions.opacity,
                         'stroke': styleOptions.borderColor
                     };

                     cSer.chartObj.svgRenderer.drawRect(options, cSer.gSeriesGroupEle);

                     //Add region for each rect
                     var svgXy = ej.EjSvgRender.utils._getSvgXY(rect.X, (rect.Y), series, cSer.chartObj);
                     bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };
                     ej.EjSvgRender.utils._addRegion(cSer.chartObj, bounds, series, point, pointIndex);
                 }
                 //Add rect location details for symbol
                 if ((!ej.util.isNullOrUndefined(series.marker) && series.marker.visible) || (!ej.util.isNullOrUndefined(series.marker) && series.marker.dataLabel.visible)) {
                     point.symbolLocation = { X: rect.X + (rect.Width / 2), Y: ((y1 < 0 && !series.yAxis.isInversed) || (series.yAxis.isInversed && y1 > 0)) ? ((rect.Y) + (rect.Height)) : (rect.Y) };
                 }
             }
         }

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

      

     },

     doAnimation: function (series) {
         var elements = $(this.chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id).children("rect");
         for (var i = 0; i < elements.length; i++) {
             var element = elements[i];
             this.animateRect(element,series);
         }
         var symbolElements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
         for (var j = 0; j < symbolElements.length; j++) {
             var symbol = symbolElements[j];
             this._doLineSymbol(symbol, 500, 2, series, this.chartObj.model.requireInvertedAxes);
         }
     },
     hiloTypes: true

 });
 ej.seriesTypes.rangecolumn = ej.ejRangeColumnSeries;

 ej.ejStackingBarSeries = ejExtendClass(ej.EjSeriesRender, {
     getPointXYOrgin: function (x, y,series) {
         var xvalue = (1 - ej.EjSvgRender.utils._valueToCoefficient(series.xAxis, x)) * (series.xAxis.height);
         var yvalue = (ej.EjSvgRender.utils._valueToCoefficient(series.yAxis, y)) * (series.yAxis.width);
         return { X: yvalue, Y: xvalue };
     },
     getRectangle: function (x1, y1, x2, y2, series) {
         var pt1 = this.getPointXYOrgin(x1, y1,series);
         var pt2 = this.getPointXYOrgin(x2, y2,series);
         return ej.EjSvgRender.utils._correctRect(pt1.X, pt1.Y, pt2.X, pt2.Y);
     },
     calculateSides: function (point, sidebysideinfo) {
         var x1 = point.X + sidebysideinfo.Start;
         var x2 = point.X + sidebysideinfo.End;
         return { x1: x1, x2: x2 };
     },
     draw: function (chart, options) {
         this.chartObj = chart;
         var series = options;
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
         //var origin = Math.max(options.yAxis.visibleRange.min, 0);
         var sidebysideinfo = this.getSideBySideInfo(series);
         var visiblePoints = this._isVisiblePoints(series);
         var trans = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.chartObj.model.requireInvertedAxes);

         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + trans.x + ',' + trans.y + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         var cSer = this;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             var point = visiblePoints[i];
             var y1 = series.stackedValue.EndValues[i];
             var y2 =series.stackedValue.StartValues[i];
             if (point.visible) {
                 //calculate sides
                 var data = cSer.calculateSides(point, sidebysideinfo);
                 var x1 = data.x1;
                 var x2 = data.x2;
                 
				 var styleOptions = this.chartObj.setStyle(cSer, series, seriesIndex, pointIndex);

                 var rect = cSer.getRectangle(x1, y1, x2, y2, series);

                 var xr = Math.min(0, rect.Width);
                 var yr = Math.min(0, rect.Height);

                 if (xr == 0 || yr == 0) {
                     var bounds;
                     options = {
                         'id': cSer.chartObj.svgObject.id + '_Series' + seriesIndex + '_Point' + pointIndex,
                         'x': (rect.X),
                         'y': (rect.Y),
                         'width': rect.Width,
                         'height': rect.Height,
                         'fill': styleOptions.interior,
                         'stroke-width': styleOptions.borderWidth,
						 'opacity': styleOptions.opacity,
                         'stroke': styleOptions.borderColor
                     };

                     cSer.chartObj.svgRenderer.drawRect(options, cSer.gSeriesGroupEle);

                     var svgXy = ej.EjSvgRender.utils._getSvgXY((rect.X), (rect.Y), series, cSer.chartObj);
                     bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };

                     ej.EjSvgRender.utils._addRegion(cSer.chartObj, bounds, series, point, pointIndex);
                 }

                 if ((!ej.util.isNullOrUndefined(series.marker) && series.marker.visible) || (!ej.util.isNullOrUndefined(series.marker) && series.marker.dataLabel.visible)) {
                     point.symbolLocation = { X: ((y1 < 0 && !series.yAxis.isInversed) || (series.yAxis.isInversed && y1 > 0)) ? (rect.X) : (rect.X + rect.Width), Y: ((rect.Y) + (rect.Height / 2)) };
                 }
             }
         }

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
 

     },
     doAnimation: function (series) {
         var elements = $(this.chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id).children("rect");
         for (var i = 0; i < elements.length; i++) {
             var element = elements[i];
             this.animateStackingBar(element, series, this.chartObj.model.requireInvertedAxes);
         }
         var symbolElements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
         for (var j = 0; j < symbolElements.length; j++) {
             var symbol = symbolElements[j];
             this._doLineSymbol(symbol, 500, 2, series, this.chartObj.model.requireInvertedAxes);
         }
     },

     stackingSeries: true,
     requireInvertedAxes: true

 });
 ej.seriesTypes.stackingbar = ej.ejStackingBarSeries;

 ej.ejBarSeries = ejExtendClass(ej.EjSeriesRender, {
     getPointXYOrgin: function (x, y, orginX, orginY, series) {
         var xvalue = (1-ej.EjSvgRender.utils._valueToCoefficient(series.xAxis, x)) * (series.xAxis.height);
         var yvalue = (ej.EjSvgRender.utils._valueToCoefficient(series.yAxis, y)) * (series.yAxis.width);
         return { X: yvalue, Y: xvalue };
     },
     getRectangle: function (x1, y1, x2, y2, series) {
         var orginX = series.xAxis.visibleRange.min;
         var orginY = Math.max(series.yAxis.visibleRange.min, 0);
         var pt1 = this.getPointXYOrgin(x1, y1, orginX, orginY, series);
         var pt2 = this.getPointXYOrgin(x2, y2, orginX, orginY, series);
         return ej.EjSvgRender.utils._correctRect(pt1.X, pt1.Y, pt2.X, pt2.Y);
     },
     calculateSides: function (point, sidebysideinfo) {
         var x1 = point.X + sidebysideinfo.Start;
         var x2 = point.X + sidebysideinfo.End;
         return { x1: x1, x2: x2 };
     },
     draw: function (chart, options) {
         this.chartObj = chart;
         var series = options;
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries);
         var origin = Math.max(options.yAxis.visibleRange.min, 0);       
         var style = $.extend(true, {}, this.chartObj.model.seriesStyle, series.style);
         var sidebysideinfo = this.getSideBySideInfo(series);
         var visiblePoints = this._isVisiblePoints(series);
         var colors;
         var trans = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.chartObj.model.requireInvertedAxes);
         
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + trans.x + ',' + trans.y + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         var cSer = this;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             var point = visiblePoints[i];           
             var y1 = point.YValues[0];
             var y2 = origin;
             if (point.visible) {
                 //calculate sides
                 var data = cSer.calculateSides(point, sidebysideinfo);
                 var x1 = data.x1;
                 var x2 = data.x2;
                 
				 var styleOptions = this.chartObj.setStyle(cSer, series, seriesIndex, pointIndex);

                 var rect = cSer.getRectangle(x1, y1, x2, y2, series);
                
                 var xr = Math.min(0, rect.Width);
                 var yr = Math.min(0, rect.Height);

                if (xr == 0 || yr == 0) {
                     var bounds;          
                         options = {
                             'id': cSer.chartObj.svgObject.id + '_Series' + seriesIndex+ '_Point' + pointIndex,
                             'x': (rect.X  ),
                             'y': (rect.Y ),
                             'width': rect.Width,
                             'height': rect.Height,
                             'fill': styleOptions.interior,
                             'stroke-width': styleOptions.borderWidth,
                             'plot': y1 < 0 ? "negative" : "positive",
                             'opacity': styleOptions.opacity,
                             'stroke': styleOptions.borderColor
                         };

                         cSer.chartObj.svgRenderer.drawRect(options, cSer.gSeriesGroupEle);

                         var svgXy = ej.EjSvgRender.utils._getSvgXY((rect.X), (rect.Y), series, cSer.chartObj);
                        bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };
                     
                        ej.EjSvgRender.utils._addRegion(cSer.chartObj, bounds, series, point, pointIndex);
                 }


                 if ((!ej.util.isNullOrUndefined(series.marker) && series.marker.visible) || (!ej.util.isNullOrUndefined(series.marker) && series.marker.dataLabel.visible)) {
                     point.symbolLocation = { X: ((y1 < 0 && !series.yAxis.isInversed) || (series.yAxis.isInversed && y1 > 0)) ? (rect.X) : (rect.X + rect.Width), Y: ((rect.Y) + (rect.Height / 2)) };
                 }
             }
         }

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

        
     },
     doAnimation: function(series) {
         var elements = $(this.chartObj.gSeriesEle).find("#" + this.gSeriesGroupEle.id).children("rect");
         for (var i = 0; i < elements.length; i++) {
             var element = elements[i];
             this.animateBarRect(element, series, this.chartObj.model.requireInvertedAxes);
         }
         var symbolElements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
         for (var j = 0; j < symbolElements.length; j++) {
             var symbol = symbolElements[j];
             this._doLineSymbol(symbol, 500, 2, series, this.chartObj.model.requireInvertedAxes);
         }   
     },
     requireInvertedAxes: true
 });
 ej.seriesTypes.bar = ej.ejBarSeries;


 ej.ejStackingAreaSeries = ejExtendClass(ej.EjSeriesRender, {

     draw: function (chart, options) {
         this.chartObj = chart;
         var aDirection;
         var areasb = ej.EjSvgRender.utils._getStringBuilder();
         var currentSeries = options;
         var style = this.setAreaSeriesStyle(currentSeries);

         currentSeries.points = ej.DataManager(currentSeries.points, ej.Query().sortBy("X")).executeLocal();



         var visiblePoints = this._isVisiblePoints(currentSeries);
     
         var origin = Math.max(options.yAxis.visibleRange.min, 0);

         var startPoint = { X: visiblePoints[0].X, YValues: [origin] };
         var startLoc = ej.EjSvgRender.utils._getPoint(startPoint, currentSeries);
         areasb.append("M" + " " + (startLoc.X) + " " + (startLoc.Y) + " ");
         //var index = $.inArray(currentSeries, this.chartObj.model._visibleSeries);
        
         for (j = 0; j < currentSeries.stackedValue.EndValues.length; j++) {
             if (visiblePoints[j].visible) {
                    if (visiblePoints.length > j + 1) {
                        currentPoint = { X: visiblePoints[j].X, YValues: [currentSeries.stackedValue.EndValues[j]] };
                     if (visiblePoints[j + 1].visible)
                         nextpoint = { X: visiblePoints[j + 1].X, YValues: [currentSeries.stackedValue.EndValues[j + 1]] };
                     else
                         nextpoint = { X: visiblePoints[j].X, YValues: [origin] };

                       point1 = ej.EjSvgRender.utils._getPoint(currentPoint, currentSeries);
                       point2 = ej.EjSvgRender.utils._getPoint(nextpoint, currentSeries);

                     if (j > 0 && !visiblePoints[j - 1].visible) {
                         previouspoint = ej.EjSvgRender.utils._getPoint({ X: visiblePoints[j - 1].X, YValues: [origin] }, currentSeries);
                         areasb.append(" " + "L" + " " + (previouspoint.X) + " " + ((previouspoint.Y)) + " " + " " + "L" + " " + (point1.X) + " " + ((previouspoint.Y)) + " ");
                     }

                     areasb.append(" " + "L" + " " + (point1.X) + " " + ((point1.Y)) + " " + " " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " ");

                 }
             }
         }
                
        
          
         for (var j = currentSeries.stackedValue.StartValues.length - 1; j > 0; j--) {
                 if (visiblePoints[j].visible) {

                     var currentPoint = { X: visiblePoints[j].X, YValues: [currentSeries.stackedValue.StartValues[j]] };
                     var nextpoint = { X: visiblePoints[j - 1].X, YValues: [currentSeries.stackedValue.StartValues[j - 1]] };

                     var point1 = ej.EjSvgRender.utils._getPoint(currentPoint, currentSeries);
                     var point2 = ej.EjSvgRender.utils._getPoint(nextpoint, currentSeries);

                     areasb.append((point1.X) + " " + ((point1.Y)) + " " + (point2.X) + " " + ((point2.Y)) + " ");
                     }
                 }
                

         aDirection = areasb.toString();

         this.drawAreaPath(currentSeries, style, aDirection);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

          


     },

     doAnimation: function (series) {

         this._doLineAnimation(series);
     },
     stackingSeries:true

 });
 ej.seriesTypes.stackingarea = ej.ejStackingAreaSeries;


 ej.ejAreaSeries = ejExtendClass(ej.EjSeriesRender, {

  
     draw: function (chart,options) {
         this.chartObj = chart;
         var aDirection;
         var areasb = ej.EjSvgRender.utils._getStringBuilder();
         var currentSeries = options;
         var style = this.setAreaSeriesStyle(currentSeries);

         currentSeries.points = ej.DataManager(currentSeries.points, ej.Query().sortBy("X")).executeLocal();
      
         var visiblePoints = this._isVisiblePoints(currentSeries);
         var origin =  Math.max(options.yAxis.visibleRange.min, 0);
         
         var startPoint;
        
         for (var i = 0; i < visiblePoints.length; i++) {
             if (visiblePoints[i].visible) {
                 if (visiblePoints.length > i + 1) {
                     if (!startPoint) {
                         startPoint = { X: visiblePoints[i].X, YValues: [origin] }
                         var point1 = ej.EjSvgRender.utils._getPoint(startPoint, currentSeries);
                         areasb.append(" " + "M" + " " + (point1.X) + " " + ((point1.Y)));
                     }


                     var point1 = ej.EjSvgRender.utils._getPoint(visiblePoints[i], currentSeries);

                     areasb.append(" " + "L" + " " + (point1.X) + " " + ((point1.Y)));

                     if (!visiblePoints[i + 1].visible) {
                         point = { X: visiblePoints[i].X, YValues: [origin] }
                         var point2 = ej.EjSvgRender.utils._getPoint(point, currentSeries);
                         var point3 = ej.EjSvgRender.utils._getPoint(startPoint, currentSeries);
                         areasb.append(" " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " " + "L" + " " + (point3.X) + " " + ((point3.Y)));
                         startPoint = null;
                     }
                 }
                 else {
                     if (visiblePoints[i - 1] && visiblePoints[i - 1].visible) {
                         var point1 = ej.EjSvgRender.utils._getPoint(visiblePoints[i], currentSeries);
                         areasb.append(" " + "L" + " " + (point1.X) + " " + ((point1.Y)));
                     }
                 }
             }         
         }

         var endPoint = { X: visiblePoints[visiblePoints.length - 1].X, YValues: [origin] };
         var endLoc = ej.EjSvgRender.utils._getPoint(endPoint, currentSeries);
         if (visiblePoints.length > 1)
         areasb.append(" " + "L" + " " + (endLoc.X) + " " + ((endLoc.Y)) + " ");
         
         aDirection = areasb.toString();

         this.drawAreaPath(currentSeries, style, aDirection);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

     
       

     },

       doAnimation: function(series) {

           this._doLineAnimation(series);
       }

 });

 ej.seriesTypes.area = ej.ejAreaSeries;

 ej.ejSplineSeries = ejExtendClass(ej.EjSeriesRender, {
    
     draw: function (chart,options) {
         this.chartObj = chart;
         var series = options;
         var spDirection = "";
         var splinesb = ej.EjSvgRender.utils._getStringBuilder();
         var style = this.setLineSeriesStyle(series);
         var yIndex = 0;
         var ySpline = this.naturalSpline(series.points);
         var firstPoint = null;
         var secondPoint = null;
         var firstIndex = -1;
		 //Removed spline sorting behavior based on the 'X' points.
         //series.points = ej.DataManager(series.points, ej.Query().sortBy("X")).executeLocal();
         var visiblePoints = this._isVisiblePoints(series);
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             secondPoint = visiblePoints[i];             
             if (secondPoint.visible) {
                 if (firstPoint != null) {
                     var controlPoint1 = null;
                     var controlPoint2 = null;
                     var data = this.getBezierControlPoints(firstPoint, secondPoint, ySpline[firstIndex], ySpline[pointIndex], yIndex);
                     controlPoint1 = data["controlPoint1"];
                     controlPoint2 = data["controlPoint2"];
                     var pt1 = ej.EjSvgRender.utils._getPoint(firstPoint, series);
                     var pt2 = ej.EjSvgRender.utils._getPoint(secondPoint, series);
                     var bpt1 = ej.EjSvgRender.utils._getPoint(controlPoint1, series);
                     var bpt2 = ej.EjSvgRender.utils._getPoint(controlPoint2, series);
                     splinesb.append("M" + " " + (pt1.X) + " " + (pt1.Y) + " " + "C" + " " + (bpt1.X) + " " + (bpt1.Y) + " " + (bpt2.X) + " " + (bpt2.Y) + " " + (pt2.X) + " " + (pt2.Y) + " ");

                 }
                 firstPoint = secondPoint;
                 firstIndex = pointIndex;
             } else {
                 firstPoint = null;
             }
         }
         
        spDirection = splinesb.toString();
        this._drawLinePath(series, style, spDirection);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
 
       

     },

     doAnimation: function (series) {

          this._doLineAnimation(series);
       }

 });

 ej.seriesTypes.spline = ej.ejSplineSeries;

 ej.ejSplineAreaSeries = ejExtendClass(ej.EjSeriesRender, {


     draw: function (chart, options) {
         this.chartObj = chart;
         var series = options;
         var spDirection = "";
         var splinesb = ej.EjSvgRender.utils._getStringBuilder();
         var style = this.setAreaSeriesStyle(series);
         var yIndex = 0;
         var ySpline = this.naturalSpline(series.points);
         var firstPoint = null;
         var secondPoint = null;
         var firstIndex = -1;
		 //Removed splineArea sorting behavior based on the 'X' points.
         series.points = ej.DataManager(series.points, ej.Query().sortBy("X")).executeLocal();
         var visiblePoints = this._isVisiblePoints(series);
         var origin = Math.max(options.yAxis.visibleRange.min, 0);
         var startPoint = null;
         var start = true;
         for (var i = 0; i < visiblePoints.length; i++) {
             var pointIndex = i;
             secondPoint = visiblePoints[i];
             if (secondPoint.visible) {
                 if (!startPoint) {
                     startPoint = { X: visiblePoints[i].X, YValues: [origin] };
                     var startLoc = ej.EjSvgRender.utils._getPoint(startPoint, series);
                    }
                 if (firstPoint != null) {
                     var controlPoint1 = null;
                     var controlPoint2 = null;
                     var data = this.getBezierControlPoints(firstPoint, secondPoint, ySpline[firstIndex], ySpline[pointIndex], yIndex);
                     controlPoint1 = data["controlPoint1"];
                     controlPoint2 = data["controlPoint2"];
                     var pt1 = ej.EjSvgRender.utils._getPoint(firstPoint, series);
                     var pt2 = ej.EjSvgRender.utils._getPoint(secondPoint, series);
                     var bpt1 = ej.EjSvgRender.utils._getPoint(controlPoint1, series);
                     var bpt2 = ej.EjSvgRender.utils._getPoint(controlPoint2, series);
                     if (start) {
                         splinesb.append("M" + " " + (pt1.X) + " " + (startLoc.Y) + " " + "L" + " " + (pt1.X) + " " + ((pt1.Y)) + " ");
                         start = false;
                     }
                     splinesb.append("C" + " " + (bpt1.X) + " " + (bpt1.Y) + " " + (bpt2.X) + " " + (bpt2.Y) + " " + (pt2.X) + " " + (pt2.Y) + " ");
                     if (pointIndex == visiblePoints.length - 1 || (pointIndex < visiblePoints.length - 1 && !visiblePoints[i + 1].visible)) {
                         splinesb.append("L" + " " + (pt2.X) + " " + (startLoc.Y));
                         startPoint = null;
                         start = true;
                     }
                 }
                 firstPoint = secondPoint;
                 firstIndex = pointIndex;
             } else {
                 firstPoint = null;
             }
         }

         spDirection = splinesb.toString();

         this.drawAreaPath(series, style, spDirection);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

    
        

     },
     doAnimation: function (series) {

         this._doLineAnimation(series);
     }

 });

 ej.seriesTypes.splinearea = ej.ejSplineAreaSeries;



 ej.ejScatterSeries = ejExtendClass(ej.EjSeriesRender, {

        
    
     draw: function (chart,options) {
         this.chartObj = chart;
         var series = options;
         this._isVisiblePoints(series);
         if (!series.marker.visible)
             series.marker.visible = true;

     },

       doAnimation: function(series) {

           var elements = $(this.chartObj.gSymbolGroupEle).children().not("defs");
           for (var i = 0; i < elements.length; i++) {
               var ubound = 20;
               var lbound = 0;
               var randomValue = Math.floor(Math.random() * (ubound - lbound) + lbound);
               var delayInterval = parseInt(randomValue * 50);
               this.animateSymbol(elements[i], delayInterval, series, this.chartObj.model.requireInvertedAxes);
           }


       }

 });

 ej.seriesTypes.scatter = ej.ejScatterSeries;

 
 ej.ejBubbleSeries = ejExtendClass(ej.EjSeriesRender, {

     createBubbleGroup: function(series) {

         var seriesIndex = $.inArray(series, this.chartObj.model.series);
         var transX = series.xAxis.x;

         var transY = series.yAxis.y;
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };

         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);

     },
     draw: function (chart,options) {
         this.chartObj = chart;
         var series = options;    
         series.points = ej.DataManager(series.points, ej.Query().sortBy("X")).executeLocal();
         var seriesIndex = $.inArray(series, this.chartObj.model._visibleSeries); 
         var visiblePoints = this._isVisiblePoints(series);
         var sizeValueIndex = 1;
         var minRadius = (options.bubbleOptions && options.bubbleOptions.minRadius) ? options.bubbleOptions.minRadius :10;
         var maxradius = (options.bubbleOptions && options.bubbleOptions.maxRadius) ? options.bubbleOptions.maxRadius :30;
         var radius = maxradius - minRadius;
         var segmentRadius;
         var maximumSize = Math.max.apply(0,$.map(visiblePoints,function (v) { return v.YValues[sizeValueIndex]; }));
         this.createBubbleGroup(series);
         for (var i = 0; i < visiblePoints.length; i++) {
             var point = visiblePoints[i];
             var pointIndex= i;
             if (point.visible) {
                 segmentRadius = minRadius + radius * Math.abs(point.YValues[sizeValueIndex] / maximumSize);
                 var location = ej.EjSvgRender.utils._getPoint(point, series);
                 
				 var styleOptions = this.chartObj.setStyle(this, series, seriesIndex, pointIndex);
				 
                 var bubbleOptions = {
                     'id': this.chartObj.svgObject.id + '_circlesymbol_' + i + '_' + seriesIndex,
                     'cx': location.X,
                     'cy': (location.Y),
                     'r': segmentRadius,
                     'fill': styleOptions.interior,
                     'stroke-width': styleOptions.borderWidth,
                     'opacity': styleOptions.opacity,
                     'stroke': styleOptions.borderColor
                 };

                 this.chartObj.svgRenderer.drawCircle(bubbleOptions, this.gSeriesGroupEle);
				 
			 

                 var cx = location.X;
                 var cy = location.Y;
                 var r = segmentRadius;


                 var valwidth, x, y, valheight;
                 x = ((cx - r) + series.xAxis.x);
                 y = ((cy - r) + series.yAxis.y);

                 valheight = 2 * r;
                 valwidth = 2 * r;

                 var bounds = { X: x, Y: y, Width: valwidth, Height: valheight };
                 ej.EjSvgRender.utils._addRegion(this.chartObj, bounds, series, null, i);
             }
         }
         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

         
         
     },
    
     
     doAnimation: function(series) {
         var elements = $(this.gSeriesGroupEle).children().not("defs");
         
         for (var i = 0; i < elements.length; i++) {
             var ubound = 20;
             var lbound = 0;
             var randomValue = Math.floor(Math.random() * (ubound - lbound) + lbound);
             var delayInterval = parseInt(randomValue * 50);
             this.animateSymbol(elements[i], delayInterval, series, this.chartObj.model.requireInvertedAxes);
         }
     }
 });

ej.seriesTypes.bubble = ej.ejBubbleSeries;
 ej.ejhiloSeries = ejExtendClass(ej.EjSeriesRender, {
     draw: function (chart, options) {

         this.chartObj = chart;
         
         //DrawHiloGraph      
        
         var currentseries = options;
          currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
         var visiblePoints = this._isVisiblePoints(currentseries);
         var sidebysideinfo = this.getSideBySideInfo(currentseries);
         var point = null;
         
         var seriesIndex = $.inArray(currentseries, this.chartObj.model._visibleSeries);
         var transX = currentseries.xAxis.x;
         var transY = currentseries.yAxis.y;
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
       

         for (var i = 0; i < visiblePoints.length; i++) {
             point = visiblePoints[i];
			 var pointIndex= i;
             if (point.visible) {
                
                 var lDirection = "";
                    if (ej.util.isNullOrUndefined(point.YValues[0]) || ej.util.isNullOrUndefined(point.YValues[1]))
                     continue;
					 
                    var styleOptions = this.chartObj.setStyle(this, currentseries, seriesIndex, pointIndex);

                    var pathInterior = this.chartObj.setHiloStyle(currentseries, pointIndex, seriesIndex);
              
				 
                 var lowvalue = {}, highvalue = {};
                 if (point.YValues[0] < point.YValues[1]) {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                 } else {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                 }
                 var point1 = ej.EjSvgRender.utils._getPoint(lowvalue   , currentseries);
                 var point2 = ej.EjSvgRender.utils._getPoint(highvalue, currentseries);
                 lDirection = "M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " " ;
                 var pointbounds = { point1:point1, point2:point2 };
                 this._drawHiloPath(currentseries, styleOptions, pathInterior, lDirection, i, pointbounds);
             }
         }
        
         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
       
         

      
     },
     
     doAnimation: function (series) {

         var elements = $(this.gSeriesGroupEle).children().not("defs");
        var secondsPerPoint = 2000 / elements.length;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            this._doLineSymbol(element, secondsPerPoint, i, series, this.chartObj.model.requireInvertedAxes);
        }     
     },
     hiloTypes: true
 });

 ej.seriesTypes.hilo = ej.ejhiloSeries;
 
 //Draw HiloOpenClose
 ej.ejhiloopencloseSeries = ejExtendClass(ej.EjSeriesRender, {
     draw: function (chart, options) {

         this.chartObj = chart;
         
         //DrawHiloGraph      

         var currentseries = options;
         currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
         var visiblePoints = this._isVisiblePoints(currentseries);
         var sidebysideinfo = this.getSideBySideInfo(currentseries);
         var point = null;

         var seriesIndex = $.inArray(currentseries, this.chartObj.model._visibleSeries);
         var transX = currentseries.xAxis.x;
         var transY = currentseries.yAxis.y;
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         
         var interior;

     


         for (var i = 0; i < visiblePoints.length; i++) {
		    var pointIndex = i;
             point = visiblePoints[i];
             if (point.visible) {

                 var lDirection = "";
                 var drawOpenWing = (ej.util.isNullOrUndefined(currentseries.drawMode) ? true : (currentseries.drawMode.toLowerCase() == "both" || currentseries.drawMode.toLowerCase() == "open") ? true : false);
                 var drawCloseWing = (ej.util.isNullOrUndefined(currentseries.drawMode) ? true : (currentseries.drawMode.toLowerCase() == "both" || currentseries.drawMode.toLowerCase() == "close") ? true : false);

                
                 var lowvalue = {}, highvalue = {}, openvalue = {}, closevalue = {};
                 if (ej.util.isNullOrUndefined(point.YValues[0]) || ej.util.isNullOrUndefined(point.YValues[1]) || ej.util.isNullOrUndefined(point.YValues[2]) || ej.util.isNullOrUndefined(point.YValues[3]))
                     continue;
                  
                    
                 if (point.YValues[0] < point.YValues[1]) {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                     openvalue = { X: point.X, YValues: [point.YValues[2]] };
                     closevalue = { X: point.X, YValues: [point.YValues[3]] };
                     
                 } else {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                     openvalue = { X: point.X, YValues: [point.YValues[2]] };
                     closevalue = { X: point.X, YValues: [point.YValues[3]] };
                    
                 }
                 if (point.YValues[2] < point.YValues[3]) 
                     interior = (ej.util.isNullOrUndefined(currentseries.bearFillColor)) ? ((currentseries.fill) ? currentseries.fill : "#339933") : currentseries.bearFillColor;
                 
                 else 
                     interior = (ej.util.isNullOrUndefined(currentseries.bullFillColor)) ? ((currentseries.fill) ? currentseries.fill : "#E51400") : currentseries.bullFillColor;
                    
				 
                 var styleOptions = this.chartObj.setStyle(this, currentseries, seriesIndex, pointIndex, interior);

                 var pathInterior = this.chartObj.setHiloStyle(currentseries, pointIndex,seriesIndex, interior);
                 

				 if (point.fill) {
                     interior = jQuery.type(point.interior) == "array" ? point.fill[0] : point.fill;
                 }
                 else {
                      point.fill = interior;
                 }
				 
                 //Draw open points
                 if (drawOpenWing) {

                     var startOpenValue = { X: openvalue.X + sidebysideinfo.Median, YValues: openvalue.YValues };
                     var pto1 = ej.EjSvgRender.utils._getPoint(startOpenValue, currentseries);
                     var endOpenValue = { X: openvalue.X + sidebysideinfo.Start, YValues: openvalue.YValues };
                     var pto2 = ej.EjSvgRender.utils._getPoint(endOpenValue, currentseries);
                      lDirection = "M" + " " + (pto1.X) + " " + ((pto1.Y)) + " " + "L" + " " + (pto2.X) + " " + ((pto2.Y)) + " ";
                     var openbounds = { point1: pto1, point2: pto2 };
                     this._drawHiloPath(currentseries, styleOptions,pathInterior,  lDirection, i, openbounds);
                     lDirection = "";

                 }
                 //Draw close points
                 if (drawCloseWing) {
                     var startCloseValue = { X: closevalue.X + sidebysideinfo.Median, YValues: closevalue.YValues };
                     var ptc1 = ej.EjSvgRender.utils._getPoint(startCloseValue, currentseries);
                     var endCloseValue = { X: closevalue.X + sidebysideinfo.End, YValues: closevalue.YValues };
                     var ptc2 = ej.EjSvgRender.utils._getPoint(endCloseValue, currentseries);
                     lDirection = "M" + " " + (ptc1.X) + " " + ((ptc1.Y)) + " " + "L" + " " + (ptc2.X) + " " + ((ptc2.Y)) + " ";
                     var pointbounds = { point1: ptc1, point2: ptc2 };
                     this._drawHiloPath(currentseries, styleOptions, pathInterior, lDirection, i, pointbounds);
                     lDirection = "";

                 }
                 // Draw High low points
                 var point1 = ej.EjSvgRender.utils._getPoint(lowvalue, currentseries);
                 var point2 = ej.EjSvgRender.utils._getPoint(highvalue, currentseries);
                 lDirection = "M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " ";
                 var bounds = { point1: point1, point2: point2 };
                 this._drawHiloPath(currentseries, styleOptions, pathInterior, lDirection, i, bounds);
             }

         }
         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
     
     },
      
     doAnimation: function (series) {

        var elements = $(this.gSeriesGroupEle).children().not("defs");
        var secondsPerPoint = 2000 / elements.length;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            this._doLineSymbol(element, secondsPerPoint, i, series, this.chartObj.model.requireInvertedAxes);
        }
     },
     hiloTypes: true

 });

 ej.seriesTypes.hiloopenclose = ej.ejhiloopencloseSeries;
 
 //Draw candle
ej.ejCandleSeries = ejExtendClass(ej.EjSeriesRender, {
     draw: function (chart, options) {

         this.chartObj = chart;
         
         //DrawCandleGraph      

         var currentseries = options;
         currentseries.points = ej.DataManager(currentseries.points, ej.Query().sortBy("X")).executeLocal();
         var visiblePoints = this._isVisiblePoints(currentseries);
         var sidebysideinfo = this.getSideBySideInfo(currentseries);
         var point = null;

         var seriesIndex = $.inArray(currentseries, this.chartObj.model._visibleSeries);
         var transX = currentseries.xAxis.x;
         var transY = currentseries.yAxis.y;
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + transX + ',' + transY + ')' };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);
         var interior;

         for (var i = 0; i < visiblePoints.length; i++) {
             point = visiblePoints[i];
			  var pointIndex= i;
             if (point.visible) {

                 var lDirection = "";
               
                 var lowvalue = {}, highvalue = {}, openvalue = {}, closevalue = {};
                 if (ej.util.isNullOrUndefined(point.YValues[0]) || ej.util.isNullOrUndefined(point.YValues[1]) || ej.util.isNullOrUndefined(point.YValues[2]) ||ej.util.isNullOrUndefined(point.YValues[3]))
                     continue;
                
                 if (point.YValues[0] < point.YValues[1]) {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                     openvalue = { X: point.X, YValues: [point.YValues[2]] };
                     closevalue = { X: point.X, YValues: [point.YValues[3]] };
                     
                 } else {
                     lowvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[1]] };
                     highvalue = { X: point.X + sidebysideinfo.Median, YValues: [point.YValues[0]] };
                     openvalue = { X: point.X, YValues: [point.YValues[2]] };
                     closevalue = { X: point.X, YValues: [point.YValues[3]] };
                     
                 }      
                 if (point.YValues[2] < point.YValues[3]) {
                     
                     openvalue = { X: point.X, YValues: [point.YValues[2]] };
                     closevalue = { X: point.X, YValues: [point.YValues[3]] };
                     interior = (ej.util.isNullOrUndefined(currentseries.bearFillColor)) ? "#339933" : currentseries.bearFillColor;
                     
                 } else {
                    
                     openvalue = { X: point.X, YValues: [point.YValues[3]] };
                     closevalue = { X: point.X, YValues: [point.YValues[2]] };
                     interior = (ej.util.isNullOrUndefined(currentseries.bullFillColor)) ? "#E51400" : currentseries.bullFillColor;
                    
                 }
                 
                 var styleOptions = this.chartObj.setStyle(this, currentseries, seriesIndex, pointIndex, interior);

                 var pathInterior = this.chartObj.setHiloStyle(currentseries, pointIndex,seriesIndex, interior);
				 
				 if (point.style && point.style.interior) {
                     interior = jQuery.type(point.style.interior) == "array" ? point.style.interior[0] : point.style.interior;
                 }
                 else {
                    
                     point.fill = interior;
                 }
				 
                 // Draw High low points
                 var point1 = ej.EjSvgRender.utils._getPoint(lowvalue, currentseries);
                 var point2 = ej.EjSvgRender.utils._getPoint(highvalue, currentseries);
                 lDirection = "M" + " " + (point1.X) + " " + ((point1.Y)) + " " + "L" + " " + (point2.X) + " " + ((point2.Y)) + " ";
                 var pointbounds = { point1: point1, point2: point2 };
                 this._drawHiloPath(currentseries, styleOptions, pathInterior, lDirection, i, pointbounds);
                 //Draw open and close points
              
                     var startRect = { X: closevalue.X + sidebysideinfo.Start, YValues: closevalue.YValues };
                     var orginRect = ej.EjSvgRender.utils._getPoint(startRect, currentseries);

                     var rectSize = { X: openvalue.X + sidebysideinfo.End, YValues: openvalue.YValues };
                     var sizeRect = ej.EjSvgRender.utils._getPoint(rectSize, currentseries);
                     var rect = ej.EjSvgRender.utils._correctRect(orginRect.X, orginRect.Y, sizeRect.X, sizeRect.Y);
                  
                     var candleOptions = {
                        'id': this.chartObj.svgObject.id + '_Series' + seriesIndex+ '_Point' + i,
                        'x': rect.X,
                        'y': rect.Y,
                        'width': rect.Width,
                        'height': rect.Height,
                        'fill': styleOptions.interior,
                        'stroke-width': styleOptions.borderWidth,
                         'stroke': styleOptions.borderColor
                     };

                    this.chartObj.svgRenderer.drawRect(candleOptions, this.gSeriesGroupEle);

                    var svgXy = ej.EjSvgRender.utils._getSvgXY(rect.X, rect.Y, currentseries, this.chartObj);
                    var bounds = { X: svgXy.X, Y: svgXy.Y, Width: rect.Width, Height: rect.Height };

                    ej.EjSvgRender.utils._addRegion(this.chartObj, bounds, currentseries, point, i);
                                    
             }
             
         }
         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
        

     },
     
     doAnimation: function (series) {
      var elements = $(this.gSeriesGroupEle).children().not("defs");
        var secondsPerPoint = 2000 / elements.length;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            this._doLineSymbol(element, secondsPerPoint, i,series, this.chartObj.model.requireInvertedAxes);
        }
        
     },
     hiloTypes: true
 });
 ej.seriesTypes.candle = ej.ejCandleSeries;

 ej.ejPieSeries = ejExtendClass(ej.EjSeriesRender, {

     draw: function (chart, options) {

         this.chartObj = chart;
         var currentseries = options;
         var internalRegion = [];

         this.chartObj.model.bounds = [];
        
         var size = this.calculatingSliceAngle(currentseries);

         this.chartObj.model.Radius = 0.5 * currentseries.pieCoefficient * Math.min(size.width, size.height);

         var text;
         var seriesIndex = $.inArray(currentseries, this.chartObj.model._visibleSeries);
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);

         var visibility = (currentseries.enableAnimation) ? 'hidden' : 'visible';

         if (currentseries.marker.dataLabel.visible) {
             var txtOptions = { 'id': this.chartObj.svgObject.id + '_textGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSeriesTextEle = this.chartObj.svgRenderer.createGroup(txtOptions);
             
             var symbolOptions = { 'id': this.chartObj.svgObject.id + '_symbolGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSymbolGroupEle = this.chartObj.svgRenderer.createGroup(symbolOptions);

             var connectorOptions = { 'id': this.chartObj.svgObject.id + '_connectorGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSeriesConnectorEle = this.chartObj.svgRenderer.createGroup(connectorOptions);
             
         }
                         
         for (var j = 0; j < currentseries.points.length; j++) {
             pointIndex = j;
             var point = currentseries.points[j];
             if (point.visible) {
                 var result = this._calculateArcData(this.chartObj, pointIndex, point, currentseries);

             var styleOptions = this.chartObj.setStyle(this, currentseries, 0,  pointIndex);
			 
             options = {
                 'id': this.chartObj.svgObject.id + '_Series' + seriesIndex + "path" + pointIndex,
                 'fill': styleOptions.interior,
                 'stroke-width': styleOptions.borderWidth,
                 'stroke': styleOptions.borderColor,
                     'stroke-linecap': currentseries.lineCap,
                     'stroke-linejoin': currentseries.lineJoin,
                     'd': result.Direction,
                     'opacity': styleOptions.opacity,
                     'start': point.startAngle,
                     'end': point.endAngle,
                     'pointIndex': pointIndex,
                     'innerR': 0,
                     'x': this.chartObj.model.centerX,
                     'y': this.chartObj.model.centerY
                 };
                 this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);

                 region = { PointIndex: pointIndex, StartAngle: point.startAngle, EndAngle: point.endAngle, StartX: this.chartObj.model.startX[pointIndex], StartY: this.chartObj.model.startY[pointIndex] };
                 internalRegion.push(region);

             }
         }

         var seriesData = { Radius: this.chartObj.model.Radius, CenterX: this.chartObj.model.centerX, CenterY: this.chartObj.model.centerY };
         var region = { Series: currentseries, SeriesData: seriesData, Region: internalRegion, SeriesIndex: $.inArray(currentseries, this.chartObj.model._visibleSeries) };
         this.chartObj.model.chartRegions.push(region);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);
     },
     doAnimation: function (series) {
         var chartObj = this.chartObj;
         var seriesRender = this;
         var angle = (series.points[0]) ? series.points[0].startAngle : 0;
         $.each(series.visiblePoints, function (pointIndex, point) {
             var startAngle = point.startAngle;
             var endAngle = point.endAngle;
             chartObj.model._radius = chartObj.model.Radius;
             
             point.startAngle = 0;
             point.endAngle =point.startAngle;
             chartObj.model.Radius = 0;
             var piePath = $(chartObj.gSeriesEle).find("#" + seriesRender.gSeriesGroupEle.id)[0].childNodes[pointIndex];
             $(piePath).each(function () { this.StartAngle = angle, this.EndAngle = angle; }).animate(
                 { StartAngle: startAngle, EndAngle: endAngle, pieRadius: chartObj.model._radius },

                 {
                     duration: 1200, queue: false, step: function (now, fx) {

                         if (fx.prop.toString() === "StartAngle") {
                             point.startAngle = now;
                             point.endAngle = point.startAngle;
                         }
                         else if (fx.prop.toString()=="pieRadius") {
                             chartObj.model.Radius = now;
                         } 
                         else { 
                             point.endAngle = now;
                         }
                         var result = seriesRender._calculateArcData(chartObj, pointIndex, point, series);
                         chartObj.svgRenderer._setAttr($(piePath), { "d": result.Direction });
                         chartObj.model.Radius = chartObj.model._radius;                     
                     },
                     complete: function () {
                         if (pointIndex == series.visiblePoints.length - 1) {
                             if (series.marker.dataLabel.visible) {
                                 chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSeriesTextEle.id), { "visibility": "visible" });
                                 if (chartObj.gSymbolGroupEle)
                                     chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSymbolGroupEle.id), { "visibility": "visible" });
                                 if (series.marker.dataLabel.template) {
                                     var elements = $(chartObj.element[0].childNodes[0].childNodes);
                                     for (var i = 0; i < elements.length; i++)
                                         $(elements[i]).css('display', 'block');
                                 }
                                 if (chartObj.gSeriesConnectorEle)
                                     chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSeriesConnectorEle.id), { "visibility": "visible" });
                             }
                             chartObj.model.AnimationComplete = true;
                             var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                             commonEventArgs.data = { series: series };
                             chartObj._trigger("animationComplete", commonEventArgs);
                         }
                     }
                 });
           });
     },
     chartAreaType : "None"

 });

 ej.seriesTypes.pie = ej.ejPieSeries;

 ej.ejDoughnutSeries = ejExtendClass(ej.EjSeriesRender, {
     draw: function (chart, options) {
         this.chartObj = chart;
         var currentseries = options;
         var internalRegion = [];

         this.chartObj.model.bounds = [];

         var size = this.calculatingSliceAngle(currentseries);
        
         this.chartObj.model.Radius = 0.5 * currentseries.doughnutSize * Math.min(size.width, size.height);
         this.chartObj.model.dRadius = currentseries.doughnutCoefficient * this.chartObj.model.Radius;


         var numberToFixed = ej.util.isNullOrUndefined(this.chartObj.model.roundingPlaces) ? 2 : this.chartObj.model.roundingPlaces;

         var seriesIndex = $.inArray(currentseries, this.chartObj.model._visibleSeries);
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);

         var visibility = (currentseries.enableAnimation) ? 'hidden' : 'visible';

         if (currentseries.marker.dataLabel.visible) {
             var txtOptions = { 'id': this.chartObj.svgObject.id + '_textGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSeriesTextEle = this.chartObj.svgRenderer.createGroup(txtOptions);

             var symbolOptions = { 'id': this.chartObj.svgObject.id + '_symbolGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSymbolGroupEle = this.chartObj.svgRenderer.createGroup(symbolOptions);

             var connectorOptions = { 'id': this.chartObj.svgObject.id + '_connectorGroup' + '_' + seriesIndex, 'visibility': visibility };
             this.chartObj.gSeriesConnectorEle = this.chartObj.svgRenderer.createGroup(connectorOptions);

         }
                
         for (var j = 0; j < currentseries.points.length; j++) {
             var point = currentseries.points[j];
             var pointIndex = j;
             if (point.visible) {

                 var result = this._calculateArcData(this.chartObj, pointIndex, point, currentseries);


             var styleOptions = this.chartObj.setStyle(this, currentseries, 0, pointIndex);

             options = {
                 'id': this.chartObj.svgObject.id + '_Series' + seriesIndex + "path" + pointIndex,
                 'fill': styleOptions.interior,
                 'stroke-width': styleOptions.borderWidth,
                 'stroke': styleOptions.borderColor,
                     'stroke-linecap': currentseries.lineCap,
                     'opacity': styleOptions.opacity,
                     'stroke-linejoin': currentseries.lineJoin,
                     'd': result.Direction,
                     'start': point.startAngle,
                     'end': point.endAngle,
                     'pointIndex': pointIndex,
                     'innerR': this.chartObj.model.dRadius,
                     'x': this.chartObj.model.centerX,
                     'y': this.chartObj.model.centerY
                 };
                 this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);


                 region = { PointIndex: j, StartAngle: point.startAngle, EndAngle: point.endAngle, StartX: this.chartObj.model.startX[pointIndex], StartY: this.chartObj.model.startY[pointIndex] };
                 internalRegion.push(region);

             }
         }

         var seriesData = { Radius: this.chartObj.model.Radius, DRadius: this.chartObj.model.dRadius, CenterX: this.chartObj.model.centerX, CenterY: this.chartObj.model.centerY };
         var region = { Series: currentseries, SeriesData: seriesData, Region: internalRegion, SeriesIndex: $.inArray(currentseries, this.chartObj.model._visibleSeries) };
         this.chartObj.model.chartRegions.push(region);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

     },

    
     doAnimation: function (series) {
         var chartObj = this.chartObj;
         var seriesRender = this;
         var angle = (series.points[0]) ? series.points[0].startAngle : 0;
         $.each(series.visiblePoints, function (pointIndex, point) {
             var startAngle = point.startAngle;
             var endAngle = point.endAngle;

             point.startAngle = 0;
             point.endAngle = point.startAngle;           
         var doughPath = $(chartObj.gSeriesEle).find("#" + seriesRender.gSeriesGroupEle.id)[0].childNodes[pointIndex];
             $(doughPath).each(function () { this.StartAngle = angle, this.EndAngle = angle; }).animate(

             { StartAngle: startAngle, EndAngle: endAngle },

             {
             duration: 1200, queue: false, step: function (now, fx) {
                 if (fx.prop.toString() === "StartAngle") {
                     point.startAngle = now;
                     point.endAngle = point.startAngle;
                 }
                 else                     
                     point.endAngle = now;
                       
                 var result = seriesRender._calculateArcData(chartObj, pointIndex, point, series);
                 chartObj.svgRenderer._setAttr($(doughPath), { "d": result.Direction });
             },
             complete: function () {
                 if (pointIndex == series.visiblePoints.length - 1) {
                     if (series.marker.dataLabel.visible) {
                         chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSeriesTextEle.id), { "visibility": "visible" });
                         if (chartObj.gSymbolGroupEle)
                             chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSymbolGroupEle.id), { "visibility": "visible" });
                         if (series.marker.dataLabel.template) {
                             var elements = $(chartObj.element[0].childNodes[0].childNodes);
                             for (var i = 0; i < elements.length; i++)
                                 $(elements[i]).css('display', 'block');
                         }
                         if (chartObj.gSeriesConnectorEle)
                             chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.gSeriesConnectorEle.id), { "visibility": "visible" });
                     }
                     chartObj.model.AnimationComplete = true;
                     var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                     commonEventArgs.data = { series: series };
                     chartObj._trigger("animationComplete", commonEventArgs);
                 }
             }
         });             
         });
     },

     chartAreaType:"None"
 });

 ej.seriesTypes.doughnut = ej.ejDoughnutSeries;

 ej.ejPyramidSeries = ejExtendClass(ej.EjSeriesRender, {
     draw: function (chart, options) {

         this.chartObj = chart;
         var point;
         var seriesRender = this;
         var currentseries = options;
         var visiblePoints = this._pieVisiblePoints(currentseries);
         var internalRegion = [];

         this.chartObj.model.chartRegions = [];
         this.chartObj.model.sumofYValues = 0;

         //var explodeValue = 0;
         //var itemCurrentXPos = 0;
         var textSize = 0;
         var text;

         var measureTitle = (this.chartObj.model.title.text) ? ej.EjSvgRender.utils._measureText(this.chartObj.model.title.text, $(this.svgObject).width() - this.chartObj.model.margin.left - this.chartObj.model.margin.right, this.chartObj.model.title.font) : 0;

         var xOffset = (this.chartObj.model.margin.left + this.chartObj.model.elementSpacing + this.chartObj.model.margin.right + this.chartObj.model.elementSpacing + ((this.chartObj.model.legend.position.toLowerCase() === "right" || this.chartObj.model.legend.position.toLowerCase() === "left") ? this.chartObj.model.LegendBounds.Width : 0));
         var yOffset = (((this.chartObj.model.title.text) ? (this.chartObj.model._titleLocation.Y + measureTitle.height) : this.chartObj.model.elementSpacing) + this.chartObj.model.margin.top + this.chartObj.model.elementSpacing + this.chartObj.model.margin.bottom + this.chartObj.model.elementSpacing + ((this.chartObj.model.legend.position.toLowerCase() === "top" || this.chartObj.model.legend.position.toLowerCase() === "bottom") ? this.chartObj.model.LegendBounds.Height : 0));

         if (currentseries.labelPosition.toLowerCase() === 'outside') {
             for (var i = 0; i < visiblePoints.length; i++) {
                 var textWidth = ej.EjSvgRender.utils._measureText((ej.util.isNullOrUndefined(visiblePoints[i].text) ? visiblePoints[i].y : visiblePoints[i].text), null, currentseries.marker.dataLabel.font).width;
                 if (textSize < textWidth)
                     textSize = textWidth;
             }
           this.chartObj.model.textSize = textSize;
         }

         this.chartObj.model.actualWidth = $(chart.svgObject).width() - xOffset - textSize;
         this.chartObj.model.actualHeight = $(chart.svgObject).height() - yOffset;

         var pyrX = ((this.chartObj.model.legend.position.toLowerCase() === "left") ? (this.chartObj.model.LegendBounds.Width) : 0) + this.chartObj.model.elementSpacing + this.chartObj.model.margin.left;
         var pyrY = ((this.chartObj.model.legend.position.toLowerCase() === "top") ? (this.chartObj.model.LegendBounds.Height) : 0) + ((this.chartObj.model.title.text) ? (this.chartObj.model._titleLocation.Y + measureTitle.height) : (this.chartObj.model.margin.top + this.chartObj.model.elementSpacing));

         for (var j = 0; j < visiblePoints.length; j++) {
             this.chartObj.model.sumofYValues += visiblePoints[j].YValues[0];
         }


         var numberToFixed = ej.util.isNullOrUndefined(this.chartObj.model.roundingPlaces) ? 2 : this.chartObj.model.roundingPlaces;

         var seriesIndex = $.inArray(currentseries,this.chartObj.model._visibleSeries);
         var serOptions = { 'id': this.chartObj.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': 'translate(' + pyrX + ',' + pyrY + ')' };
         this.gSeriesGroupEle = this.chartObj.svgRenderer.createGroup(serOptions);

         if (currentseries.marker.dataLabel.visible) {
             var txtOptions = { 'id': this.chartObj.svgObject.id + '_textGroup' + '_' + seriesIndex, 'transform': 'translate(' + pyrX + ',' + pyrY + ')' };
             this.chartObj.gSeriesTextEle =  this.chartObj.svgRenderer.createGroup(txtOptions);
             if (currentseries.labelPosition.toLowerCase() === 'outside') {

                 var symbolOptions = { 'id': this.chartObj.svgObject.id + '_symbolGroup' + '_' + seriesIndex, 'transform': 'translate(' + pyrX + ',' + pyrY + ')' };
                 this.chartObj.gSymbolGroupEle = this.chartObj.svgRenderer.createGroup(symbolOptions);

                 var connectorOptions = { 'id': this.chartObj.svgObject.id + '_connectorGroup' + '_' + seriesIndex, 'transform': 'translate(' + pyrX + ',' + pyrY + ')' };
                 this.chartObj.gSeriesConnectorEle =  this.chartObj.svgRenderer.createGroup(connectorOptions);
             }
         }

         if (currentseries.pyramidMode.toLowerCase() == "linear")
             this.calculateLinearSegments(currentseries);
         else
             this.calculateSurfaceSegments(currentseries);

         for (j = 0; j < currentseries.points.length; j++) {
             var pointIndex = j;
             point = currentseries.points[j];
             if (point.visible) {
                 var result = this._getPyramidData(currentseries, pointIndex);

             var styleOptions = this.chartObj.setStyle(this, currentseries, 0,  pointIndex);
			 
             options = {
                 'id': this.chartObj.svgObject.id + '_Series' + "path" + pointIndex,
                 'fill': styleOptions.interior,
                 'stroke-width': styleOptions.borderWidth,
                 'stroke': styleOptions.borderColor,
                     'stroke-linecap': currentseries.lineCap,
                     'stroke-linejoin': currentseries.lineJoin,
                     'opacity': styleOptions.opacity,
                     'pointIndex': pointIndex,
                     'd': result.Direction
                 };
                 this.chartObj.svgRenderer.drawPath(options, this.gSeriesGroupEle);

                 if (currentseries.marker.dataLabel.template) {
                     ej.EjSvgRender.utils._getSeriesTemplateSize(point, pointIndex, currentseries, true, this.chartObj);
                 }

                 point.xLocation = result.PositionX;
                 point.yLocation = result.PositionY;
                 point.connectorLine = result.Connector;

                 region = { PointIndex: pointIndex };
                 internalRegion.push(region);
             }
         }
         var region = { Series: currentseries, Region: internalRegion, SeriesIndex: $.inArray(currentseries, this.chartObj.model._visibleSeries) };
         this.chartObj.model.chartRegions.push(region);

         $(this.gSeriesGroupEle.childNodes[pointIndex]).bind('mousemove', function (evt) {
             evt.target = seriesRender.gSeriesGroupEle.childNodes[pointIndex];
             seriesRender.chartObj.chartInteractiveBehavior(evt);
         });

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

        

     },



     doAnimation: function (series) {
      
     },
     _getPyramidData: function (series, index) {
        
         var model = this.chartObj.model;
         var offset = ((series.explodeIndex == index) || (series.explodeAll) ? series.explodeOffset : 0);

         var top = model.pyramidData[index].CurrY;
         var bottom = model.pyramidData[index].CurrY + model.pyramidData[index].Height;
         var topRadius = 0.5 * (1 - model.pyramidData[index].CurrY);
         var bottomRadius = 0.5 * (1 - bottom);

         var line1 = { x: offset + topRadius * model.actualWidth, y: top * model.actualHeight };
         var line2 = { x: offset + (1 - topRadius) * model.actualWidth, y: top * model.actualHeight };
         var line3 = { x: offset + (1 - bottomRadius) * model.actualWidth, y: bottom * model.actualHeight };
         var line4 = { x: offset + bottomRadius * model.actualWidth, y: bottom * model.actualHeight };

         var direction = "M " + " " + (line1.x) + " " + (line1.y) + " " + "L" + " " + (line2.x) + " " + (line2.y) + " " + "L" + " " + (line3.x) + " " + (line3.y) + " " + "L" + " " + (line4.x) + " " + (line4.y) + " " + "z";

         if (series.marker.dataLabel.visible) {
             var positionX;
             var positionY;
           
             if (series.labelPosition.toLowerCase() === 'outside') {

                 positionX = (line2.x + line3.x) / 2;
                 positionY = (line2.y + line3.y) / 2;

                 var pyrX = ((this.chartObj.model.legend.position.toLowerCase() == "left" || this.chartObj.model.legend.position.toLowerCase() == "right") ? (this.chartObj.model.LegendBounds.Width) : 0) + this.chartObj.model.elementSpacing + this.chartObj.model.margin.left;

                 if (ej.util.isNullOrUndefined(series.marker.dataLabel.connectorLine.height)) {
                     var textOffset = $(this.chartObj.svgObject).width() - (pyrX + positionX + this.chartObj.model.textSize + this.chartObj.model.elementSpacing);
                 }
                 else
                     textOffset = series.marker.dataLabel.connectorLine.height;
                                                
                 var connectorX = this.getXCordinate(positionX, textOffset, 0);
                 var connectorY = this.getYCordinate(positionY, textOffset, 0);
                
                 var connectorDirection = "M" + " " + positionX + " " + positionY + " " + "L" + " " + connectorX + " " + connectorY;

                 positionX = connectorX;
                 positionY = connectorY ;

                 
             }
             else {
                 positionX = (line1.x + line2.x) / 2;
                 positionY = (line3.y + line1.y) / 2;
             }
         }
         return { Direction: direction, PositionX: positionX, PositionY: positionY, Connector: connectorDirection };
     },

     calculateLinearSegments: function (series) {
         var currY = 0;
         var model = this.chartObj.model;
         model.pyramidData = [];
         if (series.gapRatio > 1)
         {
             series.gapRatio = 0;
         }
         var coef = 1 / (model.sumofYValues * (1 + series.gapRatio / (1 - series.gapRatio)));
         var count = series.points.length;
         for (var i = 0; i < series.points.length; i++) {
             if (series.points[i].visible) {
                 var height = coef * series.points[i].YValues[0];
                 model.pyramidData[i] = { CurrY: currY, Height: height };
                 currY += (series.gapRatio / (count - 1)) + height;
             }
         }
     },

     calculateSurfaceSegments: function (series) {
         var count = series.points.length;
         var model = this.chartObj.model;
         model.pyramidData = [];
         var currY = 0;
         var y = [];
         var height = [];
         var gapHeight = series.gapRatio / (count - 1);
         var preSum = this.getSurfaceHeight(0, model.sumofYValues);
         for (i = 0; i < count; i++) {
             if (series.points[i].visible) {
                 y[i] = currY;
                 height[i] = this.getSurfaceHeight(currY, Math.abs(series.points[i].YValues[0]));
                 currY += height[i] + gapHeight * preSum;
             }
         }
         var coef = 1 / (currY - gapHeight * preSum);
         for (var i = 0; i < count; i++) {
             if (series.points[i].visible) {
                 var currHeight = coef * y[i];
                 model.pyramidData[i] = { CurrY: currHeight, Height: coef * height[i] };
             }
         }
     },

     getSurfaceHeight: function (y, surface) {
         var result = this.solveQuadraticEquation(1, 2 * y, -surface);
         if (result) {
             return result;
         }
         return 0;
     },
     solveQuadraticEquation: function (a, b, c) {
         var root1;
         var root2;

         if (a != 0) {
             var d = b * b - 4 * a * c;

             if (d >= 0) {
                 var sd = Math.sqrt(d);

                 root1 = (-b - sd) / (2 * a);
                 root2 = (-b + sd) / (2 * a);
                 return Math.max(root1, root2);

             }
         }
         else if (b != 0) {
             root1 = -c / b;
             root2 = -c / b;
             return Math.max(root1, root2);
         }

         return false;
     },

     chartAreaType: "None"
 });

 ej.seriesTypes.pyramid = ej.ejPyramidSeries;

 ej.ejPolarSeries = ejExtendClass(ej.EjSeriesRender, {

     draw: function (chart, options) {

         this.chartObj = chart;
         var point;
         var seriesRender = this;
         var currentseries = options;
         var visiblePoints = this._pieVisiblePoints(currentseries);
         var internalRegion = [];
        

         var style = this.setLineSeriesStyle(currentseries);
        
         if (currentseries.drawType.toLowerCase() == "column") {
             this.chartObj.model.sumofYValues = 0;
             var count = currentseries.xAxis.visibleRange.interval;
             var min =  currentseries.xAxis.visibleRange.min
             do{
                 this.chartObj.model.sumofYValues += currentseries.xAxis.visibleRange.interval;
                 min += currentseries.xAxis.visibleRange.interval;
             } while (min <= currentseries.xAxis.visibleRange.max)
           //  this.chartObj.model.sumofYValues = visiblePoints.length;
         }

         var direction = this._calculatePolarAxesSegment(currentseries);

         if (currentseries.drawType.toLowerCase() == "area")
             this.drawAreaPath(currentseries, style, direction);
         else if (currentseries.drawType.toLowerCase() == "line")
             this._drawLinePath(currentseries, style, direction);
         
         
         
         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

       
     },
     doAnimation: function (series) {
             var chartObj = this.chartObj;
             series.regionAdded = true;
             chartObj.model._radius = chartObj.model.Radius;
             chartObj.model.Radius = 0;
             var seriesRender = this;
             var seriesIndex = $.inArray(series, chartObj.model._visibleSeries);
             var Path = $(chartObj.gSeriesEle).find("#" + seriesRender.gSeriesGroupEle.id)[0].childNodes[0];
             $(Path).animate(
                 {  Radius: chartObj.model._radius },

                 {
                     duration: 1200, queue: false, step: function (now, fx) {  
                          
                       chartObj.model.Radius = now;
                                                 
                       var direction = seriesRender._calculatePolarAxesSegment(series);
                       if(series.drawType.toLowerCase()!='column')
                       chartObj.svgRenderer._setAttr($(Path), { "d": direction });
                       chartObj.model.Radius = chartObj.model._radius;
                     },
                     complete: function () {
                         series.regionAdded = false;
                         if (series.marker.dataLabel.visible)
                             chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.svgObject.id + '_TextGroup' + '_' + seriesIndex), { "visibility": "visible" });
                         if (series.marker.visible)
                             chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.svgObject.id + '_symbolGroup' + '_' + seriesIndex), { "visibility": "visible" });

                             chartObj.model.AnimationComplete = true;
                             var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                             commonEventArgs.data = { series: series };
                             chartObj._trigger("animationComplete", commonEventArgs);
                         }
                     
                 });       
     },
     chartAreaType: "PolarAxes"

 });

 ej.seriesTypes.polar = ej.ejPolarSeries;
 ej.ejRadarSeries = ejExtendClass(ej.EjSeriesRender, {

     draw: function (chart, options) {

         this.chartObj = chart;
         var point;
         var seriesRender = this;
         var currentseries = options;
         var visiblePoints = this._pieVisiblePoints(currentseries);
         var internalRegion = [];

         var style = this.setLineSeriesStyle(currentseries);

         if (currentseries.drawType.toLowerCase() == "column") {
             this.chartObj.model.sumofYValues = 0;
             var count = currentseries.xAxis.visibleRange.interval;
             var min = currentseries.xAxis.visibleRange.min
             do {
                 this.chartObj.model.sumofYValues += currentseries.xAxis.visibleRange.interval;
                 min += currentseries.xAxis.visibleRange.interval;
             } while (min <= currentseries.xAxis.visibleRange.max)
             //  this.chartObj.model.sumofYValues = visiblePoints.length;
         }

         var direction = this._calculatePolarAxesSegment(currentseries);

          if (currentseries.drawType.toLowerCase() == "area")
             this.drawAreaPath(currentseries, style, direction);
         else if (currentseries.drawType.toLowerCase() == "line")
             this._drawLinePath(currentseries, style, direction);

         this.chartObj.svgRenderer.append(this.gSeriesGroupEle, this.chartObj.gSeriesEle);

         

     },
     doAnimation: function (series) {
         var chartObj = this.chartObj;
         series.regionAdded = true;
         chartObj.model._radius = chartObj.model.Radius;
         chartObj.model.Radius = 0;
         var seriesRender = this;
         var seriesIndex = $.inArray(series, chartObj.model._visibleSeries);
         var Path = $(chartObj.gSeriesEle).find("#" + seriesRender.gSeriesGroupEle.id)[0].childNodes[0];
         $(Path).animate(
             { Radius: chartObj.model._radius },

             {
                 duration: 1200, queue: false, step: function (now, fx) {

                     chartObj.model.Radius = now;

                     var direction = seriesRender._calculatePolarAxesSegment(series);
                     if (series.drawType.toLowerCase() != 'column')
                         chartObj.svgRenderer._setAttr($(Path), { "d": direction });
                     chartObj.model.Radius = chartObj.model._radius;
                 },
                 complete: function () {
                     series.regionAdded = false;
                     if (series.marker.dataLabel.visible)
                         chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.svgObject.id + '_TextGroup' + '_' + seriesIndex), { "visibility": "visible" });
                     if (series.marker.visible)
                         chartObj.svgRenderer._setAttr($(chartObj.gSeriesEle).find("#" + chartObj.svgObject.id + '_symbolGroup' + '_' + seriesIndex), { "visibility": "visible" });

                     chartObj.model.AnimationComplete = true;
                     var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                     commonEventArgs.data = { series: series };
                     chartObj._trigger("animationComplete", commonEventArgs);
                 }

             });
     },
     chartAreaType: "PolarAxes"

 });

 ej.seriesTypes.radar = ej.ejRadarSeries;
})(jQuery);;
ej.ejChart = {};
(function($) {
String.prototype.parseTemplate = function () {
    var str = this;
    $.each(arguments[0], function (dataIndex, dataValue) {
        if (dataValue.count > 0) {
            $.each(dataValue, function (datachildIndex, datachildValue) {
                str = str.replace(new RegExp('\\#' + dataIndex + '.' + datachildIndex + '\\#', 'gm'), datachildValue);
            });
        } else {
            str = str.replace(new RegExp('\\#' + dataIndex + '\\#', 'gm'), dataValue);
        }

    });
    return str;
};


var Gradient = function (colors) {
    this._gradientStop = [];
    for (var j = 0; j < colors.length; j++) {
        this._gradientStop.push(colors[j]);
    }
};



 ej.ejChart = {

    _renderSfChart: function () {

        var svgSupport = (window.SVGSVGElement) ? true : false;
        if (svgSupport) {
            this.svgRenderer = new ej.EjSvgRender(this.element);
            this._createChart();
            $(this.svgObject).appendTo(this.element);
        }
        else {

            this.svgRenderer = new ej.EjVmlRender(this.element);
            this._createChart();
            $(this.svgObject).appendTo(this.element);
        }
        return true;
    },

 setSvgSize: function (sender) {
            var chartObj = sender;
            var containerHeight = $(chartObj.element).height();
            var height = 450; //set default height if size not specified to chart or container
            var width = 0;
			var containerWidth = $(chartObj.element).width();
            if (chartObj.model.size.width) {
                var chartWidth = chartObj.model.size.width;
                if (chartWidth.indexOf("%") != -1)
                    width = (containerWidth / 100) * parseInt(chartWidth);
                else
                    width = parseInt(chartWidth);
            }
            else if (containerWidth > 0)
                width = containerWidth;

            $(chartObj.svgObject).width(width);

            if (chartObj.model.size.height) {
                var chartHeight = chartObj.model.size.height;
                if (chartHeight.indexOf("%") != -1)    
                    height = (!this.vmlRendering) ? (containerHeight / 100) * parseInt(chartHeight) : height;
                else
                    height = parseInt(chartHeight);
            }
            else if (containerHeight > 0)
                height = containerHeight;
            else
                $(chartObj.svgObject).css("display", "block"); //Added css to chart due to 5px difference for container and svg (http://jsfiddle.net/Me5Zd/)       
            $(chartObj.svgObject).height(height);
},
    setModelProperties: function () {

        //set size for the svgObject
        this.setSvgSize(this);

        this.svgWidth = $(this.svgObject).width();
        this.svgHeight = $(this.svgObject).height();

        this.chartCross = {
            visible: (this.chartCross)?(this.model.crosshair.visible||this.chartCross.visible):this.model.crosshair.visible,
            mArea: this.model.crosshair.type
        };

        // extend series with commonSeriesOptions
        this.serAnimation = [];
        if (this.model.series) {
            for (var j = 0; j < this.model.series.length; j++) {
                this.model.series[j] = ej.copyObject({}, this.model.commonSeriesOptions, this.model.series[j]);
                this.serAnimation.push((this.model.series[j].enableAnimation === null || this.model.series[j].enableAnimation === undefined) ? this.model.commonSeriesOptions.enableAnimation : this.model.series[j].enableAnimation);
            }
        }
    },

    _createChart: function () {
        this.svgObject = this.svgRenderer.svgObj;

        var commonlaodEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        this._trigger("load", commonlaodEventArgs);
        this.setTheme(ej.EjSvgRender.themes, this.model.theme);
        var model = this.model;
  
        if (model.series[0] && model.series[0]._isdesigntime) {
            model.series[0] = {};
            model.series[0].points = [];
            var randomPoints = [];
            for (var i = 1; i <= 10; i++) {
                randomPoints.push({ x: i, y: (Math.floor(Math.random() * (10 - 40)) + 40) });

            }
            model.series[0].points = randomPoints;
        }
		this.vmlRendering = (this.svgRenderer.vmlNamespace) ? true : false;
        if ($(this.element).is(":visible") || $(this.element).css("visibility") != "hidden" || $(this.element).css('display') != 'none') {
            this.bindEvents();
            this.bindTo();
        }
    },
    setTheme: function (jsonObj, themeName) {
        var name = themeName.toLowerCase();
        if ((name.indexOf("azure") >= 0 || name.indexOf("lime") >= 0 || name.indexOf("saffron") >= 0) && (name.indexOf("gradient") == -1) && (name.indexOf("dark") == -1))
            jsonObj[name] = $.extend(true, {}, jsonObj["flatlight"], jsonObj[name]);
        else if ((name.indexOf("azuredark") >= 0 || name.indexOf("limedark") >= 0 || name.indexOf("saffrondark")) >= 0 && (name.indexOf("gradient") == -1))
            jsonObj[name] = $.extend(true, {}, jsonObj["flatdark"], jsonObj[name]);
        else if ((name.indexOf("azure") >= 0 || name.indexOf("lime") >= 0 || name.indexOf("saffron") >= 0) && (name.indexOf("gradient") >= 0) && (name.indexOf("dark") == -1))
            jsonObj[name] = $.extend(true, {}, jsonObj["gradientlight"], jsonObj[name]);
        else if ((name.indexOf("azuredark") >= 0 || name.indexOf("limedark") >= 0 || name.indexOf("saffrondark") >= 0) && (name.indexOf("gradient") >= 0))
            jsonObj[name] = $.extend(true, {}, jsonObj["gradientdark"], jsonObj[name]);
        else if (!(jsonObj[name])) name = "flatlight";

        if (this.model._themeChanged)
            this.model = ej.copyObject({}, this.model, jsonObj[name]);
        else
            this.model = ej.copyObject({}, jsonObj[name], this.model);


    },
    _drawBackInterior: function () {
        if (this.model.backInterior && this.model.backInterior._gradientStop) {
            var options = {
                'id': this.svgObject.id + '_backGradient',
                'x1': '0%',
                'y1': '0%',
                'x2': '0%',
                'y2': $(this.svgObject).height() + '%'
            };
            this.svgRenderer.drawGradient(options, this.model.backInterior._gradientStop);
        }
    },
    


    _drawBackImage: function () {
        var options = {
            'height': $(this.svgObject).height(),
            'width': $(this.svgObject).width(),
            'href': this.model.backGroundImageUrl,
            'x': 0,
            'y': 0,
            'id': this.svgObject.id + '_backImage',
            'visibility': 'visible',
            'preserveAspectRatio': 'none'
        };

        this.svgRenderer.drawImage(options, this.svgObject);

    },
    _getDataType: function (val) {
        var type = typeof (val);
        if (type === "number" || type === "string")
            return type;
        else if (jQuery.type(val) == "date")
            return "date";
        else
            return false;

    },
    addedXYValues: function (excludeDataUpdate) {
        excludeDataUpdate = (excludeDataUpdate) ? excludeDataUpdate : false;
        if (!excludeDataUpdate) {
            for (var i = 0; i < this.model.series.length; i++) {
                var setXValueType = false, isDatetime = false, pointX, currentSeries;

                if (!this.model.series[i].dataSource) {
                    this.model.series[i] = $.extend(true, {}, this.model.commonSeriesOptions, this.model.series[i]);
                    currentSeries = this.model.series[i];
                    if (this.model.primaryXAxis.valueType == "datetime")
                        isDatetime = true;
                    for (k = 0; k < currentSeries.points.length; k++) {
                        currentSeries.points[k].YValues = [];
                        if ((parseFloat(currentSeries.points[k].x)) && (typeof(currentSeries.points[k].x == "string")) 
						                                                          && (this.model.primaryXAxis.valueType != "category")) {
                            if (!isDatetime) {
                                currentSeries.points[k].X = parseFloat(currentSeries.points[k].x);
                                currentSeries.points[k].x = parseFloat(currentSeries.points[k].x);
                            }
                            else {
                                currentSeries.points[k].X = new Date(currentSeries.points[k].x);
                                currentSeries.points[k].x = new Date(currentSeries.points[k].x);
                                }
                        }
                        else
                            currentSeries.points[k].X = currentSeries.points[k].x;
                        if (!setXValueType) {
                            pointX = currentSeries.points[k].x;
                            if (pointX) {
                                currentSeries._xAxisValueType = this._getDataType(pointX);
                                setXValueType = true;
                            }
                        }
                        if (!(currentSeries._hiloTypes)) {
                            currentSeries.points[k].YValues[0] = currentSeries.points[k].y;

                            if (currentSeries.points[k].size)
                                currentSeries.points[k].YValues[1] = currentSeries.points[k].size;

                        }
                        else {
                            if (currentSeries.points[k].high) {
                                currentSeries.points[k].YValues[0] = currentSeries.points[k].high;
                                currentSeries.points[k].y = currentSeries.points[k].high;
                            }
                            if (currentSeries.points[k].low)
                                currentSeries.points[k].YValues[1] = currentSeries.points[k].low;
                            if (currentSeries.points[k].open)
                                currentSeries.points[k].YValues[2] = currentSeries.points[k].open;
                            if (currentSeries.points[k].close)
                                currentSeries.points[k].YValues[3] = currentSeries.points[k].close;
                        }
                    }
                }
                else {
                    currentSeries = this.model.series[i];
                    for (var j = 0, length=currentSeries.points.length; j <length; j++) {
                        pointX = currentSeries.points[j].X= currentSeries.points[j].x;                  
                        if (ej.util.isNullOrUndefined(currentSeries._xAxisValueType)) {
                           if(!ej.util.isNullOrUndefined(pointX))currentSeries._xAxisValueType = this._getDataType(pointX);
                          }
                    }
                }
            }
           this._setInternalValues();
         }
    },
    _setInternalValues: function () {
        var type = this.model.series[0].type.toLowerCase();
        if (ej.seriesTypes[type].prototype.chartAreaType == "cartesianAxes") {
            this.model.AreaType = "cartesianaxes";
        }
        else if (ej.seriesTypes[type].prototype.chartAreaType == "None")
            this.model.AreaType = "none";
        else {
            if (type == 'polar')
                this.model.isPolar = true;
            this.model.AreaType = "polaraxes";
        }

        this.model.requireInvertedAxes = ej.seriesTypes[type].prototype.requireInvertedAxes;
        
        this.model._visibleSeries = [];
        for (var k = 0; k < this.model.series.length; k++) {
            var series = this.model.series[k];
            if (this.model.AreaType == "cartesianaxes" && ej.seriesTypes[series.type.toLowerCase()].prototype.chartAreaType == "cartesianAxes") {
                series._zOrder = (series.zOrder) ? series.zOrder : 0;
                this.model._visibleSeries.push(series);
            }
            else if (this.model.AreaType == "none" && ej.seriesTypes[series.type.toLowerCase()].prototype.chartAreaType == "None") {
                series._zOrder = (series.zOrder) ? series.zOrder : 0;
                this.model._visibleSeries.push(series);
            }
            else if (this.model.AreaType == "polaraxes" && ej.seriesTypes[series.type.toLowerCase()].prototype.chartAreaType == "PolarAxes") {
                series._zOrder = (series.zOrder) ? series.zOrder : 0;
                this.model._visibleSeries.push(series);
            }

            if (series.yAxisName || series.xAxisName) {
                if (this.model.axes) {
                    for (var t = 0; t < this.model.axes.length; t++) {
                        if (series.yAxisName && (series.yAxisName == this.model.axes[t].name)) {
                            this.model.axes[t].orientation = (this.model.axes[t].orientation) ? this.model.axes[t].orientation : (this.model.requireInvertedAxes) ? "horizontal" : "vertical";
                        }
                        if (series.xAxisName && (series.xAxisName == this.model.axes[t].name)) {
                            this.model.axes[t].orientation = (this.model.axes[t].orientation) ? this.model.axes[t].orientation : (this.model.requireInvertedAxes) ? "vertical" : "horizontal";
                        }
                    }
                }
            }
        }
    },
    setHiloStyle: function(series, pointIndex, seriesIndex, interiorColor){
        var point = series.points[pointIndex];
                  
        if (point.fill)
              interior = point.fill;
         else
              interior = series.fill ? series.fill : interiorColor;
				
            // setting default series color		
            var colors = interior ? interior : this.model.seriesColors[seriesIndex];
          
            // applying gradient color		  
         
            seriesInterior = jQuery.type(colors) == "array" ? colors[0].color : colors;

            return seriesInterior;
                       
    },
	setStyle: function (chart, series, seriesIndex, pointIndex, interiorColor) {
    
        var point = series.points[pointIndex];
       // var pointStyle = point.style ? point.style : " ";
        var interior, borderColor, borderWidth, opacity;
		
        // setting interior
        if (chart.chartObj.model.AreaType == "cartesianaxes") {
            if (point.fill)
                interior = point.fill;
            else
                interior = series.fill ? series.fill : interiorColor;
				
		// setting default series color		
            var colors = interior ? interior : this.model.seriesColors[seriesIndex];
          
        // applying gradient color		  
			if (chart.chartObj.model.requireInvertedAxes) 
                var seriesInterior = this.svgRenderer.createGradientElement(chart.getSeriesName(series) + "_" + seriesIndex + pointIndex, colors, 0, 0, 100, 0, chart.gSeriesGroupEle);
            else                                       
                seriesInterior = this.svgRenderer.createGradientElement(chart.getSeriesName(series) + "_" + seriesIndex + pointIndex, colors, 0, 0, 0, 100, chart.gSeriesGroupEle);
         } 
		 
		// interior for pie type series
        else {
            interior = point.fill ? point.fill : this.model.pointColors[pointIndex];
            var pointInterior = this.svgRenderer.createGradientElement(chart.getSeriesName(series) + pointIndex, interior, 0, 0, 0, $(chart.svgObject).height(), chart.chartObj.gSeriesEle);
        }
        
        // setting borderColor
            borderColor =((point.border) && point.border.color)? point.border.color : series.border.color;
            borderWidth =((point.border) && point.border.width) ? point.border.width : series.border.width;
            opacity = point.opacity ? point.opacity : series.opacity;
            

        var options = {
            'interior': seriesInterior ? seriesInterior: pointInterior,
            'borderColor': borderColor,
            'borderWidth': borderWidth,
            'opacity': opacity
        };
        return options;
    },
	
    colorNameToHex: function (colour) {
        var color = colour;
        var colours = {
            "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
            "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
            "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
            "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
            "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
            "honeydew": "#f0fff0", "hotpink": "#ff69b4",
            "indianred ": "#cd5c5c", "indigo ": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
            "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
            "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
            "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead", "navy": "#000080",
            "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
            "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
            "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
            "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00", "yellowgreen": "#9acd32"
        };

        if (Object.prototype.toString.call(color) == '[object Array]')
            return color;

        if (typeof colours[color.toLowerCase()] != 'undefined')
            return colours[color.toLowerCase()];

        return color;
    },
	
	// set culture for chart
     _setCulture: function (culture) {
        this.culture = Globalize.culture(culture);
    },
	
	
     draw: function (excludeDataUpdate) {

        this._drawBackInterior();
        this.model.chartRegions = [];
        this.model.stackedValue = {};
		this._setCulture(this.model.locale);
		this.addedXYValues(excludeDataUpdate);
        

        var commonpreRenderEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonpreRenderEventArgs.data = {};
        this._trigger("preRender", commonpreRenderEventArgs);

        this.gLegendEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_Legend' });

        this.gTitleEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_ChartTitle' });
        this._createAxisLabelAndRange();

        this._initializeSeriesColors();

        for (i = 0; i < this.model.series.length; i++) {
            if (!ej.util.isNullOrUndefined(this.model.series[i].style)) {
                if (!ej.util.isNullOrUndefined(this.model.series[i].style.interior)) {
                    var interior = this.model.series[i].style.interior;
                    interior = this.colorNameToHex(interior);
                    this.model.series[i].style.interior = interior;
                }
            }
        }

        this._calculateLegendBounds();

        this.legendRender = new ej.EjLegendRender(this);

        var commonLegendEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonLegendEventArgs.data = { legendBounds: this.model.LegendBounds };
        this._trigger("legendBoundsCalculate", commonLegendEventArgs);
        for (var m = 0; m < this.model._visibleSeries.length; m++) {
            var options = this.model._visibleSeries[m];
            for (i = 0; i < options.points.length; i++) {
                if (typeof options.points[i].X == "string" && options.points[i].X.indexOf("/Date(") != -1)
                    options.points[i].X = new Date(parseInt(options.points[i].X.substr(6)));
            }
        }
        this.model.hAxes = [];
        this.model.vAxes = [];
        var chartobj = this;
        var isStriplineOver = false, isStriplineBehind = false;
        this._arrangeAxis();
        for (var k = 0; k < this.model.axes.length; k++) {
            var axis = this.model.axes[k];
            var seriesCollection = [];
            for (var slCount = 0; slCount < axis.stripLine.length && axis.stripLine[slCount].visible; slCount++) {
                axis.stripLine[slCount] = $.extend(true, {}, this.model.stripLineDefault, axis.stripLine[slCount]);
                if (axis.stripLine[slCount].zIndex.toLowerCase() == 'over') {
                    isStriplineOver = true;
                } else {
                    isStriplineBehind = true;
                }
            }
            var axisOrientation = axis.orientation.toLowerCase();
            for (j = 0; j < this.model._visibleSeries.length; ++j) {
                if (this.model._visibleSeries[j].visibility.toLowerCase() == 'visible') {
                    var series = this.model._visibleSeries[j];
                    series.xAxisName = (!(series.xAxisName)) ? chartobj.model.axes[0].name : series.xAxisName;
                    series.yAxisName = (!(series.yAxisName)) ? chartobj.model.axes[1].name : series.yAxisName;
                    var xAxisName = series.xAxisName.toLowerCase();
                    var yAxisName = series.yAxisName.toLowerCase();
                    var name = axis.name.toLowerCase();
                    if (xAxisName || yAxisName) {
                        if (xAxisName == name || yAxisName == name) {
                            if (axisOrientation == "horizontal" && axis.valueType && axis.valueType.toString() == "datetime") {
                                for (var m = 0; m < series.points.length; m++) {
                                    if (typeof series.points[m].X == "string" && !isNaN(Date.parse(series.points[m].X)))
                                        series.points[m].X = new Date(Date.parse(series.points[m].X));
                                }
                            }
                            else {
                                if (series._xAxisValueType == "string" && !(axis.valueType))
                                    axis._valueType = (axisOrientation == 'horizontal' && !this.model.requireInvertedAxes) ? 'category' : (axisOrientation == 'vertical' && this.model.requireInvertedAxes) ? 'category' : 'double';

                                if (series._xAxisValueType == "date" && !(axis.valueType))
                                    axis._valueType = (axisOrientation == 'horizontal' && !this.model.requireInvertedAxes) ? "datetime" : (axisOrientation == 'vertical' && this.model.requireInvertedAxes) ? 'datetime' : 'double';
                            }
                            seriesCollection.push(series);
                        }
                    }
                }
            }
            if (axisOrientation == ((!this.model.requireInvertedAxes) ? "vertical" : "horizontal")) {
                for (var i = 0; i < seriesCollection.length; i++) {
                    var type = seriesCollection[i].type.toLowerCase();
                    if (ej.seriesTypes[type].prototype.stackingSeries || (this.model.AreaType == 'polaraxes' && seriesCollection[i].drawType.toLowerCase() == 'column' && seriesCollection[i].isStacking)) {
                        // calculation for stacking values
                        this._calculateStackingValues(seriesCollection, axis);
                        break;
                    }
                }
            }
            axis._valueType = (!(axis._valueType)) ? (!(axis.valueType) ? "double" : axis.valueType) : axis._valueType;
            var axisRange = new ej.axisTypes[axis._valueType.toLowerCase()]();
            axisRange._calculateRanges(chartobj, axis, seriesCollection);
            var commonAxisEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonAxisEventArgs.data = { range: axis.range };
            this._trigger("axesRangeCalculate", commonAxisEventArgs);
        }







        var commonAxesInitEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonAxesInitEventArgs.data = { axes: this.model.axes };
        this._trigger("axesLabelsInitialize", commonAxesInitEventArgs);

        this._calculateAreaBounds();

        if (this.model.AreaType != "none") {        

            var commonAreaEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonAreaEventArgs.data = { areaBounds: this.model.m_AreaBounds };
            this._trigger("chartAreaBoundsCalculate", commonAreaEventArgs);

            this._drawChartAreaRect();

            if (this.model.title.text != "" && this.model.title.text)
                this._drawTitle();

            this._calculateAxisSize();

            this.gXaxisEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_XAxis' });

            this.gYaxisEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_YAxis' });
     
            this.gPolarAxisEle = this.svgRenderer.createGroup( { 'id': this.svgObject.id + '_AxisLine' });

            $.extend(ej.EjAxisRenderer.prototype, this);
            this.chartaxis = new ej.EjAxisRenderer(this);
            var chartaxis = this.chartaxis;
            for (var l = 0; l < this.model.axes.length; l++) {
                chartaxis._drawAxes(l, this.model.axes[l]);
            }

            this.svgRenderer.append(this.gXaxisEle, this.svgObject);

            this.svgRenderer.append(this.gYaxisEle, this.svgObject);

            var x = (this.model.AreaType == 'polaraxes') ? 0: this.model.m_AreaBounds.X;
            var y = (this.model.AreaType == 'polaraxes') ? 0 : this.model.m_AreaBounds.Y;

            var width = (this.model.AreaType == 'polaraxes') ? $(this.svgObject).width() : this.model.m_AreaBounds.Width;
            var height = (this.model.AreaType == 'polaraxes') ? $(this.svgObject).height() : this.model.m_AreaBounds.Height;

            var clipRectOptions = {
                'id': this.svgObject.id + '_ChartAreaClipRect',
                'x': x,
                'y': y,
                'width': width,
                'height': height,
                'fill': 'white',
                'stroke-width': 1,
                'stroke': 'Gray'
            };

            this.svgRenderer.drawClipPath(clipRectOptions, this.svgObject);
			
			this._setZoomProperties();
        }

        else {
            this._drawChartAreaRect();

            clipRectOptions = {
                'id': this.svgObject.id + '_ChartAreaClipRect',
                'x': 0,
                'y': 0,
                'width': $(this.svgObject).width(),
                'height': $(this.svgObject).height(),
                'fill': 'white',
                'stroke-width': 1,
                'stroke': 'Gray'
            };

            this.svgRenderer.drawClipPath(clipRectOptions, this.svgObject);

            if (this.model.title.text != "" && this.model.title.text)
                this._drawTitle();
        }

        if (isStriplineBehind && this.model.AreaType == "cartesianaxes") {
            this.gStriplineBehind = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_StriplineBehind', 'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)' });
            this._renderStripline('behind');
        }

        if (this.model.initSeriesRender)
            this.seriesRender();
        if (this.model.AreaType == "polaraxes") {
            this.chartaxis._drawAxisLine(this.model.axes[1]);
        }



        if (isStriplineOver && this.model.AreaType == "cartesianaxes") {
            this.gStriplineOver = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_StriplineOver', 'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)' });
            this._renderStripline('over');
        }

            

        var commonLoadedEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonLoadedEventArgs.data = { model: this.model };
        this._trigger("loaded", commonLoadedEventArgs);


    },
	
	// set value to private variable for two way binding
	_setZoomProperties:function(){
	    for (var l = 0; l < this.model.axes.length; l++) {
			  var axis=this.model.axes[l];
               
		var _zf = axis.zoomFactor.toFixed(3);
        var _zp = axis.zoomPosition.toFixed(3);
        if (axis.name == this.model.primaryXAxis.name && (_zf!= this._xZoomFactor() ||_zp!= this._xZoomPosition() )) {
            this._xZoomFactor(axis.zoomFactor.toFixed(3));
            this._xZoomPosition(axis.zoomPosition.toFixed(3));
        }
        if (axis.name == this.model.primaryYAxis.name && (_zf != this._yZoomFactor() || _zp != this._yZoomPosition())) {
            this._yZoomFactor(axis.zoomFactor.toFixed(3));
            this._yZoomPosition(axis.zoomPosition.toFixed(3));
        }
				
        }
	},
    seriesRender: function () {
        var chartObj = this;
        if ($(this.svgObject).find("#" + this.svgObject.id + "_SeriesCollection").length > 0) {
            $(this.svgObject).find("#" + this.svgObject.id + "_SeriesCollection").remove();
        }
        var serOptions = { 'id': this.svgObject.id + '_SeriesCollection', 'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)' };

        this.gSeriesEle = this.svgRenderer.createGroup(serOptions);
        var visibleSeries = ej.DataManager(this.model._visibleSeries, ej.Query().sortBy("_zOrder")).executeLocal();
        for (var i = 0; i < visibleSeries.length; i++) {
            if (visibleSeries[i].visibility == "visible") {
            if (!ej.util.isNullOrUndefined(visibleSeries[i].xAxis)) {
                visibleSeries[i].xAxis = null;
                visibleSeries[i].yAxis = null;
            }
            for (var j = 0; j < this.model.axes.length; j++) {
                var axis = this.model.axes[j];
                var index = i;
                if (axis.name && axis.orientation.toLowerCase() == 'horizontal' && axis.name.toLowerCase() == visibleSeries[i].xAxisName.toLowerCase()) {
                    visibleSeries[i].xAxis = axis;
                }
                else if (axis.name && axis.orientation.toLowerCase() == 'vertical' && axis.name.toLowerCase() == visibleSeries[i].yAxisName.toLowerCase()) {
                    visibleSeries[i].yAxis = axis;
                }
                if (this.model.requireInvertedAxes) {
                    if (axis.name && axis.orientation.toLowerCase() == 'vertical' && axis.name.toLowerCase() == visibleSeries[i].xAxisName.toLowerCase()) {
                        visibleSeries[i].xAxis = axis;
                    }
                    else if (axis.name && axis.orientation.toLowerCase() == 'horizontal' && axis.name.toLowerCase() == visibleSeries[i].yAxisName.toLowerCase()) {
                        visibleSeries[i].yAxis = axis;
                    }
                }

            }
        }
        }
        for (var m = 0; m < visibleSeries.length; m++) {
            var index = m;
            var seriesOptions = visibleSeries[m];
            if (this.model.AreaType == "none" && seriesOptions.visibility.toLowerCase() === 'visible') {
                if (index === 0) {

                    var type = seriesOptions.type.toLowerCase();
                    var seriesIndex = $.inArray(visibleSeries[0], this.model._visibleSeries);
                    this.model._visibleSeries[seriesIndex] = visibleSeries[0] = $.extend(true, seriesOptions, visibleSeries[0]);
                    var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                    commonEventArgs.data = { series: seriesOptions };
                    this._trigger("seriesRendering", commonEventArgs);
                    var seriesType = new ej.seriesTypes[type]();
                    seriesType.draw(chartObj, seriesOptions);
                    if (seriesOptions.enableAnimation && !this.vmlRendering) {
                        seriesType.doAnimation(seriesOptions);
                    }
                    this.drawAccDisplayText(seriesType, seriesOptions);
                }
            }
            else {
                if (seriesOptions.visibility.toLowerCase() === 'visible')
                    this.renderSeries(seriesOptions);
            }
        }
        if (this.svgRenderer.vmlNamespace && (this.model.AreaType != "none"))
            this.svgRenderer.append(this.gSeriesEle, this.svgObject);
        if (this.model.AreaType == 'polaraxes')
            this.svgRenderer.append(this.gPolarAxisEle, this.svgObject);
        if ($(this.svgObject).find("#" + this.svgObject.id + "_StriplineOver").length > 0) {
            var detachEle = $(this.svgObject).find("#" + this.svgObject.id + "_StriplineOver").detach();
            detachEle.appendTo(this.svgObject);
        }
		
		this.legendRender.drawLegend();
		
        chartObj.model.initSeriesRender = true;
    },
    _renderStripline: function (zIndex) {
        $.extend(ej.EjStripline.prototype, this);
        this.chartstripline = new ej.EjStripline(this);
        var stripline = this.chartstripline;
        for (var sl = 0; sl < this.model.axes.length; sl++) {
            var slAxis = this.model.axes[sl];
            for (var slCount = 0; slCount < slAxis.stripLine.length && slAxis.stripLine[slCount].visible; slCount++) {
                if (slAxis.stripLine[slCount].zIndex.toLowerCase() == zIndex)
                    stripline._drawStripline(slAxis, slAxis.stripLine[slCount]);
            }
        }
        if (zIndex == 'over') {

            this.svgRenderer.append(this.gStriplineOver, this.svgObject);
        } else {
            this.svgRenderer.append(this.gStriplineBehind, this.svgObject);
        }
    },

    renderSeries: function (options) {

        var chart = this;
        var axis;
        var index;
        var seriesIndex = $.inArray(options, this.model._visibleSeries);

        for (var i = 0; i < options.points.length; i++) {
            if (typeof options.points[i].x == "string" && options.points[i].x.indexOf("/Date(") != -1)
                options.points[i].x = new Date(parseInt(options.points[i].x.substr(6)));
        }
        options.xAxis = (options.xAxis === null || options.xAxis === undefined) ? this.model.axes[0] : options.xAxis;
        options.yAxis = (options.yAxis === null || options.yAxis === undefined) ? this.model.axes[1] : options.yAxis;
        var type = options.type.toLowerCase();
        var symbolOptions;
        var translate = null;
        var visibility;

        if (this.model.AreaType == "cartesianaxes") {
            var trans = ej.EjSvgRender.utils._getTransform(options.xAxis, options.yAxis, this.model.requireInvertedAxes);
            var translate = 'translate(' + trans.x + ',' + trans.y + ')';
            visibility = 'visible';
        }
        else {
            visibility = (options.enableAnimation) ? 'hidden' : 'visible'
        }
        var txtOptions = { 'id': this.svgObject.id + '_TextGroup' + '_' + seriesIndex, 'transform': translate, 'visibility': visibility };
        if (type != "scatter")
            symbolOptions = { 'id': this.svgObject.id + '_symbolGroup' + '_' + seriesIndex, 'transform': translate, 'visibility': visibility };
        else
            symbolOptions = { 'id': this.svgObject.id + '_SeriesGroup' + '_' + seriesIndex, 'transform': translate };
        this.gSymbolGroupEle = this.svgRenderer.createGroup(symbolOptions);
        this.gSeriesTextEle = this.svgRenderer.createGroup(txtOptions);

        var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
        commonEventArgs.data = { series: options };
        this._trigger("seriesRendering", commonEventArgs);

        var series = new ej.seriesTypes[type]();
        series.draw(this, options);

        //Add axes bounds clip path for series
        var element = series.gSeriesGroupEle;
        if (element) ej.EjSvgRender.utils._drawAxesBoundsClipPath(element, options, this);

        // Draw Symbols

        if (options.marker.visible) {
            if (!(type == "candle" || type == "hilo" || type == "hiloopenclose")) {
                var chartObj = this;
                $.each(options.points, function (pointIndex, point) {
                    series.drawSymbolImage(options, pointIndex);

                    var point1 = (chartObj.model.AreaType != "polaraxes")
                    ? ((point.symbolLocation) ? point.symbolLocation : ej.EjSvgRender.utils._getPoint(point, options))
                    : ( ej.EjSvgRender.utils.TransformToVisible(options, point.X, point.y, chartObj))

                    if (chartObj.model.AreaType == "polaraxes") {
                        var labelFormat = options.yAxis.labelFormat ? options.yAxis.labelFormat : "";
                        var pointText = (point.text) ? point.text : point.y + labelFormat.substring(labelFormat.indexOf('}') + 1);
                        var textOffset = ej.EjSvgRender.utils._measureText(pointText, null, options.marker.dataLabel.font);
                     }
                    if (ej.util.isNullOrUndefined(point.marker) || ej.util.isNullOrUndefined(point.marker.visible) || (point.marker && point.marker.visible))
                    series.drawSymbol(seriesIndex, options, pointIndex, point1.X, point1.Y);
                });
                if (type != "scatter") {
                    this.svgRenderer.append(this.gSymbolGroupEle, this.gSeriesEle);
                    //Add axes bounds clip path for marker
                    if (options.marker.visible) {
                        element = this.gSymbolGroupEle;
                       ej.EjSvgRender.utils._drawAxesBoundsClipPath(element, options, this);
                    }
                    //   Add axes bounds clip path for marker text
                    if (options.marker.dataLabel.visible) {
                        element = this.gSeriesTextEle;
                        ej.EjSvgRender.utils._drawAxesBoundsClipPath(element, options, this);
                    }
                } else {
                    element = this.gSymbolGroupEle;
                    ej.EjSvgRender.utils._drawAxesBoundsClipPath(element, options, this);
                    this.svgRenderer.append(this.gSymbolGroupEle, this.gSeriesEle);

                    if (options.tooltip.visible || type == "scatter") {
                        var elements = $(this.gSymbolGroupEle).children().not("defs");
                        if (this.vmlRendering) {
                            this.cloneSeriesEle = $(this.gSeriesEle).clone();
                            this.cloneobj = $(this.element).clone();
                            this.svgclone = $(this.svgObject).clone();
                            $(document.body).append(this.cloneobj);
                            this.svgRenderer.append(this.cloneSeriesEle, this.svgclone);
                            this.svgRenderer.append(this.svgclone, this.cloneobj);
                        }
                        else {
                            this.svgRenderer.append(this.gSeriesEle, this.svgObject);
                            this.svgRenderer.append(this.svgObject, this.element);
                        }


                        for (var j = 0; j < elements.length; j++) {
                            var elementNode = (this.vmlRendering) ? ($("#" + (elements[j].id))[0]) : elements[j];
                            var bound = ej.EjSvgRender.utils._getBoundingClientRect(elementNode, this, options, false);

                            var valwidth, x, y, valheight;
                            x = (bound.x + options.xAxis.x);
                            y = (bound.y + options.yAxis.y);

                            valheight = bound.height;
                            valwidth = bound.width;

                            var bounds = { X: x, Y: y, Width: valwidth, Height: valheight };
                            ej.EjSvgRender.utils._addRegion(this, bounds, options, null, j);
                        }
                        if (this.vmlRendering) {
                            $(this.cloneobj).remove();
                            $(this.svgclone).remove();
                        }
                    }
                }
            }

        }

        //Draw Series Text

        this.drawDisplayText(series, options);

     if (!this.vmlRendering) {
            this.svgRenderer.append(this.gSeriesEle, this.svgObject);
            this.svgRenderer.append(this.svgObject, this.element);
            if (options.enableAnimation) {
			var templateContainer = $('#template_group_' + this._id); 
                var dataLabel=options.marker.dataLabel;				
               if (templateContainer.children().length != 0 && (dataLabel.visible && dataLabel.template))	 	
                   series.animateLabelTemplate(options);
                series.doAnimation(options);
                this.model.AnimationComplete = true;
                var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                commonEventArgs.data = {series : options};
                this._trigger("animationComplete", commonEventArgs);
            }
        }

    },
	
	drawDisplayText : function (series, options){
	    // method to draw text 
	    if (options.marker.dataLabel.visible) {
	        var chartObj = this;
	        $.each(options.points, function (pointIndex, point) {
	            var point1 = (chartObj.model.AreaType != "polaraxes")
                    ? ((point.symbolLocation) ? point.symbolLocation : ej.EjSvgRender.utils._getPoint(point, options))
                    : (ej.EjSvgRender.utils.TransformToVisible(options, point.X, point.y, chartObj))
	            if (ej.util.isNullOrUndefined(point.marker) || (point.marker.dataLabel && point.marker.dataLabel.visible))
	                series.drawDataLabel(options, pointIndex, point, point1.X, point1.Y);
	        });

	        this.svgRenderer.append(this.gSymbolGroupEle, this.gSeriesEle);
	        this.svgRenderer.append(this.gSeriesTextEle, this.gSeriesEle);
	    }
	},

	drawAccDisplayText: function (series, options) {
	    // method to draw text 
	    var chartObj = this;

	    if (options.type.toLowerCase() != "pyramid" && options.leftsidePoints.length > 0) {
	        chartObj.model.bounds["left"] = [];
	        chartObj.model.bounds["right"] = [];

	        for (var i = 0; i < options.rightsidePoints.length; i++) {
	            options.rightsidePoints[i].index = i;
	            series.drawDataLabelAcc(chartObj, options, options.rightsidePoints[i].pointIndex, options.rightsidePoints[i])
	        }
	        for (var j = options.leftsidePoints.length - 1; j >= 0; j--) {
	            options.leftsidePoints[j].index = j;
	            series.drawDataLabelAcc(chartObj, options, options.leftsidePoints[j].pointIndex, options.leftsidePoints[j])
	        }
	    }
	   else{
	        for (var i = 0; i < options.points.length; i++) {
	            options.points[i].index = i;            
	            series.drawDataLabelAcc(chartObj, options, i, options.points[i])
	        }
	    }
	     

	    this.svgRenderer.append(this.gSeriesConnectorEle,  this.gSeriesEle);

	    this.svgRenderer.append(this.gSymbolGroupEle,  this.gSeriesEle);

	    this.svgRenderer.append(this.gSeriesTextEle,  this.gSeriesEle);

	    this.svgRenderer.append(this.gSeriesEle,  this.svgObject);

	    if (!this.vmlRendering) 
	    this.svgRenderer.append(this.svgObject, this.element);
	},

    _processOData: function (series) {
        var chart = this;
        var queryPromise = series.dataSource.executeQuery(series.query);
        queryPromise.done(function (e) {
            chart._processJsonData(e.result, series);
            series.visibility = 'visible';
            $(chart.svgObject).empty();
            var redrawChart=true;
            for (var i = 0; i < chart.model.series.length; i++)
                if (chart.model.series[i].dataSource)
                {
                    if (chart.model.series[i].visibility == 'hidden') {
                        redrawChart = false;
                        break;
                    }
                }
            if (redrawChart) {
                chart.draw();
            }
        });
        queryPromise.fail(function (e) {
            series.visibility = 'visible';
            $(chart.svgObject).empty();
            var redrawChart=true;
            for (var i = 0; i < chart.model.series.length; i++)
                if (chart.model.series[i].dataSource)
                {
                    if (chart.model.series[i].visibility == 'hidden') {
                        redrawChart = false;
                        break;
                    }
                }
            if (redrawChart) {
                chart.draw();
            }
        });
    },
    _processJsonData: function (jsonObj, series) {
	    if(series.points.length > 0)
           series.points.length = 0;
        var xdata = [];
        var dataSource = series.dataSource;
        var xName = series.xName;
        var yNames = series.yName;

        for (var j = 0; j < jsonObj.length; j++) {
            if (typeof jsonObj[j][xName] == "string" && jsonObj[j][xName].indexOf("/Date(") != -1) {
                jsonObj[j][xName] = new Date(parseInt(jsonObj[j][xName].substr(6)));
                xdata.push((jsonObj[j][xName]) ? jsonObj[j][xName] : j);
            }
            else
                xdata.push((jsonObj[j][xName]) ? jsonObj[j][xName] : j);
        }
        var yValues = [];
        var index = 0;
        if (!yNames) {
            if (series._hiloTypes) {
                var yVal = [];
                //For high
                var high = series.high;
                for (var s = 0; s < jsonObj.length; s++) {
                    yVal.push(jsonObj[s][high] === null || jsonObj[s][high] === undefined ? jsonObj[s][high] : parseFloat(jsonObj[s][high]));

                }
                yValues[index] = yVal;
                index = index + 1;
                //For low
                yVal = [];
                var low = series.low;
                for (var l = 0; l < jsonObj.length; l++) {
                    yVal.push(jsonObj[l][low] === null || jsonObj[l][low] === undefined ? jsonObj[l][low] : parseFloat(jsonObj[l][low]));
                }
                yValues[index] = yVal;
                index = index + 1;
                if (series.type.toLowerCase() !== 'hilo') {
                    //For open
                    yVal = [];
                    var open = series.open;
                    for (var h = 0; h < jsonObj.length; h++) {
                        yVal.push(jsonObj[h][open] === null || jsonObj[h][open] === undefined ? jsonObj[h][open] : parseFloat(jsonObj[h][open]));
                    }
                    yValues[index] = yVal;
                    index = index + 1;

                    //For close
                    yVal = [];
                    var close = series.close;
                    for (var mI = 0; mI < jsonObj.length; mI++) {
                        yVal.push((jsonObj[mI][close] === null || jsonObj[mI][close] === undefined) ? jsonObj[mI][close] : parseFloat(jsonObj[mI][close]));
                    }
                    yValues[index] = yVal;
                }
            }
        }
        if (yNames) {
           
                var yNVal = [];
                for (var yI = 0; yI < jsonObj.length; yI++) {
                    yNVal.push((jsonObj[yI][yNames]) ? parseFloat(jsonObj[yI][yNames]) : jsonObj[yI][yNames]);
                }
                yValues[index] = yNVal;
                index = index + 1;
            

            if (series.type.toLowerCase() == 'bubble') {
                yVal = [];
                var size = series.size;
                for (var b = 0; b < jsonObj.length; b++) {
                    yVal.push(jsonObj[b][size] === null || jsonObj[b][size] === undefined ? jsonObj[b][size] : parseFloat(jsonObj[b][size]));
                }
                yValues[index] = yVal;
            }
        }


        for (var m = 0; m < xdata.length; m++) {
            series.points[m] = { x: xdata[m], X: xdata[m], y: yValues[0][m], YValues: [], visible: true };
            if (series.type.toLowerCase() == 'bubble') {
                series.points[m].YValues.push(yValues[0][m]);
                series.points[m].size = series.points[m].YValues[1] = yValues[1][m];
            }
            else if (series._hiloTypes) {
                series.points[m].high = series.points[m].YValues[0] = yValues[0][m];
                series.points[m].low = series.points[m].YValues[1] = yValues[1][m];
                if (series.type.toLowerCase() != 'hilo' && series.type.toLowerCase() != 'rangecolumn') {
                    series.points[m].open = series.points[m].YValues[2] = yValues[2][m];
                    series.points[m].close = series.points[m].YValues[3] = yValues[3][m];
                }
            }
            else {
                series.points[m].YValues.push(yValues[0][m]);
            }
        }
    },
    bindTo: function (excludeDataUpdate) {
        if (this.model.series) {
            var series = this.model.series;
            if (!this.zoomed && !this.panning) {
                this.setModelProperties();
                for (var i = 0; i < series.length; i++) {
                    if (series[i].visibility == null || series[i].visibility == undefined) {
                        series[i].visibility = 'visible';
                        if (series[i].type) series[i]._hiloTypes = ej.seriesTypes[series[i].type.toLowerCase()].prototype.hiloTypes;
                    }
                    if (!(series[i].points))
                        series[i].points = [];
                    if (series[i].dataSource) {
                        if (series[i].dataSource instanceof ej.DataManager) {
                            series[i].visibility = 'hidden';
                            this._processOData(series[i]);
                        } else if (series[i].dataSource.length > 0) {

                            this._processJsonData(series[i].dataSource, series[i]);

                        }
                    }
                }
            }
            if($(this.svgObject).width()>0)
            this.draw(excludeDataUpdate);
        }



    },

    chartResize: function () {
        var chart = this;
        var $svgObj = $(chart.svgObject);
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            //width calculation
            if (chart.model.size.width && chart.model.size.width.indexOf("%") != -1) {
                var chartWidth = chart.model.size.width;
                var containerWidth = $(chart.element).width();
                var width = (containerWidth / 100) * parseInt(chartWidth);
                $svgObj.width(width);
            }
            else
                $svgObj.width($(chart.element).width());
            //height calculation
            if (chart.model.size.height && chart.model.size.height.indexOf("%") != -1) {
                var chartHeight = chart.model.size.height;
                var containerHeight= $(chart.element).height();
                var height = (containerHeight / 100) * parseInt(chartHeight);
                $svgObj.height(height);
            }
            else
                $svgObj.height($(chart.element).height());
            if ($(chart.svgObject).width() > 0) {
                $(chart.svgObject).empty();
                $('#template_group_' + chart._id).remove();
                chart.disableAnimation();
                for (var i = 0; chart.model.axes && i < chart.model.axes.length; i++)
                    chart.model.axes[i].desiredIntervals = null;
                for (var j = 0; j < chart.model.series.length; j++)
                    chart.model.series[j].regionAdded = false;
                chart.draw();
                if (chart.zoomed)
                    chart._enableZoomingButtons();
                chart.enableAnimation();
            }
        }, 500);

    },
    isDevice: function () {
        return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        // comment above line temporary. Due to the below code event wont bind for tablet device
        //  return (/mobile|android|kindle/i.test(navigator.userAgent.toLowerCase()));
    },
    bindEvents: function () {
	    var matched = jQuery.uaMatch(navigator.userAgent);
		
	    this._on($(this.svgObject), "touchstart", this.chartMouseDown);
        this._on(this.element, "touchmove", this.chartMouseMove);
        this._on($(document), "touchend", this.chartMouseUp);
		this._on(this.element, 'touchleave', this.chartMouseLeave);
		
        this._on($(this.svgObject), "mousedown", this.chartMouseDown);
        this._on(this.element, 'mouseleave', this.chartMouseLeave);
        this._on($(document), "mouseup", this.chartMouseUp);
		
        var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
        if (this.isDevice() && !isIE11 && !this.vmlRendering) {
            if (window.navigator.msPointerEnabled) {
                this._on(this.element, 'MSPointerMove', this.chartMouseMove);
                this._on(this.element, 'MSPointerDown', this.chartMouseDown);
			    this._on(this.element, 'MSPointerOut', this.chartMouseLeave);
                this._on($(document), "MSPointerUp", this.chartMouseUp);
			    this._on($(this.svgObject), 'click', this.chartMouseClick);
                if (this.model.zooming.enable || this.model.crosshair.visible)
				$(this.svgObject).css('-ms-touch-action', 'none');
            }
            else {
                this._on(this.element, 'touchmove', this.chartTouchMove);
                this._on($(this.svgObject), 'touchstart', this.chartTouchClick);
            }
        }
        else {
            this._on(this.element, 'mousemove', this.chartMouseMove);
            this._on($(this.svgObject), 'click', this.chartMouseClick);
        }
        if (this.model.canResize) {
            if (!this.isDevice() || window.navigator.msPointerEnabled)
                this._on($(window), "resize", this.chartResize);
            else
                this._on($(window), "orientationchange", this.chartResize);
        }
        
        var eventName = matched.browser.toLowerCase() == "mozilla" ? "DOMMouseScroll" : "mousewheel";
        this._on(this.element, eventName, this.chartMouseWheel);

    },
    calZoomFactors: function (cumulativeScale, origin, currentZoomFactor, currentZoomPos) {
        var calcZoomFactorVal, calcZoomPosition;
        if (cumulativeScale == 1) {
            calcZoomFactorVal = 1;
            calcZoomPosition = 0;
        } else {
            calcZoomFactorVal = ej.EjSvgRender.utils._minMax(1 / cumulativeScale, 0, 1);
            calcZoomPosition = currentZoomPos + ((currentZoomFactor - calcZoomFactorVal) * origin);
        }
        return { zoomMFactor: calcZoomFactorVal, zoomMPosition: calcZoomPosition };
    },
    doMouseWheelZoom: function (cumulativeScale, origin, axis) {
        if (cumulativeScale >= 1) {
            var calZoomVal = this.calZoomFactors(cumulativeScale, origin, axis.zoomFactor, axis.zoomPosition);
            //calcZoomPos = Math.Round(calcZoomPos, 2);
            if (axis.zoomPosition != calZoomVal.zoomMPosition) {
                this.zoomed = true;
                axis.zoomPosition = calZoomVal.zoomMPosition;
                axis.zoomFactor = (calZoomVal.zoomMPosition + calZoomVal.zoomMFactor) > 1 ? (1 - calZoomVal.zoomMPosition) : calZoomVal.zoomMFactor;
                return true;
            }
        }

        return false;

    },
    enableAnimation: function () {
        for (var m = 0; m < this.model.series.length; m++) {
            var series = this.model.series[m];
            series.enableAnimation = this.serAnimation[m];
        }
    },
    disableAnimation: function () {
        var chart = this;
        for (var m = 0; m < chart.model.series.length; m++) {
            chart.model.series[m].enableAnimation = false;

        }
    },
    _removeTrackBall: function () {
        var id = "#" + this.svgObject.id;
		 $(document).find("#measureTex").remove();
		 if (this.chartCross.visible) {
		     // Visibility is set to hidden
		     var element = $(this.svgObject).find(id + "_AxisCrossToolTip");
        this.svgRenderer._setAttr($(element), { "visibility": 'hidden' });
		     element = $(this.svgObject).find(id + "_CrosshairVertical");
        this.svgRenderer._setAttr($(element), { "d": 'M 0 0' });
		     element = $(this.svgObject).find(id + "_CrosshairHorizontal");
        this.svgRenderer._setAttr($(element), { "d": 'M 0 0' });
		     
        element = $(this.svgObject).find(id + "_TrackAxisToolTip");
        this.svgRenderer._setAttr($(element), { "visibility": 'hidden' });
        element = $(this.svgObject).find(id + "_Tracker");
        this.svgRenderer._setAttr($(element), { "d": 'M 0 0' });
        element = $(this.svgObject).find('[id*="_TrackToolTip"]');
        this.svgRenderer._setAttr($(element), { "visibility": 'hidden' });
        element = $(this.svgObject).find('[id*="_TrackToolTip"]').children();
        this.svgRenderer._setAttr($(element), { "visibility": 'hidden' });
        element = $(this.svgObject).find('[id*="_trackSymbol_"]');
        this.svgRenderer._setAttr($(element), { "visibility": 'hidden' });
		}
    },
    enableTrackBall: function () {
        this.model.crosshair.visible = this.chartCross.visible;
        this.model.crosshair.type = this.chartCross.mArea;
    },
    disableTrackBall: function () {

        this.model.crosshair.visible = false;
        
        this._removeTrackBall();
    },
    _enableZoomingButtons: function () {
        var chart = this;
        if ($(chart.svgObject).find("#" + this.svgObject.id + '_ResetZoom').length == 0) {
            this.resetZoomButton();
            this.panButton();
            this.zoomButton();
        }
    },
    chartMouseWheel: function (e) {
        if (this.model.zooming.enableMouseWheel && this.model.AreaType == "cartesianaxes") {
            var chart = this;       
            var chartZoomed;
            this.zoomed = false;
            var canUpdate = false;
            var id = "#" + chart.svgObject.id;
            var matched = jQuery.uaMatch(navigator.userAgent);
            var direction = matched.browser.toLowerCase() == "mozilla" ? (-(e.originalEvent.detail) / 3 > 0 ? 1 : -1) : ((e.originalEvent.wheelDelta / 120) > 0 ? 1 : -1);
            for (var i = 0; i < this.model.axes.length; i++) {
                var axis = this.model.axes[i];
                if ((axis.orientation.toLowerCase() == "vertical" && (chart.model.zooming.type.toLowerCase() == "y" || chart.model.zooming.type.trim().toLowerCase() == "x,y")) || (axis.orientation.toLowerCase() == "horizontal" && (chart.model.zooming.type.toLowerCase() == "x" || chart.model.zooming.type.trim().toLowerCase() == "x,y"))) {

                    var currentScale = Math.max(1 / ej.EjSvgRender.utils._minMax(axis.zoomFactor, 0, 1), 1);
                    var cumulativeScale = Math.max(currentScale + (0.25 * direction), 1);
                    canUpdate = canUpdate | chart.doMouseWheelZoom(cumulativeScale, 0.5, axis);
                }
                if (axis.zoomFactor != 1 && axis.zoomPosition != 0)
                    chartZoomed = true;
            }

            this.disableAnimation();

            this.disableTrackBall();
            if (canUpdate) {
                this.zoomed = true;
                chart.redraw();
              }
            
            this._enableZoomingButtons();
            this.mouseWheelCoords = { x: e.originalEvent.pageX, y: e.originalEvent.pageY };
            if (!chartZoomed) {
                $(chart.svgObject).find(id + '_ResetZoom,' + id + '_PanBtn,' + id + '_ZoomBtn').remove();
                this.enableAnimation();
                this.panning = false;
            }
			var matched = jQuery.uaMatch(navigator.userAgent);
            if (e.preventDefault && matched.browser == 'chrome' && this.model.zooming.enable)
                e.preventDefault();
            e.returnValue = false;
        }

        $(".tooltipDiv").remove();
    },
    getLegendData: function (evt) {
        var mouseMoveCords = this.calMousePosition(evt);
        this.mousemoveX = mouseMoveCords.X;
        this.mousemoveY = mouseMoveCords.Y;

        {
            var currentX = this.mousemoveX;
            var currentY = this.mousemoveY;
            var region;
            if (!ej.util.isNullOrUndefined(evt.target.id) && this.svgRenderer._getAttrVal($(evt.target).parents(':eq(1)'), 'id') == this.svgObject.id + '_Legend') {
                $.each(this.model.legendRegion, function (index, regionItem) {

                    if ((currentX >= regionItem.Bounds.LegendBound.X + regionItem.Bounds.ItemBound.X) && (currentX <= regionItem.Bounds.LegendBound.X + regionItem.Bounds.ItemBound.X + regionItem.LegendItem.Bounds.Width)) {
                        if ((currentY >= regionItem.Bounds.LegendBound.Y + regionItem.Bounds.ItemBound.Y - (regionItem.LegendItem.Bounds.Height / 2)) && (currentY <= regionItem.Bounds.LegendBound.Y + regionItem.Bounds.ItemBound.Y + regionItem.LegendItem.Bounds.Height))
                            region = regionItem;
                    }
                });
                if (!ej.util.isNullOrUndefined(region)) {
                    return { legendItem: region, series: this.model._visibleSeries[region.LegendItem.SeriesIndex] };
                }
            }

        }
        return false;
    },



    GetSeriesPoint: function (evt) {
        var mouseX;
        var mouseY;
        var currentX = this.mousemoveX;
        var currentY = this.mousemoveY;
        var region;
        var chartObj=this;
        var x = (this.model.AreaType == 'polaraxes') ? 0 : this.model.m_AreaBounds.X;
        var y = (this.model.AreaType == 'polaraxes') ? 0 : this.model.m_AreaBounds.Y;
        var width = (this.model.AreaType == 'polaraxes') ? $(this.svgObject).width() : this.model.m_AreaBounds.Width;
        var height = (this.model.AreaType == 'polaraxes') ? $(this.svgObject).height() : this.model.m_AreaBounds.Height;

        if ((this.model.AreaType == 'cartesianaxes' || this.model.AreaType == 'polaraxes')) {
          
            if (currentX > x && currentX < (x + width) && currentY > y && currentY < (y + height)) {
                $.each(this.model.chartRegions, function (index, regionItem) {
                    if (chartObj.model._visibleSeries[regionItem.SeriesIndex].drawType.toLowerCase() == 'column' && evt.target) {
                        var nodeName = $(evt.target)[0].nodeName;
                        if ((nodeName == "path" || nodeName == "shape") && $($(evt.target).parent())[0].id == chartObj.svgObject.id + '_SeriesGroup' + '_' + regionItem.SeriesIndex) {
                            index = parseInt(chartObj.svgRenderer._getAttrVal($(evt.target)[0], "pointIndex"));
                            regionItem = { Region: { PointIndex: index }, SeriesIndex: regionItem.SeriesIndex, type:regionItem.type };
                            region = regionItem;
                            return false;
                        }
                    }
                    else {
                        if ((((currentX >= regionItem.Region.Bounds.X) && (currentX <= (regionItem.Region.Bounds.X + (regionItem.Region.Bounds.Width))))) && ((currentY > regionItem.Region.Bounds.Y) && (currentY < (regionItem.Region.Bounds.Y) + (regionItem.Region.Bounds.Height)))) {
                            region = regionItem;
                            return false;
                        }
                    }

                });
            }
            if (region) {
                return { region: region, location: { x: currentX, y: currentY} };
            }
        }

        else {
            var chartObj = this;
            var distanceFromCenter;
            var regionValue;
            if (chartObj.model.chartRegions.length > 0 && chartObj.model.chartRegions[0].Series.type.toLowerCase() == "pyramid") {
                var nodeName = $(evt.target)[0].nodeName;
                if ((nodeName == "path" || nodeName == "shape") && $($(evt.target).parent())[0].id == chartObj.svgObject.id + '_SeriesGroup' + '_' + chartObj.model.chartRegions[0].SeriesIndex) {
                    regionValue = chartObj.model.chartRegions[0];
                    index = $(evt.target)[0].id.match(/(\d+)/g);
                    index = parseInt(index[index.length - 1]);
                    regionValue.Region.PointIndex = index;
                    var pointData = {};
                    pointData.pointIndex = index;
                    region = { region: regionValue, pointData: pointData, location: { x: currentX, y: currentY} };
                    return region;
                }
            }
            else {
                // ReSharper disable DuplicatingLocalDeclaration
                $.each(chartObj.model.chartRegions, function (regionIndex, regionValue) {
                    // ReSharper restore DuplicatingLocalDeclaration
                    var chartStartAngle = -.5 * Math.PI;
                    var seriesData = regionValue.SeriesData; var regionData = regionValue.Region;
                    var innerRadius = (chartObj.model._visibleSeries[regionValue.SeriesIndex].type.toLowerCase() == 'doughnut') ? seriesData.DRadius : 0;
                    var fromCenterX;
                    var fromCenterY;
                    fromCenterX = (currentX) - (seriesData.CenterX);
                    fromCenterY = (currentY) - (seriesData.CenterY);
                    var series = chartObj.model._visibleSeries[regionValue.SeriesIndex];
                    var arcAngle = (series.startAngle) ? 2 * Math.PI * chartObj.model.itemCurrentXPos : 0;
                    var clickAngle = (Math.atan2(fromCenterY, fromCenterX) - chartStartAngle - arcAngle);
                    if (clickAngle < 0) clickAngle = 2 * Math.PI + clickAngle;

                    pointData = [];
                    for (var i = 0; i < regionData.length; i++) {
                        var startAngle = regionData[i].StartAngle - arcAngle;
                        var endAngle = regionData[i].EndAngle - arcAngle;
                        if (clickAngle >= startAngle && clickAngle <= endAngle) {
                            pointData.push(regionData[i]);
                            break;
                        }
                    }
                    if (pointData.length > 0) {
                        var isExploded = (series.explodeAll || (series.explodeIndex == pointData[0].PointIndex));
                        if (isExploded) {

                            var fromCenterX1 = currentX - pointData[0].StartX;
                            var fromCenterY1 = currentY - pointData[0].StartY;

                            clickAngle = Math.atan2(fromCenterY1, fromCenterX1) - chartStartAngle;
                            if (clickAngle < 0) clickAngle = 2 * Math.PI + clickAngle;
                            pointData = [];
                            for (var j = 0; j < regionData.length; j++) {
                                if (clickAngle >= regionData[j].StartAngle && clickAngle <= regionData[j].EndAngle)
                                    pointData.push(regionData[j]);
                            }
                            if (pointData.length > 0) {

                                distanceFromCenter = Math.sqrt(Math.pow(Math.abs(fromCenterX1), 2) + Math.pow(Math.abs(fromCenterY1), 2));
                                if (distanceFromCenter <= seriesData.Radius && distanceFromCenter > innerRadius) {
                                    regionData.PointIndex = pointData[0].PointIndex;
                                    region = { region: regionValue, pointData: pointData, location: { x: currentX, y: currentY} };
                                }
                            }
                        }
                        else {
                            distanceFromCenter = Math.sqrt(Math.pow(Math.abs(fromCenterX), 2) + Math.pow(Math.abs(fromCenterY), 2));
                            if (distanceFromCenter <= seriesData.Radius && distanceFromCenter > innerRadius) {
                                regionData.PointIndex = pointData[0].PointIndex;
                                region = { region: regionValue, pointData: pointData, location: { x: currentX, y: currentY} };
                            }
                        }
                    }

                });

                return region;
            }
        }
    },

    mousePosition: function (evt) {
         if (!ej.util.isNullOrUndefined(evt.pageX) && evt.pageX>0)
            return { x: evt.pageX, y: evt.pageY };
        else if (!ej.util.isNullOrUndefined(evt.originalEvent.pageX) && evt.originalEvent.pageX>0)
            return { x: evt.originalEvent.pageX, y: evt.originalEvent.pageY };
        else if (!ej.util.isNullOrUndefined(evt.originalEvent.changedTouches[0].pageX) && evt.originalEvent.changedTouches[0].pageX >0)
            return { x: evt.originalEvent.changedTouches[0].pageX, y: evt.originalEvent.changedTouches[0].pageY };
    },


    calMousePosition: function (e) {
        var matched = jQuery.uaMatch(navigator.userAgent);
        var mouseposition = this.mousePosition(e);
        e.pageX = mouseposition.x;
        e.pageY = mouseposition.y;
        var mouseX, mouseY;
        var browser = matched.browser.toLowerCase();
        if (browser == "webkit" || browser == "mozilla") {
            mouseX = (e.pageX) - $(this.svgObject).parent().offset().left;
            mouseY = (e.pageY) - $(this.svgObject).parent().offset().top;
        } else {
            mouseX = (e.pageX) - $(this.svgObject).offset().left;
            mouseY = (e.pageY) - $(this.svgObject).offset().top;
        }

        return { X: mouseX, Y: mouseY };

    },

    cancelEvent: function (e) {
        e.stopPropagation();
        var matched = jQuery.uaMatch(navigator.userAgent);
        if(matched.browser == 'chrome' && (this.model.zooming.enable||this.model.crosshair.visible) ){
            e.preventDefault();
        }
        e.returnValue = false;
        e.cancelBubble = true;
        return false;
    },
    resetZoom: function () {
        var chartobj = this;
        var id = "#" + chartobj.svgObject.id;
        if (chartobj.zoomed) {
            $.each(this.model.axes, function (index, axis) {
                axis.zoomFactor = 1;
                axis.zoomPosition = 0;
            });
            $(chartobj.svgObject).find(id + '_ResetZoom,' + id + '_PanBtn,' + id + '_ZoomBtn').remove();
            chartobj.zoomed = false;
            chartobj.panning = false;
            chartobj.redraw();
            chartobj.enableAnimation();
            chartobj.enableTrackBall();
            chartobj.svgRenderer._setAttr($(chartobj.svgObject).find(id + "_XAxis," + id + "_ChartArea," + id + "_YAxis," + id + "_SeriesCollection"), { "cursor": "default" });
        }
    },
    startZoom: function () {
        var chartObj = this;
        var id = "#" + chartObj.svgObject.id;
        var iconColor = this.model.theme.toLowerCase().indexOf("dark") >= 0 ? "#000000" : " #FFFFFF";
        chartObj.svgRenderer._setAttr($(id + '_ZoomBtn'), { 'selected': 'true' });
        chartObj.svgRenderer._setAttr($(id + '_ZoomPath'), { "fill": "#14B9FF" });
        chartObj.svgRenderer._setAttr($(id + '_ZoomIcon'), { "fill": '#FFFFFF' });
        chartObj.svgRenderer._setAttr($(id + '_PanPath'), { "fill": '#B7B7B7' });
        chartObj.svgRenderer._setAttr($(id + '_panIcon'), { "fill": iconColor });
        this._cursorToDefault();
        chartObj.panning = false;
        chartObj.enableTrackBall();
    },
    startPan: function () {
        var chartObj = this;
        var id = "#" + chartObj.svgObject.id;
        var iconColor = this.model.theme.toLowerCase().indexOf("dark") >= 0 ? "#000000" : " #FFFFFF";
        chartObj.svgRenderer._setAttr($(id + '_ZoomBtn'), { 'selected': 'false' });
        chartObj.svgRenderer._setAttr($(id + '_PanBtn'), { 'selected': 'true' });
        chartObj.svgRenderer._setAttr($(id + '_ZoomPath'), { "fill": "#B7B7B7" });
        chartObj.svgRenderer._setAttr($(id + '_ZoomIcon'), { "fill": iconColor });
        chartObj.svgRenderer._setAttr($(id + '_PanPath'), { "fill": '#14B9FF' });
        chartObj.svgRenderer._setAttr($(id + '_panIcon'), { "fill": '#FFFFFF' });
        this._cursorToPointer();
        chartObj.panning = true;
        chartObj.disableTrackBall();

    },
    zoomButton: function () {
        var padding = 20;
        var transX = this.model.m_AreaBounds.X + (this.model.m_AreaBounds.Width - (3 * 32) - padding); //32 path bouding box for pan,reset, zoom button 
        var transY = (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) + (this.model.elementSpacing - (this.model.m_AreaBounds.Height));
        var iconColor = this.model.theme.toLowerCase().indexOf("dark") >= 0 ? "#000000" : " #FFFFFF";
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_ZoomBtn', 'transform': 'translate(' + transX + ',' + transY + ')', 'selected': 'true' });

        var pathOptions = {
            'id': this.svgObject.id + '_ZoomPath',
            'd': "M32,27c0,2.75-2.25,5-5,5H5c-2.75,0-5-2.25-5-5V5c0-2.75,2.25-5,5-5h22c2.75,0,5,2.25,5,5V27z",
            'fill': this.panning ? '#b7b7b7' : '#14B9FF'
        };

        this.svgRenderer.drawPath(pathOptions, gEle);

        var options = {
            'id': this.svgObject.id + '_ZoomIcon',
            'd': "M26.101,22.893l-6.605-6.174c1.414-2.781,0.897-6.267-1.496-8.504c-2.901-2.711-7.448-2.56-10.161,0.341    c-2.712,2.9-2.56,7.45,0.341,10.163c2.426,2.266,6,2.523,8.694,0.853l6.579,6.151L26.101,22.893z M10.186,16.571    c-1.715-1.604-1.805-4.293-0.203-6.009c1.605-1.715,4.295-1.805,6.009-0.201c1.715,1.603,1.805,4.293,0.202,6.007    C14.59,18.084,11.901,18.175,10.186,16.571",
            'fill': this.panning ? iconColor : '#FFFFFF'
        };
        this.svgRenderer.drawPath(options, gEle);
        this.svgRenderer.append(gEle, this.svgObject);
        
		this._on($(gEle), "touchstart click", this.startZoom);
       
    },
    panButton: function () {

        var padding = 15;
        var transX = this.model.m_AreaBounds.X + (this.model.m_AreaBounds.Width - (2 * 32) - padding); //32 path bounding box for pan and resetzoom button
        var transY = (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) + (this.model.elementSpacing - (this.model.m_AreaBounds.Height));
        var iconColor = this.model.theme.toLowerCase().indexOf("dark") >= 0 ? "#000000" : " #FFFFFF";
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_PanBtn', 'transform': 'translate(' + transX + ',' + transY + ')', 'selected': 'false' });

        var pathOptions = {
            'id': this.svgObject.id + '_PanPath',
            'd': "M 32 27 c 0 2.75 -2.25 5 -5 5 H 5 c -2.75 0 -5 -2.25 -5 -5 V 5 c 0 -2.75 2.25 -5 5 -5 h 22 c 2.75 0 5 2.25 5 5 V 27 Z",
            'fill': !this.panning ? '#b7b7b7' : '#14B9FF'
        };

        this.svgRenderer.drawPath(pathOptions, gEle);

        var options = {
            'id': this.svgObject.id + '_panIcon',
            'points': "26.105,16 21.053,12.211 21.053,14.737 17.263,14.737 17.263,10.947 19.834,10.947 16.044,5.895 12.255,10.947 14.737,10.947 14.737,14.737 10.947,14.737 10.947,12.211 5.895,16 10.947,19.789 10.947,17.263 14.737,17.263 14.737,21.053 12.255,21.053 16.044,26.105 19.834,21.053 17.263,21.053 17.263,17.263 21.053,17.263 21.053,19.789",
            'fill': !this.panning ? iconColor : '#FFFFFF'
        };
        this.svgRenderer.drawPolygon(options, gEle);
        this.svgRenderer.append(gEle, this.svgObject);
		
	    this._on($(gEle), "touchstart click", this.startPan);
       

    },
    resetZoomButton: function () {

        var padding = 10;
        var transX = this.model.m_AreaBounds.X + (this.model.m_AreaBounds.Width - (32 + padding)); //32 path bouding box
        var transY = (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) + (this.model.elementSpacing - (this.model.m_AreaBounds.Height));
        var gEle = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_ResetZoom', 'transform': 'translate(' + transX + ',' + transY + ')', 'selected': 'false' });
        var iconColor = this.model.theme.toLowerCase().indexOf("dark") >= 0 ? "#000000" : " #FFFFFF";
        var options = {
            'id': this.svgObject.id + '_ResetZoomPath',
            'd': "M 32 27 c 0 2.75 -2.25 5 -5 5 H 5 c -2.75 0 -5 -2.25 -5 -5 V 5 c 0 -2.75 2.25 -5 5 -5 h 22 c 2.75 0 5 2.25 5 5 V 27 Z",
            'fill': '#b7b7b7'
        };
        this.svgRenderer.drawPath(options, gEle);

        var ptOptions = {
            'id': this.svgObject.id + '_ptIcon',
            'points': "11.895,18.398 8.061,22.23 5.796,19.967 5.796,26.283 12.112,26.283 9.848,24.018 13.682,20.186",
            'fill': iconColor
        };

        this.svgRenderer.drawPolygon(ptOptions, gEle);
        var pt1Options = {
            'id': this.svgObject.id + '_ptIcon1',
            'points': "19.691,6.072 21.955,8.337 18.121,12.172 19.908,13.959 23.742,10.123 26.007,12.389 26.007,6.072",
            'fill': iconColor
        };

        this.svgRenderer.drawPolygon(pt1Options, gEle);

        var pt2Options = {
            'id': this.svgObject.id + '_ptIcon2',
            'points': "11.895,13.958 13.682,12.172 9.848,8.337 12.112,6.072 5.796,6.072 5.796,12.389 8.061,10.123",
            'fill': iconColor
        };

        this.svgRenderer.drawPolygon(pt2Options, gEle);

        var pt3Options = {
            'id': this.svgObject.id + '_ptIcon3',
            'points': "19.908,18.396 18.121,20.186 21.955,24.018 19.691,26.283 26.007,26.283 26.007,19.967 23.741,22.23",
            'fill': iconColor
        };

        this.svgRenderer.drawPolygon(pt3Options, gEle);

        this.svgRenderer.append(gEle, this.svgObject);
		
        this._on($(gEle), "touchstart click", this.resetZoom);
       

    },

    doZoom: function (zoomRect, zoomRectWidth, zoomRectHeight) {
        var chart = this;
        $("#" + this.svgObject.id + "_ZoomArea").remove();
        this.drag = false;
        this.zoomed = true;
        for (var k = 0; k < this.model.axes.length; k++) {
            var axis = this.model.axes[k];
            var previousZoomFactor = axis.zoomFactor;
            var previousZoomPosition = axis.zoomPosition;
            if (axis.orientation.toLowerCase() == "horizontal") {
                axis.zoomFactor = chart.model.zooming.type.toLowerCase() != "y"
                    ? previousZoomFactor * (zoomRectWidth / (chart.model.m_AreaBounds.Width)) : 1;
                axis.zoomPosition = chart.model.zooming.type.toLowerCase() != "y"
                    ? previousZoomPosition + Math.abs((parseFloat(chart.svgRenderer._getAttrVal($(zoomRect), "x")) - chart.model.m_AreaBounds.X) / (chart.model.m_AreaBounds.Width)) * previousZoomFactor : 0;
                if (parseFloat(axis.zoomFactor.toFixed(3)) <= 0.001) {
                    axis.zoomFactor = previousZoomFactor;
                    axis.zoomPosition = previousZoomPosition;

                }
            } else {
                axis.zoomFactor = chart.model.zooming.type.toLowerCase() != "x"
                    ? previousZoomFactor * zoomRectHeight / chart.model.m_AreaBounds.Height : 1;
                axis.zoomPosition = chart.model.zooming.type.toLowerCase() != "x"
                    ? previousZoomPosition + (1 - Math.abs((zoomRectHeight + (parseFloat(chart.svgRenderer._getAttrVal($(zoomRect), "y")) - chart.model.m_AreaBounds.Y)) / (chart.model.m_AreaBounds.Height))) * previousZoomFactor : 0;
                if (parseFloat(axis.zoomFactor.toFixed(3)) <= 0.001) {
                    axis.zoomFactor = previousZoomFactor;
                    axis.zoomPosition = previousZoomPosition;

                }
            }
        }

        this.disableAnimation();
        this.redraw(true);

        this._enableZoomingButtons();
    },
    _cursorToDefault: function () {
        var id = "#" + this.svgObject.id;
        this.svgRenderer._setAttr($(this.svgObject).find(id + "_XAxis," + id + "_ChartArea," + id + "_YAxis," + id + "_SeriesCollection," + id + "_StriplineBehind," + id + '_StriplineOver'), { "cursor": "default" });
    },
    _cursorToPointer: function () {
        var id = "#" + this.svgObject.id;
        this.svgRenderer._setAttr($(this.svgObject).find(id + "_XAxis," + id + "_ChartArea," + id + "_YAxis," + id + "_SeriesCollection," + id + "_StriplineBehind," + id + '_StriplineOver'), { "cursor": "pointer" });
    },
    chartMouseUp: function (evt) {
	   // this.cancelEvent(evt);
        var chart = this;
        if (this.model.zooming.enable && this.model.AreaType == "cartesianaxes") {
            var zoomRect = $("#" + this.svgObject.id + "_ZoomArea");
            var $zoomRect = $(zoomRect);
            var zoomRectWidth = parseFloat(this.svgRenderer._getAttrVal($zoomRect, "width"));
            var zoomRectHeight = parseFloat(this.svgRenderer._getAttrVal($zoomRect, "height"));
            if (zoomRectWidth > 0 && zoomRectHeight > 0) {
                chart.doZoom(zoomRect, zoomRectWidth, zoomRectHeight);
            }
            else
                this.drag = false;
            if (!chart.panning)
                this.enableTrackBall();
        }
       // Panning is done on mouse up for other devices and when deferredZoom is set to true
        var id = this.svgObject.id;
        var parentId = ej.util.isNullOrUndefined(evt.target.parentNode) ? "" : evt.target.parentNode.id;

        //condition to find the buttons
        if (parentId == id + "_ResetZoom" || parentId == id + '_ZoomBtn')
            this.panning = false;

        //Panning for other devices
        if ((this.isDevice()  || this.model.zooming.enableDeferredZoom) && this.panning && this.doPan && this.model.AreaType == "cartesianaxes") {
            var oDelta;
            oDelta = {
                'x': this.oPreviousCoords.x - this.currentPageX,
                'y': this.oPreviousCoords.y - this.currentPageY
            };

            this.oPreviousCoords = {
                'x': this.currentPageX,
                'y': this.currentPageY
            };
            $.each(this.model.axes, function (index, axis) {
                var currentScale = Math.max(1 / ej.EjSvgRender.utils._minMax(axis.zoomFactor, 0, 1), 1);
                chart.translate(axis, (oDelta.x), (oDelta.y), currentScale);
            });

            this.redraw();
            this._cursorToPointer();
            this._enableZoomingButtons();

        }
        
        if (this.doPan)
            this.doPan = false;
    },

    chartMouseDown: function (e) {
	     this.cancelEvent(e);
        if (!this.svgRenderer.vmlNamespace) {
            this.oPreviousCoords = {};
            if (this.svgRenderer._getAttrVal($(e.target).parent(), "id") != this.svgObject.id + "_ResetZoom" && this.svgRenderer._getAttrVal($(e.target).parent(), "id") != this.svgObject.id + "_PanBtn" && this.model.zooming.enable && !(this.panning) && this.model.AreaType == "cartesianaxes") {
                var mouseDownCords = this.calMousePosition(e);
                this.mouseDownX = mouseDownCords.X;
                this.mouseDownY = mouseDownCords.Y;
                if (this.mouseDownX >= this.model.m_AreaBounds.X && this.mouseDownX < (this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width) && this.mouseDownY < (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) && this.mouseDownY >= this.model.m_AreaBounds.Y) {
                    this.drag = true;
                    this.disableTrackBall();
                }


            }
            else if (this.panning) {
                var mousePanCords = this.calMousePosition(e);
                this.mousePanX = mousePanCords.X;
                this.mousePanY = mousePanCords.Y;
                if (this.mousePanX >= this.model.m_AreaBounds.X && this.mousePanX < (this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width) && this.mousePanY < (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) && this.mousePanY >= this.model.m_AreaBounds.Y) {
                    this.doPan = true;
                    this.oPreviousCoords = {
                        'x': e.pageX,
                        'y': e.pageY
                    };
                }
            }


        }
    },
    chartMouseLeave: function (evt) {
        this.cancelEvent(evt);
        // Changes the visibility to hidden
        $("#" + this.svgObject.id).find("#" + this.svgObject.id + "_TrackToolTip").attr('visibility','hidden');
        if (!($(".tooltipDiv").hasClass(this.svgObject.id)))
            $(".tooltipDiv").remove();
        this._removeTrackBall();
        
    },
    chartTouchClick: function (evt) {
	    this.cancelEvent(evt);
         evt = evt.originalEvent.touches[0];
        this._doClick(evt);
    },
    _doClick: function (evt) {
        var seriesIndex;
        var chartSeries;
        for (var i = 0; i < this.model._visibleSeries.length; i++) {
            seriesIndex = i;
            chartSeries = this.model._visibleSeries[i];
            if (this.model.AreaType == "cartesianaxes" && chartSeries.visibility.toLowerCase() == 'visible' && chartSeries.type.toLowerCase() !== "scatter" && chartSeries.type.toLowerCase() !== "bubble" && chartSeries.type.toLowerCase() !== "column" && chartSeries.type.toLowerCase() !== "bar" && chartSeries.type.toLowerCase() !== "stackingbar" && chartSeries.type.toLowerCase() !== "stackingcolumn" && !chartSeries._hiloTypes) {
                var serY = [];
                var serX = [];
                var location = null;
                var mouseMoveCords = this.calMousePosition(evt);
                this.mousemoveX = mouseMoveCords.X;
                this.mousemoveY = mouseMoveCords.Y;
                var closestXyPoint = this.getClosesPointXY(serX, serY, chartSeries, this.mousemoveX, this.mousemoveY);
                if (!ej.util.isNullOrUndefined(closestXyPoint.point)) {
                    var commonPointEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                    commonPointEventArgs.data = { location: {x: this.mousemoveX, y: this.mousemoveY}, region: { SeriesIndex: i ,Region: { PointIndex: closestXyPoint.index } } };
                    this._trigger("pointRegionClick", commonPointEventArgs);
                }
            }
        }
        var data = this.GetSeriesPoint(evt);
        if (data) {        
           var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
           commonEventArgs.data = data;
           this._trigger("pointRegionClick", commonEventArgs); 
        }
        var legenddata = this.getLegendData(evt);
        if (legenddata) {
            $('#template_group_' + this._id).remove();
            var commonEventArgsCommonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgsCommonEventArgs.data = legenddata;
            this._trigger("legendItemClick", commonEventArgsCommonEventArgs);
            if (this.model.AreaType != "none") {
                legenddata.series.visibility = legenddata.series.visibility.toLowerCase() === 'visible' ? 'hidden' : 'visible';
            }
            else {
                var point = legenddata.series.points[legenddata.legendItem.LegendItem.PointIndex].visible;
                legenddata.series.points[legenddata.legendItem.LegendItem.PointIndex].visible = point == true ? false : true;
            }
                $(this.svgObject).empty();
                for (var j = 0; j < this.model.series.length; j++)
                    this.model.series[j].regionAdded = false;
                this.model.legendCollapsed = true;                
                this.disableAnimation();
                this.draw();
                this.enableAnimation();
                if (this.model.AreaType != "none" && this.zoomed)
                    this._enableZoomingButtons();
            
        }
    },
    chartMouseClick: function (evt) {
	
	this.cancelEvent(evt);
        if (window.navigator.msPointerEnabled) {
            evt = evt.originalEvent;
        }
        this._doClick(evt);
    },

    drawTrackerSymbol: function (series, seriesIndex, ptIndex, tracker, point) {

        var type = series.type.toLowerCase();
        var chartSeriesObj = new ej.seriesTypes[type]();

        var trans = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.model.requireInvertedAxes);
        if (this.model.AreaType != "none") {
            if (this.model.AreaType == 'cartesianaxes' && ((point.X + trans.x) <= (trans.x + trans.width)) && ((point.X + trans.x) >= trans.x || point.X == 0) &&
                 (Math.abs(point.Y + trans.y) >= (trans.y) || point.Y == 0)) {
                if (this.model.crosshair.visible || type == "bubble" || type == "scatter") {
                    if ($(this.svgObject).find("#" + this.svgObject.id + '_TrackSymbolClipRect' + '_' + seriesIndex).length == 0 && !this.vmlRendering) {
                        var clipRectOptions = {
                            'id': this.svgObject.id + '_TrackSymbolClipRect' + '_' + seriesIndex,
                            'x': 0,
                            'y': 0,
                            'width': series.xAxis.width,
                            'height': series.yAxis.height,
                            'fill': 'white',
                            'stroke-width': 1,
                            'stroke': 'Gray'
                    };

                    this.svgRenderer.drawClipPath(clipRectOptions, this.svgObject);
                    }
                    $('#' + this.svgObject.id + '_TrackSymbol' + '_' + seriesIndex).remove();
                    var transSymbolOptions = { 'clip-path': 'url(#' + this.svgObject.id + '_TrackSymbolClipRect' + '_' + seriesIndex +')', 'id': this.svgObject.id + '_TrackSymbol' + '_' + seriesIndex, 'transform': 'translate(' + trans.x + ',' + trans.y + ')' };
                    this.gTrackerEle = this.svgRenderer.createGroup(transSymbolOptions);
                }
            }
            else {
                var transSymbolOptions = { 'id': this.svgObject.id + '_TrackSymbol' + '_' + seriesIndex };
                this.gTrackerEle = this.svgRenderer.createGroup(transSymbolOptions);
            }

            if (this.model.crosshair.marker.visible)
                chartSeriesObj.drawSymbol(seriesIndex, series, ptIndex, (point.X), (point.Y), this, tracker);
            this.svgRenderer.append(this.gTrackerEle, this.svgObject);
        }
            
        
    },
    getClosesPointXY: function (serX, serY, series, x, y) {
        var closestPoint;
        var valAxis = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.model.requireInvertedAxes);
        var mousePoint = ej.EjSvgRender.utils._getValuebyPoint(Math.abs(x - valAxis.x), Math.abs(y - (valAxis.y + valAxis.height)), series);
        var pointX = mousePoint.PointX;
        var pointY = mousePoint.PointY;
        var ptIndex;
        var chartPoint;
        var pointIndex;
        if ((y <= (valAxis.y + valAxis.height) && valAxis.y <= y) && (valAxis.x <= x && x <= (valAxis.x + valAxis.width))) {
            for (var i = 0; i < series.points.length; i++) {
                chartPoint = series.points[i];
                pointIndex = i;
                serX.push(chartPoint.X);
                serY.push(chartPoint.YValues[0]);
            }
            var closestX = this.getClosest(serX, pointX);
            var closestY = this.getClosest(serY, pointY);
            if (!ej.util.isNullOrUndefined(closestX) && !ej.util.isNullOrUndefined(closestY)) {
                for (var i = 0; i < series.points.length; i++) {
                    chartPoint = series.points[i];
                    pointIndex = i;
                    // To get the location of the point
                    var loc = ej.EjSvgRender.utils._getPoint(chartPoint, series);
                    var boundsY = this.model.m_AreaBounds.Y;
                    // px difference between the point and mouse position
                    marker = $.extend(true, {}, series.marker, chartPoint.marker);
                    var markerSize = (marker.size.height + marker.border.width)*3;
                    var width = series.width;
                    var diff = markerSize > width? markerSize : width;
                    if (chartPoint.X == closestX && chartPoint.YValues[0] == closestY && loc.Y + boundsY - diff < y && y < loc.Y + boundsY + diff) {
                        closestPoint = chartPoint;
                        ptIndex = pointIndex;

                    }
                }

            }
        }
        return { point: closestPoint, index: ptIndex };
    },
    getClosestPointX: function (serX, series, x, y) {
        var closestPoint = [];
        var valAxis = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.model.requireInvertedAxes);
        var mousePoint = ej.EjSvgRender.utils._getValuebyPoint(Math.abs(x - valAxis.x), Math.abs(y - (valAxis.y + valAxis.height)), series);
        var pointX = mousePoint.PointX;
        var ptIndex = [];
        $.each(series.points, function (pointIndex, chartPoint) {
            serX.push(chartPoint.X);
        });
        var closest = this.getClosest(serX, pointX);
        if (!ej.util.isNullOrUndefined(closest)) {
            $.each(series.points, function (pointIndex, cPoint) {
                if (cPoint.X == closest) {
                    closestPoint.push(cPoint);
                    ptIndex.push(pointIndex);

                }
            });

        }
        return { point: closestPoint, index: ptIndex };
    },
    getClosest: function (obj, val) {
        var closest = null;

        // Work out min and max
        var min = Math.min.apply(null, obj);
        var max = Math.max.apply(null, obj);

        // Only calculate closest if point is within array
        if (val >= min && val <= max + 1) {
            var i;
            for (i = 0; i < obj.length; i++) {
                if (closest == null || Math.abs(obj[i] - val) < Math.abs(closest - val)) {
                    closest = obj[i];
                }
            }
        }
        return closest;
    },
    createTooltip: function (region, evt) {
        var series = this.model._visibleSeries[region.SeriesIndex];
        var seriesPoint = series.points[region.Region.PointIndex];
        var point = $.extend(true, {}, seriesPoint);
		var tooltipMargin=10;
        if (point.visible) {
            var tooltip =null;
            var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgs.data = { currentText: tooltip, seriesIndex: region.SeriesIndex, pointIndex: region.Region.PointIndex, series: series };
            this._trigger("toolTipInitialize", commonEventArgs);
            var tooltipdiv = $('.tooltipDiv');
            if ($('.tooltipDiv').length == 0) {
                this.tooltipFirst = true;
                tooltipdiv = $("<div class='tooltipDiv' style='position: absolute; z-index: 13000; display: block;'></div>");
                $(document.body).append(tooltipdiv);
                $('.tooltipDiv').addClass(this.svgObject.id);
            } else {
                $(".tooltipDiv").css("display", "block");
                this.tooltipFirst = false;
            }
            if (this.model.AreaType == "cartesianaxes") {
                if (series.xAxis._valueType.toLowerCase() == "datetime")
                    point.x = (Globalize.format(new Date(point.X), ((ej.util.isNullOrUndefined(series.xAxis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(series.xAxis.intervalType) : series.xAxis.labelFormat)));
                if (series.xAxis._valueType.toLowerCase() == "category")
                    point.x = ej.EjSvgRender.utils._getLabelContent(region.Region.PointIndex, series.xAxis);
            }
            if (series.tooltip.template != null) {
                var cloneNode = $("#" + series.tooltip.template).clone();
                $('.tooltipDiv')[0].innerHTML = "";
                $(cloneNode).css("display", "block").appendTo(tooltipdiv);
                series.count = 1;
                point.count = 1;
                var seriesColor = this.getSeriesColor(point, region.SeriesIndex);
				if (seriesColor)
                    $(tooltipdiv).css("background-color", jQuery.type(seriesColor) == "array" ? seriesColor[0].color : seriesColor);
				else
                   $(tooltipdiv).css("background-color", this.model.pointColors[region.Region.PointIndex]);
				var data = { series: series, point: point };
				if (!ej.util.isNullOrUndefined(commonEventArgs.data.currentText))
				    $(tooltipdiv).html(commonEventArgs.data.currentText);
                else
                $(tooltipdiv).html($(tooltipdiv).html().parseTemplate(data));
            } else {
                $(tooltipdiv).html(commonEventArgs.data.ToolTip);
            }
            var xPos = evt.pageX  + tooltipMargin;
            var yPos = evt.pageY  + tooltipMargin;
            xPos = ((xPos + $(tooltipdiv).width()) < $(window).width()) ? (xPos) : (xPos - $(tooltipdiv).width());
            yPos = ((yPos + $(tooltipdiv).height()) < $(window).height()) ? (yPos) : (yPos - $(tooltipdiv).height());

            if (xPos === undefined || xPos === null)
                xPos = evt.pageX  + tooltipMargin;
            if (yPos === undefined || yPos === null)
                yPos = evt.pageY  + tooltipMargin;
            $(tooltipdiv).css("left", xPos);
            $(tooltipdiv).css("top", yPos);
            var tooltipOptions = series.tooltip;
            if (tooltipOptions.enableAnimation) {
                $(tooltipdiv).css({
                    'transition-property': 'left,top',
                    '-moz-transition-property': 'left,top', /* Firefox 4 */
                    '-webkit-transition-property': 'left,top', /* Safari and Chrome */
                    '-o-transition-property': 'left,top',
                    'transition-duration': tooltipOptions.duration,
                    '-moz-transition-duration': tooltipOptions.duration, /* Firefox 4 */

                    '-webkit-transition-duration': this.tooltipFirst ? '0s' : tooltipOptions.duration, /* Safari and Chrome */
                    '-o-transition-duration': tooltipOptions.duration /* Opera */
                });
            }
        }
    },

    translate: function (axis, translateX, translateY, currentScale) {
        var offset = axis.orientation.toLowerCase() == "horizontal"
                                              ? translateX / this.model.m_AreaBounds.Width / currentScale
                                              : translateY / this.model.m_AreaBounds.Height / currentScale;

        axis.zoomPosition = axis.orientation.toLowerCase() == "horizontal"
            ? ej.EjSvgRender.utils._minMax(axis.zoomPosition + offset, 0, (1 - axis.zoomFactor))
            : ej.EjSvgRender.utils._minMax(axis.zoomPosition - offset, 0, (1 - axis.zoomFactor));
    },
    tooltip: function (chart, evt) {
        var tooltipShowing = false;
        var chartSeries;
        var seriesIndex;
        var data = this.GetSeriesPoint(evt);
		if (ej.util.isNullOrUndefined(data)) // To hide the tooltip when it is moved on chartArea other than series
            $("#" + chart.svgObject.id + "_TrackToolTip").remove();
        if (!this.model.crosshair.visible && this.model.AreaType == "cartesianaxes") {
            for (var i = 0; i < this.model._visibleSeries.length; i++) {
                chartSeries = this.model._visibleSeries[i];
                seriesIndex = i;
                if (chartSeries.visibility.toLowerCase() == 'visible' && chartSeries.type.toLowerCase() !== "scatter" && chartSeries.type.toLowerCase() !== "bubble" && chartSeries.type.toLowerCase() !== "column" && chartSeries.type.toLowerCase() !== "bar" && chartSeries.type.toLowerCase() !== "stackingbar" && chartSeries.type.toLowerCase() !== "stackingcolumn" && !chartSeries._hiloTypes) {
                    $("#" + chart.svgObject.id + "_TrackToolTipTemplate_" + seriesIndex).remove();
                    if (!($(".tooltipDiv").hasClass(chart.svgObject.id)))
                        $(".tooltipDiv").remove();
                    $("#" + chart.svgObject.id).find("#" + chart.svgObject.id + "_TrackSymbol" + '_' + seriesIndex).remove();
                    var serY = [];
                    var serX = [];
                    location = null;
                    var closestXyPoint = chart.getClosesPointXY(serX, serY, chartSeries, chart.mousemoveX, chart.mousemoveY);
                    if (closestXyPoint.point)
                        location = ej.EjSvgRender.utils._getPoint(closestXyPoint.point, chartSeries);
                    var pointData = this.model.prevPoint;
                    if (pointData && pointData.seriesIndex == i && !closestXyPoint.point) {
                        var pointLocation = ej.EjSvgRender.utils._getPoint(pointData.point, pointData.series);
                        chart.drawTrackerSymbol(pointData.series, pointData.seriesIndex, pointData.pointIndex, null, pointLocation);
                        this.model.prevPoint = null;
                    }
                    
                    if (chartSeries.marker.visible && closestXyPoint.point) {
                        if (ej.util.isNullOrUndefined(closestXyPoint.point.marker) || ej.util.isNullOrUndefined(closestXyPoint.point.marker.visible) || (closestXyPoint.point.marker && closestXyPoint.point.marker.visible))
                        chart.drawTrackerSymbol(chartSeries, seriesIndex, closestXyPoint.index, false, location);

                        if (pointData && closestXyPoint.point != pointData.point){
                            var prevLocation = ej.EjSvgRender.utils._getPoint(pointData.point, pointData.series);
                            chart.drawTrackerSymbol(pointData.series, pointData.seriesIndex, pointData.pointIndex, null, prevLocation);
                        }
                        if (ej.util.isNullOrUndefined(closestXyPoint.point.marker) || ej.util.isNullOrUndefined(closestXyPoint.point.marker.visible) || (closestXyPoint.point.marker && closestXyPoint.point.marker.visible))
                        this.model.prevPoint = { point: closestXyPoint.point, pointIndex: closestXyPoint.index, series: chartSeries, seriesIndex: seriesIndex };
                    }


                    if (chartSeries.tooltip.visible && closestXyPoint.point && (!data || (i > data.region.SeriesIndex && !(chartSeries._zOrder < this.model._visibleSeries[data.region.SeriesIndex]._zOrder)))) {
                        trans = ej.EjSvgRender.utils._getTransform(chartSeries.xAxis, chartSeries.yAxis, chart.model.requireInvertedAxes);
                        if ((location.X + trans.x) <= (trans.x + trans.width) && ((location.X + trans.x) >= trans.x || location.X == 0) && (Math.abs(location.Y - (trans.y + trans.height)) <= (trans.y + trans.height))
                                     && (Math.abs(location.Y - (trans.y + trans.height)) >= trans.y || location.Y == 0)) {
                            if ($(chart.svgObject).find("#" + chart.svgObject.id + "_TrackToolTip").length == 0) {
                                var transOptions = { 'id': chart.svgObject.id + '_TrackToolTip', 'transform': 'translate(' + trans.x + ',' + trans.y + ')' };
                                chart.gTransToolEle = chart.svgRenderer.createGroup(transOptions);
                            }
                            chart.svgRenderer._setAttr($(chart.svgObject).find("#" + chart.svgObject.id + "_TrackToolTip"), { 'transform': 'translate(' + trans.x + ',' + trans.y + ')', 'visibility': 'visible' });
                            if (ej.util.isNullOrUndefined(chartSeries.tooltip.template)) {
                                tooltipShowing = true;
                                $(".tooltipDiv").remove();
                                chart.displayShowTooltip(location, closestXyPoint.point, chartSeries, closestXyPoint.index);
                            }
                            else {
                                tooltipShowing = true;
                                $("#" + chart.svgObject.id).find("#" + chart.svgObject.id + "_TrackToolTip").attr('visibility','hidden');
                                var region = { SeriesIndex: seriesIndex, Region: { PointIndex: closestXyPoint.index } };
                                chart.createTooltip(region, evt);
                            }

                            //Comment the below code for VML -The line series tooltip color not displayed due to attach and detach the element to DOM
                            //  var detachEle = $(chart.svgObject).find("#" + chart.svgObject.id + "_TrackToolTip").detach();
                            // detachEle.appendTo(chart.svgObject);

                            var commonPointEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
                             commonPointEventArgs.data = { location: {x: this.mousemoveX, y: this.mousemoveX}, region: { SeriesIndex: i ,Region: { PointIndex: closestXyPoint.index } } };
                            chart._trigger("pointRegionMouseMove", commonPointEventArgs);
                        }
                    }
                }
            }
        }
	   else {
            $("#" + this.svgObject.id).find("#" + this.svgObject.id + "_TrackToolTip").remove();
        }
       
        if (!($(".tooltipDiv").hasClass(this.svgObject.id)))
            $(".tooltipDiv").remove();
        if (data && ej.util.isNullOrUndefined(data.region.isStripLine)) {
            if (this.model.AreaType == "none" && this.model._visibleSeries[data.region.SeriesIndex].explode) {
                if (this.model._visibleSeries[data.region.SeriesIndex].enableAnimation) {
                    if (this.model.AnimationComplete)
                        this.pieExplosion(data, evt);
                }
                else
                    this.pieExplosion(data, evt);
            }
            series = this.model._visibleSeries[data.region.SeriesIndex];
            var seriesPoint = this.model._visibleSeries[data.region.SeriesIndex].points[data.region.Region.PointIndex];

            if (seriesPoint && (series.type.toLowerCase() == "bubble" || series.type.toLowerCase() == "scatter" || this.model.AreaType=='polaraxes')) {
                for (var i = 0; i < this.model._visibleSeries.length; i++) {
                    $("#" + this.svgObject.id).find("#" + this.svgObject.id + "_TrackSymbol" + '_' + i).remove();
                }
                var pointlocation = (this.model.AreaType != "polaraxes")
                    ? ej.EjSvgRender.utils._getPoint(seriesPoint, series)
                    : (ej.EjSvgRender.utils.TransformToVisible(series, seriesPoint.X, seriesPoint.y, this))
               
                if (this.model.AreaType == "cartesianaxes")
                    this.drawTrackerSymbol(series, data.region.SeriesIndex, data.region.Region.PointIndex, true, pointlocation);
                else {
                    if(series.marker.visible)
                    this.drawTrackerSymbol(series, data.region.SeriesIndex, data.region.Region.PointIndex, true, pointlocation);
                }
            }

            if (series.tooltip.visible && !tooltipShowing) {

                if (series.visibility.toLowerCase() == 'visible') {
                    if (ej.util.isNullOrUndefined(series.tooltip.template)) {
                        var location;
                        if (this.model.AreaType == "cartesianaxes") {

                            var trans = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.model.requireInvertedAxes);
                            if ($(this.svgObject).find("#" + this.svgObject.id + "_TrackToolTip").length == 0) {
                                var transToolOptions = { 'id': this.svgObject.id + '_TrackToolTip', 'transform': 'translate(' + trans.x + ',' + trans.y + ')' };
                                this.gTransToolEle = this.svgRenderer.createGroup(transToolOptions);
                            }
                            this.svgRenderer._setAttr($(this.svgObject).find("#" + this.svgObject.id + "_TrackToolTip"), { 'transform': 'translate(' + trans.x + ',' + trans.y + ')' });
                            $('#' + this.svgObject.id + "_TrackToolTip").attr("visibility", "visible");
                            location = { X: (data.location.x - trans.x), Y: Math.abs(data.location.y - trans.y) };
                        } else {
                            if ($(this.svgObject).find("#" + this.svgObject.id + "_TrackToolTip").length == 0) {
                                var transToolTipOptions = { 'id': this.svgObject.id + '_TrackToolTip' };
                                this.gTransToolEle = this.svgRenderer.createGroup(transToolTipOptions);
                            }
                            location = { X: (data.location.x), Y: Math.abs(data.location.y) };
                        }


                        $(".tooltipDiv").remove();
                        this.displayShowTooltip(location, seriesPoint, series, data.region.Region.PointIndex);
                        //Comment the below code for VML -The line series tooltip color not displayed due to attach and detach the element to DOM
                        // if (series.type.toLowerCase() == "bubble" || series.type.toLowerCase() == "scatter") {
                        //     var detachEle = $(this.svgObject).find("#" + this.svgObject.id + "_TrackToolTip").detach();
                        //    detachEle.appendTo(this.svgObject);
                        // }
                    } else {
                        $("#" + chart.svgObject.id).find("#" + chart.svgObject.id + "_TrackToolTip").attr('visibility', 'hidden');
                        this.createTooltip(data.region, evt);
                    }
                }
            }
            var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgs.data = data;
            this._trigger("pointRegionMouseMove", commonEventArgs);
        }
        else {
            if (!ej.util.isNullOrUndefined(this.model.explodeValue)) {
                var type = this.model.series[0].type;
                var series = this.model._visibleSeries[0];
                var seriesType = new ej.seriesTypes[type]();
                var targetElement;
                var id;
                var _labelPosition = series.labelPosition.toLowerCase();
                var result = seriesType._calculateArcData(this, this.model.explodeValue, series.points[this.model.explodeValue], series);
                //var explodeId = this.model.series[0].name + "group" + index;
                id = this.svgObject.id + '_SeriesGroup' + '_0';
                targetElement = $(this.gSeriesEle).children('#' + id)[0];
                var elements = $(targetElement).children();
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    var index = this.svgRenderer._getAttrVal($(element)[0], "pointIndex");
                    if (parseInt(index) == this.model.explodeValue) {
                        this.svgRenderer._setAttr($(element), { 'd': result.Direction });
                        break;
                    }
                }
               
                if (this.model._visibleSeries[0].marker.dataLabel.visible) {
                    seriesType.drawDataLabelAcc(this, series, this.model.explodeValue, series.points[this.model.explodeValue]);
                }
                this.model.explodeValue = null;
            }
        }


    },

    chartCrossHair: function (chart, mouseLocation) {
        if (this.model.crosshair.visible && this.model.crosshair.type.toLowerCase()=="trackball") {

            var point;
            var seriesIndex;
            var series;
            
            for (var i = 0; i < this.model._visibleSeries.length; i++) {
                seriesIndex = i;
                series = this.model._visibleSeries[i];
                if (series.visibility.toLowerCase() == 'visible') {
                    var serX = [];
                    var closestPoint;

                    closestPoint = chart.getClosestPointX(serX, series, chart.mousemoveX, chart.mousemoveY);

                    if (closestPoint.point) {
                        for (var t = 0; t < closestPoint.point.length; t++) {
                            if (closestPoint.point[t].visible) {
                                point = ej.EjSvgRender.utils._getPoint(closestPoint.point[t], series);

                                var dir = "M" + " " + (point.X + series.xAxis.x) + " " + (chart.model.m_AreaBounds.Y) + " " + "L" + " " + (point.X + series.xAxis.x) + " " + (chart.model.m_AreaBounds.Y + chart.model.m_AreaBounds.Height);

                                var pathOptions = {
                                    'id': chart.svgObject.id + "_Tracker",
                                    'fill': 'none',
                                    'stroke-width': chart.model.crosshair.line.width,
                                    'clip-path': 'url(#' + chart.svgObject.id + '_ChartAreaClipRect)',
                                    'stroke': chart.model.crosshair.line.color,
                                    'd': dir
                                };
                                if ($(chart.svgObject).find("#" + chart.svgObject.id + "_Tracker").length == 0)
                                    chart.svgRenderer.drawPath(pathOptions, chart.svgObject);
                                else
                                    chart.svgRenderer._setAttr($(chart.svgObject).find("#" + chart.svgObject.id + "_Tracker"), { "d": dir });

                                var crossHairTrans = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, chart.model.requireInvertedAxes);
                                var tToolOptions = { 'transform': 'translate(' + crossHairTrans.x + ',' + crossHairTrans.y + ')', 'id': chart.svgObject.id + '_TrackToolTip' + '_' + seriesIndex };

                                chart.gTransToolEle = chart.svgRenderer.createGroup(tToolOptions);

                                var prePoint = this.model.prePoint;

                                //To check the current closestPoint and previous point is same
                                if (ej.util.isNullOrUndefined(prePoint) || prePoint.pointIndex[0] != closestPoint.index[0] || !$('#' + chart.svgObject.id + "_trackSymbol_" + seriesIndex + '_' + closestPoint.index)) {

                                    //Remove the track elements only once on point change
                                    if (ej.util.isNullOrUndefined(initialPoint)) {
                                        if (this.model.crosshair.tooltipTemplate != null) {
                                            $(document).find('[id*="_TrackToolTipTemplate_"]').attr("visibility", "hidden");
                                        }
                                        if (chart.gTransToolEle && chart.gTrackerEle) {
                                            $(this.svgObject).find('[id*="_TrackSymbol_"],[id*="_TrackToolTip"]').attr("visibility", "hidden");
                                        }
                                        var initialPoint = closestPoint;
                                    }


                                    chart.drawTrackerSymbol(series, seriesIndex, closestPoint.index[t], true, point);
                                     
                                    // Condition to find the crosshair is specified with tooltip template
                                    if (!chart.model.crosshair.tooltipTemplate)
                                        chart.displayTooltip(point, closestPoint.point[t], series, closestPoint.index[t]);
                                    else {
                                        var tX, tY;
                                        chart.displayTemplateTooltip(tX, tY, point, closestPoint.point[t], series, seriesIndex, closestPoint.index[t]);
                                    }
                                } else {
                                    // If both are same points, then viibility is set to visible
                                    var element = $(this.svgObject).find('[id*="_TrackSymbol_"],[id*="_TrackToolTip"]');
                                    this.svgRenderer._setAttr($(element), { "visibility": 'visible' });

                                    element = $(this.svgObject).find('[id*="_TrackToolTip"]').children();
                                    this.svgRenderer._setAttr($(element), { "visibility": 'visible' });
                                    
                                    element = $(this.svgObject).find('[id*="_trackSymbol_"]');
                                    this.svgRenderer._setAttr($(element), { "visibility": 'visible' });

                                    $(chart.svgObject).find('[id*="_TrackAxisToolTip"]').attr("visibility", "visible");
                                    
                                    // Sets the tooltip template visibility to visible
                                    if (this.model.crosshair.tooltipTemplate != null) {
                                        element = $(document).find('[id*="_TrackToolTipTemplate_"]');
                                        this.svgRenderer._setAttr($(element), { "visibility": 'visible' });
                                    }
                                }
                            } else {
                                $('#' + this.svgObject.id + '_TrackToolTip_' + seriesIndex).remove();
                                $('#' + this.svgObject.id + '_TrackSymbol_' + seriesIndex).remove();
                            }
                        }
                    } else {
                        $(chart.svgObject).find('[id*="_Tracker"]').remove();
                    }
                }
            }
           // To get the previous point values
            if (this.model.closestPoint != null)
            {
                this.model.prePoint = { point: closestPoint.point, pointIndex: closestPoint.index, series: series, seriesIndex: seriesIndex };
            }
            if (!chart.gTrackAxisEle) {
                var gTrackAxisOptions = { 'id': chart.svgObject.id + '_TrackAxisToolTip', 'visibility': 'visible' };
                chart.gTrackAxisEle = chart.svgRenderer.createGroup(gTrackAxisOptions);
                chart.svgRenderer.append(chart.gTrackAxisEle, chart.svgObject);
            }
           
            if (point) {
                $.each(chart.model.axes, function (axisIndex, axis) {
                    $(chart.svgObject).find('[id*="_TrackAxisToolTip"]').attr("visibility", "visible");
                    var areaX = chart.model.m_AreaBounds.X;

                    if (axis.orientation.toLowerCase() == "horizontal" && axis.crosshairLabel.visible) {
                        if ((point.X + areaX) <= (axis.x + axis.width) && axis.x <= (point.X + areaX)) {
                            var valueType = axis._valueType.toLowerCase();
                            var xVal = ((point.X / (axis.width)) * (axis.visibleRange.delta) + axis.visibleRange.min).toFixed(2).replace(new RegExp("\\.0{" + 2 + "}"), "");
                            if (valueType == "logarithmic") xVal = Math.pow(axis.logBase, xVal);
                            if (valueType == "datetime") xVal = (Globalize.format(new Date(Math.floor(xVal)), ((ej.util.isNullOrUndefined(axis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(axis.intervalType) : axis.labelFormat)));
                            if (valueType == "category") xVal = ej.EjSvgRender.utils._getLabelContent(Math.floor(xVal), axis);
                            var pointLocation = { X: (point.X + areaX), Y: (axis.opposedPosition) ? (axis.y + axis.height - axis.majorTickLines.size) : (axis.y + axis.height + axis.majorTickLines.size + 10) };
                            chart.displayAxisTooltip(pointLocation, xVal, axis, axisIndex, mouseLocation);
                        }
                    }

                });
            }


        }
    },
    chartAreaCrossHair: function (chart, mouseLocation) {
        var round = ((ej.util.isNullOrUndefined(this.model.primaryYAxis.roundingPlaces)) ? 2 : this.model.primaryYAxis.roundingPlaces);
        if (this.model.crosshair.visible && this.model.crosshair.type.toLowerCase() == "crosshair") {
            var d = "M" + " " + (this.mousemoveX) + " " + (this.model.m_AreaBounds.Y) + " " + "L" + " " + (this.mousemoveX) + " " + (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height);
            var dhor = "M" + " " + (this.model.m_AreaBounds.X) + " " + (this.mousemoveY) + " " + "L" + " " + (this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width) + " " + (this.mousemoveY);
            
           
            if ($(chart.svgObject).find("#" + chart.svgObject.id + "_CrosshairVertical").length == 0) {
                var options = {
                    'id': chart.svgObject.id + "_CrosshairVertical",
                    'fill': 'none',
                    'stroke-width': chart.model.crosshair.line.width,
                    'stroke': chart.model.crosshair.line.color,
                    'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)',
                    'd': d
                };
                chart.svgRenderer.drawPath(options, chart.svgObject);
            } else
                chart.svgRenderer._setAttr($(chart.svgObject).find("#" + chart.svgObject.id + "_CrosshairVertical"), { "d": d });
            
            if ($(chart.svgObject).find("#" + chart.svgObject.id + "_CrosshairHorizontal").length == 0) {
                var optionsHor = {
                    'id': chart.svgObject.id + "_CrosshairHorizontal",
                    'fill': 'none',
                    'stroke-width': chart.model.crosshair.line.width,
                    'stroke': chart.model.crosshair.line.color,
                    'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)',
                    'd': dhor
                };
                chart.svgRenderer.drawPath(optionsHor, chart.svgObject);
            } else
                chart.svgRenderer._setAttr($(chart.svgObject).find("#" + chart.svgObject.id + "_CrosshairHorizontal"), { "d": dhor });
            if ( $('#' + chart.svgObject.id + '_AxisCrossToolTip').length ==0) {
                var gAxisCrossOptions = { 'id': chart.svgObject.id + '_AxisCrossToolTip', 'visibility': 'visible' };
                chart.gTrackAxisEle = chart.svgRenderer.createGroup(gAxisCrossOptions);
                chart.svgRenderer.append(chart.gTrackAxisEle, chart.svgObject);
            }
            else {
                this.svgRenderer._setAttr($(chart.gTrackAxisEle), { "visibility": 'visible' });
            }

            $.each(chart.model.axes, function (axisIndex, axis) {
                var valueType = axis._valueType.toLowerCase();
                if (axis.orientation.toLowerCase() == "horizontal" && axis.crosshairLabel.visible) {
                    if ((chart.mousemoveX) <= (axis.x + axis.width) && axis.x <= (chart.mousemoveX)) {
                        var labelplacement = (axis._valueType == "category" && axis.labelPlacement.toLowerCase()=='betweenticks') ? 0.5 : 0;
                        var xVal = (((chart.mousemoveX - axis.x) / (axis.width)) * (axis.visibleRange.delta) + axis.visibleRange.min + labelplacement).toFixed(2).replace(new RegExp("\\.0{" + 2 + "}"), "");
                        if (valueType == "logarithmic") xVal = Math.pow(axis.logBase, xVal).toFixed(2).replace(new RegExp("\\.0{" + 2 + "}"), "");
                        if (valueType == "datetime") xVal = (Globalize.format(new Date(Math.floor(xVal)), ((ej.util.isNullOrUndefined(axis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(axis.intervalType) : axis.labelFormat)));
                        if (valueType == "category") xVal = ej.EjSvgRender.utils._getLabelContent(xVal, axis);
                        var xPointLocation = { X: (chart.mousemoveX), Y: (axis.y) };
                        chart.displayAxisTooltip(xPointLocation, xVal, axis, axisIndex, mouseLocation);
                    }
                } else if (axis.orientation.toLowerCase() == "vertical" && axis.crosshairLabel.visible) {
                    if ((chart.mousemoveY) <= (axis.y + axis.height) && axis.y <= (chart.mousemoveY)) {
                        var yVal = ((Math.abs(1 - (chart.mousemoveY - (axis.y)) / (axis.height)) * (axis.visibleRange.delta) + axis.visibleRange.min).toFixed(round).replace(new RegExp("\\.0{" + round + "}"), ""));
                        if (valueType == "logarithmic") yVal = Math.pow(axis.logBase, yVal).toFixed(2).replace(new RegExp("\\.0{" + 2 + "}"), "");
                        if (valueType == "datetime") yVal = (Globalize.format(new Date(Math.floor(yVal)), ((ej.util.isNullOrUndefined(axis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(axis.intervalType) : axis.labelFormat)));
                        if (valueType == "category") yVal = ej.EjSvgRender.utils._getLabelContent(yVal, axis);
                        var ypointLocation = { X: axis.x, Y: (chart.mousemoveY) };
                        chart.displayAxisTooltip(ypointLocation, yVal, axis, axisIndex, mouseLocation);
                    }
                }
            });

        }
    },
    chartTouchMove: function (evt) {
	   this.cancelEvent(evt);
        evt = evt.originalEvent.touches[0];
        this.chartInteractiveBehavior(evt);

    },

    chartInteractiveBehavior: function (evt) {
        var mouseMoveCords = this.calMousePosition(evt);
        this.mousemoveX = mouseMoveCords.X;
        this.mousemoveY = mouseMoveCords.Y;

        var id = "#" + this.svgObject.id;
        if (this.mouseWheelCoords) {
            var changeX = Math.abs(this.mouseWheelCoords.x - evt.pageX);
            var changeY = Math.abs(this.mouseWheelCoords.y - evt.pageY);
            if ((changeX > 0 || changeY > 0) && !(this.panning)) {
                this.enableTrackBall();
            } else {
                this.disableTrackBall();
            }
        }

        var chart = this;

        if (chart.model.AreaType == "cartesianaxes" && this.mousemoveX >= this.model.m_AreaBounds.X && this.mousemoveX < (this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width) && this.mousemoveY < (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height) && this.mousemoveY >= this.model.m_AreaBounds.Y && this.model.initSeriesRender) {
            var mouseLocation = { x: chart.mousemoveX, y: chart.mousemoveY };
            var targetId = chart.svgRenderer._getAttrVal($(evt.target).parent(), "id");
            if ((targetId != undefined) && (targetId == chart.svgRenderer._getAttrVal($(this.svgObject).find(id + '_ZoomBtn'), "id") || targetId == chart.svgRenderer._getAttrVal($(this.svgObject).find(id + '_ResetZoom'), "id") || targetId == chart.svgRenderer._getAttrVal($(this.svgObject).find(id + '_PanBtn'), "id"))) {
                this.disableTrackBall();
            }
            else {
                this.enableTrackBall();
            }

            //show tooltip and track ball
			if(!this.model.crosshair.visible)
            this.tooltip(chart, evt);

            //crossHair of chart
            this.chartCrossHair(chart, mouseLocation);

            //crossHair for chart area
            this.chartAreaCrossHair(chart, mouseLocation);

        } else {
            if (chart.model.AreaType == "none" || chart.model.AreaType=='polaraxes')
                this.tooltip(chart, evt);
            else {
                $("#" + chart.svgObject.id).find("#" + chart.svgObject.id + "_TrackToolTip").attr('visibility','hidden');
                $(".tooltipDiv").css("display","none");
                this._removeTrackBall();
            }
        }
    },

    chartMouseMove: function (evt) {
	 
	   this.cancelEvent(evt);
		 
        var chart = this;
        this.calMousePosition(evt)
		$('#tooltip').remove();
        if (!this.panning) {
            if (!this.drag)
                this.chartInteractiveBehavior(evt);
            var id = "#" + this.svgObject.id;
            if (this.model.zooming.enable && this.model.AreaType == "cartesianaxes") {
                if (this.drag) {
                    this.disableTrackBall();
                    $('#' + this.svgObject.id + '_ZoomArea').remove();
                    var width, height, x, y;
                    if (this.model.zooming.type.toLowerCase() == "x") {
                        width = Math.abs(this.mousemoveX - this.mouseDownX);
                        height = this.model.m_AreaBounds.Height;
                        x = this.mousemoveX > this.mouseDownX ? this.mouseDownX : this.mousemoveX;
                        y = this.model.m_AreaBounds.Y;
                    } else if (this.model.zooming.type.toLowerCase() == "y") {

                        width = this.model.m_AreaBounds.Width;
                        height = Math.abs(this.mousemoveY - this.mouseDownY);
                        x = this.model.m_AreaBounds.X;
                        y = this.mousemoveY > this.mouseDownY ? this.mouseDownY : this.mousemoveY;

                    } else {
                        width = Math.abs(this.mousemoveX - this.mouseDownX);
                        height = Math.abs(this.mousemoveY - this.mouseDownY);
                        x = this.mousemoveX > this.mouseDownX ? this.mouseDownX : this.mousemoveX;
                        y = this.mousemoveY > this.mouseDownY ? this.mouseDownY : this.mousemoveY;

                    }

                    $(this.svgObject).css({
                        '-moz-user-select': '-moz-none',
                        '-khtml-user-select': 'none',
                        '-webkit-user-select': 'none',
                        '-ms-user-select': 'none',
                        'user-select': 'none'
                    });

                    this.zooming = true;

                    var rectOptions = {
                        'id': this.svgObject.id + '_ZoomArea',
                        'x': x,
                        'y': y,
                        'width': width,
                        'height': height,
                        'fill': 'rgba(69,114,167,0.25)',
                        'stroke-width': 1,
                        'stroke': 'rgba(69,114,167,0.25)',
                        'clip-path': 'url(#' + this.svgObject.id + '_ChartAreaClipRect)'
                    };

                    this.svgRenderer.drawRect(rectOptions, this.svgObject);
                }

            }
        }
		var deferredZoom = this.model.zooming.enableDeferredZoom;
        // Panning
        if (this.panning && this.doPan && this.model.AreaType == "cartesianaxes") {
            this.currentPageX = evt.pageX;
            this.currentPageY = evt.pageY;

            if (!this.isDevice() && !deferredZoom) {
                var oDelta;
                oDelta = {
                    'x': this.oPreviousCoords.x - evt.pageX,
                    'y': this.oPreviousCoords.y - evt.pageY
                };

                this.oPreviousCoords = {
                    'x': evt.pageX,
                    'y': evt.pageY
                };
                $.each(this.model.axes, function(index, axis) {
                    var currentScale = Math.max(1 / ej.EjSvgRender.utils._minMax(axis.zoomFactor, 0, 1), 1);
                    chart.translate(axis, (oDelta.x), (oDelta.y), currentScale);
                });

                this.redraw();
                this._cursorToPointer();
                this._enableZoomingButtons();
            }
            // Translate the series for other devices
            else if (this.isDevice() || deferredZoom) {
                for (var k = 0; k < this.model._visibleSeries.length; k++) {
                    var series = this.model.series[k];
                    var transform = ej.EjSvgRender.utils._getTransform(series.xAxis, series.yAxis, this.model.requireInvertedAxes);
                    var transX = (evt.pageX - this.oPreviousCoords.x) + transform.x;
                    var transY = (evt.pageY - this.oPreviousCoords.y) + transform.y;
                    var translate = 'translate(' + transX + ',' + transY + ')';
                    var svgObjectId = this.svgObject.id;
                    $("#" + svgObjectId + "_SeriesGroup_" + k).attr("transform", translate);
                    $("#" + svgObjectId + "_symbolGroup_" + k).attr("transform", translate);
                    $("#" + svgObjectId + "_TextGroup_" + k).attr("transform", translate);
                    
                }
            }
        }
		
		//Declaration
            var targetid = evt.target.id;
            var id = this.svgObject.id;
            var parentId = ej.util.isNullOrUndefined(evt.target.parentNode) ? "" : evt.target.parentNode.id;
			
	//condition to find the buttons and display tooltip on hover
       if ( parentId ==  id + "_ResetZoom")
           createBtnTooltip("Reset");
        else if (parentId == id + '_PanBtn')
            createBtnTooltip("Pan");
        else if (parentId == id + '_ZoomBtn')
            createBtnTooltip("Zoom");

	// method to create tooltip for zooming and panning buttons
        function createBtnTooltip(text) {
            var tooltipdiv = $("<div id = 'tooltip'></div>");
            $(tooltipdiv).html("&nbsp" + text + "&nbsp");
            $(document.body).append(tooltipdiv);
            // adding css prop to the div
            $(tooltipdiv).css({
                "left": evt.pageX + 10,
                "top": evt.pageY + 10,
                "display": "block",
                "position": "absolute",
                "z-index": "13000",
                "cursor": "default",
                "font-family": "Segoe UI",
                "color": "#707070",
                "font-size": "12px",
                "background-color": "#FFFFFF",
                "border": "1px solid #707070"
            });
        }
           var svgId = this.svgObject.id;
            var hAxes = this.model.hAxes;

            if (targetid.indexOf("_XLabel_") >= 0) {
                // Loop to find the axis
                for (var j = 0; j < hAxes.length; j++) {
                    if (targetid.indexOf(svgId + '_' + hAxes[j].name + '_XLabel_') >= 0)
                        break;
                }
                // Loop to find the labels in the axis
                for (var i = 0; i < hAxes[j].visibleLabels.length && this.model.AreaType=='cartesianaxes'; i++) {
                    if (targetid == svgId + '_' + hAxes[j].name + '_XLabel_' + i) {
                        var ele = hAxes[j].visibleLabels[i];
                        var tooltipdiv = $("<div id = 'tooltip'></div>");
                        var str = ele.Text == ele.displayText ? "" : ele.Text;
                        if (str == "") break;
                        $(tooltipdiv).html("&nbsp" + str + "&nbsp");
                        $(document.body).append(tooltipdiv);
                        // adding css prop to the div
                        $(tooltipdiv).css({
                            "left": evt.pageX + 10,
                            "top": evt.pageY + 10,
                            "display": "block",
                            "position": "absolute",
                            "z-index": "13000",
                            "cursor": "default",
                            "font-family": "Segoe UI",
                            "color": "#707070",
                            "font-size": "12px",
							"background-color": "#FFFFFF",
                            "border": "1px solid #707070"
                        });
                    }
                }
            }

        if ($(this.svgObject).find(id + '_ResetZoom,' + id + '_PanBtn,' + id + '_ZoomBtn').length > 0) {
            $(this.svgObject).find(id + '_ResetZoom,' + id + '_PanBtn,' + id + '_ZoomBtn').appendTo(this.svgObject);
        }

        var legenddata = this.getLegendData(evt);
        if (legenddata) {
            var commonLegendMoveEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonLegendMoveEventArgs.data = legenddata;
            this._trigger("legendItemMouseMove", commonLegendMoveEventArgs);
        }
    },
    
    pieExplosion: function (data) {
        var region = data;
        var id;
        var targetElement;
        var symbolName;
        var series = region.region.Series;
        var seriesType = new ej.seriesTypes[series.type]();
        var explodePoint = series.explodeIndex;
        var _labelPosition = series.labelPosition.toLowerCase();
        if (explodePoint != region.pointData[0].PointIndex && !region.region.Series.explodeAll) {
            series.explodeIndex = region.pointData[0].PointIndex;

            if (!ej.util.isNullOrUndefined(this.model.explodeValue)) {
                var result = seriesType._calculateArcData(this, this.model.explodeValue, series.points[this.model.explodeValue], region.region.Series);
                id = this.svgObject.id + '_SeriesGroup' + '_' + region.region.SeriesIndex;
                targetElement = $(this.gSeriesEle).children('#' + id)[0];
                var elements = $(targetElement).children();
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    var index = this.svgRenderer._getAttrVal($(element)[0], "pointIndex");
                    if (parseInt(index) == this.model.explodeValue) {
                        this.svgRenderer._setAttr($(element), { 'd': result.Direction });
                        break;
                    }
                }


                if (series.marker.dataLabel.visible) {
                    seriesType.drawDataLabelAcc(this, series, this.model.explodeValue, series.points[this.model.explodeValue])
                }
            }

            result = seriesType._calculateArcData(this, region.pointData[0].PointIndex, this.model.chartRegions[0].Series.points[region.pointData[0].PointIndex], region.region.Series);
            id = this.svgObject.id + '_SeriesGroup' + '_' + region.region.SeriesIndex;
            targetElement = $(this.gSeriesEle).children('#' + id)[0];
            var elements = $(targetElement).children();
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var index = this.svgRenderer._getAttrVal($(element)[0], "pointIndex");
                if (parseInt(index) == region.pointData[0].PointIndex) {
                    this.svgRenderer._setAttr($(element), { 'd': result.Direction });
                    break;
                }
            }
         
            if (series.marker.dataLabel.visible) {
                seriesType.drawDataLabelAcc(this, series, region.pointData[0].PointIndex, series.points[region.pointData[0].PointIndex])
            }
            this.model.explodeValue = region.pointData[0].PointIndex;

        }
        region.region.Series.explodeIndex = explodePoint;
    },
    displayTemplateTooltip: function (x, y, location, seriesPoint, series, serIndex, ptIndex) {
        var point = $.extend(true, {}, seriesPoint);
        point.x = point.X;
        if (series.xAxis._valueType.toLowerCase() == "datetime")
            point.x = (Globalize.format(new Date(point.X), ((ej.util.isNullOrUndefined(series.xAxis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(series.xAxis.intervalType) : series.xAxis.labelFormat)));
        if (series.xAxis._valueType.toLowerCase() == "category") point.x = ej.EjSvgRender.utils._getLabelContent(ptIndex, series.xAxis);
        // x and y is set to 0, if undefined
        x = ej.util.isNullOrUndefined(x) ? 0 : x;
        y = ej.util.isNullOrUndefined(y) ? 0 : y;
        var xLoc = location.X + x + 15;
        var yLoc = (location.Y) + y + 15;
        var tooltipdiv = $("<div style='position: absolute; z-index: 13000; display: block;'></div>");
        $(tooltipdiv).addClass("TrackToolTipTemplate");
        this.svgRenderer._setAttr($(tooltipdiv), { "id": this.svgObject.id + "_TrackToolTipTemplate_" + serIndex });
        if (this.model.crosshair.tooltipTemplate != null) {
            var cloneNode = $("#" + this.model.crosshair.tooltipTemplate).clone();
            $(cloneNode).css("display", "block").appendTo(tooltipdiv);
            series.count = 1;
            point.count = 1;
            var seriesColor = this.getSeriesColor(point, serIndex);
            $(tooltipdiv).css("background-color", jQuery.type(seriesColor) == "array" ? seriesColor[0].color : seriesColor);
            var data = { series: series, point: point };
            $(tooltipdiv).html($(tooltipdiv).html().parseTemplate(data));
        }
        $(document.body).append(tooltipdiv);
        $(tooltipdiv).css("left", xLoc + $(tooltipdiv).width());
        $(tooltipdiv).css("top", yLoc + $(tooltipdiv).height());

    },

    displayAxisTooltip: function (location, text, axis, index, mouseLoc) {
        var maxTickSize = 0;
        for (var i = 0; i < this.model.axes.length; i++) {
            if (this.model.axes[i].majorTickLines.size > maxTickSize) {
                maxTickSize = this.model.axes[i].majorTickLines.size;
            }
        }
        var maxLocation = (axis.opposedPosition) ? ((maxTickSize + 10) + (axis.x + axis.width)) : (axis.x + axis.width);
        if (location.X >= 0 && location.X <= maxLocation) {
            var x = (location.X);
            var y = location.Y;
            var padding = 5;
            var commonTrackTextArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonTrackTextArgs.data = { axisIndex: index, chartAxis: axis, currentTrackText: text, location: mouseLoc };
            this._trigger("trackAxisToolTip", commonTrackTextArgs);

            var trackAxisText = commonTrackTextArgs.data.currentTrackText;

            var textOffset = ej.EjSvgRender.utils._measureText(trackAxisText, null, axis.crosshairLabel.font);
            if (axis.orientation.toLowerCase() == 'horizontal') {
                x = x - textOffset.width / 2;
                if (axis.opposedPosition == true) {
				  y = axis.Location.Y1 - textOffset.height/2 + padding - maxTickSize;  
                }

                if (axis.opposedPosition == false) {
				    y = axis.Location.Y1 + textOffset.height - padding + maxTickSize;
                }
            }
            if (!(axis.opposedPosition) && (x + textOffset.width) > (this.model.m_AreaBounds.Width + this.model.m_AreaBounds.X)) {
                x = ((this.model.m_AreaBounds.Width + this.model.m_AreaBounds.X) - textOffset.width) + padding + this.model.elementSpacing;
            }
            if (axis.orientation.toLowerCase() == 'vertical') {
			     y = location.Y + textOffset.height / 4;
                if (axis.opposedPosition == true) {
                     x = axis.x + 2 + padding - 2 ;
                }
                if (axis.opposedPosition == false) {
                    x = axis.x - textOffset.width - maxTickSize;
                }
            }

            var textAxisOptions = {
                'id': this.svgObject.id + '_AxisToolTipText' + '_' + index,
                'x': x,
                'y': y,
                'fill': axis.crosshairLabel.font.color,
                'font-size': axis.crosshairLabel.font.size,
                'font-family': axis.crosshairLabel.font.fontFamily,
                'font-style': axis.crosshairLabel.font.fontStyle,
                'font-weight': axis.crosshairLabel.font.fontWeight,
                'text-anchor': 'start',
                'opacity': axis.crosshairLabel.font.opacity
              
            };

            var fontSize = ej.EjSvgRender.utils._measureText(commonTrackTextArgs.data.currentTrackText, this.model.m_AreaBounds.Width, axis.crosshairLabel.font);
            var crosshairLabel = axis.crosshairLabel;
             var toolAxisRectOptions = {
                'id': this.svgObject.id + '_AxisToolTipRect' + '_' + index,
                'x': (x - padding),
                'y': (y - (fontSize.height)),
                'width': (fontSize.width) + (2* padding),
                'height': (2*fontSize.height)-(2*padding),
                'rx': crosshairLabel.rx,
                'ry': crosshairLabel.ry,
                'fill': crosshairLabel.fill,
                'stroke-width': crosshairLabel.border.width,
                'stroke': crosshairLabel.border.color
            };

             this.svgRenderer.drawRect(toolAxisRectOptions, this.gTrackAxisEle);
             this.svgRenderer.drawText(textAxisOptions, commonTrackTextArgs.data.currentTrackText, this.gTrackAxisEle);
        }
    },
    displayTooltip: function (location, point, series, pointIndex) {
        var seriesIndex = $.inArray(series, this.model._visibleSeries);
        if ((location.X + this.model.m_AreaBounds.X > this.model.m_AreaBounds.X || location.X == 0) && ((location.X + this.model.m_AreaBounds.X) <= (this.model.m_AreaBounds.X + this.model.m_AreaBounds.Width)) &&
     (location.Y + this.model.m_AreaBounds.Y) >= this.model.m_AreaBounds.Y && (location.Y + this.model.m_AreaBounds.Y) < (this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height)) {
            var padding = 5;
            var x = location.X + ((ej.util.isNullOrUndefined(series._trackMarker)) ? series.marker.size.width : (series._trackMarker.size.width)) + padding + 1;
            var y = (location.Y);
            var format = series.tooltip.format;
            var numberToFixed = ((ej.util.isNullOrUndefined(series.yAxis.roundingPlaces)) ? 2 : series.yAxis.roundingPlaces);
            var trackTooltipText = this.getTooltipFormat(point, series, seriesIndex, pointIndex, format, numberToFixed);
            var commonTrackTextArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonTrackTextArgs.data = { serIndex: seriesIndex, pointIndex: pointIndex, currentText: trackTooltipText };
            var tooltip = series.tooltip;
            this._trigger("trackToolTip", commonTrackTextArgs);
            var font = tooltip.font ? $.extend(false, series.font, {}, tooltip.font) : series.font;
            var textOffset = ej.EjSvgRender.utils._measureText(commonTrackTextArgs.data.currentText, series.xAxis.width, font);
            var seriesColor = this.getSeriesColor(point, seriesIndex);
            var toolTipOptions = this.getTooltipOptions(seriesColor, series);
            var rectBorderColor = toolTipOptions.rectBColor;
            var rectFillColor = toolTipOptions.rectFColor;
            var textColor = toolTipOptions.rectTextColor;
            var rX = toolTipOptions.rectX;
            var rY = toolTipOptions.rectY;
            var rectOptions = series.tooltip;
            var rectWidth = textOffset.width + (2 * padding);
            var rectHeight = textOffset.height + (2 * padding);

            if (x + rectWidth - padding >= this.model.m_AreaBounds.Width)
                x = x - rectWidth - ((ej.util.isNullOrUndefined(series._trackMarker)) ? series.marker.size.width : (series._trackMarker.size.width)) - (2 * padding) - 2;
            var toolRectOptions = {
                'id': this.svgObject.id + '_ToolTipRect' + '_' + seriesIndex,
                'x': x - padding,
                'y': y - textOffset.height / 2 - padding,
                'width': rectWidth,
                'height': rectHeight,
                'fill': rectOptions.fill ? rectOptions.fill : rectFillColor,
                'stroke-width': rectOptions.border.width ? rectOptions.border.width : 1,
                'stroke': rectOptions.border.color ? rectOptions.border.color : rectBorderColor,
                'fill-opacity': rectOptions.opacity ? rectOptions.opacity : 0.85,
                'rx': rectOptions.rx ? rectOptions.rx : rX,
                'ry': rectOptions.ry ? rectOptions.ry : rY
            };
            $('#' + this.svgObject.id + '_ToolTipRect' + '_' + seriesIndex).attr("visibility", "visible");
            this.svgRenderer.drawRect(toolRectOptions, this.gTransToolEle);
            var text = commonTrackTextArgs.data.currentText;
            var fontText = text;
            if (commonTrackTextArgs.data.currentText.indexOf("<br/>") >= 0) {
                text = commonTrackTextArgs.data.currentText.split("<br/>");
                fontText = text[0]
            }
            var fontSize = ej.EjSvgRender.utils._measureText(text, series.xAxis.width, font).height;
            var textOptions = {
                'id': this.svgObject.id + '_ToolTipText' + '_' + seriesIndex,
                'x': x,
                'y': y - textOffset.height / 2 - padding + fontSize,
                'fill': (tooltip.font && tooltip.font.color) ? font.color : textColor,
                'font-size': font.size,
                'font-family': font.fontFamily,
                'font-style': font.fontStyle,
                'font-weight': font.fontWeight,
                'text-anchor': 'start'
            };
            $('#' + this.svgObject.id + '_ToolTipText' + '_' + seriesIndex).attr("visibility", "visible");
            $('#' + this.svgObject.id + '_ToolTipText' + '_' + seriesIndex).attr("visibility", "visible");
            this.svgRenderer.drawText(textOptions, text, this.gTransToolEle, font);
            if ($('#' + this.svgObject.id + "_TrackToolTip_" + seriesIndex).length == 0)
                this.svgRenderer.append(this.gTransToolEle, this.svgObject);
        } else {
            $('#' + this.svgObject.id + '_TrackToolTip_' + seriesIndex).remove();
        }

    },
    getTooltipOptions: function (seriesColor, series) {
        var rectBorderColor, rectFillColor, rX, rY, textColor;
        if (this.model.theme.indexOf("gradient") >= 0) {
            rectBorderColor = jQuery.type(seriesColor) == "array" ? seriesColor[0].color : seriesColor;
            rectFillColor = 'white';
            textColor = "#333333";
            rX = 5;
            rY = 5;

        } else {
            var type = series.type.toLowerCase();
            if (type != "column" && type != "bar" && type != "rangecolumn" && type != "stackingcolumn" && type != "stackingbar" && this.model.AreaType != "none") {
                rectFillColor = jQuery.type(seriesColor) == "array" ? seriesColor[0].color : seriesColor;
                rectBorderColor = 'transparent';
                textColor = "white";
            } else {
                rectBorderColor = "#333333";
                rectFillColor = 'white';
                textColor = "#333333";
            }
            rX = 0;
            rY = 0;
        }
        return { rectBColor: rectBorderColor, rectFColor: rectFillColor, rectTextColor: textColor, rectX: rX, rectY: rY };
    },
    getSeriesColor: function (point, seriesIndex) {
        var seriesColor;
        if ( point.fill) {
            if (!point.fill._gradientStop)
                seriesColor = point.fill;
            else {
                seriesColor = point.fill._gradientStop[0].color;
            }
        } else {
            seriesColor = this.model.seriesColors[seriesIndex];
        }
        return seriesColor;
    },
    getTooltipFormat: function (seriesPoint, series, serIndex, ptIndex, format, numberToFixed) {
        var point = $.extend(true, {}, seriesPoint);
        series.count = 1;
        point.count = 1;
        if (this.model.AreaType == "cartesianaxes") {
            if (series.xAxis._valueType.toLowerCase() == "datetime")
                point.x = (Globalize.format(new Date(point.X), ((ej.util.isNullOrUndefined(series.xAxis.labelFormat)) ? ej.EjSvgRender.utils._dateTimeLabelFormat(series.xAxis.intervalType) : series.xAxis.labelFormat)));
            if (series.xAxis._valueType.toLowerCase() == "category")
                point.x = ej.EjSvgRender.utils._getLabelContent(ptIndex, series.xAxis);
        }
        else {
            if (series._xAxisValueType == "date")
                point.x = (Globalize.format(new Date(point.X), (ej.EjSvgRender.utils._dateTimeLabelFormat('days'))));
        }
        point.y = (ej.EjSvgRender.utils._decimalPlaces(point.y) == 0) ? point.y : point.y.toFixed(numberToFixed);
        var data = { series: series, point: point };
        format = format.parseTemplate(data);
        return format;
    },
    displayShowTooltip: function (location, point, series, pointIndex) {
        if (point.visible) {
            var seriesIndex = $.inArray(series, this.model._visibleSeries),
            seriesColor,
            textOffset,
            padding = 7,
            x,
            y,
            trackTooltipText,
            format = series.tooltip.format;

            //Set tooltip position ,text and color
            if (this.model.AreaType == "cartesianaxes" || this.model.AreaType=='polaraxes') {
                var numberToFixed = (series.yAxis.roundingPlaces === null || series.yAxis.roundingPlaces === undefined) ? 2 : series.yAxis.roundingPlaces;
                x = location.X + ((ej.util.isNullOrUndefined(series._trackMarker)) ? series.marker.size.width : (series._trackMarker.size.width)) + padding + 1;
                y = (location.Y);
                trackTooltipText = this.getTooltipFormat(point, series, seriesIndex, pointIndex, format, numberToFixed);
                seriesColor = this.getSeriesColor(point, seriesIndex);
                textOffset = ej.EjSvgRender.utils._measureText(trackTooltipText);
            } else {
                x = location.X + series.marker.size.width + padding;
                y = (location.Y);
                numberToFixed = ej.util.isNullOrUndefined(this.model.roundingPlaces) ? 2 : chartObj.model.roundingPlaces;
                trackTooltipText = this.getTooltipFormat(point, series, seriesIndex, pointIndex, format, numberToFixed); ;
                textOffset = ej.EjSvgRender.utils._measureText(trackTooltipText);
                seriesColor = this.model.pointColors[pointIndex];
            }
            var toolTipOptions = this.getTooltipOptions(seriesColor, series);
            var rectBorderColor = toolTipOptions.rectBColor;
            var rectFillColor = toolTipOptions.rectFColor;
            var textColor = toolTipOptions.rectTextColor;
            var rX = toolTipOptions.rectX;
            var rY = toolTipOptions.rectY;
            var rectOptions = series.tooltip;
            //draw tooltip rectangle
            var toolRectOptions = {
                'id': this.svgObject.id + '_ToolTipRect',
                'x': x,
                'y': y,
                'width': textOffset.width,
                'height': textOffset.height,
                'fill': (rectOptions.fill) ? rectOptions.fill : rectFillColor,
                'stroke-width': (rectOptions.border.width) ? rectOptions.border.width : 1,
                'stroke': (rectOptions.border.color) ? rectOptions.border.color : rectBorderColor,
                'fill-opacity': rectOptions.opacity,
                'rx': (rectOptions.rx) ? rectOptions.rx : rX,
                'ry': (rectOptions.ry) ? rectOptions.ry : rY
            };
            this.svgRenderer.drawRect(toolRectOptions, this.gTransToolEle);
            
            //event for tooltip text
            var commonTrackTextArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonTrackTextArgs.data = { seriesIndex: seriesIndex, pointIndex: pointIndex, currentText: trackTooltipText };
            this._trigger("toolTipInitialize", commonTrackTextArgs);

            //draw tooltip text
            var fontSize = 0;
            var tooltip = series.tooltip;
            var font = (tooltip.font) ? $.extend(false, series.font, {}, tooltip.font) : series.font;
            var textOptions = {
                'id': this.svgObject.id + '_ToolTipText',
                'x': x,
                'y': y,
                'fill': (tooltip.font && tooltip.font.color) ? font.color : textColor,
                'font-size': font.size,
                'font-family': font.fontFamily,
                'font-style': font.fontStyle,
                'font-weight': font.fontWeight,
                'text-anchor': 'start'
            };

            // Add string in text array for tooltip format
            var text = commonTrackTextArgs.data.currentText;
            if (commonTrackTextArgs.data.currentText.indexOf("<br/>") >= 0) {
                text = commonTrackTextArgs.data.currentText.split("<br/>");
            }
            fontSize = (this.model.AreaType == "cartesianaxes") ? ej.EjSvgRender.utils._measureText(text, series.xAxis.width, font).height : ej.EjSvgRender.utils._measureText(text, null, font).height;
            var maxWidth = (this.model.AreaType == "cartesianaxes") ? (this.model.requireInvertedAxes)?series.yAxis.width:series.xAxis.width : $(this.svgObject).width();
                this.svgRenderer.drawText(textOptions, text, this.gTransToolEle, font);
            if ($(this.svgObject).find("#" + this.svgObject.id +"_TrackToolTip").length == 0)
                this.svgRenderer.append(this.gTransToolEle, this.svgObject);
            //Adjust x-position to display tooltip within chart area 
            var box = $("#" + textOptions.id)[0].getBoundingClientRect();
            if ((x + (box.right - box.left)) >= maxWidth) {
                var diff = x - (((box.right - box.left) + ((ej.util.isNullOrUndefined(series._trackMarker)) ? ((series.marker.visible) ? series.marker.size.width : 0) : series._trackMarker.size.width)) + (4 * padding));
                this.svgRenderer._setAttr("#" + textOptions.id, { 'x': diff });
                var elements = $("#" + textOptions.id).children("tspan");
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    this.svgRenderer._setAttr(element, { 'x': diff });
                }
                x = diff;
            }

            //adjust rectangle size based on text length  
            this.svgRenderer._setAttr("#" + toolRectOptions.id, { 'x': (x - padding), 'y': ((y - (fontSize / 2)) - padding), 'width': (box.right - box.left) + 2 * padding, 'height': (box.bottom - box.top) + padding });
        }
    },
    _initializeSeriesColors: function () {
        var chartObj = this;
        var modelColor = (chartObj.model.palette) ? chartObj.model.palette : chartObj.model.colors;
        var count=modelColor.length
        for (var i = 0; i < this.model._visibleSeries.length; i++) {
            var series = this.model._visibleSeries[i];           
            if (series.visibility.toLowerCase() === 'visible' && chartObj.model.AreaType != "none") {
                if (!ej.util.isNullOrUndefined(series.fill)) {
                    chartObj.model.seriesColors[i] = ej.util.isNullOrUndefined(series.fill._gradientStop) ? series.fill : series.fill._gradientStop;
                } else {
                    chartObj.model.seriesColors[i] = modelColor[i % count];
                }
                if (!ej.util.isNullOrUndefined(series.border.color)) {
                    chartObj.model.seriesBorderColors[i] = series.border.color;
                } else {
                    chartObj.model.seriesBorderColors[i] = chartObj.model.seriesBorderDefaultColors[i % 10];
                }
            } else {
                if (series.visibility.toLowerCase() === 'visible') {
                    for (var j = 0; j < series.points.length; j++) {
                        var point = series.points[j];         
                        if (!ej.util.isNullOrUndefined(point.fill)) {
                            chartObj.model.pointColors[j] = ej.util.isNullOrUndefined(point.fill._gradientStop) ? point.fill : point.fill._gradientStop;
                            } else {
                            chartObj.model.pointColors[j] = modelColor[j % count];
                            }
                        if (!ej.util.isNullOrUndefined(point.border) && !ej.util.isNullOrUndefined(point.border.color)) {
                            chartObj.model.pointBorderColors[j] = point.border.color;
                            } else {
                                chartObj.model.pointBorderColors[j] = chartObj.model.seriesBorderDefaultColors[i % 10];
                            }      

                    }
                }

            }

        }
    },



    _createAxisLabelAndRange: function () {
        var unsift = false;
        this.model.axes = (!this.model.axes) ? [] : this.model.axes;
        for (var i = 0; i < this.model.axes.length; i++) {
            var axis = this.model.axes[i];
            axis.orientation = (!axis.orientation) ? "vertical" : axis.orientation;
            if (axis.orientation.toLowerCase() == "horizontal")
                this.model.axes[i] = $.extend(true, {}, this.model.secondaryX, axis);
            else
                this.model.axes[i] = $.extend(true, {}, this.model.secondaryY, axis);
        }


        this.model.primaryYAxis.name = "SecondaryAxis";
        this.model.primaryXAxis.name = "PrimaryAxis";

        for (var j = 0; j < this.model.axes.length; j++) {
            var axis = this.model.axes[j];
            if (axis.name === this.model.primaryXAxis.name || axis.name === this.model.primaryYAxis.name)
                unsift = true;
        }

        if (!unsift) {
            this.model.axes.unshift(this.model.primaryYAxis);
            this.model.axes.unshift(this.model.primaryXAxis);
        }
        for (var k = 0; k < this.model.axes.length; k++) {
            var axis = this.model.axes[k];
            if (!unsift) {
                if (this.model.requireInvertedAxes) {
                    if (axis.name === this.model.primaryYAxis.name || axis.name === this.model.primaryXAxis.name) {
                        if (axis.orientation.toLowerCase() == "horizontal") {
                            axis.orientation = "vertical";

                        } else {
                            axis.orientation = "horizontal";
                            axis.labelPlacement = (!(axis.labelPlacement)) ? ej.datavisualization.Chart.LabelPlacement.OnTicks : axis.labelPlacement;
                        }
                    }
                }
            }

            axis.visibleLabels = [];
            axis.setRange = (!(axis.range)) ? false : (ej.util.isNullOrUndefined(axis.setRange)) ? true : axis.setRange;
            axis.setRange = ((axis.actual_Range) || (axis.setRange != false)) ? true : false;
            axis.actualRange = (!(axis.actualRange)) ? (axis.range == null) ? {} : axis.range : axis.actualRange;
            axis.visibleRange = (!(axis.visibleRange)) ? (axis.range == null) ? {} : axis.range : axis.visibleRange;
            axis.name = !(axis.name) ? k.toString() : axis.name;
        }
    },






    _drawTitle: function () {
        var measureTitle = ej.EjSvgRender.utils._measureText(this.model.title.text, $(this.svgObject).width() - this.model.margin.left - this.model.margin.right, this.model.title.font);
        var modelTitleHeight = (this.model.title.text == "") ? 0 : (measureTitle.height + this.model.elementSpacing);


        // Drawing the chart title
        var legendSpace = (this.model.legend.position.toLowerCase() == "left") ? this.model.LegendBounds.Width / 2 : ((this.model.legend.position.toLowerCase() == "right" ? (-this.model.LegendBounds.Width / 2) : 0))
        var x = (this.model.AreaType != "cartesianaxes") ? legendSpace : this.model.m_AreaBounds.X;
        if (this.model.title.text != "" && this.model.title.text != null) {
            var titleLocation = this.model.margin.top + (modelTitleHeight / 2) + (this.model.elementSpacing);
            var locX = ((this.model.AreaType != "cartesianaxes") ? ($(this.svgObject).width() / 2) : (this.model.m_AreaBounds.Width / 2)) - measureTitle.width / 2;
           
            if (this.model.title.textAlignment.toLowerCase() == "near") {
                locX = 0;
            }
            else if (this.model.title.textAlignment.toLowerCase() == "far") {
                locX = $(this.svgObject).width() - (this.model.margin.right + this.model.elementSpacing + this.model.m_AreaBounds.X) - measureTitle.width;
            }


            var commonEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonEventArgs.data = { title: this.model.title.text, location: { x: locX, y: titleLocation }, size: measureTitle };
            this._trigger("titleRendering", commonEventArgs);
            this.model._titleLocation = { X: commonEventArgs.data.location.X + x, Y: commonEventArgs.data.location.y };
            var options = {
                'id': this.svgObject.id + '_ChartTitle',
                'x': commonEventArgs.data.location.x + x,
                'y': commonEventArgs.data.location.y,
                'fill': this.model.title.font.color,
                'font-size': this.model.title.font.size,
                'font-family': this.model.title.font.fontFamily,
                'font-style': this.model.title.font.fontStyle,
                'font-weight': this.model.title.font.fontWeight,
                'text-anchor': 'start'
            };

            this.svgRenderer.drawText(options, commonEventArgs.data.title, this.gTitleEle);

            this.svgRenderer.append(this.gTitleEle, this.svgObject);
        }
    },



    _getLegendSize: function (series) {

        var font = this.model.legend.font;
        var textSize = ej.EjSvgRender.utils._measureText(series.name, null, font);
        var symbolSize = this.model.legend.itemStyle;
        var padding = this.model.legend.itemPadding;


        var width = padding + symbolSize.width + padding + textSize.width;
        var height = Math.max(symbolSize.height + padding, textSize.height + padding);

        return { Width: width, Height: height };

    },

    _getYValues: function (series) {
        var values = [];
        for (var i = 0; i < series.points.length; i++)
            values.push(series.points[i].y);
        return values;
    },
    _getXValues: function () {
        var values = [];
        for (var i = 0; i < series.points.length; i++)
            values.push(series.points[i].X);
        return values;
    },


    _calculateStackingValues: function (seriesCollection, axis) {

        this.model.stackedValue[axis.name] = [];
        this.model.stackedValue[axis.name].min = 0;
        this.model.stackedValue[axis.name].max = 0;
        var stackAxes = (!this.model.requireInvertedAxes) ? this.model.hAxes : this.model.vAxes;

        for (var k = 0; k < stackAxes.length; k++) {
            j = 0;
            var lastPosValue = [];
            var lastNegValue = [];
            for (var i = 0; i < seriesCollection.length; i++) {
                if (seriesCollection[i].xAxisName == stackAxes[k].name) {
                    if (seriesCollection[i].type.toLowerCase().indexOf("stacking") != -1 || seriesCollection[i].isStacking) {
                        var values = {};
                        values.StartValues = [];
                        values.EndValues = [];
                        if (seriesCollection[i].stackingGroup && seriesCollection[i].type.toLowerCase() != "stackingarea") {
                            if (ej.util.isNullOrUndefined(lastPosValue[seriesCollection[i].stackingGroup])) {
                                lastPosValue[seriesCollection[i].stackingGroup] = [];
                                lastNegValue[seriesCollection[i].stackingGroup] = [];
                            }
                        }

                        else {
                            seriesCollection[i].stackingGroup = "";
                            if (ej.util.isNullOrUndefined(lastPosValue[seriesCollection[i].stackingGroup])) {
                                lastPosValue[seriesCollection[i].stackingGroup] = [];
                                lastNegValue[seriesCollection[i].stackingGroup] = [];
                            }
                        }
                        series = seriesCollection[i];
                        series.points = ej.DataManager(series.points, ej.Query().sortBy("X")).executeLocal();
                        var yValues = this._getYValues(series);
                        for (var j = 0; j < yValues.length; j++) {
                            var lastValue = 0;
                            var currentValue = yValues[j];
                            if (lastPosValue[seriesCollection[i].stackingGroup].length <= j)
                                lastPosValue[seriesCollection[i].stackingGroup].push(0);
                            if (lastNegValue[seriesCollection[i].stackingGroup].length <= j)
                                lastNegValue[seriesCollection[i].stackingGroup].push(0);
                            if (values.StartValues.length <= j) {
                                values.StartValues.push(0);
                                values.EndValues.push(0);
                            }
                            if (currentValue > 0) {
                                lastValue = lastPosValue[seriesCollection[i].stackingGroup][j];
                                lastPosValue[seriesCollection[i].stackingGroup][j] += currentValue;
                            }
                            else {
                                lastValue = lastNegValue[seriesCollection[i].stackingGroup][j];
                                lastNegValue[seriesCollection[i].stackingGroup][j] += currentValue;
                            }

                            values.StartValues[j] = lastValue;
                            values.EndValues[j] = currentValue + lastValue;
                            series.points[j].YValues = [values.EndValues[j]];
                        }
                        values.stackedSeries = false;
                        this.model.stackedValue[axis.name].push(values);
                        if (this.model.stackedValue[axis.name].min > Math.min.apply(0, values.StartValues))
                            this.model.stackedValue[axis.name].min = Math.min.apply(0, values.StartValues);
                        if (this.model.stackedValue[axis.name].max < Math.max.apply(0, values.EndValues))
                            this.model.stackedValue[axis.name].max = Math.max.apply(0, values.EndValues);
                        series.stackedValue = values;
                    }
                }
            }
        }
    },
    _legendItemBounds: function (itemCount, legendItemWidth, legendItemHeight) {
        var legend = this.model.legend;
        var legnedHeightIncr, column, legendWidth = 0, legendHeight = 0;
        if (ej.util.isNullOrUndefined(legend.columnCount) && legend.rowCount) {
            legnedHeightIncr = legend.rowCount;
            column = Math.ceil(itemCount / legnedHeightIncr);
            legendWidth = legendItemWidth * column;
            legendHeight = legendItemHeight * legnedHeightIncr;
        }
        else if (ej.util.isNullOrUndefined(legend.rowCount) && legend.columnCount) {
            legnedHeightIncr = Math.ceil(itemCount / legend.columnCount);
            legendWidth = legendItemWidth * this.model.legend.columnCount;
            legendHeight = legendItemHeight * legnedHeightIncr;
        }
        else if ((legend.rowCount) && (legend.columnCount)) {
            if (legend.columnCount < legend.rowCount) {
                legnedHeightIncr = legend.rowCount;
                column = Math.ceil(itemCount / legnedHeightIncr);
                legendWidth = legendItemWidth * column;
            }
            else {
                legnedHeightIncr = Math.ceil(itemCount / legend.columnCount);
                legendWidth = legendItemWidth * legend.columnCount;
            }
            legendHeight = legendItemHeight * legnedHeightIncr;
        }
        legendHeight += this.model.elementSpacing;
        return { LegendWidth: legendWidth, LegendHeight: legendHeight };
    },

    _calculateLegendBounds: function () {
        var chartObj = this;
        this.model.legendCollection = [];
        this.model.legendRegion = [];
        var width = 0, height = 0, legendItemWidth = 0, legendItemHeight = 0, legendWidth = 0, legendHeight = 0, legnedHeightIncr = 1;
        if (this.model._visibleSeries && this.model.legend.visible) {

            //calculating legend Position
            var legendsize;
            var style;
            var opacity;
            var colors = null;
            var colorGradName;
            if (this.model.AreaType == "none") {
                series = this.model._visibleSeries[0];
                var drawSeries = new ej.seriesTypes[series.type]();
                drawSeries._pieVisiblePoints(series);
                var visiblePoints = series.points;
                var point;
                var pointindex;
                var tempSeries;
                var legendFont;
                var legendItem;
                for (j = 0; j < visiblePoints.length; j++) {
                    point = visiblePoints[j];
                    pointindex = j;
                    tempSeries = { name: point.X, Font: series.font };
                    legendsize = chartObj._getLegendSize(tempSeries);
                    legendItemWidth = Math.max(legendsize.Width, legendItemWidth);
                    legendItemHeight = Math.max(legendsize.Height, legendItemHeight);

                }
                if (chartObj.model.legend.columnCount || chartObj.model.legend.rowCount) {
                    legendBounds = this._legendItemBounds(visiblePoints.length, legendItemWidth, legendItemHeight);
                    legendWidth = legendBounds.LegendWidth;
                    legendHeight = legendBounds.LegendHeight;
                }

                for (var k = 0; k < visiblePoints.length; k++) {
                    point = visiblePoints[k];
                    pointindex = k;
                    tempSeries = { name: point.X, Font: series.font };
                    legendsize = chartObj._getLegendSize(tempSeries);
                    if (!(chartObj.model.legend.rowCount) && !(chartObj.model.legend.columnCount)) {
                        if ((chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.top || chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.bottom || chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.custom)) {
                            width += legendsize.Width;
                            if (width > $(chartObj.svgObject).width()) {
                                width -= legendsize.Width;
                                legendWidth = Math.max(legendWidth, width);
                                width = legendsize.Width;
                                legnedHeightIncr++;
                                legendHeight = legendItemHeight * legnedHeightIncr;
                                legendHeight += this.model.elementSpacing;
                            }
                            else
                                legendWidth = Math.max(legendWidth, width);

                            height = Math.max(height, legendItemHeight);
                        }
                        else {
                            height += legendItemHeight;
                            legendWidth = Math.max(width, legendItemWidth);
                        }
                    }
                
                    var legend = (chartObj.model.legend);
                    opacity = legend.opacity;


                    if (legend.fill) {
                        colors = !(legend.fill._gradientStop) ? legend.fill : legend.fill._gradientStop;
                        }
                        else {
                            colors = chartObj.model.pointColors[pointindex];
                        }

                    if (point.visible)
                        colorGradName = chartObj.svgRenderer.createGradientElement('legend' + pointindex, colors, 0, 0, 0, $(chartObj.svgObject).height(), chartObj.gLegendEle);
                    else
                        colorGradName = 'gray';



                        if (series.font)

                            legendFont = series.font;

                        else
                            legendFont = chartObj.model.legend.font;

                        var bounds = (chartObj.model.legend.rowCount || chartObj.model.legend.columnCount) ? { Width: legendItemWidth, Height: legendItemHeight} : legendsize;
                        legendItem = { Text: point.X, Shape: chartObj.model.legend.shape, LegendStyle: { BorderColor: chartObj.model.legend.itemStyle.border.color, BorderWidth: chartObj.model.legend.itemStyle.border.width, Opacity: opacity, Color: colorGradName, Font: legendFont }, Bounds: bounds, SeriesIndex: 0, PointIndex: pointindex };
                        chartObj.model.legendCollection.push(legendItem);

                    
                }
            }
            else {
                var series;
                for (var i = 0; i < this.model._visibleSeries.length; i++) {
                    series = this.model._visibleSeries[i];
                    legendsize = chartObj._getLegendSize(series);
                    legendItemWidth = Math.max(legendsize.Width, legendItemWidth);
                    legendItemHeight = Math.max(legendsize.Height, legendItemHeight);
                }
                if (chartObj.model.legend.columnCount || chartObj.model.legend.rowCount) {
                    var legendBounds = this._legendItemBounds(this.model._visibleSeries.length, legendItemWidth, legendItemHeight);
                    legendWidth = legendBounds.LegendWidth;
                    legendHeight = legendBounds.LegendHeight;
                }
                for (var j = 0; j < this.model._visibleSeries.length; j++) {
                    index = j;
                    series = this.model._visibleSeries[j];
                    legendsize = chartObj._getLegendSize(series);
                    if (!chartObj.model.legend.rowCount && !chartObj.model.legend.columnCount) {
                        if (chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.top || chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.bottom || chartObj.model.legend.position.toLowerCase() == chartObj.model.legendPosition.custom) {
                            width += legendsize.Width;
                            if (width > $(chartObj.svgObject).width()) {
                                width -= legendsize.Width;
                                legendWidth = Math.max(legendWidth, width);
                                width = legendsize.Width;
                                legnedHeightIncr++;
                                legendHeight = legendItemHeight * legnedHeightIncr;
                                legendHeight += this.model.elementSpacing;
                            }
                            height = Math.max(height, legendsize.Height);
                        }


                        else {

                            height += legendItemHeight;
                            width = Math.max(width, legendItemWidth);
                        }
                    }
                     
                    var legend = (chartObj.model.legend);
                        opacity = legend.opacity;
                    

                    //                    // calculate gradient. 

                        if (legend.fill) {
                            colors = !(legend.fill._gradientStop) ? legend.fill : legend.fill._gradientStop;
                    }
                    else {
                        colors = chartObj.model.seriesColors[index];
                    }

                    if (series.visibility.toLowerCase() === 'visible')
                        colorGradName = chartObj.svgRenderer.createGradientElement('legend' + index, colors, 0, 0, 0, $(chartObj.svgObject).height(), chartObj.gLegendEle);
                    else
                        colorGradName = 'gray';

                    if (series.font)

                        legendFont = series.font;

                    else
                        legendFont = chartObj.model.legend.font;

                    bounds = (chartObj.model.legend.rowCount || chartObj.model.legend.columnCount) ? { Width: legendItemWidth, Height: legendItemHeight} : legendsize;
                    legendItem = { Text: (series.name) ? series.name : "series" + i, Shape: chartObj.model.legend.shape, LegendStyle: { BorderColor: chartObj.model.legend.itemStyle.border.color, BorderWidth: chartObj.model.legend.itemStyle.border.width, Opacity: opacity, Color: colorGradName, Font: legendFont }, Bounds: bounds, SeriesIndex: index };
                    chartObj.model.legendCollection.push(legendItem);
                }
            }
            if (this.model.legend.position.toLowerCase() === this.model.legendPosition.top || this.model.legend.position.toLowerCase() === this.model.legendPosition.bottom || this.model.legend.position.toLowerCase() === this.model.legendPosition.custom) {
                width += chartObj.model.legend.itemPadding;
                height += chartObj.model.legend.itemPadding;
                this.model.LegendBounds = { Width: Math.max(legendWidth, width), Height: Math.max(legendHeight, height), Rows: legnedHeightIncr };
            }
            else {
                width += chartObj.model.legend.itemPadding;
                height += chartObj.model.legend.itemPadding;
                this.model.LegendBounds = { Width: Math.max(legendWidth, width), Height: Math.max(legendHeight, height), Columns: legnedHeightIncr };
            }

        }
        else {
            this.model.LegendBounds = { Width: 0, Height: 0 };
        }

    },



    GetPointXYOrgin: function (x, y, orginX, orginY) {

        var xvalue = ((x - orginX) / (this.model.axes.PrimaryXaxis.visibleRange.max - orginX)) * (this.model.m_AreaBounds.Width);
        var yvalue = ((y - orginY) / (this.model.axes.PrimaryYaxis.visibleRange.max - orginY)) * (this.model.m_AreaBounds.Height - this.GetPointXY(this.model.axes.PrimaryXaxis.visibleRange.min, Math.max(this.model.axes.PrimaryYaxis.visibleRange.min, 0)).Y);

        return { X: xvalue, Y: yvalue };
    },






  


    _drawChartAreaRect: function () {

        var fillColor = !(this.model.background && this.model.background._gradientStop) ? this.model.background : 'url(#' + this.svgObject.id + '_backGradient)';

        if (this.model.backGroundImageUrl)
            fillColor = 'transparent';
        
        var chartBorder = this.model.border;
        
            var options = {
                'id': this.svgObject.id + '_SvgRect',
                'x': (chartBorder.width > 0) ? chartBorder.width / 2 : 0,
                'y': (chartBorder.width > 0) ? chartBorder.width / 2 : 0,
                'width': $(this.svgObject).width() - (2 * chartBorder.width),
                'height': $(this.svgObject).height() - (2 * chartBorder.width),
                'fill': fillColor,
                'opacity': chartBorder.opacity,
                'stroke-width': chartBorder.width,
                'stroke': chartBorder.color
            };
            this.svgRenderer.drawRect(options, this.svgObject);
        


        if (this.model.backGroundImageUrl)
            this._drawBackImage();

        if ( this.model.AreaType == 'cartesianaxes') {
            var borderOptions = {
                'id': this.svgObject.id + '_ChartArea',
                'x': this.model.m_AreaBounds.X,
                'y': this.model.m_AreaBounds.Y,
                'width': this.model.m_AreaBounds.Width,
                'height': this.model.m_AreaBounds.Height,
                'fill': this.model.chartArea.background,
                'stroke-width': this.model.chartArea.border.width,
                'opacity': this.model.chartArea.border.opacity,
                'stroke': this.model.chartArea.border.color
            };
            this.svgRenderer.drawRect(borderOptions, this.svgObject);


        }

    },
    axesIndexCount: function (axis,index) {
        var vRowcount = [];
        for (var k = 0; k < axis.length; k++) {
            var currentAxis = axis[k];
            if (currentAxis.orientation.toLowerCase() == "vertical") {
                if (currentAxis.rowIndex == index)
                    vRowcount.push(currentAxis);
            }
            else {
                if (currentAxis.columnIndex == index)
                    vRowcount.push(currentAxis);
            }
        }
        return vRowcount ;
    },
    axesCount: function (axis) {
        var vRowcount = [], indexValue=[], definitionsLength=0;
        var chartModel = this.model;
        $.each(axis, function (index, currentAxis) {
            if (currentAxis.orientation.toLowerCase() == "vertical") {
                definitionsLength =(chartModel.rowDefinitions)?chartModel.rowDefinitions.length:0;
                if (index == 0) vRowcount.push({ axis: currentAxis, index: currentAxis.rowIndex });
                else if (currentAxis.rowIndex != vRowcount[vRowcount.length - 1].axis.rowIndex)
                    vRowcount.push({ axis: currentAxis, index: currentAxis.rowIndex});
            }
            else {
                definitionsLength =(chartModel.columnDefinitions)? chartModel.columnDefinitions.length:0;
                if (index == 0) vRowcount.push({ axis: currentAxis, index: currentAxis.columnIndex });
                else if (currentAxis.columnIndex != vRowcount[vRowcount.length - 1].axis.columnIndex)
                    vRowcount.push({ axis: currentAxis, index: currentAxis.columnIndex });
            }
        });
        var length = vRowcount.length;
        if (definitionsLength > length) {
            length = definitionsLength;
            for (var l = 0; l < definitionsLength; l++)
                indexValue.push(l);
        } else {
            for (var i = 0; i < length; i++)
                indexValue.push(vRowcount[i].index);
        }
        
        return { length: length, indexValue: indexValue };

    },
   
     //Calculate position for each vertical axis
    _calRowSize: function () {
        var start = 0;
        var yaxisOrign = [];
        var totalRealLength = 0;
        var orginY = this.model.m_AreaBounds.Y + this.model.m_AreaBounds.Height;
        //Caluculate size for rowdefinitions values
        if (this.model._rowDefinitions[0].rowDefinitions != null) {
            for (var i = 0, rowMax = this.model._rowDefinitions.length; i < rowMax; i++) {
                var rowDef = this.model._rowDefinitions[i].rowDefinitions;
                
                var realLength = 0;
                if (rowDef.unit.toLowerCase() == "percentage")
                    realLength = Math.floor((this.model.m_AreaBounds.Height) * (rowDef.rowHeight / 100));
                else
                    realLength = rowDef.rowHeight;
                if (i == 0) yaxisOrign.push(orginY);
                   
                      yaxisOrign.push( (orginY - realLength - totalRealLength ));
                    totalRealLength += realLength;
                

            }
            
        }
        //Calculate size based on chart area size
        else {
            var height = Math.floor((this.model.m_AreaBounds.Height) / this.model._rowDefinitions.length);

            for (start = (orginY) ; start >= this.model.m_AreaBounds.Y; start = start - height) {
                yaxisOrign.push(start);
            }
        }
        return yaxisOrign;
    },
    
     //Calculate position for each horizontal axis
    _calColumnSize: function () {
        var xaxisOrign = [];
        var orginX = this.model.m_AreaBounds.X;
        var areaWidth = this.model.m_AreaBounds.Width;
        var totalRealLength = 0;
        var columnDef = this.model._columnDefinitions;
        //Caluculate size for columndefinitions values
        if (columnDef[0].columnDefinitions != null) {
            for (var i = 0, max = columnDef.length; i < max; i++) {
                var rowDef = columnDef[i].columnDefinitions;

                var realLength;
                if (rowDef.unit.toLowerCase() == "percentage")
                    realLength = Math.floor((areaWidth) * (rowDef.columnWidth / 100));
                else
                    realLength = rowDef.columnWidth;
                if (i == 0) xaxisOrign.push(orginX);

                xaxisOrign.push((orginX + realLength + totalRealLength));
                totalRealLength += realLength;
            }
        }
        //Caluculate size based on chart area size
        else {
            var width = Math.floor((areaWidth) / columnDef.length);
            for (var start = orginX, maxStart = orginX + areaWidth; start <= maxStart; start = start + width) {
                xaxisOrign.push(start);

            }
        }
        return xaxisOrign;
    },
    
     //Calculate position and size for each axis
    _calculateAxisSize: function () {

        //For Horizontal
        var isInitAxes = true, isOppInitAxes = true;
        var xaxisOrign = this._calColumnSize();
        var columnDefinition = this.model._columnDefinitions;
        for (var i = 0, maxLength = columnDefinition.length; i < maxLength; i++) {
            var x1 = xaxisOrign[i];
            var x2 = xaxisOrign[i + 1];
            var nearIndexVal = 0;
            var farIndexVal = 0;;
            var isColFirstAxes = true, isColOppFirstAxes = true;
            var oppY = this.model.m_AreaBounds.Y;
            var norY = oppY + this.model.m_AreaBounds.Height;
            for (var j = 0, maxCol = columnDefinition[i].axis.length; j < maxCol; j++) {
                var currentColAxis = columnDefinition[i].axis[j];
                var realY = 0, axisColumnSpace=0;
                if (!currentColAxis.opposedPosition) {
                    if (!(isColFirstAxes && (isInitAxes || nearIndexVal==0))) {
                        axisColumnSpace = columnDefinition.nearSizes[nearIndexVal];
                        realY = norY = (norY + axisColumnSpace);
                        nearIndexVal++;
                    }
                    else {
                        realY = norY;
                        isColFirstAxes = false;
                    }

                } else {
                    if (!(isColOppFirstAxes && (isOppInitAxes || farIndexVal==0))) {
                        axisColumnSpace = columnDefinition.farSizes[farIndexVal];
                        realY = oppY = (oppY - axisColumnSpace);
                        farIndexVal++;
                    }
                    else {
                        realY = oppY;
                        isColOppFirstAxes = false;
                    }
                    }
                if (currentColAxis.columnSpan) {
                    //Skip the axis size calculation for duplicate span axis
                    if (!(columnDefinition[i].index == currentColAxis.columnIndex))
                        continue;
                    var axisSize = (maxLength >= (i + currentColAxis.columnSpan)) ? i + currentColAxis.columnSpan : i+1;
                    x2 = xaxisOrign[axisSize];
                    if (!currentColAxis.opposedPosition && nearIndexVal==0)isInitAxes = isColFirstAxes;
                    if (currentColAxis.opposedPosition && farIndexVal == 0) isOppInitAxes = isColOppFirstAxes;
                } else {
                    x2 = xaxisOrign[i + 1];
                    isInitAxes = true;
                    isOppInitAxes = true;
                }
                
               currentColAxis.Location = { };
                currentColAxis.Location.X1 = x1 + currentColAxis.plotOffset;
                currentColAxis.Location.Y1 = realY;
                currentColAxis.Location.X2 = x2 - currentColAxis.plotOffset;
                currentColAxis.Location.Y2 = realY;
                currentColAxis.x = currentColAxis.Location.X1;
                currentColAxis.y = currentColAxis.Location.Y1;
                currentColAxis.width = (currentColAxis.Location.X2 - currentColAxis.Location.X1);
                currentColAxis.height = currentColAxis.Location.Y2 - currentColAxis.Location.Y1;

            }
        }
        
        //For Vertical
        isInitAxes = true, isOppInitAxes = true;
        var yaxisOrign = this._calRowSize();
        var rowDefinition = this.model._rowDefinitions;
        for (var i = 0, rowLength = rowDefinition.length; i < rowLength; i++) {
            var y1 = yaxisOrign[i];
            var y2 = yaxisOrign[i + 1];
            var nearIndex = 0;
            var farIndex = 0;
            var isFirstAxes = true, isOppFirstAxes = true;
           var x = this.model.m_AreaBounds.X;
           var norX = x, oppX = x + this.model.m_AreaBounds.Width;
           for (var j = 0, maxRow = rowDefinition[i].axis.length; j < maxRow; j++) {
                var axisSpace = 0;
                var realX = 0;
               
                var currentAxis = rowDefinition[i].axis[j];
               
               if (!currentAxis.opposedPosition) {
                   if (!(isFirstAxes && (isInitAxes || nearIndex==0))) {
                        axisSpace = rowDefinition.nearSizes[nearIndex];
                        realX = norX = (norX - axisSpace);
                        nearIndex++;
                    } else {
                        realX = x;
                        isFirstAxes = false;
                    }

                } else {
                   if (!(isOppFirstAxes && (isOppInitAxes|| isOppInitAxes==0))) {
                        axisSpace = rowDefinition.farSizes[farIndex];
                        realX = oppX = (oppX + axisSpace);
                        farIndex++;
                    } else {
                        realX = oppX;
                        isOppFirstAxes = false;
                    }
                }
                if (currentAxis.rowSpan) {
                    //Skip the axis size calculation for duplicate span axis
                    if (!(rowDefinition[i].index == currentAxis.rowIndex))
                        continue;
                    var axisRowSize = (rowLength >= (i + currentAxis.rowSpan)) ? i + currentAxis.rowSpan : i + 1;
                    y2 = yaxisOrign[axisRowSize];
                    if (!currentAxis.opposedPosition && nearIndex==0) isInitAxes = isFirstAxes;
                    if (currentAxis.opposedPosition && farIndex==0) isOppInitAxes = isOppFirstAxes;
                } else {
                    y2 = yaxisOrign[i + 1];
                    isInitAxes = true;
                    isOppInitAxes = true;
                }
                currentAxis.Location = { };
                currentAxis.Location.X1 = realX;
                currentAxis.Location.Y1 = y1 - currentAxis.plotOffset;
                currentAxis.Location.X2 = realX;
                currentAxis.Location.Y2 = y2 + currentAxis.plotOffset;
                currentAxis.x = currentAxis.Location.X1;
                currentAxis.y = currentAxis.Location.Y2;
                currentAxis.height = (currentAxis.Location.Y1 - currentAxis.Location.Y2);
                currentAxis.width = currentAxis.axisLine.width;

            }
        }
    },
    _arrangeAxis: function () {
        var chartobj = this;
        var axis;
        var customRow;
        //Generate columnIndex/RowIndex value if it is not specify in sample  
        for (var i = 0; i < this.model.axes.length; i++) {
            axis = this.model.axes[i];
            if (axis.orientation.toLowerCase() == "horizontal") {
                chartobj.model.hAxes.push(axis);
                axis.columnIndex = (ej.util.isNullOrUndefined(axis.columnIndex)) ? 0 : (axis.columnIndex);
                chartobj.model.hAxes[chartobj.model.hAxes.length - 1].columnIndex = axis.columnIndex;
            } else if (axis.orientation.toLowerCase() == "vertical") {

                chartobj.model.vAxes.push(axis);
                axis.rowIndex = (ej.util.isNullOrUndefined(axis.rowIndex)) ? 0 : (axis.rowIndex);
                chartobj.model.vAxes[chartobj.model.vAxes.length - 1].rowIndex = axis.rowIndex;
                customRow = (!ej.util.isNullOrUndefined(chartobj.model.rowDefinitions)) ? chartobj.model.rowDefinitions[axis.rowIndex] : null;
                if (customRow) {
                    axis.axisBottomLine = {};
                    axis.axisBottomLine.visible = true;
                    axis.axisBottomLine.lineWidth = customRow.lineWidth;
                    axis.axisBottomLine.color = customRow.lineColor;
                }
            }
        }

        this.model.hAxes = ej.DataManager(this.model.hAxes, ej.Query().sortBy("columnIndex")).executeLocal();

        this.model.vAxes = ej.DataManager(this.model.vAxes, ej.Query().sortBy("rowIndex")).executeLocal();
        
        //column axis information push into _rowDefinitions
        var rowCount = this.axesCount(chartobj.model.vAxes);
         chartobj.model._rowDefinitions = [];
        if (chartobj.model.vAxes.length>0) {
            for (var j = 0; j < rowCount.length; j++) {
                var rowCollection = chartobj.model.rowDefinitions;
                var rowDefinitions = ((rowCollection)) ? (rowCollection[j] ? rowCollection[j] : rowCollection[0]) : null;
                chartobj.model._rowDefinitions.push({axis: this.axesIndexCount(chartobj.model.vAxes, rowCount.indexValue[j])
                                , index: rowCount.indexValue[j], rowDefinitions: rowDefinitions });
            }
        }

        var rowDefinition = chartobj.model._rowDefinitions;
        //Using filter to get spanning row axis collection
        var spanningRow = this._axisFilter(rowDefinition, "rowSpan");
        //Arrange the entire axis for row span
        this._SpanningAxes(rowDefinition, spanningRow, true);

        //column axis information push into _columnDefinitions
        var columnCount = this.axesCount(chartobj.model.hAxes);
        chartobj.model._columnDefinitions = [];
        if (chartobj.model.hAxes.length > 0) {
            for (var k = 0; k < columnCount.length; k++) {
                var columnCollection = chartobj.model.columnDefinitions;
                var columnDefinitions = (columnCollection) ? (columnCollection[k] ? columnCollection[k] : columnCollection[0]) : null;
                chartobj.model._columnDefinitions.push({
                    axis: this.axesIndexCount(chartobj.model.hAxes, columnCount.indexValue[k])
                    , index: columnCount.indexValue[k], columnDefinitions: columnDefinitions });
            }
        }
        
        var columnDefinition = chartobj.model._columnDefinitions;
        //Using filter to get spanning column axis collection
        var spanningColumn = this._axisFilter(columnDefinition, "columnSpan");
        //Arrange the entire axis for column span
        this._SpanningAxes(columnDefinition, spanningColumn, false);
       
        this._axisSize();
        
        
    },
    
     //Arrange the entire axis for spanning
    _SpanningAxes: function (definition,spanningCollection, isRow) {
        for (var spanIndex = 0, spanMax = spanningCollection.length; spanIndex < spanMax; spanIndex++) {
            var currentAxis = spanningCollection[spanIndex];
             if (currentAxis == null) break;
             var span = isRow ? currentAxis.rowSpan : currentAxis.columnSpan;
             var index = isRow ? currentAxis.rowIndex : currentAxis.columnIndex;
             var axisIndex = definition[index].axis.indexOf(currentAxis);
             for (var k = 1, m = index + 1; k < span && m < definition.length; k++, m++) {
                 if (definition[m].axis.length >= axisIndex) {
                     //Insert duplicate span row to appropriate rowdefinition
                     definition[m].axis.splice(axisIndex, 0, currentAxis);
                 }
             }
         }
     },
    
     //Filter span axis from axes
    _axisFilter: function (definition, fieldName) {
        var axisResult = [];
        definition.filter(function (axes) {
             //Execute query to get spanning axis from axis array
              var axisCollection = ej.DataManager(axes["axis"], ej.Query().where(fieldName, ">", 1)).executeLocal();
              for (var i = 0, max = axisCollection.length; i < max; i++)
                  axisResult.push(axisCollection[i]);
        });
        return axisResult;
    },
    
    _axisSize: function () {
        //The below calcultion to get approximate length of axis
         var spaceValue = this._getLegendSpace();
         var hSpace = $(this.svgObject).width() - this.model.margin.left - this.model.margin.right - (this.model.elementSpacing * 2) - spaceValue.leftLegendWidth - spaceValue.rightLegendWidth;
        var hWidth = Math.floor(hSpace / this.axesCount(this.model.hAxes).length);

        var vSpace = $(this.svgObject).height() - this.model.margin.top - this.model.margin.bottom - (this.model.elementSpacing * 2) - spaceValue.topLegendHeight - spaceValue.bottomLegendHeight - spaceValue.modelTitleHeight;
        var vWidth = Math.floor(vSpace / this.axesCount(this.model.vAxes).length);

       

        for (var j = 0; j < this.model.axes.length; j++) {
            axis = this.model.axes[j];
            if (axis.orientation.toLowerCase() == "horizontal") {
                if (this.model.AreaType != "polaraxes") {
                    var customColumn = (!ej.util.isNullOrUndefined(this.model.columnDefinitions)) ? this.model.columnDefinitions[axis.columnIndex] : null;
                    var columnLength = hWidth;
                    if (customColumn) {
                        if (customColumn.unit.toLowerCase() == "percentage")
                            columnLength = Math.floor((hWidth) * (customColumn.columnWidth / 100));
                        else
                            columnLength = customColumn.columnWidth;

                    }
                    axis.length = axis.columnSpan ? axis.columnSpan * columnLength : columnLength;
                }
                else {
                    if (hSpace > vSpace*2)
                        axis.length = hSpace - vSpace;
                    else
                        axis.length = hSpace;
                }
            } else if (axis.orientation.toLowerCase() == "vertical") {
                if (this.model.AreaType != "polaraxes") {
                    var customRow = (!ej.util.isNullOrUndefined(this.model.rowDefinitions)) ? this.model.rowDefinitions[axis.rowIndex] : null;
                    var realLength = vWidth;
                    if (customRow) {
                        if (customRow.unit.toLowerCase() == "percentage")
                            realLength = Math.floor((vWidth) * (customRow.rowHeight / 100));
                        else
                            realLength = customRow.rowHeight;

                    }
                    axis.length = axis.rowSpan ? (axis.rowSpan * realLength) : realLength;
                }
                else {
                    axis.length = vSpace / 2;
                }
            }
        }
    },
   _axisMeasure: function (axis, realWidth, orientation) {
        var axisTitleHeight =0; 
        var labelSize =0; 
		if(orientation == "vertical")
		{
		 labelSize= axis._LableMaxWidth.width;
		 axisTitleHeight =(axis.title.text == "" || !(axis.visible)) ? 0 : (ej.EjSvgRender.utils._measureText(axis.title.text, realWidth, axis.title.font).height + (2 * this.model.elementSpacing));
		}
		else
		{
		labelSize=(axis._LableMaxWidth.height);
	    axisTitleHeight =(axis.title.text == "" || !(axis.visible)) ? 0 : (ej.EjSvgRender.utils._measureText(axis.title.text, realWidth, axis.title.font).height + (this.model.elementSpacing));
		}
		axis.AxisMaxWidth = this.model.elementSpacing + axisTitleHeight + labelSize + axis.majorTickLines.size + axis.axisLine.width;
        return axis.AxisMaxWidth;
    },
     
    _arraySum: function (val) {
        var total = 0;
        for (var i = 0; i < val.length; i++) {
            total +=  parseFloat(val[i]) || 0;
        }
        return total;
    },
    _calSpace: function (realWidth, definitions,orientation) {
        var nearSizes = [];
        var farSizes = [];
        for (var i = 0; i < definitions.length; i++) {
            var nearIndex = 0, farIndex = 0;
            for (var j = 0; j < definitions[i].axis.length; j++) {
                var currentaxis = definitions[i].axis[j];
                var measureValue = this._axisMeasure(currentaxis, realWidth, orientation);
                if (!currentaxis.opposedPosition) {
                    if (nearSizes.length <= nearIndex) {
                        nearSizes.push(measureValue);
                    } else if (nearSizes[nearIndex] < (measureValue)) {
                        nearSizes[nearIndex] = measureValue;
                    }
                    nearIndex++;
                }
                else {
                    if (farSizes.length <= farIndex) {
                        farSizes.push(measureValue);
                    } else if (farSizes[farIndex] < (measureValue)) {
                        farSizes[farIndex] = measureValue;
                    }
                    farIndex++;
                }

            }
         }
        return { nearSizes: nearSizes, farSizes: farSizes };
    },
    
    _getLegendSpace:function () {
        var position = this.model.legend.position.toLowerCase();
        var legendPosition = this.model.legendPosition;
        var space = (this.model.LegendBounds.Width + (this.model.legend.itemPadding / 2) + this.model.elementSpacing);
        var leftLegendWidth = position == legendPosition.left ? space : 0;
        var rightLegendWidth = position == legendPosition.right ? space : 0;

        var topLegendHeight = position == legendPosition.top ? (this.model.LegendBounds.Height) : 0;
        var bottomLegendHeight = position == legendPosition.bottom ? (this.model.LegendBounds.Height) : 0;
        var modelTitleHeight = (this.model.title.text == "") ? 0 : (ej.EjSvgRender.utils._measureText(this.model.title.text, $(this.svgObject).width() - this.model.margin.left - this.model.margin.right, this.model.title.font).height + this.model.elementSpacing);

        return { leftLegendWidth: leftLegendWidth, rightLegendWidth: rightLegendWidth, topLegendHeight: topLegendHeight, bottomLegendHeight: bottomLegendHeight, modelTitleHeight: modelTitleHeight };


    },
    _calculateAreaBounds: function () {
        var chartobj = this;
        var realWidth = $(this.svgObject).width() - this.model.margin.left - this.model.margin.right;
        // Calculate area bounds X and width
        var chartBorderWidth = chartobj.model.border.width;

        //Calcultion for multiple axes(vertical)
        var sizes = this._calSpace(realWidth, chartobj.model._rowDefinitions,"vertical");
        chartobj.model._rowDefinitions.nearSizes = sizes.nearSizes;
        chartobj.model._rowDefinitions.farSizes = sizes.farSizes;
        var vAxesWidth = this._arraySum(sizes.nearSizes);
        var vAxesOppWidth = this._arraySum(sizes.farSizes);

        var spaceValue=this._getLegendSpace();
       
        var x = vAxesWidth + spaceValue.leftLegendWidth + chartobj.model.margin.left + chartBorderWidth;     
        var rightSpacing = vAxesOppWidth + spaceValue.rightLegendWidth + chartobj.model.margin.right + chartobj.model.margin.left + (2 * chartBorderWidth);
        var boundsWidth = $(this.svgObject).width() - (x + rightSpacing);

        // Calculate area bounds Y and Height   
        
        //Calcultion for multiple axes(vertical)
        var columnSizes = this._calSpace(realWidth, chartobj.model._columnDefinitions,"horizontal");
        chartobj.model._columnDefinitions.nearSizes = columnSizes.nearSizes;
        chartobj.model._columnDefinitions.farSizes = columnSizes.farSizes;
        var hAxesWidth = this._arraySum(columnSizes.nearSizes);
        var hAxesOppWidth = this._arraySum(columnSizes.farSizes);
         
        var y = hAxesOppWidth + this.model.margin.top + this.model.elementSpacing + spaceValue.modelTitleHeight + spaceValue.topLegendHeight + chartBorderWidth;
        var bottomSpacing = hAxesWidth + this.model.margin.bottom + spaceValue.bottomLegendHeight + (2 * chartBorderWidth);
        var boundsHeight = Math.abs($(this.svgObject).height() - (y + bottomSpacing));
        
        this.model.m_AreaBounds = { X: x, Y: y, Width: boundsWidth, Height: boundsHeight };
        this.model.m_Spacing = { Left: x, Top: y, Right: rightSpacing, Bottom: bottomSpacing };
      }
};

jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];

    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
};


 
})(jQuery);;
/**
* @fileOverview Plugin to style the Html Chart elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/

(function ($, ej) {
    /**
     * @class ejChart
     * @requires jQuery.js
     * @requires ej.core.js
     * @requires ej.data.js
     * @requires ej.chart.js
     * @requires jQuery.globalize.js
     * @classdesc The chart can be easily configured to the DOM element, such as div. you can create a grid with a highly customizable look and feel.
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; <br> 
     * &lt;script&gt;
     * // Create Chart
     * $('#container').ejChart(); 	
     * &lt;/script&gt;
     */

    ej.widget("ejChart", "ej.datavisualization.Chart", /** @lends ejChart# */{

        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,

        validTags: ["div"],

        // default model
        defaults: /** @lends ejChart# */ {
            /**		
			* Options for customizing the color, opacity and width of the border of chart.
			* @type {object}
			*/
            border: /** @lends ejChart# */ {
                /**		
			* Specifies the border color of the chart.
            * @default null
			* @type {string}
			* @example  				
			* &lt;div id="container"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            * $("#container").ejChart({
            *    border: { color: "green" }                      
            * });
            * &lt;/script&gt;                
			* @alias ejChart#border->color
			*/
                color: 'transparent',
                /**		
			* Specifies the border width of the chart.
			* @default 0
			* @type {number}		 
			* @example 
			* &lt;div id="container"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            * $("#container").ejChart({
            *    border: { width: 2 }                      
            * });
            * &lt;/script&gt; 
		    * @alias ejChart#border->width
			*/
                width: 0,
                /**		
			* Specifies the border opacity of the chart
			* @default 0.3
			* @type {number}			
			* @example 
			* &lt;div id="container"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            * $("#container").ejChart({
            *    border: { opacity: 0.5 }                      
            * });
            * &lt;/script&gt; 
			 * @alias ejChart#border->opacity
			*/
                opacity: 0.3
            },
            /**		
			* Specifies options for configuring the border and background for chart plotting area.
			* @type {object}
			*/
            chartArea: /** @lends ejChart# */
            {
                /**		
			* Options for customizing the color, opacity and width of the border of chart plotting area.
			* @type {object}
			 * @alias ejChart#chartArea->border
			*/
                border: {
                    /**		
          * Specifies the border color of chart plotting area.
          * @default Gray
          * @type {string}				
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
          * &lt;script&gt;
          * $("#container").ejChart({
          *    chartArea: { border: { color :"green"} }                      
          * });
          * &lt;/script&gt; 
          * @alias ejChart#chartArea->border->color
          */
                    color: 'Gray',
                    /**		
          * Specifies the border width of chart plotting area.
          * @default 0.5
          * @type {number}
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
          * &lt;script&gt;
          * $("#container").ejChart({
          *     chartArea: { border: { width : 0.2} }                      
          * });
          * &lt;/script&gt; 
          * @alias ejChart#chartArea->border->width
          */
                    width: 0.5,
                    /**		
          * Specifies the border opacity of chart plotting area.
          * @default 0.3
          * @type {number}	
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
          * &lt;script&gt;
          * $("#container").ejChart({
          *     chartArea: { border: { opacity : 0.5} }                      
          * });
          * &lt;/script&gt; 
          * @alias ejChart#chartArea->border->opacity
          */
                    opacity: 0.3
                },
                /**		
           * Specifies the background for chart plotting area.
           * @default transparent
           * @type {string}				
           * @example 
           * &lt;div id="container"&gt;&lt;/div&gt; 
           * &lt;script&gt;
           * $("#container").ejChart({
           *     chartArea: { background : "white" }                      
           * });
           * &lt;/script&gt; 
           * @alias ejChart#chartArea->background
           */
                background: 'transparent'

            },
            /**		
			* This is a horizontal axis which contains options to configure axis. This is the primary x axis for all the series in series array. If you need to override x axis for particular series, you can create an axis object by providing unique name using name property and add it to axes array. Then, assign the name to the series’s xAxisName property to link both axis and series.
			* @type {object}
			*/
            primaryXAxis: /** @lends ejChart# */
     {
         /**		
     * Options for configuring major grid lines color, width, dash arrays etc., 
     * @type {object}
     * @alias ejChart#primaryXAxis->majorGridLines
     */
         majorGridLines:
{
    /**		
* Specifies the width of the major grid lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 *     primaryXAxis: { majorGridLines: { width : 0.5} }                      
 * });
 * &lt;/script&gt; 
 * @alias ejChart#primaryXAxis->majorGridLines->width
*/
    width: 1,
    /**		
* Controls the pattern of dashes and gaps used to stroke the major grid lines.
* @default null
* @type {string}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 *     primaryXAxis: { majorGridLines: { dashArray : "2,3"} }                      
 * });
 * &lt;/script&gt; 
 * @alias ejChart#primaryXAxis->majorGridLines->dashArray
*/
    dashArray: "",
    /**		
* Specifies the visibility of the major grid lines.
* @default true
* @type {boolean}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { majorGridLines: { visible: false } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->majorGridLines->visible
*/
    visible: true,
    /**		
* Specifies the opacity of the major grid lines.
* @default 1
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { majorGridLines: { opacity: 0.5 } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->majorGridLines->opacity
*/
    opacity: 1

},
         /**		
     * Options for configuring major tick lines color, width, dash arrays etc.,
     * @type {object}
 * @alias ejChart#primaryXAxis->majorTickLines
     */
         majorTickLines:
 {
     /**		
* Specifies the width of the major tick lines.
* @default 1
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { majorTickLines: { width: 2 } }                      
* });
* &lt;/script&gt; 
 * @alias ejChart#primaryXAxis->majorTickLines->width
*/
     width: 1,
     /**		
* Length of the major tick lines.
* @default 5
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { majorTickLines: { size: 2 } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->majorTickLines->size
*/
     size: 5,
     /**		
* Specifies the visibility of the major tick lines.
* @default true
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { majorTickLines: { visible: false } }                      
* });
* &lt;/script&gt;  
 * @alias ejChart#primaryXAxis->majorTickLines->visible
*/
     visible: true
 },
         /**		
     * Options for configuring minor grid lines color, width, dash arrays etc., 
     * @type {object}
      * @alias ejChart#primaryXAxis->minorGridLines
     */
         minorGridLines:
 {
     /**		
* Specifies the width of the minorGridLines.
* @default 1
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorGridLines: { width: 2 } }                      
* });
* &lt;/script&gt;  
* @alias ejChart#primaryXAxis->minorGridLines->width
*/
     width: 1,
     /**		
* Controls the pattern of dashes and gaps used to stroke the minor grid lines.
* @default null
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorGridLines: { dashArray: "2,3" } }                      
* });
* &lt;/script&gt;
* @alias ejChart#primaryXAxis->minorGridLines->dashArray
*/
     dashArray: "",
     /**		
* Specifies the visibility of the minorGridLines. The user can modify the visibility of the minorGridLines in primaryXAxis.
* @default false
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorGridLines: { visible: true } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->minorGridLines->visible
*/
     visible: true

 },
         /**		
     * Options for configuring minor tick lines color, width, dash arrays etc,.
     * @type {object}
     * @alias ejChart#primaryXAxis->minorTickLines
     */
         minorTickLines:
{
    /**		
* Specifies the width of the minor tick lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorTickLines: { width: 2 } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->minorTickLines->width
*/
    width: 1,
    /**		
* Length of the minor tick lines.
* @default 5
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorTickLines: { size: 2 } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->minorTickLines->size
*/
    size: 5,
    /**		
* Specifies the visibility of the minor tick lines.
* @default false
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { minorTickLines: { visible: true } }                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->minorTickLines->visible
*/
    visible: true
},
         /**		
      * Specifies the number of minor ticks to render per major tick/interval.
      * @default null
      * @type {number}			
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { minorTicksPerInterval: 5 }                      
      * });
      * &lt;/script&gt; 
      * @alias ejChart#primaryXAxis->minorTicksPerInterval
      */
         minorTicksPerInterval: null,
         /**		
     * Index of the column object in columnDefinitions array to which this axis is associated with.
     * @default null
     * @type {number}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { columnIndex: 2 }                      
      * });
      * &lt;/script&gt; 
     * @alias ejChart#primaryXAxis->columnIndex
     */
         columnIndex: null,
         /**		
      * An axis can be spanned along multiple columns or plotting areas. This property specifies the number of columns/plotting areas this axis should be spanned.
      * @default null
      * @type {number}			
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { columnSpan: 2 }                      
      * });
      * &lt;/script&gt; 
      * @alias ejChart#primaryXAxis->columnSpan
      */
         columnSpan: null,
         /**		
      * Rotates the axis labels by the specified angle. Angle must be given in degrees.
      * @default null
      * @type {number}			
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { labelRoatation: 90 }                      
      * });
      * &lt;/script&gt; 
      * @alias ejChart#primaryXAxis->labelRotation
      */
         labelRotation: null,
         /**		
     * You can plot any type of data like date time, double, string etc., This property determines the type of data that this axis will handle. See {@link ValueType}
     * @default null
     * @type {enum}			
     * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { valueType: "double" }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->valueType
     */
         valueType: null,
         /**		
       * Unique name of the axis.
       * @default null
       * @type {string}			
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
       * &lt;script&gt;
       * $("#container").ejChart({
       * primaryXAxis: { name: "xAxis" }                      
       * });
       * &lt;/script&gt;  
       * @alias ejChart#primaryXAxis->name
       */
         name: null,
         /**		
      * Provides the format for axis labels.
      * @default null
      * @type {string}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { labelFormat: "{value}%" }                      
      * });
      * &lt;/script&gt; 
      * @alias ejChart#primaryXAxis->labelFormat
      */
         labelFormat: null,
         /**		
     * Specifies the desired number of intervals for the range. With this setting, you can request axis to calculate nice numbers such that they result in the number of intervals approximately equal to your desired interval.
     * @default null
     * @type {number}				
     * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { desiredIntervals: 5 }                      
      * });
      * &lt;/script&gt; 
     * @alias ejChart#primaryXAxis->desiredIntervals
     */
         desiredIntervals: null,
         /**		
      * Specifies whether the type of the interval calculated is in days, months, hours, minutes etc., This is applicable only when valueType is ‘datetime’. See {@link IntervalType}
      * @default null
      * @type {enum}			
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { intervalType: "days" }                      
      * });
      * &lt;/script&gt; 
       * @alias ejChart#primaryXAxis->intervalType
      */
         intervalType: null,
         /**		
      * Rounds the axis labels to the specified number of decimals.
      * @default null
      * @type {number}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { roundingPlaces: 3 }                      
      * });
      * &lt;/script&gt;  
        * @alias ejChart#primaryXAxis->roundingPlaces
      */
         roundingPlaces: null,
         /**		
      * Specifies the logarithmic base value. This is applicable only when valueType is logarithmic.
      * @default 10
      * @type {number}			
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { logBase: 5 }                      
      * });
      * &lt;/script&gt; 
       * @alias ejChart#primaryXAxis->logBase
      */
         logBase: 10,
         /**		
      * Horizontal/vertical padding for the plotting area based on the orientation of the axis.
      * @default 10
      * @type {number}			
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { plotOffset: 0 }                      
      * });
      * &lt;/script&gt; 
      * @alias ejChart#primaryXAxis->plotOffset
      */
         plotOffset: 0,
         labels: [],
         /**		
             * Options to configure stripLine’s color, text, border etc.,
             * @name ejChart#primaryXAxis->stripLine 
             * @default [ ]
             * @type {array}
             */
         stripLine: [
                {
                    /**		
     * Specifies the visibility of the stripLine.
     * @default false
     * @type {boolean}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * primaryXAxis: { stripLine:[{ visible : true }]}                      
     * });
     * &lt;/script&gt; 
     * @alias ejChart#primaryXAxis->stripLine->visible
     */
                    visible: false,
                    /**		
   * Indicates whether to render the stripLine from the minimum/start value of the axis.
   * @default false
   * @type {boolean}			
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * primaryXAxis: { stripLine:[{ startFromAxis : true }]}                      
   * });
   * &lt;/script&gt; 
   * @alias ejChart#primaryXAxis->stripLine->startFromAxis
   */
                    startFromAxis: false,
                    /**		
   * Text to be displayed inside the stripLine.
   * @default "stripLine"
   * @type {string}			
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * primaryXAxis: { stripLine:[{ text : "Empty Point" }]}                      
   * });
   * &lt;/script&gt; 
   * @alias ejChart#primaryXAxis->stripLine->text
   */
                    text: "stripLine",
                    /**		
   * Alignment of the text displayed in stripLine. See {@link TextAlignment}
   * @default "middlecenter"
   * @type {enum}			
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * primaryXAxis: { stripLine:[{ textAlignment : "middletop" }]}                      
   * });
   * &lt;/script&gt; 
   * @alias ejChart#primaryXAxis->stripLine->textAlignment
   */
                    textAlignment: "middlecenter",
                    /**		
    * Specifies the font of stripLine in primaryXAxis. These are font properties for stripLine text
    * @type {object}
    * @alias ejChart#primaryXAxis->stripLine->font
    */
                    font: {
                        /**		
  * Specifies the fontFamily of stripLine in primaryXAxis. Stripline text render with this fontFamily
  * @default "middlecenter"
  * @type {enum}			
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
  * &lt;script&gt;
  * $("#container").ejChart({
  * primaryXAxis: { stripLine:[{ font : { fontFamily : "Algerian"} }]}                      
  * });
  * &lt;/script&gt; 
  * @alias ejChart#primaryXAxis->stripLine->font->fontFamily
  */
                        fontFamily: 'Segoe UI',
                        /**		
 * Specifies the fontStyle of stripLine in primaryXAxis. Stripline text render with this fontStyle. See {@link FontStyle}
 * @default "Normal"
 * @type {enum}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 * primaryXAxis: { stripLine:[{ font : { fontStyle: "Bold"} }]}                      
 * });
 * &lt;/script&gt; 
 * @alias ejChart#primaryXAxis->stripLine->font->fontStyle
 */
                        fontStyle: 'Normal',
                        /**		
 * Specifies the size of stripLine in primaryXAxis. Stripline text render with this size
 * @default "12px"
 * @type {string}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 * primaryXAxis: { stripLine:[{ font : { size: "15px"} }]}                      
 * });
 * &lt;/script&gt; 
 * @alias ejChart#primaryXAxis->stripLine->font->size
 */
                        size: '12px',
                        /**		
* Specifies the color of stripLine in primaryXAxis. Stripline text render with this color
* @default "black"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ font : { color: "green"} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->font->color
*/
                        color: 'black',
                        /**		
* Specifies the opacity of stripLine in primaryXAxis. Stripline text render with this opacity
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ font : { opacity: 0.5} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->font->opacity
*/
                        opacity: 1
                    },
                    /**		
* Specifies the start value of the stripLine.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ start: 2 }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->start
*/
                    start: null,
                    /**		
* Specifies the end value of the stripLine.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ end: 5 }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->end
*/
                    end: null,
                    /**		
* Background color of the stripLine.
* @default "gray"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ color: "green" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->color
*/
                    color: 'gray',
                    /**		
* Border color of the stripLine.
* @default "gray"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ borderColor: "green" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->borderColor
*/
                    borderColor: 'black',
                    /**		
* Specifies the z order position of the stripLine.
* @default "over"
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryXAxis: { stripLine:[{ zIndex: "behind" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryXAxis->stripLine->zIndex
*/
                    zIndex: 'over',
                }
         ],
         /**		
    * Contains property to customize the title in chart.
    * @type {object}
      * @alias ejChart#primaryXAxis->title
    */
         title:
 {

     /**		
   * The value of the title of chart can be specified using this property.
   * @default ""
   * @type {string}				
   * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { text: "Year" } }                      
      * });
      * &lt;/script&gt; 
     * @alias ejChart#primaryXAxis->title->text
   */
     text: "",
     /**		
* Specifies the font. These font properties are customization are applied for title text. 
* @type {object}
 * @alias ejChart#primaryXAxis->title->font
*/
     font:
{
    /**		
  * Specifies the title fontfamily of primaryXAxis. This fontFamily is applied to the title text of primaryXAxis.
  * @default "Segoe UI"
  * @type {string}			 
  * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { font : { fontFamily : "Algerain"} } }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#primaryXAxis->title->font->fontFamily
  */
    fontFamily: 'Segoe UI',
    /**		
    * Specifies the title fontStyle of primaryXAxis. This fontStyle is applied to the title text of primaryXAxis.
    * @default ej.datavisualization.Chart.FontStyle.Normal
    * @type {enum}				 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { font : { fontStyle : "Italic"} } }                      
      * });
      * &lt;/script&gt;  
    * @alias ejChart#primaryXAxis->title->font->fontStyle
    */
    fontStyle: 'Normal',
    /**		
 * Specifies the title size of primaryXAxis. This font size is applied to the title text of primaryXAxis.
 * @default "16px"
 * @type {string}				
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { font : { size : "14px"} } }                      
      * });
      * &lt;/script&gt;   
  * @alias ejChart#primaryXAxis->title->font->size
 */
    size: '16px',
    /**		
 * Specifies the title opacity of primaryXAxis. This opacity value is applied to the title text of primaryXAxis.
 * @default 1
 * @type {number}				
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { font : { opacity : 0.8} } }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#primaryXAxis->title->font->opacity
 */
    opacity: 1,
    /**		
 * Specifies the title fontWeight of primaryXAxis. This fontWeight is applied to the title text of primaryXAxis. See {@link FontWeight}
 * @default ej.datavisualization.Chart.FontWeight.Regular
 * @type {enum}				 
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { title: { font : { fontWeight : "lighter"} } }                      
      * });
      * &lt;/script&gt;  
   * @alias ejChart#primaryXAxis->title->font->fontWeight
 */
    fontWeight: 'regular'
}
 },

         /**		
      * If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding. See {@link RangePadding}
      * @default ej.datavisualization.Chart.rangePaddding.None
      * @type {enum}				
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { rangePadding : "normal" }                      
      * });
      * &lt;/script&gt;  
       * @alias ejChart#primaryXAxis->rangePadding
      */
         rangePadding: 'None',
         additionalPadding: [1, 1],
         orientation: 'Horizontal',
         /**		
      * Specifies the maximum number of labels to be displayed in 100 pixels.
      * @default 3
      * @type {number}				
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { maximumLabels : 5 }                      
      * });
      * &lt;/script&gt;  
      * @alias ejChart#primaryXAxis->maximumLabels
      */
         maximumLabels: 3,
         /**		
     * Specifies a value that indicates whether to position the axis opposite to its default position.
     * @default false
     * @type {boolean}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { opposedPosition : true }                      
      * });
      * &lt;/script&gt;  
      * @alias ejChart#primaryXAxis->opposedPosition
     */
         opposedPosition: false,
         /**		
       * Specifies the options to configure axis line.
       * @type {object}
       * @alias ejChart#primaryXAxis->axisLine
       */
         axisLine:
  {
      /**		
     * Specifies the visibility of axis line.
     * @default true
     * @type {boolean}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { axisLine : { visible : false } }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->axisLine->visible
     */
      visible: true,
      /**		
     * Specifies the width of axisLine in primaryXAxis.
     * @default 1
     * @type {number}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { axisLine : { width : 2 } }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->axisLine->width
     */
      width: 1,
      /**		
 * Controls the pattern of dashes and gaps used to stroke the axis line.
 * @default null
 * @type {string}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { axisLine : { dashArray : "2,3" } }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#primaryXAxis->axisLine->dashArray
 */
      dashArray: "",
      /**		
* Specifies the horizontal/vertical padding of axis line. Normally, it is used along with plotOffset to pad the plot area.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { axisLine : { offset : 5 } }                      
      * });
      * &lt;/script&gt;  
 * @alias ejChart#primaryXAxis->axisLine->offset
*/
      offset: 0
  },
         /**
         * Specifies the action to take when the axis labels are overlapping with each other. See {@link LabelIntersectAction}
         * @default ej.datavisualization.Chart.LabelIntersectAction.None
         * @type {enum}		
         * @example 		 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { labelIntersectAction : "multipleRows" }                      
      * });
      * &lt;/script&gt;  
         * @alias ejChart#primaryXAxis->labelIntersectAction
         */
         labelIntersectAction: "none",

         /**		
      * Determines how to position labels at the edge of the axis. See {@link EdgeLabelPlacement} for the available options.
     * @default ej.datavisualization.Chart.EdgeLabelPlacement.None
      * @type {enum}			 
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { edgeLabelPlacement : "shift" }                      
      * });
      * &lt;/script&gt;  
       * @alias ejChart#primaryXAxis->edgeLabelPlacement
     */
         edgeLabelPlacement: "none",

         /**		
    * Specifies the font of primaryXAxis.
    * @type {object}
    * @alias ejChart#primaryXAxis->font

    */
         font:
  {
      /**		
      * Specifies the fontfamily of primaryXAxis. The axis labels render with this specified fontFamily.
      * @default "Segoe UI"
      * @type {string}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { font : { fontFamily : "Algerian"} }                      
      * });
      * &lt;/script&gt;   
       * @alias ejChart#primaryXAxis->font->fontFamily
      */
      fontFamily: 'Segoe UI',
      /**		
     * Specifies the fontStyle of primaryXAxis. The axis labels render with this specified fontStyle. See {@link FontStyle}
     * @default ej.datavisualization.Chart.FontStyle.Normal
     * @type {enum}				
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { font : { fontStyle : "Italic"} }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->font->fontStyle
     */
      fontStyle: 'Normal',
      /**		
      * Specifies the title size of primaryXAxis. The axis labels render with this specified size.
      * @default "13px"
      * @type {string}			
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { font : { size : "12px"} }                      
      * });
      * &lt;/script&gt;  
      * @alias ejChart#primaryXAxis->font->size
      */
      size: '13px',
      /**		
      * Specifies the fontWeight of primaryXAxis. The axis labels render with this specified fontWeight.See {@link FontWeight}
      * @default ej.datavisualization.Chart.FontWeight.Regular
      * @type {enum}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { font : { fontWeight : "lighter"} }                      
      * });
      * &lt;/script&gt;  
      * @alias ejChart#primaryXAxis->font->fontWeight
      */
      fontWeight: 'regular',
      /**		
     * Specifies the title opacity of primaryXAxis. The axis labels render with this specified opacity.
     * @default 1
     * @type {number}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { font : { opacity : 0.5} }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->font->opacity
     */
      opacity: 1
  },
         /**		
      * Specifies the visibility of the axis.
      * @default true
      * @type {boolean}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { visible: false }                      
      * });
      * &lt;/script&gt;  
      * @alias ejChart#primaryXAxis->visible
      */
         visible: true,
         /**		
    * Options to configure the visibility of the crosshair label. 
    * @type {object}
     * @alias ejChart#primaryXAxis->crosshairLabel
    */
         crosshairLabel:
   {
       /**		
      * Specifies the visibility of crosshair label. 
      * @default false
      * @type {boolean}			
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { crosshairLabel : { visible : true} }                      
      * });
      * &lt;/script&gt;  
       * @alias ejChart#primaryXAxis->crosshairLabel->visible
      */
       visible: false
   },
         /**		
       * This property determines the factor by which the axis is scaled. Value must be specified between 0 and 1
       * @default 1
       * @type {number}			
       * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { zoomFactor : 0.5 }                      
      * });
      * &lt;/script&gt;  
       * @alias ejChart#primaryXAxis->zoomFactor
       */
         zoomFactor: 1,
         /**		
      * This property determines the starting position of the zoomed axis. Value must be specified between 0 and 1.
      * @default 0
      * @type {number}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis: { zoomPosition :0.5 }                      
      * });
      * &lt;/script&gt;  
     * @alias ejChart#primaryXAxis->zoomPosition
      */
         zoomPosition: 0
     },

            /**		
           * This is a vertical axis which contains options to configure axis. This is the primary y axis for all the series in series array. If you need to override y axis for particular series, you can create an axis object by providing unique name using name property and add it to axes array. Then, assign the name to the series’s yAxisName property to link both axis and series.
           * @type {object}
           */
            primaryYAxis: /** @lends ejChart# */
      {
          /**		
    * Options for configuring major grid lines color, width, dash arrays etc., 
    * @type {object}
     * @alias ejChart#primaryYAxis->majorGridLines
    */
          majorGridLines:
     {
         /**		
* Specifies the width of the major grid lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorGridLines : {width : 2} }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->majorGridLines->width
*/
         width: 1,
         /**		
* Controls the pattern of dashes and gaps used to stroke the major grid lines.
* @default null
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorGridLines : {dashArray : "2,3"} }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->majorGridLines->dashArray
*/
         dashArray: "",
         /**		
* Specifies the visibility of the major grid lines.
* @default true
* @type {boolean}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorGridLines : {visible : false} }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->majorGridLines->visible
*/
         visible: true,
         /**		
* Specifies the opacity of the major grid lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorGridLines : {opacity : 0.5} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->majorGridLines->opacity
*/
         opacity: 1

     },
          /**		
* Options for configuring major tick lines color, width, dash arrays etc.,
* @type {object}
* @alias ejChart#primaryYAxis->majorTickLines
*/
          majorTickLines:
     {
         /**		
* Specifies the width of the major tick lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorTickLines : {width : 2} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->majorTickLines->width
*/
         width: 1,
         /**		
* Length of the major tick lines.
* @default 5
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorTickLines : {size : 2} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->majorTickLines->size
*/
         size: 5,
         /**		
* Specifies the visibility of the major tick lines.
* @default true
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { majorTickLines : {visible : false} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->majorTickLines->visible
*/
         visible: true
     },
          /**		
     * Options for configuring minor grid lines color, width, dash arrays etc.,
     * @type {object}
  * @alias ejChart#primaryYAxis->minorGridLines
     */
          minorGridLines:
     {
         /**		
* Specifies the width of the minor grid lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorGridLines : {width : 2} }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->minorGridLines->width
*/
         width: 1,
         /**		
* Controls the pattern of dashes and gaps used to stroke the minor grid lines.
* @default null
* @type {string}		
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorGridLines : {dashArray : "2,3"} }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->minorGridLines->dashArray
*/
         dashArray: "",
         /**		
* Specifies the visibility of the minorGridLines. The user can modify the visibility of the minorGridLines in primaryYAxis.
* @default false
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorGridLines : {visible : true} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->minorGridLines->visible
*/
         visible: true

     },
          /**		
* Options for configuring minor tick lines color, width, dash arrays etc.,
* @type {object}
* @alias ejChart#primaryYAxis->minorTickLines
*/
          minorTickLines:
     {
         /**		
* Specifies the width of the minor tick lines.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorTickLines : {width : 2} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->minorTickLines->width
*/
         width: 1,
         /**		
* Length of the minor tick lines.
* @default 5
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorTickLines : {size : 2} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->minorTickLines->size
*/
         size: 5,
         /**		
* Specifies the visibility of the minor tick lines.
* @default false
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorTickLines : {visible : true} }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->minorTickLines->visible
*/
         visible: true
     },
          /**		
* Specifies the number of minor ticks to render per major tick/interval.
* @default null
* @type {number}			
* @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { minorTicksPerInterval: 3 }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->minorTicksPerInterval
*/
          minorTicksPerInterval: null,
          /**		
* Index of the row object in rowDefinitions array to which this axis is associated with.
* @default null
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { rowIndex: 1 }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->rowIndex
*/
          rowIndex: null,
          /**		
 * An axis can be spanned along multiple rows or plotting areas. This property specifies the number of rows/plotting areas this axis should be spanned.
 * @default null
 * @type {number}				
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { rowSpan: 2 }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->rowSpan
 */
          rowSpan: null,
          /**		
* You can plot any type of data like date time, double, string etc., This property determines the type of data that this axis will handle.
* @default null
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { valueType: "double" }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->valueType
*/
          valueType: null,
          /**		
  * Unique name of the axis.
  * @default null
  * @type {string}			
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { name: "yAxis" }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->name
  */
          name: null,
          /**		
 * Provides the format for axis labels.
 * @default null
 * @type {string}				
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { labelFormat: "{value}F" }                      
      * });
      * &lt;/script&gt;  
 * @alias ejChart#primaryYAxis->labelFormat
 */
          labelFormat: null,
          /**		
* Specifies the desired number of intervals for the range. With this setting, you can request axis to calculate nice numbers such that they result in the number of intervals approximately equal to your desired interval.
* @default null
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { desiredIntervals: 5 }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->desiredIntervals
*/
          desiredIntervals: null,
          /**		
 * Specifies whether the type of the interval calculated is in days, months, hours, minutes etc., This is applicable only when valueType is ‘datetime’. See {@link IntervalType}
 * @default null
 * @type {enum}			
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { intervalType: "days" }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#primaryYAxis->intervalType
 */
          intervalType: null,
          /**		
 * Rounds the axis labels to the specified number of decimals.
 * @default null
 * @type {number}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { roundingPlaces: 2 }                      
      * });
      * &lt;/script&gt; 
  * @alias ejChart#primaryYAxis->roundingPlaces
 */
          roundingPlaces: null,
          labels: [],
          /**		
* Options to configure the title font and alignment of the axis title.
* @type {object}
* @alias ejChart#primaryYAxis->title
*/
          title:
    {
        /**		
* Text to be displayed as a title for axis.
* @default ""
* @type {string}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ text: "yAxis" } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->title->text
*/
        text: "",
        /**		
* Specifies the font. These font properties are customization are applied for title text.
* @type {object}
* @alias ejChart#primaryYAxis->title->font
*/
        font:
     {
         /**		
* Specifies the title fontfamily of primaryYAxis. This fontFamily is applied to the title text of primaryYAxis.
* @default "Segoe UI"
* @type {string}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ font :{ fontFamily: "Algerian" } } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->title->font->fontFamily
*/
         fontFamily: 'Segoe UI',
         /**		
* Specifies the title fontStyle of primaryYAxis. This fontStyle is applied to the title text of primaryYAxis. See {@link FontStyle}
* @default ej.datavisualization.Chart.FontStyle.Normal
* @type {enum}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ font :{ fontStyle : "Italic" } } }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->title->font->fontStyle
*/
         fontStyle: 'Normal',
         /**		
* Specifies the title opacity of primaryYAxis. This font size is applied to the title text of primaryYAxis.
* @default 1
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ font :{ opacity: 0.5 } } }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->title->font->opacity
*/
         opacity: 1,
         /**		
* Specifies the title size of primaryYAxis. This opacity value is applied to the title text of primaryYAxis.
* @default "16px"
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ font :{ size: "12px" } } }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->title->font->size
*/
         size: '16px',
         /**		
* Specifies the title fontWeight of primaryYAxis. This fontWeight is applied to the title text of primaryYAxis. See {@link FontWeight}
* @default ej.datavisualization.Chart.FontWeight.Regular
* @type {enum}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { title :{ font :{ fontWeight: "normal" } } }                      
      * });
      * &lt;/script&gt;  
* @alias ejChart#primaryYAxis->title->font->fontWeight
*/
         fontWeight: 'regular'
     }
    },
          /**		
* If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding. See {@link RangePadding}
* @default ej.datavisualization.Chart.RangePadding.None
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { rangePadding : "none" }                      
      * });
      * &lt;/script&gt;   
* @alias ejChart#primaryYAxis->rangePadding
*/
          rangePadding: 'Normal',

          /**		
            * Options to configure stripLine’s color, text, border etc.,
            * @name ejChart#primaryYAxis->stripLine 
            * @default [ ]
            * @type {array}
            */
          stripLine: [
               {
                   /**		
     * Specifies the visibility of the stripLine.
     * @default false
     * @type {boolean}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * primaryYAxis: { stripLine:[{ visible : true }]}                      
     * });
     * &lt;/script&gt; 
     * @alias ejChart#primaryYAxis->stripLine->visible
     */
                   visible: false,
                   /**		
   * Indicates whether to render the stripLine from the minimum/start value of the axis.
   * @default false
   * @type {boolean}			
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * primaryYAxis: { stripLine:[{ startFromAxis : true }]}                      
   * });
   * &lt;/script&gt; 
   * @alias ejChart#primaryYAxis->stripLine->startFromAxis
   */
                   startFromAxis: false,
                   /**		
  * Text to be displayed inside the stripLine.
  * @default "stripLine"
  * @type {string}			
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
  * &lt;script&gt;
  * $("#container").ejChart({
  * primaryYAxis: { stripLine:[{ text : "Empty Point" }]}                      
  * });
  * &lt;/script&gt; 
  * @alias ejChart#primaryYAxis->stripLine->text
  */
                   text: "stripLine",
                   /**		
  * Alignment of the text displayed in stripLine. See {@link TextAlignment}
  * @default "middlecenter"
  * @type {enum}			
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
  * &lt;script&gt;
  * $("#container").ejChart({
  * primaryYAxis: { stripLine:[{ textAlignment : "middletop" }]}                      
  * });
  * &lt;/script&gt; 
  * @alias ejChart#primaryYAxis->stripLine->textAlignment
  */
                   textAlignment: "middlecenter",
                   /**		
    * Specifies the font of stripLine in primaryYAxis. These are font properties for stripLine text
    * @type {object}
    * @alias ejChart#primaryYAxis->stripLine->font
    */
                   font: {
                       /**		
 * Specifies the fontFamily of stripLine in primaryYAxis. Stripline text render with this fontFamily
 * @default "middlecenter"
 * @type {enum}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 * primaryYAxis: { stripLine:[{ font : { fontFamily : "Algerian"} }]}                      
 * });
 * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->stripLine->font->fontFamily
 */
                       fontFamily: 'Segoe UI',
                       /**		
* Specifies the fontStyle of stripLine in primaryYAxis. Stripline text render with this fontStyle. See {@link FontStyle}
* @default "Normal"
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ font : { fontStyle: "Bold"} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->font->fontStyle
*/
                       fontStyle: 'Normal',
                       /**		
* Specifies the size of stripLine in primaryYAxis. Stripline text render with this size
* @default "12px"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ font : { size: "15px"} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->font->size
*/
                       size: '12px',
                       /**		
* Specifies the color of stripLine in primaryYAxis. Stripline text render with this color
* @default "black"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ font : { color: "green"} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->font->color
*/
                       color: 'black',
                       /**		
* Specifies the opacity of stripLine in primaryYAxis. Stripline text render with this opacity
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ font : { opacity: 0.5} }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->font->opacity
*/
                       opacity: 1
                   },
                   /**		
* Specifies the start value of the stripLine.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ start: 2 }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->start
*/
                   start: null,
                   /**		
* Specifies the end value of the stripLine.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ end: 5 }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->end
*/
                   end: null,
                   /**		
* Background color of the stripLine.
* @default "gray"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ color: "green" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->color
*/
                   color: 'gray',
                   /**		
* Border color of the stripLine.
* @default "gray"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ borderColor: "green" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->borderColor
*/
                   borderColor: 'black',
                   /**		
* Specifies the z order position of the stripLine.
* @default "over"
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* primaryYAxis: { stripLine:[{ zIndex: "behind" }]}                      
* });
* &lt;/script&gt; 
* @alias ejChart#primaryYAxis->stripLine->zIndex
*/
                   zIndex: 'over',
               }
          ],
          /**		
 * Specifies the logarithmic base value. This is applicable only when valueType is logarithmic.
 * @default 10
 * @type {number}				
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { logBase: 5 }                      
      * });
      * &lt;/script&gt;   
 * @alias ejChart#primaryYAxis->logBase
 */
          logBase: 10,
          /**		
 * Horizontal/vertical padding for the plotting area based on the orientation of the axis.
 * @default 10
 * @type {number}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { plotOffset: 5 }                      
      * });
      * &lt;/script&gt;   
  * @alias ejChart#primaryYAxis->plotOffset
 */
          plotOffset: 0,
          orientation: 'Vertical',
          /**		
* Specifies the maximum number of labels to be displayed in 100 pixels.
* @default 3
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { maximumLabels: 5 }                      
      * });
      * &lt;/script&gt;   
 * @alias ejChart#primaryYAxis->maximumLabels
*/
          maximumLabels: 3,
          /**
          * Specifies the action to take when the axis labels are overlapping with each other. See {@link LabelIntersectAction}
     * @default ej.datavisualization.Chart.LabelIntersectAction.None
      * @type {enum}			 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { labelIntersectAction: "multipleRows" }                      
      * });
      * &lt;/script&gt;    
       * @alias ejChart#primaryYAxis->labelIntersectAction
      */
          labelIntersectAction: "none",
          /**		
    * Determines how to position labels at the edge of the axis. See {@link EdgeLabelPlacement} for the available options.
   * @default ej.datavisualization.Chart.EdgeLabelPlacement.None
    * @type {enum}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { edgeLabelPlacement: "shift" }                      
      * });
      * &lt;/script&gt; 
     * @alias ejChart#primaryYAxis->edgeLabelPlacement
    */
          edgeLabelPlacement: "none",

          /**		
* Options to configure the visibility of the crosshair label.
* @type {object}
* @alias ejChart#primaryYAxis->crosshairLabel
*/
          crosshairLabel:
   {
       /**		
* Specifies the visibility of crosshairLabel. This is the property to change the visibility of the axis labels. 
* @default false
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { crosshairLabel: { visible : true } }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->crosshairLabel->visible
*/
       visible: false
   },
          /**		
 * Specifies the visibility of the axis. 
 * @default true
 * @type {boolean}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { visible : false }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#primaryYAxis->visible
 */
          visible: true,
          /**		
* Specifies a value that indicates whether to position the axis opposite to its default position. 
* @default false
* @type {boolean}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { opposedPosition : true }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->opposedPosition
*/
          opposedPosition: false,
          /**		
* Specifies the font of primaryYAxis.  These font properties are applied for the axis labels. 
* @type {object}
* @alias ejChart#primaryYAxis->font
*/
          font:
   {
       /**		
* Specifies the fontfamily of primaryYAxis. The axis labels render with this specified fontFamily.
* @default "Segoe UI"
* @type {string}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { font: { fontFamily : "Algerian" } }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->font->fontFamily
*/
       fontFamily: 'Segoe UI',
       /**		
* Specifies the fontStyle of primaryYAxis. The axis labels render with this specified fontStyle.  See {@link FontStyle}
* @default ej.datavisualization.Chart.FontStyle.Normal
* @type {enum}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { font: { fontStyle : "italic" } }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->font->fontStyle
*/
       fontStyle: 'Normal',
       /**		
 * Specifies the title size of primaryYAxis. The axis labels render with this specified size.
 * @default "13px"
 * @type {string}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { font: { size : "12px" } }                      
      * });
      * &lt;/script&gt; 
  * @alias ejChart#primaryYAxis->font->size
 */
       size: '13px',
       /**		
* Specifies the title opacity of primaryYAxis. The axis labels render with this specified opacity.
* @default 1
* @type {number}		 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { font: { opacity : 0.5 } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->font->opacity
*/
       opacity: 1,
       /**		
* Specifies the fontWeight of primaryYAxis. The axis labels render with this specified fontWeight.  {@link FontWeight}
* @default ej.datavisualization.Chart.FontWeight.Regular
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { font: { fontWeight : "normal" } }                      
      * });
      * &lt;/script&gt;  
 * @alias ejChart#primaryYAxis->font->fontWeight
*/
       fontWeight: 'regular'
   },
          /**		
  * Specifies the options to configure axis line.
  * @type {object}
  * @alias ejChart#primaryYAxis->axisLine
  */
          axisLine:
   {
       /**		
* Specifies the visibility of axis line.
* @default true
* @type {boolean}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { axisLine: { visible : false } }                      
      * });
      * &lt;/script&gt; 
 * @alias ejChart#primaryYAxis->axisLine->visible
*/
       visible: true,
       /**		
* Specifies the width of axisLine in primaryYAxis. The user can change the width of the axisLine.
* @default 1
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { axisLine: { width : 2 } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->axisLine->width
*/
       width: 1,
       /**		
* Controls the pattern of dashes and gaps used to stroke the axis line.
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { crosshairLabel: { axisLine :{ dashArray : "2,3" } } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->axisLine->dashArray
*/
       dashArray: "",
       /**		
* Specifies the horizontal/vertical padding of axis line. Normally, it is used along with plotOffset to pad the plot area.
* @default null
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { axisLine: { offset : 5 } }                      
      * });
      * &lt;/script&gt; 
* @alias ejChart#primaryYAxis->axisLine->offset
*/
       offset: 0
   },

          /**		
  * This property determines the factor by which the axis is scaled. Value must be specified between 0 and 1. 
  * @default 1
  * @type {number}		
  * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { zoomFactor : 0.5 }                      
      * });
      * &lt;/script&gt; 
   * @alias ejChart#primaryYAxis->zoomFactor
  */
          zoomFactor: 1,
          /**		
 * This property determines the starting position of the zoomed axis. Value must be specified between 0 and 1.
 * @default 0
 * @type {number}			 
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryYAxis: { zoomPosition : 0.5 }                      
      * });
      * &lt;/script&gt;  
 * @alias ejChart#primaryYAxis->zoomPosition
 */
          zoomPosition: 0
      },

           
            secondaryX: 
             {
                
                 majorGridLines:
        {
           
            width: 1,
           
            dashArray: "",
           
            visible: true
        },
                
                 majorTickLines:
         {
           
             width: 1,
            
             size: 5,
           
             visible: true
         },
                
                 minorGridLines:
         {
            
             width: 1,
            
             dashArray: "",
            
             visible: true

         },
                
                 minorTickLines:
        {
           
            width: 1,
           
            size: 5,
          
            visible: true
        },
               
                 minorTicksPerInterval: null,
               
                 columnIndex: null,
              
                 columnSpan: null,
                
                 labelRotation: null,
                
                 valueType: null,
               
                 name: null,
              
                 labelFormat: null,
               
                 desiredIntervals: null,
                 
                 intervalType: null,
               
                 roundingPlaces: null,
              
                 logBase: 10,
              
                 plotOffset: 0,
                 labels: [],
                 stripLine: [
              {
                  visible: false,
                  startFromAxis: false,
                  text: "stripLine",
                  textAlignment: "middlecenter",
                  font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', color: 'black', opacity: 1 },
                  start: null,
                  end: null,
                  color: 'gray',
                  borderColor: 'black',
                  zIndex: 'over',
              }
                 ],
             
                 title:
         {

           
             text: "",
            
             font:
        {
            
            fontFamily: 'Segoe UI',
           
            fontStyle: 'Normal',
        
            size: '16px',
         
            opacity: 1,
         
            fontWeight: 'regular'
        }
         },

               
                 rangePadding: 'None',
                 additionalPadding: [1, 1],
              
                 orientation: 'Horizontal',
             
                 maximumLabels: 3,
               
                 opposedPosition: false,
               
                 axisLine:
          {
              
              visible: true,
             
              width: 1,
           
              dashArray: "",
             
              offset: 0
          },
                
                 labelIntersectAction: "none",
                
                 edgeLabelPlacement: "none",
                
                 font:
          {
             
              fontFamily: 'Segoe UI',
            
              fontStyle: 'Normal',
             
              size: '13px',
              
              fontWeight: 'regular',
             
              opacity: 1
          },
               
                 visible: true,
                
                 crosshairLabel:
           {
              
               visible: false
           },
              
                 zoomFactor: 1,
              
                 zoomPosition: 0
             },
          
            secondaryY: 
                {
                  
                    majorGridLines:
       {
          
           width: 1,
          
           dashArray: "",
          
           visible: true

       },
                 
                    majorTickLines:
                        {
                       
                            width: 1,
                      
                            size: 5,
                        
                            visible: true
                        },
                   
                    minorGridLines:
                        {
                       
                            width: 1,
                        
                            dashArray: "",
                         
                            visible: true

                        },
                   
                    minorTickLines:
                        {
                         
                            width: 1,
                          
                            size: 5,
                          
                            visible: true
                        },
                  
                    minorTicksPerInterval: null,
                 
                    rowIndex: null,
                  
                    rowSpan: null,
                   
                    valueType: null,
                   
                    name: null,
                   
                    labelFormat: null,
                   
                    desiredIntervals: null,
                 
                    intervalType: null,
                  
                    roundingPlaces: null,
                    labels: [],
                  
                    title:
                    {
                    
                        text: "",
                       
                        font:
                        {
                         
                           
                            fontStyle: 'Normal',
                          
                            opacity: 1,
                           
                            size: '16px',
                           
                            fontWeight: 'regular'
                        }
                    },
                 
                    rangePadding: 'Normal',

                    stripLine: [
                         {
                             visible: false,
                             startFromAxis: false,
                             text: "stripLine",
                             textAlignment: "middlecenter",
                             font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', color: 'black', opacity: 1 },
                             start: null,
                             end: null,
                             color: 'gray',
                             borderColor: 'black',
                             zIndex: 'over',
                        }
                    ],
                   
                    logBase: 10,
                   
                    plotOffset: 0,
                   
                    orientation: 'Vertical',
                   
                    maximumLabels: 3,
                 
                    labelIntersectAction: "none",
                   
                    edgeLabelPlacement: "none",
                   
                    crosshairLabel:
                    {
                      
                        visible: false
                    },
                  
                    visible: true,
                  
                    opposedPosition: false,
                   
                    font:
                    {
                        fontFamily: 'Segoe UI',
                       
                        fontStyle: 'Normal',
                       
                        size: '13px',
                        
                        opacity: 1,
                       
                        fontWeight: 'regular'
                    },
                   
                    axisLine:
                        {
                           
                            visible: true,
                         
                            width: 1,
                          
                            dashArray: "",
                          
                            offset: 0
                        },

                   
                    zoomFactor: 1,
                   
                    zoomPosition: 0
                },
           
            stripLineDefault: { 
                
                visible: false,
                
                startFromAxis: false,
               
                text: "stripLine",
               
                textAlignment: 'middlecenter',
                
                font:
                {
                   
                    fontFamily: 'Segoe UI',
                  
                    fontStyle: 'Normal',
                   
                    size: '12px',
                   
                    color: 'black',
                    
                    opacity: 1
                },
               
                start: null,
               
                end: null,
               
                color: 'gray',
                
                borderColor: 'black',
               
                zIndex: 'over',
               
                borderWidth: 1
            },
            /**		
         * You can split chart into multiple plotting areas horizontally and vertically. In order to split the chart vertically, you need to specify number of row objects in rowDefintions array. Each object in the rowDefnitions represent a plotting area in chart.
         * @type {array}			 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis :{ rowDefinitions :[{unit : "percentage"}] }                      
      * });
      * &lt;/script&gt;  
         */
            rowDefinitions: null,
            /**		
        * You can split chart into multiple plotting areas horizontally and vertically. In order to split the chart horizontally, you need to specify number of column objects in columDefintions array. Each object in the columnDefnitions represent a plotting area in chart.
        * @type {array}		 
        * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * primaryXAxis :{ columnDefinitions :[{unit : "percentage"}] }                      
      * });
      * &lt;/script&gt; 
        */
            columnDefinitions: null,
            /**		
           * Specifies the chart title. This title property denotes the title of the chart. 
           * @type {object}
           */
            title: /** @lends ejChart# */
				{ 
				    /**		
       * Specifies the text of the chart title. The text which is to be render as chart title is set here.
       * @default ""
       * @type {string}		 
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { text : "Power Production"}                     
      * });
      * &lt;/script&gt; 
       * @alias ejChart#title->text
       */
				    text: "",
				    /**		
     * This property is used to change the alignment of the title horizontally. See {@link TextAlignment}
     * @default ej.datavisualization.Chart.TextAlignment.Center
     * @type {enum}			
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { textAlignment : "near"}                     
      * });
      * &lt;/script&gt; 
     * @alias ejChart#title->textAlignment
     */
				    textAlignment: "center",
				    /**		
          * Specifies the chart title. These are the font properties involved in chart title customization.
          * @type {object}
           * @alias ejChart#title->font
          */
				    font: {
				        /**		
 * Specifies the title fontfamily of primaryXAxis. Chart title render with this specified fontFamily.
 * @default "Segoe UI"
 * @type {string}				 
 * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { font : { fontFamily : "Algerian" } }                     
      * });
      * &lt;/script&gt; 
  * @alias ejChart#title->font->fontFamily
 */
				        fontFamily: 'Segoe UI',
				        /**		
    * Specifies the title fontStyle of primaryXAxis. Chart title render with this specified fontStyle. See {@link FontStyle}
    * @default ej.datavisualization.Chart.FontStyle.Normal
    * @type {enum}			 
    * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { font : { fontStyle : "italic" } }                     
      * });
      * &lt;/script&gt; 
     * @alias ejChart#title->font->fontStyle
    */
				        fontStyle: 'Normal',
				        /**		
 * Specifies the title size. Chart title render with this specified font size.
 * @default "20px"
 * @type {string}				
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { font : { size : "22px" } }                     
      * });
      * &lt;/script&gt; 
  * @alias ejChart#title->font->size
 */
				        size: '20px',
				        /**		
* Specifies the title opacity. Chart title render with this specified font opacity.
* @default 0.5
* @type {number}			 
* @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { font : { opacity : 0.8 } }                     
      * });
      * &lt;/script&gt; 
 * @alias ejChart#title->font->opacity
*/
				        opacity: 0.5,
				        /**		
 * Specifies the title fontWeight. Chart title render with this specified fontWeight.
 * @default ej.datavisualization.Chart.FontWeight.Regular
 * @type {enum}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * title : { font : { fontWeight : "lighter" } }                     
      * });
      * &lt;/script&gt; 
 * @alias ejChart#title->font->fontWeight
 */
				        fontWeight: 'regular'
				    }
				},

            lineCap: { butt: 'butt', round: 'round', square: 'square' },
            lineJoin: { round: 'round', bevel: 'bevel', miter: 'miter' },
            legendAlignment: { near: 'near', center: 'center', far: 'far' },
            legendPosition: { top: 'top', bottom: 'bottom', right: 'right', left: 'left', custom: 'custom' },
           
            enableAnimation: true,
            /**		
          * Contains all the properties to customize legend.
          * @type {object}
          */
            legend: /** @lends ejChart# */
            {
                /**		
          * Options for customizing the color and width of the border of legend.
          * @type {object}
           * @alias ejChart#legend->border
          */
                border:
                {
                    /**		
* Specifies the border color of legend.
* @default "transparent"
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend : {border :{ color :"green"}}                     
      * });
      * &lt;/script&gt;   
* @alias ejChart#legend->border->color
*/
                    color: 'transparent',

                    /**		
* Specifies the border width of legend.
* @default 1
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ border :{width :2}}                     
      * });
      * &lt;/script&gt;  
 * @alias ejChart#legend->border->width
*/
                    width: 1
                },
                /**		
 * Toggles the legend visibility.
 * @default true
 * @type {boolean}			 
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{visible : false}                     
      * });
      * &lt;/script&gt;   
  * @alias ejChart#legend->visible
 */
                visible: true,
                /**		
* This is used to specify the gap/padding between the legend items.
* @default 10
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{itemPadding : 5}                     
      * });
      * &lt;/script&gt;  
 * @alias ejChart#legend->itemPadding
*/
                itemPadding: 10,
                /**		
 * This property specifies the shape of the legend items. See {@link Shape}
 * @default ej.datavisualization.Chart.Shape.None
 * @type {enum}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ shape : "circle" }                      
      * });
      * &lt;/script&gt;  
  * @alias ejChart#legend->shape
 */
                shape: 'None',
                /**		
 * This property is used to change the alignment of the legend horizontally.. See {@link Alignment}
 * @default ej.datavisualization.Chart.Alignment.Center
 * @type {enum}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{alignment : "far"}                    
      * });
      * &lt;/script&gt;   
  * @alias ejChart#legend->alignment
 */
                alignment: 'Center',
                /**		
* This property is used to change the alignment of the data label vertically. See {@link Position}
* @default ej.datavisualization.Chart.Position.Bottom
* @type {enum}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ position : "top"}                    
      * });
      * &lt;/script&gt;   
* @alias ejChart#legend->position
*/
                position: 'Bottom',
                /**		
          * Contains property to customize the position of the legend
          * @type {object}
          * @alias ejChart#legend->location
          */
                location:
                {
                    /**		
 * This property specifies the x position for rendering legend.
 * @default 0
 * @type {number}				 
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{location :{x :20}}                    
      * });
      * &lt;/script&gt;   
 * @alias ejChart#legend->location->x
 */
                    x: 0,
                    /**		
* This property specifies the y position for rendering legend.
* @default 0
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{location : {y : 100}}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#legend->location->y
*/
                    y: 0
                },
                /**		
          * Contains property to customize the legend item style.
          * @type {object}
           * @alias ejChart#legend->itemStyle
          */
                itemStyle:
                {
                    /**		
* Specifies the legend item height.
* @default 10
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ itemStyle :{height : 20}}                    
      * });
      * &lt;/script&gt;  
* @alias ejChart#legend->itemStyle->height
*/
                    height: 10,
                    /**		
 * Specifies the legend item width.
 * @default 10
 * @type {number}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ itemStyle :{width : 15}}                    
      * });
      * &lt;/script&gt; 
      * @alias ejChart#legend->itemStyle->width
 */
                    width: 10,
                    /**		
         * Options for customizing the color and width of the border of legend.
          * @type {object}
           * @alias ejChart#legend->itemStyle->border
          */
                    border:
                    {
                        /**		
 * Specifies the border color of legend.
 * @default "transparent"
 * @type {string}				 
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ itemStyle :{border : { color : "green' }}}                    
      * });
      * &lt;/script&gt; 
 * @alias ejChart#legend->itemStyle->border->color
 */
                        color: 'transparent',
                        /**		
 * Specifies the border width of legend.
 * @default 1
 * @type {number}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ itemStyle :{border :{ width : 2 }}}                    
      * });
      * &lt;/script&gt;  
 * @alias ejChart#legend->itemStyle->border->width
 */
                        width: 1
                    }
                },
                /**		
 * This property specifies the number of rows for the legend items to arrange.
 * @default null
 * @type {number}			
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ rowCount :2}                    
      * });
      * &lt;/script&gt; 
 * @alias ejChart#legend->rowCount
 */
                rowCount: null,
                /**		
 * This property specifies the number of columns for the legend items to arrange.
 * @default null
 * @type {number}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ columnCount : 2}                    
      * });
      * &lt;/script&gt; 
 * @alias ejChart#legend->columnCount
 */
                columnCount: null,
                /**		
       * Specifies the opacity of legend
       * @default 1
       * @type {number}				 
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ opacity : 0.5}                    
      * });
      * &lt;/script&gt; 
       * @alias ejChart#legend->opacity
       */
                opacity: 1,
                /**		
      * Specifies the fill color of legend
      * @default null
      * @type {string}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ fill : "green"}                    
      * });
      * &lt;/script&gt; 
     * @alias ejChart#legend->fill
      */
                fill: null,
                /**		
          * Specifies the legend font. These font properties are used to customize the legend item text.
          * @type {object}
           * @alias ejChart#legend->font
          */
                font:
                {
                    /**		
    * Specifies the legend fontfamily color. Legend item text render with this specified font family.
    * @default "Segoe UI"
    * @type {string}				
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ font :{fontFamily : "algerian"}}                    
      * });
      * &lt;/script&gt;  
   * @alias ejChart#legend->font->fontFamily
    */
                    fontFamily: 'Segoe UI',
                    /**		
    * Specifies the legend font style. Legend item text render with this specified font style. See {@link FontStyle}
    * @default ej.datavisualization.Chart.FontStyle.Normal
    * @type {enum}			
    * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ font :{fontStyle : "italic"}}                    
      * });
      * &lt;/script&gt; 
    * @alias ejChart#legend->font->fontStyle
    */
                    fontStyle: 'Normal',
                    /**		
    * Specifies the legend font weight.  Legend item text render with this specified font weight.{@link FontWeight}
    * @default ej.datavisualization.Chart.FontWeight.Regular
    * @type {enum}				 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ font :{fontWeight : "lighter"}}                    
      * });
      * &lt;/script&gt;  
    * @alias ejChart#legend->font->fontWeight
    */
                    fontWeight: 'Regular',
                    /**		
     * Specifies the legend font size.  Legend item text render with this specified size.
     * @default "12px"
     * @type {string}			 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * legend :{ font :{size : "14px"}}                    
      * });
      * &lt;/script&gt; 
     * @alias ejChart#legend->font->size
     */
                    size: '12px'
                }
            },
            /**		
         * Specifies the properties used for customizing the series.
         * @type {array}
         */
            series: /** @lends ejChart# */[
                {
                    /**		
     * Specifies the type of series to be rendered in chart. see {@link Type}
     * @default "line"
     * @type {enum}			 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series : [{type : "column" }]                   
      * });
      * &lt;/script&gt; 
     * @alias ejChart#series->type
     */
                    type: 'column',
                    /**		
    * Specifies the animation of the series.  ejChart supports animation for the series. This can be enable/disable by this property
    * @default true
    * @type {boolean}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series : [{enableAnimation : false }]                   
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->enableAnimation
    */
                    enableAnimation: false,
                    /**		
    * Used in Polar and Radar series to specify whether the line/area series has to be rendered in a closed state by joining the start and end point of the series.
    * @default true
    * @type {boolean}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series : [{isClosed : false }]                   
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->isClosed
    */
                    isClosed: true,
                    /**		
    * Used in Polar and Radar series to specify whether column type has to be rendered the stacked value of chart.
    * @default true
    * @type {boolean}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series : [{isStacking : false }]                   
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->isStacking
    */
                    isStacking: true,
                    /**		
    * Specifies the type of series that can be drawn in a Radar or Polar series. It supports line, column and area type. See {@link DrawType}
    * @default true
    * @type {boolean}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series : [{drawType : false }]                   
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->drawType
    */
                    drawType: 'line',
                    /**		
    * Sets the radius of the hole on the doughnut series with respect to plot area. Value ranges from 0 to 1.
    * @default 0.4
    * @type {number}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series : [{doughnutCoefficient : 0.5 }]                   
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->doughnutCoefficient
    */
                    doughnutCoefficient: 0.4,
                    /**		
   * Represents the distance the slice has to be moved out when it is exploded.
   * @default 25
   * @type {number}			 
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * series : [{explodeOffset : 20 }]                   
    * });
    * &lt;/script&gt; 
   * @alias ejChart#series->explodeOffset
   */
                    explodeOffset: 25,
                    /**		
  * Sets the rendering mode of the pyramid as linear or surface.
  * @default "linear"
  * @type {enum}			 
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * series : [{pyramidMode : "linear" }]                   
   * });
   * &lt;/script&gt; 
  * @alias ejChart#series->pyramidMode
  */
                    pyramidMode: 'linear',
                    /**		
  * Specifies the position of the axis labels to render labels either inside or outside of plot area. See {@link LabelPosition}
  * @default "inside"
  * @type {enum}			 
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
   * &lt;script&gt;
   * $("#container").ejChart({
   * series : [{labelPosition : "outside" }]                   
   * });
   * &lt;/script&gt; 
  * @alias ejChart#series->labelPosition
  */
                    labelPosition: 'inside',
                    /**		
 * Specifies the gap between each slice of a pyramid series in pixels.
 * @default 0
 * @type {number}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
  * &lt;script&gt;
  * $("#container").ejChart({
  * series : [{gapRatio : 2 }]                   
  * });
  * &lt;/script&gt; 
 * @alias ejChart#series->gapRatio
 */
                    gapRatio: 0,
                    /**		
* Specifies the points of the series.  This is to specify the point values for the series
* @default [ ] 
* @type {array}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 * series : [{points : [{x : 2000, y : 15}] }]                   
 * });
 * &lt;/script&gt; 
* @alias ejChart#series->points
*/
                    points: null,
                    /**		
* Sets the radius of the pie series with respect to plot area. Value ranges from 0 to 1.
* @default 0.8
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
 * &lt;script&gt;
 * $("#container").ejChart({
 * series : [{pieCoefficient : 0.6 }]                   
 * });
 * &lt;/script&gt; 
* @alias ejChart#series->pieCoefficient
*/
                    pieCoefficient: 0.8,
                    /**		
* Sets the radius of the doughnut series with respect to plot area. Value ranges from 0 to 1. 
* @default 0.8
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{doughnutSize : 0.6 }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->doughnutSize
*/
                    doughnutSize: 0.8,
                    /**		
* Specifies the dataSource for series. 
* @default null	
* @type {object}
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{dataSource: data.open }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->dataSource
*/
                    dataSource: null,
                    /**		
* Specifies the bullFillColor for series.  This is used in hilo series types
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{bullFillColor: "green" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->bullFillColor
*/
                    bullFillColor: null,
                    /**		
* Specifies the bearFillColor for series.  This is used in hilo series types
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{bearFillColor: "blue" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->bearFillColor
*/
                    bearFillColor: null,
                    /**		
* Specifies the query for dataSource in series.  This is used to take the query from dataSource
* @default null
* @type {object}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* var query =  ej.Query().from("Orders").take(10);
* $("#container").ejChart({
* series : [{query: query }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->query
*/
                    query: null,
                    /**		
* Specifies the xName for dataSource in series.  This is used to take the x values from dataSource
* @default null	
* @type {string}
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{xName: "XValue" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->xName
*/
                    xName: '',
                    /**		
* Specifies the yName for dataSource in series.  This is used to take the y values from dataSource
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{yName: "YValue" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->yName
*/
                    yName: '',
                    /**		
* Specifies the visibility for series.  This is used to change the visibility of series
* @default "visible"
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{visibility: "hidden" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->visibility
*/
                    visibility: "visible",
                    /**		
* Specifies the starting angle for rendering pie / doughnut series.
* @default null
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{startAngle: 140 }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->startAngle
*/
                    startAngle: null,
                    /**		
* Specifies the XAxisName for series.  This is used to specify the name of the xAxis
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{xAxisName: "xAxis" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->xAxisName
*/
                    xAxisName: null,
                    /**		
* Specifies the yAxisName for series.  This is used to specify the name of the yAxis
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{yAxisName: "yAxis" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->yAxisName
*/
                    yAxisName: null,
                    /**		
* Explodes all the pie slices. (Also works for doughnut series)es
* @default null
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{explodeAll: true }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->explodeAll
*/
                    explodeAll: null,
                    /**		
* Index of a slice to be exploded from the whole pie. (Also works for doughnut series)
* @default null
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{explodeIndex : 2 }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->explodeIndex
*/
                    explodeIndex: null,  
                    /**		
* Enabling this property can avoid pie series data label overlap each other.
* @default null
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{enableSmartLabels : false }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->enableSmartLabels
*/
                    enableSmartLabels: true,
                    /**		
      * Contains all the properties to customize tooltip
      * @type {object}
       * @alias ejChart#series->tooltip
      */
                    tooltip: {
                        /**		
* tooltip visibility can be toggled using this property
* @default false
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : {visible : true} }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->visible
*/
                        visible: false,
                        /**		
* Formatting the values of point on a tooltip can be customized using this property.
* @default "#point.x# : #point.y#"
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : {format : "#point.x# : #point.y#"} }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->format
*/
                        format: "#point.x# : #point.y#",
                        /**		
* Specifies the fill color of the tooltip.
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : {fill : "green"} }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->fill
*/
                        fill: null,
                        /**		
      * Options for customizing the color, opacity and width of the border of tooltip.
      * @type {object}
       * @alias ejChart#series->tooltip->border
      */
                        border: {
                            /**		
* Specifies the width of tooltip.
* @default 1
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : {border : { width :2} }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->border->width
*/
                            width: 1,
                            /**		
* Specifies the color of tooltip.
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : {border : { color :"green"} }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->border->color
*/
                            color: null
                        },
                        /**		
* Enabling this property animates the tooltip on moving the cursor from one point to the other.
* @default true
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : { enableAnimation: false }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->enableAnimation
*/
                        enableAnimation: true,
                        /**		
* Specifies the duration of the tooltip to stay awake.
* @default "500ms"
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : { duration: "300ms" }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->duration
*/
                        duration: '500ms',
                        /**		
* Specifies the opacity of the tooltip. Values ranges from 0 to 1.
* @default 0.95
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* series : [{tooltip : { opacity: 0.5 }]                   
* });
* &lt;/script&gt; 
* @alias ejChart#series->tooltip->opacity
*/
                        opacity: 0.95
                    },
                    /**		
         * Specifies the fill color of series.
         * @default null
         * @type {string}			 
         * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{fill : "green"}]                 
      * });
      * &lt;/script&gt;
        * @alias ejChart#series->fill
         */
                    fill: null,
                    /**		
       * Specifies the opacity of series.  Series render with this specified opacity.
       * @default 1
       * @type {number}				 
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{opacity : 0.5}]                  
     * });
     * &lt;/script&gt; 
        * @alias ejChart#series->opacity
       */
                    opacity: 1,
                    /**		
      * Specifies the style to draw the end point of a line like butt, round, square. See {@link LineCap}
      * @default ej.datavisualization.Chart.LineCap.Butt
      * @type {enum}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{lineCap : "butt"}]                  
     * });
     * &lt;/script&gt;
       * @alias ejChart#series->lineCap
      */
                    lineCap: 'butt',
                    /**		
     * Specifies the shape to use at the intersection of two lines drawn.  See {@link LineJoin}
     * @default ej.datavisualization.Chart.LineJoin.Round
     * @type {enum}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{lineCap : "round"}]                  
     * });
     * &lt;/script&gt; 
      * @alias ejChart#series->lineJoin
     */
                    lineJoin: 'round',
                    /**		
     * Controls the pattern of dashes and gaps used to stroke the line series.
     * @default ""
     * @type {string}				 
     * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{dashArray : "2,3"}]                  
     * });
     * &lt;/script&gt; 
      * @alias ejChart#series->dashArray
     */
                    dashArray: "",
                    /**		
         * Specifies the border of the series. These are the properties involved in customizing the series border.
         * @type {object}
           * @alias ejChart#series->border
         */
                    border: {
                        /**		
   * Specifies the border width of series.Series in chart render with this specified value as border width
   * @default 1
   * @type {number}			 
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{border :{ width : 2 } }]                  
     * });
     * &lt;/script&gt;
    * @alias ejChart#series->border->width
   */
                        width: 1,
                        /**		
  * Specifies the border color of series. Series in chart render with this specified color as border color
  * @default "transparent"
  * @type {string}			 
  * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{border :{ color : "green" } }]                  
     * });
     * &lt;/script&gt;
  * @alias ejChart#series->border->color
  */
                        color: 'transparent'
                    },
                    width: 2,
                    /**		
       * Contains the customizing properties to add marker symbols to the points plotted in the chart.
       * @type {object}
         * @alias ejChart#series->marker
       */
                    marker: {
                        /**		
 * Specifies the shape of the marker. See {@link Shape}
 * @default ej.datavisualization.Chart.Shape.Circle
 * @type {enum}				
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{ shape: "rectangle"}]                  
     * });
     * &lt;/script&gt;
  * @alias ejChart#series->marker->shape
 */
                        shape: 'circle',
                        /**		
        * Specifies the size of the marker.
        * @type {object}
         * @alias ejChart#series->marker->size
        */
                        size: {
                            /**		
 * Specifies the width of the marker.
 * @default 6
 * @type {number}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{ size :{ width : 2 } } }]                  
     * });
     * &lt;/script&gt;
 * @alias ejChart#series->marker->size->width
 */
                            width: 6,
                            /**		
* Specifies the height of the marker. 
* @default 6
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{size :{height : 5}}}]                 
     * });
     * &lt;/script&gt;
* @alias ejChart#series->marker->size->height
*/
                            height: 6
                        },
                        /**		
* Toggles the visibility of the marker.
* @default false
* @type {boolean}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{ visible : true}}]                  
     * });
     * &lt;/script&gt; 
* @alias ejChart#series->marker->visible
*/
                        visible: false,
                        /**		
* Specifies the opacity of the marker. Values ranges from 0 to 1.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{ opacity : 0.5 }}]                  
     * });
     * &lt;/script&gt;
* @alias ejChart#series->marker->opacity
*/
                        opacity: 1,
                        /**		
* Specifies the fill color of the marker.
* @default null
* @type {string}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker : { fill : "green" } }]                  
     * });
     * &lt;/script&gt;
* @alias ejChart#series->marker->fill
*/
                        fill: null,
                        /**		
      * Options for customizing the color, opacity and width of the border of marker.
      * @type {object}
       * @alias ejChart#series->marker->border
      */
                        border: {
                            /**		
                        * Specifies the border color of marker.
                        * @default "white"
                        * @type {string}				 
                        * @example 
                        * &lt;div id="container"&gt;&lt;/div&gt; 
                        * &lt;script&gt;
                        * $("#container").ejChart({
                        * series :[{color : "green"}]                  
                        * });
                        * &lt;/script&gt; 
                        * @alias ejChart#series->marker->border->color
                        */
                            color: 'white',
                            /**		
* Specifies the width of the marker
* @default 3
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{border :{width : 2}}}]                  
      * });
      * &lt;/script&gt;
* @alias ejChart#series->marker->border->width
*/
                            width: 3
                        },
                        /**		
       * Contains the customizing properties to add data labels of the points plotted in the chart.
       * @type {object}
        * @alias ejChart#series->marker->dataLabel
       */
                        dataLabel: {
                            /**		
* Specifies the visibility of dataLabel in the marker. The user can change the visibility of dataLabel by applying this property.
* @default false
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{visible : true}}]                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#series->marker->dataLabel->visible
*/
                            visible: false,
                            /**		
* This property is used to change the alignment of the data label vertically.
* @default ej.datavisualization.Chart.verticalTextAlignment.Center
* @type {enum}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{verticalTextAlignment : "far"}}}]                  
     * });
     * &lt;/script&gt;
* @alias ejChart#series->marker->dataLabel->verticalTextAlignment
*/
                            verticalTextAlignment: 'center',
                            /**		
* This property is used to change the alignment of the data label horizontally.
* @default ej.datavisualization.Chart.horizontalTextAlignment.Center
* @type {enum}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * series :[{marker :{dataLabel :{horizontalTextAlignment : "far"}}}]                  
    * });
    * &lt;/script&gt;
* @alias ejChart#series->marker->dataLabel->horizontalTextAlignment
*/
                            horizontalTextAlignment: 'center',
                            /**		
* This property is used to change the position of the text in data label. See {@link TextPosition}
* @default ej.datavisualization.Chart.textPosition.Top
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{textPosition : "bottom"}}}]                 
     * });
     * &lt;/script&gt;
* @alias ejChart#series->marker->dataLabel->textPosition
*/
                            textPosition: 'top',
                            /**		
* Specifies the rendering shape of the marker. See {@link Shape}
* @default ej.datavisualization.Chart.Shape.None
* @type {enum}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{shape : "circle"}}}]                 
      * });
      * &lt;/script&gt;
* @alias ejChart#series->marker->dataLabel->shape
*/
                            shape: 'none',
                            /**		
* Specifies the opacity of dataLabel.
* @default 1
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{opacity : 0.5}}}]                 
      * });
      * &lt;/script&gt;
* @alias ejChart#series->marker->dataLabel->opacity
*/
                            opacity: 1,
                            /**		
         * Specifies the fill color of dataLabel.
         * @default null
         * @type {string}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{fill : "green"}}}]                 
      * });
      * &lt;/script&gt; 
         * @alias ejChart#series->marker->dataLabel->fill
         */
                            fill: null,
                            /**		
 * Options for customizing the color, opacity and width of the border of datalabel.
 * @type {object}
  * @alias ejChart#series->marker->dataLabel->border
 */
                            border: {
                                /**		
         * Specifies the border color of datalabel.
         * @default null
         * @type {string}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{border : {color : "green"}}}}]                 
     * });
     * &lt;/script&gt;
         * @alias ejChart#series->marker->dataLabel->border->color
         */
                                color: 'white',
                                /**		
         * Specifies the border width of dataLabel.
         * @default 0.1
         * @type {number}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{border :{ width :2 }}}}]                 
     * });
     * &lt;/script&gt; 
        * @alias ejChart#series->marker->dataLabel->border->width
         */
                                width: 0.1
                            },
                            /**		
     * Contains the options to customize the line connecting the point and the data label.
     * @type {object}
     * @alias ejChart#series->marker->dataLabel->connectorLine
     */
                            connectorLine: {
                                /**		
            * Specifies the width of the connector line.
            * @default 0.5
            * @type {number}				 
            * @example 
            * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{connectorLine :{ width : 2 }}}}]                 
     * });
     * &lt;/script&gt; 
            * @alias ejChart#series->marker->dataLabel->connectorLine->width
            */
                                width: 0.5,
                                /**		
            * Specifies whether to connect the point and data label using bezier curve or straight line. See {@link Type}
            * @default ej.datavisualization.Chart.Type.Line
            * @type {enum}			 
            * @example 
           * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{connectorLine :{ type : "spline" }}}}]                 
     * });
     * &lt;/script&gt;
            * @alias ejChart#series->marker->dataLabel->connectorLine->type
            */
                                type: 'line'
                            },
                            /**		
     * Specifies the font of the dataLabel. These are the properties involved in customizing the data label font.
     * @type {object}
      * @alias ejChart#series->marker->dataLabel->font 
     */
                            font: {
                                /**		
           * Specifies the fontFamily of dataLabel. Text in the data label render with the specified font family.
           * @default "Segoe UI"
           * @type {string}				 
           * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{ font :{fontFamily : "algerian"}}}}]                 
      * });
      * &lt;/script&gt; 
          * @alias ejChart#series->marker->dataLabel->font->fontFamily
           */
                                fontFamily: 'Segoe UI',
                                /**		
        * Specifies the fontStyle of dataLabel. Text in the data label render with the specified font style. See {@link FontStyle}
        * @default ej.datavisualization.Chart.FontStyle.Normal
        * @type {enum}			 
        * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * series :[{marker :{dataLabel :{font :{ fontStyle : "italic" }}}}]                 
    * });
    * &lt;/script&gt; 
        * @alias ejChart#series->marker->dataLabel->font->fontStyle
        */
                                fontStyle: 'Normal',
                                /**		
         * Specifies the fontWeight of dataLabel. Text in the data label render with the specified font weight. See {@link FontWeight}
         * @default ej.datavisualization.Chart.FontWeight.Regular
         * @type {enum}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{font : { fontWeight : "lighter" }}}}]                 
      * });
      * &lt;/script&gt;
         * @alias ejChart#series->marker->dataLabel->font->fontWeight
         */
                                fontWeight: 'Regular',
                                /**		
        * Specifies the font size of dataLabel. Text in the data label render with the specified font size.
        * @default "12px"
        * @type {string}			 
        * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{font : { size : "14px" }}}}]                 
      * });
      * &lt;/script&gt; 
        * @alias ejChart#series->marker->dataLabel->font->size
        */
                                size: '12px',
                                /**		
       * Specifies the color of the text in dataLabel.  Text in the data label render with the specified font color.
       * @default "#707070"
       * @type {string}			 
       * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{font :{ color : "green" }}}}]                 
     * });
     * &lt;/script&gt;; 
       * @alias ejChart#series->marker->dataLabel->font->color
       */
                                color: '#707070',
                                /**		
      * Specifies the opacity of the text in dataLabel. Text in the data label render with the specified opacity.
      * @default 1
      * @type {number}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{font :{ opacity : 0.5 }}}}]                 
     * });
     * &lt;/script&gt;
      * @alias ejChart#series->marker->dataLabel->font->opacity
      */
                                opacity: 1
                            },
                            /**		
     * Specifies the margin for the data label.
     * @type {object}
      * @alias ejChart#series->marker->dataLabel->margin
     */
                            margin: {
                                /**		
     * Specifies the left margin value in dataLabel. By specifying this property, we can adjust the text in data label to left.
     * @default 5
     * @type {number}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{margin :{ left : 10}}}}]                 
     * });
     * &lt;/script&gt; 
     * @alias ejChart#series->marker->dataLabel->margin->left
     */
                                left: 5,
                                /**		
     * Specifies the top margin value in dataLabel. By specifying this property, we can adjust the text in data label to top.
     * @default 5
     * @type {number}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{margin :{ top :10 } }}}]                 
     * });
     * &lt;/script&gt;
     * @alias ejChart#series->marker->dataLabel->margin->top
     */
                                top: 5,
                                /**		
      * Specifies the bottom margin value in dataLabel. By specifying this property, we can adjust the text in data label to bottom.
      * @default 5
      * @type {number}				
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * series :[{marker :{dataLabel :{margin :{ bottom :10 }}}}]                 
      * });
      * &lt;/script&gt;
      * @alias ejChart#series->marker->dataLabel->margin->bottom
      */
                                bottom: 5,
                                /**		
     * Specifies the right margin value in dataLabel. By specifying this property, we can adjust the text in data label to right.
     * @default 5
     * @type {number}			
     * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{marker :{dataLabel :{margin :{ right :10 }}}}]                 
     * });
     * &lt;/script&gt;
     * @alias ejChart#series->marker->dataLabel->margin->right
     */
                                right: 5
                            },

                        },
                    },
                    /**		
      * Specifies the font that is common to all series. These are the properties involved in customizing the font of the series in chart. 
      * @type {object}
       * @alias ejChart#series->font
      */
                    font: {
                        /**		
     * Specifies the fontFamily, that is common to all series. Text in the series, render with the specified font family.
     * @default "Segoe UI"
     * @type {string}				 
     * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{ font : { fontFamily : "Algerian"}}]                 
     * });
     * &lt;/script&gt; 
     * @alias ejChart#series->font->fontFamily
     */
                        fontFamily: 'Segoe UI',
                        /**		
    * Specifies the fontStyle, that is common to all series. Text in the series, render with the specified font style.
    * @default ej.datavisualization.Chart.FontStyle.Normal
    * @type {enum}		
    * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * series : [{font :{fontStyle : "italic"}} ]                
    * });
    * &lt;/script&gt;
   * @alias ejChart#series->font->fontStyle
    */
                        fontStyle: 'Normal',
                        /**		
    * Specifies the fontWeight, that is common to all series. Text in the series, render with the specified font weight.
    * @default ej.datavisualization.Chart.FontWeight.Regular
    * @type {enum}				 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{font :{fontWeight : "lighter"}}]                 
     * });
     * &lt;/script&gt;
    * @alias ejChart#series->font->fontWeight
    */
                        fontWeight: 'Regular',
                        /**		
    * Specifies the font size, that is common to all series. Text in the series, render with the specified font size.
    * @default "12px"
    * @type {string}				 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{font :{size : "14px"}}]                 
     * });
     * &lt;/script&gt; 
    * @alias ejChart#series->font->size
    */
                        size: '12px',
                        /**		
   * Specifies the color, that is common to all series. Text in the series, render with the specified font color.
   * @default "#707070"
   * @type {string}				 
   * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#container").ejChart({
     * series :[{font :{color : "green"}}]                 
     * });
     * &lt;/script&gt;
   * @alias ejChart#series->font->color
   */
                        color: '#707070',
                        /**		
  * Specifies the opacity, that is common to all series. Text in the series, render with the specified font opacity.
  * @default 1
  * @type {number}
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * series :[{font :{opacity : 0.5}}]                 
    * });
    * &lt;/script&gt;
  * @alias ejChart#series->font->opacity
  */
                        opacity: 1
                    },
                    _isdesigntime:true,

                }
            ],
            /**		
         * Options for configuring the properties commonly for all the series. You can also override the options for specific series by setting the options directly in each series object in series array.
         * @type {object}
         */
            commonSeriesOptions: /** @lends ejChart# */ {
                /**		
    * Specifies the type of series to be rendered in chart. See {@link Type}
    * @default ej.datavisualization.Chart.Type.Line
    * @type {enum}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ type : "spline"}                  
      * });
      * &lt;/script&gt; 
    * @alias ejChart#commonSeriesOptions->type
    */
                type:'column',
                /**		
   * Specifies the series animation common to all series. By specifying this, we can enable/disable the animation of the series.
   * @default true
   * @type {boolean}				 
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ enableAnimation : false}                  
      * });
      * &lt;/script&gt; 
   * @alias ejChart#commonSeriesOptions->enableAnimation
   */
                enableAnimation: false,
                /**		
* Used in Polar and Radar series to specify whether the line/area series has to be rendered in a closed state by joining the start and end point of the series.
* @default true
* @type {boolean}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ isClosed : false}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->isClosed
*/
                isClosed: true,
                /**		
* Used in Polar and Radar series to specify whether column type has to be rendered the stacked value of chart.
* @default false
* @type {boolean}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ isStacking : "true"}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->isStacking
*/
                isStacking: false,
                /**		
* Specifies the type of series that can be drawn in a Radar or Polar series. It supports line, column and area type.  See {@link DrawType}
* @default ej.datavisualization.Chart.DrawType.Line
* @type {enum}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ drawType : "area"}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->drawType
*/
                drawType: 'line',
                /**		
  * Sets the radius of the hole on the doughnut series with respect to plot area. Value ranges from 0 to 1.
  * @default 0.4
  * @type {number}				 
  * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ doughnutCoefficient : 0.5}                  
      * });
      * &lt;/script&gt; 
  * @alias ejChart#commonSeriesOptions->doughnutCoefficient
  */
                doughnutCoefficient: 0.4,
                /**		
   * Represents the distance the slice has to be moved out when it is exploded.
   * @default 0.4
   * @type {number}				
   * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ explodeOffset : 20}                  
      * });
      * &lt;/script&gt; 
  * @alias ejChart#commonSeriesOptions->explodeOffset
   */
                explodeOffset: 25,
                /**		
 * Sets the rendering mode of the pyramid as linear or surface. See {@link PyramidMode}
 * @default ej.datavisualization.Chart.PyramidMode.Linear
 * @type {enum}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ pyramidMode : "linear"}                  
      * });
      * &lt;/script&gt; 
 * @alias ejChart#commonSeriesOptions->pyramidMode
 */
                pyramidMode: 'linear',
                /**		
 * Specifies the position of the axis labels to render labels either inside or outside of plot area. See {@link LabelPosition}
 * @default ej.datavisualization.Chart.LabelPosition.Inside
 * @type {enum}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ labelPosition : "outside"}                  
      * });
      * &lt;/script&gt;  
 * @alias ejChart#commonSeriesOptions->labelPosition
 */
                labelPosition: 'inside',
                /**		
* Specifies the gap between each slice of a pyramid series in pixels.
* @default 0
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ gapRatio : 5}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->gapRatio
*/
                gapRatio: 0,
                /**		
* Sets the radius of the pie series with respect to plot area. Value ranges from 0 to 1.
* @default 0
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ pieCoefficient : 1}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->pieCoefficient
*/
                pieCoefficient: 0.8,
                /**		
* Sets the radius of the doughnut series with respect to plot area. Value ranges from 0 to 1.
* @default 0.8
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ doughnutSize : 0.9}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->doughnutSize
*/
                doughnutSize: 0.8,
                /**		
* Specifies the dataSource for series. 
* @default null	
* @type {object}
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* commonSeriesOptions : {dataSource: data.open }                   
* });
* &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->dataSource
*/
                dataSource: null,
                /**		
* Specifies the xName for dataSource in series.  This is used to take the x values from dataSource
* @default null	
* @type {string}
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* commonSeriesOptions : {xName: "XValue" }                   
* });
* &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->xName
*/
                xName: '',
                /**		
* Specifies the yName for dataSource in series.  This is used to take the y values from dataSource
* @default null	
* @type {string}
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
* &lt;script&gt;
* $("#container").ejChart({
* commonSeriesOptions :{yName: "XValue" }               
* });
* &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->yName
*/
				yName:'', 
                /**		
  * Specifies the starting angle for rendering pie / doughnut series.
  * @default null
  * @type {number}			 
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ startAngle : 150}                  
      * });
      * &lt;/script&gt; ; 
  * @alias ejChart#commonSeriesOptions->startAngle
  */
                startAngle: null,
                /**		
* Specifies the name of the xAxis.
* @default null
* @type {string}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ xAxisName : "xAxis"}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->xAxisName
*/
                xAxisName: null,
                /**		
* Specifies the name of the yAxis. 
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ yAxisName : "yAxis"}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->yAxisName
*/
                yAxisName: null,
                /**		
* Explodes all the pie slices. (Also works for doughnut series)
* @default false
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ explodeAll : true}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->explodeAll
*/
                explodeAll: null,
                /**		
* Index of a slice to be exploded from the whole pie. (Also works for doughnut series)
* @default null
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ explodeIndex : 2}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->explodeIndex
*/
                explodeIndex: null,
                /**		
* Enabling this property can avoid pie series data label overlap each other.
* @default true
* @type {boolean}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ enableSmartLabels : false}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->enableSmartLabels
*/
                enableSmartLabels: true,
                /**		
         * Contains all the properties to customize tooltip
         * @type {object}
         * @alias ejChart#commonSeriesOptions->tooltip
         */
                tooltip: {
                    /**		
* tooltip visibility can be toggled using this property
* @default false
* @type {boolean}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ tooltip :{visible : true} }                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->tooltip->visible
*/
                    visible: false,
                    /**		
* Formatting the values of point on a tooltip can be customized using this property.
* @default "#point.x# : #point.y#"
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ format : "#point.x# : #point.y#%"}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->tooltip->format
*/
                    format: "#point.x# : #point.y#",
                    /**		
* Specifies the fill color of the tooltip.
* @default null
* @type {string}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{fill : "green"}}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->tooltip->fill
*/
                    fill: null,
                    /**		
         * Options for customizing the color, opacity and width of the border of tooltip.
         * @type {object}
          * @alias ejChart#commonSeriesOptions->tooltip->border
         */
                    border: {
                        /**		
* Specifies the border color of tooltip.
* @default null
* @type {string}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{border:{ color : "green" }}}                  
      * });
      * &lt;/script&gt;  
* @alias ejChart#commonSeriesOptions->tooltip->border->color
*/
                        color: null,
                        /**		
* Specifies the border width of tooltip.
* @default 1
* @type {number}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{border :{ width : 2}}}                  
      * });
      * &lt;/script&gt;   
* @alias ejChart#commonSeriesOptions->tooltip->border->width
*/
                        width: 1
                    },
                    /**		
 * Enabling this property animates the tooltip on moving the cursor from one point to the other.
 * @default true
 * @type {boolean}			 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{enableAnimation : false}}                  
      * });
      * &lt;/script&gt;  
 * @alias ejChart#commonSeriesOptions->tooltip->enableAnimation
 */
                    enableAnimation: true,
                    /**		
 * Specifies the duration of the tooltip to stay awake.
 * @default "500ms"
 * @type {string}				 
 * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{duration : "300ms"}}                  
      * });
      * &lt;/script&gt;   
 * @alias ejChart#commonSeriesOptions->tooltip->duration
 */
                    duration: '500ms',
                    /**		
 * Specifies the opacity of the tooltip. Values ranges from 0 to 1.
 * @default 0.5
 * @type {number}			
 * @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{tooltip :{opacity : 0.5}}                  
      * });
      * &lt;/script&gt;  
 * @alias ejChart#commonSeriesOptions->tooltip->opacity
 */
                    opacity: 0.95
                },
                /**		
         * Specifies the fill color of series.
         * @default null
         * @type {string}			 
         * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{fill : "green"}                  
      * });
      * &lt;/script&gt;
        * @alias ejChart#commonSeriesOptions->fill
         */
                fill: null,
                /**		
        * Specifies the opacity of series. The value ranges form 0 to 1.
        * @default 1
        * @type {number}				 
        * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{opacity : 0.5}                  
      * });
      * &lt;/script&gt; 
         * @alias ejChart#commonSeriesOptions->opacity
        */
                opacity: 1,
                /**		
       * Specifies the style to draw the end point of a line like butt, round, square. See {@link LineCap}
       * @default ej.datavisualization.Chart.LineCap.Butt
       * @type {enum}				 
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{lineCap : "butt"}                  
      * });
      * &lt;/script&gt;
        * @alias ejChart#commonSeriesOptions->lineCap
       */
                lineCap: 'butt',
                /**		
      * Specifies the shape to use at the intersection of two lines drawn.  See {@link LineJoin}
      * @default ej.datavisualization.Chart.LineJoin.Round
      * @type {enum}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{lineCap : "round"}                  
      * });
      * &lt;/script&gt; 
       * @alias ejChart#commonSeriesOptions->lineJoin
      */
                lineJoin: 'round',
                /**		
      * Controls the pattern of dashes and gaps used to stroke the line series.
      * @default ""
      * @type {string}				 
      * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{dashArray : "2,3"}                  
      * });
      * &lt;/script&gt; 
       * @alias ejChart#commonSeriesOptions->dashArray
      */
                dashArray: "",
                /**		
         * Options for customizing the color, opacity and width of the border of series.
         * @type {object}
           * @alias ejChart#commonSeriesOptions->border
         */
                border: {
                    /**		
   * Specifies the border color of series.
   * @default "transparent"
   * @type {string}			 
   * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{border :{ color : "green" } }                  
      * });
      * &lt;/script&gt;
   * @alias ejChart#commonSeriesOptions->border->color
   */
                    color: 'transparent',
                    /**		
    * Specifies the border width of series.
    * @default 1
    * @type {number}			 
    * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{border :{ width : 2 } }                  
      * });
      * &lt;/script&gt;
     * @alias ejChart#commonSeriesOptions->border->width
    */
                    width: 1
                },
                width: 2,
                /**		
         * Contains the customizing properties to add marker symbols to the points plotted in the chart 
         * @type {object}
           * @alias ejChart#commonSeriesOptions->marker
         */
                marker:
                {
                    /**		
  * Specifies the shape of the marker. See {@link Shape}
  * @default ej.datavisualization.Chart.Shape.Circle
  * @type {enum}				
  * @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{ shape: "rectangle"}                  
      * });
      * &lt;/script&gt;
   * @alias ejChart#commonSeriesOptions->marker->shape
  */
                    shape: 'circle',
                    /**		
         * Specifies the size of the marker.
         * @type {object}
          * @alias ejChart#commonSeriesOptions->marker->size
         */
                    size: {
                        /**		
  * Specifies the width of the marker.
  * @default 6
  * @type {number}				 
  * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{ size :{ width : 2 } } }                  
      * });
      * &lt;/script&gt;
  * @alias ejChart#commonSeriesOptions->marker->size->width
  */
                        width: 6,
                        /**		
* Specifies the height of the marker.
* @default 6
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{size :{height : 5}}}                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->size->height
*/
                        height: 6
                    },
                    /**		
* Toggles the visibility of the marker.
* @default false
* @type {boolean}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{ visible : true}}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->marker->visible
*/
                    visible: false,
                    /**		
* Specifies the opacity of the marker. Values ranges from 0 to 1.
* @default 1
* @type {number}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{ opacity : 0.5 }}                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->opacity
*/
                    opacity: 1,
                    /**		
* Specifies the fill color of the marker.
* @default null
* @type {string}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker : { fill : "green" } }                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->fill
*/
                    fill: null,
                    /**		
       * Options for customizing the color, opacity and width of the border of marker.
       * @type {object}
        * @alias ejChart#commonSeriesOptions->marker->border
       */
                    border: {
                        /**		
                        * Specifies the border color of marker.
                        * @default "white"
                        * @type {string}				 
                        * @example 
                        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{color : "green"}                  
      * });
      * &lt;/script&gt; 
                        * @alias ejChart#commonSeriesOptions->marker->border->color
                        */
                        color: 'white',
                        /**		
* Specifies the border width of marker.
* @default 3
* @type {number}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{border :{width : 2}}}                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->border->width
*/
                        width: 3
                    },
                    /**		
       * Contains the customizing properties to add data labels of the points plotted in the chart.
       * @type {object}
        * @alias ejChart#commonSeriesOptions->marker->dataLabel
       */
                    dataLabel:
                    {
                        /**		
* Toggles the visibility of dataLabel in the marker.
* @default false
* @type {boolean}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{visible : true}}                  
      * });
      * &lt;/script&gt; 
* @alias ejChart#commonSeriesOptions->marker->dataLabel->visible
*/
                        visible: false,
                        /**		
* This property is used to change the alignment of the data label vertically.
* @default ej.datavisualization.Chart.verticalTextAlignment.Center
* @type {enum}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{verticalTextAlignment : "far"}}}                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->dataLabel->verticalTextAlignment
*/
                        verticalTextAlignment: 'center',
                        /**		
* This property is used to change the alignment of the data label horizontally.
* @default ej.datavisualization.Chart.horizontalTextAlignment.Center
* @type {enum}			 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{horizontalTextAlignment : "far"}}}                  
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->dataLabel->horizontalTextAlignment
*/
                        horizontalTextAlignment: 'center',
                        /**		
* This property is used to change the position of the text in data label. See {@link TextPosition}
* @default ej.datavisualization.Chart.textPosition.Top
* @type {enum}			
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{textPosition : "bottom"}}}                 
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->dataLabel->textPosition
*/
                        textPosition: 'top',
                        /**		
* Specifies the rendering shape of the marker. See {@link Shape}
* @default ej.datavisualization.Chart.Shape.None
* @type {enum}				
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{shape : "circle"}}}                 
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->dataLabel->shape
*/
                        shape: 'none',

                        /**		
* Specifies the opacity of dataLabel.
* @default 1
* @type {number}				 
* @example 
* &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{opacity : 0.5}}}                 
      * });
      * &lt;/script&gt;
* @alias ejChart#commonSeriesOptions->marker->dataLabel->opacity
*/
                        opacity: 1,
                        /**		
         * Specifies the fill color of datalabel.
         * @default null
         * @type {string}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{fill : "green"}}}                 
      * });
      * &lt;/script&gt; 
         * @alias ejChart#commonSeriesOptions->marker->dataLabel->fill
         */
                        fill: null,
                        /**		
 * Options for customizing the color, opacity and width of the border of datalabel.
 * @type {object}
  * @alias ejChart#commonSeriesOptions->marker->dataLabel->border
 */
                        border: {
                            /**		
          * Specifies the border color of datalabel.
          * @default null
          * @type {string}				 
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{border : {color : "green"}}}}                 
      * });
      * &lt;/script&gt;
          * @alias ejChart#commonSeriesOptions->marker->dataLabel->border->color
          */
                            color: 'white',
                            /**		
          * Specifies the border width of datalabel.
          * @default 0.1
          * @type {number}				 
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{border :{ width :2 }}}}                 
      * });
      * &lt;/script&gt; 
         * @alias ejChart#commonSeriesOptions->marker->dataLabel->border->width
          */
                            width: 0.1
                        },
                        /**		
      * Contains the options to customize the line connecting the point and the data label.
      * @type {object}
      * @alias ejChart#commonSeriesOptions->marker->dataLabel->connectorLine
      */
                        connectorLine:
                        {
                            /**		
             * Specifies the width of the connector line.
             * @default 0.5
             * @type {number}				 
             * @example 
             * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{connectorLine :{ width : 2 }}}}                 
      * });
      * &lt;/script&gt; 
             * @alias ejChart#commonSeriesOptions->marker->dataLabel->connectorLine->width
             */
                            width: 0.5,
                            /**		
             * Specifies whether to connect the point and data label using bezier curve or straight line. See {@link Type}
             * @default ej.datavisualization.Chart.Type.Line
             * @type {enum}			 
             * @example 
            * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{connectorLine :{ type : "spline" }}}}                 
      * });
      * &lt;/script&gt;
             * @alias ejChart#commonSeriesOptions->marker->dataLabel->connectorLine->type
             */
                            type: 'line'
                        },
                        /**		
      * Specifies the font of the dataLabel. These are the properties involved in customizing the data label font.
      * @type {object}
       * @alias ejChart#commonSeriesOptions->marker->dataLabel->font 
      */
                        font:
                        {
                            /**		
           * Specifies the fontFamily of dataLabel. Text in the data label render with the specified font family.
           * @default "Segoe UI"
           * @type {string}				 
           * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{ font :{fontFamily : "algerian"}}}}                 
      * });
      * &lt;/script&gt; 
          * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->fontFamily
           */
                            fontFamily: 'Segoe UI',
                            /**		
          * Specifies the fontStyle of dataLabel. Text in the data label render with the specified font style. See {@link FontStyle}
          * @default ej.datavisualization.Chart.FontStyle.Normal
          * @type {enum}			 
          * @example 
          * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{font :{ fontStyle : "italic" }}}}                 
      * });
      * &lt;/script&gt; 
          * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->fontStyle
          */
                            fontStyle: 'Normal',
                            /**		
         * Specifies the fontWeight of dataLabel. Text in the data label render with the specified font weight. See {@link FontWeight}
         * @default ej.datavisualization.Chart.FontWeight.Regular
         * @type {enum}				 
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{font : { fontWeight : "lighter" }}}}                 
      * });
      * &lt;/script&gt;
         * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->fontWeight
         */
                            fontWeight: 'Regular',
                            /**		
        * Specifies the font size of dataLabel. Text in the data label render with the specified font size.
        * @default "12px"
        * @type {string}			 
        * @example 
        * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{font : { size : "14px" }}}}                 
      * });
      * &lt;/script&gt; 
        * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->size
        */
                            size: '12px',
                            /**		
        * Specifies the color of the text in dataLabel.  Text in the data label render with the specified font color.
        * @default "#707070"
        * @type {string}			 
        * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{font :{ color : "green" }}}}                 
      * });
      * &lt;/script&gt;; 
        * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->color
        */
                            color: '#707070',
                            /**		
       * Specifies the opacity of the text in dataLabel. Text in the data label render with the specified opacity.
       * @default 1
       * @type {number}				 
       * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{font :{ opacity : 0.5 }}}}                 
      * });
      * &lt;/script&gt;
       * @alias ejChart#commonSeriesOptions->marker->dataLabel->font->opacity
       */
                            opacity: 1
                        },
                        /**		
      * Specifies the margin for the data label.
      * @type {object}
       * @alias ejChart#commonSeriesOptions->marker->dataLabel->margin
      */
                        margin:
                        {
                            /**		
      * Specifies the left margin value for dataLabel. By specifying this property, we can adjust the text in data label to left.
      * @default 5
      * @type {number}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{margin :{ left : 10}}}}                 
      * });
      * &lt;/script&gt; 
      * @alias ejChart#commonSeriesOptions->marker->dataLabel->margin->left
      */
                            left: 5,
                            /**		
      * Specifies the top margin value for dataLabel. By specifying this property, we can adjust the text in data label to top.
      * @default 5
      * @type {number}				 
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{margin :{ top :10 } }}}                 
      * });
      * &lt;/script&gt;
      * @alias ejChart#commonSeriesOptions->marker->dataLabel->margin->top
      */
                            top: 5,
                            /**		
      * Specifies the bottom margin value for dataLabel. By specifying this property, we can adjust the text in data label to bottom.
      * @default 5
      * @type {number}				
      * @example 
      * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{margin :{ bottom :10 }}}}                 
      * });
      * &lt;/script&gt;
      * @alias ejChart#commonSeriesOptions->marker->dataLabel->margin->bottom
      */
                            bottom: 5,
                            /**		
      * Specifies the right margin value for dataLabel. By specifying this property, we can adjust the text in data label to right.
      * @default 5
      * @type {number}			
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{marker :{dataLabel :{margin :{ right :10 }}}}                 
      * });
      * &lt;/script&gt;
      * @alias ejChart#commonSeriesOptions->marker->dataLabel->margin->right
      */
                            right: 5
                        }
                    }
                },
                /**		
      * Specifies the font that is common to all series. These are the properties involved in customizing the font of the series in chart. 
      * @type {object}
       * @alias ejChart#commonSeriesOptions->font
      */
                font: {
                    /**		
      * Specifies the fontFamily, that is common to all series. Text in the series, render with the specified font family.
      * @default "Segoe UI"
      * @type {string}				 
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{ font : { fontFamily : "Algerian"}}                 
      * });
      * &lt;/script&gt; 
      * @alias ejChart#commonSeriesOptions->font->fontFamily
      */
                    fontFamily: 'Segoe UI',
                    /**		
      * Specifies the fontStyle, that is common to all series. Text in the series, render with the specified font style.
      * @default ej.datavisualization.Chart.FontStyle.Normal
      * @type {enum}		
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions : {font :{fontStyle : "italic"}}                 
      * });
      * &lt;/script&gt;
     * @alias ejChart#commonSeriesOptions->font->fontStyle
      */
                    fontStyle: 'Normal',
                    /**		
     * Specifies the fontWeight, that is common to all series. Text in the series, render with the specified font weight.
     * @default ej.datavisualization.Chart.FontWeight.Regular
     * @type {enum}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{font :{fontWeight : "lighter"}}                 
      * });
      * &lt;/script&gt;
     * @alias ejChart#commonSeriesOptions->font->fontWeight
     */
                    fontWeight: 'Regular',
                    /**		
     * Specifies the font size, that is common to all series. Text in the series, render with the specified font size.
     * @default "12px"
     * @type {string}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{font :{size : "14px"}}                 
      * });
      * &lt;/script&gt; 
     * @alias ejChart#commonSeriesOptions->font->size
     */
                    size: '12px',
                    /**		
    * Specifies the color, that is common to all series. Text in the series, render with the specified font color.
    * @default "#707070"
    * @type {string}				 
    * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{font :{color : "green"}}                 
      * });
      * &lt;/script&gt;
    * @alias ejChart#commonSeriesOptions->font->color
    */
                    color: '#707070',
                    /**		
    * Specifies the opacity, that is common to all series. Text in the series, render with the specified font opacity.
    * @default 1
    * @type {number}
	* @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * commonSeriesOptions :{font :{opacity : 0.5}}                 
      * });
      * &lt;/script&gt;
    * @alias ejChart#commonSeriesOptions->font->opacity
    */
                    opacity: 1
                }
            },
            /**		
     * Contains the properties to customize crosshair or trackball.
     * @type {object}
     */
            crosshair: /** @lends ejChart# */
            {
                /**		
     * Contains property to customize the marker in crosshair.
     * @type {object}
      * @alias ejChart#crosshair->marker
     */
                marker:
                {
                    /**		
    * Toggles the visibility of the marker in crosshair.
    * @default true
    * @type {boolean}			
    * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{marker :{visible :false}}              
      * });
      * &lt;/script&gt;
     * @alias ejChart#crosshair->marker->visible
    */
                    visible: true,
                    /**		
     * Contains property to customize the size of marker.
     * @type {object}
       * @alias ejChart#crosshair->marker->size
     */
                    size:
                    {
                        /**		
   * Specifies the width of the marker in crosshair.
   * @default 10
   * @type {number}			 
   * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{marker :{size : {width :15}}}              
      * });
      * &lt;/script&gt;
    * @alias ejChart#crosshair->marker->size->width
   */
                        width: 10,
                        /**		
 * Specifies the height of the marker in crosshair.
 * @default 10
 * @type {number}				 
 * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{marker :{size :{ height :15 }}}              
      * });
      * &lt;/script&gt; 
 * @alias ejChart#crosshair->marker->size->height
 */
                        height: 10
                    },
                    /**		
 * Specifies the opacity of the marker in crosshair.
 * @default true
 * @type {boolean}			 
 * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{marker :{opacity :2}}              
      * });
      * &lt;/script&gt; 
  * @alias ejChart#crosshair->marker->opacity
 */
                    opacity: 1,
                    /**		
     * Options for customizing the width of the border of marker.
     * @type {object}
       * @alias ejChart#crosshair->marker->border
     */
                    border:
                    {
                        /**		
      * Specifies the border width of the marker in crosshair.
      * @default 3
      * @type {number}			 
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{marker :{border :{ width :2 }}}              
      * });
      * &lt;/script&gt;
       * @alias ejChart#crosshair->marker->border->width
      */
                        width: 3
                    }
                },
                /**		
      * Toggles the visibility of the crosshair / trackball in the plot area
      * @default false
      * @type {boolean}				
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{visible :true}              
      * });
      * &lt;/script&gt;
       * @alias ejChart#crosshair->visible
      */
                visible: false,
                /**		
      * Specifies the type of the crosshair. It may be trackball or crosshair.
      * @default ej.datavisualization.Chart.CrosshairType.Crosshair
      * @type {enum}				 
      * @example 
       * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * crosshair :{type : "trackball"}              
      * });
      * &lt;/script&gt; 
       * @alias ejChart#crosshair->type
      */
                type: "crosshair"
            },


            pointStyle:
            {
                lineCap: 'butt', lineJoin: 'round', opacity: 1, interior: null, borderColor: null, borderWidth: 1
            },
            textStyle:
            {
                marker: { textAlignment: 'center', textPosition: 'top' },
                font: { fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }
            },
            symbolShape: {
                None: 0,
                LeftArrow: 1,
                RightArrow: 2,
                Circle: 3,
                Cross: 4,
                HorizLine: 5,
                VertLine: 6,
                Diamond: 7,
                Rectangle: 8,
                Triangle: 9,
                InvertedTriangle: 10,
                Hexagon: 11,
                Pentagon: 12,
                Star: 13,
                Ellipse: 14,
                Wedge: 15,
                Trapezoid: 16,
                UpArrow: 17,
                DownArrow: 18,
                Image: 19
            },
            initSeriesRender: true,
            /**		
     * By specifying this property the user can change the theme of the chart. See {@link Theme}
     * @default ej.datavisualization.Chart.Theme.Flatlight
     * @type {enum}				 
     * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * theme : "flatdark"            
      * });
      * &lt;/script&gt;
     */
            theme: "flatlight",
            /**		
    * Sets a value whether to make the chart responsive on resize.
    * @default false
    * @type {boolean}			 
    * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * canResize : true             
      * });
      * &lt;/script&gt;
    */
            canResize: false,
            /**		
     * Contains property to customize zooming in chart.
     * @type {object}
     */
            zooming: /** @lends ejChart# */
            {
                /**		
   * Enabling this property will allow zooming for chart plot area.
   * @default false
   * @type {boolean}				 
   * @example 
     * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * zooming :{enable :true}          
      * });
      * &lt;/script&gt;
    * @alias ejChart#zooming->enable
   */
                enable: false,
                /**		
   * Specifies whether zooming has to be vertical or horizontal.
   * @default 'x,y'
   * @type {string}			 
   * @example 
   * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * zooming :{type : "y"}            
      * });
      * &lt;/script&gt; 
   * @alias ejChart#zooming->type
   */
                type: 'x,y',
                /**		
   * Enabling this property will allow user to zoom plot are on rolling mouse wheel.
   * @default false
   * @type {boolean}			 
   * @example 
    * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * zooming:{enableMouseWheel : true}            
      * });
      * &lt;/script&gt; 
   * @alias ejChart#zooming->enableMouseWheel
   */
                enableMouseWheel: false,
                /**		
 * Enabling this property will allow user to pan the zoomed chart on mouse up.
 * @default false
 * @type {boolean}			 
 * @example 
  * &lt;div id="container"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * $("#container").ejChart({
    * zooming:{enableDeferredZoom : true}            
    * });
    * &lt;/script&gt; 
    * @alias ejChart#zooming->enableDeferredZoom
 */
          enableDeferredZoom : false
            },
            type: 'x,y',
            /**		
* This property is to specify the localization of chart.
* @default "en-US"
* @type {string}				 
* @example 
 * &lt;div id="container"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#container").ejChart({
      * locale : "en-US"            
      * });
      * &lt;/script&gt;
*/
            locale: "en-US",

            xZoomFactor: 1,

            yZoomFactor: 1,

            xZoomPosition: 0,

            yZoomPosition: 0,
            /**     
              * Fires on load of chart.
              * @event
              * @name ejChart#load	
              * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
              * @example 
              * //load event for chart
              * $("#container").ejChart({
              *    load: function (args) {}
              * });
              */
            load: "",
            /**     
              * Fires on rendering the axis labels.
              * @event
              * @name ejChart#axesLabelRendering
              * @param {Object} argument.Axis parameters from chart   
              * @param {Object} argument.Label parameters from chart for processing of labels
			  * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			  * @param {object}  argument.model returns the chart model
			  * @param {string}  argument.type returns the name of the event
              * @example 
              * //axesLabelRendering event for chart
              * $("#container").ejChart({
              *    axesLabelRendering: function (args) {}
              * });
              
              */
            axesLabelRendering: "",
            /**     
             * Fires on axes range calculation.
             * @event
             * @name ejChart#axesRangeCalculate	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //axesRangeCalculate event for chart
             * $("#container").ejChart({
             *    axesRangeCalculate: function (args) {}
             * });
             
             */
            axesRangeCalculate: "",
            /**     
             * Fires on rendering the axes title.
             * @event
             * @name ejChart#axesTitleRendering	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //axesTitleRendering event for chart
             * $("#container").ejChart({
             *    axesTitleRendering: function (args) {}
             * });
             
             */
            axesTitleRendering: "",
            /**     
             * Fires on chart area bounds calculation.
             * @event
             * @name ejChart#chartAreaBoundsCalculate	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //chartAreaBoundsCalculate event for chart
             * $("#container").ejChart({
             *    chartAreaBoundsCalculate: function (args) {}
             * });
             
             */
            chartAreaBoundsCalculate: "",
            /**     
             * Fires on rendering of legend item.
             * @event
             * @name ejChart#legendItemRendering
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //legendItemRendering event for chart
             * $("#container").ejChart({
             *    legendItemRendering: function (args) {}
             * });
             
             */
            legendItemRendering: "",
            /**     
             * Fires on calculating the legend bounds
             * @event
             * @name ejChart#legendBoundsCalculate
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //legendBoundsCalculate event for chart
             * $("#container").ejChart({
             *    legendBoundsCalculate: function (args) {}
             * });
             
             */
            legendBoundsCalculate: "",
            /**     
             * Fires on pre render.
             * @event
             * @name ejChart#preRender	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //preRender event for chart
             * $("#container").ejChart({
             *    preRender: function (args) {}
             * });
             
             */
            preRender: "",
            /**     
             * Fires on rendering the series.
             * @event
             * @name ejChart#seriesRendering
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //seriesRendering event for chart
             * $("#container").ejChart({
             *    seriesRendering: function (args) {}
             * });
             
             */
            seriesRendering: "",
            /**     
             * Fires on rendering the symbols.
             * @event
             * @name ejChart#symbolRendering
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //symbolRendering event for chart
             * $("#container").ejChart({
             *    symbolRendering: function (args) {}
             * });
             
             */
            symbolRendering: "",
            /**     
             * Fires on rendering the title.
             * @event
             * @name ejChart#titleRendering	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //titleRendering event for chart
             * $("#container").ejChart({
             *    titleRendering: function (args) {}
             * });
             
             */
            titleRendering: "",
            /**     
             * Fires on initializing the axis labels.
             * @event
             * @name ejChart#axesLabelsInitialize
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //axesLabelsInitialize event for chart
             * $("#container").ejChart({
             *    axesLabelsInitialize: function (args) {}
             * });
             
             */
            axesLabelsInitialize: "",
            /**     
             * Fires on click of point region.
             * @event
             * @name ejChart#pointRegionClick	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //pointRegionClick event for chart
             * $("#container").ejChart({
             *    pointRegionClick: function (args) {}
             * });
             
             */
            pointRegionClick: "",
            /**     
             * Fires on mousemove over the point region.
             * @event
             * @name ejChart#pointRegionMouseMove	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //pointRegionMouseMove event for chart
             * $("#container").ejChart({
             *    pointRegionMouseMove: function (args) {}
             * });
             
             */
            pointRegionMouseMove: "",
            /**     
             * Fires on click of legend item
             * @event
             * @name ejChart#legendItemClick	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //legendItemClick event for chart
             * $("#container").ejChart({
             *    legendItemClick: function (args) {}
             * });
             
             */
            legendItemClick: "",
            /**     
             * Fires on mouse move over legend item.
             * @event
             * @name ejChart#legendItemMouseMove	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //legendItemMouseMove event for chart
             * $("#container").ejChart({
             *    legendItemMouseMove: function (args) {}
             * });
             
             */
            legendItemMouseMove: "",
            /**     
             * Fires on rendering the display text.
             * @event
             * @name ejChart#displayTextRendering		
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //displayTextRendering event for chart
             * $("#container").ejChart({
             *    displayTextRendering: function (args) {}
             * });
             
             */
            displayTextRendering: "",
            /**     
             * Fires on initialize the tooltip.
             * @event
             * @name ejChart#toolTipInitialize	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //toolTipInitialize event for chart
             * $("#container").ejChart({
             *    toolTipInitialize: function (args) {}
             * });
             
             */
            toolTipInitialize: "",
            /**     
             * Fires on track the axis tooltip.
             * @event
             * @name ejChart#trackAxisToolTip	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //trackAxisToolTip event for chart
             * $("#container").ejChart({
             *    trackAxisToolTip: function (args) {}
             * });
             
             */
            trackAxisToolTip: "",
            /**     
             * Fires on tracking the tooltip.
             * @event
             * @name ejChart#trackToolTip	
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //trackToolTip event for chart
             * $("#container").ejChart({
             *    trackToolTip: function (args) {}
             * });
             
             */
            trackToolTip: "",
            /**     
             * Fires on completion of animation.
             * @event
             * @name ejChart#animationComplete
             * @param {Object} argument.Data parameters from chart     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the chart model
			 * @param {string}  argument.type returns the name of the event
             * @example 
             * //animationComplete event for chart
             * $("#container").ejChart({
             *    animationComplete: function (args) {}
             * });
             
             */
            animationComplete: "",
            /**     
             * Fires when chart is destroyed completely.
             * @event
             * @name ejChart#destroy
             * @example 
             * //animationComplete event for chart
             * $("#container").ejChart("destroy");
             
             */
            destroy: "",
            /**     
            * Fires after chart is created.
            * @event
            * @name ejChart#create		
            * @example 
            * //create event for chart
            * $("#container").ejChart("create");
            
            */
            create: "",

            margin: { left: 10, right: 10, top: 10, bottom: 10 },
            size: {},
            elementSpacing: 10,

            seriesColors: [],
            seriesBorderColors: [],
            dateStart: 25568.791666666668,
            pointColors: [],
            pointBorderColors: []
        },
        /**
          * Specify the data types for default properties 
          * @private
          */
        dataTypes: {
            commonSeriesOptions:{dataSource:"data"},
            axes: "array",
            series: "array",
            seriesColors: "array",
            palette: "array",
            rowDefinitions: "array",
            columnDefinitions: "array",
            seriesBorderColors: "array",
            pointColors: "array",
            pointBorderColors: "array",
            initSeriesRender: "boolean",
            theme: "enum",
            canResize: "boolean",
            elementSpacing: "number",
            primaryXAxis: {
                labels: "array",
                stripLine: "array",
                orientation: "enum",
                rangePadding: "enum",

                opposedPosition: "boolean",
                zoomFactor: "number",
                zoomPosition: "number"
            },
            primaryYAxis: {
                labels: "array",
                stripLine: "array",
                orientation: "enum",
                rangePadding: "enum",

                opposedPosition: "boolean",
                zoomFactor: "number",
                zoomPosition: "number"
            },
            legend: {

                shape: "enum",
                alignment: "enum",
                position: "enum",
                itemPadding: "number"
            },
            zooming: {
                enable: "boolean",
                type: "string",
                enableMouseWheel: "boolean"
            },
            size: {
                width: "string",
                height: "string"
            }

        },

        observables: ["xZoomFactor", "yZoomFactor", "xZoomPosition", "yZoomPosition"],
        _xZoomFactor: ej.util.valueFunction("xZoomFactor"),
        _yZoomFactor: ej.util.valueFunction("yZoomFactor"),
        _xZoomPosition: ej.util.valueFunction("xZoomPosition"),
        _yZoomPosition: ej.util.valueFunction("yZoomPosition"),

        /**
        * Create the chart widget
        * @private
        */
        _init: function () {

            this._renderSfChart();

        },
        _destroy: function () {
            $(this.element).removeClass("e-chart e-js").find("#" + this.svgObject.id).remove();
        },
        /**
        * redraw the chart widget
		* @return jQuery
		* @example 
		* &lt;div id="container"&gt;&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // Redraw Chart
		* var chartObj = $("#container").data("ejChart");
		* chartObj.redraw(); // redraw the chart
		* &lt;/script&gt;
		* @example 
		* &lt;div id="container"&gt;&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#container").ejChart("redraw");	
		* &lt;/script&gt;
		
         */
        redraw: function (excludeDataUpdate) {
            for (var i = 0; i < this.model.axes.length; i++){
                this.model.axes[i].desiredIntervals = null;
                this.model.axes[i]._valueType = null;
                this.model.axes[i].position = null;
            } 
            $('#template_group_' + this._id).remove();
            $(this.svgObject).empty();
            this.bindTo(excludeDataUpdate);
        },
        /**
                 * To configure the properties at runtime using SetModel		
                 * @private
                 */
        _setModel: function (options) {
            for (var prop in options) {
                this.disableAnimation();
                switch (prop) {
                    case "theme":
                        this.model._themeChanged = true;
                        this.model.theme = options[prop];
                        this.setTheme(ej.EjSvgRender.themes, this.model.theme);
                        $.extend(true, this.model.axes[0], ej.EjSvgRender.themes[this.model.theme].primaryXAxis);
                        $.extend(true, this.model.axes[1], ej.EjSvgRender.themes[this.model.theme].primaryYAxis);
                        for (var k = 2; k < this.model.axes.length; k++) {
                            if (this.model.axes[k].orientation.toLowerCase() == "horizontal")
                                $.extend(true, this.model.axes[k], ej.EjSvgRender.themes[this.model.theme].secondaryX);
                            else
                                $.extend(true, this.model.axes[k], ej.EjSvgRender.themes[this.model.theme].secondaryY);
                        }
                        break;
                    case "commonSeriesOptions":
                        for (var i = 0; i < this.model.series.length; i++)
                            $.extend(true, this.model.series[i], {}, options[prop]);
                        break;
                    case "series":
                        $.extend(true, this.model.series, {}, options[prop]);
                        break;
                    case "legend":
                        $.extend(true, this.model.legend, {}, options[prop]);
                        break;
                    case "axes":
                        $.extend(true, this.model.axes, {}, options[prop]);
                        break;
                    case "primaryXAxis":
                        this.model.axes[0].setRange = (options[prop].range) ? true : false;
                        this.model.axes[0].actual_Range = (this.model.axes[0].setRange) ? null : this.model.axes[0].actual_Range;
                        $.extend(true, this.model.axes[0], {}, options[prop]);
                        break;
                    case "primaryYAxis":
                        this.model.axes[1].setRange = (options[prop].range) ? true : false;
                        this.model.axes[1].actual_Range = (this.model.axes[1].setRange) ? null : this.model.axes[1].actual_Range;
                        $.extend(true, this.model.axes[1], {}, options[prop]);
                        break;
                    case "xZoomFactor":
                        this.model.axes[0].zoomFactor = this._xZoomFactor();
                        break;
                    case "yZoomFactor":
                        this.model.axes[1].zoomFactor = this._yZoomFactor();
                        break;
                    case "xZoomPosition":
                        this.model.axes[0].zoomPosition = this._xZoomPosition();
                        break;
                    case "yZoomPosition":
                        this.model.axes[1].zoomPosition = this._yZoomPosition();
                        break;
                    case "drilldown":
                        this.model.series = [];
                        this.model.explodeValue = null;
                        $.extend(true, this.model, {}, options[prop]);
                        break;
                    case "datasource":
                        for (var i = 0; i < this.model.series.length; i++) {
                            this.model.series[i].dataSource = null;
                            this.model.series[i].points = null;
                        }
                        $.extend(true, this.model, {}, options[prop]);
                        break;

                    default:
                        $.extend(true, this.model, {}, options[prop]);
                }
            }
            $(this.svgObject).empty();
            this.bindTo();
        }
    });

    /**
	 * Enum for chart crosshairType.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.CrosshairType = {
        /**  set crosshair for chart. */
        Crosshair: 'crosshair',
        /**  set trackBall for chart. */
        TrackBall: 'trackBall'
    };
    /**
	 * Enum for chart valueType.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.ValueType = {
        /**  set valueType for chart to double. */
        Double: 'double',
        /**  set valueType for chart to dateTime. */
        DateTime: 'datetime',
        /**  set valueType for chart to category. */
        Category: 'category',
        /**  set valueType for chart to logarithmic. */
        Logarithmic: 'logarithmic'
    };
    /**
	 * Enum for chart series type.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Type = {
        /**  sets the seriesType of chart to line. */
        Line: 'line',
        /**  sets the seriesType of chart to spline. */
        Spline: 'spline',
        /**  sets the seriesType of chart to column. */
        Column: 'column',
        /**  sets the seriesType of chart to area. */
        Area: 'area',
        /**  sets the seriesType of chart to splinearea. */
        SplineArea: 'splinearea',
        /**  sets the seriesType of chart to stepline. */
        StepLine: 'stepline',
        /**  sets the seriesType of chart to steparea. */
        StepArea: 'steparea',
        /**  sets the seriesType of chart to pie. */
        Pie: 'pie',
        /**  sets the seriesType of chart to hilo. */
        Hilo: 'hilo',
        /**  sets the seriesType of chart to hiloopenclose. */
        HiloOpenClose: 'hiloopenclose',
        /**  sets the seriesType of chart to candle. */
        Candle: 'candle',
        /**  sets the seriesType of chart to bubble. */
        Bubble: 'bubble',
        /**  sets the seriesType of chart to bar. */
        Bar: 'bar',
        /**  sets the seriesType of chart to stackingarea. */
        StackingArea: 'stackingarea',
        /**  sets the seriesType of chart to rangecolumn. */
        RangeColumn: 'rangecolumn',
        /**  sets the seriesType of chart to stackingcolumn. */
        StackingColumn: 'stackingcolumn',
        /**  sets the seriesType of chart to stackingbar. */
        StackingBar: 'stackingbar',
        /**  sets the seriesType of chart to pyramid. */
        Pyramid: 'pyramid',
        /**  sets the seriesType of chart to polar. */
        Polar: 'polar',
        /**  sets the seriesType of chart to radar. */
        Radar: 'radar'

    };
    /**
	 * Enum for chart labelPlacement.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.LabelPlacement = {
        /**  specifies the placement of labels between the ticks. */
        BetweenTicks: "betweenTicks",
        /**  specifies the placement of labels on the ticks. */
        OnTicks: "onTicks"
    };
    /**
    * Enum for chart labelIntersectAction.	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Chart.LabelIntersectAction = {
        /**  No action is made on intersection of labels. */
        None: "none",
        /**  Rotate the labels to 90 degree on intersect. */
        Rotate90: "rotate90",
        /**  Rotate the labels to 45 degree on intersect. */
        Rotate45: "rotate45",
        /**  Wrap the label to multiple lines on intersect. */
        Wrap: "wrap",
        /**  Trim the text and display whole text on mouse over. */
        Trim: "trim",
        /**  Hide the label which intersect. */
        Hide: "hide",
        /**  Labels are placed on another row on intersect. */
        MultipleRows: "multipleRows"
    };
    /**
 * Enum for chart edgeLabelPlacement.	 
 * @enum {string}
 * @global 
 */
    ej.datavisualization.Chart.EdgeLabelPlacement = {
        /**  Places the edge labels in the same position. */
        None: "none",
        /**  Shift the edge labels inside the chart area. */
        Shift: "shift",
        /**  Hide the edge labels which exceeds the chart area boundary. */
        Hide: "hide"
    };
    /**
	 * Enum for chart themes.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Theme = {
        /**  Render chart in azure theme. */
        Azure: 'azure',
        /**  Render chart in flatlight theme. */
        FlatLight: 'flatlight',
        /**  Render chart in azuredark theme. */
        Azuredark: 'azuredark',
        /**  Render chart in lime theme. */
        Lime: 'lime',
        /**  Render chart in limedark theme. */
        LimeDark: 'limedark',
        /**  Render chart in saffron theme. */
        Saffron: 'saffron',
        /**  Render chart in saffrondark theme. */
        SaffronDark: 'saffrondark',
        /**  Render chart in gradientlight theme. */
        GradientLight: 'gradientlight',
        /**  Render chart in gradientdark theme. */
        GradientDark: 'gradientdark'
    };
    /**
	 * Enum for chart style of font.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.FontStyle = {
        /**  Render normal font. */
        Normal: 'normal',
        /**  Render bold font. */
        Bold: 'bold',
        /**  Render italic font. */
        Italic: 'italic'
    };
    /**
	 * Enum for weight of font.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.FontWeight = {
        /**  Render regular font. */
        Regular: 'regular',
        /**  Render lighter font. */
        Lighter: 'lighter'
    };
    /**
	 * Enum for chart orientation.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Orientation = {
        /**  Sets chart orientation to horizontal. */
        Horizontal: 'horizontal',
        /**  Sets chart orientation to vertical. */
        Vertical: 'vertical'
    };
    /**
	 * Enum for chart interval type.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.IntervalType = {
        /**  Sets chart interval type to days. */
        Days: 'days',
        /**  Sets chart interval type to hours. */
        Hours: 'hours',
        /**  Sets chart interval type to seconds. */
        Seconds: 'seconds',
        /**  Sets chart interval type to milliseconds. */
        Milliseconds: 'milliseconds',
        /**  Sets chart interval type to minutes. */
        Minutes: 'minutes',
        /**  Sets chart interval type to months. */
        Months: 'months',
        /**  Sets chart interval type to years. */
        Years: 'years'
    };
    /**
	 * Enum for range padding.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.RangePadding = {
        /**  Sets chart range padding as additional. */
        Additional: 'additional',
        /**  Sets chart range padding as normal. */
        Normal: 'normal',
        /**  Sets chart range padding as none. */
        None: 'none',
        /**  Sets chart range padding as round. */
        Round: 'round'
    };
    /**
	 * Enum for text alignment.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.TextAlignment = {
        /**  Support for changing text alignment to middleTop. */
        MiddleTop: 'middletop',
        /**  Support for changing text alignment to middleCenter. */
        MiddleCenter: 'middlecenter',
        /**  Support for changing text alignment to middleBottom. */
        MiddleBottom: 'middlebottom'
    };
    /**
	 * Enum for label position.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.LabelPosition = {
        /**  Support for changing the labelPosition to inside. */
        Inside: 'inside',
        /**  Support for changing the labelPosition to outside. */
        Outside: 'outside'
    };
    /**
	 * Enum for zIndex.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.ZIndex = {
        /**  Support for changing the zIndex to over. */
        Over: 'over',
        /**  Support for changing the labelPosition to behind. */
        Behind: 'behind'
    };
    /**
	 * Enum for chart unit.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Unit = {
        /**  Specifies the unit in percentage. */
        percentage: 'percentage',
        /**  Specifies the unit in pixel. */
        pixel: 'pixel'
    };
    /**
	 * Enum for chart pyramid mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.PyramidMode = {
        /**  Specifies the mode of the pyramid as linear. */
        Linear: 'linear',
        /**  Specifies the mode of the pyramid as surface. */
        Surface: 'Surface'
    };
    /**
    * Enum for chart drawType mode.	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Chart.DrawType = {
        /**  Specifies the drawType as line. */
        Line: 'line',
        /**  Specifies the drawType as column. */
        Column: 'column',
        /**  Specifies the drawType as area. */
        Area: 'area'
    };
    /**
	 * Enum for chart shape.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Shape = {
        /**  Sets the shape to none. */
        None: 'none',
        /**  Sets the shape to leftarrow. */
        LeftArrow: 'leftarrow',
        /**  Sets the shape to rightarrow. */
        RightArrow: 'rightarrow',
        /**  Sets the shape to circle. */
        Circle: 'circle',
        /**  Sets the shape to cross. */
        Cross: 'cross',
        /**  Sets the shape to horizline. */
        HorizLine: 'horizline',
        /**  Sets the shape to vertline. */
        VertLine: 'vertLine',
        /**  Sets the shape to diamond. */
        Diamond: 'diamond',
        /**  Sets the shape to rectangle. */
        Rectangle: 'rectangle',
        /**  Sets the shape to triangle. */
        Triangle: 'triangle',
        /**  Sets the shape to invertedtriangle. */
        InvertedTriangle: 'invertedtriangle',
        /**  Sets the shape to hexagon. */
        Hexagon: 'hexagon',
        /**  Sets the shape to pentagon. */
        Pentagon: 'pentagon',
        /**  Sets the shape to star. */
        Star: 'star',
        /**  Sets the shape to ellipse. */
        Ellipse: 'ellipse',
        /**  Sets the shape to wedge. */
        Wedge: 'wedge',
        /**  Sets the shape to trapezoid. */
        Trapezoid: 'trapezoid',
        /**  Sets the shape to uparrow. */
        UpArrow: 'uparrow',
        /**  Sets the shape to downarrow. */
        DownArrow: 'downarrow',
        /**  Sets the shape to image. */
        Image: 'image'
    };
    /**
	 * Enum for hilopenclose drawmode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.DrawMode = {
        /**  Specifies the draw mode as both. */
        Both: 'both',
        /**  Specifies the draw mode as open. */
        Open: 'open',
        /**  Specifies the draw mode as close */
        Close: 'close'
    };
    /**
	 * Enum for linecap.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.LineCap = {
        /**  Sets the linecap as butt. */
        Butt: 'butt',
        /**  Sets the linecap as round. */
        Round: 'round',
        /**  Sets the linecap as square. */
        Square: 'square'
    };
    /**
	 * Enum for line join.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.LineJoin = {
        /**  Sets the lineJoin to round. */
        Round: 'round',
        /**  Sets the lineJoin to bevel. */
        Bevel: 'bevel',
        /**  Sets the lineJoin to miter. */
        Miter: 'miter'
    };
    /**
	 * Enum for position.	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Position = {
        /**  Sets the position to top. */
        Top: 'top',
        /**  Sets the position to middle. */
        Middle: 'middle',
        /**  Sets the position to bottom. */
        Bottom: 'bottom'
    };
    /**
	 * Enum for alignment.	 12
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.Chart.Alignment = {
        /**  Sets the lineJoin to center. */
        Center: 'center',
        /**  Sets the lineJoin to near. */
        Near: 'near',
        /**  Sets the lineJoin to far. */
        Far: 'far'
    };
    $.extend(ej.datavisualization.Chart.prototype, ej.ejChart);
})(jQuery, Syncfusion);;