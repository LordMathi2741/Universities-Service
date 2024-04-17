<script setup>
import TheToolbarContent from '@/public/components/the-toolbar-content.component.vue'
import TheFooterContent from '@/public/components/the-footer-content.component.vue'
import CardsUniversities from '@/universities/components/cards-universities.component.vue'
</script>

<template>
 <div>
   <the-toolbar-content/>
   <cards-universities/>
   <the-footer-content/>
 </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  gap:2rem;
}
</style>
