<template>
  <h1>Page Role</h1>
</template>
<script>
import { useMenu } from '../../../store/menu';
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-roles"]);
  }
}
</script>