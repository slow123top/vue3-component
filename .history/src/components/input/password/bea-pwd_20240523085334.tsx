import { defineComponent } from "vue";
import { Size } from "./utility";
export default defineComponent({
  name: "bea-pwd",
  props: {
    modelValue: {
      // type:any,
    },
    // 必填
    required: {
      type: Boolean,
      default: false,
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 尺寸
    size: {
      type: Size,
      default: Size.MIDDLE,
    },
  },

  setup(props, { emit }) {
    const inputEvent = (e) => {
      emit("update:modelValue", e.target.value);
    //   值变化事件
      emit("changeEvent",e);
    };
    return () => (
      <input
        type="password"
        value={props.modelValue}
        onInput={(e) => inputEvent(e)}
        // 适用于所有属性
        disabled={props.disabled}
        // 少部分input不适用
        required={props.required}
      ></input>
    );
  },
});
