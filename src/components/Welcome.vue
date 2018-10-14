<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ subtitle }}</p>
    <p>
      Click
      <a href="https://www.theknot.com/us/colette-kent-and-jean-grandmaire-nov-2018" target="_blank" rel="noopener">here</a>
       to access our main website.
    </p>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
  @Prop() private msg!: string;
  @Prop() private subtitle!: string;
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
</style>
