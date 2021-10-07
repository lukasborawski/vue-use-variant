<script setup lang="ts">
import { defineProps, ref, withDefaults } from 'vue'
import { UseVariant, useVariant } from 'vue-use-variant'

const { defineVariant } = useVariant() as UseVariant

interface Props {
  button?: boolean
  buttonPrimary?: boolean
}

const definitions = ref({
  button: 'button',
  buttonPrimary: 'px-4 py-2 m-2 rounded text-white bg-blue-600 font-helvetica font-bold hover:opacity-80 transition-all'
})
const props = withDefaults(defineProps<Props>(), {
  button: true,
  buttonPrimary: true
})

const variantRegular = defineVariant({
  button: true,
  buttonPrimary: true
}, {
  button: 'button',
  buttonPrimary:
  definitions.value.buttonPrimary
})
const variantRef = defineVariant({ button: true, buttonPrimary: true }, definitions)
const variantProps = defineVariant({ ...props }, definitions)
</script>

<template>
  <button :class="variantRegular" type="button">Test Button</button>
  <button :class="variantRef" type="button">Test Button</button>
  <button :class="variantProps" type="button">Test Button</button>
</template>
