<template>
  <div>
    <h1>Claim Uber Code</h1>
    <p> Enter the following promo code under Promotions in the Payments tab of your Uber app to claim your ride promotion: <em>{{uberCode}}</em> [<a @click.stop.prevent="copyUberCode">copy code</a>] </p>
    <v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>

    <input type="hidden" id="uber-code" :value="uberCode">
    <template v-if="step === 1">
        <ul>
            <li>Open your <span class="android-color">Android</span> or <span class="ios-color">iOS </span> <em>Uber</em> app</li>
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
            <li>Enter or paste promo code: <em>eqw5jyq</em> [<a @click.stop.prevent="copyUberCode">copy code</a>]</li>
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
    VStepper
  }
})
export default class UberWiz extends Vue {
  private steps: number = 3;
  private step: number = 1;
  private uberCode: string = "eqw5jyq";

  copyUberCode() {
    let testingCodeToCopy = document.querySelector("#uber-code");
    if (testingCodeToCopy != null) {
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();
    }
    try {
      var successful = document.execCommand("copy");
    } catch (err) {
      alert("Oops, unable to copy");
    }

    /* unselect the range */
    if (testingCodeToCopy != null) {
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    }
  }
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
  background-color: #4caf50;
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
  border-color: #4caf50;
  border-style: solid;
  border-width: 5px;
}

.android-color {
  color: #4caf50;
}

.ios {
  border-color: rgb(76, 119, 175);
  border-style: solid;
  border-width: 5px;
}

.ios-color {
  color: rgb(76, 119, 175);
}

em {
  font-weight: bold;
  font-size: 1.2em;
  font-style: normal;
}

a {
  text-decoration: underline;
  font-size: 1.2em;
}
</style>