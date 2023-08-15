import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    sql,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Front End Design",
        icon: backend,
    },
    {
        title: "UI Design",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "MySQL",
        icon: sql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Designer",
        company_name: "Freelance",
        icon: backend,
        iconBg: "#383E56",
        date: "January 2020 - Present",
        points: [
            "Developing and maintaining web applications clients needs.",
            "Collaborating with clients to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in design reviews implimenting regular updates.",
        ],
    },
    {
        title: "Full-Stack Web Developer Certificaiton",
        company_name: "University of Washington",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "June 2023",
        points: [
            "Develop a responsive,  user-friendly, intuitive, and secure full-stack website from with interactive features to cross-browser optimize traffic and user experience  using React, Node.js, and Express.",
            "Collaborate on a self-managed team of 4 developers to create high-quality products.",
            "Implemented automated testing using Jest frameworks for a REST website application",
            "Developed and deployed a fully-functioning web application using React, Node.js, and MySQL in 10 days.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            `I have the utmost confidence in Alivia’s ability to excel in the field of web design 
and UX/ UI. Her passion, technical proficiency, and dedication make her an ideal candidate for any 
position.I wholeheartedly recommend Alivia and believe she will contribute significantly to the 
success of your organization.`,
        name: "Eli Wood",
        designation: "Web Development Instructional Specialist",
        company: "University of Washington",
        image: "https://media.licdn.com/dms/image/D5635AQEkxAdauaPuWA/profile-framedphoto-shrink_200_200/0/1673399550731?e=1692680400&v=beta&t=msKfpUj2GT45V4zBNgkxs854h5WU1tHd8aN89u7ik2A",
    },
    {
        testimonial:
            "...",
        name: "Imani Glass",
        designation: "CEO",
        company: "One by Faith",
        image: "https://images.squarespace-cdn.com/content/v1/617367c002d4700da6c49b60/bbcdcb37-f9f8-4437-95e0-87b0b38bae3e/IMG_5958.jpg?format=1000w",
    },
    {
        testimonial:
            "...",
        name: "Rubina Postma",
        designation: "Artist",
        company: "Rubina Postma Fine Arts",
        image: "https://media.licdn.com/dms/image/D5603AQGMqPkmmIKPZQ/profile-displayphoto-shrink_200_200/0/1686009019470?e=1697673600&v=beta&t=WxRjhNx-yX771hFyFuKlMY1SXYX_k-2_AmUTTyM9mog",
    },
];

const projects = [
    {
        name: "One By Faith",
        description:
            "Web-based platform that allows users to search, book, and manage individual spiritual services online and in person as well as group events, providing a convenient and efficient solution to manage sscheduling and take payment.",
        tags: [
            {
                name: "Square",
                color: "blue-text-gradient",
            },
            {
                name: "AcuityScheduling",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://www.onebyfaith.co/",
    },
    // {
    //     name: "Job IT",
    //     description:
    //         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };