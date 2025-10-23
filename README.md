# Muhammad Sameer - Portfolio Website

A modern, professional, and fully responsive portfolio website for Full Stack Developer Muhammad Sameer. Built with React, Tailwind CSS, and Framer Motion for smooth animations and transitions.

## Features

- ✨ Modern and professional design
- 🌓 Fully functional light/dark mode toggle with localStorage persistence
- 📱 Fully responsive across all devices (mobile, tablet, desktop)
- 🎨 Smooth animations using Framer Motion
- 🚀 Fast and optimized performance
- 🎯 SEO-friendly structure
- 🔄 Smooth scroll navigation
- ⬆️ Scroll-to-top button

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Fonts:** Inter (Google Fonts)

## Sections

1. **Home/Hero** - Eye-catching introduction with animated background
2. **About** - Professional background and expertise
3. **Skills** - Technical skills with animated progress bars and icons
   - Frontend: Angular, React, HTML, CSS, JavaScript
   - Backend: Node.js, Laravel, .NET, PHP, C#
   - Databases: MySQL, MongoDB, Firebase, SQL Server
   - Full Stack: MERN & MEAN
4. **Projects** - Featured projects with live demo and GitHub links
5. **Contact** - Contact form and social links

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation with theme toggle
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Skills section
│   │   ├── Projects.jsx       # Projects section
│   │   ├── Contact.jsx        # Contact section
│   │   ├── Footer.jsx         # Footer component
│   │   └── ScrollToTop.jsx    # Scroll to top button
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme context for dark mode
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Updating Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    liveDemo: 'https://your-demo-link.com',
    github: 'https://github.com/your-repo',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // Add more projects...
];
```

### Updating Skills

Modify the `skillCategories` array in `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    title: 'Category Name',
    skills: [
      { name: 'Skill Name', icon: IconComponent, color: 'text-color', level: 90 },
      // Add more skills...
    ],
  },
];
```

### Updating Contact Information

Edit the `contactInfo` array in `src/components/Contact.jsx` to update your contact details.

## Color Scheme

The portfolio uses a professional color palette optimized for both light and dark modes:

- **Primary Light:** Blue (#3b82f6)
- **Primary Dark:** Light Blue (#60a5fa)
- **Gradients:** Blue to Purple combinations
- **Background Light:** White with subtle gradients
- **Background Dark:** Dark gray tones

## Performance

- Fast initial load with Vite
- Code splitting for optimal bundle size
- Lazy loading animations
- Optimized images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Information

- **Email:** sameerdevexpert@gmail.com
- **Phone:** 0321 3265524
- **GitHub:** [github.com/Konete326](https://github.com/Konete326/)
- **LinkedIn:** [linkedin.com/in/sameer-akram-52662a28a](https://www.linkedin.com/in/sameer-akram-52662a28a)

## License

Copyright © 2024 Muhammad Sameer. All rights reserved.

---

Built with ❤️ using React & Tailwind CSS
