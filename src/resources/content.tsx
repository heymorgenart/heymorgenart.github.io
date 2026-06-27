import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Daria",
  lastName: "Morgen",
  name: `Daria Morgen`,
  role: "UI/UX Designer, Illustrator",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Europe/Warsaw", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Polish", "Ukrainian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/daria_morgen",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/daria-morgen-b7a36aba/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:heymorgen.art@gmail.com",
  },
  {
    name: "Download CV",
    icon: "Download",
    link: "mailto:heymorgen.art@gmail.com",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `From flows to pixels — I refine the interplay between art, interfaces & experience`,
  headline: <>From flows to pixels — I refine the interplay between art, interfaces & experience</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        ONCE UI
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a UI/UX designer in the Video Game industry. I have a strong design, painting, and
        visual graphics background. I studied biology and it always fascinated me how the human
        brain interacts with art & computer technologies. I love team work and multicultural team
        experiences.{" "}
        <p>
          My skills in UI, UX and digital art makes me a great team player. I am passionate about
          storytelling and love to create original visual universes for people to dive in. When I am
          not sketching, I am working on humanitarian projects and volunteering.{" "}
        </p>
        <p>I am eligible to work everywhere within the European Union + Ukraine</p>
        <h2>Internet kid</h2>
        <p>
          At 5 years old, I taught myself how to create custom maps inside Map Editor so I could
          build worlds for my favourite video game: HoMM 3. Ever since then, I've been chasing the
          sense of delight I felt during my earliest experiences with video games.
        </p>
        <p></p>
        <h2>Tools</h2>
        <p>
          Being comfortable with whatever platform the work calls for, old or new, is part of the
          craft. For years, the tools have changed completely, more than once. That said, the
          current lineup includes Figma, Adobe CC, Unity, Miro, Jira, Blender, Git, Procreate,
          Affinity, Cinema 4D, AI systems.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wooga",
        timeframe: "2023 - Present",
        role: "UI Designer",
        achievements: [
          <>Supported decision-making through analysis of player feedback.</>,
          <>Maintained the consistency and delivered a variety of assets for live-ops features. </>,
          <>
            Prepared and implemented scenes in Unity, handling layout setup, transitions, and
            animations{" "}
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Parana",
        timeframe: "2022 - 2023",
        role: "UI/UX Designer",
        achievements: [
          <>Influence on overall UI art styles and creative direction through my work.</>,
          <>Creating UI artwork within defined look & feel</>,
          <>Maintaining Libraries for future development</>,
          <>
            Breaking down features into defined structures, components, and processes that meet the
            technical, aesthetic, and functional requirements of the game vision
          </>,
        ],
        images: [],
      },
      {
        company: "Ilyon",
        timeframe: "2019 - 2022",
        role: "UI Designer",
        achievements: [
          <>Influence on overall UI art styles and creative direction through my work.</>,
          <>Preparing mock-ups and libraries for devs, exporting technically optimized asset</>,
          <>
            Visualising guidelines for interface animations that support the player during the
            playthrough
          </>,
          <>
            Breaking down features into defined structures, components, and processes that meet the
            technical, aesthetic, and functional requirements of the game's vision
          </>,
        ],
      },
      {
        company: "Wow-How Studio",
        timeframe: "2016 - 2022",
        role: "UI/UX Designer",
        achievements: [
          <>Creating illustrations, storyboards for 2D/3D animated scenes</>,
          <>Designing and drawing icons and UI elements for mobile/PC games</>,
          <>
            Branding and graphic design for different clients' projects, with guidance from the
            first sketch to the print stage
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UMCS",
        description: <>Master of Arts, MA Graphic Arts</>,
        addon: (
          <>
            I've been granted the Full Tuition Waiver Scholarship at Maria Curie Skłodowska
            University for artistic skills and social activities.
          </>
        ),
      },
      {
        name: "H.S. Skovoroda KNPU",
        description: <>Bachelor of Fine Arts, BFA Fine Arts &amp; Graphic Design</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
