<template>
  <div class="auto-uplink-edit-form">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">開始日</label>
        <div class="control">
          <DateField id="startedAt" v-model="startedAt" name="startedAt" />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link is-light">キャンセル</button>
        </div>
        <div class="control">
          <button class="button is-link">送信する</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DateField from '@/components/molecules/DateField/index.vue';

export default defineComponent({
  components: {
    DateField,
  },
  props: {
    onSubmit: { type: Function, required: true },
    onCansel: { type: Function, required: true },
  },
  setup(props) {
    const startedAt = ref(new Date());
    const handleSubmit = async () => {
      console.log(startedAt.value);
      await props.onSubmit();
    };
    return { startedAt, handleSubmit };
  },
});
</script>
