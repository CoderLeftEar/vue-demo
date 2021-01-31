<template>
  <svg v-if="iconName">
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