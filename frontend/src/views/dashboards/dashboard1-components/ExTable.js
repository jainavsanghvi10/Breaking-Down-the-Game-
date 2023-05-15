import React from 'react';
import {
	Typography,
	Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';

const ExTable = (props) => {
	let temp = [];
	if (props.purpose === 'player') {
		temp = playerTemp;
	} else if (props.purpose === 'team') {
		temp = props.statsList.map((item) => {
			return teamTemp[item];
		});
	} else {
		temp = props.statsList.map((item) => {
			return tournamentTemp[item];
		});
	}

	return (
		<Table
			aria-label='simple table'
			sx={{
				mt: 3,
				whiteSpace: 'nowrap',
			}}>
			<TableHead>
				<TableRow>
					<TableCell>
						<Typography color='textSecondary' variant='h6'>
							Id
						</Typography>
					</TableCell>
					<TableCell>
						<Typography color='textSecondary' variant='h6'>
							Stats
						</Typography>
					</TableCell>
					<TableCell align='right'>
						<Typography color='textSecondary' variant='h6'>
							Value
						</Typography>
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.tableData.map((row, i) => (
					<TableRow key={i}>
						<TableCell>
							<Typography
								sx={{
									fontSize: '15px',
									fontWeight: '500',
								}}>
								{i + 1}
							</Typography>
						</TableCell>
						<TableCell>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}>
								<Box>
									<Typography
										variant='h6'
										sx={{
											fontWeight: '600',
										}}>
										{temp[i]}
									</Typography>
								</Box>
							</Box>
						</TableCell>
						<TableCell align='right'>
							<Typography variant='h6'>{row[0]}</Typography>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default ExTable;

const playerTemp = [
	'Name',
	'Birthdate',
	'Position',
	'No of world cups played',
	'Total appearances',
	'Total goals scored ',
	'Total penalties scored',
];
const teamTemp = {
	Total_matches_played: 'Total Matches Played',
	Total_wins: 'Total Wins',
	Total_losses: 'Total Losses',
	Total_goals_scored: 'Total Goals Scored',
	Most_appearances_by_a_player: 'Most Appearances By A Player',
	Player_with_most_goals: 'Player With Most Goals',
	No_of_times_qualified_in_the_semis: 'No Of Times Qualified In The Semis',
	No_of_times_played_finals: 'No Of Times Played Finals',
	No_of_World_Cup_Wins: 'No Of World Cup Wins',
};
const tournamentTemp = {
	Total_matches: 'Total Matches',
	Total_goals_scored: 'Total Goals Scored in the tournament',
	Golden_Ball: 'Golden Ball Winner',
	Golden_Boot: 'Golden Boot Winner',
	Golden_Glove: 'Golden Glove Winner',
	Best_Young_Player: 'Best Young Player Winner',
	Host_Country_and_its_Performance: 'Host Country And Its Performance',
	Winner_of_the_tournament: 'Winner Of The Tournament',
	Finalists: 'Finalists',
	Format_and_group_stage_team_information:
		'Format And Group Stage Team Information',
};
