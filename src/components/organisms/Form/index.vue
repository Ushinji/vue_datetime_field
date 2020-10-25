<template>
  <div class="auto-uplink-edit-form">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">開始日</label>
        <div class="control">
          <DateField id="startedAt" v-model="startedAt" name="startedAt" />
        </div>
      </div>
      <div class="field">
        <label class="label">終了日時</label>
        <div class="control">
          <DateTimeField
            id="finishedAt"
            :value="finishedAt"
            name="finishedAt"
            :on-change="onChangefinishedAt"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-link is-light"
            type="button"
            @click="onCancel"
          >
            キャンセル
          </button>
        </div>
        <div class="control">
          <button class="button is-link">送信する</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import DateField from '@/components/molecules/DateField/index.vue';
import DateTimeField from '@/components/molecules/DateTimeField/index.vue';

export default defineComponent({
  components: {
    DateField,
    DateTimeField,
  },
  props: {
    onSubmit: {
      // eslint-disable-next-line no-unused-vars
      type: Function as PropType<(startedAt: Date, finishedAt: Date) => void>,
      required: true,
    },
    onCancel: {
      // eslint-disable-next-line no-unused-vars
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const startedAt = ref(new Date());
    const finishedAt = ref(new Date());
    const onChangefinishedAt = (value: Date) => {
      finishedAt.value = value;
    };
    const handleSubmit = async () => {
      await props.onSubmit(startedAt.value, finishedAt.value);
    };
    return { startedAt, finishedAt, onChangefinishedAt, handleSubmit };
  },
});
</script>
