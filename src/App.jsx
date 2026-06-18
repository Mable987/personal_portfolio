import './App.css'
import TopNavbar from './components/TopNavbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'   
import Projects from './components/Projects'
import Resume from './components/Resume' 
import Contact from './components/Contact'
import Footer from './components/Footer'
import turfImg from './assets/images/CRICKET STADIUM.jpeg'
import ecommerceImg from './assets/images/Instagram.jpeg'
import portfolioImg from './assets/images/portfilio.jpeg'

function App() {
  const user = {
    "name": "Mable Simon",
    "designation": "Python Fullstack Developer"
  };
  const skillset = [
    {"name": "Python", "Percentage": "90%"},
    {"name": "Django", "Percentage": "85%"},
    {"name": "React", "Percentage": "80%"},
    {"name": "JavaScript", "Percentage": "75%"},
    {"name": "HTML", "Percentage": "95%"},
    {"name": "CSS", "Percentage": "90%"}
  ];
  const projects = [
  {
    title: "Turf Booking System",
    description: "A web application where users can book sports turfs online with date and time slot selection.",
    technologies: ["Django", "Python", "MySQL"],
    liveLink: "#",
    githubLink: "https://github.com/Mable987/TurfHub.git",
    image: turfImg
  },
  {
    title: "E-commerce Website",
    description: "An online store built with Django and React, featuring product listings, shopping cart, and checkout functionality.",
    technologies: ["Django", "React", "Stripe API"],
    liveLink: "https://mablesimon.pythonanywhere.com/",
    githubLink: "https://github.com/Mable987/PhoneNext.git",
    image: ecommerceImg
  },
  {
    title: "Portfolio",
    description: "Personal developer portfolio built with React to showcase my projects and skills.",
    technologies: ["React", "CSS", "JavaScript"],
    liveLink: "https://personal-portfolio-phi-nine-91.vercel.app",
    githubLink: "https://github.com/Mable987/personal_portfolio.git",
    image: portfolioImg
  }
]
  const contactInfo = [
    {"type": "Email", "value": "mablesimonp@gmail.com"},
    {"type": "Phone", "value": "+91 8921087184"},
    {"type": "Location", "value": "Ernakulam, Kerala"}
  ];
  const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mable-simon-",
  github: "https://github.com/Mable987",
  
};

  return (
  <div className="portfolio-wrapper">
    <TopNavbar />
    <Home user={user}></Home>
    <About></About>
    <Skills skillset={skillset}></Skills>
    <Projects projects={projects}></Projects>
    <Resume></Resume>
    <Contact
  contactInfo={contactInfo}
  socialLinks={socialLinks}
/>
    <Footer></Footer>
  </div>
  )
}

export default App
