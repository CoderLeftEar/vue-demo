<template>
  <svg v-if="iconName" class="icon">
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon ",
  props: ["iconName"]
}
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
</style>