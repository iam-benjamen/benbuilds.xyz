import {
  Box,
  Center,
  Circle,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode, useEffect } from 'react';
import {
  BlogIcon,
  CloseIcon,
  CoachingIcon,
  HamburgerMenuIcon,
  ProjectIcon,
  SnippetIcon,
  TalksIcon,
} from './nav-icons';

type NavItemProps = {
  data: NavItemData;
  active?: boolean;
  children: ReactNode;
  large?: boolean;
};

function NavItem(props: NavItemProps) {
  const { children, data, active, large } = props;
  return (
    <HStack
      as={Link}
      href={data.href}
      spacing="2"
      paddingX="3"
      paddingY={large ? '5' : '2.5'}
      rounded="lg"
      aria-current={active ? 'page' : undefined}
      _hover={{ color: 'brown.600' }}
      _activeLink={{ bg: 'gray.800', shadow: 'highlight' }}
      target={data.label === 'Resume' || data.label === 'Blog' ? '_blank' : '_self'}
    >
      <Icon as={data.icon} color="white" fontSize="lg" />
      <Text fontFamily="heading">{children}</Text>
    </HStack>
  );
}

interface NavItemData {
  label: string;
  href: string;
  icon: ElementType;
  primary?: boolean;
}

const items: NavItemData[] = [
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Blog', href: 'https://benjie.hashnode.dev', icon: BlogIcon },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/17CEtufc6G3iD-_G5UwQgZsxxWrXTgulc/view?usp=sharing',
    icon: SnippetIcon,
  },
  {
    label: 'Schedule meet',
    href: 'https://calendly.com/areoxbenjamen/30min',
    icon: CoachingIcon,
    primary: true,
  },
];

function DesktopNavItemGroup(props: StackProps) {
  const { asPath } = useRouter();
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
      {items.map((item) => (
        <NavItem key={item.label} data={item} active={asPath.startsWith(item.href)}>
          {item.label}
        </NavItem>
      ))}
    </HStack>
  );
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      as="nav"
      aria-label="Main navigation"
      spacing="0"
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} data={item} large>
          {item.label}
        </NavItem>
      ))}
    </Stack>
  );
}

function Headshot() {
  return (
    <Circle size="10" rounded="full" borderWidth="2px" borderColor="white">
      <Circle rounded="full" overflow="hidden" size="8">
        <VisuallyHidden>Home</VisuallyHidden>
        <Image
          priority
          alt="Areo Benjamen"
          src="/static/images/headshot-min1.jpg"
          width={36}
          height={36}
          style={{ objectFit: 'cover' }}
        />
      </Circle>
    </Circle>
  );
}

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  return (
    <>
      <Center
        width="10"
        height="10"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="gray.800" padding="6">
          <MobileNavItemGroup />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  return (
    <Box as="header" paddingY="6" maxWidth="6xl" marginX="auto" paddingX="6">
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Headshot />
        </Link>
        <DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
        <MobileNavMenu />
      </Flex>
    </Box>
  );
}
