import { useVariant } from '~/lib/index.es'

describe('vue-use-variant', () => {
  const variantsDefinitions = {
    button: 'button-class',
    buttonPrimary: 'button-class-primary'
  }

  it('Renders class string with regular configuration', () => {
    const { defineVariant } = useVariant()
    const variants = defineVariant({ button: true, buttonPrimary: true }, variantsDefinitions)
    // @ts-ignore
    expect(variants).toBe('button-class button-class-primary')
  })
  it('Renders class string with composable passed definitions', () => {
    const { defineVariant } = useVariant(variantsDefinitions)
    const variants = defineVariant({ button: true, buttonPrimary: true })
    // @ts-ignore
    expect(variants).toBe('button-class button-class-primary')
  })
  it('Renders class string with custom value', () => {
    const { defineVariant } = useVariant()
    const variants = defineVariant({ button: 'button-class-primary' })
    // @ts-ignore
    expect(variants).toBe('button-class-primary')
  })
  it('Renders class string with Vue Ref object', () => {
    const { defineVariant } = useVariant()
    const variants = defineVariant(
      {
        value: {
          button: true,
          buttonPrimary: true
        }
      },
      variantsDefinitions
    )
    // @ts-ignore
    expect(variants).toBe('button-class button-class-primary')
  })
  it('Renders class string with Vue props', () => {
    const { defineVariant } = useVariant()
    const props = {
      button: true,
      buttonProp: 'button-class-primary',
    }
    const variants = defineVariant({ ...props }, variantsDefinitions)
    // @ts-ignore
    expect(variants).toBe('button-class button-class-primary')
  })
  it('Fails when using wrong variants data', () => {
    // @ts-ignore
    global.console = { warn: jest.fn() }
    const { defineVariant } = useVariant()
    defineVariant({ button: { test: true }, buttonPrimary: true }, variantsDefinitions)
    // @ts-ignore
    expect(console.warn).toBeCalled()
  })
})
