<template>
  <Datepicker :value="value" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from 'vue3-datepicker';

export default defineComponent({
  components: { Datepicker },
  props: {
    value: { type: Date, required: false, default: new Date() },
  },
});
</script>

<style lang="scss" scoped>
@import '../../../../node_modules/vue3-datepicker/dist/vue3-datepicker.css';
</style>
