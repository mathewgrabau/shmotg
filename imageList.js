/**
 * Implements the user being shown a list of the images for the current plot.
 * Created by Mathew Grabau on 19/03/2015.
 */



var imageList = {};

imageList.dialog = d3.select("#images_dialog");

imageList.isActive = false;

imageList.toggle = function() {

    if (imageList.isActive) {
        // Open it to the document width.
        imageList.dialog.style("display", "none");
    } else {
        //document.getElementById("images_dialog").style.x = document.body.offsetWidth / 2;
        //imageList.dialog.style("x", document.body.offsetWidth / 2);
        imageList.dialog.style("display", "block");
        imageList.dialog.style("width", (document.body.offsetWidth / 2) + "px");
        imageList.dialog.style("x", (document.body.offsetWidth / 4) + "px");
        //imageList.dialog.style("display", "block").style("width", document.offsetWidth);

        //imageList.dialog.attr("width",).height(plotHeightDefault);
    }

    imageList.isActive = !imageList.isActive;
};


window.imageList = imageList;
