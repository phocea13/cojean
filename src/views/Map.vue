<template>
  <div class="about">
    <h1>Map</h1>
    <h3>Wedding Locations</h3>
    <p>Zoom out to see after party location.</p>
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
    let weddingEventLocations = [
      {
        name: "Scripps Beach",
        position: new google.maps.LatLng(32.863658, -117.25461),
        icon: {
          url: require("../assets/Bonfire_30x30.png"),
          anchor: new google.maps.Point(15, 15),
          labelOrigin: new google.maps.Point(15, -10),
        }
      },
      {
        name: "Pelicans Cove",
        position: new google.maps.LatLng(32.863423, -117.253572),
        icon: {
          url: require("../assets/Croissant_30x30.png"),
          anchor: new google.maps.Point(15, 0),
          labelOrigin: new google.maps.Point(15, 40),
        }
      },
      {
        name: "Scripps Seaside Forum",
        position: new google.maps.LatLng(32.864459, -117.254116),
        icon: {
          url: require("../assets/Rings_30x30.png"),
          anchor: new google.maps.Point(15, 0),
          labelOrigin: new google.maps.Point(15, -10),
        }
      },
      {
        name: "Beaumont's",
        position: new google.maps.LatLng(32.815275, -117.270532),
        icon: {
          url: require("../assets/Celebrate_30x30.png"),
          anchor: new google.maps.Point(15, 0),
          labelOrigin: new google.maps.Point(15, -10),
        }
      }
    ];

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: weddingEventLocations[0].position,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#523735",
            },
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9b2a6",
            },
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#dcd2be",
            },
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ae9e90"
            },
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ]
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#93817c",
            },
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a5b076",
            },
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#447530",
            },
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#fdfcf8",
            },
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f8c967",
            },
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#e9bc62",
            },
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#e98d58",
            },
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#db8555",
            },
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#806b63",
            },
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8f7d77",
            },
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#b9d3c2",
            },
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#92998d",
            },
          ]
        }
      ]
    });

    weddingEventLocations.forEach(function(location) {
      const marker = new google.maps.Marker({
        position: location.position,
        title: location.name,
        map,
        label: location.name,
        icon: location.icon,
      });
    });
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
  height: 500px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}
</style>
