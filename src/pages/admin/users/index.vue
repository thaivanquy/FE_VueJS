<template>
  <h1>Page User</h1>
</template>

<script>
import { useMenu } from '../../../store/menu';
export default {
  setup() {
    useMenu().onSelectedKeys(["admin-users"]);
  }
}
</script>