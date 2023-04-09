import { Textarea, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const TextInput = ({ extractKeywords }) => {
	const [text, setText] = useState('');

	const toast = useToast();

	const submitText = () => {
		if (text.trim() === '') {
			toast({
				title: 'Text field is empty',
				description: 'Please enter text to extract keywords.',
				status: 'error',
				duration: 4000,
				isClosable: false,
			});
		} else {
			extractKeywords(text);
		}
	};

	return (
		<>
			<Textarea
				bg={'blue.400'}
				color={'white'}
				padding={4}
				marginTop={6}
				height={300}
				value={text}
				onChange={(e) => setText(e.target.value)}
				resize={'none'}
			/>

			<Button
				bg={'blue.500'}
				color={'white'}
				marginTop={4}
				width={'100%'}
				_hover={{ bg: 'blue.700' }}
				onClick={submitText}
			>
				Extract Words
			</Button>
		</>
	);
};

export default TextInput;
