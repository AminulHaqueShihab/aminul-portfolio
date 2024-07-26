import {
	Box,
	Flex,
	GridItem,
	Image,
	Link,
	SimpleGrid,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import React from 'react';

import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const Bio = ({ secondary }) => (
	<GridItem>
		<VStack m='auto'  spacing='12px' pt='5%'>
			<Text>
				Hi, I&apos;m Md Aminul Haque! I studied computer science at the Brac
				University, Bangladesh, and I&apos;m currently working at{' '}
				<Link href='https://thinkcrypt.io/' isExternal>
					<strong>Thinkcrypt.io</strong>
				</Link>{' '}
				as a <strong style={{ color: secondary }}>Software Engineer</strong> on
				the Development team. Prior to that, I worked at{' '}
				<Link
					href='https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering'
					isExternal
				>
					<strong>
						Department of Computer Science and Engineering, Brac University
					</strong>
				</Link>{' '}
				as a <strong style={{ color: secondary }}>Teaching Assistant</strong>.
			</Text>
			<Text>
				As a Software Engineer, I am eager to apply my knowledge and skills in
				programming, data analysis, and software development to a challenging
				role in a dynamic and innovative organization. I am a team player and a
				quick learner. Always in search of knowledge to make myself better in
				what I do.
			</Text>
		</VStack>
	</GridItem>
);

const Headshot = () => (
	<Flex align='center' justify='center'>
		<Box h={'300px'} w={'300px'}>
			<Image
				h='100%'
				w={'100%'}
				objectFit='cover'
				m='auto'
				src='/aminul.jpg'
				alt='Jarrod Servilla'
				zIndex={1}
				className='image'
				onClick={() => {
					window.open('https://www.linkedin.com/in/md-aminul-haque-279b31192/');
				}}
			/>
		</Box>
	</Flex>
);

export default function About() {
	const shouldAlternate = useBreakpointValue({ base: false, md: true });
	const secondary = useColorModeValue(
		colors.secondary.light,
		colors.secondary.dark
	);
	return (
		<SectionContainer
			id='about'
			name='about'
			headerMt='-5%'
			headerText='About Me'
			useHeaderStyle
		>
			<SimpleGrid
				pl='10%'
				pt='5%'
				pr='10%'
				spacing={12}
				columns={[1, null, 2]}
				justifyContent='center'
			>
				{shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
				{shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
			</SimpleGrid>
		</SectionContainer>
	);
}
