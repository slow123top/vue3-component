import BeaModal from "./modal/BeaModal.vue";
export { BeaModal };

const components = [BeaModal];

const BeaUI = {
    install(App:any){
        components.forEach(cmp=>{
            App.component(cmp.name,cmp);
        })
    }
}

export default BeaUI;