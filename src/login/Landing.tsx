import React from 'react';
import TextField from '@mui/material/TextField';

import { Grid, Typography, Container } from '@mui/material';

function Landing() {

	const handleSubmit = () => {
		// TODO: Log the user in, or just redirect for now
	};

	return (
		<Grid container>
			<Grid item xs={5}>
				<Container sx={{
					bgcolor: 'primary.light',
					height: '100vh',
					alignItems: 'center',
				}}>
					<Typography variant="h3" sx={{
						fontWeight: 'bold',
						paddingTop: '3em',
					}}>Port in a Storm</Typography>
					<p>
						<Typography>Something compelling here that will get them to sign up.</Typography>
					</p>
					<form>
						<p>
							<TextField id="email" label="Email" variant="standard" sx={{
								width: '15em',
							}}/>	
						</p>
						<p>
							<TextField id="password" label="Password" variant="standard" />	
						</p>
					</form>
				</Container>
			</Grid>
			<Grid item xs={7} className="rightSide">
				<Container sx={{
					bgcolor: 'primary.dark',
					color: 'primary.contrastText',
					height: '100vh',
				}}>
					<Typography variant="h3">Something here</Typography>
				</Container>
			</Grid>
		</Grid>
  );
}

export default Landing;
