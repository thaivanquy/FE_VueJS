<template>
  <div class="containter-fuild">
    <div class="row text-white" style="background-color: #0c713d; padding: 1.5rem">
      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawer()" class="hover"><font-awesome-icon icon="fa-solid fa-align-justify"/></span>
      </div>

      <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
        <img src="../assets/vue.svg" alt="Logo" height="32" width="34" class="ms-3 me-3">
        <span class="d-none d-sm-flex">ADMIN</span>
      </div>

      <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
        <span>LOGIN</span>
      </div>

      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawerAccount()" class="hover"><font-awesome-icon icon="fa-solid fa-user"/></span>
      </div>
    </div>
  </div>
  <a-drawer
    v-model:visible="visible"
    title="CATEGORY"
    placement="left"
  >
    <TheMenu/>
  </a-drawer>
  <a-drawer
    v-model:visible="visible_account"
    title="LOGIN"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue';
import TheMenu from "../components/TheMenu.vue"
export default defineComponent({
  components: {
    TheMenu
  },
  setup() {
    const visible = ref(false);
    const visible_account = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const showDrawerAccount = () => {
      visible_account.value = true;
    };
    return {
      visible,
      visible_account,
      showDrawer,
      showDrawerAccount,
    };
  },
});
</script>
<style>
span.hover { 
  cursor: pointer; 
}
</style>