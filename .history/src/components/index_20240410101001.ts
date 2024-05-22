import BeaModal, { Modal } from "./modal";
// export { Modal };

const components = [BeaModal];

const BeaUI = {
  install(App: any) {
    components.forEach((cmp) => {
      App.component(cmp.name, cmp);
    });
  },
};

export default BeaUI;
