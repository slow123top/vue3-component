<template>
  <Teleport to="body">
    <Transition>
      <div class="base-modal" v-if="modelValue">
        <div id="modal-container" class="base-modal-container">
          <div>{{ title }}</div>
          <slot :text="content"></slot>
          <div @click="close">
            <svg t="1713401476068" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6457" width="200" height="200">
            <path
              d="M512 557.226667l158.378667 158.421333 45.269333-45.226667L557.269333 512l158.378667-158.378667-45.226667-45.226666L512 466.688 353.621333 308.352l-45.269333 45.226667L466.773333 512l-158.378666 158.378667 45.226666 45.269333L512 557.269333z"
              fill="#1E1E1E" p-id="6458"></path>
          </svg>
          </div>
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

  .base-modal-container {
    min-height: 600px;
    min-width: 800px;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
}</style>
    