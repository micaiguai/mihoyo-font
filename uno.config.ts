import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetIcons from '@unocss/preset-icons'


export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetIcons({ /* options */ }),
    presetWind4(),
  ]
})
