# 3D Interactive Portfolio Website

A modern portfolio website built with React and Three.js, featuring interactive 3D elements, animations, and a responsive design.

## Features

- Interactive 3D elements using Three.js and React Three Fiber
- Smooth animations with Framer Motion
- Responsive design for all device sizes
- Dark-themed UI with beautiful color schemes
- Modern navigation with mobile support
- Multiple pages: Home, About, Projects, Contact
- 3D models and visualizations
- Form handling for contact

## Tech Stack

- React.js
- Three.js
- React Three Fiber & Drei
- Framer Motion
- Styled Components
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
portfolio/
├── public/
│   ├── tech/           # Technology icons for 3D balls
│   └── desktop_pc/     # 3D model assets
├── src/
│   ├── assets/         # Static assets 
│   ├── components/     # Reusable components
│   │   ├── canvas/     # Three.js 3D components
│   │   └── layout/     # Layout components (Navbar, Footer, etc.)
│   ├── pages/          # Page components
│   ├── sections/       # Section components for pages
│   └── utils/          # Utility functions
```

## Customization

### Add Your Projects

Edit the `projects` array in `src/pages/Projects.js` to add your own projects:

```jsx
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "path/to/image.jpg",
    tags: ["Tag1", "Tag2", "Tag3"],
    source: "https://github.com/yourrepo",
    demo: "https://demo.example.com/"
  },
  // Add more projects
];
```

### Change Personal Information

Update your personal information in each page component.

### Modify 3D Models

For optimal performance, it's recommended to use optimized 3D models. You can replace the existing models in the `public` directory with your own.

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory, ready to be deployed.

## Credits

- 3D model inspiration: Three.js Journey by Bruno Simon
- Design inspiration: Modern portfolio websites

## License

MIT License
