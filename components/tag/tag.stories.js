// Twig file.
import tag from './tag.twig';

// CSS file.
import './tag.scss';

export default {
  title: 'Components/Tag',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Tag = () =>
  tag({
    label: 'Lorem ipsum!',
    element: 'span',
  });
