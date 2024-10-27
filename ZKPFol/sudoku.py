import random

def generate_sudoku():
    
    puzzle = [[random.randint(0, 9) for _ in range(9)] for _ in range(9)]
    return puzzle

