export const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Global AI Hackathon 2026",
    date: "April 15-17, 2026",
    location: "Online",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    tags: ["AI", "Machine Learning"],
    category: "AI & ML",
    participants: 1250,
    prize: "$50,000",
    description: "Build cutting-edge artificial intelligence and LLM solutions alongside world-class developers.",
    organizer: "OpenAI & Anthropic",
    isSaved: true
  },
  {
    id: 2,
    title: "FinTech Innovators Build",
    date: "May 2-4, 2026",
    location: "New York / Hybrid",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["Finance", "Blockchain"],
    category: "Web3 & Blockchain",
    participants: 800,
    prize: "$25,000",
    description: "Reimagine decentralized finance, smart contracts, and algorithmic trading systems.",
    organizer: "Stripe & Coinbase",
    isSaved: false
  },
  {
    id: 3,
    title: "Sustainable Tech Jam",
    date: "June 10-12, 2026",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80",
    tags: ["Green Tech", "IoT"],
    category: "Sustainability",
    participants: 450,
    prize: "$10,000",
    description: "Create scalable hardware and cloud software solutions for climate action and green energy.",
    organizer: "EcoTech Global",
    isSaved: true
  },
  {
    id: 4,
    title: "Cyber Security Sentinel 2026",
    date: "July 8-10, 2026",
    location: "Online",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    tags: ["Security", "DevOps"],
    category: "Cybersecurity",
    participants: 920,
    prize: "$35,000",
    description: "Compete in red team / blue team challenges and defend cloud infrastructure.",
    organizer: "Cloudflare",
    isSaved: false
  }
];

export const INITIAL_TEAMS = [
  {
    id: 1,
    name: "Neural Ninjas",
    event: "Global AI Hackathon 2026",
    lookingFor: ["Frontend Dev", "UX Designer"],
    size: 2,
    maxSize: 4,
    leader: "Alex Rivera",
    leaderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    description: "Building an autonomous agent for web scraping and data synthesis."
  },
  {
    id: 2,
    name: "Block Builders",
    event: "FinTech Innovators Build",
    lookingFor: ["Smart Contract Dev", "Solidity Specialist"],
    size: 3,
    maxSize: 4,
    leader: "Sarah Chen",
    leaderAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    description: "Creating zero-knowledge proof payment channels."
  },
  {
    id: 3,
    name: "EcoCode Warriors",
    event: "Sustainable Tech Jam",
    lookingFor: ["Fullstack Engineer", "IoT Specialist"],
    size: 1,
    maxSize: 4,
    leader: "David Miller",
    leaderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    description: "Developing IoT sensors for real-time carbon footprint monitoring."
  }
];

export const INITIAL_USER = {
  name: "Alex Rivera",
  username: "arivera_dev",
  title: "Senior Full-Stack Engineer & AI Enthusiast",
  bio: "Passionate about building high-performance web applications, machine learning integration, and participating in global hackathons. 12x Hackathon Winner.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  location: "San Francisco, CA",
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  skills: ["React", "Node.js", "Python", "TensorFlow", "TypeScript", "GraphQL", "TailwindCSS"],
  stats: {
    eventsParticipated: 14,
    teamsJoined: 8,
    prizesWon: 5
  }
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "team_request",
    title: "Join Request Approved!",
    message: "Sarah Chen accepted your application to join 'Block Builders'.",
    time: "10 minutes ago",
    read: false
  },
  {
    id: 2,
    type: "event",
    title: "Hackathon Starting Soon",
    message: "Global AI Hackathon 2026 starts in 3 days. Check your team workspace.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 3,
    type: "message",
    title: "New Message from Neural Ninjas",
    message: "David: Hey Alex, have you prepared the slide deck for submission?",
    time: "1 day ago",
    read: true
  }
];

export const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    text: "Welcome to Block Builders! Excited to work with you on the FinTech project.",
    time: "10:14 AM",
    isSelf: false
  },
  {
    id: 2,
    sender: "Alex Rivera (You)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "Thanks Sarah! I've already drafted the React architecture for our frontend dashboard.",
    time: "10:16 AM",
    isSelf: true
  },
  {
    id: 3,
    sender: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    text: "Awesome! Let's schedule a brief sync call today at 3 PM PST.",
    time: "10:20 AM",
    isSelf: false
  }
];
