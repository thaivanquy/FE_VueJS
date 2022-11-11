<template>
  <h1>Page Setting</h1>
</template>
<script>
import { useMenu } from '../../../store/menu';
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-settings"]);
  }
}
</script>