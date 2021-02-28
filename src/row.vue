<template>
  <div class="row" :style="gutter && rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ORow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    },
    rowClass() {
      return [this.align && `align-${this.align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }
}
</style>