# Breaking down the Game: A Football Analytics Platform
This repository contains the code for a football analytics platform that enables efficient processing and analysis of structured football data. The platform utilizes NoSQL technologies and provides valuable insights for teams, players, and fans.

## Instructions on How to Run
To run the code, follow the steps below:

* **Run the HiveServer on localhost:** Ensure that you have HiveServer running on your local machine.

* **Data Ingestion:**
  * Open the Beeline terminal.
  * Execute the following commands for data ingestion:
  * !run /path-to/hive_files/CREATE.hiveql: Creates the necessary tables and schemas.
  * !run /path-to/hive_files/LOAD.hiveql: Loads the football data into the tables.
  * !run /path-to/hive_files/create_p.hiveql: Creates additional tables for player-level stats.
  * !run /path-to/hive_files/filler_p.hiveql: Populates the player-level stats tables.
  *(Optional) If you want to drop all the tables, run !run /path-to/hive_files/DROP.hiveql.

* **Navigate to the Frontend folder:** Open a terminal and navigate to the frontend folder of the project.

* **Start the Backend Server:**
  * Run the following command: $ npm run start-backend.
  This command starts the backend server for data processing and handling API requests.
* **Start the Frontend:** 
  * Open another terminal instance.
  * Run the command: $ npm start.
  This command starts the frontend interface and opens it in your default browser.
 
 Now you can use the football analytics platform to explore team-level stats, player-level stats, and tournament-level stats. The platform provides valuable insights derived from the processed data.

Feel free to customize the path-to/hive_files in the commands to match the actual path to the Hive files in your local setup.
