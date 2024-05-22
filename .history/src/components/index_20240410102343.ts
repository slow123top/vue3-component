import BeaModal from "./modal/index";
export { BeaModal };

const components = [BeaModal];

const BeaUI = {
  install(app: any) {
    components.forEach((cmp) => {
        app.user(cmp);
    });
  },
};

export default BeaUI;
