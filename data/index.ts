export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/ResumeShivangi.pdf" }, // ✅ Add this line
];


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on my Backend skills",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TrekUp - A Travel and Tourism website",
    des:"TrekUp is a smart travel platform for planning trips, booking stays, translating languages, and exploring cultures — all in one place.",
    img: "Adventure.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "RideShield - Smart Helmet System",
    des: "RideShield is a smart helmet system that detects accidents and sends real-time emergency alerts using sensors, GPS, and connectivity.",
    img: "helmet.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "SkyGlimpse - Weather App",
    des: "SkyGlimpse is a sleek weather app that provides real-time forecasts, alerts, and climate insights with a clean, user-friendly interface.",
    img: "weather.avif",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Sajawaat House - Home Décor and Event Styling",
    des: "Sajawaat House offers elegant home décor and event styling essentials, blending tradition with modern aesthetics.",
    img: "Sajawaat.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Shivangi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Pankaj Kumar",
    title: "Director of Sajawaat House",
  },
  {
    quote:
"Shivangi thrives in fast-paced environments. She quickly understands project needs, adapts to shifting priorities, and delivers efficient, elegant solutions. Her reliability and calm under pressure make her a perfect fit for startups and agile teams.", 
name: "Yash Goel",
   title: "Director of MLSA",
  },
  {
    quote:
"What sets Shivangi apart is her eagerness to learn and innovate. She doesn't just deliver what’s asked—she thinks beyond, suggesting improvements and new ideas that truly add value. Her growth mindset and passion for building meaningful tech make her an excellent teammate and future leader.",  
name: "Pankaj Kumar",  title: "Director of Sajawaat House",
  },
  {
    quote:
"Shivangi brings a rare blend of technical expertise and a strong collaborative spirit. She takes full ownership of her work, communicates with clarity, and always keeps the end-user in mind. Her attention to detail, combined with a creative approach to problem-solving, makes her a standout contributor to any project.",    name: "Aditiya Upadhaya",
    title: "Director of Infosys Springboard",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Wevb Developer Intern",
    desc: "Designed and maintained a website for a startup.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Working on Backend based projects",
    desc: "I believe in enhancing my knowledge by diving deep in backend tech's through projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Shivangisriva"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/shivangisr14570"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/shivangi-srivastava-a8b1a1296/"
  },
];
