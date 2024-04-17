
<template>
  <div class="card" >
    <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; display:flex; justify-content:space-between;">
      <template #start>
        {{$t('title')}}
      </template>
      <template #end>
        <div style=" display: flex; gap:0.5rem;">
          <pv-button label="EN" :aria-label="`${$t('switchLanguage')} ${$t('english')}`" @click="switchLanguage('en')"/>
          <pv-button label="ES" :aria-label="`${$t('switchLanguage')} ${$t('spanish')}`" @click="switchLanguage('es')"/>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script>
export default {
  name: 'the-toolbar-content',
  data() {
    return {
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ]
    };
  },
  methods:{
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    }

  }

};
</script>

<style scoped>
.card {
  background-color: rebeccapurple;
  color: white;
  padding: 10px;
  border-radius:15px;
}
</style>