<template>
  <div :id="id" :name="name">
    <DateField v-model="date" />
    <input v-model="time" type="time" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import { format } from 'date-fns';
import DateField from '@/components/molecules/DateField/index.vue';

export default defineComponent({
  components: {
    DateField,
  },
  model: { event: 'input' },
  props: {
    id: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: Object as PropType<Date>,
      required: true,
    },
    onChange: {
      // eslint-disable-next-line no-unused-vars
      type: Function as PropType<(value: Date) => void>,
      required: true,
    },
  },
  emits: ['input'],
  setup(props) {
    const date = ref<Date>(props.value);
    const time = ref<string>(format(props.value, 'HH:mm'));
    watch([date, time], () => {
      const formatDate = format(date.value, 'yyyy-MM-dd');
      props.onChange(new Date(`${formatDate} ${time.value}:00`));
    });
    return { date, time };
  },
});
</script>
