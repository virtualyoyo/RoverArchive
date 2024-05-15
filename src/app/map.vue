<template>
  <div id="map" style="width: 100%; height: 100%;"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rastercoords";


export default {
  mounted() {
    var minZoom = 2;

    var img = [
      6401, // original width of image (here from `example/karta.jpg`)
      6401, // original height of image
    ];

    var map = L.map("map", {
      crs: L.CRS.Simple,
      minZoom: minZoom,
      attributionControl: false,
    });

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img);
    // set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
    map.setMaxZoom(rc.zoomLevel());
    // all coordinates need to be unprojected using the `unproject` method
    // set the view in the lower right edge of the image
    map.setView(rc.unproject([img[0] - 3000, img[1] - 2150]), 5);

    // the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
    L.tileLayer(
      "https://raw.githubusercontent.com/virtualyoyo/RoverArchive/main/src/assets/map/{z}/{x}/{y}.png",
      {
        noWrap: true,
        bounds: rc.getMaxBounds(),
        maxNativeZoom: rc.zoomLevel(),
      }
    ).addTo(map);
  },
};
</script>