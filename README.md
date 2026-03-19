# John Mary Nyajura — Portfolio

A minimal, professional portfolio built with **React + Vite + Tailwind CSS + React Router**.

## Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Tailwind CSS v3 | Styling |
| EmailJS | Contact form (no backend) |
| Vite | Build tool |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── RootLayout.jsx   # Wraps all pages (Navbar + Outlet + Footer)
│   │   ├── Navbar.jsx       # Fixed top navigation
│   │   └── Footer.jsx       # Site footer
│   └── ui/
│       ├── PageHeader.jsx   # Reusable page heading block
│       ├── Button.jsx       # Button / link with variants
│       ├── Tag.jsx          # Small skill/tech badge
│       ├── SkillDots.jsx    # 5-dot skill indicator
│       └── SectionDivider.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── hooks/
│   ├── useFadeIn.js         # IntersectionObserver fade-in
│   └── useContactForm.js    # EmailJS form state + submit
├── data/
│   ├── config.js            # Site metadata + EmailJS keys
│   ├── projects.js          # Project entries
│   ├── skills.js            # Skills with levels + categories
│   └── certifications.js   # Certifications list
├── App.jsx                  # Route definitions
├── main.jsx                 # React DOM entry
└── index.css                # Tailwind directives + base styles
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## EmailJS Setup

The contact form uses [EmailJS](https://emailjs.com) — free, no backend needed.

1. Sign up at https://emailjs.com
2. Add a **Gmail** email service → copy the **Service ID**
3. Create a template with these variables:
   - `{{from_name}}` — sender's name
   - `{{reply_to}}` — sender's email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
   - `{{to_name}}` — your name (pre-filled as "John")
4. Copy your **Template ID** and **Public Key**
5. Open `src/data/config.js` and replace:

```js
export const EMAILJS = {
  PUBLIC_KEY:  'YOUR_EMAILJS_PUBLIC_KEY',
  SERVICE_ID:  'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
}
```

## Personalisation Checklist

- [ ] `src/data/config.js` — update email, LinkedIn, GitHub, resume URL
- [ ] `src/data/projects.js` — add your real projects
- [ ] `src/data/skills.js` — adjust skill levels
- [ ] `src/data/certifications.js` — add your real certs with credential URLs
- [ ] `public/resume.pdf` — add your CV file
- [ ] EmailJS keys in `config.js`

## Deployment (Netlify)

```bash
npm run build
# drag the dist/ folder into Netlify, or connect your GitHub repo
```

Add a `_redirects` file in `/public`:
```
/*  /index.html  200
```
This ensures React Router works on Netlify page refreshes.
