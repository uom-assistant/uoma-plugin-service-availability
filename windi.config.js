import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.vue',
      'index.html'
    ]
  },
  darkMode: 'class',
  safelist: ['bg-green-500', 'bg-yellow-500', 'bg-yellow-50', 'border-orange-200', 'dark:bg-yellow-200', 'dark:border-orange-300', 'bg-red-50', 'border-red-200', 'dark:bg-red-200', 'dark:border-red-300', 'border-orange-100', 'dark:border-orange-200', 'border-red-100', 'dark:border-red-200'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#660099',
          light: '#D099E0'
        }
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', '"Noto Sans"', '"Helvetica Neue"', 'Helvetica', '"Nimbus Sans L"', 'Arial', '"Liberation Sans"', '"PingFang SC"', '"Hiragino Sans GB"', '"Noto Sans CJK SC"', '"Source Han Sans SC"', '"Source Han Sans CN"', '"Microsoft YaHei"', '"Wenquanyi Micro Hei"', '"WenQuanYi Zen Hei"', '"ST Heiti"', 'SimHei', '"WenQuanYi Zen Hei Sharp"', 'sans-serif'],
        display: ['Montserrat', '-apple-system', '"Noto Sans"', '"Helvetica Neue"', 'Helvetica', '"Nimbus Sans L"', 'Arial', '"Liberation Sans"', '"PingFang SC"', '"Hiragino Sans GB"', '"Noto Sans CJK SC"', '"Source Han Sans SC"', '"Source Han Sans CN"', '"Microsoft YaHei"', '"Wenquanyi Micro Hei"', '"WenQuanYi Zen Hei"', '"ST Heiti"', 'SimHei', '"WenQuanYi Zen Hei Sharp"', 'sans-serif']
      }
    }
  },
  shortcuts: {
    btn: 'appearance-none inline-block rounded-md text-dark-100 font-dispaly font-medium outline-none focus:outline-none focus:(ring-3 ring-gray-500 ring-opacity-60)',
    'flex-center': 'flex items-center justify-center'
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.no-tap-highlight': {
          '-webkit-tap-highlight-color': 'transparent'
        },
        '.bottom-safe': {
          'margin-bottom': 'env(safe-area-inset-bottom)'
        },
        '.animation-slow': {
          'animation-duration': '1.8s'
        }
      }
      addUtilities(newUtilities)
    })
  ]
})
