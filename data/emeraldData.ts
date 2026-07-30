import { CorePillar, GalleryItem, Initiative } from '../types';
import heroImg from '../assets/images/hero_emerald_climate_1785143341796.jpg';
import fieldworkImg from '../assets/images/youth_fieldwork_1785143355613.jpg';
import workshopImg from '../assets/images/solar_workshop_1785143368926.jpg';

export { heroImg };

export const MEMBERSHIP_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd3EGH29W-Ckaj8mcjBFwhAI9huDd2mTfXqUyO3uNSKg__erw/viewform';

export const corePillars: CorePillar[] = [
  {
    id: 'pillar-action',
    title: 'ACTION',
    subtitle: 'Direct Grassroots Solutions',
    description: 'We don\'t just advocate—we build. From installing off-grid solar kits in rural classrooms to establishing indigenous tree nurseries, our youth teams implement practical, immediate climate solutions across Zimbabwe.',
    quote: "True climate resilience starts when young people take ownership of clean technology in their own villages.",
    quoteAuthor: "Tarisai Moyo, Youth Energy Fellow",
    highlights: [
      '18+ Solar Micro-Grid Installations',
      '15,000+ Indigenous Trees Planted',
      'Zero-emission Bio-Digester Prototypes'
    ],
    iconName: 'Zap'
  },
  {
    id: 'pillar-inclusion',
    title: 'INCLUSION',
    subtitle: 'Amplifying Every Young Voice',
    description: 'Climate change impacts everyone, but solutions must be shaped by those most affected. We bridge urban and rural divides, bringing young women, students, and marginalized youth to the forefront of environmental leadership.',
    quote: "When young women in rural Zimbabwe lead energy projects, whole communities transform.",
    quoteAuthor: "Rumbidzai Ndlovu, Inclusion Director",
    highlights: [
      '60% Female Youth Representation',
      '12 Province-Wide School Clubs',
      'Sign-Language Inclusive Workshops'
    ],
    iconName: 'Users'
  },
  {
    id: 'pillar-equity',
    title: 'EQUITY',
    subtitle: 'Justice & Fair Energy Transition',
    description: 'Ensuring Zimbabwe\'s green transition is fair and just. We champion equitable access to clean energy, climate finance for grassroots innovators, and climate literacy for under-resourced communities.',
    quote: "Energy access is a fundamental right. Our mission is making sure no rural school or clinic is left in the dark.",
    quoteAuthor: "Kudakwashe Chiwara, Founder & Co-Director",
    highlights: [
      'Policy Dialogues with Local Councils',
      'Free Open-Source Solar Blueprints',
      'Subsidized Clean Cookstoves'
    ],
    iconName: 'Scale'
  }
];

