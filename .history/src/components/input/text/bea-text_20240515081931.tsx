import { defineComponent } from "vue";
export default defineComponent({
  props: {
    require: {
      type: Boolean,
      default: false,
    },
    readonly:{
        type:Boolean,
        default: false
    },
    disabled:{
        type:Boolean,
        default:false
    },
    size:{
        type:'large'|'middle'|'small',
        default:'middle'
    }
  },

  setup(props, { emit }) {

    return ()=>(

    );
  },
});
