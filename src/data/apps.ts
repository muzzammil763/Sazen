export const developerUrl = 'https://play.google.com/store/apps/dev?id=5262989636703605828';
export const description = 'Thoughtful apps for everyday life. Explore Rafeeq, Budget AI, 99 Names – Asmaul Husna, FM Crafts, and SalahLog. Made with care by Sazen.';

export const apps = [
  {
    slug: 'rafeeq', name: 'Rafeeq', subtitle: 'Your Muslim companion', category: 'Faith & reflection', filter: 'faith', color: 'mint',
    headline: 'A little closer. Every day.',
    description: 'Make room for what matters. Read the Quran, find prayer times, and keep your daily duas close.',
    package: 'com.satechdev.rafeeqapp', website: 'https://rafeeq.pages.dev',
    features: ['Quran reading & recitation', 'Prayer times & Qibla', 'Duas & Namaz guide'],
    captions: ['Your day with Rafeeq', 'Read the Quran', 'Daily prayer times'],
    detail: 'A companion for your daily practice, from reading and listening to the Quran to finding the Qibla. Explore duas and a Namaz guide, with English and Urdu support.',
    note: 'Explore the Rafeeq website for the full feature guide and app policies.',
  },
  {
    slug: 'budget-ai', name: 'Budget AI', subtitle: 'Your money, made clear', category: 'Everyday tools', filter: 'everyday', color: 'blue',
    headline: 'Less logging. More living.',
    description: 'Type an expense, say it out loud, or snap a receipt. Give your money a little more clarity.',
    package: 'com.budgetai.android', website: 'https://budgetai-app.pages.dev',
    features: ['Chat, voice & receipt input', 'Spending insights', 'Home Screen widgets'],
    captions: ['Log spending in a chat', 'All your finances in one place', 'Understand your spending'],
    detail: 'Budget AI helps you record expenses and income through chat, voice, or receipt photos. Browse your entries, explore spending insights, and see your totals from Home Screen widgets.',
    note: 'Manual tracking is free. AI is paid, with 5 free AI messages each month.',
  },
  {
    slug: '99-names', name: '99 Names', subtitle: 'Asmaul Husna', category: 'Faith & reflection', filter: 'faith', color: 'butter',
    headline: 'Beautiful names. Deeper meaning.',
    description: 'Discover the 99 names of Allah. Read, reflect, and carry your favourites with you, even offline.',
    package: 'com.muzamil.asmaulhusna', website: 'https://99asmaulhusna.pages.dev',
    features: ['English & Urdu meanings', 'Reflections & favourites', 'Works fully offline'],
    captions: ['Explore the beautiful names', 'Reflect on Ar-Rahman', 'Browse all 99 names'],
    detail: 'Explore Arabic names, transliteration, and English and Urdu meanings in one calm place. Read reflections and save your favourites. Everything is available offline.',
    note: '99 Names and Asmaul Husna are the same app.',
  },
  {
    slug: 'fm-crafts', name: 'FM Crafts', subtitle: 'Made by hand. Made for you.', category: 'Shopping & gifts', filter: 'shopping', color: 'peach',
    headline: 'Find something made with love.',
    description: 'Handmade flowers, crochet bouquets, and thoughtful little gifts. Find a piece that feels like them.',
    package: 'com.fmcrafts.fmcrafts', website: 'https://fmcrafts.web.app',
    features: ['Handmade crochet collection', 'Bouquets & thoughtful gifts', 'Ask about pieces on WhatsApp'],
    captions: ['Browse the handmade collection', 'A closer look at a crochet rose', 'Explore crochet creations'],
    detail: 'Discover handmade crochet flowers, custom bouquets, and gifts from Pakistan. Browse the collection, see each piece up close, and ask about your favourites on WhatsApp.',
    note: 'Visit the FM Crafts shop for the current collection and custom requests.',
  },
  {
    slug: 'salahlog', name: 'SalahLog', subtitle: 'One prayer at a time', category: 'Faith & reflection', filter: 'faith', color: 'lilac',
    headline: 'Small steps. A steady practice.',
    description: 'Keep track of your daily Salah and look back on your progress. Build a routine, one prayer at a time.',
    package: 'com.track_prayer', website: '/apps/salahlog',
    features: ['Daily prayer tracking', 'Prayer history & progress', 'Prayer times & reminders'],
    captions: ['Track your daily prayers', 'Prayer notification preferences', 'Set up individual prayer reminders'],
    detail: 'Record your five daily prayers and keep a history of your practice. Check prayer times, review your progress, and use reminders to support your daily routine.',
    note: 'Get the app on Google Play. Availability may vary by device and region.',
  },
] as const;

export type App = (typeof apps)[number];
export const playUrl = (app: App) => `https://play.google.com/store/apps/details?id=${app.package}`;
export const icon = (app: App) => `/images/${app.slug}/icon.webp`;
export const screen = (app: App, index = 1) => `/images/${app.slug}/${index}.webp`;
