import React from "react";

import { Box, Stack, Typography } from '@mui/material';
import Doodle from '../ReadingSideDoodle.svg';

import { Feed } from '@/store/reducers/feeds';

interface Props {
	selectedFeed?: Feed,
};

export default function Posts(props: Props): React.ReactElement {
	// If a feed is not selected, display a CTA
	if (!props.selectedFeed) {
		return (
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<Stack>
					<Box component="img" src={Doodle} sx={{
						marginTop: '25%',
						maxHeight: "300px",
					}}/>
					<Typography variant="h2">Find something to read</Typography>
					<Typography variant="h5">Click one of the feeds on the left</Typography>
				</Stack>
			</Box>
		);
	}

	const { title, url } = props.selectedFeed;
	const displayTitle = (title) ? title : url;

	return (
		<Box sx={{
			paddingTop: '1em',
		}}>
			<Typography variant="h2">{displayTitle}</Typography>
		</Box>
	);
};
