import React from 'react';
import Card from './Card'; // Assuming Card is in the same directory
import { CardContainer } from './StyledComp'; // Assuming the styles are here

import p1 from "./assets/download (1).jpg"
import p2 from "./assets/download (1).png"
import p3 from "./assets/download.jpg"
import p4 from "./assets/download.png"
import p5 from "./assets/download (2).jpg"
import p6 from "./assets/download (3).jpg"
import p7 from "./assets/download (4).jpg"
import p8 from "./assets/download (2).png"
import p11 from "./assets/images.jpg"
import p12 from "./assets/images.png"







const dummyData =[{
  id:1,
  title: "Asp.net/React Intranet",
  image:p4,
  text: " Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",
  cardDescription: " Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: " Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings. The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news. Demonstrated proficiency in data extraction & reporting from Sage ERP. Key Skills: ASP.NET, React, Git, Agile Scrum, Domain-driven Design, JWT Authentication, Authorization, Software ArchitectureSof",
  skills: ["ASP.NET", "React", "Git", "Agile Scrum", "Domain-driven Design", "JWT Authentication", "Authorization", "Software Architecture", "API Integration", "ERP", "Real-time Communication"],
  technologies: ["ASP.NET", "React", "Styled Components", "C#","Ant Design","React Query","SignalR"] 
},
{
  id: 2,
  title: "Blink Detection System",
  image: p6,
  text: "Innovative app to count and analyze user's eye blinks, reflecting a deep understanding of biometric analysis.",
  cardDescription: "A biometric analysis tool that counts and analyzes user's eye blinks, providing insights into eye health and fatigue.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/Advanced-CVProjects",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Developed a system that uses advanced algorithms to count and understand the pattern of user's eye blinks. The system is proficient in providing insights and has potential applications in health and fatigue management.",
  skills: ["Face Mesh", "Eye Tracking", "Data Analysis","Physics Concepts"],
  technologies: ["Python","TensorFlow","OpenCv","MediaPipe"]
},
{
  id: 3,
  title: "Emotion AI Detector",
  image: p6,
  text: "State-of-the-art application capable of identifying nine distinct human emotions, leveraging advanced machine learning techniques.",
  cardDescription: "A pioneering application that identifies and analyses nine unique emotions, underlining a profound mastery of machine learning.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/EmotionDetection",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Crafted an application that employs sophisticated algorithms to pinpoint nine distinct emotions. This project underscores a strong command over machine learning algorithms and their potential applications in real-world scenarios.",
  skills: ["Machine Learning", "Emotion Analysis", "Data Processing", "Computer Vision","Model Training"],
  technologies: ["TensorFlow", "Python","OpenCV"]
},
{
  id: 4,
  title: "AI Personal Fitness Trainer",
  image: p11,
  text: "An AI-driven fitness application that employs Pose Estimation to count exercise repetitions accurately, like curls and push-ups.",
  cardDescription: "Harness the power of Pose Estimation to offer an AI-centric personal training experience that accurately tracks and counts exercise reps.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/Advanced-CVProjects",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Developed a fitness application using Pose Estimation, which accurately tracks exercises like curls and push-ups. It not only counts repetitions but also provides feedback on posture and form, ensuring effective workouts.",
  skills: ["Pose Estimation", "AI", "Computer Vision","Physics Concepts"],
  technologies: ["Python", "TensorFlow","MediaPipe","OpenCV"]
},
{
  id: 5,
  title: "Gesture-Controlled Paint App",
  image: p3,
  text: "An innovative paint application and volume control system fully operated through intuitive hand gestures.",
  cardDescription: "Elevate creativity with a paint app controlled purely by hand gestures, alongside a volume control mechanism for a seamless user experience.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/Advanced-CVProjects",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Unveiling a revolutionary approach to digital artistry and system control, this application is solely operated through hand gestures. It not only allows users to paint but also manage system volume, offering an immersive and futuristic user experience.",
  skills: ["Gesture Recognition", "UI/UX","Computer Vision", "Software Development", "User Experience","Physics Concepts" ],
  technologies: ["Python", "OpenCV","MediaPipe"]
},


{
  id: 6,
  title: "AirBnb Web Replica",
  image: p8,
  text: "Crafted a comprehensive clone of the Airbnb platform, highlighting proficiency in re-engineering intricate web services and systems.",
  cardDescription: "An intricate replica of Airbnb, demonstrating deep understanding of web services, database management, and user interfaces.",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Engineered an Airbnb clone from the ground up, carefully replicating the platform's diverse functionalities. This project is a testament to my adeptness in understanding and replicating intricate web platforms, offering users a near-identical experience.",
  skills: ["Web Development", "Database Management", "UI/UX Design"],
  technologies: ["React", "Redux", "CSS","JSX","Html"]
},
{
  id: 7,
  title: "React Todo Organizer",
  image: p8,
  text: "A simple yet powerful todo application designed using React, focusing on ease of use and efficient task management.",
  cardDescription: "Effortlessly manage daily tasks with a sleek, responsive Todo application powered by React.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/ReactTodoApp",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Constructed an interactive Todo application to streamline task management. With an emphasis on user experience, the application offers features like drag-and-drop organization, task prioritization, and intuitive UI animations.",
  skills: ["Front-end Development", "Task Management", "User Experience"],
  technologies: ["React", "Redux", "CSS"]
},
{
  id: 8,
  title: "SpringBoot Product Manager",
  image: p7,
  text: "Introduced a robust CRUD application to efficiently manage and categorize products, built using SpringBoot.",
  cardDescription: "Efficient product and category management is now at your fingertips with a SpringBoot-backed CRUD application.",
  websiteLink: "http://example.com",
  githubLink: "http://github.com/sample",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Designed a powerful CRUD application using SpringBoot for seamless product management. Users can effortlessly add, delete, update, and categorize products, all while enjoying a responsive and user-friendly interface.",
  skills: ["Back-end Development", "Database Operations", "CRUD Operations","OOP","Clean Architecture"],
  technologies: ["SpringBoot", "Java", "Hibernate"]
},{
  id: 9,
  title: "Hand Gesture Mouse Control",
  image: p3,
  text: "Developed a unique interface allowing users to control their computer's cursor using hand gestures, employing advanced computer vision techniques.",
  cardDescription: "Revolutionize computer interactions with a hand gesture-based mouse control system.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/Advanced-CVProjects",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Pioneered a new way to interact with your computer. This project utilizes cutting-edge computer vision techniques to detect and interpret hand gestures, translating them into movements and actions for the computer's cursor, offering a seamless and futuristic user experience.",
  skills: ["Computer Vision", "Software Development", "User Experience","Physics Concepts"],
  technologies: ["Python", "OpenCV","MediaPipe"]
},
{
  id: 10,
  title: "AI-Driven Autism & Anxiety Detector",
  image: p6,
  text: "Leveraged machine learning in a Flutter application to detect signs of Autism and anxiety in children based on behavioral patterns.",
  cardDescription: "Harnessing AI for early Autism and anxiety detection in children, powered by Flutter.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/FlutterMediaPipeProject",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "Designed an application to aid early diagnosis of Autism and anxiety in children. Through machine learning, the app studies behavioral patterns to provide insightful feedback, all presented in a child-friendly interface crafted using Flutter.",
  skills: ["Machine Learning", "Mobile App Development", "Medical Technology","Api Mastery","Physics Concepts",],
  technologies: ["Flutter", "TensorFlow", "Python","FireBase", "OpenCV", "MediaPipe","Flask"]
},
{
  id: 11,
  title: "QR-Powered Health & Access Solution",
  image: p2,
  text: "Architected a dual-purpose solution, offering QR-based access control while predicting potential diseases using health data.",
  cardDescription: "Combining access control and health predictions through the power of QR codes.",
  websiteLink: "http://example.com",
  githubLink: "https://github.com/KatarSaad/FlutterHospitalAiApp",
  demoLink: "http://youtube.com/watch?v=demo",
  description: "This project envisions a safer, more controlled environment for institutions. Users get QR codes based on their health data, which also allows the system to predict potential health risks. The QR codes serve as access passes, ensuring only healthy individuals gain entry while simultaneously providing them with valuable health insights.",
  skills: ["Hybrid Mobile Dev", "Access Control", "Predictive Analytics", "Data Handling",],
  technologies: ["Flutter", "Python", "ML","ML Algorithms", "GetX","TensorFlow","FireBase","Dart"]
}
];
function App() {
  return (
    
    <CardContainer startColor="red" endColor="#0C356A">
       {dummyData.map(card => (
        <Card key={card.id} image={card.image} title={card.title} text={card.text} project={card} skills={card.skills} technologies={card.technologies} />
      ))}
    </CardContainer>
  );
}

export default App;
