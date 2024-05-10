<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "MapComponent",
  mounted() {
    var bounds = new L.LatLngBounds(
      new L.LatLng(-258, -114),
      new L.LatLng(0, 284)
    );

    var map = L.map("map", {
      crs: L.CRS.Simple,
      attributionControl: false,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
    }).setView([0, 0], 2);

    L.tileLayer("https://raw.githubusercontent.com/virtualyoyo/RoverArchive/main/src/assets/map/{z}/{x}/{y}.png", {
      tileSize: 256,
      errorTileUrl: "https://raw.githubusercontent.com/virtualyoyo/RoverArchive/main/src/assets/map/blank.png",
      attribution: "&copy; David",
      minZoom: 2,
      maxZoom: 6,
      noWrap: true,
      bounds: bounds,
    }).addTo(map);
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
