<script>
export default {
  name: 'the-footer-content',
}
</script>

<template>
  <footer>
    <div :aria-label="$t('copyright')">
      {{$t('copyright')}}
    </div>
    <div :aria-label="$t('credits', {code:'U202212721'})">
      {{$t('credits', {code:'U202212721'})}}
    </div>

  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  background-color: rebeccapurple;
  color: white;
  padding: 19px;
  border-radius:15px;

}
</style>