<h1> StoryBlend - Drupal Starter Theme with Storybook </h1>

StoryBlend is a powerful Drupal starter theme seamlessly integrated with Storybook, offering a robust foundation for building and showcasing dynamic Drupal themes. This theme follows the BEM (Block Element Modifier) methodology for writing modular and maintainable CSS.
Getting Started

<h2>To get started with StoryBlend, follow these steps:</h2>

  Clone the repository:

    git clone  git@github.com:yustinTR/StoryBlend.git


Install dependencies:

    npm install

<h2>Development Workflow</h2>
<h3>Run Storybook</h3>

Start Storybook to preview and develop your theme components:


    npm run storybook

Visit http://localhost:6006/ in your browser to view the Storybook.

<h3>Compile CSS</h3>

Compile and build your Drupal theme using the following command:


    npm run dev/build

This command will process your CSS files following the BEM methodology, ensuring modularity and maintainability.
<h2>BEM Methodology</h2>

The CSS in StoryBlend is written following the BEM (Block Element Modifier) methodology. BEM is a naming convention that helps create clear and maintainable code. Here's a brief overview:

Block: Represents a standalone component that is meaningful on its own.


    .block {}

Element: Represents a part of a block and has no standalone meaning.


    .block__element {}

Modifier: Represents a different state or version of a block or an element.

    .block--modifier {}
    .block__element--modifier {}

Ensure your CSS adheres to the BEM methodology for consistency and scalability.
