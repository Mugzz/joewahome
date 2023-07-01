import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import GradeIcon from '@material-ui/icons/Grade'
import LinkIcon from '@material-ui/icons/Link'

export default {
  name: 'Joseph Wahome',
  title: 'Architect',
  birthday: '6th May, 1996',
  email: 'joewahomek@gmail.com',
  phone: ' 0797652526 / 0799168713',
  address: 'P.O Box 140-20303, Ol-Kalou',

  socials: {
    facebook: {
      link: 'https://www.facebook.com',
      text: 'Friend me on Facebook',
      icon: <FacebookIcon />,
    },
    twitter: {
      link: 'https://twitter.com',
      text: 'Follow me on Twitter',
      icon: <TwitterIcon />,
    },
    linkedin: {
      link: 'https://www.linkedin.com',
      text: 'Connect with me on Linkedin',
      icon: <LinkedInIcon />,
    },

  },

  about:`I am a skilled and dedicated Architect with a passion for creating innovative and functional designs.
   With a diploma in Architecture from the Technical University of Mombasa and a strong background 
   in Information Communication Technology, I bring a unique blend of technical expertise and creative vision to my work.

Throughout my professional journey, I have gained extensive experience in software integration, installation of internet
 and Wi-Fi, and have worked on various architectural projects, including residential homes, office blocks, and rental bedsitters.
  I am proficient in using ArchiCAD versions 19 to 24, as well as rendering software such as Lumion and Twinmotion, 
  which allows me to bring designs to life and present them in a visually appealing manner.

I am detail-oriented, deadline-driven, and possess excellent reporting and research skills. 
I am adept at managing multiple tasks and projects simultaneously, while maintaining a high level of accuracy and confidentiality. 
My proficiency in office automation tools such as MS Word, PowerPoint, and Excel enables me to efficiently organize and present 
project-related information.

As a natural leader and effective communicator, I thrive in collaborative environments and value teamwork. I am known for my 
problem-solving abilities and the ability to adapt to changing circumstances. I am dedicated to delivering high-quality 
work and exceeding client expectations.

Fluent in both English and Kiswahili, I am able to effectively communicate with clients, colleagues, and stakeholders 
from diverse backgrounds.

Outside of work, I enjoy reading magazines and journals to stay updated on industry trends, listening to music
 for inspiration, swimming for relaxation, and watching to broaden my creative horizons.

I invite you to review my portfolio, which showcases my projects, including 4-bedroom homes, 3-bedroom bungalows,
 office blocks, and renders. I am confident that my skills, experience, and passion for architecture make me a valuable
  asset to any design team.

Please feel free to reach out to my referees, Mr. Mwatu and Architect Alex Maninga, who can provide further insight into 
my professional capabilities and work ethic.

I look forward to the opportunity to contribute my skills and expertise to your
 organization and to collaborate on exciting architectural projects.`,
  certifications: [
    {
      title: 'FreeCodeCamp',
      date: 'Feb 1st - (Pursuing)',
      description:
        'Front End Development Libraries\nJavaScript Algorithms and Data Structures\nResponsive Web Design',
    },
    {
      title: 'Internet Society',
      date: 'July 6th - August 19th 2018',
      description: 'Network Operations: UNIX/Linux,  Networking and DNS',
    },
    {
      title: 'Google',
      date: 'June 29th 2018',
      description: 'Google Digital Skills for Africa',
    },
  ],
  education: [
    {
      title: 'Andela',
      date: '2018 - 4 Weeks',
      description: 'Andela Cycle 35 Fellowship Bootcamp ',
    },
    {
      title: 'Africa Nazarene University',
      date: '2016 - To Date',
      description: 'Bsc. in Business Information Technology',
    },
    {
      title: 'Laiser Hill Academy ',
      date: '2013 - 2016',
      description: 'A – Level',
    },
  ],
  services: [
    {
      title: 'TEAM PLAYER',
      description:
        'I am able to build positive relationships.I am able to provide support, commit to team goals, and make others feel appreciated.',
      icon: 'https://secure.plum.io/static/common/dimensions/310/color/teamwork.svg',
    },
    {
      title: 'ADAPTIVE ACE',
      description:
        'I am excellent at overcoming obstacles.Im Strong at remaining calm and operating effectively under pressure and multiple demands.',
      icon: 'https://secure.plum.io/static/common/dimensions/301/color/adaptation.svg',
    },
    {
      title: 'OUTCOME OWNER',
      description:
        'I have the ability to set goals, monitor progress, and take the initiative to improve my work and persevering even when initially unsuccessful.',
      icon: 'https://secure.plum.io/static/common/dimensions/309/color/execution.svg',
    },
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: ["I wrote my first code in javascript and along the way I developed a strong understanding of HTML and CSS.Since I already knew javascript I could make the websites interactive and engaing.I am have a big fan of React.js as it makes it easier to create dynamic user interfaces. I also follow the responsive design principles to ensure that the website looks great on desktop, tablet, and mobile devices."],
    },
    {
      title: 'BACK-END',
      description: ['I gained a good experience with PHP while I was in school.Some of the projects I did included a login form to an ecommerce platform.I also have a good foundation with python and javascript.I now design and create backend architecture that are secure and protect user data and prevents attacks. I am familiar with authentication and authorization protocols as well as security measures like encryption and tokenization.  '],
    },
    {
      title: 'DATABASE',
      description: ['I am skilled in database management,using SQL I can create and design efficient and effective database structures.I have created database managment systems that handles stores large amounts of data. I have also integrtated the database functionality with web applications. I am also  familiar with popular database management systems like MySQL and PostgreSQL'  ],
    },
    {
      title: 'Talent',
      description: ['I am able to build positive relationships by providing support, committing to team goals, and make others feel appreciated.I am excellent at overcoming obstacles.Im Strong at remaining calm and operating effectively under pressure and multiple demands. I have the ability to set goals, monitor progress, and take the initiative to improve my work and persevering even when initially unsuccessful.'  ],
    },
  ],
  projects: [
    {
      tag: 'Flask',
      image:[
       'https://res.cloudinary.com/doammcpie/video/upload/v1688246449/WhatsApp_Video_2023-07-01_at_10.17.27_PM_wotiiq.mp4',
      'https://res.cloudinary.com/doammcpie/image/upload/v1688246409/WhatsApp_Image_2023-07-01_at_10.05.28_PM_t9ijup.jpg',
      'https://res.cloudinary.com/doammcpie/video/upload/v1688246393/WhatsApp_Video_2023-07-01_at_10.06.16_PM_bbdta6.mp4',],
   
      title: 'ZUP',
      caption: 'Zup is a Twitter sentiment analysis ',
      description:
        "Zup is a Twitter sentiment analysis that allows you to keep track of what's being said about a certain topic on twitter, and can help you detect sensentive topics",
      links: [
        {
          link: 'https://github.com/bmugenya/Zup',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://tweetsenti.herokuapp.com/api/v1/',
          icon: <LinkIcon />,
        },
      ],
    },


  ],
}
