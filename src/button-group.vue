<template>
  <div class="o-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OButtonGroup',
  mounted() {
    Array.prototype.forEach.call(this.$el.children, item => {
      let name = item.nodeName.toLowerCase()
      if (name !== 'button') {
        console.error(`o-button-group 组件的的子组件应该全为 o-button 组件，但你写的是 ${name}`)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.o-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .o-button {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
