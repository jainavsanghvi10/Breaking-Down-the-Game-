tournament =  {
	"Total_matches":
		"SELECT count(*) from matches WHERE tournament_name = TOURNAMENT",
	'Total_goals scored':
		"SELECT count(*) AS Goals_Scored FROM goals WHERE tournament_name = TOURNAMENT",
	"Golden_Ball":
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = TOURNAMENT AND award_name = 'Golden Ball'",
	"Golden_Boot":
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = TOURNAMENT AND award_name = 'Golden Boot'",
	"Golden_Glove":
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = TOURNAMENT AND award_name = 'Golden Glove'",
	'Best Young Player':
		"SELECT family_name, given_name FROM award_winners WHERE tournament_name = TOURNAMENT AND award_name = 'Best Young Player'",
	"Host_Country_and_it's_Performance":
		"SELECT team_name, performance FROM host_countries WHERE tournament_name = TOURNAMENT",
	"Winner_of_the_tournament":
		"SELECT winner FROM tournaments WHERE tournament_name = TOURNAMENT",
	"Finalists":
		"SELECT team_name FROM qualified_teams WHERE tournament_name = TOURNAMENT and performance = 'final'",
	"Format_and_group_stage_team_information":
		"SELECT group_stage,second_group_stage,final_round,round_of_16,quarter_finals,semi_finals,third_place_match, final FROM tournaments WHERE tournament_name = TOURNAMENT",
    }