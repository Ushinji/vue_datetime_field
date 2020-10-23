<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Hello World</h1>
      <Icon>alarm</Icon>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './components/atoms/Icon/index.vue';

export default defineComponent({
  components: {
    Icon,
  },
});
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
