const config = {
  title: "Juan Andrés Rojas | Software Engineer",
  description: {
    long: "Explore the portfolio of Juan Andrés Rojas, a software engineer specializing in backend development, database optimization, and AI-driven systems. Discover my latest work, including HotelBook Pro, predictive analysis projects, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Juan Andrés Rojas, a software engineer creating robust backend systems and intelligent applications.",
  },
  keywords: [
    "Juan Andrés Rojas",
    "portfolio",
    "software engineer",
    "backend developer",
    "Python",
    "Django",
    "Flask",
    "PostgreSQL",
    "web development",
    "AI-driven systems",
    "hotel management",
    "predictive analysis",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Juan Andrés Rojas",
  email: "juan.rojas7@utp.edu.co",
  site: "https://portfolio-rojas-09.vercel.app",

  // for github stars button
  githubUsername: "Rojas-09",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/JuanRoj70467071",
    linkedin: "https://www.linkedin.com/in/juan-andres-rojas-saavedra/",
    instagram: "https://www.instagram.com/andressaavedra09/",
    facebook: "",
    github: "https://github.com/Rojas-09",
  },
};
export { config };
