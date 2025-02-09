import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Container from 'components/container';
import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import { EmailIcon, LinkedInIcon, TwitterIcon, GithubIcon } from 'components/social-icons';

import { allFeaturedProjects } from 'lib/contentlayer-utils';
import tools from 'lib/tools';
import Image from 'next/image';
import siteConfig from 'site.config';

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <Container>
      <Flex direction="column" height={'100vh'} justifyContent={'center'} paddingBottom={'5rem'}>
        <MainHeading>Areo Benjamen</MainHeading>
        <Text
          color="brown.600"
          display="block"
          fontSize={{ base: '3.5rem', md: '4rem' }}
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
        >
          Product-Oriented <br /> Software Engineer.
        </Text>

        {/* I'm passionate about... */}
        <Text
          marginTop="12"
          fontFamily="body"
          maxWidth="45rem"
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          I'm passionate about 🚀 Startups, 🖥️ Product development, 🔢 Data Structures & Algorithms,
          ☁️ Cloud & DevOps Engineering, 🎨 User Experience, and 📈Driving Growth.
        </Text>
      </Flex>

      {/* I design component systems... */}
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        paddingY="vGutter"
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            overflow={'hidden'}
            size={'6.25rem'}
            marginRight={'6'}
            float={'left'}
          >
            <Image
              src="/static/images/headshot-min1.jpg"
              style={{ objectFit: 'cover' }}
              alt="Areo Benjamen"
              fill
            />
          </Circle>

          <Heading
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            lineHeight="1"
            letterSpacing="tight"
          >
            I imagine & build{' '}
            <Box as="span" color="brown.600">
              innovative solutions
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'lg', md: '2xl' }}>
            Combining my technical skills with a strategic mindset. I excel at developing scalable
            solutions, optimizing performance, and ensuring seamless deployments for high-impact
            products.
          </Text>

          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem href={siteConfig.profiles.github} icon={GithubIcon}>
              GitHub
            </LinkItem>
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={TwitterIcon} href={siteConfig.profiles.twitter}>
              Twitter
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight">
            Tools &amp; Technologies
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Over the years, I had the opportunity to work with various software, tools and
            frameworks. Here are some of them:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem
              cursor={'pointer'}
              _hover={{ borderBottom: '2px solid white' }}
              fontFamily="heading"
              fontSize="4xl"
              color="brown.600"
              key={tool}
            >
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Testimonials */}
      {/* <Box as="section" aria-labelledby="heading" py="vGutter">
        <VisuallyHidden>Recommendations</VisuallyHidden>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {chunk(allFeaturedTestimonials, 2).map((testimonials, index) => (
            <Stack key={index} spacing="6">
              {testimonials.map((data) => (
                <TestimonialCard key={data.name} data={data} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Box> */}

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
