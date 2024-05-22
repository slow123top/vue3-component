import {defineComponent,ref,defineProps,useSlots,defineEmits} from 'vue';
export default defineComponent({
    name:'bea-modal',
    setup(){

      const beamodalRef = ref(null);
      // 定义属性
      const props = defineProps({
        title: String,
        open: Boolean,
        enableMask: {
          type: Boolean,
          default: true
        }
      });

      const slots = useSlots();

      // 发射事件
      const emits = defineEmits(['update:open', 'afterClose']);
      const close = (e: MouseEvent) => {
        e.stopPropagation();
        emits('update:open', false);
        emits('afterClose', e);
      }

      // 允许点击遮罩关闭modal
      const closeMask = (e: MouseEvent) => {
        if (props.enableMask) {
          if (beamodalRef.value === e.target) {
            close(e);
          }
        }
        return;
      } 
        return ()=>(
          <div>{}</div>
        )
    }
})

{/* <Teleport to="body">
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
            </Teleport> */}