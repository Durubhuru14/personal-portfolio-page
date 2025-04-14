# Personal Portfolio Page

A clean, modern portfolio website built with React and Tailwind CSS, featuring a responsive design with a unique claymorphism aesthetic.

## Screenshots
- Laptop (1280px >=)
![laptop preview](https://i.imgur.com/mCj0VNx.png)

- Tablet (768px >= && <= 1280px)
![tablet preview](https://i.imgur.com/4Urmk3U.png)

- Mobile (768px <)
![mobile preview](https://i.imgur.com/iVG99le.png)

## Features

- Responsive design that works on mobile, tablet, and desktop
- Claymorphism UI design with custom shadows
- Clean, minimalist layout
- Components for profile, bio, hobbies, and footer
- Tailwind CSS for styling

## Technologies Used

- React
- Tailwind CSS
- Vite

## Installation

- Clone the repository:
   ```bash
   git clone https://github.com/Durubhuru14/personal-portfolio-page.git
   ```

- Navigate to the project directory:
   ```bash
   cd portfolio
   ```

- Install dependencies:
   ```bash
   npm install
   ```

- Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
public/
└── logo.svg
src/
├── components/
│   ├── Bio.jsx
│   ├── Footer.jsx
│   ├── Hobbies.jsx
│   └── Profile.jsx
├── App.jsx
├── Data.jsx
├── App.css
├── main.jsx
assets/
  └── pfp.svg
```

## Easy Data Manipulation
All the data like (username, bio and hobbies) is stored in data.jsx allowing you to modify the content of page without interfering with page structure.

`Data.jsx`
```js
export const hobbies = [
  "Coding side projects 💻🔥",
  "Learning new tech 🚀📗",
  "Gaming / Music / Design 🎮🎧",
];

export const bio =
  "I'm 18 and self-taught—just me, my laptop, and a ton of code. No fancy degrees, just building things that work. Every bug fixed is a win, every project a step forward.";

export const username = "Durvesh More";
```

## Customization

To customize the colors and shadows, edit the theme variables in `App.css`:

```css
@theme {
  --clay-pink-shadow-body: 12px 12px 24px 0 rgb(193, 81, 140, 0.8),
    inset -12px -12px 24px rgba(244, 114, 182, 0.8), inset 6px 6px 12px #fabedd;
  --clay-pink-shadow-pfp: inset 6px 6px 12px 0 #f251a5,
    inset -12px -12px 24px 0 rgba(239, 70, 158, 0.92);
  --clay-pink-shadow-heading: 6px 6px 12px 0 rgba(206, 34, 124, 0.6),
    inset -12px -12px 24px 0 rgba(212, 53, 136, 0.9), inset 6px 6px 12px 0 #d74893;
}
```

## Figma Design
I changed some layout last minute for bigger screen tho :) \
[Figma Design](https://www.figma.com/design/WASEDxGOusc4T14j76dzte/Untitled?node-id=0-1&t=BYJ47YYndInLXF3b-1)

Created by [Durubhuru](https://github.com/Durubhuru14)