export const initiativesData: Initiative[] = [
  {
    id: 'init-solar-schools',
    title: 'Solar Schools & Learning Microgrids',
    category: 'Solar & Energy',
    location: 'Masvingo & Manicaland Provinces',
    shortDesc: 'Equipping rural primary and secondary schools with off-grid solar power and digital learning hubs.',
    fullDesc: 'Many rural schools in Zimbabwe lack reliable electricity, limiting study hours and digital education. Our youth engineers design and install modular 2kW-5kW solar systems that power classrooms, computer labs, and teacher housing, ensuring continuous learning.',
    impactMetrics: [
      '14 Rural Schools Electrified',
      '4,800+ Students Benefited',
      '100% Off-Grid Reliability'
    ],
    status: 'Active',
    imageUrl: workshopImg,
    beneficiariesCount: '4,800+ Students'
  },
  {
    id: 'init-indigenous-agroforestry',
    title: 'Miombo Woodlands Reforestation',
    category: 'Reforestation',
    location: 'Goromonzi & Chimanimani Districts',
    shortDesc: 'Restoring degraded native woodlands through youth-managed indigenous tree nurseries and soil conservation.',
    fullDesc: 'Deforestation threatens Zimbabwe\'s natural biodiversity and water catchments. We partner with local youth clubs to grow native Miombo saplings, fruit trees, and drought-resistant flora that combat erosion and build sustainable community food forests.',
    impactMetrics: [
      '15,000+ Native Saplings Planted',
      '8 Community Nurseries Established',
      '92% Sapling Survival Rate'
    ],
    status: 'Active',
    imageUrl: fieldworkImg,
    beneficiariesCount: '12 Communities'
  },
  {
    id: 'init-fellowship',
    title: 'Zimbabwe Youth Climate Fellowship',
    category: 'Education',
    location: 'Harare HQ & Virtual nationwide',
    shortDesc: 'A 6-month intensive incubator empowering 50 young climate innovators per year with engineering and advocacy skills.',
    fullDesc: 'Selected fellows receive hands-on training in solar design, project management, climate policy, and seed funding opportunities. Graduates go on to launch local green micro-enterprises and lead regional advocacy chapters.',
    impactMetrics: [
      '120 Fellows Graduated',
      '15 Green Micro-Startups Launched',
      '$25,000 Seed Grants Distributed'
    ],
    status: 'Expanding',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    beneficiariesCount: '120+ Climate Fellows'
  },
  {
    id: 'init-biogas-clean-cook',
    title: 'Clean Cooking & Biogas Labs',
    category: 'Innovation',
    location: 'Peri-urban Chitungwiza & Epworth',
    shortDesc: 'Replacing household firewood dependencies with low-cost organic waste bio-digesters and clean cookstoves.',
    fullDesc: 'Indoor air pollution from wood burning affects thousands of households. Our innovation team builds household bio-digesters that convert market food waste into clean cooking gas and organic fertilizer, reducing deforestation pressure.',
    impactMetrics: [
      '85 Bio-digesters Installed',
      '3.5 Tons Waste Diverted Monthly',
      '70% Reduced Fuel Expenses'
    ],
    status: 'Completed Milestone',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    beneficiariesCount: '350+ Households'
  },
  {
    id: 'init-eco-clubs',
    title: 'Schools Climate Literacy & Innovation Clubs',
    category: 'Education',
    location: 'Bulawayo & Gweru Urban',
    shortDesc: 'Interactive climate literacy kits, recycled art, and rainwater harvesting projects in high schools.',
    fullDesc: 'We equip student environmental clubs with practical toolkits for weather monitoring, rainwater harvesting, and school garden composting, turning environmental science into active community projects.',
    impactMetrics: [
      '32 Active High School Clubs',
      '1,200 Student Ambassadors',
      '6 Rainwater Systems Built'
    ],
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    beneficiariesCount: '1,200+ Students'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Solar Assembly Workshop in Harare',
    category: 'Workshops',
    location: 'Harare Innovation Hub',
    date: 'June 2026',
    imageUrl: workshopImg,
    caption: 'Youth climate fellows learning hands-on wiring, solar inverter calibration, and maintenance for rural micro-grids.',
    tags: ['Solar Energy', 'Youth Leadership', 'Tech Training']
  },
  {
    id: 'gal-2',
    title: 'Community Tree Planting Drive',
    category: 'Field Work',
    location: 'Goromonzi District',
    date: 'May 2026',
    imageUrl: fieldworkImg,
    caption: 'Over 200 local volunteers gathered in Goromonzi to plant indigenous mahogany and acacia saplings along riverbanks.',
    tags: ['Reforestation', 'Volunteers', 'Indigenous Flora']
  },
  {
    id: 'gal-3',
    title: 'Youth Climate Summit Zimbabwe',
    category: 'Workshops',
    location: 'Celebration Centre, Harare',
    date: 'April 2026',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    caption: 'Keynote panel with youth delegates presenting policy recommendations to Ministry of Environment representatives.',
    tags: ['Policy', 'Advocacy', 'Summit']
  },
  {
    id: 'gal-4',
    title: 'Rural School Solar Power Commissioning',
    category: 'Community',
    location: 'Manicaland Province',
    date: 'March 2026',
    imageUrl: heroImg,
    caption: 'Students and teachers celebrating the switch-on of 3kW solar microgrid powering their evening study center.',
    tags: ['Clean Energy', 'Education', 'Manicaland']
  },
  {
    id: 'gal-5',
    title: 'Organic Biogas Digester Demonstration',
    category: 'Field Work',
    location: 'Chitungwiza Urban Farm',
    date: 'February 2026',
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    caption: 'Demonstrating clean methane gas production from organic marketplace waste for local market vendors.',
    tags: ['Biogas', 'Waste to Energy', 'Circular Economy']
  },
  {
    id: 'gal-6',
    title: 'Youth Eco-Club Rainwater Harvesting',
    category: 'Community',
    location: 'Bulawayo High School',
    date: 'January 2026',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    caption: 'High school climate club members constructing a 5,000L rainwater tank to irrigate their nutrition garden.',
    tags: ['Water Security', 'School Clubs', 'Bulawayo']
  }
];

// keyImpactStats removed as requested
