# Hariharan B — Developer Portfolio

A modern, high-performance, recruiter-focused developer portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for fintech and full-stack software engineers to showcase architecture, measurable achievements, and technical credentials.

---

## 🚀 Key Features

- **⚡ Blazing Fast Architecture**: Built with Vite 5 + React 18 + TypeScript with bundle splitting (Vendor, Icons, Framer). 95+ score target on Google Lighthouse.
- **🎨 Modern Developer Aesthetics**: Sleek dark mode by default with light/dark theme toggle, glassmorphism blur effects, animated gradients, and custom developer scrollbar. Respects `prefers-color-scheme` and `prefers-reduced-motion`.
- **⏳ Dynamic Experience Counter**: Automatically calculates total years and months of engineering experience from March 2021 to the current date so your portfolio never goes stale.
- **🎯 Recruiter-Ready Metrics**: Quantified achievement bullets in *"Action + Technology + Measurable result"* format, stats strip, and clear "Open to work" signals.
- **📁 Single Source of Truth**: All content (personal info, experience, skills, projects, education, contacts) is centralized in [`src/data/portfolio.ts`](file:///d:/learning/portfolio/src/data/portfolio.ts). Edit content without touching UI components.
- **🛡️ Scraper Protection**: Phone number is shielded from spam bots with a click-to-reveal obfuscation mechanism.
- **🔍 Full SEO & Social Meta**: Complete OpenGraph, Twitter card tags, JSON-LD `Person` structured schema, XML sitemap, and robots.txt.
- **🤖 GitHub Pages CI/CD**: Ready-to-go GitHub Actions workflow (`.github/workflows/deploy.yml`) with automated builds and deployments.

---

## 🛠️ Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages deployment workflow
├── public/
│   ├── favicon.svg             # Modern developer brand glyph
│   ├── Hariharan_B_Resume.pdf  # Resume PDF file
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # Search engine XML sitemap
├── src/
│   ├── components/
│   │   ├── common/             # Navbar, Footer, ThemeToggle, SkipToContent
│   │   ├── sections/           # Hero, About, Skills, Experience, Projects, Education, Contact
│   │   └── ui/                 # Badge, Button, Card, Modal, Toast, SectionHeading
│   ├── data/
│   │   └── portfolio.ts        # ⭐ ALL content and editable placeholders
│   ├── hooks/                  # useTheme, useActiveSection
│   ├── types/                  # Typed interfaces for portfolio data
│   ├── utils/                  # cn (class merges), experience calculation
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind directives and custom design tokens
│   └── main.tsx                # Entry point
├── _legacy_v1/                 # Backup of your previous HTML/CSS portfolio
├── index.html                  # Vite root HTML with SEO & JSON-LD
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Design tokens & color palettes
└── vite.config.ts              # Vite bundler configuration with /portfolio/ base
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18+ (tested with v20 and v24)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Customize & Edit Content

All portfolio content is organized in a single file:
👉 **[`src/data/portfolio.ts`](file:///d:/learning/portfolio/src/data/portfolio.ts)**

### 1. Replace Placeholders Marked `[EDIT]`
Search for `[EDIT]` in `src/data/portfolio.ts` to update:
- **LinkedIn Profile**: Replace `'https://www.linkedin.com/in/hariharan-devx'` with your exact URL.
- **Relocation Note**: Update your preferred relocation cities (e.g. Chennai, Bangalore, Remote).
- **Projects**: Replace or add your custom projects in `portfolioData.projects`.
- **Metrics**: Adjust measurable percentages (e.g., query response reduction, throughput).
- **Education**: Add your specific university name, degree title, and graduation year.
- **Certifications**: Add any verified certifications you hold.

### 2. How to Display Additional Skills
In `src/data/portfolio.ts`, look for skills marked with `confirmed: false`. To display them on the live site, simply change `confirmed: false` to `confirmed: true`:
```ts
{ name: 'Docker', category: 'DevOps & Tools', confirmed: true },
{ name: 'AWS Cloud', category: 'DevOps & Tools', confirmed: true },
```

### 3. Replace Your Resume PDF
1. Save your updated resume as `Hariharan_B_Resume.pdf`.
2. Copy it into the `public/` directory (replacing the placeholder `public/Hariharan_B_Resume.pdf`).
3. Re-run `npm run build` or push to GitHub. The download buttons in the navbar and hero will automatically deliver your updated resume.

### 4. Connect the Contact Form
1. Create a free account at [Formspree](https://formspree.io).
2. Create a new form and copy your form ID (e.g. `https://formspree.io/f/mqkvpzaa`).
3. Update `portfolioData.contact.formspreeEndpoint` in `src/data/portfolio.ts`.
*(If not configured or in case of network issues, it automatically falls back to an interactive `mailto:` client trigger with prefilled parameters).*

---

## 🚢 Deploying to GitHub Pages

The repository includes a preconfigured GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:
1. Push your changes to the `main` branch of your GitHub repository:
   ```bash
   git add .
   git commit -m "Rebuild portfolio with modern Vite, React, TypeScript, and Tailwind"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**
3. The workflow will automatically trigger, build the project, and publish it to:
   **`https://hariharan-devx.github.io/portfolio/`**

---

## 📄 License
MIT © [Hariharan B](https://github.com/hariharan-devx)
