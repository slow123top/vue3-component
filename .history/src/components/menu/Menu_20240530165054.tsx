import { defineComponent } from "vue";
export default defineComponent({
  name: "bea-menu",
  props: {},
  setup(props, { emit }) {

    return ()=>(<ul class="bea-menu ant-menu-vertical ant-menu-root ant-menu-light"></ul>)
  },
});
