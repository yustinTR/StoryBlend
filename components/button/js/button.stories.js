// Twig file.
import button from '../button.twig';

// CSS file.
import '../scss/button.scss';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        language: 'yaml',
        code: `
          {% include 'finalist:button' with {
            'label': button_text,
            'button_url': button_link,
            'is_button': true,
            'size': lg,
            'style': dark,
            'variant': 'secondary',
            'icon_after': 'arrow-right',
            'extra_classes': 'extra clases'
          } %}
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export const Button = () =>
  button({
    label: 'Lorem ipsum!',
    element: 'button',
    aria_label: 'hidden',
  });

export const ButtonFilter = () =>
  button({
    label: 'Lorem ipsum!',
    element: 'button',
    variant: 'filter ',
    aria_label: 'hidden',
  });

export const ButtonWebform = () =>
  button({
    label: 'Lorem ipsum!',
    element: 'button',
    variant: 'webform ',
    aria_label: 'hidden',
  });

export const ButtonOutline = () =>
  button({
    label: 'Lorem ipsum!',
    element: 'button',
    variant: 'secondary ',
    aria_label: 'hidden',
  });
