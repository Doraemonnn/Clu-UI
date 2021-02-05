<template>
<button class="cl-button--" @click="handleClick" :disabled="buttonDisabled" :class="[
      type ? 'cl-button--' + type : '',
      buttonSize ? 'cl-button--' + buttonSize : '',
        {
          'is-disabled': buttonDisabled,
          'is-plain': plain,
          'is-round': round
        }
      ]">
    <span v-if="$slots.default">
        <slot></slot>
    </span>
</button>
</template>

<script>
export default {
    name: 'ClButton',

    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
    },

    computed: {
        buttonSize() {
            return this.size
        },

        buttonDisabled() {
            return this.disabled
        }
    },

    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style>

</style>
