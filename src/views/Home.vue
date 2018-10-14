<template>
  <div class="home">
    <img alt="Colette and Jean logo" src="../assets/jg_seal_300.png">
    <HelloWorld msg="Colette & Jean" subtitle="November 2, 2018 | San Diego, CA, United States"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome.vue'; // @ is an alias to /src
import Tables from '@/components/Tables.vue'; // @ is an alias to /src
import {Table, Language, HomeCountry, WeddingRole} from '@/main.ts'

@Component({
  components: {
    Welcome, Tables,
  },
})

export default class Home extends Vue {
  
  public tablesData : Table[] = [
    {
      name: "Wat Chedi",
      description: `At this beautiful temple in the ancient city in the northwest of Thailand, he presented her with a beautiful ring he ordered from, of course, Amazon. She said, "yes." Then forgot if she said, "yes," so she said, "yes" again. Then they went to a very romantic Muy Thai boxing match. (The current ring was still being made in Washington State!)`,
      people: [
        {
          name: "Colette Kent",
          languages:[Language.English],
          role: WeddingRole.Bride,
          homeCountry: HomeCountry.USA
        },
        {
          name: "Jean Grandmaire",
          languages: [Language.French, Language.English],
          role: WeddingRole.Groom,
          homeCountry: HomeCountry.USA
        }
      ]
    },
    {
      name: "Big Meadows Shenandoah",
      description: `REI trip. Check. Backpacks. Check. "Portable" grill and steaks. Check. Two trips from the car because of that damn grill. Check. Overly enthusiastic to show the other how "down" they are to go backcountry camping. Check. First "I Love You"s. Check.`,
      tableSizeInInches: 66,
      people: [
        {
          name: "Beth Kent",
          languages:[Language.English],
          role: WeddingRole.Parent,
          homeCountry: HomeCountry.USA
        },
        {
          name: "Rick Kent",
          languages: [Language.French, Language.English],
          role: WeddingRole.Parent,
          homeCountry: HomeCountry.USA
        },
        {
          name: "Janice Grandmaire",
          languages:[Language.English, Language.French],
          role: WeddingRole.Parent,
          homeCountry: HomeCountry.USA
        },
        {
          name: "Christian Grandmaire",
          languages: [Language.French, Language.English],
          role: WeddingRole.Parent,
          homeCountry: HomeCountry.USA
        },
        {
          name: "Lydie Grandmaire",
          languages: [Language.French, Language.English],
          role: WeddingRole.Witness,
          homeCountry: HomeCountry.France
        },
        {
          name: "Laurent Cuillerier",
          languages: [Language.French, Language.English],
        },
        {
          name: "Léo Cuillerier",
        },
        {
          name: "Baptiste Cuillerier"
        },
        {
          name: "Frank Alton",
          languages: [Language.Spanish, Language.English],
          role: WeddingRole.Officiant,
          homeCountry: HomeCountry.USA,
        },
        {
          name: "Saul Renteria",
        }

      ]
    },
  ]
}
</script>
