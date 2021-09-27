type ObjectRecord = { [keyof in string]: string | boolean }

/* Vue Ref Object */
export function DefineVariant($variants: { value: ObjectRecord }, $definitions?: { value: ObjectRecord }): void | string
/*  Regular Object */
export function DefineVariant($variants: ObjectRecord, $definitions?: ObjectRecord): void | string
/* Overloaded Object */
export function DefineVariant(
  $variants: { value: ObjectRecord } | ObjectRecord,
  $definitions?: { value: ObjectRecord } | ObjectRecord,
): void | string

export interface UseVariant {
  defineVariant: typeof DefineVariant
}
export type UseVariantReturn = (definitions?: { value: ObjectRecord } | ObjectRecord) => UseVariant

export function useVariant()
