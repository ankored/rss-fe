import React from 'react';

import { Feed } from '@/store/reducers/feeds';

import { Box, ButtonBase, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

interface Props {
	feed: Feed,
	selected?: boolean,
	onClick: () => void,
}

function FeedItem(props: Props): React.ReactElement {
	const bgcolor = (props.selected) ? lightGreen[300] : lightGreen[100];
	return (
		<ButtonBase>
			<Box onClick={() => props.onClick()} sx={{
				bgcolor: bgcolor,
				padding: '1em',
				borderRadius: '8px',
				cursor: 'pointer',
				width: '100%',
			}}>
					<Typography sx={{
						fontWeight: 'bold',
					}}>{props.feed.title}</Typography>
			</Box>
		</ButtonBase>
	);
};

export default FeedItem;
