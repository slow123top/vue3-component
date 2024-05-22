import {
  defineComponent,
  ref,
  defineProps,
  useSlots,
  defineEmits,
  Teleport,
  Transition,
} from "vue";
import type { SetupContext } from "vue";
import "./BeaModal.less";
type ModalProp = {
  type: String;
  message: String;
};

export default defineComponent({
  name: "bea-mask",
  // 定义属性
  props: {
    // 双向绑定属性，默认false
    open: {
      type: Boolean,
      default: false,
    },
    // 容器
    container: {
      default: document.body,
    },
    // 点击遮罩是否可以关闭
    clickable: {
      type: Boolean,
      default: false,
    },
    // 多久之后展示遮罩
    delay: {
      type: Number,
      default: 100,
    },
  },
  setup(props, context: SetupContext) {
    const beamodalRef = ref(null);

    const body: HTMLElement = document.body;
    const slots = useSlots();

    // 发射事件
    const emits = context.emit;
    const close = (e: MouseEvent) => {
      e.stopPropagation();
      emits("update:open", false);
      emits("afterClose", e);
    };

    // 允许点击遮罩关闭modal
    const closeMask = (e: MouseEvent) => {
      if (props.enableMask) {
        if (beamodalRef.value === e.target) {
          close(e);
        }
      }
      return;
    };
    return () => (
      <Teleport to="body">
        <Transition name="bea">
          {props.open && (
            <div
              ref={beamodalRef}
              class="beamodal"
              onClick={(e: MouseEvent) => closeMask(e)}
            >
              {context.slots.default && context.slots.default()}
            </div>
          )}
        </Transition>
      </Teleport>
    );
  },
});
