import Modal from "./BeaModal.vue";
export { Modal };

const BeaModal = {
  install(App: any) {
    App.component(cmp.name, cmp);
  },
};

export default BeaUI;
