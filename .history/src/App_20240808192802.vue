<template>
    <header>
        <div class="wrapper">
            <nav>
            </nav>
        </div>
    </header>
    <!-- <bea-modal title="模态框标题" v-model="open">
    </bea-modal> -->
    <button @click.stop="click($event)">测试</button>
    <teleport to='body'>
        <transition
                            enter-from-class="f-enter-from"
                            enter-active-class="f-enter-active"
                            enter-to-class="f-enter-to"
                            leave-from-class="f-leave-from"
                            leave-active-class="f-leave-active"
                            leave-to-class=".f-enter-from"
        >
            <div class="div-root" v-show="open">
                <div>元素1</div>
                <div>元素2</div>
                <div>元素3</div>
                <div>元素4</div>
            </div>
        </transition>
    </teleport>
    <!-- <RouterView /> -->
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const click = (e: MouseEvent) => {
    open.value = !open.value;
}
</script>
<script>
</script>
<style scoped>
    .div-root {
        position: absolute;
        border: 1px solid red;
        top: 100px;
    }
    .a-enter-active,
.a-leave-active {
  transition: opacity 0.5s ease;
}

.a-enter-from,
.a-leave-to {
  opacity: 0;
}
    @keyframes farrisTransitionEnter {
    0% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0
    }
    100% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1
    }
  }
  
  
  @keyframes farrisTransitionLeave {
    0%{
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1
    }
    100% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0
    }
  }
  
  .f-enter-from {
    transform: scale(0);
    opacity: 0;
    transform-origin:0% 0%;
  }
  
  :where(.f-enter-active,.f-enter-to){
    animation: farrisTransitionEnter;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  
  /* .f-leave-from {
  
  } */
  
  :where(.f-leave-active,.f-leave-from) {
    animation:farrisTransitionLeave;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
</style>
  