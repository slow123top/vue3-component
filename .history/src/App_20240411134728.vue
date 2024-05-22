<template>
    <header>
        <div class="wrapper">
            <nav>
            </nav>
        </div>
    </header>
    <bea-modal title="模态框标题" v-model="open">

    </bea-modal>
    <button @click.stop="click($event)">测试</button>
    <!-- <RouterView /> -->
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const open = ref(false);

const click = (e: MouseEvent) => {
    open.value = true;
}
</script>
<script>
</script>
<style scoped></style>
  