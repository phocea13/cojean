<template>
  <div class="about">
    <h1>Map</h1>
    <h3>Wedding Locations</h3>
    <!--The div element for the map -->
    <div id="map"></div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {} from "googlemaps";

@Component
export default class Map extends Vue {
  @Prop()
  private msg!: string;
  @Prop()
  private subtitle!: string;

  created() {}

  mounted() {
    this.initMap();
  }

  initMap() {
    var weddingEventLocations = [
      {
        name: "Scripps Beach",
        position: new google.maps.LatLng(32.863658, -117.25461),
        icon: "https://static.thenounproject.com/png/1739948-200.png"
      },
      {
        name: "Pelican's Cove",
        position: new google.maps.LatLng(32.863423, -117.253572),
        icon: "https://static.thenounproject.com/png/1059290-200.png"
      }
    ];

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: weddingEventLocations[0].position
    });
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({
    //   position: scrippsBeachPosition,
    //   map: map
    // });

    weddingEventLocations.forEach( function(location) {
      var marker = new google.maps.Marker({
        position: location.position,
        title: location.name,
        map: map,
        label: location.name
      });
    })
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}
</style>
