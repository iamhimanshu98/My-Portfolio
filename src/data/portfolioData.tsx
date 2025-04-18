import React from 'react';
import { 
  Github,
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  FileCode, 
  Brain, 
  Terminal 
} from 'lucide-react';
import { EducationItem, ExperienceItem, Skill, Project, ContactLink } from '../types';

export const educationData: EducationItem[] = [
  {
    title: 'B.Tech in AI & Data Science',
    institution: 'Poornima Institute Of Engineering and Technology, Jaipur',
    period: '2022 - Present',
    grade: 'CGPA: 9.1'
  },
  {
    title: 'Higher Education',
    institution: 'Motherland Public Senior Secondary School, Jaipur',
    period: '2020 - 2022',
    grade: 'Percentage: 89%'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    title: 'AI & Machine Learning',
    company: 'Upflairs pvt ltd',
    period: 'July 2024 - August 2024',
    responsibilities: [
      'Worked on real-world AI/ML projects including data preprocessing, model training, and evaluation',
      'Built machine learning models using Python libraries such as scikit-learn and tensorflow'
    ]
  },
  {
    title: 'Aeromodelling',
    company: 'Aerophantom pvt ltd',
    period: 'August 2023 - September 2023',
    responsibilities: [
      'Learned basics of aerodynamics, control surfaces, and drone components',
      'Participated in hands-on assembly and flying of RC Planes and Drones'
    ]
  }
];

export const skillsData: Skill[] = [
  { name: 'Java', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'React', category: 'frameworks' },
  { name: 'Flask', category: 'frameworks' },
  { name: 'SQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' }
];

export const projectsData: Project[] = [
  {
    title: 'Emojify',
    description: 'Built an emotion-based activity suggestion app that promotes user well-being. Integrated face detection and emotion recognition.',
    tech: ['React', 'TypeScript', 'Flask'],
    icon: <Code className="w-6 h-6 text-orange-600" />,
    url: 'https://github.com/iamhimanshu98/Emojify'
  },
  {
    title: 'Neura',
    description: 'Modern AI chatbot mobile app with natural language conversations. Clean and responsive UI with React Native.',
    tech: ['React Native', 'TypeScript', 'Flask'],
    icon: <Brain className="w-6 h-6 text-orange-600" />,
    url: 'https://github.com/iamhimanshu98/Neura'
  },
  {
    title: 'Crime Record',
    description: 'Desktop application for managing criminal records with Java Swing GUI and MySQL database.',
    tech: ['Java', 'MySQL', 'Swing'],
    icon: <FileCode className="w-6 h-6 text-orange-600" />,
    url: 'https://github.com/iamhimanshu98/Criminal-Record-Management-System'
  },
  {
    title: 'Car Claim',
    description: 'Fraud detection model for car insurance claims using machine learning and data analysis.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    icon: <Terminal className="w-6 h-6 text-orange-600" />,
    url: 'https://github.com/iamhimanshu98/CarClaim'
  },
  {
    title: 'Spam Filter',
    description: 'Machine learning model using Naive Bayes algorithm for spam email detection with NLP techniques.',
    tech: ['Python', 'NLP', 'Scikit-learn'],
    icon: <Code className="w-6 h-6 text-orange-600" />,
    url: 'https://github.com/iamhimanshu98/SpamFilter'
  }
];

export const contactData: ContactLink[] = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/iamhimanshu98'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com/in/iamhimanshu98'
  },
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    url: 'mailto:himanshukumawat1313@gmail.com'
  },
  {
    name: 'Phone',
    icon: <Phone className="w-5 h-5" />,
    url: 'tel:+918890414171'
  }
];

export const typedStrings = ["Software Engineer", "Data Scientist", "Web Developer"];