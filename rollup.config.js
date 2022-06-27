import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

// Use peerDependencies as rollup external
// https://rollupjs.org/guide/en/#peer-dependencies
const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

const devConfig = {
  input: 'src/index.tsx',
  external,
  output: [
    {
      file: pkg.unpkg,
      format: 'umd',
      exports: 'named',
      name: 'FaveUI',
      indent: false,
      globals
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      name: 'FaveUI',
      indent: false,
      globals
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      name: 'FaveUI',
      indent: false,
      globals
    }
  ],
  plugins: [
    postcss({
      config: {
        path: './postcss.config.js'
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'bottom'
      }
    }),
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    })
  ]
}

const prodConfig = {
  ...devConfig,
	plugins: [...devConfig.plugins, terser()]
};

export default [
  // UMD Development
  devConfig,
	// UMD Production
	prodConfig  
]
