export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Areo Benjamen',
  repo: 'https://github.com/iam-benjamen/benbuilds.xyz',
  editUrl: 'https://github.com/iam-benjamen/benbuilds.xyz/edit/main/data/',
  website: 'https://benbuilds.xyz',
  title: 'Areo Benjamen, Software Engineer and Product Strategist',
  description:
    'Software Engineer passionate about 🚀 Startups, 🖥️ Product development, 🔢 Data Structures & Algorithms,☁️ Cloud & DevOps Engineering, 🎨 User Experience, and 📈Driving Growth.',
  image: 'https://res.cloudinary.com/djskbsz2k/image/upload/v1739137579/Areo_Benjamen_zu7okz.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Areo Benjamen O.',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/iam-benjamen',
    twitter: 'https://twitter.com/areobenjamen',
    linkedin: 'https://linkedin.com/in/areo-benjamen',
    email: 'mailto:areoxbenjamen@gmail.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@areobenjamen',
    site: '@areobenjamen',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://res.cloudinary.com/djskbsz2k/image/upload/v1739137579/Areo_Benjamen_zu7okz.png',
        width: 1200,
        height: 630,
        alt: 'Areo Benjamen, Product-Oriented Software Engineer',
      },
    ],
  },
};

export default siteConfig;
