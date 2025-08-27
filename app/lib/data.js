import { icons } from "./icons";

export const personalDetails = {
  name: "Satyam Baranwal",
  title: " Software Engineer",
  description: ` Full Stack Developer with 3.5+ years of experience in building
            scalable web applications using the MERN stack. Specialized in IoT
            integrations, real-time data processing with MQTT, and developing
            SaaS platforms. Proven track record of delivering high-quality
            solutions in fast-paced environments. Open to opportunities in
            Remote or Hybrid roles.”`,
};

export const skills = [
  { name: "AI (ChatGpt , Github Copilot , Cursor Agentic AI)", level: 80 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "Javascript", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 60 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "JQuery", level: 90 },
  { name: "REST API", level: 90 },
  { name: "MQTT", level: 90 },
  { name: "Git", level: 90 },
  { name: "Docker", level: 70 },
  { name: "AWS (EC2, S3 bucket, Load Balancer)", level: 60 },
  { name: "CI-CD Pipeline (Vercel, GitLab with Agile Method)", level: 70 },
  { name: "Python", level: 70 },
  { name: "Django", level: 70 },
];

export const interests = ["Chess", "Video Game", "Carrom"];

export const experiences = [
  {
    company: "Waari Water Pvt. Ltd (Nov 2022 - Present)",
    position: "Full Stack MERN Developer",
    desc: "I have completed many projects...!",
  },
  {
    company: "Aavrti Technology (April 2022 - October 2022)",
    position: "React Front-End Developer",
    desc: "I have completed many projects...!",
  },
];

export const educations = [
  {
    course: "Bachelor of Technology (B.Tech)",
    institute: "M.G. Institute of Management and Technology (AKTU) (2018-2022)",
  },
  {
    course: "Intermediate",
    institute: "Akhilesh Inter College (2017-2018)",
  },
  {
    course: "Secondary School Certificate (SSC)",
    institute: "Akhilesh Inter College (2015-2016)",
  },
];

export const projects = [
  {
    title: "Cremen-Engineers E-Commerce Website (Python & Django Based)",
    description: "Real-time e-commerce website for blogs upload , game templates upload , courses sale & for my personal use.",
    image:icons.resonent,
    link: "#", // Replace with your project URL
  },
  {
    title: "LMS - Loom Monitoring System",
    description: "Real-time monitoring system for looms using IoT and MQTT.",
    image:icons.lms,
    link: "https://loomsmonitor.resonent.com/", // Replace with your project URL
  },
  {
    title: "WDS - Weaving Data-Logger System",
    description: "Real-time monitoring system for looms using IoT and MQTT.",
    image:icons.wds,
    link: "https://loomsmonitor.resonent.com/", // Replace with your project URL
  },
  {
    title: "NCS - Nurse Calling System",
    description: "BLE-based emergency and nurse call management for hospitals.",
    image:icons.ncs,
    link: "#", // Replace with your project URL
  },
  {
    title: "ELS - Electronic Label System",
    description:
      "Digital tag management for stock and material flow in stores.",
    image:icons.els,
    link: "#", // Replace with your project URL
  },
  {
    title: "QMS - Queue Management System",
    description:
      "Token-based queue system with web dashboard and kiosk support.",
    image:icons.qms,
    link: "https://github.com/yourusername/qms-project", // Replace with your project URL
  },
  {
    title: "Resonent -Company Landing Page",
    description: "I have created an amazing lanading page for my company.",
    image:icons.resonent,
    link: "https://resonent.com", // Replace with your project URL
  },
  {
    title: "Riser -BackEnd & Desktop Application",
    description:
      "This is a dashboard system which is managed big coolers and heat exhausted system.",
    image:icons.riser,
    link: "#", // Replace with your project URL
  },
  {
    title: "My Portfolio Website -  Based on Next js",
    description:
      "This is a portfolio website in Next js technology with SEO (Personal Project).",
    image:icons.portfolio,
    link: "#", // Replace with your project URL
  },
].reverse();

export const blogs = [
  {
    slug: "mastering-mern-stack",
    title: "Mastering the MERN Stack in 2021",
    description:
      "A complete guide to mastering MongoDB, Express.js, React, and Node.js. Covers setup, architecture, deployment, and real-world tips for scaling full-stack apps in production.",
    image: icons.about_us,
    date: "April 10, 2021",
    time: "10:30 AM",
  },
  {
    slug: "python-django-project",
    title: "Building Scalable Web Apps with Python & Django",
    description:
      "Learn how to develop robust and secure web applications using Python and Django. Covers models, views, templates, REST APIs, and deploying to production environments.",
    image: icons.python,
    date: "Nov 16, 2021",
    time: "9:30 AM",
  },
  {
    slug: "deploying-with-docker",
    title: "Deploying Full Stack Apps with Docker and CI/CD",
    description:
      "Learn how to containerize your MERN stack application using Docker and set up efficient CI/CD pipelines with GitHub Actions, Docker Hub, and deployment to AWS or DigitalOcean.",
    image: icons.docker,
    date: "July 8, 2022",
    time: "3:45 PM",
  },
  {
    slug: "mqtt-in-iot-dashboard",
    title: "Integrating MQTT in IoT Web Dashboards",
    description:
      "Explore how MQTT works for real-time IoT communication and how to integrate it in Node.js servers and React dashboards. Includes live sensor data handling and device tracking tips.",
    image: icons.iot,
    date: "November 5, 2022",
    time: "8:00 AM",
  },
  {
    slug: "vercel-deployment-guide",
    title: "Deploying React & Next.js Apps on Vercel",
    description:
      "Step-by-step guide to deploying modern React and Next.js applications on Vercel. Learn about serverless functions, environment variables, and best practices for smooth deployment.",
    image: icons.deploying,
    date: "June 12, 2023",
    time: "2:15 PM",
  },
  {
    slug: "aws-cloud-learning-path",
    title: "AWS Cloud Learning Path for Developers",
    description:
      "Comprehensive roadmap to learning AWS services including EC2, S3, Lambda, and CloudFront. Perfect for beginners looking to build and deploy scalable cloud applications.",
    image: icons.aws_cloud,
    date: "December 14, 2023",
    time: "11:00 AM",
  },

  {
    slug: "ai-coding-improvement",
    title: "AI-Powered Coding Improvements in 2025",
    description:
      "Discover how AI tools like GitHub Copilot, ChatGPT, and automated code review systems are transforming software development, boosting productivity, and reducing bugs in codebases.",
    image: icons.ai,
    date: "March 1, 2025",
    time: "1:00 PM",
  },
].reverse();

export const socialUrls = {
  linkedin: "https://www.linkedin.com/in/er-satyam-baranwal-5b3a91209/",
  youtube: "https://www.youtube.com/c/yourchannel",
  gmail: "mailto:satyamsoftwareengineer998413@gmail.com",
  github: "https://github.com/Satyam998413",
  contactNumber: "tel:+918948998413",
  whatsUp: "https://wa.me/918948998413",
};
