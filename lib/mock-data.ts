import type { Post, User, Comment } from './types';

// Generate realistic dummy data
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah.smith',
    avatarUrl: '/images/user/sara.jpeg',
    followersCount: 12453,
    followingCount: 1234,
  },
  {
    id: '2',
    username: 'mike.photo',
    avatarUrl: '/images/user/mike.png',
    followersCount: 34521,
    followingCount: 876,
  },
  {
    id: '3',
    username: 'travel.lens',
    avatarUrl: '/images/user/travel.png',
    followersCount: 98762,
    followingCount: 2345,
  },
];

export const mockPosts: Post[] = [
  // Reels
  {
    id: '1101',
    userId: '1',  
    type: 'image',
    caption: 'Ronit',
    mediaUrl: '/images/image156.jpg',
    createdAt: '2024-03-20T08:00:00Z',
    likes: 1523,
    comments: 89,
    shares: 45,
    views: 15234,
  },
  {
    id: '2',
    userId: '2',
    type: 'reel',
    caption: 'Easy cooking tips! 🍳 #cooking #foodie',
    mediaUrl: '/images/image158.jpg',
    createdAt: '2024-03-19T15:30:00Z',
    likes: 2341,
    comments: 156,
    shares: 234,
    views: 28567,
  },
  {
    id: '1',
    userId: '1',
    type: 'reel',
    caption: 'Morning workout routine 💪 #fitness #motivation',
    mediaUrl: '/images/image159.jpg',
    createdAt: '2024-03-20T08:00:00Z',
    likes: 1523,
    comments: 89,
    shares: 45,
    views: 15234,
  },
  {
    id: '2',
    userId: '2',
    type: 'reel',
    caption: 'Easy cooking tips! 🍳 #cooking #foodie',
    mediaUrl: '/images/image162.jpg',
    createdAt: '2024-03-19T15:30:00Z',
    likes: 2341,
    comments: 156,
    shares: 234,
    views: 28567,
  },
  {
    id: '1',
    userId: '1',
    type: 'reel',
    caption: 'Morning workout routine 💪 #fitness #motivation',
    mediaUrl: '/images/image160.jpg',
    createdAt: '2024-03-20T08:00:00Z',
    likes: 1523,
    comments: 89,
    shares: 45,
    views: 15234,
  },
  {
    id: '2',
    userId: '2',
    type: 'reel',
    caption: 'Easy cooking tips! 🍳 #cooking #foodie',
    mediaUrl: '/images/image161.jpg',
    createdAt: '2024-03-19T15:30:00Z',
    likes: 2341,
    comments: 156,
    shares: 234,
    views: 28567,
  },

  // Carousels
  {
    id: '1',
    userId: '3',
    type: 'carousel',
    question: 'What’s your reaction when code works on the first try?',
    option1: 'I’m a genius!',
    option2: 'Must be a miracle…',
    option3: 'What did I forget to test?',
    option4: 'This can’t be real. Restarting everything.',
    createdAt: '2025-01-07T10:00:00Z',
    likes: 4567,
    comments: 324,
    shares: 210,
  },
  {
    id: '2',
    userId: '3',
    type: 'carousel',
    question: 'What do you do when the bug just won’t go away?',
    option1: 'Blame it on the compiler.',
    option2: 'Rewrite the entire codebase.',
    option3: 'Take a snack break and hope it fixes itself.',
    option4: 'Cry quietly in a corner.',
    createdAt: '2025-01-07T10:05:00Z',
    likes: 3821,
    comments: 192,
    shares: 89,
  },
  {
    id: '3',
    userId: '3',
    type: 'carousel',
    question: 'What’s your travel personality?',
    option1: 'The over-planner: “Every minute scheduled to perfection.”',
    option2: 'The go-with-the-flow type: “We’ll figure it out!”',
    option3: 'The foodie: “Where’s the best local dish?”',
    option4: 'The photo addict: “I need 300 angles of this view.”',
    createdAt: '2025-01-07T10:10:00Z',
    likes: 5123,
    comments: 430,
    shares: 210,
  },
  {
    id: '4',
    userId: '3',
    type: 'carousel',
    question: 'What’s the ultimate procrastination activity?',
    option1: 'Cleaning random things that were never dirty.',
    option2: 'Scrolling memes for “just 5 more minutes.”',
    option3: 'Starting a new hobby you’ll never finish.',
    option4: 'Watching productivity videos instead of being productive.',
    createdAt: '2025-01-07T10:15:00Z',
    likes: 4902,
    comments: 376,
    shares: 190,
  },
  {
    id: '5',
    userId: '3',
    type: 'carousel',
    question: 'What’s your dream travel destination?',
    option1: 'Europe: “Land of castles and croissants.”',
    option2: 'Asia: “Temples, tech, and tradition.”',
    option3: 'South America: “Nature’s paradise.”',
    option4: 'Africa: “Safari and sunsets.”',
    createdAt: '2025-01-07T10:20:00Z',
    likes: 4321,
    comments: 298,
    shares: 156,
  },
    {
      id: '6',
      userId: '3',
      type: 'carousel',
      question: 'What’s your go-to drink during a coding session?',
      option1: 'Coffee',
      option2: 'Tea',
      option3: 'Energy drink',
      option4: 'Water',
      createdAt: '2025-01-07T10:25:00Z',
      likes: 3850,
      comments: 220,
      shares: 120,
    },
    {
      id: '7',
      userId: '3',
      type: 'carousel',
      question: 'What’s your favorite type of vacation?',
      option1: 'Relaxing at the beach',
      option2: 'Adventuring in the mountains',
      option3: 'Exploring cities',
      option4: 'Chilling at home',
      createdAt: '2025-01-07T10:30:00Z',
      likes: 4200,
      comments: 340,
      shares: 189,
    },
    {
      id: '8',
      userId: '3',
      type: 'carousel',
      question: 'How do you deal with a bad Wi-Fi connection?',
      option1: 'Restart the router 50 times',
      option2: 'Switch to mobile data',
      option3: 'Yell at your device',
      option4: 'Give up and read a book',
      createdAt: '2025-01-07T10:35:00Z',
      likes: 4100,
      comments: 290,
      shares: 178,
    },
    {
      id: '9',
      userId: '3',
      type: 'carousel',
      question: 'What’s the most annoying thing while traveling?',
      option1: 'Losing luggage',
      option2: 'Delayed flights',
      option3: 'Crowded tourist spots',
      option4: 'Running out of phone battery',
      createdAt: '2025-01-07T10:40:00Z',
      likes: 3900,
      comments: 270,
      shares: 145,
    },
    {
      id: '10',
      userId: '3',
      type: 'carousel',
      question: 'What’s your favorite way to relax after a long day?',
      option1: 'Netflix and chill',
      option2: 'Read a book',
      option3: 'Go for a walk',
      option4: 'Scroll endlessly on social media',
      createdAt: '2025-01-07T10:45:00Z',
      likes: 4500,
      comments: 400,
      shares: 210,
    },
    {
      id: '11',
      userId: '3',
      type: 'carousel',
      question: 'If debugging were a sport, how would you describe it?',
      option1: 'A marathon',
      option2: 'A treasure hunt',
      option3: 'A game of hide and seek',
      option4: 'A rollercoaster ride',
      createdAt: '2025-01-07T10:50:00Z',
      likes: 4800,
      comments: 410,
      shares: 300,
    },
    {
      id: '12',
      userId: '3',
      type: 'carousel',
      question: 'What’s your favorite productivity booster?',
      option1: 'Music',
      option2: 'Coffee',
      option3: 'Taking breaks',
      option4: 'Deadlines',
      createdAt: '2025-01-07T10:55:00Z',
      likes: 3700,
      comments: 210,
      shares: 110,
    },
    {
      id: '13',
      userId: '3',
      type: 'carousel',
      question: 'What’s the first thing you do when you wake up?',
      option1: 'Check my phone',
      option2: 'Make coffee',
      option3: 'Plan the day',
      option4: 'Go back to sleep',
      createdAt: '2025-01-07T11:00:00Z',
      likes: 4200,
      comments: 320,
      shares: 190,
    },
    {
      id: '14',
      userId: '3',
      type: 'carousel',
      question: 'What’s your most used emoji?',
      option1: '😂',
      option2: '❤️',
      option3: '🔥',
      option4: '💻',
      createdAt: '2025-01-07T11:05:00Z',
      likes: 5000,
      comments: 450,
      shares: 250,
    },
    {
      id: '15',
      userId: '3',
      type: 'carousel',
      question: 'What do you miss the most during a busy workday?',
      option1: 'Good sleep',
      option2: 'Home-cooked meals',
      option3: 'Spending time with family',
      option4: 'Relaxing outdoors',
      createdAt: '2025-01-07T11:10:00Z',
      likes: 4300,
      comments: 330,
      shares: 200,
    },
    // 40 more polls omitted here for brevity    
  // Images
  {
    id: '5',
    userId: '2',
    type: 'image',
    caption: 'Perfect sunset 🌅 #nature #photography',
    mediaUrl: '/images/image163.jpg',
    createdAt: '2024-03-16T18:45:00Z',
    likes: 1234,
    comments: 45,
    shares: 23,
  },
  {
    id: '6',
    userId: '3',
    type: 'image',
    caption: 'Coffee time ☕ #coffee #lifestyle',
    mediaUrl: '/images/image164.jpg',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 987,
    comments: 34,
    shares: 12,
  },
  {
    id: '5',
    userId: '2',
    type: 'image',
    caption: 'Perfect sunset 🌅 #nature #photography',
    mediaUrl: '/images/image156.jpg',
    createdAt: '2024-03-16T18:45:00Z',
    likes: 1234,
    comments: 45,
    shares: 23,
  },
  {
    id: '6',
    userId: '3',
    type: 'image',
    caption: 'Coffee time ☕ #coffee #lifestyle',
    mediaUrl: '/images/image219.jpg',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 987,
    comments: 34,
    shares: 12,
  },
  {
    id: '5',
    userId: '2',
    type: 'image',
    caption: 'Perfect sunset 🌅 #nature #photography',
    mediaUrl: '/images/image167.jpg',
    createdAt: '2024-03-16T18:45:00Z',
    likes: 1234,
    comments: 45,
    shares: 23,
  },
  {
    id: '6',
    userId: '3',
    type: 'image',
    caption: 'Coffee time ☕ #coffee #lifestyle',
    mediaUrl: '/images/image168.jpg',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 987,
    comments: 34,
    shares: 12,
  },
  {
    id: '5',
    userId: '2',
    type: 'image',
    caption: 'Perfect sunset 🌅 #nature #photography',
    mediaUrl: '/images/image46.jpg',
    createdAt: '2024-03-16T18:45:00Z',
    likes: 1234,
    comments: 45,
    shares: 23,
  },
  {
    id: '6',
    userId: '3',
    type: 'image',
    caption: 'Coffee time ☕ #coffee #lifestyle',
    mediaUrl: '/images/image170.jpg',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 987,
    comments: 34,
    shares: 12,
  },
  {
    id: '5',
    userId: '2',
    type: 'image',
    caption: 'Perfect sunset 🌅 #nature #photography',
    mediaUrl: '/images/image171.jpg',
    createdAt: '2024-03-16T18:45:00Z',
    likes: 1234,
    comments: 45,
    shares: 23,
  },
  {
    id: '6',
    userId: '3',
    type: 'image',
    caption: 'Coffee time ☕ #coffee #lifestyle',
    mediaUrl: '/images/image172.jpg',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 987,
    comments: 34,
    shares: 12,
  },

];

export const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    content: 'Amazing routine! 🔥',
    createdAt: '2024-03-20T08:15:00Z',
    likes: 45,
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    content: 'Thanks for sharing! 👏',
    createdAt: '2024-03-20T08:30:00Z',
    likes: 23,
  },
];