import React from 'react';

import { TextField } from '@material-ui/core';

import Autocomplete from '@material-ui/core/Autocomplete';

import BaseCard from '../../BaseCard/BaseCard';

const MultipleValuesAutocomplete = (props) => {
	let text = 'Select Stats';
	let dispList = [];
	if (props.displayList == 'Tournament Stats') {
		dispList = Object.keys(statsListTournament);
	} else if (props.displayList == 'Team Stats') {
		dispList = Object.keys(statsListTeam);
	}

	return (

		<BaseCard title={text}>
			<Autocomplete
				multiple
				fullWidth
				id='tags-outlined'
				filterSelectedOptions
				options={dispList}
				// fullWidth
				onChange={(e, newValue) => {
					props.onChange(newValue);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
					/>
				)}
			/>
		</BaseCard>
	);
};

export { MultipleValuesAutocomplete };

const statsListTournament = {
	Total_matches:
		"SELECT count(*) from matches WHERE tournament_name = 'TOURNAMENT'",
	Total_goals_scored:
		"SELECT count(*) AS Goals_Scored FROM goals WHERE tournament_name = 'TOURNAMENT'",
	Golden_Ball:
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = 'TOURNAMENT' AND award_name = 'Golden_Ball'",
	Golden_Boot:
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = 'TOURNAMENT' AND award_name = 'Golden_Boot'",
	Golden_Glove:
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = 'TOURNAMENT' AND award_name = 'Golden_Glove'",
	Best_Young_Player:
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = 'TOURNAMENT' AND award_name = 'Best_Young_Player'",
	Host_Country_and_its_Performance:
		"SELECT team_name, performance FROM host_countries WHERE tournament_name = 'TOURNAMENT'",
	Winner_of_the_tournament:
		"SELECT winner FROM tournaments WHERE tournament_name = 'TOURNAMENT'",
	Finalists:
		"SELECT team_name FROM qualified_teams WHERE tournament_name = 'TOURNAMENT' and performance = 'final'",
	Format_and_group_stage_team_information:
		"SELECT group_stage,second_group_stage,final_round,round_of_16,quarter_finals,semi_finals,third_place_match, final FROM tournaments WHERE tournament_name = 'TOURNAMENT'",
};
const statsListTeam = {
	Total_matches_played:
		"SELECT count(*) from matches WHERE tournament_name IN (TOURNAMENT_LIST) AND home_team_name = 'TEAM' OR away_team_name = 'TEAM'",
	Total_wins:
		"WHERE tournament_name IN (TOURNAMENT_LIST) AND ((home_team_name = 'TEAM' AND result = 'home team win') OR (away_team_name = 'TEAM' AND result = 'away team win'))",
	Total_losses:
		"SELECT count(*) AS Total_lost FROM matches WHERE tournament_name IN (TOURNAMENT_LIST) AND ((home_team_name = 'TEAM' AND result = 'away team win') OR (away_team_name = 'TEAM' AND result = 'home team win'))",
	Total_goals_scored:
		"SELECT count(*) AS Goals_Scored FROM goals WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM'",
	Most_appearances_by_a_player:
		"WITH player_appearances_count AS (SELECT player_id, family_name, given_name, COUNT(*) AS appearances FROM player_appearances WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM' GROUP BY player_id, family_name, given_name) SELECT player_id, family_name, given_name, appearances FROM player_appearances_count WHERE appearances = ( SELECT MAX(appearances) FROM player_appearances_count)",
	Player_with_most_goals:
		"WITH player_goals AS (SELECT player_id, family_name, given_name, COUNT(*) AS goals FROM goals WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM' GROUP BY player_id, family_name, given_name ) SELECT player_id, family_name, given_name, goals FROM player_goals WHERE goals = (SELECT MAX(goals) FROM player_goals);",
	No_of_times_qualified_in_the_semis:
		"SELECT COUNT(*) AS no_of_semis FROM qualified_teams WHERE team_name = 'TEAM' AND (performance = 'final' OR performance = 'semi-finals')",
	No_of_times_played_finals:
		"SELECT COUNT(*) AS no_of_semis FROM qualified_teams WHERE team_name = 'TEAM' AND performance = 'final'",
	No_of_World_Cup_Wins:
		"SELECT count(*) AS World_cup_wins FROM tournaments WHERE winner = 'TEAM'",
};
