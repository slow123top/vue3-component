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
                    
        name="a"
        >
            <div :class="'div-root '" v-show="open" >
                <div>元素1</div>
                <div>元素2</div>
                <div>元素3</div>
                <div>元素4</div>
            </div>
        </transition>
    </teleport>
    <button>测试动画</button>
    <div :class="'div-root '" v-show="open" >
                <div>元素1</div>
                <div>元素2</div>
                <div>元素3</div>
                <div>元素4</div>
            </div>
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
    .div-height {
        height:auto;
    }
    .div-root {
        position: absolute;
        border: 1px solid red;
        transform: translate3d(0,100px,0);
        /* top: 100px; */
    }
    .a-enter-active,
.a-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.a-enter-active {
    transition: all 0.3s ease-out;
}
.a-enter-to,.a-leave-from{
    transform: translate3d(0,100px,0);
    opacity: 1;
}

.a-enter-from,
.a-leave-to {
    transform: translate3d(0,0,0);
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
  