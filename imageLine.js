/**
 * Implements a plot for showing a d3 chart containing the images of the plot.
 * Created by Mathew Grabau on 19/03/2015.
 */



/**
 * Constructor/generator for the charts that display the binned lines.
 *
 * @param data  Data array for storing the charts out of there.
 * @param dataRequester Function for asking for data.
 */
function imageLine(data, dataRequester) {
    //{{{ VARIABLES

    var displayThisChart = true;
    var reRenderTheNextTime = true;
    var waitingForServer = false;

    var binData = imageData();


    // This is the only images chart type of its kind.
    var sensorType = "images";
    var sensorNumber = 0;

    // the height of the chart by itself (not including axes or time context)
    var height = 150 - margin.top - margin.bottom;

    // the width of the chart, including margins
    var containerWidth = document.getElementById("chartContainer").offsetWidth;
    var width = containerWidth - margin.left - margin.right;

    var whichLevelToRender = 0;
    var showTimeContext = false;
    var isMultiChart = false;

    var easingMethod = 'cubic-in-out';

    var clipPath;
    var xAxisContainer;
    var xAxisMinorContainer;
    var xAxis;
    var xAxisMinor;
    var yAxisContainer;
    var yAxis;
    var xScale;
    var xScaleRange;
    var yScale;
    var yScaleRange;
    var timeContextContainer;
    var yAxisLockContainer;

    var chart; // the svg element
    var pathArea;
    var pathPath;

    var selection; // Save the selection so that my.update() works.

    var reRenderTheNextTime = true;
    var waitingForServer = false;

    var renderRange = [];
    var showing_range = [];
    var ninetyPercentRange = [];


    var whichLinesToRender = [];
    var interpolationMethod = [];

    // Where all the rendered d0s are stored.
    var renderedD0s = {
        rawData         : "", // d0 for the current level
        rawDataRanges   : [], // the rendered range for the current level
        average         : "",
        averageRanges   : [],
        maxes           : "",
        maxesRanges     : [],
        mins            : "",
        minsRanges      : [],
        q1              : "",
        q1Ranges        : [],
        q2              : "",
        q2Ranges        : [],
        q3              : "",
        q3Ranges        : [],
        quartiles       : "",
        quartilesRanges : [],
        missing         : "",
        missingRanges   : [],
        missingBox      : "",
        missingBoxRanges: [],
        loadingBox      : "",
        loadingBoxRanges: [],
    };

    var calls = 0;

    var renderEverything = function () {
        //{{{ CONTAINER AND CLIPPING

        chart = d3.select(this); //Since we're using a .call(), "this" is the svg element.

        console.log("renderEverything");

        if (reRenderTheNextTime){
            selection.attr("width", width);

            chart.attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);
        }

        // CONTAINER AND CLIPPING }}}

        //{{{ AREAS



        //make and render the area
        if (!(didWeRenderAnything || reRenderTheNextTime)){
            /*transformElements(quartileObjectForKeyFanciness,
                pathArea,
                sensorType+sensorNumber,
                xScale,
                renderedD0s,
                binData,
                margin,
                renderScale,
                "posArea");*/
        } else {
            /*
            drawElements(quartileObjectForKeyFanciness,
                pathArea,
                sensorType+sensorNumber,
                xScale,
                renderedD0s,
                binData,
                margin,
                renderScale,
                "posArea");
                */

            //var sel = container.selectAll("."+sensorType+sensorNumber);

            // Make the thing work better

            /* The clicking in the rect does not work unless the images are appended here. */
            selection.style({
                position: 'relative',
                'z-index': 100
            });

            var hostRect = selection.append('g').attr('id', sensorType+sensorNumber);

            console.log(++calls);

            var rect = hostRect.append('rect').on('click', function() {
                alert("clicked the rect");
            });

            rect.style({
              stroke: 'black',
                'stroke-width': '2px',
                fill: 'white'
            });

            rect.attr('width', width);
            rect.attr('height', height);
            rect.attr('x', margin.left);
            rect.attr('y', margin.top);

            hostRect.append('text').text('Images').style({
                fill: 'red',
                stroke: 'red',
                'font-family': 'sans-serif',
                'font-size': '20px',
                'z-index': 101
            }).attr({
                x: rect.attr('x'),
                y: rect.attr('height') / 2
            });

            // enter
            //var rect = sel.enter().append("rect");

            //console.log(rect);
        }

        console.log("Just need to render the button for selecting the images");


        // AREAS }}}

        /*
        //{{{ TIME CONTEXT
        if (!timeContextContainer) { timeContextContainer = chart.append("g"); }

        // Draw Time Context
        var timeContextSelection = timeContextContainer.selectAll(".sensor_time_context")
            .data([getTimeContextString(xScale, showTimeContext)]);

        var titleContainer = timeContextContainer.selectAll(".sensor_title")
            .data([capitalize(sensorType) + " " + sensorNumber]);

        // enter
        timeContextSelection.enter().append("text")
            .attr("class", "sensor_time_context")
            .on("click", function(d) {
                console.log(arguments);
                console.log("A click has happened");
            });
        titleContainer.enter().append("text")
            .attr("class", "sensor_title");

        // update
        timeContextSelection.text(getSelf);
        if(reRenderTheNextTime){
            timeContextSelection
                .attr("x", margin.left -5)
                .attr("y", shmotg.TIME_CONTEXT_VERTICAL_EACH);
        }

        titleContainer.text(getSelf);
        if(reRenderTheNextTime){
            titleContainer
                .attr("x", margin.left + (width))
                .attr("y", shmotg.TIME_CONTEXT_VERTICAL_EACH);
        }

        // exit
        timeContextSelection.exit().remove();
        titleContainer.exit().remove();
        // TIME CONTEXT }}}

        */

    };

    //// MY //// (runs whenever something changes)

    var my = function (sel) {

        //{{{ SELECTION AND SCALES

        selection = sel; // Saving the selection so that my.update() works.

        width = containerWidth - margin.left - margin.right;

        // The xScale is needed so we can tell how far along we are with respect this.
        if (!xScale) {
            xScale = d3.scale.linear().domain([0,100]);
        }

        if (!xScaleRange) {
            xScaleRange = [0,0];
        }

        xScaleRange[1] = width;
        xScale.range(xScaleRange);


        // SELECTION AND SCALES }}}

        //{{{ GENERATE d0s. (generate the lines paths)

        var xdiff = xScale.domain()[1] - xScale.domain()[0];

        // figure out how much to render:
        renderRange[0] = xScale.domain()[0] - xdiff;
        renderRange[1] = xScale.domain()[1] + xdiff;

        didWeRenderAnything = false;
        showing_range.length = 0;

        /*
        for (var k in renderThese) {
            var key = renderThese[k];

            // These two variables are here to remove the slight amount
            // of un-rendered space which shows up on the sides just
            // before the new data is generated. It provides a buffer zone.
            var tenDiff = (renderedD0s[key + "Ranges"][1] -
                renderedD0s[key + "Ranges"][0]) * 0.1;
            ninetyPercentRange[0] = renderedD0s[key + "Ranges"][0] + tenDiff;
            ninetyPercentRange[1] = renderedD0s[key + "Ranges"][1] - tenDiff;

            //if we are not within the range OR reRenderTheNextTime
            if (!isWithinRange(xScale.domain(), ninetyPercentRange) || reRenderTheNextTime) {
                //render the new stuff
                didWeRenderAnything = true;

                if (showing_range.length === 0) {
                    // calculate new y scale before we render any d0s
                    // TODO: make this a function of binnedData.js, and abstract it in binnedChart.js so that it can be called from outside
                    // - this will give the option of all charts having the same y axis

                    var binSize = binData.binSize(whichLevelToRender);
                    showing_range = d3.extent(binData.getDateRange(renderThese, whichLevelToRender, [renderRange[0]-binSize, renderRange[1]+binSize], renderThese), getVal);
                }

                if (!waitingForServer) {
                    if (isMultiChart) {
                        yScale.domain([0, 1]);
                    } else {
                        yScale.domain([ showing_range[0] ? showing_range[0] : yScale.domain()[0],
                            showing_range[1] ? showing_range[1] : yScale.domain()[1] ]);
                    }
                }

                renderedD0s[key + "Ranges"] = [renderRange[0], renderRange[1]];
            } // if we should render anything
        } // for each key

        */

        if (didWeRenderAnything && !waitingForServer) {
            // If we don't have every piece of data in this range, ask for it all.
            if (!binData.haveDataInRange(renderRange, whichLevelToRender)) {
                var req = {
                    sensorNumber: sensorNumber,
                    sensorType: sensorType,
                    ms_start: renderRange[0],
                    ms_end: renderRange[1],
                    bin_level: whichLevelToRender,
                };

                waitingForServer = true;
                if (dataRequester !== undefined && !dataRequester(req)) {
                    // if it's too soon, or it failed
                    console.log("too soon or it failed");
                    waitingForServer = false;
                }
            }
        }


        // GENERATE ALL d0s. (generate the lines paths) }}}


        //// SELECTION.EACH ////

        selection.each(renderEverything);

        reRenderTheNextTime = false;
    };




    //{{{ Getters and Setters

    my.milliSecondsPerSample = function (value) {
        if (!arguments.length) return milliSecondsPerSample;
        milliSecondsPerSample = value;
        return my;
    };

    my.containerWidth = function (value) {
        if (!arguments.length) return containerWidth;
        if (containerWidth !== value) my.reRenderTheNextTime(true);
        containerWidth = value;
        return my;
    };

    my.height = function (value) {
        if (!arguments.length) return (height + margin.bottom + margin.top);
        if (height !== value) my.reRenderTheNextTime(true);
        height = value;
        return my;
    };

    /**
     * Inidicate if the chart is supposed to be displayed or not.
     * @param value
     * @returns {*}
     */
    my.displayThisChart = function (value) {
        if (!arguments.length) return displayThisChart;
        displayThisChart = value;
        return my;
    };


    /**
     * Compatiblity function (because the plots inteface calls this).
     * @returns The instance of imageData that is being used to store/track the
     * images on the line.
     */
    my.binData = function () {
        // Note: to make it easier to just use the line-drawing, etc I have just places the
        // following values into it.
        return binData;
    };


    my.uniqueID = function (value) {
        if (!arguments.length) return sensorType+sensorNumber;
        return my;
    };

    /**
     * Gets or sets the sensor type for the chart.
     * @param value
     * @returns {*}
     */
    my.sensorType = function (value) {
        if (!arguments.length) return sensorType;
        sensorType = value;
        return my;
    };

    /**
     * Gets or sets the sensor number for the chart.
     * @param value
     * @returns The instance it was called for.
     */
    my.sensorNumber = function (value) {
        if (!arguments.length) return sensorNumber;
        sensorNumber = value;
        return my;
    };

    /**
     * Implements the API demanded to match the binnedLineChart,
     * does nothing for this imageLine implementation.
     * @param value
     */
    my.addMultiChartChild = function(value) {
        return;
    };

    /**
     * Implements the API demanded to match the binnedLineChart,
     * does nothing for this imageLine implementation.
     * @param my
     * @param multTrueMinusFalse
     */
    my.makeIntoMultiChart = function(my, multTrueMinusFalse) {
        // This does nothing here (there is no such thing

        my.reRenderTheNextTime(true).update();
    };



    /**
     * The fucntion that receives data from the server when it comes in.
     * @param received
     */
    my.incomingRequestedData = function (received) {
        var req = received.req;
        if (my.uniqueID() === "" + received.sensorType + received.sensorNumber) {
            my.addDataToBinData(req, received.bin_level).reRenderTheNextTime(true).update();
        }
    };

    my.removeAllDOMElements = function() {
        // remove all DOM elements so that they are recreated
        // during the next run of my().

        xAxisContainer = false;
        xAxisMinorContainer = false;
        yAxisContainer = false;
        timeContextContainer = false;
        clipPath = false;
        pathArea = false;
        pathPath = false;
        grad = false;
    };

    my.addDataToBinData = function (datas, level) {
        // Add data to binData IN THE CORRECT ORDER

        waitingForServer = false;
        var filteredDatas = [];

        if (level === 0) {
            filteredDatas = _.filter(datas, isntNaNVal);
        } else {
            filteredDatas = datas;
        }

        if (filteredDatas.length === 0) {
            console.log("NO DATA");
        } else if (level === 0) {
            binData.addRawData(filteredDatas);
        } else {
            binData.addBinnedData(filteredDatas, level);
        }

        return my;
    };

    my.bd = function () {
        return binData;
    };


    my.update = function(reRender) {
        // Basically it just calls again into the function making things happen that way.
        my(selection);
    };

    my.showTimeContext = function(show) {
        if (!arguments.length) {
            return showTimeContext;
        }

        showTimeContext = show;

        // TODO figure out if this has any actual relevance for this particular application (I suspect it doesn't)

        return my;
    }

    // Return the object that is attempting to be brought here.
    return my;
}