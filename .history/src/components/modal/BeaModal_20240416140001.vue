<template>
  <Teleport to="body">
    <div class="base-modal">
      <div id="modal-container" class="" v-if="modelValue">
        <div>{{ title }}</div>
        <slot :text="content"></slot>
        <button @click="close">关闭</button>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
export default {
  name: 'bea-modal'
}
</script>
<script setup lang="ts" name="beaa-modal">
import { ref, computed, defineProps, defineEmits } from 'vue';
// 定义属性
defineProps({
  title: String,
  modelValue: Boolean,
});

const content = ref({
  a: 22
})

// 发射事件
const emits = defineEmits(['update:modelValue', 'afterClose']);
const close = (e) => {
  emits('update:modelValue', false);
  emits('afterClose', e);
}
</script>
<style scoped lang="less">
.base-modal {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  bottom: 0;
  inset-inline-start: 0;
  overflow: auto;
  outline: 0;
}

#modal-container {
  min-height: 600px;
  min-width: 800px;
  background-color: chocolate;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
}
</style>
    