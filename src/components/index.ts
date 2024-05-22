import BeaModal from "./modal/index.tsx";
export { BeaModal };

const installComponents = [BeaModal];

// const BeaUI = {
const install = (app: any) => {
  installComponents.forEach((cmp) => {
    app.use(cmp);
  });
};
// };

export default {
  install,
};
