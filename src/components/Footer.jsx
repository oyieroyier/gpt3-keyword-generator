import { Box, Text, Flex } from '@chakra-ui/react';
import { TbBrandOpenai } from 'react-icons/tb';

const Footer = () => {
	return (
		<Box marginTop={50}>
			<Flex justifyContent={'center'} alignItems={'center'}>
				<Text marginRight={1} color={"#333"}>
					<TbBrandOpenai />
				</Text>
				<Text>
					Powered by OpenAI
				</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
