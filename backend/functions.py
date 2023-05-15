from pyhive import hive
import logging

logging.basicConfig(level=logging.INFO,filename="log_file.log")

def get_hive_cursor():
    conn = hive.Connection(host='localhost', port=10000, username = 'yash', password = 'ramesh@123', database = 'default', auth = 'CUSTOM')
    cursor = conn.cursor()
    return cursor

def create_database(db_name):

    try: 
        cursor = get_hive_cursor()
        cursor.execute("CREATE DATABASE {}".format(db_name))
        logging.info("Database Created Successfully")

    except Exception as e:
            logging.error(e)

def create_tables(s):
    try:
        with open(s, 'r') as f:
            script = f.read()
        
        statements = script.split(';')

        cursor = get_hive_cursor()
        for statement in statements:
            statement = statement.strip()
            if statement:
                cursor.execute(statement)
        print("Created Tables successfully \n")
        logging.info("Tables created successfully")
    
    except Exception as e:
            logging.error(e)

def drop_tables(d):
    try:
        with open(d, 'r') as f:
            script = f.read()
        
        statements = script.split(';')

        cursor = get_hive_cursor()
        for statement in statements:
            statement = statement.strip()
            if statement:
                cursor.execute(statement)
        print("Dropped all the Tables successfully \n")
        logging.info("Tables created successfully")
    
    except Exception as e:
            logging.error(e)


def load_tables(l):
    try:
        with open(l, 'r') as f:
            script = f.read()
        
        statements = script.split(';')

        cursor = get_hive_cursor()
        for statement in statements:
            statement = statement.strip()
            if statement:
                cursor.execute(statement)
        print("Loaded data into the Tables successfully \n")
        logging.info("Tables created successfully")
    
    except Exception as e:
            logging.error(e)

def replace_word_in_file(file_path, file_outpath, old_word1, new_word1, old_word2, new_word2):
    with open(file_path, 'r') as file:
        content = file.read()

    modified_content = content.replace(f"'{old_word1}'", f"'{new_word1}'")
    modified_content2 = modified_content.replace(f"'{old_word2}'", f"'{new_word2}'")

    with open(file_outpath, 'w') as file:
        file.write(modified_content2)

def execute_hive_file(file_path, cursor):
    with open(file_path, 'r') as file:
        queries = file.read().split(';')
    
    result = []
    for query in queries:
        query = query.strip()  # Remove leading/trailing whitespace
        if query:
            cursor.execute(query)
            results = cursor.fetchall()
            result.append(results)
            # Process the query result or handle errors as needed
    return result

def query_player(query):
    try:
        cursor = get_hive_cursor()
        print(query)

        names = query.split("@")
        print(names)

        replace_word_in_file('/home/yash/Desktop/project/frontendL/backend/hive_files/playerQ.hiveql', '/home/yash/Desktop/project/frontendL/backend/hive_files/output.hiveql', 'FAMILY_NAME', names[0],'GIVEN_NAME', names[1])
        file_path = "/home/yash/Desktop/project/frontendL/backend/hive_files/output.hiveql"
        res = execute_hive_file(file_path, cursor)
        # print(res)
        logging.info("Executed query successfully")
        return res    
    
    except Exception as e:
            logging.error(e)


def query_team(start_year, end_year, team_name, query):
    
    cursor = get_hive_cursor()

    phrase = "FIFA World Cup"
    years = []

    for year in range(int(start_year), int(end_year) + 1):
        concatenated_string = str(year)
        years.append(concatenated_string)
    
    concatenated = []   
    
    for year in years:
        concatenated_string = f"'{year} {phrase}'"
        concatenated.append(concatenated_string)

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
   
    formatted_years = ', '.join(concatenated)
    que = teams[query].replace('TOURNAMENT_LIST', formatted_years).replace('TEAM', team_name)
    print(que)
    
    cursor.execute(que)
    res = cursor.fetchall()

    return res   

def query_tournament(year, query):
    
    cursor = get_hive_cursor()

    phrase = "FIFA World Cup"

    concatenated = []   
    concatenated_string = f"'{year} {phrase}'"
    concatenated.append(concatenated_string)

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
   
    formatted_years = ', '.join(concatenated)
    que = tournament[query].replace('TOURNAMENT', formatted_years)
    print(que)
    
    cursor.execute(que)
    res = cursor.fetchall()

    return res

# k = query_team("1930", "1935", "Argentina", "Total_matches_played")

# k = query_tournament("2022","Format_and_group_stage_team_information")
# print(k)