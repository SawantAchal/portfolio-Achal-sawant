# Portfolio Website

A responsive portfolio website built with React and Tailwind CSS, featuring dark/light mode, smooth scrolling, and mobile-friendly navigation.

**Live Demo** -https://portfolio-achal-sawant.onrender.com/

## Features

- **Responsive Design**: Adapts seamlessly between desktop and mobile views.
- **Light and Dark Mode**: Toggle themes using a custom `ThemeContext`.
- **Smooth Scrolling Navigation**: Scrolls smoothly to sections when selected from the navbar.
- **Scroll-to-Top Arrow**: A button that appears to scroll smoothly back to the top of the page.
- **Mobile Sidebar**: A toggleable sidebar for navigation on smaller screens.

## Folder Structure

\`\`\`
portfolio-website
├── public              
├── src
│   ├── components       
│   ├── context           
│   ├── pages             
│   ├── App.js           
│   └── index.js  
├── .gitignore
├── package.json
└── README.md
\`\`\`

## Adding Dark/Light Theme with ThemeContext

The \`ThemeContext\` in the \`context\` folder manages the theme state across the app. 

### Usage of \`ThemeContext\`

1. **Creating \`ThemeContext\`**: The \`ThemeContext.jsx\` file sets up the context and provider for managing theme state.

2. **Using \`ThemeContext\`**: Wrap the main app component in \`ThemeProvider\` in \`index.js\` or \`App.js\`. Access \`ThemeContext\` in components to conditionally style based on the theme.

This structure allows easy toggling and application of themes across the app.

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/SawantAchal/portfolio-Achal-sawant.git
   cd portfolio-website
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:

   \`\`\`bash
   npm start
   \`\`\`

## Technologies Used

- **React**: For building UI components.
- **Tailwind CSS**: For styling and responsive design.
- **React Context API**: For theme management.
- **React Icons**: For icons 

## Components

- **Navbar**: Contains navigation links to scroll to different sections and a theme toggle button.
- **Main**: The main introduction section with a prominent SVG background text.
- **Project**: Displays projects or work examples.
- **Resume**: Section for showcasing skills and experience.
- **Skills**: Highlights technical skills.
- **Contact**: Contact form or details.
- **Footer**: The website's footer with additional links or information.

## Usage Guide

### Dark/Light Mode
1. To toggle between dark and light modes, use the button in the Navbar.
2. The theme is managed through `ThemeContext` so the preference persists throughout the session.

### Smooth Scroll-to-Section Navigation
1. Each navigation link scrolls smoothly to the selected section on click.
2. The sections (e.g., `Project`, `Resume`, etc.) are passed as references to enable scrolling.

### Scroll-to-Top Arrow
1. An arrow button appears when scrolling down.
2. Clicking this arrow smoothly scrolls back to the top of the page.

## Customization

1. **Theme Colors**: Tailwind configuration can be modified for custom color schemes.
2. **Icons**: Use `React Icons` to replace or add icons as desired.
3. **Animations**: Custom animations can be added in Tailwind for unique visual effects.

## Deployment

1. Build the project:

   \`\`\`bash
   npm run build
   \`\`\`

2. Deploy the `build` folder to any static hosting service.

For questions or suggestions, please reach out to the author at [email@example.com](mailto:achals1718@gmail.com).

