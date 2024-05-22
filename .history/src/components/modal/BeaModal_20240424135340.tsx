import {defineComponent} from 'vue';
export default defineComponent({
    name:'bea-modal',
    setup(){
        return ()=>(
            <Teleport to="body">
    <Transition>
      <div ref="beamodalRef" class="beamodal" v-if={open} onClick={closeMask($event)}>
        <div id="modal-container" class="beamodal__container">
          <div class="beamodal__title">
            <span v-if="slots.title" class="beamodal__title--template">
              <slot name="title">
              </slot>
            </span>
            <span class="beamodal__title--simple" v-else>
              {{ title }}
            </span>
            <span class="beamodal__icon--close bea-iconfont bea-icon-close-small" @click="close($event)"></span>
          </div>
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