export interface TeamMember {
  id: string;
  name: string;
  role: string;
  intro: string;
  image: string;
  badge: string;
  meta: {
    role: string;
    focus: string;
    location: string;
    stack: string;
  };
  about: string[];
  expertise: {
    icon: string;
    title: string;
  }[];
  roleAtAgency: string[];
  philosophy: string;
}

export const teamMembers: Record<string, TeamMember> = {
  ubaid: {
    id: 'ubaid',
    name: 'Ubaid',
    role: 'CEO & AI Engineer',
    intro: 'MERN Stack Developer & AI Engineer building practical, AI-powered digital products for real businesses — not demos.',
    image: '/assets/members/ubaid.png',
    badge: 'CEO & AI ENGINEER',
    meta: {
      role: 'CEO & AI Engineer',
      focus: 'Full-Stack Development • AI Agents • Product Architecture',
      location: 'Pakistan',
      stack: 'MERN Stack Developer & AI Engineer | React.js • Node.js • Express.js • MongoDB • Python • Flask • Next.js • JavaScript • TypeScript • Tailwind CSS | DevOps'
    },
    about: [
      'Ubaid works at the intersection of full-stack engineering and applied AI. Currently completing his BS in Software Engineering at Government College University Faisalabad (GC University Faisalabad), he builds with the MERN stack, Next.js, and Python/Flask — using tools like the Gemini API to build AI agents, automation pipelines, and full SaaS platforms from scratch.',
      'As both CEO and AI Engineer, he stays hands-on with the code on every project — architecting the system, building the core logic, and making sure what ships actually holds up. His dual role allows him to understand both the technical possibilities and the business implications of digital solutions, ensuring that every project delivers genuine value while pushing technical boundaries.',
      'He founded AI Explorer Agency with the vision of making advanced AI technology accessible and practical for businesses of all sizes. Ubaid believes in AI that serves practical purposes—solving real business problems, improving efficiency, and creating meaningful user experiences rather than chasing trends for their own sake.',
      'His technical expertise spans the full development lifecycle from concept to deployment, with particular focus on AI agent development, API integration, and scalable system architecture. He stays at the forefront of emerging technologies, continuously exploring new frameworks and methodologies that can benefit clients while maintaining a pragmatic, results-driven approach to development.'
    ],
    expertise: [
      { icon: '💻', title: 'MERN Stack Development' },
      { icon: '⚛️', title: 'React.js & Next.js' },
      { icon: '🟢', title: 'Node.js & Express.js' },
      { icon: '🍃', title: 'MongoDB' },
      { icon: '🐍', title: 'Python & Flask' },
      { icon: '🤖', title: 'AI Agent Development' },
      { icon: '✨', title: 'Gemini API Integration' },
      { icon: '🧠', title: 'Agentic Engineering' },
      { icon: '🔗', title: 'REST API Development' },
      { icon: '📡', title: 'MCP Server Development' },
      { icon: '🎭', title: 'Browser Automation (Playwright)' },
      { icon: '📨', title: 'Background Jobs & Queues (BullMQ/Redis)' },
      { icon: '🎨', title: 'Tailwind CSS' },
      { icon: '🔒', title: 'JWT Authentication' },
      { icon: '☁️', title: 'DevOps & Deployment (Vercel, Railway)' },
      { icon: '🏗️', title: 'SaaS Architecture' }
    ],
    roleAtAgency: [
      'As CEO, Ubaid sets the technical direction for AI Explorer and works directly with clients to figure out what they actually need — a new website, an AI upgrade to an existing one, or a full custom platform. He guides the agency\'s strategic direction, ensuring that business decisions align with both client needs and technical capabilities. His leadership focuses on building sustainable growth while maintaining the agency\'s commitment to technical excellence and client success.',
      'As AI Engineer, he stays hands-on with the architecture, the AI integrations, and the final code review on every project the agency delivers. This dual perspective helps him make informed decisions about technology investments, project approaches, and team development. He architects complex AI systems, reviews code quality, and ensures that technical implementations align with both client requirements and industry best practices.',
      'Ubaid fosters a culture of technical excellence while maintaining focus on business outcomes, ensuring that AI Explorer continues to deliver practical, scalable solutions that drive real results. He invests heavily in team development, creating opportunities for learning and growth that keep the agency at the forefront of AI innovation. His approach to leadership emphasizes transparency, collaboration, and continuous improvement.'
    ],
    philosophy: 'Good technology solves a real problem first. I\'d rather ship something simple that actually works than something complex that just looks good in a demo.'
  },
  zafar: {
    id: 'zafar',
    name: 'Zafar',
    role: 'Founder',
    intro: 'Leading the vision behind AI Explorer Agency and shaping the direction of our work.',
    image: '/assets/members/zafar.png',
    badge: 'FOUNDER',
    meta: {
      role: 'Founder',
      focus: 'Vision • Strategy • Business Development',
      location: 'Pakistan',
      stack: 'Business Strategy • Project Management • Digital Transformation'
    },
    about: [
      'Zafar is the founder of AI Explorer Agency, responsible for the overall vision and strategic direction of the company. With a deep understanding of digital transformation and business needs, he guides the agency in delivering solutions that create real value for clients.',
      'His focus is on building long-term relationships with clients and ensuring that every project aligns with their business goals. Zafar believes in transparent communication and practical solutions that drive measurable results.',
      'Under his leadership, AI Explorer Agency has grown from a concept to a full-service digital agency serving clients across various industries. His commitment to excellence and client satisfaction has been the foundation of the agency\'s success.'
    ],
    expertise: [
      { icon: '🎯', title: 'Business Strategy' },
      { icon: '📊', title: 'Project Management' },
      { icon: '💡', title: 'Digital Transformation' },
      { icon: '🤝', title: 'Client Relations' },
      { icon: '📈', title: 'Growth Strategy' },
      { icon: '🏢', title: 'Business Development' }
    ],
    roleAtAgency: [
      'As Founder, Zafar sets the overall vision and strategic direction for AI Explorer Agency. He works closely with clients to understand their business needs and ensures that the agency delivers solutions that align with their goals.',
      'He oversees all major projects and ensures that the team maintains high standards of quality and client satisfaction. His leadership style emphasizes collaboration, innovation, and continuous improvement.',
      'Zafar is also responsible for business development and identifying new opportunities for growth. He stays connected with industry trends and ensures that AI Explorer remains at the forefront of digital innovation.'
    ],
    philosophy: 'True digital transformation isn\'t about adopting the latest technology trends—it\'s about understanding what your business truly needs and building solutions that create real, lasting value. Technology should serve your goals, not the other way around.'
  },
  hassan: {
    id: 'hassan',
    name: 'Hassan',
    role: 'MERN Stack Developer | Next.js | SaaS Products',
    intro: 'Building responsive, reliable web experiences with a focus on clean interfaces and smooth performance.',
    image: '/assets/members/hassan.png',
    badge: 'MERN STACK DEVELOPER',
    meta: {
      role: 'MERN Stack Developer',
      focus: 'Frontend Development • React.js • Next.js',
      location: 'Pakistan',
      stack: 'MERN Stack • React.js • Next.js • TypeScript • Tailwind CSS • Node.js • MongoDB'
    },
    about: [
      'Hassan is a MERN Stack Developer specializing in building modern, responsive web applications. His expertise spans the full stack, from creating intuitive user interfaces with React and Next.js to building robust backend systems with Node.js and MongoDB.',
      'He has a strong focus on performance optimization and user experience, ensuring that every application he builds is fast, accessible, and easy to use. His attention to detail and commitment to quality code makes him a valuable member of the development team.',
      'Hassan stays current with the latest web technologies and best practices, continuously improving his skills to deliver cutting-edge solutions. He enjoys solving complex technical challenges and turning ideas into functional, beautiful applications.'
    ],
    expertise: [
      { icon: '⚛️', title: 'React.js' },
      { icon: '▲', title: 'Next.js' },
      { icon: '📘', title: 'TypeScript' },
      { icon: '🎨', title: 'Tailwind CSS' },
      { icon: '🟢', title: 'Node.js' },
      { icon: '🍃', title: 'MongoDB' },
      { icon: '📱', title: 'Responsive Design' },
      { icon: '⚡', title: 'Performance Optimization' }
    ],
    roleAtAgency: [
      'As a MERN Stack Developer, Hassan works on both frontend and backend development for client projects. He builds user interfaces that are intuitive and responsive, and creates backend systems that are reliable and scalable.',
      'He collaborates closely with the design team to translate visual concepts into functional code, and works with backend developers to ensure seamless integration between frontend and backend systems.',
      'Hassan is also involved in code reviews and technical planning, helping the team maintain high standards of code quality and architectural best practices.'
    ],
    philosophy: 'Good code should be clean, documented and maintainable—not just functional. I focus on building solutions that work beautifully today and can be easily understood and improved tomorrow. Performance and user experience aren\'t afterthoughts—they\'re foundational.'
  },
  amna: {
    id: 'amna',
    name: 'Amna',
    role: 'Marketing & SEO Specialist',
    intro: 'Helping businesses improve their online visibility through thoughtful marketing and search-focused strategy.',
    image: '/assets/members/amna.png',
    badge: 'MARKETING & SEO',
    meta: {
      role: 'Marketing & SEO Specialist',
      focus: 'SEO • Content Marketing • Digital Strategy',
      location: 'Pakistan',
      stack: 'SEO Tools • Content Strategy • Analytics • Social Media Marketing'
    },
    about: [
      'Amna is a Marketing and SEO Specialist focused on helping businesses improve their online presence and reach their target audience effectively. She combines technical SEO knowledge with creative content strategies to drive organic growth and engagement.',
      'Her approach to marketing is data-driven and results-oriented. She analyzes market trends, competitor strategies, and user behavior to develop campaigns that resonate with the right audience and deliver measurable results.',
      'Amna believes in sustainable growth through authentic marketing practices. She focuses on building long-term brand value rather than quick wins, ensuring that marketing efforts contribute to lasting business success.'
    ],
    expertise: [
      { icon: '🔍', title: 'SEO Optimization' },
      { icon: '📝', title: 'Content Marketing' },
      { icon: '📊', title: 'Analytics' },
      { icon: '🎯', title: 'Keyword Research' },
      { icon: '📱', title: 'Social Media Marketing' },
      { icon: '📧', title: 'Email Marketing' },
      { icon: '🔗', title: 'Link Building' },
      { icon: '📈', title: 'Growth Strategy' }
    ],
    roleAtAgency: [
      'As Marketing and SEO Specialist, Amna develops and executes marketing strategies that help clients achieve their business goals. She works on SEO optimization, content creation, and digital campaigns that drive traffic and conversions.',
      'She collaborates with the development team to ensure that websites are built with SEO best practices in mind, and works with the content team to create engaging, search-optimized content.',
      'Amna also provides ongoing marketing support to clients, helping them understand their performance metrics and make data-driven decisions about their marketing investments.'
    ],
    philosophy: 'SEO isn\'t about tricking Google—it\'s about being the best answer for your audience. I focus on creating content that genuinely helps people, optimizing technical foundations that search engines love, and building authority that earns both rankings and trust. Sustainable growth comes from solving real search intent, not from chasing algorithm loopholes.'
  },
  michael: {
    id: 'michael',
    name: 'Michael Thompson',
    role: 'Project Manager',
    intro: 'Keeping projects organized, communication clear, and delivery on track from start to finish.',
    image: '/assets/members/michael.png',
    badge: 'PROJECT MANAGER',
    meta: {
      role: 'Project Manager',
      focus: 'Project Management • Communication • Delivery',
      location: 'Online',
      stack: 'Agile • Scrum • Project Planning • Team Coordination'
    },
    about: [
      'Michael is a Project Manager who ensures that every project runs smoothly from start to finish. With strong organizational skills and a focus on clear communication, he keeps teams aligned and clients informed throughout the development process.',
      'His approach to project management emphasizes transparency, accountability, and proactive problem-solving. He identifies potential issues early and addresses them before they become roadblocks, ensuring that projects stay on track and on budget.',
      'Michael works closely with both clients and development teams, bridging the gap between technical requirements and business needs. His ability to translate complex technical concepts into clear language helps clients make informed decisions about their projects.'
    ],
    expertise: [
      { icon: '📋', title: 'Project Planning' },
      { icon: '🗓️', title: 'Scheduling' },
      { icon: '🤝', title: 'Team Coordination' },
      { icon: '📊', title: 'Progress Tracking' },
      { icon: '💬', title: 'Communication' },
      { icon: '⚠️', title: 'Risk Management' },
      { icon: '🎯', title: 'Agile Methodology' },
      { icon: '✅', title: 'Quality Assurance' }
    ],
    roleAtAgency: [
      'As Project Manager, Michael oversees the planning, execution, and delivery of client projects. He creates detailed project plans, coordinates team activities, and ensures that milestones are met on time.',
      'He serves as the primary point of contact for clients, providing regular updates and managing expectations. His clear communication style helps clients understand project progress and make informed decisions.',
      'Michael also facilitates team collaboration, ensuring that developers, designers, and other stakeholders work together effectively. He identifies and resolves conflicts, removes obstacles, and keeps the team focused on project goals.'
    ],
    philosophy: 'Good project management is about making complex things simple for everyone involved. Clear communication, realistic planning, and proactive problem-solving turn potential chaos into predictable, successful delivery. The best project managers are essentially invisible—things just work.'
  },
  'chidi-okonkwo': {
    id: 'chidi-okonkwo',
    name: 'Chidi Okonkwo',
    role: 'Content Strategist',
    intro: 'Turning complex ideas into clear, engaging content that gives brands a stronger voice.',
    image: '/assets/members/Chidi%20Okonkwo.png',
    badge: 'CONTENT STRATEGIST',
    meta: {
      role: 'Content Strategist',
      focus: 'Content Strategy • Copywriting • Brand Voice',
      location: 'Online',
      stack: 'Content Creation • Brand Storytelling • SEO Writing • Social Media Content'
    },
    about: [
      'Chidi is a Content Strategist who specializes in creating compelling content that connects brands with their audiences. He combines strategic thinking with creative writing to develop content that informs, engages, and converts.',
      'His approach to content is audience-first. He deeply understands target audiences and creates content that speaks to their needs, interests, and pain points. This audience-centric approach ensures that content resonates and drives meaningful engagement.',
      'Chidi believes in the power of storytelling to build brand affinity. He helps brands develop authentic voices and tell stories that create emotional connections with their audiences, leading to stronger brand loyalty and better business results.'
    ],
    expertise: [
      { icon: '✍️', title: 'Copywriting' },
      { icon: '📖', title: 'Storytelling' },
      { icon: '🎯', title: 'Content Strategy' },
      { icon: '🔍', title: 'SEO Writing' },
      { icon: '📱', title: 'Social Media Content' },
      { icon: '🎙️', title: 'Brand Voice' },
      { icon: '📊', title: 'Content Analytics' },
      { icon: '💡', title: 'Creative Direction' }
    ],
    roleAtAgency: [
      'As Content Strategist, Chidi develops content strategies that support client marketing and business goals. He creates content for websites, blogs, social media, and other channels that align with brand voice and audience needs.',
      'He works closely with the marketing team to ensure that content supports SEO and conversion goals, and collaborates with designers to create visually compelling content presentations.',
      'Chidi also helps clients develop their brand voice and messaging frameworks, ensuring consistency across all touchpoints and building stronger brand recognition.'
    ],
    philosophy: 'Great content isn\'t about fancy words or complex concepts—it\'s about clarity and connection. When you truly understand your audience and speak to them honestly about things that matter, the message takes care of itself.'
  }
};

export function getTeamMember(name: string): TeamMember | undefined {
  return teamMembers[name];
}

export function getAllTeamMembers(): TeamMember[] {
  return Object.values(teamMembers);
}
