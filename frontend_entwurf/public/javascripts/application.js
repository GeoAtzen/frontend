var lang = document.getElementById("long");
var breit = document.getElementById("lat");
let upload = document.getElementById("upload")
let textarea = document.getElementById('textarea');



// erstellen einer leaflet Karte mit Europa als Startpunkt und mit OSM als Basiskarte
var map = L.map("anwendungsmap").setView([51.96, 7.6], 12);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//drawcontrol variables
var drawnItems = new L.FeatureGroup()
var drawControl = new L.Control.Draw({
  draw: {
    polygon: false,
    marker: false,
    circle: false,
    polyline: false,
    circlemarker: false
  },
  edit: {
    featureGroup: drawnItems
  }
})

// adding drawControl
map.addLayer(drawnItems)
map.addControl(drawControl)


// adding the drawn rectangle to map via event
map.on(L.Draw.Event.CREATED, (e) => {
  var type = e.layerType;
  var layer = e.layer;
  rectangle = layer.toGeoJSON().geometry.coordinates;
  drawnItems.addLayer(layer);
  map.addLayer(layer);

map.on("draw:deleted", function (e) {
  map.removeControl(drawControl);
  map.addControl(drawControl);
});
})

function modusFuerFarbenblinde() {
  console.log("es funktioniert")
  var element = document.body;
  element.classList.toggle("alternative-colors-mode");
}
