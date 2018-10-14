<template>
  <div class="home">
    <img alt="Colette and Jean logo" src="../assets/jg_seal_300.png">
    <Welcome msg="Colette & Jean" subtitle="November 2, 2018 | San Diego, CA, United States"/>
    <Tables v-bind:tables="tablesData"/>
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
    {
      name: "Pralognan la Vanoise",
      description: `What can be a test for a new relationship? Long-distance travel? Humbly learning a new skill? Building IKEA furniture together? The first two were no sweat on this trip where he learned to ski, she was embarrassed by her level of French, and they both learned how important helmets are. (They had already mastered IKEA furniture together).`,
      tableSizeInInches: 72,
      people: [
        {
          name: "Julie Kent"
        },
        {
          name: "Eric Kent",
          role: WeddingRole.Witness,
          languages: [Language.English],
          homeCountry: HomeCountry.USA
        },
        {
          name: "Marissa Meyer"
        },
        {
          name: "Timon Meyer"
        },
        {
          name: "Belen Legois"
        },
        {
          name: "Thomas Legois"
        },
        {
          name: "Van Hare"
        },
        {
          name: "Catherine Hare"
        },
        {
          name: "Evan Ludwid"
        }
      ]
    },
    {
      name: "Chincoteague Island",
      description: `Eight hours round-trip. Two months into dating. One tiny Toyota Yaris. What could go wrong? Nothing, apparently. They were pretty pleased with that day-trip just for two giant ice cream cones.`,
      tableSizeInInches: 72,
      people: [
        {
          name: "Joseph Grandmaire"
        },
        {
          name: "Mélanie Grandmaire"
        },
        {
          name: "Soline Grandmaire"
        },
        {
          name: "Jonah Grandmaire"
        },
        {
          name: "Paul Grandmaire"
        },
        {
          name: "Gaëlle Grandmaire"
        },
        {
          name: "Mayane Grandmaire"
        },
        {
          name: "Michaël Andrieu"
        },
        {
          name: "Caroline Leverger"
        },
        {
          name: "Christophe Lièvre",
          role: WeddingRole.Groomsman
        },
        {
          name: "Élise Payenneville",
        }
      ]
    },
    {
      name: "Local 16",
      description: `We had the tinder, Local 16 provided the spark. Luckily the beer he dropped on her didn't douse the flame. He walked her home, they kissed at the door, and he missed the last train back to Falls Church, VA.`,
      tableSizeInInches: 60,
      people: [
        {
          name: "Arielle Asman"
        },
        {
          name: "Gabe Asman"
        },
        {
          name: "Emily Averna"
        },
        {
          name: "Melissa Bearden"
        },
        {
          name: "Miriam Coates"
        },
        {
          name: "Evan Doucett"
        },
        {
          name: "Shuvi Sommer "
        },
        {
          name: "Caitlin Summers"
        },
        {
          name: "Jeannie Queneville"
        },
      ]
    },
    {
      name: "Masa 14",
      description: `First real date. He arrived early, she was running late. It was almost a deal breaker for her when he said he didn't like seafood. Except for scallops. And salmon. And shrimp. And crab. And tilapia. And mussels. And one of his favorite dishes is Bouillabaisse...`,
      tableSizeInInches: 40,
      people: [
        {
          name: "Alli Arrigoni",
          role: WeddingRole.Bridesmaid,
        },
        {
          name: "Danny Chen",
        },
        {
          name: "Nina Rabins",
        },
        {
          name: "Erin Bosetti"
        },
        {
          name: "Hannah Asher"
        },
        {
          name: "Zack Cyphers"
        },
        {
          name: "Neerali Patel"
        }
      ]
    }
  ]
}
</script>
