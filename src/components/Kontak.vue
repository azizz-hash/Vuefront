<template>
  <v-layout no-padding no-margin>
    <v-container class="grey lighten-5">
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <h1 class="display-2 font-weight-thin mb-4">KONTAK</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-row>
      </v-parallax>
      <v-row
        class="mb-6"
        no-gutters
      >
        <v-col md="12">
          <v-card class="pa-6">
            <div>
              <h1 
              class="display-3 font-weight-bold"
              align="center"
              justify="center">
                DROP YOUR MASSEGE
              </h1>
              <h2
              class="display-1"
              align="center"
              justify="center"> 
                All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community.
              </h2>
            </div>
            <v-form>
              <v-container>
                <v-col md="12">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        outlined
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="NAME*"
                        placeholder="Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>

                      <v-text-field
                        outlined
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-MAIL*"
                        placeholder="Placeholder"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"     
                      ></v-text-field>

                      <v-text-field
                        outlined
                        v-model="phone"
                        :error-messages="phoneErrors"
                        :counter="12"
                        label="PHONE"
                        placeholder="Phone Number"
                        @input="$v.phone.$touch()"
                        @blur="$v.phone.$touch()"  
                      ></v-text-field>

                      <v-text-field
                        outlined
                        v-model="company"
                        :error-messages="companyErrors"
                        label="COMPANY NAME"
                        placeholder="Company Name"
                        @input="$v.company.$touch()"
                        @blur="$v.company.$touch()" 
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="subject"
                        :error-messages="subjectErrors"
                        label="SUBJECT*"
                        placeholder="Subject"
                        required
                        @input="$v.subject.$touch()"
                        @blur="$v.subject.$touch()" 
                      ></v-text-field>

                      <v-textarea
                      outlined
                      v-model="message"
                      :error-messages="messageErrors"
                      name="input-7-4"
                      label="MESSAGE*"
                      required
                      height="227"
                      @input="$v.message.$touch()"
                      @blur="$v.message.$touch()" 
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-col>

              </v-container>
              <v-col md="6" offset-md="9">
                <v-btn class="mr-4" right @click="submit">submit</v-btn>
                <v-btn @click="clear" right >clear</v-btn>
              </v-col>
            </v-form><br><br>
            <v-col>
              <v-row>   
                <div>
                  <h2
                  class="display-1"
                  align="center"
                  justify="center"> 
                    All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community.
                  </h2>
                </div>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      phone:  {Number, maxLength:maxLength(12)},
      company: {},
      subject: { required },
      message: { required }
    },

    data: () => ({
      name: '',
      email: '',
      phone:'',
      company:'',
      subject:'',
      message:'',
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.maxLength && errors.push('Phine number must be at most 12 characters long')
        !this.$v.phone.Number && errors.push('Must be Number')
        return errors
      },
      companyErrors () {
        const errors = []
        if (!this.$v.company.$dirty) return errors
        return errors
      },
      subjectErrors () {
        const errors = []
        if (!this.$v.subject.$dirty) return errors
        !this.$v.subject.required && errors.push('Subject is required')
        return errors
      },
      messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.required && errors.push('Message is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.phone = ''
        this.company = ''
        this.subject = ''
        this.message = ''
      },
    },
  }
</script>