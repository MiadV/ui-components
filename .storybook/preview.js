import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'figma',
    values: [
      {
        name: 'figma',
        value: '#F1F2F3'
      },
      {
        name: 'light',
        value: '#F8F8F8'
      },
      {
        name: 'dark',
        value: '#333333'
      }
    ]
  }
}
