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
            <div v-if="open">

            </div>
        </transition>
    </teleport>
    <!-- <RouterView /> -->
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const click = (e: MouseEvent) => {
    open.value = !open.valu;
}
</script>
<script>
</script>
<style scoped></style>
  