import { ref, defineComponent,render } from "vue";
import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";

TsxModal.show = () => {
  const open = ref(true);
  return <TsxModal title={"模态框"} v-model:open={open}></TsxModal>;
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
  return App;
};

export default TsxModal;
