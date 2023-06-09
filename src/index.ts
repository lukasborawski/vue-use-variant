import { DefineVariant, ObjectRecord, UseVariantReturn } from './types'

export const useVariant: UseVariantReturn = (definitions) => {
  const defineVariant: typeof DefineVariant = ($variants, $definitions) => {
    let _variants = ($variants as { value: ObjectRecord | string[] }).value || $variants
    const _definitions = definitions?.value || definitions || $definitions?.value || $definitions || {}

    try {
      if (Array.isArray(_variants)) _variants = Object.fromEntries(_variants.map((key) => [key, true]))
      return Object.keys(_variants)
        .map((key) => {
          if (typeof (_variants as ObjectRecord)[key] === 'object') throw Error()
          const value: string = key.split('Prop')[0]
          return typeof (_variants as ObjectRecord)[key] === 'boolean'
            ? !(_variants as ObjectRecord)[key]
              ? ''
              : (_definitions as ObjectRecord)[value.length > 0 ? value : key]
            : (_variants as ObjectRecord)[key]
        })
        .join(' ')
    } catch (error) {
      console.warn('[useVariant] Wrong format - use string or boolean.')
    }
  }

  return {
    defineVariant,
  }
}
