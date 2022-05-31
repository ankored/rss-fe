import React, { useState } from 'react';

import { Grid } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../hooks';
import { Feed, addFeed } from '../store/reducers/feeds';

import FeedList from './FeedList';
import Posts from './Posts';

function FeedPage() {
	const feeds: Array<Feed> = useAppSelector((state) => state.feeds.feeds);
	const dispatch = useAppDispatch();

	const [selected, setSelected] = useState("");

	const handleAddFeed = (input: string) => {
		// Dispatch a new feed added
		dispatch(addFeed(input));
	};

	const selectedFeed = feeds.find(f => f.id == selected);

	return (
		<Grid container sx={{
			bgcolor: 'primary.light',
			width: '100%',
			height: '100vh',
		}}>
			{ /* The left side, TODO: Disappear on mobile breakpoints */}
			<Grid item xs={3} sx={{
				paddingTop: '2em',
				paddingLeft: '1em',
				paddingRight: '1em',
			}}>
				<FeedList
					feeds={feeds}
					onSubmit={handleAddFeed}
					selectedId={selected}
					onSelect={(id: string) => setSelected(id)}
				/>
			</Grid>
			<Grid item xs={9}>
				<Posts selectedFeed={selectedFeed} />
			</Grid>
		</Grid>
	);
};

export default FeedPage;
