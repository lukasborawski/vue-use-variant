<script setup lang="ts">
import { defineProps, ref, withDefaults } from 'vue'
import { UseVariant, useVariant } from 'vue-use-variant'

const { defineVariant } = useVariant() as UseVariant

interface Props {
  button?: boolean
  buttonPrimary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  button: true,
  buttonPrimary: true,
})

const definitions = {
  button: 'button',
  buttonPrimary:
    'px-4 py-2 m-2 rounded text-white bg-blue-600 font-helvetica font-bold hover:opacity-80 transition-all',
}
const definitionsRef = ref(definitions)

const variantRegularDefinitionsRaw = defineVariant(
  {
    button: true,
    buttonPrimary: true,
  },
  {
    button: 'button',
    buttonPrimary: definitionsRef.value.buttonPrimary,
  },
)
const variantRefDefinitionsRef = defineVariant(ref({ button: true, buttonPrimary: true }), definitionsRef)
const variantPropsDefinitionsRef = defineVariant(props as any, definitionsRef)
const variantArrayDefinitionsRef = defineVariant(['button', 'buttonPrimary'], definitionsRef)
const variantArrayDefinitionsRaw = defineVariant(['button', 'buttonPrimary'], definitions)
const variantRefArrayDefinitionsRef = defineVariant(ref(['button', 'buttonPrimary']), definitionsRef)
</script>

<template>
  <button :class="variantRegularDefinitionsRaw" type="button">Test Button</button>
  <button :class="variantRefDefinitionsRef" type="button">Test Button</button>
  <button :class="variantPropsDefinitionsRef" type="button">Test Button</button>
  <button :class="variantArrayDefinitionsRef" type="button">Test Button</button>
  <button :class="variantArrayDefinitionsRaw" type="button">Test Button</button>
  <button :class="variantRefArrayDefinitionsRef" type="button">Test Button</button>
</template>
