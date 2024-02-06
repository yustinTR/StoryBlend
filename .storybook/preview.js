/** @type { import('@storybook/html').Preview } */
import '../src/scss/main.scss';
import StoryBlend from './StoryBlend';

const preview = {
  parameters: {
    docs: {
      theme: StoryBlend,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
