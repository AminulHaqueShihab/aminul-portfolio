import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	Image,
	Link,
	Spacer,
	Stack,
	Tooltip,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import Sticky from 'react-stickynode';

import { colors } from '../theme';
import { HiMenu } from 'react-icons/hi';

const navBtns = [
	{
		label: 'About',
	},
	{
		label: 'Experience',
	},
	{
		label: 'Projects',
	},
	{
		label: 'Contact',
	},
	{
		label: 'Blog',
		href: 'https://jarrod-servilla.medium.com/',
	},
];

const Logo = () => {
	const logo = useColorModeValue('/text-logo-light.png', '/text-logo-dark.png');
	return (
		<Box m='2'>
			<Image
				alt=''
				src={logo}
				maxW='200px'
				height='60px'
				onClick={scroll.scrollToTop}
			/>
		</Box>
	);
};

const MenuToggle = ({ isOpen, onOpen }) => {
	const primaryDark = useColorModeValue(
		colors.primaryDark.light,
		colors.primaryDark.dark
	);
	return (
		<Box display={{ base: 'block', md: 'none' }} pr={4}>
			<IconButton onClick={onOpen} colorScheme='transparent'>
				{isOpen ? (
					<CloseIcon size='2rem' color={primaryDark} />
				) : (
					<HiMenu size='2rem' color={primaryDark} />
				)}
			</IconButton>
		</Box>
	);
};

const NavButtons = ({ size, onClose }) => {
	const primaryDark = useColorModeValue(
		colors.primaryDark.light,
		colors.primaryDark.dark
	);
	const btns = navBtns.map(btn => (
		<Button key={btn.label} size={size} variant='link' mb={2} onClick={onClose}>
			{btn.href ? (
				<Link href={btn.href} color={primaryDark} isExternal>
					{btn.label}
				</Link>
			) : (
				<ScrollLink
					to={btn.label.toLowerCase()}
					href={btn.href}
					spy
					smooth
					style={{ color: primaryDark }}
					offset={-70}
					duration={500}
					onClick={onClose}
				>
					{btn.label}
				</ScrollLink>
			)}
		</Button>
	));
	return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
	const { toggleColorMode } = useColorMode();
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const nextMode = useColorModeValue('dark', 'light');
	return (
		<Tooltip
			label={`Toggle ${nextMode} mode`}
			aria-label={`Toggle ${nextMode} mode`}
		>
			<IconButton
				size='md'
				fontSize='lg'
				aria-label={`Toggle ${nextMode} mode`}
				variant='ghost'
				color='current'
				onClick={toggleColorMode}
				icon={<SwitchIcon />}
				style={{ marginRight: mr }}
			/>
		</Tooltip>
	);
};

const MenuLinks = ({ onClose }) => (
	<Stack
		display={{ base: 'none', sm: 'none', md: 'block' }}
		width={{ sm: 'full', md: 'auto' }}
		spacing='24px'
		direction={['column', 'row', 'row', 'row']}
		alignItems='center'
	>
		<NavButtons size='sm' onClose={onClose} />
		<ColorModeButton mr='12px' />
	</Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
	<Drawer placement='right' onClose={onClose} isOpen={isOpen}>
		<DrawerOverlay>
			<DrawerContent>
				<DrawerBody>
					<Stack
						alignItems='center'
						justifyContent='center'
						direction={['column']}
						spacing='24px'
						mt='20vh'
					>
						<NavButtons size='lg' onClose={onClose} />
						<ColorModeButton />
					</Stack>
				</DrawerBody>
			</DrawerContent>
		</DrawerOverlay>
	</Drawer>
);

export default function Navbar() {
	const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Sticky enabled innerZ={99}>
			<Stack
				as='header'
				w='100%'
				direction={['row', 'row', 'row', 'row']}
				alignItems='center'
				justifyContent='center'
				bg={primary}
			>
				<Logo />
				<Spacer />
				<MenuLinks onClose={onClose} />
				<NavMenu isOpen={isOpen} onClose={onClose} />
				<MenuToggle isOpen={isOpen} onOpen={onOpen} />
			</Stack>
		</Sticky>
	);
}
