<template>
    <Teleport to="body">
      <div id="modal-container" class="" v-if="modelValue">
        <div>{{ title }}</div>
      </div>
      <slot name="content"></slot>
      <button @click="close">关闭</button>
    </Teleport>
  </template>
  <script setup lang="ts">
  import { ref, computed, defineProps, defineEmits } from 'vue';
  
  defineProps({
    title: String,
    modelValue: Boolean,
  });
  const emits = defineEmits(['update:modelValue', 'afterClose']);
  const close = (e) => {
    emits('update:modelValue', false);
    emits('afterClose', e);
  }
  </script>
    
  <style scoped>
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
    