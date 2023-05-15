from flask import Flask, redirect, url_for, render_template, request, flash, session, jsonify
from flask_cors import CORS
from pyhive import hive
import logging
import os
import functions


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
        results = functions.query_player(player)
        print(results)    
            # Return the results as a JSON response
        return jsonify(results)

@app.route('/team', methods=['GET'])
def team_stats():
    if request.method == "GET":
        # Extract the player value from the query parameters
        country = request.args.get('country')
        stat = request.args.get('stat')
        startYear = request.args.get('startYear')
        endYear = request.args.get('endYear')
        print(country, stat, startYear, endYear)
        
        # Fetch the results
        results = functions.query_team(startYear, endYear, country, stat)
        print(results)
        
        # Return the results as a JSON response
        return jsonify(results)
    
@app.route('/tournament', methods=['GET'])
def tournament_stats():
    if request.method == "GET":
        # Extract the player value from the query parameters
        stat = request.args.get('stat')
        year = request.args.get('year')
        print(stat, year)
        
        # Fetch the results
        results = functions.query_tournament(year, stat)
        print(results)
        
        # Return the results as a JSON response
        return jsonify(results)

if __name__=="__main__":
    app.run(debug = True, port = 8001)