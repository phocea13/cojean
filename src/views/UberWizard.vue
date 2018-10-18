<template>
  <div>
    <h1>Claim Uber Code</h1>
    <p> Enter the following promo code under Promotions in the Payments tab of your Uber app to claim your ride promotion: <em>eqw5jyq</em> </p>
    <v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>

    <template v-if="step === 1">
        <ul>
            <li>Open you <span class="android">Android</span> or <span class="ios">iOS</span> <em>Uber</em> app</li>
            <li>Select the hamburger icon in the top left corner</li>
            <li>Select "Payment"</li>
        </ul>
        <img class="screenshot android" src="../assets/android1.png"/>
        <img class="screenshot ios" src="../assets/iOS1.jpg"/>
    </template>
    <template v-if="step === 2">
        <ul>
            <li>Scroll down if necessary</li>
            <li>Select "Add Promo Code"</li>
        </ul>
        <img class="screenshot android" src="../assets/android2.png"/>
        <img class="screenshot ios" src="../assets/iOS2.jpg"/>
        
    </template>
    <template v-if="step === 3">
        <ul>
            <li>Enter promo code: <em>eqw5jyq</em></li>
        </ul>
        <img class="screenshot android" src="../assets/android3.png"/>
        <img class="screenshot ios" src="../assets/iOS3.jpg"/>
    </template>

    <!-- Stepper Controls -->
    <div class="buttonContainer">
        <button class="button" @click="$refs.stepper.previous()">Previous</button>
        <button class="button" @click="$refs.stepper.next()">Next</button>
        <button class="button" @click="$refs.stepper.reset()">Reset</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VStepper } from "vue-stepper-component";

@Component({
  components: {
    VStepper,
  },
})
export default class UberWiz extends Vue {
  private steps: number = 3;
  private step: number = 1;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screenshot {
  width: 200px;
  margin: 20px;
}

li {
  display: block;
}

.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.buttonContainer {
    margin: 15px 0;
}

.android {
    border-color: #4CAF50;
    border-style: solid;
    border-width: 5px;
}

.ios {
    border-color: rgb(76, 119, 175);
    border-style: solid;
    border-width: 5px;
}

em {
    font-weight: bold;
    font-size: 1.2em;
    font-style: normal;
}
</style>