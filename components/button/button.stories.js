export default {
    title: 'Components/Button',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            default: 'text',
            control: 'text',
            description: 'Text fot the button',
        },
    },
};

// Twig file.
import button from "./button.twig";

// CSS file.
import './button.scss';


export const Button = () => (
    button({
        label: 'Lorem ipsum!',
        element: 'button',
        aria_label: 'hidden'
    })
);

export const ButtonFilter = () => (
    button({
        label: 'Lorem ipsum!',
        element: 'button',
        variant: 'filter ',
        aria_label: 'hidden'
    })
);

export const ButtonWebform = () => (
    button({
        label: 'Lorem ipsum!',
        element: 'button',
        variant: 'webform ',
        aria_label: 'hidden'
    })
);

export const ButtonOutline = () => (
    button({
        label: 'Lorem ipsum!',
        element: 'button',
        variant: 'secondary ',
        aria_label: 'hidden'
    })
);
