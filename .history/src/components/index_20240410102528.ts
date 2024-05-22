import BeaModal from "./modal/index";
export { BeaModal };

const installComponents = [BeaModal];

const BeaUI = {
  install(app: any) {
    installComponents.forEach((cmp) => {
      app.use(cmp);
    });
  },
};

export default BeaUI;
