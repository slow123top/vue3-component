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
     
      return () => (
        <TsxModal title={"模态框"}></TsxModal>
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
