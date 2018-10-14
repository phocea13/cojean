<template>
  <div>
    <h2>Tables</h2>
    <div v-for="table in tables">
      <h3>{{ table.name }}</h3>
      <p> {{ table.description}}</p>
      <ul>
        <li v-for="peep in table.people">{{ peep.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Table } from "@/main.ts";

@Component
export default class Tables extends Vue {
  @Prop()
  private tables!: Table[];

  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: block;
  margin: 10px;
}

p {
  font-size: 12px;
}

li {
  font-family: 'Nunito Sans', sans-serif;
}
</style>