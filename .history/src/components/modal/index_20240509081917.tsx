import { ref, defineComponent, render, createVNode } from "vue";
import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";
TsxModal.instance = null;
TsxModal.show = (props:any) => {
  let open = ref(true);
  TsxModal.instance = createVNode(
    <TsxModal
      title={"模态框"}
      v-model:open={open}
      onAfterClose={(e) => TsxModal.close()}
    ></TsxModal>
  );
  return render(TsxModal.instance, document.body);
};
TsxModal.close = () => {
  TsxModal.instance = null;
  render(null, document.body);
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
