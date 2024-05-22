import { defineComponent, ref, defineProps, useSlots, defineEmits,Teleport, Transition } from "vue";
import type { SetupContext } from "vue";
import "./BeaModal.less";
type ModalProp = {
  type: String;
  message: String;
};

export default defineComponent({
  name: "bea-func-modal",
  // 定义属性
  props: {
    title: String,
    open: Boolean,
    enableMask: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context: SetupContext) {
    const beamodalRef = ref(null);

    const body: HTMLElement = document.body;
    const slots = useSlots();

    // 发射事件
    const emits = context.emit;
    const close = (e: MouseEvent) => {
      e.stopPropagation();
      emits("update:open", false);
      emits("afterClose", e);
    };

    // 允许点击遮罩关闭modal
    const closeMask = (e: MouseEvent) => {
      if (props.enableMask) {
        if (beamodalRef.value === e.target) {
          close(e);
        }
      }
      return;
    };
    return () => (
      <Teleport to="body">
        <Transition name="bea">
          {props.open && (
            <div
              ref={beamodalRef}
              class="beamodal"
              onClick={(e: MouseEvent) => closeMask(e)}
            >
              <div id="modal-container" class="beamodal__container">
                <div class="beamodal__title">
                  {context.slots.title ? (
                    <span class="beamodal__title--template">
                      {context.slots.title()}
                    </span>
                  ) : (
                    <span class="beamodal__title--simple">{props.title}</span>
                  )}
                  <span
                    class="beamodal__icon--close bea-iconfont bea-icon-close-small"
                    onClick={(e: MouseEvent) => close(e)}
                  ></span>
                </div>
                {context.slots.content?<div class="beamodal__content">{context.slots.content()}</div>:""}
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    );
  },
});

{
  /* <Teleport to="body">
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
            </Teleport> */
}
