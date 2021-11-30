import { Icon, Box, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface IconsProps {
	as: IconType;
	description: string;
}

export function Icons({ as, description }: IconsProps) {
	return (
		<Box flexDirection='column' align='center'>
			<Icon color='highlight' as={as} fontSize='90' />
			<Text
				color='dark.headings_text'
				fontFamily='Poppins'
				lineHeight='36px'
				fontWeight='600'
				fontSize='24px'>
				{description}
			</Text>
		</Box>
	);
}
