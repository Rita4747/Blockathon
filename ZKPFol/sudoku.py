from flask import Flask, jsonify
import random

app = Flask(__name__)

def generate_sudoku():
    puzzle = [[random.randint(0, 9) for _ in range(9)] for _ in range(9)]
    return puzzle

@app.route('/generate_sudoku', methods=['GET'])
def get_sudoku():
    puzzle = generate_sudoku()
    return jsonify(puzzle)

if __name__ == '__main__':
    app.run(port=5000)
