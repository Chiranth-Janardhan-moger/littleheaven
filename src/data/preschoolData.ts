import { Program, DailyActivity, WhyFeature, GalleryItem, ParentReview, StatItem, Teacher } from '../types';

import heroChildrenImg from '../assets/images/hero_preschool_children_1784886465304.jpg';
import readingNookImg from '../assets/images/preschool_reading_nook_1784886477431.jpg';
import outdoorPlayImg from '../assets/images/preschool_outdoor_play_1784886489371.jpg';
import creativeArtsImg from '../assets/images/preschool_creative_arts_1784886500740.jpg';

export const HERO_MAIN_IMAGE = heroChildrenImg;

export const HERO_STATS: StatItem[] = [
  {
    id: 'stat-1',
    number: 500,
    suffix: '+',
    label: 'Happy Students',
    sublabel: 'Thriving in our nurturing environment',
    icon: 'GraduationCap'
  },
  {
    id: 'stat-2',
    number: 15,
    suffix: '+',
    label: 'Experienced Teachers',
    sublabel: 'Certified early-childhood educators',
    icon: 'Award'
  },
  {
    id: 'stat-3',
    number: 100,
    suffix: '%',
    label: 'Safe Campus',
    sublabel: '24/7 CCTV & secure access',
    icon: 'ShieldCheck'
  },
  {
    id: 'stat-4',
    number: 1,
    suffix: '#',
    label: 'Play Based Learning',
    sublabel: 'Curriculum built for curiosity',
    icon: 'Sparkles'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'day-care',
    title: 'Day Care',
    ageGroup: '1.5 - 2.5 Years',
    timing: '8:00 AM - 6:00 PM',
    description: 'A home-away-from-home nurturing sanctuary focused on safety, sensory stimulation, social bonding, and gentle routine.',
    longDescription: 'Our Day Care program provides full-day peace of mind for working parents. Children enjoy balanced organic meals, restful nap routines, sensory discovery play, and individualized care from certified pediatric-trained staff in a hygienic, warm atmosphere.',
    iconName: 'Baby',
    image: heroChildrenImg,
    ratio: '1:5 Caregiver Ratio',
    keySkills: ['Sensory Exploration', 'Emotional Bonding', 'Basic Motor Skills', 'Routine Comfort'],
    features: ['Pediatric first-aid certified staff', 'Strict organic nutritional guidelines', 'Live CCTV view access for parents', 'Peaceful soundproof nap pods'],
    badgeColor: 'from-blue-500 to-sky-400'
  },
  {
    id: 'nursery',
    title: 'Nursery',
    ageGroup: '3 - 4 Years',
    timing: '9:00 AM - 12:30 PM',
    description: 'Fostering foundational literacy, early numbers, creative expression, and interactive collaborative project work.',
    longDescription: 'In Nursery, children step into structured wonder. We introduce phonics sounds, shape recognition, basic counting, nature exploration, and fine motor art projects that turn abstract concepts into joyful tactile experiences.',
    iconName: 'BookOpen',
    image: readingNookImg,
    ratio: '1:8 Teacher Ratio',
    keySkills: ['Phonics & Letter Sounds', 'Number Concepts 1-20', 'Fine Motor Control', 'Scientific Inquiry'],
    features: ['Smart digital interactive boards', 'Storybook reading nooks', 'Mini botanical garden discovery', 'Guided art & clay sculpting'],
    badgeColor: 'from-blue-600 to-indigo-400'
  },
  {
    id: 'play-group',
    title: 'Play Group (PG)',
    ageGroup: '2 - 3 Years',
    timing: '9:00 AM - 12:00 PM',
    description: 'Encouraging natural curiosity through unstructured creative play, tactile building blocks, music, and peer socialization.',
    longDescription: 'Play Group introduces children to structured group play without academic pressure. Through song, movement, kinetic sand, building blocks, and puppet stories, toddlers learn sharing, communication, and emotional self-expression.',
    iconName: 'Sparkles',
    image: creativeArtsImg,
    ratio: '1:7 Teacher Ratio',
    keySkills: ['Social Sharing', 'Vocabulary Growth', 'Kinetic Building', 'Rhythm & Song'],
    features: ['Montessori sensory play tables', 'Daily music & movement circles', 'Potty training support guidance', 'Language immersion corners'],
    badgeColor: 'from-sky-500 to-cyan-400'
  },
  {
    id: 'lkg',
    title: 'LKG',
    ageGroup: '4 - 5 Years',
    timing: '8:30 AM - 1:00 PM',
    description: 'Developing independent problem-solving, structured reading readiness, logical math, and STEM curiosity.',
    longDescription: 'LKG bridges play-based learning with academic readiness. Students master sight words, simple addition concepts, environmental science, coding fundamentals through physical games, and confident public speaking during Show & Tell.',
    iconName: 'BrainCircuit',
    image: outdoorPlayImg,
    ratio: '1:10 Teacher Ratio',
    keySkills: ['Sentence Building', 'Logic & Spatial Reasoning', 'STEM Hands-on Labs', 'Teamwork Projects'],
    features: ['Early STEM mini-laboratories', 'Show & Tell auditorium sessions', 'Bilingual language exposure', 'Junior computer interactive play'],
    badgeColor: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'ukg',
    title: 'UKG',
    ageGroup: '5 - 6 Years',
    timing: '8:30 AM - 1:30 PM',
    description: 'Preparing future leaders with advanced literacy, creative writing, elementary mathematics, and primary school readiness.',
    longDescription: 'UKG empowers children with supreme confidence before entering primary school. We focus on fluent reading, creative story writing, basic mental math, environmental ethics, leadership roles in class, and athletic coordination.',
    iconName: 'Rocket',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
    ratio: '1:10 Teacher Ratio',
    keySkills: ['Fluent Reading & Writing', 'Elementary Arithmetic', 'Public Presentation', 'Primary School Bridge'],
    features: ['Primary school simulation weeks', 'Public speaking leadership modules', 'Chess & logical strategy games', 'Advanced sports & gymnastics'],
    badgeColor: 'from-sky-600 to-blue-700'
  }
];

