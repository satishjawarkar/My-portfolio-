# 🚀 Satish Jawarkar — Portfolio

A modern, responsive, dark-themed portfolio website built with React.

---

## 📁 File Structure

```
src/
├── App.jsx                          ← Root component (imports all sections)
├── App.css                          ← ALL styles (no external CSS framework needed)
└── components/
    ├── Navbar.jsx                   ← Sticky navbar with scroll spy & mobile menu
    ├── HeroSection.jsx              ← Animated hero with floating avatar & badges
    ├── AboutSection.jsx             ← About with stats, info, and download resume
    ├── SkillsSection.jsx            ← Filterable skills grid (Frontend/Backend/Tools)
    ├── ExperienceSection.jsx        ← Timeline of work experience
    ├── ProjectsSection.jsx          ← Filterable project cards with overlays
    ├── TestimonialsSection.jsx      ← Client testimonials
    ├── ContactSection.jsx           ← WhatsApp contact form with budget selector
    └── Footer.jsx                   ← 4-column footer with social links
```

---

## ⚙️ Setup

```bash
# 1. Copy all files into your existing Vite/React project src folder
# 2. Install dependencies if not already installed:
npm install

# 3. Run dev server
npm run dev
```

---

## 🛠️ Customization Checklist

### Personal Info

- [ ] Replace `SJ` placeholder text with your real photo in `HeroSection.jsx` and `AboutSection.jsx`
- [ ] Update `WHATSAPP_NUMBER` in `ContactSection.jsx` → e.g. `"919876543210"`
- [ ] Update email address in `ContactSection.jsx` and `Footer.jsx`
- [ ] Update Twitter URL in `ContactSection.jsx` and `Footer.jsx`
- [ ] Update resume link — place your PDF at `/public/resume.pdf`

### Projects

- Open `ProjectsSection.jsx` → edit the `PROJECTS` array
- To add a real screenshot image, add the image to `src/assets/` and use:
  ```jsx
  // In proj-thumb, replace placeholder with:
  <img src={yourImg} alt={p.title} />
  ```

### Experience

- Open `ExperienceSection.jsx` → edit the `EXPERIENCE` array
- Update company names, dates, and descriptions

### Skills

- Open `SkillsSection.jsx` → edit the `ALL_SKILLS` array

### Testimonials

- Open `TestimonialsSection.jsx` → edit the `TESTIMONIALS` array

---

## 🎨 Theme Colors

Edit CSS variables in `App.css` (`:root` block):

```css
--primary: #4f46e5; /* Indigo */
--purple: #7c3aed; /* Purple */
--pink: #ec4899; /* Pink */
--accent: #facc15; /* Yellow */
--accent2: #06b6d4; /* Cyan */
--green: #22c55e; /* Green (available badge) */
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout                               |
| ---------- | ------------------------------------ |
| < 560px    | Single column everything             |
| < 768px    | Stacked sections, 2-col skills       |
| < 900px    | Hero stacks vertically, about stacks |
| < 960px    | Contact & footer stack               |
| 960px+     | Full desktop layout                  |

---

## ✅ Sections Included

1. **Navbar** — Fixed, scroll-aware, mobile hamburger menu, active link highlight
2. **Hero** — Floating animated avatar, role, stats, CTA buttons, scroll hint
3. **About** — Photo frame, experience card, quick stats, info list, resume download
4. **Skills** — Tabbed filter (All/Frontend/Backend/Database/Tools), icon cards
5. **Experience** — Vertical timeline with current job indicator
6. **Projects** — Filter (All/Frontend/Fullstack), hover overlay with links, featured badge
7. **Testimonials** — Client review cards with star ratings
8. **Contact** — WhatsApp form with name/email/subject/budget/message, social icons
9. **Footer** — 4-column layout: brand + quick links + services + contact

---

## 📦 Dependencies Used

- React (already in your project)
- Google Fonts: Poppins (loaded via CSS import)
- No extra npm packages required!

> Note: If you had `framer-motion`, `@mui/material`, `react-bootstrap` in your old code,
> those are no longer needed for this design — everything is pure CSS + React state.
