import { defineComponent } from "vue";
import {Size} from './utility';
export default defineComponent({
  props: {
    // 必填
    require: {
      type: Boolean,
      default: false,
    },
    // 只读
    readonly:{
        type:Boolean,
        default: false
    },
    // 禁用
    disabled:{
        type:Boolean,
        default:false
    },
    // 尺寸
    size:{
        type:Size,
        default:Size.MIDDLE
    }
  },

  setup(props, { emit }) {

    return ()=>(

    )
  },
});
