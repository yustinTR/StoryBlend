export default {
    title: 'Components/Button',
};

// Twig file.
import button from "./button.twig";

// CSS file.
import './button.scss';


export const Button = () => (
    button({
        label: 'Lorem ipsum!',
        element: 'button',
        variant: 'filter',
    })
);