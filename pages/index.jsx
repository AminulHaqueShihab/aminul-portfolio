import React from 'react';

import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Landing from '../components/sections/Landing';
import MoreProjects from '../components/sections/MoreProjects';
import Projects from '../components/sections/Projects';
import styles from '../styles/Home.module.css';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import { colors } from '../theme';

export default function Home() {
	const background = useColorModeValue(
		'background.light',
		'background.dark'
	);
	return (
		<Stack className={styles.container} bg={background}>
			<Landing />
			<About />
			<Experience />
			<Projects />
			<MoreProjects />
			<Contact />
		</Stack>
	);
}
