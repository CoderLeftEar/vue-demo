<template>
  <button class="o-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <o-icon class="icon" v-if="iconName && !loading" :icon-name="iconName"></o-icon>
    <o-icon class="icon loading" v-if="loading" icon-name="loading"></o-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: "Button",
  components:{
    'o-icon': Icon
  },
  props: {
    iconName: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.o-button {
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: spin 1.5s infinite linear;
  }

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
    margin-right: .1em;
  }

  .content {
    order: 2;
  }

  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    .content {
      order: 1;
    }
  }
}
</style>