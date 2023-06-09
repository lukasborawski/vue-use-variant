import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
      terser(),
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript'),
      }),
    ],
  },
  {
    input: 'src/types.ts',
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
