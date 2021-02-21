<template>
  <svg v-if="iconName" class="o-icon">
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script>
import './svg'

export default {
  name: "OIcon",
  props: ["iconName"]
}
</script>

<style lang="scss" scoped>
.o-icon {
  width: 1em;
  height: 1em;
}
</style>