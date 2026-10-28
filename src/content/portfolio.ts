// Public copy from the owner's career history, project document, and confirmed dates.
// Current venture: disclose only that it is a hardware company.
export const profile = {
  name: "Kyumin Shim",
  title: "Founder & Engineer",
  description:
    "Kyumin Shim co-founded Entry Labs and Traw, acquired by Naver and Goodnotes. Explore his career, engineering projects, and things built by hand.",
  introduction:
    "I co-founded Entry Labs and Traw, acquired by Naver and Goodnotes. Then I led AI product development at Goodnotes. I still like building the hard parts myself.",
  current: "Now co-founding a hardware company.",
  githubUrl: "https://github.com/boolgom",
  linkedinUrl: "https://www.linkedin.com/in/kyumin/",
};
export const career = [
  {
    company: "Entry Labs",
    period: "2014–2018",
    role: "Co-founder & CTO",
    summary:
      "Built the core programming platform and led its adoption in South Korea’s public education system after the acquisition.",
    outcome: "Acquired by Naver · 2016",
    projectSlug: "entry",
  },
  {
    company: "Traw",
    period: "2020–2023",
    role: "Co-founder & CEO",
    summary:
      "Led product development, fundraising, and go-to-market for an AI-driven visual collaboration platform.",
    outcome: "Acquired by Goodnotes · 2023",
    projectSlug: "traw",
  },
  {
    company: "Goodnotes",
    period: "2023–2026",
    role: "Team Lead · AI Products",
    summary:
      "Joined after the acquisition of Traw and led AI product development.",
    projectSlug: "goodnotes-ai-meetings",
  },
  {
    company: "Stealth",
    period: "2026–present",
    role: "Co-founder & CEO",
    summary: "Building a hardware company.",
    current: true,
  },
];
export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};
export type Project = {
  slug: string;
  title: string;
  year: number;
  period: string;
  category: "work" | "home";
  discipline: string;
  role: string;
  summary: string;
  outcome?: string;
  tags: string[];
  cover?: ProjectImage;
  images: ProjectImage[];
  galleryNote?: string;
  sections: { title: string; body: string }[];
  links: { label: string; href: string }[];
  parentSlug?: string;
  related?: string[];
};
export const projects: Project[] = [
  {
    slug: "accelerometer-tracking",
    title: "Tracking motion with Wii controllers",
    year: 2009,
    period: "2009",
    category: "work",
    discipline: "Sensors / Physical computing",
    role: "Personal project",
    summary:
      "A position-tracking prototype using three accelerometers to estimate rotation.",
    outcome: "A working hardware prototype",
    tags: ["Accelerometers", "Motion tracking", "Nintendo Wii"],
    cover: {
      src: "/images/projects/accelerometer-tracking-01.png",
      width: 1600,
      height: 1200,
      alt: "Three Wii controllers mounted together on a prototype base.",
      caption: "The 2009 prototype, built with Nintendo Wii controllers.",
    },
    images: [
      {
        src: "/images/projects/accelerometer-tracking-01.png",
        width: 1600,
        height: 1200,
        alt: "Three Wii controllers mounted together on a prototype base.",
        caption: "The 2009 prototype, built with Nintendo Wii controllers.",
      },
    ],
    sections: [
      {
        title: "The experiment",
        body: "I wanted to track position using accelerometers found in everyday electronics. I used Nintendo Wii controllers to build a physical prototype.",
      },
      {
        title: "Working around the sensor",
        body: "The accelerometers did not directly provide the rotation information I needed. I developed an algorithm to infer rotation angles from three sensors and used it in the tracking system.",
      },
    ],
    links: [],
  },
  {
    slug: "ipad-ebook",
    title: "An e-book you could tear",
    year: 2011,
    period: "2011",
    category: "work",
    discipline: "Interaction design / iOS",
    role: "Solo developer",
    summary: "A paper-inspired iPad reading interface, built in five days.",
    outcome: "President’s Award · KAIST FDC",
    tags: ["iOS 4", "UIView", "Graphics filters"],
    cover: {
      src: "/images/projects/ipad-ebook-02.png",
      width: 291,
      height: 387,
      alt: "A page being peeled diagonally in an iPad reading interface.",
      caption: "A paper-inspired interaction for tearing out an excerpt.",
    },
    images: [
      {
        src: "/images/projects/ipad-ebook-01.png",
        width: 291,
        height: 388,
        alt: "An iPad e-book prototype with a paper page and sharing options.",
        caption: "Sharing an excerpt from the page.",
      },
      {
        src: "/images/projects/ipad-ebook-02.png",
        width: 291,
        height: 387,
        alt: "A page being peeled diagonally in an iPad reading interface.",
        caption: "A paper-inspired interaction for tearing out an excerpt.",
      },
      {
        src: "/images/projects/ipad-ebook-03.png",
        width: 290,
        height: 386,
        alt: "A virtual paper page curling in the iPad prototype.",
        caption: "Exploring the physical behavior of a page.",
      },
    ],
    galleryNote:
      "Original project images, preserved at their archival resolution.",
    sections: [
      {
        title: "Making digital pages feel physical",
        body: "For KAIST’s Freshman Design Course, I explored an e-book interface in which a reader could tear out a piece of a page, share it, or keep it in an archive. The interaction borrowed from the behavior of paper.",
      },
      {
        title: "Five days, one developer",
        body: "I built the prototype myself in approximately five days, using UIView and the graphics filters available in iOS 4.",
      },
      {
        title: "Recognition",
        body: "The project received the President’s Award in the 2011 Freshman Design Course at KAIST.",
      },
    ],
    links: [],
  },
  {
    slug: "little-mask",
    title: "Little Mask",
    year: 2012,
    period: "2012",
    category: "work",
    discipline: "Game development",
    role: "Developer · team of two",
    summary: "A vector-based mobile adventure built with C# and Microsoft XNA.",
    outcome: "6th worldwide in Round 2 · Imagine Cup",
    tags: ["C#", "Microsoft XNA", "Game architecture", "Windows Phone"],
    cover: {
      src: "/images/projects/little-mask-01.png",
      width: 292,
      height: 194,
      alt: "Little Mask running on a Windows Phone in landscape orientation.",
      caption: "The vector-based world running on a phone.",
    },
    images: [
      {
        src: "/images/projects/little-mask-01.png",
        width: 292,
        height: 194,
        alt: "Little Mask running on a Windows Phone in landscape orientation.",
        caption: "The vector-based world running on a phone.",
      },
      {
        src: "/images/projects/little-mask-02.png",
        width: 292,
        height: 192,
        alt: "Little Mask instructions showing tilt and touchscreen controls.",
        caption: "Movement through touch and device tilt.",
      },
    ],
    galleryNote:
      "Original project images, preserved at their archival resolution.",
    sections: [
      {
        title: "A world built for a phone",
        body: "A teammate and I built Little Mask over approximately three months, using C# and Microsoft XNA to create a vector-based mobile adventure game for Windows Phone.",
      },
      {
        title: "Two ways to structure a game",
        body: "I implemented both hierarchical and component-based architectures, using message-based communication between parts of the game.",
      },
      {
        title: "Recognition",
        body: "Little Mask placed 6th worldwide in Round 2 of the Microsoft Imagine Cup’s Windows Phone Game category.",
      },
    ],
    links: [],
  },
  {
    slug: "entry",
    title: "Entry Labs",
    year: 2014,
    period: "2014–2018",
    category: "work",
    discipline: "Company / Programming education",
    role: "Co-founder & CTO",
    summary:
      "From building a programming language to bringing it into classrooms across South Korea.",
    outcome: "Acquired by Naver · 2016",
    tags: [
      "Language implementation",
      "Canvas",
      "Hardware integration",
      "Public education",
    ],
    images: [],
    sections: [
      {
        title: "Building the core",
        body: "I co-founded Entry Labs and built the platform’s core engine myself: a real-time interpreter for visual block programs, a canvas-based graphics renderer, and hardware integrations. My role also included the initial product launch and go-to-market.",
      },
      {
        title: "Earning trust in education",
        body: "As a small startup, we faced a credibility barrier in public education. We supported roughly $15,000 of product-improvement research with professors at teacher-training universities. The professors independently published findings that helped establish Entry’s suitability for Korean education and supported its adoption in textbooks.",
      },
      {
        title: "Beyond the acquisition",
        body: "Naver acquired Entry Labs in 2016. After the acquisition, I led the work to bring the product into South Korea’s public education system and continued working on Entry through 2018.",
      },
      {
        title: "Still in classrooms",
        body: "Entry continues to be used for coding education across South Korea. Its official introduction describes adoption in elementary and middle-school textbooks nationwide.",
      },
    ],
    links: [
      {
        label: "Entry today",
        href: "https://playentry.org/about",
      },
    ],
    related: ["entry-python"],
  },
  {
    slug: "entry-python",
    title: "From blocks to Python",
    year: 2014,
    period: "During Entry · 2014–2018",
    category: "work",
    discipline: "Language tooling",
    role: "Core developer · Entry Labs",
    summary:
      "A bidirectional translator that helps students move from visual blocks to Python.",
    tags: ["AST", "Language translation", "Python", "Block programming"],
    images: [],
    sections: [
      {
        title: "Bridging two ways of programming",
        body: "I built a system to translate between Entry’s visual block programs and Python code, giving students a way to move from the block language they already knew into text-based programming.",
      },
      {
        title: "The implementation",
        body: "The translator used abstract syntax tree analysis to understand the structure of a program and convert it between representations. The work extended Entry’s language tooling beyond execution into code transformation.",
      },
      {
        title: "Part of a learning path",
        body: "The feature supported the transition after students had learned block programming, keeping the connection between the two forms of code visible.",
      },
    ],
    links: [
      {
        label: "Entry’s Python-mode FAQ",
        href: "https://playentry.org/faq/5959f695e9cabc11c9e9d394",
      },
    ],
    parentSlug: "entry",
    related: ["entry"],
  },
  {
    slug: "vision-secretary",
    title: "Vision-secretary",
    year: 2017,
    period: "2017",
    category: "work",
    discipline: "Computer vision / IoT",
    role: "Personal project",
    summary:
      "A room that responds to what you’re doing, using Kinect and connected devices.",
    tags: ["Kinect", "Pose recognition", "ASP.NET", "IoT"],
    cover: {
      src: "/images/projects/vision-secretary-01.png",
      width: 2192,
      height: 1172,
      alt: "A person in a room with a Kinect depth view and body-tracking skeleton overlaid in the corner.",
      caption: "The Vision-secretary demo, with live Kinect pose tracking.",
    },
    images: [
      {
        src: "/images/projects/vision-secretary-01.png",
        width: 2192,
        height: 1172,
        alt: "A person in a room with a Kinect depth view and body-tracking skeleton overlaid in the corner.",
        caption: "The Vision-secretary demo, with live Kinect pose tracking.",
      },
    ],
    sections: [
      {
        title: "Sense, interpret, respond",
        body: "I built a system that tracked a person’s pose in real time, inferred their activity, and used that information to control IoT devices. Kinect provided the sensing, with the project built on ASP.NET.",
      },
      {
        title: "The constraint that mattered",
        body: "I explored commercializing the idea. To address privacy concerns, I tried moving pose detection onto the device, but the hardware available at the time could not provide the performance the approach needed.",
      },
      {
        title: "A public experiment",
        body: "I shared a demonstration on Facebook, where it received a strong response. The project connected software to human behavior and the physical environment.",
      },
    ],
    links: [
      {
        label: "Watch the original demo",
        href: "https://www.facebook.com/share/v/19UwU1vkCC/",
      },
    ],
  },
  {
    slug: "commerce-automation",
    title: "Order & logistics admin software",
    year: 2019,
    period: "2019",
    category: "work",
    discipline: "Commerce / Admin software",
    role: "Software development",
    summary:
      "Admin software for processing orders and managing shipping across multiple sales channels and logistics platforms.",
    tags: ["React", "react-jsonschema-form", "Order processing", "Logistics automation"],
    images: [],
    sections: [
      {
        title: "An admin system for orders and logistics",
        body: "At a commerce company, I built admin software for staff to process orders and manage fulfillment across multiple sales channels and logistics platforms. Each platform had different data requirements and processing rules, which made automation difficult.",
      },
      {
        title: "Interfaces that adapt to the work",
        body: "I used react-jsonschema-form to generate the admin views dynamically for different products and workflows, including telemarketing payment flows. I also implemented heuristic shipping logic to automate order and logistics processing across the connected systems.",
      },
      {
        title: "Business context",
        body: "The automation project helped form the basis for the company’s Series A fundraising. I later left the company, which has since closed.",
      },
    ],
    links: [],
  },
  {
    slug: "traw",
    title: "Traw",
    year: 2020,
    period: "2020–2023",
    category: "work",
    discipline: "Company / Visual collaboration",
    role: "Co-founder & CEO",
    summary:
      "A shared canvas, conversation, and meeting notes in one workspace.",
    outcome: "Acquired by Goodnotes · 2023",
    tags: ["Three.js", "WebGL", "Realtime collaboration", "AI products"],
    cover: {
      src: "/images/projects/traw-02.jpg",
      width: 2048,
      height: 1345,
      alt: "Traw on a tablet with a shared canvas, drawing tools, and meeting notes.",
      caption: "The collaborative canvas and conversation in one workspace.",
    },
    images: [
      {
        src: "/images/projects/traw-02.jpg",
        width: 2048,
        height: 1345,
        alt: "Traw on a tablet with a shared canvas, drawing tools, and meeting notes.",
        caption: "The collaborative canvas and conversation in one workspace.",
      },
      {
        src: "/images/projects/traw-01.png",
        width: 946,
        height: 2048,
        alt: "Traw on a phone with a shared drawing and conversation.",
        caption: "A shared canvas on mobile.",
      },
    ],
    sections: [
      {
        title: "Building the company",
        body: "I co-founded Traw, an AI-driven visual collaboration platform. As CEO, I led core product development, AI features, the search for product–market fit, fundraising, and go-to-market.",
      },
      {
        title: "A canvas built for performance",
        body: "I built the collaborative canvas around Three.js and WebGL to address rendering performance. Canvas content was stored and rendered as vector data, making it easier to edit and analyze.",
      },
      {
        title: "From conversation to notes",
        body: "The product combined a real-time shared canvas with audio calls and transcription. People could meet around the same visual workspace and generate meeting notes from the conversation.",
      },
      {
        title: "The next chapter",
        body: "Goodnotes acquired Traw in 2023. The standalone service was subsequently discontinued, and I joined Goodnotes, where the experience and technology informed further work on AI meeting tools.",
      },
    ],
    links: [],
    related: ["goodnotes-ai-meetings"],
  },
  {
    slug: "goodnotes-ai-meetings",
    title: "AI for meetings at Goodnotes",
    year: 2023,
    period: "2023–2026",
    category: "work",
    discipline: "AI products / Meeting tools",
    role: "Team Lead · AI Products",
    summary:
      "Connecting handwritten notes, recorded conversations, and live summaries.",
    tags: [
      "AI note-taking",
      "Live summaries",
      "Audio synchronization",
      "On-device transcription",
    ],
    images: [],
    sections: [
      {
        title: "From Traw to Goodnotes",
        body: "I joined Goodnotes after its acquisition of Traw in 2023 and led AI product development as Team Lead for AI Products.",
      },
      {
        title: "Notes that stay connected to the conversation",
        body: "Building on the experience from Traw, I led work on meeting tools that synchronize notes with audio and provide live summaries so users can follow the conversation while a meeting is still happening.",
      },
      {
        title: "Working on the device",
        body: "The product work also included iOS-based on-device transcription, bringing speech recognition into the note-taking experience.",
      },
    ],
    links: [
      {
        label: "Goodnotes meeting notes",
        href: "https://www.goodnotes.com/features/meeting-notes",
      },
    ],
    related: ["traw"],
  },
  {
    slug: "rect",
    title: "Rect.work",
    year: 2026,
    period: "2026",
    category: "work",
    discipline: "AI agents / Interfaces",
    role: "Agent & interface development",
    summary: "A work agent that turns tasks into visual, usable results.",
    tags: ["AI agents", "Generated interfaces", "Visual artifacts"],
    images: [],
    sections: [
      {
        title: "An interface beyond the prompt",
        body: "I built a work agent for people who are not comfortable with command-line tools or writing prompts. The experience presents visual artifacts in real time so users can work with the result directly.",
      },
      {
        title: "The underlying system",
        body: "I developed the agent and view-generation systems behind the experience, connecting the work being performed to the interface presented to the user.",
      },
    ],
    links: [
      {
        label: "Visit Rect.work",
        href: "https://rect.work",
      },
    ],
  },
  {
    slug: "aluminum-tv",
    title: "An aluminum-frame TV",
    year: 0,
    period: "Personal build",
    category: "home",
    discipline: "Furniture × electronics",
    role: "Design & fabrication",
    summary:
      "Recreating the LG Objet TV Collection design with aluminum profiles.",
    tags: ["Aluminum profiles", "Furniture", "Fabrication"],
    cover: {
      src: "/images/projects/aluminum-tv-02.jpg",
      width: 1536,
      height: 2048,
      alt: "A television and textured lower panel integrated into a tall frame.",
      caption: "The finished build at home.",
    },
    images: [
      {
        src: "/images/projects/aluminum-tv-02.jpg",
        width: 1536,
        height: 2048,
        alt: "A television and textured lower panel integrated into a tall frame.",
        caption: "The finished build at home.",
      },
      {
        src: "/images/projects/aluminum-tv-01.jpg",
        width: 1536,
        height: 2048,
        alt: "An aluminum TV frame being assembled on a wooden floor.",
        caption: "Building the underlying aluminum frame.",
      },
    ],
    sections: [
      {
        title: "A television as part of the room",
        body: "I wanted to recreate the furniture-like presence of the LG Objet TV Collection at a lower cost. I designed and built a frame using aluminum profiles and integrated it with a television for use at home.",
      },
      {
        title: "From the frame to the finished object",
        body: "The structure was assembled from aluminum profiles, then finished with a textured lower panel. The photographs show the frame during construction and the completed build in the living room.",
      },
    ],
    links: [],
  },
  {
    slug: "korean-bbq-table",
    title: "A K-BBQ table for home",
    year: 0,
    period: "Personal build",
    category: "home",
    discipline: "Furniture × ventilation",
    role: "Design & integration",
    summary:
      "An IKEA dining table with an integrated grill and ducted downdraft ventilation.",
    tags: ["IKEA modification", "Grill integration", "Downdraft ventilation"],
    cover: {
      src: "/images/projects/korean-bbq-table-01.jpg",
      width: 1536,
      height: 2048,
      alt: "A stainless-steel Korean grill set into a wooden tabletop.",
      caption: "The grill integrated into the dining table.",
    },
    images: [
      {
        src: "/images/projects/korean-bbq-table-01.jpg",
        width: 1536,
        height: 2048,
        alt: "A stainless-steel Korean grill set into a wooden tabletop.",
        caption: "The grill integrated into the dining table.",
      },
      {
        src: "/images/projects/korean-bbq-table-02.jpg",
        width: 1536,
        height: 2048,
        alt: "The grill unit exposed during installation.",
        caption: "Working on the grill assembly.",
      },
    ],
    sections: [
      {
        title: "Starting with a spatial constraint",
        body: "An overhead extraction hood did not fit the dining area at home. I adapted an IKEA wooden dining table to incorporate a Korean grill and a ventilation system that draws cooking fumes downward.",
      },
      {
        title: "Integrating the system",
        body: "The build brought together the tabletop, grill unit, downdraft extraction, and ducting. It was a personal project in adapting existing components to a specific space and use.",
      },
    ],
    links: [],
  },
  {
    slug: "framed-display",
    title: "A display, framed",
    year: 0,
    period: "Personal build",
    category: "home",
    discipline: "Woodwork × electronics",
    role: "Design & fabrication",
    summary:
      "An office monitor turned into a wood-framed, wall-mounted display.",
    tags: ["Woodwork", "Monitor modification", "Chromecast"],
    cover: {
      src: "/images/projects/framed-display-01.jpg",
      width: 2048,
      height: 1536,
      alt: "A wood-framed monitor mounted above a dining table.",
      caption: "The finished display in the dining area.",
    },
    images: [
      {
        src: "/images/projects/framed-display-01.jpg",
        width: 2048,
        height: 1536,
        alt: "A wood-framed monitor mounted above a dining table.",
        caption: "The finished display in the dining area.",
      },
      {
        src: "/images/projects/framed-display-02.jpg",
        width: 2048,
        height: 1536,
        alt: "The back of a monitor inside a wooden frame, with tools and a Chromecast.",
        caption: "Replacing the monitor housing with a wooden frame.",
      },
    ],
    sections: [
      {
        title: "Giving a monitor a different role",
        body: "Inspired by the idea of a TV that looks like a picture frame, I removed an office monitor’s original housing and replaced it with a wooden frame. A Chromecast turned it into a wall-mounted display for the dining area.",
      },
      {
        title: "Working on the details",
        body: "To keep the installation visually clean, I used the mounting wires as part of the power connection. The build photographs show the monitor, wooden frame, and electronics during assembly.",
      },
    ],
    links: [],
  },
];
export const workProjects = projects
  .filter((p) => p.category === "work")
  .sort((a, b) => a.year - b.year);
export const homeProjects = projects.filter((p) => p.category === "home");
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
