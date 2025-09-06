# Tatto Kalki - Astro + Tailwind CSS + React

A modern website built with Astro, Tailwind CSS, and React components, optimized for deployment on Cloudflare.

## 🚀 Features

- **Astro** - Fast static site generator with excellent performance
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React** - Interactive components when needed
- **TypeScript** - Type safety and better developer experience
- **Cloudflare Ready** - Optimized for Cloudflare Pages deployment
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Built-in SEO features

## 📦 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting platform

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tatto-kalki
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Navigation header
│   └── Counter.tsx     # React component example
├── layouts/            # Page layouts
│   └── Layout.astro    # Base layout component
├── pages/              # Astro pages (routes)
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   └── contact.astro   # Contact page
└── styles/             # Global styles
    └── global.css      # Tailwind CSS imports
```

## 🚀 Deployment to Cloudflare

### Option 1: Cloudflare Pages (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. Navigate to **Pages** and click **Create a project**

4. Connect your Git repository

5. Configure the build settings:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

6. Click **Save and Deploy**

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory

3. Upload the contents of `dist/` to your Cloudflare Pages or Workers

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands

## 🎨 Customization

### Adding New Pages

Create new `.astro` files in the `src/pages/` directory. The file name becomes the route:

- `src/pages/about.astro` → `/about`
- `src/pages/blog/post-1.astro` → `/blog/post-1`

### Adding React Components

1. Create a new `.tsx` file in `src/components/`
2. Import and use it in your Astro pages with `client:load` directive:

```astro
---
import MyReactComponent from '../components/MyReactComponent';
---

<MyReactComponent client:load />
```

### Styling

- Use Tailwind CSS classes directly in your components
- Add custom styles in `src/styles/global.css`
- Create component-specific styles using Astro's `<style>` tag

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

The project is configured with:
- Tailwind CSS integration
- React integration
- Cloudflare adapter for deployment

### Tailwind Config

Tailwind CSS is configured with the latest version (v4) and includes all the utility classes you need.

## 📱 Responsive Design

The project uses a mobile-first approach with Tailwind CSS breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🚀 Performance

This project is optimized for performance:
- Static site generation with Astro
- Minimal JavaScript (only for interactive components)
- Optimized CSS with Tailwind
- Fast loading times on Cloudflare's global network

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help:
- Check the [Astro documentation](https://docs.astro.build/)
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Open an issue in this repository

---

Built with ❤️ using Astro, Tailwind CSS, and React
