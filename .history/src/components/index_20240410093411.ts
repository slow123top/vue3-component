import BeaModal from "./BeaModal.vue";
import {} from 'vue';
export { BeaModal };

const components = [BeaModal];

const BeaUI = {
    install(App:any){
        components.forEach(cmp=>{
            App.Component(cmp.name,cmp);
        })
    }
}