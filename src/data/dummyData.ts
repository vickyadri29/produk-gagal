// Import logo social media
import instagram from "/icons/instagram.svg";
import medium from "/icons/medium.svg";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
import email from "/icons/email.svg";

// Import image projects and skills icon
import badonorDarah from "/images/badonordarah.png";
import hrev from "/images/hrev.png";
import impactPalu from "/images/impact-palu.png";
import snResidence from "/images/sn-residence.png";

import logoBadonorDarah from "/icons/logo-badonordarah.svg";
import logoHrev from "/icons/logo-hrev.svg";
import logoimpactPalu from "/icons/logo-impact-palu.svg";
import logoSnResidence from "/icons/logo-sn-residence.svg";

import nextjs from "/icons/tech-stack/nextjs.svg";
import nextjsDark from "/icons/tech-stack/nextjs-dark.svg";
import react from "/icons/tech-stack/react.svg";
import typescript from "/icons/tech-stack/typescript.svg";
import javascript from "/icons/tech-stack/javascript.svg";
import redux from "/icons/tech-stack/redux.svg";
import graphql from "/icons/tech-stack/graphql.svg";
import nodejs from "/icons/tech-stack/nodejs.svg";
import tailwind from "/icons/tech-stack/tailwind.svg";
import antdesign from "/icons/tech-stack/antdesign.svg";
import mongodb from "/icons/tech-stack/mongodb.svg";
import postgresql from "/icons/tech-stack/postgresql.svg";
import firebase from "/icons/tech-stack/firebase.svg";
import vite from "/icons/tech-stack/vite.svg";
import express from "/icons/tech-stack/express.svg";

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
    logo: linkedin,
    navigate: "https://linkedin.com/in/vickyadrii",
  },
  {
    id: 1,
    logo: medium,
    navigate: "https://medium.com/@vickyadri29",
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

export const dataProjects: Projects[] = [
  {
    id: 0,
    img_url: badonorDarah,
    logo: logoBadonorDarah,
    type: "Medical Apps •",
    tech_stack_logo: [react, vite, tailwind, express],
  },
  {
    id: 1,
    img_url: hrev,
    logo: logoHrev,
    type: "Landing Page •",
    tech_stack_logo: [react, typescript, vite, tailwind],
  },
  {
    id: 2,
    img_url: impactPalu,
    logo: logoimpactPalu,
    type: "Company Profile •",
    tech_stack_logo: [react, nextjsDark, tailwind],
  },
  {
    id: 3,
    img_url: snResidence,
    logo: logoSnResidence,
    type: "Company Profile •",
    tech_stack_logo: [react, tailwind],
  },
];

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  redux,
  graphql,
  nodejs,
  tailwind,
  antdesign,
  mongodb,
  postgresql,
  firebase,
];
