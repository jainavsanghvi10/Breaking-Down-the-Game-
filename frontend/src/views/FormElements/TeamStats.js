import React from 'react';
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

const TeamStats = () => {
	const [country, setCountry] = React.useState('');
	const [startYear, setStartYear] = React.useState('');
	const [endYear, setEndYear] = React.useState('');
	const [stat, setStat] = React.useState('');
	const [data, setData] = React.useState('');
	const [display, setDisplay] = React.useState(false);

	const onSelectStartYear = (value) => {
		setStartYear(value);
	};
	const onSelectEndYear = (value) => {
		setEndYear(value);
	};
	const onSelectCountry = (value) => {
		setCountry(value);
	};
	const onSelectStats = (value) => {
		setStat(value);
	};

	const onSubmit = async () => {
		if (country === '' || startYear === '' || endYear === '' || stat === '') {
			alert('Please select all fields');
			return;
		}
		if (startYear >= endYear) {
			alert('Start year should be less than or equal to end year');
			return;
		}
		let query = `country=${country}&startYear=${startYear}&endYear=${endYear}&numStats=${stat.length}`;
		for (let i = 0; i < stat.length; i++) {
			query += `&stat${i + 1}=${stat[i]}`;
		}
		console.log('http://localhost:8001/team?' + query);
		console.log("api called");
		const response = await axios.get(
		  "http://localhost:8001/team?" + query
		);
		console.log(response.data);
		setData(response.data);

		//  uncomment the above lines to use the api and change the below line to setData(response.data)
		// setData(data1);
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
						lg={2}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
						}}>
						<ComboBox displayList={'StartYear'} onChange={onSelectStartYear} />
					</Grid>
					{/* </Grid>
				<Grid container spacing={0.5}> */}
					<Grid
						item
						xs={12}
						lg={2}
						sm={6}
						sx={{
							display: 'flex',
							alignItems: 'stretch',
						}}>
						<ComboBox displayList={'EndYear'} onChange={onSelectEndYear} />
					</Grid>
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
							displayList={'Team Stats'}
							onChange={onSelectStats}
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
					mt: 2,
					ml: 50,
					mr: 10,
					fontSize: '1.2rem', // Increase font size
					padding: '12px 24px', // Increase padding
				}}>
				Submit
			</Button>
			<Button
				variant='contained'
				color='secondary'
				component='label'
				onClick={onClear}
				sx={{
					mt: 2,
					mr: 15,
					fontSize: '1.2rem', // Increase font size
					padding: '12px 24px', // Increase padding
				}}>
				Clear
			</Button>
			{/* <p>Selected stats: {stat}</p> */}
			{console.log(stat)}
			{/* ------------------------- Table ------------------------- */}
			{display === false ? (
				<></>
			) : (
				<Box>
					<Card variant='outlined'>
						<CardContent>
							<Typography variant='h3'>
								FIFA World Cup Stats of {country} [{startYear}- {endYear}]{' '}
							</Typography>
							<Box
								sx={{
									overflow: {
										xs: 'auto',
										sm: 'unset',
									},
								}}>
								<ExTable tableData={data} statsList={stat} purpose='team'/>
							</Box>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};

export default TeamStats;
