teams = {
    "Total_matches_played":"SELECT count(*) from matches WHERE tournament_name IN (TOURNAMENT_LIST) AND home_team_name = 'TEAM' OR away_team_name = 'TEAM'",
    "Total_wins":"SELECT count(*) AS Total_wins FROM matches WHERE tournament_name IN (TOURNAMENT_LIST) AND ((home_team_name = 'TEAM' AND result = 'home team win') OR (away_team_name = 'TEAM' AND result = 'away team win'))",
    "Total_losses":"SELECT count(*) AS Total_lost FROM matches WHERE tournament_name IN (TOURNAMENT_LIST) AND ((home_team_name = 'TEAM' AND result = 'away team win') OR (away_team_name = 'TEAM' AND result = 'home team win'))",
    "Total_goals_scored":"SELECT count(*) AS Goals_Scored FROM goals WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM'",
    "Most_appearances_by_a_player":"WITH player_appearances_count AS (SELECT player_id, family_name, given_name, COUNT(*) AS appearances FROM player_appearances WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM' GROUP BY player_id, family_name, given_name) SELECT player_id, family_name, given_name, appearances FROM player_appearances_count WHERE appearances = ( SELECT MAX(appearances) FROM player_appearances_count)",
    "Player_with_most_goals":"WITH player_goals AS (SELECT player_id, family_name, given_name, COUNT(*) AS goals FROM goals WHERE tournament_name IN (TOURNAMENT_LIST) AND team_name = 'TEAM' GROUP BY player_id, family_name, given_name ) SELECT family_name, given_name, goals FROM player_goals WHERE goals = (SELECT MAX(goals) FROM player_goals)",
    "No_of_times_qualified_in_the_semis":"SELECT COUNT(*) AS no_of_semis FROM qualified_teams WHERE team_name = 'TEAM' AND (performance = 'final' OR performance = 'semi-finals')",
    "No_of_times_played_finals":"SELECT COUNT(*) AS no_of_semis FROM qualified_teams WHERE team_name = 'TEAM' AND performance = 'final'",
    "No_of_World_Cup_Wins":"SELECT count(*) AS World_cup_wins FROM tournaments WHERE winner = 'TEAM'",
    }