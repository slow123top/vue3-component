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
        <transition>
            <div class="div-root" v-if="open">
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
</style>
  