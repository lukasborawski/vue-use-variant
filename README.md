## Vue Use Variant

<a href="https://badge.fury.io/js/vue-use-variant"><img src="https://badge.fury.io/js/vue-use-variant.svg" alt="npm version" height="18"></a>

Simple composable for **Vue.js*** to handle long and ugly CSS class chaining.

**you can use it with any other framework as well*

### Install

---

Install the package:

```bash
$ npm i vue-use-variant --save
# or
$ yarn add vue-use-variant
```

### Motivation

---

We all know that systems like [Tailwind](https://tailwindcss.com) are awesome, but we also know that defining styles by using utility classes can be hard ... Let's say you are using Tailwind and you want to style some button with provided classes. Probably the definition will look something like this:

```vue
<button
  class="
    p-2 
    bg-blue 
    rounded
    text-md 
    border-0
    font-bold 
    text-white 
    hover:bg-black 
    hover:text-gray
    hover:opacity-80
    hover:transition-all 
  "
  type="button">Submit</button>
```

... and this is just a button. Imagine whole markup for even tiny component. 
Readability of it will be - easy talking - not so great. So what **problems** we're facing here:

- very long class definition
- poor readability
- lack of scalability
- hard to maintain

### Usage

---

To resolve these problems you can try `useVariant` composable.

First define some variants. You can crate regular JSON object for it or use Vue `Ref`.

```javascript
import { ref } from 'vue'

export const buttonVariants = {
  button: 'font-bold rounded border-0 bg-blue hover:opacity-80',
  buttonPrimary: 'p-4 text-lg',
  buttonSecondary: 'p-2 text-md',
}

// or use with Vue Ref (Composition API)
export const buttonVariantsRef = ref(buttonVariants)
```

Now let's see how we can use it with some real component example.

```vue
<template>
  <button :class="buttonVariant" type="button" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { buttonVariants, buttonVariantsRef } from './variants.ts'
import { useVariant, UseVariant } from 'vue-use-variant'

export default defineComponent({
  name: 'Button',
  setup() {
    const { defineVariant } = useVariant() as UseVariant

    return {
      buttonVariant: defineVariant(
        ref({
          button: true,
          buttonPrimary: true,
        }),
        buttonVariantsRef,
      ),
    }
  },
})
</script>
```

As a result your button will get this set of classes:

```vue
font-bold rounded border-0 bg-blue hover:opacity-80 p-4 text-lg
```

---

You can also use it with **props**.

```vue
<script lang="ts">
import { buttonVariantsRef } from './variants.ts'

export default defineComponent({
  name: 'Button',
  props: {
    button: {
      type: Boolean,
      default: true,
    },
    buttonVariant: {
      type: String,
      default: 'buttonPrimary',
    },
  },
  setup() {
    const { defineVariant } = useVariant() as UseVariant

    return {
      buttonVariant: defineVariant({ ...props }, buttonVariantsRef),
    }
  },
})
</script>
```

Use straight without variant definitions.

```vue
<script lang="ts">
export default defineComponent({
  name: 'Button',
  setup() {
    const { defineVariant } = useVariant() as UseVariant

    return {
      buttonVariant: defineVariant({ shadow: 'shadow' }),
    }
  },
})
</script>
```

Finally, you can define your variants as composable argument.

```vue
<script lang="ts">
import { buttonVariantsRef } from './variants.ts'

export default defineComponent({
  name: 'Button',
  setup() {
    const { defineVariant } = useVariant(buttonVariantsRef) as UseVariant

    return {
      buttonVariant: defineVariant({ buttonPrimary: true }),
    }
  },
})
</script>
```

Of course, you can **combine and mix** variants and use them as a global variations for 
your base, global and reusable components. It's super easy and convenient. You can
of course use it with any **other UI System** like for example Boostrap or Vuetify.
And maybe it was built for vue you can use it for any o**ther frameworks** like React.

--- 

### Demo

Want to check or test it in action? Check out the simple app in the `demo` folder.

---

**API Reference**: Check out the [types](src/types.d.ts) for API definitions.

**Contribution**: Please add Pull Request to introduce some changes or fixes.

**Support**: Want to support? [Buy me a coffee](https://www.buymeacoffee.com/lukas.borawski).

<a href="https://www.buymeacoffee.com/lukas.borawski" target="__blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me a Coffee"></a>

