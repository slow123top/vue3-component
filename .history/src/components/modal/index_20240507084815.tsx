import { ref, defineComponent,render,createVNode } from "vue";
import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";
TsxModal.instace = null;
TsxModal.show = () => {
  let open = ref(true);
  TsxModal.instace = createVNode(<TsxModal title={"模态框"} v-model:open={open}></TsxModal>);
  return render(,document.body);
};
TsxModal.close = ()=>{
  render()
}

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