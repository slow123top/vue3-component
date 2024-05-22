import {ref,defineComponent} from 'vue';
import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";

TsxModal.show = () => {
  const open = ref(true);
  return defineComponent({
    name: "bea-func-modal-confirm",
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
                  <div class="beamodal__content">{context.slots.content()}</div>
                </div>
              </div>
            )}
          </Transition>
        </Teleport>
      );
    },
  });
};

TsxModal.error = () => {};

TsxModal.info = () => {};
export { Modal };

const BeaModal = {
  install(App: any) {
    App.component(Modal.name, Modal);
    App.component(TsxModal.name, TsxModal);
  },
};

TsxModal.install = (App: any) => {
  App.component(TsxModal.name, TsxModal);
};

export default TsxModal;
