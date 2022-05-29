import React from 'react';

import { Feed } from '@/store/reducers/feeds';

import { Box, Typography } from '@mui/material';

interface Props {
	feed: Feed,
}

function FeedItem(props: Props) {
	return (
		<Box sx={{
			border: '2px solid',
			borderColor: 'primary.main',
			padding: '1em',
			marginTop: '1em',
			borderRadius: '8px',
			cursor: 'pointer',
		}}>
			<Typography sx={{
				fontWeight: 'bold',
			}}>{props.feed.title}</Typography>
		</Box>
	);
};

export default FeedItem;
