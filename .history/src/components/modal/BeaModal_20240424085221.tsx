import {defineComponent} from 'vue';
export default defineComponent({
    name:'bea-modal',
    setup(){
        return ()=>(
            <Teleport to="body">
    <Transition>
      <div ref="beamodalRef" class="beamodal" v-if="open" @click="closeMask($event)">
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
        )
    }
})