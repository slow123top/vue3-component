import BeaModal from "./BeaModal.vue";
export { BeaModal };

const components = [BeaModal];

const BeaUI = {
    install(App:any){
        components.forEach(cmp=>{
            App.Component(cmp.name,cmp);
        })
    }
}

export default BeaUI;