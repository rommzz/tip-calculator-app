<template>
  <v-container class="mb">
    <v-row class="mt-12">
      <v-col  class="mb-4">
        <v-sheet>
          <v-row class="pa-2">
            <v-col cols="12" sm="6" md="6">
              <div>
                <div>Bill</div>
                <v-text-field
                  style="font"
                  type="number"
                  flat
                  dense
                  background-color="#f4fafa"
                  hide-details
                  solo
                  single-line>
                  <template v-slot:prepend-inner>
                    <v-icon>
                      mdi-currency-usd
                    </v-icon>
                  </template>
                </v-text-field>
              </div>
              <div class="mt-7">
                <div class="mb-3">
                  select tip
                </div>
                <v-btn 
                  v-for="(item, index) in tipOptions" 
                  class="white--text mx-2 px-4"
                  color="verydarkcyan"
                  :key="index" 
                  :value="item"
                  @click="tipChange(item)"
                  >
                  {{item}}%
                </v-btn>
              </div>
              <div class="mt-7">
                <div class="mb-3">
                  number of people
                </div>
                <v-text-field
                  style="font"
                  type="number"
                  flat
                  dense
                  background-color="#f4fafa"
                  hide-details
                  solo
                  single-line>
                  <template v-slot:prepend-inner>
                    <v-icon>
                      mdi-account
                    </v-icon>
                  </template>
                </v-text-field>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-sheet class="pa-4 rounded-lg" color="verydarkcyan">
                <div class="d-flex justify-space-between align-center ">
                  <div>
                    <div class="white--text">
                      Tip Amount
                    </div>
                    <div class="grey--text text--lighten-1">
                      / person
                    </div>
                  </div>
                  <div class="text-h3 strongcyan--text">
                    0
                  </div>
                </div>
                <div class="d-flex justify-space-between align-center mt-3">
                  <div>
                    <div class="white--text">
                      Tip Amount
                    </div>
                    <div class="grey--text text--lighten-1">
                      / person
                    </div>
                  </div>
                  <div class="text-h3 strongcyan--text">
                    0
                  </div>
                </div>
                <v-btn
                  class="mt-12 verydarkcyan--text"
                  color="lightgrayishcyan"
                  block>
                  reset
                </v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      tipOptions: [5, 10, 15, 25, 50],
      tip: null
    }),
    methods: {
      tipChange(tip){
        this.tip = tip
        console.log(this.tip);
      }
    }
  }
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
