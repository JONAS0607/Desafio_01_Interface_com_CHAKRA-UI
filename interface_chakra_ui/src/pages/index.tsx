import { Flex, Text, Img, Box, Stack, Icon } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Icons } from '../components/Icons';
import {
	FaGlassCheers,
	FaUmbrellaBeach,
	FaLandmark,
	FaArchway,
} from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { Slides } from '../components/Slides';

export default function Home() {
	return (
		<Flex m='0 auto' direction='column' align='center'>
			<Header />
			<Flex>
				<Img
					width='80vw'
					height='250px'
					objectPosition='0 35%'
					objectFit='none'
					src='https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80'
					alt='Banner'
				/>
			</Flex>
			<Flex
				// w='70%'
				position='absolute'
				// align='center'
				justify='space-around'
				mt='5%'
				// border='2px solid white'
			>
				<Box mt='40px' w='500px' color='white'>
					<Text fontSize={30}>
						<Text>5 Continentes,</Text> infinitas possibilidades.
					</Text>
					<Text fontSize={20}>
						Chegou a hora de tirar do papel a viagem que você sempre sonhou.
					</Text>
				</Box>
				<Img boxSize='350px' src='./images/Airplane.svg' alt='Avião' />
			</Flex>
			<Stack p='5' m='20' direction='row' spacing={20}>
				<Icons as={FaGlassCheers} description='vida noturna' />
				<Icons as={FaUmbrellaBeach} description='praia' />
				<Icons as={FaArchway} description='moderno' />
				<Icons as={FaLandmark} description='clássico' />
				<Icons as={BiWorld} description='e mais...' />
			</Stack>
			<Box borderTop='1px solid black' w='100px' />
			<Box
				// border='1px solid black'
				p='40px'
				fontSize='36px'
				lineHeight='54px'
				textAlign='center'
				fontWeight='500'
				fontFamily='poppins'
				color='dark.headings_text'>
				<Text>Vamos nessa?</Text>
				<Text>Então escollha seu continente</Text>
			</Box>
			<Slides />
		</Flex>
	);
}
