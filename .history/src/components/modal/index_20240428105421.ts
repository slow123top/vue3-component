import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";

TsxModal.show = () => {

};

TsxModal.error = () => {};

TsxModal.info = () => {};
export { Modal };

const BeaModal = {
  install(App: any) {
    App.component(Modal.name, Modal);
  },
};

export default BeaModal;
