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


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.


**⭐ If you found this portfolio template helpful, please give it a star on GitHub!**
