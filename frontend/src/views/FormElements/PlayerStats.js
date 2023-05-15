import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Grid,
	Box,
	Button,
	Typography,
	Fab,
} from '@material-ui/core';
import axios from 'axios';

import { ComboBox } from '../../components/Forms/AutoComplete/ComboBox';
import ExTable from '../dashboards/dashboard1-components/ExTable';

// dummy data
let data1 = [['31th May 2002'], ['Forward'], ['5'], ['5'], ['5'], ['5']];

const PlayerStats = () => {
	const [country, setCountry] = React.useState('');
	const [player, setPlayer] = React.useState('');
	const [data, setData] = React.useState('');
	const [display, setDisplay] = React.useState(false);

	const onSelectCountry = (value) => {
		setCountry(value);
	};
	const onSelectPlayer = (value) => {
		setPlayer(value);
	};

	const onSubmit = async () => {
		if (country === '' || player === '') {
			alert('Please select country and player');
			return;
		}
		const playerArray = player.split(' ');
		const playerConcat = playerArray.join('@');
		console.log(playerConcat);
		const query = `player=${playerConcat}`;
		console.log('http://localhost:8001/api?' + query);
		// console.log('api called');
		// const response = await axios.get('http://localhost:8001/api?' + query);
		// console.log(response.data);
		// setData(response.data);

		//  uncomment the above lines to use the api and change data1 to data in the below lines
		data1 = [[player], ...data1];
		setData(data1);
		setDisplay(true);
	};
	const onClear = () => {
		window.location.reload();
	};

	return (
		<>
			<Box
				sx={{
					display: 'block',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					// minHeight: '100vh', // Optional: Set a minimum height to center vertically
				}}>
				<Grid container spacing={0.5}>
					{/* ------------------------- row 1 ------------------------- */}
					<Grid
						item
						xs={12}
						lg={3}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
							// padding: '10px',
						}}>
						<ComboBox displayList={'Country'} onChange={onSelectCountry} />
					</Grid>

					{/* ------------------------- row 5 ------------------------- */}
					<Grid
						item
						xs={12}
						lg={3}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
						}}>
						<ComboBox
							displayList={'Player'}
							ccountry={country}
							onChange={onSelectPlayer}
						/>
					</Grid>
				</Grid>
			</Box>
			<Button
				variant='contained'
				color='secondary'
				component='label'
				onClick={onSubmit}
				sx={{
					// mt: 2,
					ml: 5,
					mr: 30,
					fontSize: '1.2rem', // Increase font size
					padding: '12px 24px', // Increase padding
				}}>
				Submit
			</Button>
			{/* ------------------------- Clear Button ------------------------- */}
			<Button
				variant='contained'
				color='secondary'
				component='label'
				onClick={onClear}
				sx={{
					// mt: 2,
					// mr: 15,
					fontSize: '1.2rem', // Increase font size
					padding: '12px 24px', // Increase padding
				}}>
				Clear
			</Button>
			{display === false ? (
				<></>
			) : (
				<Box>
					<Card variant='outlined'>
						<CardContent>
							<Typography variant='h3'>
								Player Details and World Cup Stats{' '}
							</Typography>
							<Box
								sx={{
									overflow: {
										xs: 'auto',
										sm: 'unset',
									},
								}}>
								<ExTable tableData={data} name={player} purpose='player' />
							</Box>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};

export default PlayerStats;
