<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Date Time Field Sample Form</h1>
      <Form :on-submit="onSubmit" :on-cansel="onCancel" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '@/components/organisms/Form/index.vue';

export default defineComponent({
  components: {
    Form,
  },
  setup() {
    const onSubmit = (startedAt: Date, finishedAt: Date) => {
      console.log('===submit===');
      console.log(startedAt);
      console.log(finishedAt);
    };
    const onCancel = () => {
      console.log('===cancel===');
    };
    return { onSubmit, onCancel };
  },
});
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
