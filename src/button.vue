<template>
  <button class="o-button" :class="{[`icon-${iconPosition}`]: true}">
    <o-icon v-if="iconName" :icon-name="iconName"></o-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    iconName: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    }
  }
}
</script>

<style lang="scss">
.o-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border: 1px solid var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .icon {
    order: 1;
    margin-right: .3em;
  }

  .content {
    order: 2;
  }

  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }

    .content {
      order: 1;
    }
  }
}
</style>