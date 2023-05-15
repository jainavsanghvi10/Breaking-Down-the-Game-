import React, { useState, useRef } from 'react';
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
import { MultipleValuesAutocomplete } from '../../components/Forms/AutoComplete/MultipleValuesAutocomplete';
import ExTable from '../dashboards/dashboard1-components/ExTable';

// dummy data
let data1 = [['31th May 2002'], ['Forward'], ['5'], ['5'], ['5'], ['5']];

const TournamentStats = () => {
	const [year, setYear] = React.useState('');
	const [stat, setStat] = React.useState('');
	const [data, setData] = React.useState('');
	const [display, setDisplay] = React.useState(false);
	

	const onSelectYear = (value) => {
		setYear(value);
	};
	const onSelectStats = (value) => {
		setStat(value);
	};

	const onSubmit = async () => {
		if (year === '' || stat === '') {
			alert('Please select all fields');
			return;
		}
		let query = `year=${year}&numStats=${stat.length}`;
		for (let i = 0; i < stat.length; i++) {
			query += `&stat${i + 1}=${stat[i]}`;
		}
		console.log('http://localhost:8001/api?' + query);
		// console.log('api called');
		// const response = await axios.get('http://localhost:8001/api?' + query);
		// console.log(response.data);
		// setData(response.data);

		//  uncomment the above lines to use the api and change the below line to setData(response.data)
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
					{/* ------------------------- drop down box 1 ------------------------- */}
					<Grid
						item
						xs={12}
						lg={2}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
						}}>
						<ComboBox
							// ref={yearRef}
							displayList={'Year'}
							onChange={onSelectYear}
							// selectedValue={year}
						/>
					</Grid>
					{/* ------------------------- drop down box 2 ------------------------- */}
					<Grid
						item
						xs={12}
						lg={4}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
						}}>
						<MultipleValuesAutocomplete
							displayList={'Tournament Stats'}
							onChange={onSelectStats}
						/>
					</Grid>
				</Grid>
			</Box>
			{/* ------------------------- Submit Button ------------------------- */}
			<Button
				variant='contained'
				color='secondary'
				component='label'
				onClick={onSubmit}
				sx={{
					// mt: 2,
					ml: 5,
					mr: 20,
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
			{/* ------------------------- Table ------------------------- */}
			{display === false ? (
				<></>
			) : (
				<Box>
					<Card variant='outlined'>
						<CardContent>
							<Typography variant='h3'>FIFA World Cup {year} Stats </Typography>
							<Box
								sx={{
									overflow: {
										xs: 'auto',
										sm: 'unset',
									},
								}}>
								<ExTable tableData={data} statsList={stat} />
							</Box>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};

export default TournamentStats;
