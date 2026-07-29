import { Program, DailyActivity, WhyFeature, GalleryItem, ParentReview, StatItem, InstagramReel } from '../types';

export const HERO_MAIN_IMAGE = '/1.jpeg';

export const HERO_STATS: StatItem[] = [
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
  },
  {
    id: 'stat-5',
    number: 24,
    suffix: '/7',
    label: 'Personalised App',
    sublabel: 'Real-time updates & daily reports',
    icon: 'Smartphone'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'day-care',
    title: 'Day Care',
    ageGroup: '9 Months - 1 Year',
    timing: '8:00 AM - 6:00 PM',
    description: 'A home-away-from-home nurturing sanctuary focused on safety, sensory stimulation, social bonding, and gentle routine.',
    longDescription: 'Our Day Care program provides full-day peace of mind for working parents. Children enjoy balanced organic meals, restful nap routines, sensory discovery play, and individualized care from certified pediatric-trained staff in a hygienic, warm atmosphere.',
    iconName: 'Baby',
    image: '/daycare.jpeg',
    ratio: '1:5 Caregiver Ratio',
    keySkills: ['Sensory Exploration', 'Emotional Bonding', 'Basic Motor Skills', 'Routine Comfort'],
    features: ['Pediatric first-aid certified staff', 'Strict organic nutritional guidelines', 'Live CCTV view access for parents', 'Peaceful soundproof nap pods'],
    badgeColor: 'from-blue-500 to-sky-400'
  },
  {
    id: 'play-group',
    title: 'Play Group (PG)',
    ageGroup: '2 - 3 Years',
    timing: '10:00 AM - 1:00 PM',
    description: 'Encouraging natural curiosity through unstructured creative play, tactile building blocks, music, and peer socialization.',
    longDescription: 'Play Group introduces children to structured group play without academic pressure. Through song, movement, kinetic sand, building blocks, and puppet stories, toddlers learn sharing, communication, and emotional self-expression.',
    iconName: 'Sparkles',
    image: '/pg.jpeg',
    ratio: '1:7 Teacher Ratio',
    keySkills: ['Social Sharing', 'Vocabulary Growth', 'Kinetic Building', 'Rhythm & Song'],
    features: ['Montessori sensory play tables', 'Daily music & movement circles', 'Potty training support guidance', 'Language immersion corners'],
    badgeColor: 'from-sky-500 to-cyan-400'
  },
  {
    id: 'nursery',
    title: 'Nursery',
    ageGroup: '3 - 4 Years',
    timing: '10:00 AM - 1:00 PM',
    description: 'Fostering foundational literacy, early numbers, creative expression, and interactive collaborative project work.',
    longDescription: 'In Nursery, children step into structured wonder. We introduce phonics sounds, shape recognition, basic counting, nature exploration, and fine motor art projects that turn abstract concepts into joyful tactile experiences.',
    iconName: 'BookOpen',
    image: '/nusey.jpeg',
    ratio: '1:8 Teacher Ratio',
    keySkills: ['Phonics & Letter Sounds', 'Number Concepts 1-20', 'Fine Motor Control', 'Scientific Inquiry'],
    features: ['Smart digital interactive boards', 'Storybook reading nooks', 'Mini botanical garden discovery', 'Guided art & clay sculpting'],
    badgeColor: 'from-blue-600 to-indigo-400'
  },
  {
    id: 'activity-corner',
    title: 'Activity Corner',
    ageGroup: 'Any Age',
    timing: '10:00 AM - 8:00 PM',
    description: 'Engaging creative workshops, indoor games, hobby crafts, and supervised interactive play throughout the day.',
    longDescription: 'Our Activity Corner provides children of all ages an inspiring creative space between 10:00 AM and 8:00 PM for crafts, Lego building, pottery, storytelling, and indoor games.',
    iconName: 'Sparkles',
    image: '/activity.jpeg',
    ratio: 'All Age Groups',
    keySkills: ['Creative Crafts', 'Hobby Exploration', 'Interactive Games', 'Social Bonding'],
    features: ['All-day hobby workshops', 'Interactive board games & puzzles', 'Creative arts & painting', 'Supervised safe environment'],
    badgeColor: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'after-school-program',
    title: 'After School Program',
    ageGroup: 'Any Age',
    timing: '1:00 PM - 3:00 PM',
    description: 'Comprehensive after-school care, homework assistance, reading sessions, and enrichment activities.',
    longDescription: 'Designed for students needing productive afternoon care, our After School Program (1:00 PM - 3:00 PM) offers structured homework guidance, storybook reading, nutritious snack breaks, and quiet rest.',
    iconName: 'BookOpen',
    image: '/after-school.jpeg',
    ratio: 'All Age Groups',
    keySkills: ['Homework Support', 'Reading Fluency', 'Guided Reflection', 'Enrichment Skills'],
    features: ['Dedicated homework guidance', 'Quiet reading & story nooks', 'Healthy snack breaks', 'Creative skill building'],
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
    image: '/1.jpeg'
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
    image: '/2.jpeg'
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
    image: '/3.jpeg'
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
    image: '/4.jpeg'
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
    id: 'why-0',
    title: 'Personalised App',
    badge: 'Real-Time Updates',
    icon: 'Smartphone',
    description: 'Track daily activities, meal intake, nap schedules, live updates, and direct messaging with class educators.',
    highlight: 'Dedicated parent mobile app for peace of mind'
  },
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
    title: '1st Anniversary Milestone Celebration',
    category: 'Milestone',
    image: '/anniversary.jpeg',
    caption: 'Commemorating one golden year of nurturing young minds, inspiring endless curiosity, and building a warm sanctuary of love, laughter, and learning together.',
    ageTag: 'Grand Milestone',
    highlight: 'Celebrating 1 year of joyful learning & community',
    pageNumber: 1
  },
  {
    id: 'page-2',
    title: 'Festival Rituals & Traditions',
    category: 'Celebration',
    image: '/Ganesha Chaturti.jpeg',
    caption: 'A tender moment as teacher guides a young child through traditional pooja rituals, teaching respect, mindfulness, and cultural values with patience and love.',
    ageTag: 'Nursery & Play Group',
    highlight: 'Learning heritage through hands-on experience',
    pageNumber: 2
  },
  {
    id: 'page-3',
    title: 'Republic Day Celebration',
    category: 'Celebration',
    image: '/Repiblic day.jpeg',
    caption: 'Teachers and children dressed in festive attire, celebrating together with warmth and joy. Building lasting bonds that extend beyond the classroom.',
    ageTag: 'All Age Groups',
    highlight: 'Creating a nurturing family atmosphere',
    pageNumber: 3
  },
  {
    id: 'page-4',
    title: 'Moments of Prayer & Peace',
    category: 'Celebration',
    image: '/Devotinal .jpeg',
    caption: 'Children learning the values of gratitude, respect, and mindfulness through prayer and meditation during festive celebrations.',
    ageTag: 'LKG & UKG',
    highlight: 'Cultivating inner calm and spiritual values',
    pageNumber: 4
  },
  {
    id: 'page-5',
    title: 'Proud Little Indians',
    category: 'Celebration',
    image: '/Independence .jpeg',
    caption: 'Independence Day celebration with our young patriots proudly waving the tricolor, learning about our nation, its values, and the spirit of freedom.',
    ageTag: 'All Age Groups',
    highlight: 'Building patriotism and national pride',
    pageNumber: 5
  },
  {
    id: 'page-6',
    title: 'Circle Time Learning',
    category: 'Classroom',
    image: '/Circle time.jpeg',
    caption: 'Our vibrant circle time where children gather together for stories, songs, and group activities that build social skills and community bonds.',
    ageTag: 'Day Care & Play Group',
    highlight: 'Building social skills through group activities',
    pageNumber: 6
  },
  {
    id: 'page-7',
    title: 'Happy Moments of Play',
    category: 'Classroom',
    image: '/g7.jpeg',
    caption: 'A joyful child engaged in playful learning with colorful toys and educational materials, building skills through hands-on exploration and fun.',
    ageTag: 'Play Group (2-3 yrs)',
    highlight: 'Learning happens through joyful play',
    pageNumber: 7
  },
  {
    id: 'page-8',
    title: 'Onam Celebration Together',
    category: 'Celebration',
    image: '/Onam Celebration.jpeg',
    caption: 'Children, parents, and teachers celebrating Onam festival with colorful traditional attire, flower rangoli, and beautiful cultural decorations creating memories together.',
    ageTag: 'All Age Groups',
    highlight: 'Celebrating Kerala traditions as one family',
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

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-first',
    image: '/reels/reel-first.png',
    url: 'https://www.instagram.com/reel/DVu64jXD0Cp/?igsh=MXFsN3p6MGhya2d1eg==',
    caption: 'Special moments & joyful memories at Little\'s Heaven! 🌟✨',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-1',
    image: '/reels/reel-1.png',
    url: 'https://www.instagram.com/reel/DawzpIhPy0X/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==',
    caption: 'Messy hands, happy hearts! Finger painting afternoon with our toddlers in Nursery. 🎨✨',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-2',
    image: '/reels/reel-2.png',
    url: 'https://www.instagram.com/reel/DQbA6m-j3Wo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Future architects at work! Exploring STEM geometry with colorful block towers. 🧱🚀',
    tag: '#LittlesHeavenKids',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-3',
    image: '/reels/reel-3.png',
    url: 'https://www.instagram.com/reel/DRjgFi7D75U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Storytime magical corner! Today we traveled to fairytale worlds with Ms. Sarah 📚👑',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-4',
    image: '/reels/reel-4.png',
    url: 'https://www.instagram.com/reel/DVdDwq3D_sh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Sunshine & smiles! Outdoor play session on our certified green play lawn ☀️🏃‍♂️',
    tag: '#LittlesHeavenPlay',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-5',
    image: '/reels/reel-5.png',
    url: 'https://www.instagram.com/reel/DTuruGPj6PQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Organic healthy snack time! Fresh fruits and smiles all around our dining tables 🍎🍌',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-6',
    image: '/reels/reel-6.png',
    url: 'https://www.instagram.com/reel/DRhfnOXD-KT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Music & Movement circle! Twirling, dancing, and finding rhythm together 🎶💃',
    tag: '#LittlesHeavenKids',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-7',
    image: '/reels/reel-7.png',
    url: 'https://www.instagram.com/reel/DXquyFTD4Tf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Mini botanists exploring our campus garden! Observing leaves & sensory textures 🌿🔍',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-8',
    image: '/reels/reel-8.png',
    url: 'https://www.instagram.com/reel/DbC2DgCPmRJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Graduation day celebrations! So proud of our bright young leaders stepping into LKG 🎉🎓',
    tag: '#LittlesHeavenGrads',
    handle: '@littlesheaven.official'
  },
  {
    id: 'reel-9',
    image: '/reels/reel-9.png',
    url: 'https://www.instagram.com/reel/DNYFLObvJGg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    caption: 'Creative learning journey filled with joy and interactive play at Little\'s Heaven! 🌟✨',
    tag: '#LittlesHeaven',
    handle: '@littlesheaven.official'
  }
];
