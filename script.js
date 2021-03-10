require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/LayerList",
      "dojo/domReady!"], function(WebScene, SceneView, Camera, Home, LayerList) {

    
      //var map = new Map
        //basemap: "streets",
        //ground: "world-elevation"
     //;//*
      var scene = new WebScene({
        portalItem:{
         id:"c9a9df15fc674e9681d63417a192d38e"
        }
      });
      
var camera = new Camera({
        position: [
          138, // lon
          35, // lat
           400000// elevation in meters
        ],
        tilt:20,
        heading: 0
      });
var camera2 = new Camera({
        position: {
          x: 40.48,
          y: -3.145,
          z: 5000000
        },
        tilt: 20,
        heading: 0
      });
  var camera3 = new Camera({
        position: {
          x: -152.18,
          y: 46.238,
          z: 5000000
        },
        tilt: 20,
        heading:0
      });
  var homecam = new Camera({
        position: [
          135.20,
          23.20,
          3000000// elevation in meters
        ],
        tilt:27,
        heading: 0
      });
  
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: homecam,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [ALK,JAP, ETH].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    
    
    JAP.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
ETH.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
ALK.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
});
 const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function(event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
        view.ui.add(layerList, "bottom-right");
  });
