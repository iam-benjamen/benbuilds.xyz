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
  repo: 'https://github.com/segunadebayo/adebayosegun.com',
  editUrl: 'https://github.com/segunadebayo/adebayosegun.com/edit/main/data/',
  website: 'https://adebayosegun.com',
  title: 'Areo Benjamen, Software Engineer and Product Strategist',
  description:
    'Software Engineer passionate about passionate about product development, User Experience, Driving Growth, and Market Dynamics',
  image: 'https://adebayosegun.com/static/images/banner.png',
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
    email: 'mailto:areotimileyin1@gmail.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@thesegunadebayo',
    site: '@thesegunadebayo',
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
        url: 'https://adebayosegun.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Areo Benjamen, Software Engineer and Product Strategist',
      },
    ],
  },
};

export default siteConfig;
