<template>
  <v-container fluid>
    <v-row align="center" justify="center" wrap>
      <v-flex md8>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Cap-Shape/Bentuk Tudung
          </v-stepper-step>

          <v-stepper-content step="1">
            <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card> -->
            <v-list>
              <v-list-item-group v-model="model">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-img width="70px" :src="item.avatar"></v-img>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4">Select an ad format and name ad unit</v-stepper-step>
          
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 5" step="5">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="5">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 6" step="6">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="6">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 7" step="7">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="7">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 8">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 8" step="8">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="8">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 9">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 9" step="9">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="9">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 10">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 10" step="10">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="10">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 11">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 11" step="11">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="11">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 12">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 12" step="12">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="12">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 13">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 13" step="13">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="13">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 14">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 14" step="14">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="14">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 15">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 15" step="15">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="15">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 16">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 16" step="16">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="16">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 17">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 17" step="17">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="17">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 18">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 18" step="18">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="18">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 19">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 19" step="19">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="19">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 20">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 20" step="20">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="20">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 21">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 21" step="21">Select an ad format and name ad unit</v-stepper-step>

          <v-stepper-content step="21">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 22">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 22" step="22">Select an ad format and name ad unit</v-stepper-step>
          
          <v-stepper-content step="22">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 23">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="23">View setup instructions</v-stepper-step>
          
          <v-stepper-content step="23">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e6: 0,
    items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-star',
          text: 'Star',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-send',
          text: 'Send',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtext: 'Secondary line text Lorem ipsum dolor sit amet,'
        },
      ],
      model: 1
  }),
};
</script>
