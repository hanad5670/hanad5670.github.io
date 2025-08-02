# Hanad Hirsi Portfolio

This is my personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. It highlights my background, skills, projects, and experience, and includes a downloadable resume.

📍 **Live Site**: [https://hanad5670.github.io](https://hanad5670.github.io)

---

## 🚀 Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and build
- **GitHub Pages** for deployment

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have:

- Node.js (v18+ recommended)
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to preview locally. Tailwind styles and React components hot‑reload automatically.

---

## 🧪 Build for Production

```bash
npm run build
```

This outputs optimized static files to the `dist/` directory.

---

## 📦 Deploy to GitHub Pages

### Option 1 – Using `gh-pages` Package

Ensure your `package.json` includes:

```json
"homepage": "https://hanad5670.github.io/<your-repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

This will deploy the contents of `dist/` to the `gh-pages` branch.

### Option 2 – GitHub Actions

Alternatively, create a `.github/workflows/deploy.yml` workflow that:

- Installs dependencies
- Builds the site
- Deploys the `dist/` folder using `peaceiris/actions-gh-pages`

---

## 📁 Project Structure

```
public/
└── resume.pdf              ← Static resume file

src/
├── assets/                 ← Images and logos
├── components/             ← Reusable components (Navbar, Footer, Hero, etc.)
├── data/                   ← Project and timeline data
├── lib/                    ← Theme utilities
├── App.tsx                 ← Main app component
└── main.tsx                ← App entry point

tailwind.config.ts          ← Tailwind theme customization
postcss.config.js           ← PostCSS config
tsconfig.json               ← TypeScript config
README.md                   ← You're reading it!
```

---

## ✨ Customization

| Area                  | File(s) to Edit                                  |
|-----------------------|--------------------------------------------------|
| Hero Section          | `src/components/Hero.tsx`                        |
| Project Cards         | `src/data/projects.json`, `ProjectCard.tsx`      |
| Timeline              | `src/data/roadmap.json`, `Timeline.tsx`          |
| Resume Download       | `public/resume.pdf` + `ResumeButton.tsx`         |
| Theme Colors          | `tailwind.config.ts`, `index.css`                |
| Footer / Contact Info | `Footer.tsx`                                     |

Use Tailwind utilities and CSS variables like `--background`, `--foreground`, etc. for consistent theming.

---

## 🧍 About Me

Hi, I'm **Hanad Hirsi** — a Computer Science graduate passionate about building clean, fast, and accessible web apps. This portfolio reflects my journey, projects, and what I can bring to your team.

📫 Reach out via the contact section on the live site!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
