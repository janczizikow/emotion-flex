import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    resolve({ extensions }),
    external(),
    babel({ extensions, exclude: 'node_modules/**' }),
    sizeSnapshot(),
  ],
};

const CJS = Object.assign({}, baseConfig, {
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [...baseConfig.plugins, commonjs()],
});

const ESM = Object.assign({}, baseConfig, {
  output: {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },
});

export default [CJS, ESM];
