import Modal from "./BeaModal.vue";

import TsxModal from "./BeaModal";

TsxModal.show = () => {
  return <TsxModal title={"模态框标题"} open={true}></TsxModal>;
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

TsxModal.install = (app: any) => {
  app.component(Modal.name, Modal);
  return app;
};

export default TsxModal;
