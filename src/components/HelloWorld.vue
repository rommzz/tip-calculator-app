<template>
  <v-container class="mb">
    <v-row class="mt-12">
      <v-col class="col-10 offset-1 mb-4">
        <v-sheet class="rounded-lg">
          <v-row class="pa-5 px-7">
            <v-col cols="12" sm="6" md="6" ref="bills">
              <div>
                <div>Bill</div>
                <v-text-field
									class="number font-weight-bold right-input"
									color="blue"
                  style="font"
                  type="number"
									placeholder="0"
									v-model="bills"
                  flat
                  dense
                  solo
                  background-color="#f4fafa"
                  hide-details
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
                  Select Tip %
                </div>
								<v-row>
									<v-col cols="4" v-for="(item, index) in tipOptions" :key="index" >
										<v-hover v-slot="{ hover }">
											<v-btn  
												block
												:ripple="false"
												:class="`${((tip == item) || hover) ? 'verydarkcyan--text' : 'white--text'} font-weight-bold col-4 px-2`"
												:color="(hover) ? 'hovers' : ((tip == item)) ? 'strongcyan' : 'verydarkcyan'"
												@click="tipChange(item)"
												>
												{{item}}%
											</v-btn>
										</v-hover>
									</v-col>
									<v-col>
										<v-text-field
											class="number font-weight-bold right-input"
											v-model="custom"
											style="font"
											type="number"
											placeholder="Custom"
											@input="(tip = null)"
											flat
											dense
											background-color="#f4fafa"
											hide-details
											solo
											single-line>
										</v-text-field>
									</v-col>
								</v-row>
              </div>
              <div class="mt-7">
                <div class="mb-3">
                  Number of People
                </div>
                <v-text-field
									v-model="people"
									class="number right-input font-weight-bold"
                  style="font"
                  type="number"
									placeholder="0"
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
            <v-col cols="12" sm="6" md="6" class="d-flex">
              <v-sheet class="pa-4 rounded-lg flex d-flex flex-column" color="verydarkcyan">
								<div class="mb-6">
									<div class="d-flex justify-space-between align-center ">
										<div>
											<div class="white--text">
												Tip Amount
											</div>
											<div class="text-subtitle-2 grey--text text--lighten-1">
												/ person
											</div>
										</div>
										<div class="font-weight-bold text-h4 strongcyan--text">
											{{ tipAmount() }}
										</div>
									</div>
									<div class="d-flex justify-space-between align-center mt-3">
										<div>
											<div class="white--text">
												Total
											</div>
											<div class="text-subtitle-2 grey--text text--lighten-1">
												/ person
											</div>
										</div>
										<div class="font-weight-bold text-h4 strongcyan--text">
											{{ total() }}
										</div>
									</div>
								</div>
								<div class="mt-auto">
									<v-hover v-slot="{ hover }">
										<v-btn
											class=" font-weight-bold verydarkcyan--text"
											:color="(hover) ? 'hovers' : 'strongcyan' "
											block>
											reset
										</v-btn>
									</v-hover>
								</div>
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
			bills: null,
      tip: null,
			custom: null,
			people: null,
    }),
    methods: {
      tipChange(tip){
				this.custom = null 
        this.tip = (tip == this.tip) ? null : tip
      },
			tipAmount()
			{
				return '$0.00'
			},
			total()
			{
				return '$0.00'
			}
    },
		created() {
			// console.log(height);
		}
  }
</script>

<style scoped>
/* .input-color >>> input {

} */
.right-input >>> input {
	text-align: right;
}
/* Chrome, Safari, Edge, Opera */
.number >>> input[type="number"]::-webkit-outer-spin-button,
.number >>> input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.number:focus-within {
	border: 2px solid #26c0ab !important;	
}
.number {
	border: 2px solid white !important;	
}
.number >>> .v-text-field__slot input {
	color: #00494d !important;	
}
/* Firefox */
.number >>> input[type="number"] {
	-moz-appearance: textfield;
}
</style>
