export default {
    title: 'Components/Title',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            default: 'text',
            control: 'text',
            description: 'Title text',
        },
    },
};

// Twig file.
import title from "./title.twig";

// CSS file.
import './title.scss';


export const TitleMd = () => (
    title({
        title: 'Lorum ipsum',
        heading: 'md',
        element: 'h1',
        extra_classes: 'call-to-action__title',
    })
);

export const TitleLg = () => (
    title({
        title: 'Lorum ipsum',
        heading: 'lg',
        element: 'h1',
        extra_classes: 'call-to-action__title',
    })
);