var plots = []; //an array of all plots

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function() {
  if (navigator.userAgent.match(/android/i)) {
    setTimeout("redraw()", 500); //Only wait for Android
  } else {
    redraw();
  }
}, false);

var zoom_svg = d3.select("#zoom_svg");
var zoom_rect = d3.select("#zoom_rect");

var redraw = function () {
  plots.forEach(function (plt) {
    plt.offsetWidth(document.getElementById("charts").offsetWidth).update();
  });
  zoom_svg.attr("width", document.getElementById("charts").offsetWidth)
          .attr("height", document.getElementById("charts").offsetHeight);
  zoom_rect.attr("width", document.getElementById("charts").offsetWidth)
           .attr("height", document.getElementById("charts").offsetHeight);
}

var changeLines = function () {
  plots.forEach(function (plt) {
    plt.setSelectedLines().update();
  });
}

document.getElementById("controls").addEventListener ("change", changeLines, false);

var zoomout = function () {
  plots.forEach(function (plt) {
    plt.zoomout().update();
  });
}

var zoomin = function () {
  plots.forEach(function (plt) {
    plt.zoomin().update();
  });
}


var socket = io.connect('http://shm1.eng.umanitoba.ca:8080/');

socket.on('news', function (data) {
  var json = JSON.parse(data);
  socket.emit('ack', "Message received!");

  var w = json.length;

  var plot10 = binnedLineChart();

  var pl10 = d3.select("#charts").append("g").datum(_.map(json, function (d) { return -d.ESGgirder1; })).call(plot10);

  var plot11 = binnedLineChart();

  var pl11 = d3.select("#charts").append("g").datum(_.map(json,function (d) { return Math.random() * 5 + -d.ESGgirder1; })).call(plot11);

  var plot12 = binnedLineChart();

  var pl12 = d3.select("#charts").append("g").datum(_.map(json,function (d) { return Math.random() * 5 + -d.ESGgirder1; })).call(plot12);

  var plot13 = binnedLineChart();

  var pl13 = d3.select("#charts").append("g").datum(_.map(json,function (d) { return Math.random() * 5 + -d.ESGgirder1; })).call(plot13);

  // TODO: make the margin_top values dynamic
  plot10.offsetWidth(document.getElementById("charts").offsetWidth).height(75).margin_top(10).update();
  plot11.offsetWidth(document.getElementById("charts").offsetWidth).height(75).margin_top(120*1 + 10).update();
  plot12.offsetWidth(document.getElementById("charts").offsetWidth).height(75).margin_top(120*2 + 10).update();
  plot13.offsetWidth(document.getElementById("charts").offsetWidth).height(75).margin_top(120*3 + 10).update();
  plots.push(plot10);
  plots.push(plot11);
  plots.push(plot12);
  plots.push(plot13);
  redraw();

  d3.select("#charts").attr("height", 120*4); //TODO: make this dynamic

  zoom_svg.attr("width", document.getElementById("charts").offsetWidth)
          .attr("height", document.getElementById("charts").offsetHeight);
  zoom_rect.attr("stroke", "#000")
    .attr("width", document.getElementById("charts").offsetWidth)
    .attr("height", document.getElementById("charts").offsetHeight);
  var zoom = d3.behavior.zoom()
    .on("zoom", zoom_all);

  zoom_rect.attr("fill", "rgba(0,0,0,0)")
    .call(zoom);

  var x = plot12.xScale();
  var y = plot12.yScale();

  zoom.x(x);
  zoom.y(y);

  function zoom_all() {
    plots.forEach(function (plt) {
      plt.xScale(x).xAxisScale(x).update();
    });
  }

  //chart.call(d3.behavior.zoom().x(xScale).y(yScale).scaleExtent([0.125, 8]).on("zoom", my.zoom));
  //
  //var redraw = function () {
  //  plots.forEach(function (plt) {
  //    plt.offsetWidth(document.getElementById("charts").offsetWidth).update();
  //  });
  //}
});