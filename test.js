$( document ).ready(function() {

  var viewer = OpenSeadragon({
      id: "seadragon-container",
      prefixUrl: "openseadragon/images/",
      tileSources: "sample/00094701.dzi",
      overlays: [{
            id: 'example-overlay',
            x: 0.1, 
            y: 0.1, 
            width: 0.2, 
            height: 0.25,
            className: 'highlight'
        }],

  });


  var scaledOverlay = false;
  $("#toggle-scaled-overlay").click(function() {
      if (scaledOverlay) {
          viewer.removeOverlay("scaled-overlay");
      } else {
          var elt = document.createElement("div");
          elt.id = "scaled-overlay";
          elt.className = "scaled-highlight";
          viewer.addOverlay({
              element: elt,
              location: new OpenSeadragon.Rect(0.12, 0.12, 0.1, 0.1)
          });
      }
      scaledOverlay = !scaledOverlay;
  });


  var pointOverlay = false;
  $("#toggle-point-overlay").click(function() {
      if (pointOverlay) {
          viewer.removeOverlay("point-overlay");
      } else {
          var elt = document.createElement("div");
          elt.id = "point-overlay";
          elt.className = "point-highlight";
          viewer.addOverlay({
              element: elt,
              location: new OpenSeadragon.Point(0.24, 0.24)
          });
      }
      pointOverlay = !pointOverlay;
  });


});
