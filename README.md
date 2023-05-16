# Breaking-Down-the-Game-

Instruction to run the code:
1. Run the hiveserver on your local host
2. In the beeline terminal execute these commands for data ingestion:
  a. !run /path-to/hive_files/CREATE.hiveql
  b. !run /path-to/hive_files/LOAD.hiveql
  c. !run /path-to/hive_files/create_p.hiveql
  d. !run /path-to/hive_files/filler_p.hiveql
  e. (optional) if you want to drop all the tables run !run /path-to/hive_files/DROP.hiveql
3. Navigate to frontend folder and open in terminal
4. Run the command $ npm run start-backend (for running the backend server)
5. Open other instance of the terminal and run the command $ npm start ( for running the front end )
