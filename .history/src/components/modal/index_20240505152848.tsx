import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";

TsxModal.show = (open:Boolean) => {
return (<TsxModal title={"模态框标题"} v-model:open={open}></TsxModal>)
};

TsxModal.error = () => {};

TsxModal.info = () => {};
export { Modal };

const BeaModal = {
  install(App: any) {
    App.component(Modal.name, Modal);
    App.component(TsxModal.name,TsxModal);
  },
};

export default BeaModal;
