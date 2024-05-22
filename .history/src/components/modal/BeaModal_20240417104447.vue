<template>
  <Teleport to="body">
    <Transition>
      <div class="base-modal" v-if="modelValue">
        <div id="modal-container" class="">
          <div>{{ title }}</div>
          <slot :text="content"></slot>
          <button @click="close">关闭</button>
        </div>
      </div>
    </Transition>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.base-modal {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  bottom: 0;
  inset-inline-start: 0;
  overflow: auto;
  outline: 0;
  background-color: rgba(44, 62, 80, 0.4);
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
    