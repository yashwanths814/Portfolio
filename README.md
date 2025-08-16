# Yashwanth S - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode toggle, smooth animations, and comprehensive sections showcasing my skills, projects, and achievements.

## 🌟 Features

### Core Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design with subtle animations
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **SEO Optimized**: Proper meta tags, sitemap, and structured data
- **Performance Optimized**: Fast loading with optimized assets and code splitting

### Sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Me**: Professional objective and personal values
- **Education**: Timeline-based educational background
- **Skills**: Categorized skill showcase with progress indicators
- **Projects**: Card-based project gallery with tech stack and links
- **Achievements**: Awards, recognitions, and competition wins
- **Leadership**: Leadership roles and community involvement
- **Volunteering**: Community service and volunteer activities
- **Contact**: Contact form with social media integration

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Linting**: ESLint with TypeScript support

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashwanths/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the website.

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Ensure your `package.json` includes:
   ```json
   {
     "homepage": "https://yourusername.github.io",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

### Alternative Deployment Options

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

## 🎨 Customization

### Personal Information
Update your personal information in:
- `src/components/Hero.tsx`: Name, title, and introduction
- `src/components/About.tsx`: Professional objective and values
- `src/components/Education.tsx`: Educational background
- `src/components/Skills.tsx`: Skills and technologies
- `src/components/Projects.tsx`: Projects and portfolio items
- `src/components/Contact.tsx`: Contact information and social links

### Styling
- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `src/index.css` and `index.html`
- **Animations**: Customize animations in `src/index.css`

### Content
- **Resume**: Add your resume PDF to `public/resume.pdf`
- **Images**: Add project images to `public/images/`
- **Favicon**: Replace favicon files in `public/`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Open Graph**: Facebook and LinkedIn sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling instructions

## 🚀 Performance

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Lazy loading of images and components
- **Minification**: Optimized and minified production builds
- **Caching**: Proper caching headers for static assets

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your Google Analytics tracking ID
2. Add the tracking script to `index.html`
3. Implement event tracking for user interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 👤 Author

**Yashwanth S**
- GitHub: [@yashwanths](https://github.com/yashwanths)
- LinkedIn: [yashwanths](https://linkedin.com/in/yashwanths)
- Email: yashwanth@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Build tool
- [GitHub Pages](https://pages.github.com/) - Hosting platform

## 📝 Changelog

### v1.0.0 (2024-12-19)
- Initial release
- Complete portfolio website with all sections
- Responsive design with dark/light mode
- SEO optimization and accessibility features
- GitHub Pages deployment ready

---

**⭐ If you found this portfolio template helpful, please give it a star on GitHub!**