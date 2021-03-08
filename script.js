require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/layers/ElevationLayer",
      "dojo/domReady!"], function(WebScene, SceneView, Camera, Home, ElevationLayer) {

    
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
          35, // lon
          138, // lat
           1000// elevation in meters
        ],
        tilt:18,
        heading: 0
      });
var camera2 = new Camera({
        position: {
          x: 4.8,
          y: 74,
          z: 1000
        },
        tilt: 22,
        heading: 0
      });
  var camera3 = new Camera({
        position: {
          x: 64,
          y: 150,
          z: 2800
        },
        tilt: 50,
        heading: 270
      });
  var homecam = new Camera({
        position: [
          35,
          138,
           5500// elevation in meters
        ],
        tilt:0,
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
    
    [COL,JAP, AK].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    
    
    JAP.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
AK.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
COL.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
});
 
  });
