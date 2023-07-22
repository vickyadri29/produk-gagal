import instagram from "/icons/instagram.svg";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
import email from "/icons/email.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: instagram,
    navigate: "https://instagram.com/vickyadrii",
  },
  {
    id: 1,
    logo: linkedin,
    navigate: "https://linkedin.com/in/vickyadrii",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/vickyadri29",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:vickyadri103@gmail.com",
  },
];
