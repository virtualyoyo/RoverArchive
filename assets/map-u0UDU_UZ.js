import{_ as n,ah as t,o as s,a2 as m}from"./index-BoXnhhVc.js";const p={name:"MapComponent",mounted(){var r=2,a=[6401,6401],o=t.map("map",{crs:t.CRS.Simple,minZoom:r,attributionControl:!1}),e=new t.RasterCoords(o,a);o.setMaxZoom(e.zoomLevel()),o.setView(e.unproject([a[0]-2900,a[1]]),2),t.tileLayer("https://raw.githubusercontent.com/virtualyoyo/RoverArchive/main/src/assets/map/{z}/{x}/{y}.png",{noWrap:!0,bounds:e.getMaxBounds(),maxNativeZoom:e.zoomLevel()}).addTo(o)}},c={id:"map"};function i(r,a,o,e,d,u){return s(),m("div",c)}const v=n(p,[["render",i]]);export{v as default};
