import { defineComponent } from "vue";
import {Size} from './utility';
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
        type:Size,
        default:Size.MIDDLE
    }
  },

  setup(props, { emit }) {

    return ()=>(

    );
  },
});
