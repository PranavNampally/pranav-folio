import { Icons } from "@/components/icons";
import { HomeIcon, DownloadIcon } from "lucide-react";

export const DATA = {
  name: "Pranav Nampally",
  initials: "PN",
  url: "https://pranavnampally.github.io/",
  location: "Bangalore, IND",
  locationLink: "https://www.google.co.in/maps/place/Bengaluru",
  description: `Software Developer skilled in React.js, Next.js, and TypeScript, with experience in creating high-impact web applications. Passionate about contributing to innovative projects that emphasize usability and scalability.`,
  summary:
    `Hey!, I'm a frontend web developer currently working at ZEE Limited from past ${new Date().getFullYear() - 2023} years and have contributed to many innovative projects at my company. In the past, [I've completed my bachelor's in computer science and engineering from IIT Dharwad](/#education), interned at tech companies in Bangalore, and [competed in SIH in my final year](/#hackathons).`,
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Javascript",
    'Redux',
    'Zustand',
    "Node.js",
    "Python",
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind',
    'Google Ads',
    'Google Analytics',
    'Mixpanel'
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/19OM9NS_ey6TjIk9S3JHdvMnA2gBOPy3U/view?usp=drivesdk", icon: DownloadIcon, label: "Resume" },
  ],
  contact: {
    email: "pranavnampally.work@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PranavNampally",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranav-nampally/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pranavnampally.work@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Zee Entertainment Enterprises Limited",
      href: "https://www.zee.com/",
      badges: [],
      location: "Bangalore",
      title: "Software Development Engineer",
      logoUrl: "/zee.svg",
      start: "June 2023",
      end: "Present",
      description:
        "At ZEE, I delivered impactful features and solutions that enhanced user engagement and platform performance. I successfully launched the WatchParty feature on ZEE5, enabling live collective viewing during major events, and developed the interactive &TV Tambola Game using Server-Sent Events (SSE), which increased user engagement on ZEE platforms by 15%. I also built multiple high-performance websites for the Linear team using React.js and Next.js, improving platform speed and reliability. Additionally, I deployed interactive features such as Reactions, Quizzes, and Live Score Analytics with zero post-release issues. By integrating Google Analytics and Ads, I boosted ad revenue for a news project, while achieving 90% test coverage for critical components using Jest to ensure robust and reliable performance.",
    },
    {
      company: "Borneo",
      badges: [],
      href: "https://borneo.io/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/borneo.png",
      start: "August 2022",
      end: "December 2022",
      description:
        "During my tenure at Borneo, I worked on diverse projects spanning frontend development, security detection, and cloud vulnerability analysis. I explored security features in cloud platforms like AWS, developed ML algorithms for PII detection, and built a chatbot integrated with Slack for cost anomaly detection. Additionally, I created a web application for file similarity detection using data fingerprinting and contributed to testing software products to enhance user experience. My work involved leveraging tools like Tines, AWS, and React.js to deliver robust and innovative solutions.",
    },
    {
      company: "Emids",
      href: "https://www.emids.com/",
      badges: [],
      location: "Remote",
      title: "Data Engineer Intern",
      logoUrl: "/emids.png",
      start: "May 2022",
      end: "July 2022",
      description:
        "At Emids, I focused on integrating EHR systems with cloud infrastructure, exploring various HL7 and FHIR parsers such as HAPI FHIR, HAPI HL7v2, Altova Mapforce, and Mirth Connect. I successfully integrated these parser tools with CLI-based input links to develop a client-ready demo product, showcasing seamless data handling and interoperability in healthcare applications.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Dharwad",
      href: "https://www.iitdh.ac.in/",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      logoUrl: "https://cims.iitdh.ac.in/default/IITDH_logo.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Guru Junior College, Hyderabad",
      href: "https://tgbie.cgg.gov.in/home.do",
      degree: "Intermediate (11th, 12th)",
      logoUrl: "/tsbie.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Kendriya Vidyalaya No.1 Uppal, Hyderabad",
      href: "https://no1uppal.kvs.ac.in/",
      degree: "SSC (10th)",
      logoUrl: "/kvs.svg",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "WatchFlix",
      href: "https://watch-flix-pranav-n.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "JavaScript",
        "Material UI",
        "Recoil",
        "RTL"
      ],
      links: [
        {
          type: "Website",
          href: "https://watch-flix-pranav-n.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PranavNampally/WatchFlix-PranavN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/watchflix.png",
      video:
        "",
    },

  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "August 2022",
      location: "Kochi, Kerala, IND",
      description:
        "Developed a web application which helps detect plagiarism in Research papers submitted to the repo of Ministry of Ayush.",
      icon: "public",
      image:
        "/sih.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.sih.gov.in/",
        },
        ],
    },
  ],
} as const;
