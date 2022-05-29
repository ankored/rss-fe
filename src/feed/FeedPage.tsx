import React, {useState} from 'react';

import { Grid, Button, OutlinedInput } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../hooks';
import { Feed, addFeed } from '../store/reducers/feeds';

import FeedItem from './FeedItem';

function FeedPage() {
	const feeds: Array<Feed> = useAppSelector((state) => state.feeds.feeds);
	const dispatch = useAppDispatch();

	// Creating a new feed
	const [newFeedInput, setNewFeedInput] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewFeedInput(event.target.value);
	};
	const handleNewFeed = () => {
		dispatch(addFeed(newFeedInput));
		setNewFeedInput("");
	};

	return (
		<Grid container sx={{
			bgcolor: 'primary.light',
			width: '100%',
			height: '100vh',
		}}>
			{ /* The left side, should split this out */ }
			<Grid item xs={3} sx={{
				borderRight: '1px solid',
				borderRightColor: 'primary.dark',
				paddingTop: '2em',
				paddingLeft: '1em',
				paddingRight: '1em',
			}}>
				<OutlinedInput fullWidth placeholder="https://example.com/rss.xml" sx={{
					bgcolor: 'secondary.main',
					borderRadius: '32px',
				}} onChange={handleChange} value={newFeedInput} />
				<Grid container justifyContent="flex-end" sx={{
					marginTop: '1em',
				}}>
					<Button variant="outlined" onClick={handleNewFeed}>Add Feed</Button>
				</Grid>
				{ feeds.map((f) => 
					<FeedItem key={f.id} feed={f} />	
				) }
			</Grid>
		</Grid>
	);
};

export default FeedPage;
