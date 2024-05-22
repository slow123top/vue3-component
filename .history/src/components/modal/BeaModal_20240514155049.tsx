import {
  defineComponent,
  ref,
  Teleport,
  Transition,
} from "vue";
import type { SetupContext } from "vue";
import "./BeaModal.less";
type ModalProp = {
  type?: String;
  message: String;
  open?: Boolean;
  container?: HTMLElement;
  enableMask?: Boolean;
};

export default defineComponent({
  name: "bea-func-modal",
  // 定义属性
  props: {
    container: {
      default: document.body,
    },
    title: String,
    open: Boolean,
    okText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    enableMask: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots, emit }) {
    const beamodalRef = ref(null);

    const body: HTMLElement = document.body;

    // 发射事件
    const close = (e: MouseEvent) => {
      e.stopPropagation();
      emit("update:open", false);
      emit("afterClose", e);
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

    const clickOk = (e: MouseEvent) => {
      close(e);
    };

    const clickCancel = (e: MouseEvent) => {
      emit("afterOk");
    };
    return () => (
      <Teleport to={props.container}>
        <Transition name="bea">
          {props.open && (
            <div
              ref={beamodalRef}
              class="beamodal"
              onClick={(e: MouseEvent) => closeMask(e)}
            >
              <div id="modal-container" class="beamodal__container">
                <div class="beamodal__title">
                  {slots.title ? (
                    <span class="beamodal__title--template">
                      {slots.title()}
                    </span>
                  ) : (
                    <span class="beamodal__title--simple">{props.title}</span>
                  )}
                  <span
                    class="beamodal__icon--close bea-iconfont bea-icon-close-small"
                    onClick={(e: MouseEvent) => close(e)}
                  ></span>
                </div>
                {slots.content && (
                  <div class="beamodal__content">{slots.content()}</div>
                )}
                {!slots.footer && (
                  <div class="beamodal__footer--button">
                    <button
                      class="button--cancel"
                      onClick={(e: MouseEvent) => clickCancel(e)}
                    >
                      {props.cancelText}
                    </button>
                    <button
                      class="button--ok"
                      onClick={(e: MouseEvent) => clickOk(e)}
                    >
                      {props.okText}
                    </button>
                  </div>
                )}
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
