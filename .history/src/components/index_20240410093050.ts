import BeaModal from "./BeaModal.vue";

export { BeaModal };

const components = [BeaModal];

const BeaUI = {
    install(App){
        components.forEach(cmp=>{
            App.Component(cmp.name,cmp);
        })
    }
}