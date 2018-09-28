import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'One React',
  url: '#',
  goFullScreen: false,
  showAddonPanel: true,
  addonPanelInRight: true,
})

// automatically import all files ending with *.story.tsx
const req = require.context('../stories', true, /.story.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
