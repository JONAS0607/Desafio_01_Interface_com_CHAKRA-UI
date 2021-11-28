import { Flex, Text, Img, Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex direction='column' align='center'>
			<Flex m='10px'>
				<img src='./Logo.png' alt='Logo' />
			</Flex>
			<Flex>
				<img
					src='https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80'
					alt='Banner'
				/>
			</Flex>
			<Flex
				w='70%'
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
		</Flex>
	);
}
