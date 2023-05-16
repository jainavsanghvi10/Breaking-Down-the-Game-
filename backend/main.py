from flask import Flask, redirect, url_for, render_template, request, flash, session, jsonify
from flask_cors import CORS
from pyhive import hive
import logging
import os
import functions
import time

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "HI"

@app.route('/player', methods=['GET'])
def player_stats():
    if request.method == "GET":
            # Extract the player value from the query parameters
        player = request.args.get('player')
        print(player)
            # Fetch the results
        start_time = time.time()
        results = functions.query_player(player)
        end_time = time.time()
        elapsed_time = time.time() - start_time
        
        print(f"Execution time: {elapsed_time} seconds")

        print(results)    
            # Return the results as a JSON response
        return jsonify(results)

@app.route('/team', methods=['GET'])
def team_stats():
    if request.method == "GET":
        # Extract the player value from the query parameters
        country = request.args.get('country')
        startYear = request.args.get('startYear')
        endYear = request.args.get('endYear')
        numStats = request.args.get('numStats')

        print(country, startYear, endYear)
        stats = []

        for i in range(int(numStats)):
            stat = request.args.get(f'stat{i+1}')
            stats.append(stat)
        
        start_time = time.time()
        # Fetch the results
        results =[]
        for stat in stats:
            print(stat)
            result = functions.query_team(startYear, endYear, country, stat)
            if result is not None:
                print(result)
                results.append(result)
        end_time = time.time()

        elapsed_time = time.time() - start_time

        # Print the execution time
        print(f"Execution time: {elapsed_time} seconds")
        
        # Return the results as a JSON response
        return jsonify(results)
    
@app.route('/tournament', methods=['GET'])
def tournament_stats():
    if request.method == "GET":
        # Extract the player value from the query parameters
        # stat = request.args.get('stat')
        year = request.args.get('year')
        numStats = request.args.get('numStats')
        stats = []

        for i in range(int(numStats)):
            stat = request.args.get(f'stat{i+1}')
            stats.append(stat)

        print(stats, year, numStats)
        
        start_time = time.time()
        # Fetch the results
        results =[]
        for stat in stats:
            print(stat)
            result = functions.query_tournament(year, stat)
            if result is not None:
                print(result)
                results.append(result)
        end_time = time.time()

        elapsed_time = time.time() - start_time
        
        print(f"Execution time: {elapsed_time} seconds")

        # Return the results as a JSON response
        return jsonify(results)

if __name__=="__main__":
    app.run(debug = True, port = 8001)