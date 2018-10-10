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

@Component
export default class Map extends Vue {
  @Prop()
  private msg!: string;
  @Prop()
  private subtitle!: string;

  created() {
   
    
  }

  mounted() {
    this.initMap();
  }

  initMap(){
    var uluru = { lat: -25.344, lng: 131.036 };
    var scrippsBeach = { lat: 32.863658, lng: -117.254610 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: scrippsBeach
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: scrippsBeach, map: map });
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
