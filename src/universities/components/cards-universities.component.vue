<script>
import { University } from '@/universities/model/university.entity.js'
import { ApiFakeService } from '@/universities/service/api-fake.service.js'

export default {
  name: 'cards-universities',
  data(){
    return{
      universities: [],
      apiFakeService: new ApiFakeService()

    }
  },
  async created(){
    this.apiFakeService.getAll().then((response) => {
      for(let i = 0; i < response.length; i++){
        const {name, domains, web_pages} = response[i];
        this.universities.push(new University(name, domains, web_pages));
      }

    })

  }
}
</script>

<template>

  <div class="container-cards" v-for="(university,index) in universities" :key="index">
    <div class="container-card">
      <pv-card>
        <template #title> {{$t('university')}}: {{index + 1}}</template>
        <template #content>
          <div class="content-card">
            <p :aria-label="`${$t('university')} ${$t('name')}`"> {{$t('name')}}: {{university.name}}</p>
            <p :aria-label="`${$t('university')} ${$t('domain')}`"> {{$t('domain')}}: {{university.domains}}</p>
            <p :aria-label="`${$t('university')} ${$t('page')}`"> {{$t('page')}}: {{university.web_pages}}</p>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.container-card{
  background-color:lightgreen;
  color:black;
  padding: 1rem;
  border-radius: 1rem;
  width: 65%;
}

.container-cards{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 2rem;
}

</style>
