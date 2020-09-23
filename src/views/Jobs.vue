<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card-title><b>Filtros de búsqueda:</b></v-card-title>
        <form>
            <v-text-field
              v-model="location"
              :error-messages="nameErrors"
              :counter="10"
              label="Ubicación del cargo"
              required
            ></v-text-field>
            <v-text-field
              v-model="searchKeyword"
              :error-messages="nameErrors"
              :counter="10"
              label="Descripción del cargo"
              required
            ></v-text-field>
            <v-radio-group
              v-model="jobType"
            >
            <v-radio label="Full-Time" value="full_time=true"></v-radio>
            <v-radio label="Part-Time" value="part_time=true"></v-radio>
            </v-radio-group>
            <v-btn color="deep-purple darken-4" dark class="mr-4" @click="getPetition()">Filtrar</v-btn>
        </form>
      </v-col>
      <v-col v-for="job in jobs" :key="job.id" cols="3">
        <v-card v-if="jobs.length > 0" class="mx-auto" max-width="400px">
          <v-img class="align-center" height="180px" :src="job.company_logo">
          </v-img>
          <v-card-title class="pb-2">{{job.title}}</v-card-title>
          <v-card-text class="text--primary">
            <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-clock</v-icon><b>Jornada</b> {{job.type}}</p>
            <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-map-marker</v-icon><b>Lugar</b> {{job.location}}</p>
            <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-account-star</v-icon><b>Empresa</b> {{job.company}}</p>
            <div><v-icon color="deep-purple darken-4" class="pr-2">mdi-border-color</v-icon><b>Descripción</b> {{job.description.substring(0, 100)}}...</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple darken-4" :href="job.url" text>Ver empleo <v-icon color="deep-purple darken-4">mdi-arrow-right-thick</v-icon></v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else>
          <v-card-text class="text--primary">
            <p>LOLOLOLOLOLO</p>
          </v-card-text>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      location: '',
      searchKeyword: '',
      jobType: false,
      nameErrors: 'LOL',
      checkboxErrors: 'LOL'
    }
  },
  created() {
    this.getJobs()
  },
  computed: {
    ...mapState(['jobs'])
  },
  methods: {
  ...mapActions(['getJobs', 'getFilteredJobs']),
  getPetition(){
    this.searchKeyword = this.searchKeyword.replace(/\s/g, '+')
    this.location = this.location.replace(/\s/g, '+')
    let petition = 'description=' + this.searchKeyword + '&location=' + this.location
    if(this.jobType){
      petition = petition + '&' + this.jobType
    }
    console.log(petition)
    this.getFilteredJobs(petition)
    this.cleanForm()
  },
  cleanForm(){
    this.location = ''
    this.searchKeyword = ''
  }
  }   
  
}
</script>

<style>

</style>