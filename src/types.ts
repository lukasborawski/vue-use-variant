export type ObjectRecord = { [keyof in string]: string | boolean }

/* Vue Ref Object */
export function DefineVariant(
  $variants: { value: ObjectRecord | string[] },
  $definitions?: { value: ObjectRecord },
): void | string
/* Vue Ref Object */
export function DefineVariant($variants: { value: ObjectRecord | string[] }, $definitions?: ObjectRecord): void | string
/* Regular Object */
export function DefineVariant($variants: ObjectRecord, $definitions?: ObjectRecord): void | string
/* Proxy */
export function DefineVariant($variants: ProxyConstructor, $definitions?: ObjectRecord): void | string
/* Array */
export function DefineVariant($variants: string[], $definitions?: ObjectRecord): void | string
/* Array */
export function DefineVariant($variants: string[], $definitions?: { value: ObjectRecord }): void | string
/* Overloaded Object */
export function DefineVariant($variants: any, $definitions?: any): void | string {
  console.log('DefineVariant', $variants, $definitions)
}

export interface UseVariant {
  defineVariant: typeof DefineVariant
}
export type UseVariantReturn = (definitions?: ObjectRecord | { value: ObjectRecord }) => UseVariant

/* @ts-ignore */
export function useVariant()
