import { defineComponent } from "vue";
export default defineComponent({
  props: {
    require: {
      type: Boolean,
      default: false,
    },
    readonly:{
        type:Boolean,
        default:false
    }
  },

  setup(props, { emit }) {

    return ()=>(

    );
  },
});
