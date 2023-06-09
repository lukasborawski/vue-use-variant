import { useVariant } from '~/lib/index.es'
import { UseVariant } from '~/lib'

const { defineVariant } = useVariant() as UseVariant

console.log(defineVariant({ value: { shadow: true } }, { shadow: 'shadow' }))
console.log(defineVariant({ value: { shadow: true } }, { value: { shadow: 'shadow' } }))
console.log(defineVariant({ shadow: true }, { shadow: 'shadow' }))
console.log(defineVariant(['shadow'], { shadow: 'shadow' }))
console.log(defineVariant({ value: ['shadow'] }, { shadow: 'shadow' }))