export const DAILY_TIMELINE: DailyActivity[] = [
  {
    id: 'act-1',
    title: 'Welcome & Morning Warmth',
    time: '08:30 AM - 09:00 AM',
    icon: 'Sun',
    category: 'Greeting & Care',
    description: 'Warm greetings at the glass entrance, health check-in, shoe store routine, and gentle transition into morning free choice stations.',
    details: 'Teachers greet every child individually by name. Children practice responsibility hanging up their bags and choosing their morning activity station.',
    highlights: ['Individual greeting', 'Health & mood check', 'Morning melody music', 'Free choice discovery'],
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'act-2',
    title: 'Circle Time & Assembly',
    time: '09:00 AM - 09:30 AM',
    icon: 'Users',
    category: 'Community & Voice',
    description: 'Interactive morning circle: calendar check, weather forecast, daily theme discussion, patriotic song, and mindfulness breathing.',
    details: 'Children sit together on soft glass-cushioned rugs, share news, sing the school anthem, and practice child-friendly diaphragmatic breathing.',
    highlights: ['Weather & calendar wheel', 'Daily helper rotation', 'Mindfulness moment', 'Group sing-along'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'act-3',
    title: 'Interactive Smart Learning',
    time: '09:30 AM - 10:30 AM',
    icon: 'Lightbulb',
    category: 'Core Curriculum',
    description: 'Differentiated small-group learning focusing on phonics, numeracy, hands-on STEM puzzles, and interactive touch-screen discovery.',
    details: 'Teachers guide rotation stations where children explore letter sounds with tactile sand cards, construct geometric models, and test basic science experiments.',
    highlights: ['Phonics & vocabulary', 'Math manipulatives', 'STEM mini experiments', 'Small group guidance'],
    image: heroChildrenImg
  },
  {
    id: 'act-4',
    title: 'Organic Snack & Hydration Break',
    time: '10:30 AM - 11:00 AM',
    icon: 'Apple',
    category: 'Nutrition & Table Manners',
    description: 'Chef-prepared fresh fruit, organic smoothies, and warm healthy snacks served in our serene glass dining space with table etiquette.',
    details: 'Children wash hands thoroughly, practice saying grace/thanks, pass dishes politely, and learn about colorful nutritious foods.',
    highlights: ['100% organic ingredients', 'Handwashing hygiene station', 'Self-serving practice', 'Nutritional literacy'],
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'act-5',
    title: 'Outdoor Play & Sensory Park',
    time: '11:00 AM - 11:45 AM',
    icon: 'Smile',
    category: 'Gross Motor & Physical',
    description: 'Energetic outdoor fun on rubberized turf, mini slides, sensory splash pools, tricycle tracks, and soft climbing domes.',
    details: 'Supervised physical play helps children release energy, improve gross motor coordination, build bone strength, and practice turn-taking.',
    highlights: ['Rubberized safe turf', 'Sensory water/sand play', 'Tricycle slalom park', 'Climbing balance beams'],
    image: outdoorPlayImg
  },
  {
    id: 'act-6',
    title: 'Creative Art & Music Studio',
    time: '11:45 AM - 12:30 PM',
    icon: 'Palette',
    category: 'Fine Arts & Rhythm',
    description: 'Expressive painting, pottery crafting, orchestra instrument jam sessions, and dramatic roleplay costumed theater.',
    details: 'Children explore finger painting, water colors, recycled craft building, ukulele strumming, and theatrical storytelling.',
    highlights: ['Mess-free non-toxic paints', 'Percussion band jam', 'Costume dress-up stage', 'Clay sculpting'],
    image: creativeArtsImg
  },
  {
    id: 'act-7',
    title: 'Storybook Time & Nook Chill',
    time: '12:30 PM - 01:00 PM',
    icon: 'BookOpen',
    category: 'Literacy & Calm',
    description: 'Cozy immersion in our glass library nook with puppet storytelling, audiobooks, soft ambient soundscapes, and reflection.',
    details: 'A calm wind-down period where children listen to magical stories, turn pages independently, and ask thoughtful questions about characters.',
    highlights: ['Interactive puppet shows', 'Soft beanbag library', 'Audiobook listening stations', 'Character discussion'],
    image: readingNookImg
  },
  {
    id: 'act-8',
    title: 'Goodbye Hugs & Safe Pickup',
    time: '01:00 PM - 01:30 PM',
    icon: 'HeartHandshake',
    category: 'Farewell & Reflection',
    description: 'Reviewing the day’s achievements, packing belongings independently, sticker reward badges, and secure parent check-out.',
    details: 'Children reflect on their favorite part of the day, receive high-fives and hugs from educators, and transition safely to parents via biometric check-out.',
    highlights: ['Daily star sticker', 'Biometric pickup verification', 'Parent daily brief report', 'Warm farewell hugs'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    id: 'why-1',
    title: 'Experienced Teachers',
    badge: '100% Certified',
    icon: 'Award',
    description: 'Every educator holds specialized degrees in Early Childhood Education and pediatric first-aid certifications.',
    highlight: 'Continuous monthly international training modules'
  },
  {
    id: 'why-2',
    title: 'Safe Campus',
    badge: 'Zero Hazard Zone',
    icon: 'ShieldCheck',
    description: 'Custom rounded furniture, non-toxic organic materials, finger-guard doors, and antibacterial glass surfaces.',
    highlight: 'Biometric entry and double-gated perimeter security'
  },
  {
    id: 'why-4',
    title: 'Activity Based Learning',
    badge: 'Hand-on Discovery',
    icon: 'Sparkles',
    description: 'Learning through physical touch, sensory experiments, kinetic building blocks, and play-based games.',
    highlight: '3x higher retention compared to passive learning'
  },
  {
    id: 'why-5',
    title: 'Smart Classrooms',
    badge: 'Future Ready',
    icon: 'Monitor',
    description: 'Interactive glass touch panels, ergonomic child-sized furniture, ambient air purifiers, and glare-free lighting.',
    highlight: 'HEPA filtration keeping air 99.9% virus free'
  },
  {
    id: 'why-6',
    title: 'Indoor Games Arena',
    badge: 'All-Weather Fun',
    icon: 'Gamepad2',
    description: 'Soft play mazes, indoor foam climbing walls, kinetic sand pits, and toddler ball pools.',
    highlight: 'Climate-controlled safe indoor play physical space'
  },
  {
    id: 'why-7',
    title: 'Outdoor Sensory Park',
    badge: 'Nature & Motion',
    icon: 'Sun',
    description: 'Rubberized shock-absorbent turf, mini splash play stream, organic vegetable garden, and balance tracks.',
    highlight: 'Daily 45-minute sunshine & vitamin D immersion'
  },
  {
    id: 'why-8',
    title: 'Parent Communication',
    badge: 'Instant Updates',
    icon: 'MessageCircle',
    description: 'Daily digital logs detailing meal intake, nap duration, learning milestones, and photo moments.',
    highlight: 'Direct one-touch messaging with class educators'
  },
  {
    id: 'why-9',
    title: 'Individual Attention',
    badge: 'Low Student Ratio',
    icon: 'UserCheck',
    description: 'Strict 1:7 maximum ratio ensuring every child’s unique personality, pace, and strengths are nurtured.',
    highlight: 'Customized learning growth plan for every student'
  },
  {
    id: 'why-10',
    title: 'Healthy Environment',
    badge: 'Sanitised & Clean',
    icon: 'Sparkle',
    description: 'UV-C night sanitization, non-toxic eco cleaners, organic meal kitchen, and regular health check-ups.',
    highlight: 'On-campus pediatric nurse during operating hours'
  }
];

export const GALLERY_BOOK_PAGES: GalleryItem[] = [
  {
    id: 'page-1',
    title: 'Morning Sunshine Discovery',
    category: 'Classroom',
    image: heroChildrenImg,
    caption: 'Our toddlers engaging in collaborative block building and spatial logic games in the morning light.',
    ageTag: 'Nursery (3-4 yrs)',
    highlight: 'Building confidence through team problem solving',
    pageNumber: 1
  },
  {
    id: 'page-2',
    title: 'The Enchanted Storybook Hour',
    category: 'Classroom',
    image: readingNookImg,
    caption: 'Curiosity comes alive in our cozy reading nook as Teacher Sarah narrates classic tales of adventure.',
    ageTag: 'Play Group (2-3 yrs)',
    highlight: 'Fostering lifelong love for books & imagination',
    pageNumber: 2
  },
  {
    id: 'page-3',
    title: 'Outdoor Sensory Park Thrills',
    category: 'Outdoor',
    image: outdoorPlayImg,
    caption: 'Laughing, sliding, and balancing on soft rubberized turf in our safe, sunlit outdoor courtyard.',
    ageTag: 'LKG (4-5 yrs)',
    highlight: 'Developing gross motor agility & teamwork',
    pageNumber: 3
  },
  {
    id: 'page-4',
    title: 'Colors of Imagination Studio',
    category: 'Creative',
    image: creativeArtsImg,
    caption: 'Expressing inner wonder through finger painting, non-toxic colors, and clay sculpting masterpieces.',
    ageTag: 'Day Care & Play Group',
    highlight: 'Unlocking creative self-expression without limits',
    pageNumber: 4
  },
  {
    id: 'page-5',
    title: 'Annual Grand Sports Gala',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000',
    caption: 'Our young athletes celebrating teamwork, relay races, and joyous sportsmanship awards.',
    ageTag: 'UKG (5-6 yrs)',
    highlight: 'Learning fair play, balance & sportsmanship',
    pageNumber: 5
  },
  {
    id: 'page-6',
    title: 'Little Chefs Baking Day',
    category: 'Celebration',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=1000',
    caption: 'Rolling dough, decorating organic oat cookies, and discovering nutritional science in our mini kitchen.',
    ageTag: 'Nursery & LKG',
    highlight: 'Tactile math, measurement & culinary fun',
    pageNumber: 6
  },
  {
    id: 'page-7',
    title: 'Science Fair & Robot Friends',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000',
    caption: 'Interactive robotics and volcano science demonstrations designed for inquisitive young minds.',
    ageTag: 'UKG (5-6 yrs)',
    highlight: 'Early STEM inquiry & critical thinking',
    pageNumber: 7
  },
  {
    id: 'page-8',
    title: 'Musicians of Tomorrow Jam',
    category: 'Celebration',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000',
    caption: 'Xylophones, percussion drums, and mini guitars echoing harmony across our glass auditorium.',
    ageTag: 'All Age Groups',
    highlight: 'Developing ear training, pitch & rhythm',
    pageNumber: 8
  }
];

export const PARENT_REVIEWS: ParentReview[] = [
  {
    id: 'rev-1',
    name: 'A Parent',
    childName: 'Preschooler',
    childClass: 'Parent',
    rating: 5,
    reviewText: 'The teachers are caring and patient. My child looks forward to going to school every day. We\'ve noticed great improvements in confidence and communication.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    location: 'Hebbal, Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-2',
    name: 'Parent of Nursery Student',
    childName: 'Nursery Child',
    childClass: 'Parent of Nursery Student',
    rating: 5,
    reviewText: 'A safe, clean, and nurturing environment with engaging learning activities. The staff always keeps parents informed.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    location: 'Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-3',
    name: 'Parent of LKG Student',
    childName: 'LKG Student',
    childClass: 'Parent of LKG Student',
    rating: 5,
    reviewText: 'The classrooms are bright and well-maintained. My child has become more independent and enjoys every activity.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    location: 'Dasarahalli, Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-4',
    name: 'Parent of UKG Student',
    childName: 'UKG Student',
    childClass: 'Parent of UKG Student',
    rating: 5,
    reviewText: 'The teachers genuinely care about every child. We appreciate the personal attention and friendly atmosphere.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    location: 'Hebbal, Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-5',
    name: 'Parent of Play Group Student',
    childName: 'Play Group Toddler',
    childClass: 'Parent of Play Group Student',
    rating: 5,
    reviewText: 'Excellent preschool with fun learning activities, caring teachers, and a secure environment. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    location: 'Bhuvaneswari Nagar',
    date: 'Recent Review'
  },
  {
    id: 'rev-6',
    name: 'A Parent',
    childName: 'Preschooler',
    childClass: 'Parent',
    rating: 5,
    reviewText: 'We are very happy with the overall experience. The curriculum balances learning and play beautifully.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    location: 'Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-7',
    name: 'Parent of Day Care Child',
    childName: 'Day Care Child',
    childClass: 'Parent of Day Care Child',
    rating: 5,
    reviewText: 'Incredible peace of mind for working parents. The caregivers are attentive, kind, and treat every child with so much love.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    location: 'Hebbal, Bengaluru',
    date: 'Recent Review'
  },
  {
    id: 'rev-8',
    name: 'Parent of Toddler',
    childName: 'Toddler',
    childClass: 'Parent of Toddler',
    rating: 5,
    reviewText: 'The facility is extremely clean, well-equipped, and filled with warmth. Highly recommended for early learning and child care!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    location: 'Dasarahalli, Bengaluru',
    date: 'Recent Review'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins, M.Ed.',
    role: 'Head of Early Pedagogy',
    qualification: 'M.Ed. Early Childhood, Cambridge Certified',
    experience: '12+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    specialty: 'Montessori Phonics & Child Psychology'
  },
  {
    id: 't-2',
    name: 'Pooja Reddy, B.A.',
    role: 'Senior Nursery Lead',
    qualification: 'Diploma in Child Care & Special Ed',
    experience: '8+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    specialty: 'Sensory Art & Play Therapy'
  },
  {
    id: 't-3',
    name: 'Michael Chang, B.Sc.',
    role: 'Junior STEM & Logic Specialist',
    qualification: 'B.Sc. Elementary Science, First-Aid Certified',
    experience: '6+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    specialty: 'Kinetic Math & Outdoor Sports'
  }
];
