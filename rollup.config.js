const copy = require('rollup-copy-plugin')

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/vue-wc-wrapper.js'
    },
    {
      format: 'iife',
      name: 'wrapVueWebComponent',
      file: 'dist/vue-wc-wrapper.global.js'
    }
  ],
  plugins: [
    copy({
      'types/index.d.ts': 'dist/index.d.ts'
    })
  ]
}
