/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shiva Sharma",
  title: "Hi all, I'm Shiva",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience in building responsive and dynamic web applications using HTML, CSS, JavaScript and React.js some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/home", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shivasharma12",
  linkedin: "http://www.linkedin.com/in/shiva-sharma-b7320325b/",
  gmail: "ssharma636076@gmail.com",
  leetcode: "https://leetcode.com/u/shivash2005/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Building responsive website front-end using ReactJS, HTML, CSS, and JavaScript"
    ),
    emoji(
      "⚡ Experience with version control systems like Git and GitHub for collaborative development"
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "COER University",
      logo: require("./assets/images/coer_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "July 2022 - Present",
      desc: "Pursuing a comprehensive curriculum focused on software development, data structures, algorithms, web technologies, and AI. Gaining hands-on experience through academic projects, hackathons, and internships aimed at solving real-world problems.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI & Data Quality Analytics",
      company: "IIT Mandi iHub and HCi Foundation",
      companylogo: require("./assets/images/iit.png"),
      date: "Aug 2024 – Nov 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
"Worked on AI and Data Quality Analytics projects, focusing on enhancing data integrity and model performance.",
"Collaborated with cross-functional teams to implement data quality frameworks and AI solutions.",
"Utilized Python and data analytics tools to analyze large datasets, ensuring high standards of data quality.",
"Contributed to the development of AI models, improving accuracy and reliability in data-driven decision-making."
      ]
    },
    {
      role: "Web Developer Intern ",
      company: "YHills",
      companylogo: require("./assets/images/YHills2.webp"),
      date: "Aug 2023 – Sep 2023",
      
      descBullets:
      [
"Developed and maintained responsive web applications using HTML, CSS, javascript, php, and MySQL.",
"Collaborated with designers and back-end developers to create seamless user experiences.",
"Implemented best practices for web development, including code optimization and performance enhancements.",
"Participated in code reviews and contributed to the overall improvement of the development process."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Acmegrade",
      companylogo: require("./assets/images/acmegrade.png"),
      date: "Jul 2023 – Sep 2023",
      descBullets: [

        "Upgraded site operations and user experience, contributing to a 30% performance boost.",
"Refined front-end functionality, driving a 40% increase in user engagement.",
        "Worked on bug fixes and enhancements, contributing to a 10% reduction in bug reports.",
        "Collaborated with cross-functional teams to enhance site performance and user experience."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME HACKATHONS AND INTERNSHIPS THAT I HAVE DONE",
  projects: [
    {
      image: require("./assets/images/shoppoix.png"),
      projectName: "E-Commerce Website",
      projectDesc: "Created a secure and user-friendly shopping platform with real-time cart updates, product listings, smooth checkout, and admin-controlled inventory management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shivasharma12.github.io/E-commerce/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fly.png"),
      projectName: "Fly High Website",
      projectDesc: "Intelligent flight booking platform offering healthcare-based filters for safer travel. Includes features like user-friendly search, dynamic booking options, medical preference tagging, and secure confirmation system. Designed to enhance travel planning and accessibility for all users.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shivasharma12.github.io/FlightBooking/"
        }
      ]
    },
    {
      image: require("./assets/images/ready.png"),
      projectName: "ReadyGo Website",
      projectDesc: "Travel coordination platform connecting travellers and users for seamless planning, enhancing the overall travel experience with better communication and organization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shivasharma12.github.io/readygo/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements And Certification some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gurukul Kangri Hackathon",
      subtitle:
        "Participated in a national-level hackathon hosted by Gurukul Kangri University. Collaborated with a team to develop an innovative tech solution under time constraints, demonstrating problem-solving, teamwork, and rapid prototyping skills.",
      image: require("./assets/images/gurukul1.png"),
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15-K3gnNipuidduhQaHPC7OWVk1zuiHCg/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    {
      title: "Multiple Hackthon Certification",
      subtitle: "Participated in multiple national-level and internal hackathons, showcasing innovative solutions in domains like AI, web development, and smart systems. Gained hands-on experience in rapid prototyping, team collaboration, and real-world problem solving under competitive and time-bound environments.",
      image: require("./assets/images/hack1.png"),
      imageAlt: "Certification Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/drive/folders/1G3w25idWKBZBxL0hl6-txXWfqH28Tnqi?usp=sharing"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8445178177",
  email_address: "ssharma636076@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
