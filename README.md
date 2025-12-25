# Nishant Hegde - Portfolio Website

A minimalist, text-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by [kinduff.com](https://kinduff.com) with a warm, clean aesthetic.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Optimized Performance**: Static generation, image optimization, fast loading
- **SEO Friendly**: Meta tags, OpenGraph support, semantic HTML
- **Responsive Design**: Mobile-first approach, works on all devices
- **Clean Aesthetics**: Warm color palette, generous whitespace, readable typography
- **Easy Customization**: Structured data files, TypeScript types, modular components

## Pages

- **Home** (`/`): Hero section with profile photo, work experience, and education
- **Projects** (`/projects`): Grid of 5 projects with detailed individual pages
- **Resume** (`/resume`): Full resume with PDF download option
- **Contact** (`/contact`): Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to this repository:
   ```bash
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Edit `src/data/personal.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  tagline: "Your Professional Title",
  bio: "Your bio...",
  profilePhoto: "/profile_photo/profile_pic.jpg"
};
```

### 2. Work Experience

Edit `src/data/work-experience.ts`:
- Update company names, roles, dates
- Modify summaries (keep to 2-3 sentences)
- Update tech stacks

### 3. Education

Edit `src/data/education.ts`:
- Update degree information
- Modify institutions and locations
- Adjust dates

### 4. Projects

Edit `src/data/projects.ts`:
- Update project details (currently 5 placeholder projects)
- Modify slugs, titles, descriptions
- Update tech stacks
- Add your own overview, problem statement, approach, and results
- Include code snippets and visualization references

**Important**: Add project thumbnail images to `public/projects/project-[1-5]/thumbnail.jpg`

### 5. Contact Information

Edit `src/data/contact.ts`:
```typescript
export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle"
};
```

### 6. Profile Photo

- Add your profile photo to `public/profile_photo/profile_pic.jpg`
- Recommended size: 400x400px (square)
- Formats supported: JPG, PNG (will be optimized by Next.js)

### 7. Project Images

Add images to respective project directories:
```
public/projects/
├── project-1/
│   ├── thumbnail.jpg (required)
│   ├── visualization1.png (optional)
│   └── visualization2.png (optional)
├── project-2/
│   └── thumbnail.jpg
...
```

Recommended thumbnail size: 800x600px (4:3 aspect ratio)

### 8. Resume PDF

- Add your resume PDF to `public/resume.pdf`
- Keep file size under 1MB for fast downloads
- The download button is on the Resume page

### 9. Colors & Styling

Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  cream: { /* Background colors */ },
  warm: { /* Accent colors */ },
  charcoal: { /* Text colors */ },
  accent: { /* Call-to-action colors */ }
}
```

### 10. SEO & Metadata

Update metadata in individual page files:
- `src/app/layout.tsx` - Global metadata
- `src/app/projects/page.tsx` - Projects page
- `src/app/resume/page.tsx` - Resume page
- `src/app/contact/page.tsx` - Contact page
- `src/app/projects/[slug]/page.tsx` - Individual projects (auto-generated)

## Project Structure

```
portfolio-website/
├── public/              # Static files
│   ├── profile_photo/   # Your profile photo
│   ├── projects/        # Project images
│   └── resume.pdf       # Your resume PDF
├── src/
│   ├── app/            # Next.js pages (App Router)
│   │   ├── page.tsx    # Home page
│   │   ├── projects/   # Projects pages
│   │   ├── resume/     # Resume page
│   │   └── contact/    # Contact page
│   ├── components/     # React components
│   │   ├── layout/     # Navbar, Footer
│   │   ├── home/       # Home page components
│   │   ├── projects/   # Project components
│   │   └── ui/         # Reusable UI components
│   ├── data/           # Content data files
│   │   ├── personal.ts
│   │   ├── work-experience.ts
│   │   ├── education.ts
│   │   ├── projects.ts
│   │   └── contact.ts
│   ├── types/          # TypeScript interfaces
│   └── lib/            # Utility functions
├── tailwind.config.ts  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## Design Philosophy

This portfolio follows a minimalist, content-first approach:

- **Typography**: Serif for headings (Georgia), sans-serif for body (system fonts)
- **Colors**: Warm cream backgrounds, charcoal text, subtle orange accents
- **Spacing**: Generous whitespace, max content width of 1200px
- **Interactions**: Subtle hover effects, no animations (fast and static)
- **Images**: Next.js Image component for automatic optimization

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` directory
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

### Other Platforms

This is a standard Next.js application and can be deployed to any platform supporting Node.js:
- AWS Amplify
- Google Cloud Run
- DigitalOcean App Platform
- Railway
- Render

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Image optimization with Next.js Image component
- Static generation for fast page loads

## License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## Support

For questions or issues:
1. Check the customization guide above
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Review Tailwind CSS documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Acknowledgments

- Design inspiration: [kinduff.com](https://kinduff.com)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
