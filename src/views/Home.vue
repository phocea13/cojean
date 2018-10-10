<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/jg_seal_300.png">
    <HelloWorld msg="Colette & Jean" subtitle="November 2, 2018 | San Diego, CA, United States"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
