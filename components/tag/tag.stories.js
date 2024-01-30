export default {
  title: 'Components/Tag',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Twig file.
import tag from "./tag.twig";

// CSS file.
import './tag.scss';


export const Tag = () => (
  tag({
    label: 'Lorem ipsum!',
    element: 'span'
  })
);
