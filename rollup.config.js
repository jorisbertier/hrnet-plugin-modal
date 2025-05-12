import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'index.js',
    output: [
        {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        sourcemap: true,
        },
        {
        file: 'dist/bundle.esm.js',
        format: 'esm',
        sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        exclude: 'node_modules/**',
        }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};