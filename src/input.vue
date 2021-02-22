<template>
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    >
    <template v-if="error">
      <icon icon-name="error" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: "OInput",
  components: {
    Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
//--font-size: 14px;
//--border-radius: 4px;
//--button-height: 32px;
//--button-bg: white;
//--button-active-bg: #eee;
//--color: #999;
//--border-color: #999;
//--border-color-hover: #666;

$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 0.5em;
  }

  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: 0 0 2px $box-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .error-message {
    color: $red;
  }
}
</style>