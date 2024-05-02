/* eslint-disable no-console */
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoRepoForked, GoStar } from "react-icons/go";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";
import LinkIconBar from "./LinkIconBar";
import { ChevronUpIcon } from "@chakra-ui/icons";

const GITHUB_URL = 'https://github.com/AminulHaqueShihab/aminul-portfolio';

export default function Footer() {
  const [forks, setForks] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/AminulHaqueShihab/aminul-portfolio')
			.then(response => response.json()) // Converting the response to a JSON object
			.then(data => {
				setForks(data.forks);
				setStars(data.stargazers_count);
			})
			.catch(error => console.error(error));
  }, []);
  return (
		<Box as='footer' mt={12} height='100%' textAlign='center' className='app'>
			<Link href={GITHUB_URL} isExternal>
				<Text fontSize='sm'>
					Made with{' '}
					<span aria-label='heart' role='img'>
						&#128153;
					</span>
					{' by Md Aminul Haque.'}
				</Text>
			</Link>
			<Stack direction='row' alignItems='center' justify='center'>
				<GoRepoForked /> <Text size='xs'>{forks}</Text>
				<GoStar /> <Text size='xs'>{stars}</Text>
			</Stack>
			<ChevronUpIcon
				w={6}
				h={6}
        mt={6}
				color='primary'
				onClick={scroll.scrollToTop}
				cursor='pointer'
			/>
			<Text cursor='pointer' fontSize='sm' mt={2} onClick={scroll.scrollToTop}>
				<span role='img' aria-label='rocket'>
					&#128640;
				</span>{' '}
				Click me to scroll to the top!{' '}
				<span role='img' aria-label='rocket'>
					&#128640;
				</span>
			</Text>
			<LinkIconBar links={links} />
		</Box>
	);
}
