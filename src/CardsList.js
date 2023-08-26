import React from 'react';
import Card from './Card'; // Assuming Card is in the same directory
import { CardContainer } from './StyledComp'; // Assuming the styles are here


const dummyData =[{
  id:1,
  title: "Sample Project",
  image:"/",
  text: "Internship at ATI (Tunisian Internet Agency) Feburary 2023 - Juin 2023. Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",
  cardDescription: "Internship at ATI (Tunisian Internet Agency) Feburary 2023 - Juin 2023. Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Internship at ATI (Tunisian Internet Agency) Feburary 2023 - Juin 2023. Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",

  demonstration: [
    {
      description: "Step 1: User Registration",
      gifImage: "path/to/registration-demo.gif"
    },
    {
      description: "Step 2: Useqdsfjk qmljThis is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviewsdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login and qdsflkj fd lmqfdl qjsdflmkj qdlmjf qlmsjkdflmkqj fdj fdDashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login qdsfk q flhsjlqsdfmfjqsd lfjlmdjf lmdsjqfqlfj mlqsjdf lmqjfdlmkq flmdkjf lmqjkdflmkqjfd lmqjdsflmkj fdqlmjfd land Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User qdfkj mlqjdfslmk qjdflmjq flmdjqlmk dsjflmqjd flmjqdflkmj qlmdkfjlmjLogin and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    }
  ],
},
{
  id:2,
  text: "Sample Project Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjl his is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of j",

  title: "Sample Project",
  image:"/",
  cardDescription: "Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjlj",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviews",

  demonstration: [
    {
      description: "Step 1: User Registration",
      gifImage: "path/to/registration-demo.gif"
    },
    {
      description: "Step 2: Useqdsfjk qmljThis is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviewsdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login and qdsflkj fd lmqfdl qjsdflmkj qdlmjf qlmsjkdflmkqj fdj fdDashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login qdsfk q flhsjlqsdfmfjqsd lfjlmdjf lmdsjqfqlfj mlqsjdf lmqjfdlmkq flmdkjf lmqjkdflmkqjfd lmqjdsflmkj fdqlmjfd land Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User qdfkj mlqjdfslmk qjdflmjq flmdjqlmk dsjflmqjd flmjqdflkmj qlmdkfjlmjLogin and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    }
  ],
},
{  id:3,
  text: "Sample Project Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjl his is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of j",

  title: "Sample Project",
  image:"/",
  cardDescription: "Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjlj",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviews",

  demonstration: [
    {
      description: "Step 1: User Registration",
      gifImage: "path/to/registration-demo.gif"
    },
    {
      description: "Step 2: Useqdsfjk qmljThis is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviewsdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login and qdsflkj fd lmqfdl qjsdflmkj qdlmjf qlmsjkdflmkqj fdj fdDashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login qdsfk q flhsjlqsdfmfjqsd lfjlmdjf lmdsjqfqlfj mlqsjdf lmqjfdlmkq flmdkjf lmqjkdflmkqjfd lmqjdsflmkj fdqlmjfd land Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User qdfkj mlqjdfslmk qjdflmjq flmdjqlmk dsjflmqjd flmjqdflkmj qlmdkfjlmjLogin and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    }
  ],
},
{  id:4,
  text: "Sample Project Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjl his is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of j",

  title: "Sample Project",
  image:"/",
  cardDescription: "Sample Project d fldj f lj fkjq flj lj qlsdjflj fqljqdf ljqsdlfjlj",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviews",

  demonstration: [
    {
      description: "Step 1: User Registration",
      gifImage: "path/to/registration-demo.gif"
    },
    {
      description: "Step 2: Useqdsfjk qmljThis is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview This is a sample project description. Ittep 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview explains the purpose and functionality of the project in brief.Step 2: Useqdsfjk qmljdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overviewsdfmlq sjdflmkjq sdflmjqs dlmfj mlkqsjdflmkqk fkjqs dflmkjkqsd flmkj fjlmk flkj flmkqsdjf lmkjfdlmkj flmqkjdf lmkr Login and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login and qdsflkj fd lmqfdl qjsdflmkj qdlmjf qlmsjkdflmkqj fdj fdDashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User Login qdsfk q flhsjlqsdfmfjqsd lfjlmdjf lmdsjqfqlfj mlqsjdf lmqjfdlmkq flmdkjf lmqjkdflmkqjfd lmqjdsflmkj fdqlmjfd land Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    },
    {
      description: "Step 2: User qdfkj mlqjdfslmk qjdflmjq flmdjqlmk dsjflmqjd flmjqdflkmj qlmdkfjlmjLogin and Dashboard Overview",
      gifImage: "path/to/login-demo.gif"
    }
  ],
}];
function App() {
  return (
    
    <CardContainer startColor="red" endColor="#0C356A">
       {dummyData.map(card => (
        <Card key={card.id} image="https://source.unsplash.com/user/erondu/600x400?1" title={card.title} text={card.text} project={card} />
      ))}
    </CardContainer>
  );
}

export default App;
