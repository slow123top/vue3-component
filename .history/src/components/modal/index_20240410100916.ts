import Modal from "./BeaModal.vue";
export { Modal };

const BeaModal = {
  install(App: any) {
    App.component(Modal.name, Modal);
  },
};

export default BeaUI;
