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
    <div :class="'div-root '" v-if="open" >
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
        /* transform: translate3d(0,100px,0); */
        /* animation: fromTo;
        animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
        animation-duration: .2s;
        animation-fill-mode: both;
        animation-play-state: paused; */
        /* top: 100px; */
    }
    .a-enter-active,
    .a-leave-active {
        transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    }
    .a-enter-active {
        transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    }
    .a-enter-to,.a-leave-from{
        /* transform: translate3d(0,100px,0);
        opacity: 1; */
        transform: scaleY(1);
        transform-origin: 100% 100%;
    }

.a-enter-from,
.a-leave-to {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    /* transform: translate3d(0,0,0); */
    /* opacity: 0; */
}
    @keyframes farrisTransitionEnter {
    0% {
        transform: scaleY(0);
        transform-origin: 0% 0%;
        opacity: 0
    }
    100% {
        transform: scaleY(1);
        transform-origin: 100% 100%;
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
        transform: scaleY(0);
        transform-origin: 0% 0%;
        opacity: 0
    }
  }


  
  .f-enter-from {
    transform: scale(0);
    opacity: 0;
    transform-origin:0% 0%;
  }
  
  .f-enter-active,.f-enter-to {
    animation: farrisTransitionEnter;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  
  /* .f-leave-from {
  
  } */
  
  .f-leave-active,.f-leave-from {
    animation:farrisTransitionLeave;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }

  .bounce-enter-active {
  animation: bounce-in 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}
.bounce-leave-active {
  animation: bounce-in 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform-origin: 0% 0%;
  }
  50% {
    transform: scale(0.5);
    transform-origin: 100% 50%;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 100%;
  }
}
</style>
  