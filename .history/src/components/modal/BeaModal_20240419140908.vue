<template>
  <Teleport to="body">
    <Transition>
      <div class="beamodal" v-if="open">
        <div id="modal-container" class="beamodal__container">
          <!-- 模态框标题 -->
          <div class="beamodal__title">
            <span v-if="slots.title" class="beamodal__title--template">
              <slot name="title">
              </slot>
            </span>
            <!-- 标题 -->
            <span class="beamodal__title--simple" v-else>
              {{ title }}
            </span>
            <!-- 关闭按钮 -->
            <span class="beamodal__icon--close bea-iconfont bea-icon-close-small" @click="close($event)"></span>
          </div>
          <!-- 模态框内容 -->
          <div class="beamodal__content">
            <slot name="content"></slot>
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
<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, useSlots } from 'vue';
// 定义属性
defineProps({
  title: String,
  open: Boolean,
});

const slots = useSlots();

// 发射事件
const emits = defineEmits(['update:open', 'afterClose']);
const close = (e: MouseEvent) => {
  e.stopPropagation();
  emits('update:open', false);
  emits('afterClose', e);
}
</script>
<style scoped lang="less">
@import url('../../bea-iconfont.css');

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

  .beamodal__container {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 30%;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 5px;

    .beamodal__title {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
  }
}
</style>
    