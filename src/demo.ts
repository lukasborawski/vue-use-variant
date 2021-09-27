import { useVariant } from '~/lib/index.es'
import { UseVariant } from '~/lib'

const { defineVariant } = useVariant() as UseVariant

console.log(defineVariant({ value: { shadow: true } }, { shadow: 'shadow' }))
