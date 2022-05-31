import React, {useState, ChangeEvent} from 'react';

import { Button, TextField, Stack } from '@mui/material';
import FeedItem from './FeedItem';

import { Feed } from '@/store/reducers/feeds';

interface Props {
	feeds: Array<Feed>,
	selectedId?: string,
	onSubmit: (input: string) => void,
	onSelect: (id: string) => void,
}

export default function(props: Props): React.ReactElement {

	const [input, setInput] = useState("");
	const [err, setErr] = useState("");

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
		setErr("");
	};

	const onSubmit = () => {
		// Validate that it's a valid url
		try {
			new URL(input);
			setErr("");
		} catch (_) {
			setErr("Must be a valid URL");
			return;
		}
	
		// Tell props listener that a new url has been added
		props.onSubmit(input);
		setInput("");
	}

	return (
		<Stack spacing={2}>
			{ props.feeds.map((f) => 
			<FeedItem key={f.id}
				feed={f}
				onClick={() => props.onSelect(f.id)}
				selected={props.selectedId === f.id}
			/>	
			) }
			<TextField
				error={err !== ""}
				helperText={err}
				placeholder="https://example.com/rss.xml"
				value={input}
				onChange={onChange}
			/>
			<Button
				variant="outlined"
				onClick={onSubmit}
				sx={{
					borderRadius: '8px',
				}}
			>Add Feed</Button>
		</Stack>
	);
}
