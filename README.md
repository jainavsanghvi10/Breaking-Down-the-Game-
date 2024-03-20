# FootyMetrics: A Football Analytics Platform
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

## Motivation:
* The motivation behind this project is to address the limitations of traditional relational databases in football data analysis.
* By leveraging NoSQL technologies, we aim to provide a scalable and flexible solution for processing and analyzing large football datasets.
* The demand for data-driven insights in the football industry is rapidly increasing, with teams, players, and fans seeking in-depth analysis and performance evaluation.
* Our project aims to meet this demand by delivering a user-friendly platform that empowers users to explore and uncover valuable insights from football data.
* By employing a structured data processing approach and utilizing NoSQL systems, we can unlock the potential of football data and contribute to the advancement of football analytics.

## NoSQL Technologies
* NoSQL technologies, such as Flask, PyHive, and Hive, are leveraged to handle the complex and interconnected nature of football data.
* Apache Hive and HiveQL provide SQL-like querying capabilities, enabling data analysis and calculation of player statistics, team performance metrics, and match predictions.
* Hive's scalability and distributed processing capabilities make it an ideal choice for analyzing large football datasets.
* Flask, a lightweight web framework, acts as the backend for establishing API routes and facilitating communication with the Hive database through PyHive.

## System Demo and Evaluation:
* Home Page:
![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/dc2490d0-6600-4075-9c9a-e6c6e30d9bfc)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/b93f8fed-0dd5-4dd0-88de-3faa0ed41a3c)

* Player Stats:
![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/297f0d48-8602-41c0-b3c3-8b07fc47c1aa)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/fe6b2b04-abfb-4463-a6db-6ea3ac6e4456)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/14fefe0d-f39e-4b8f-86af-fee5d6a71ca6)

* Team Stats:
![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/fb173b48-d5c9-4c60-bb2c-852a9d326b63)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/167c5994-280a-4c77-9cdb-11c3a502f47d)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/054c8375-29d3-4a6e-995c-ce9e776e8822)

* Tournament Stats:
![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/dd5d5474-34e8-40bd-9e71-e62b74841bdc)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/5a6a9986-d5d1-4887-9d1c-fc04c03de74b)

![image](https://github.com/jainavsanghvi10/Breaking-Down-the-Game-/assets/79016037/6ac0b986-360a-4d42-a2ab-243a660111af)


