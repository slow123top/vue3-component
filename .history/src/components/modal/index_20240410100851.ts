import Modal from "./BeaModal.vue";
export { Modal };

const components = [BeaModal];

const BeaModal = {
    install(App:any){
        components.forEach(cmp=>{
            App.component(cmp.name,cmp);
        })
    }
}

export default BeaUI;