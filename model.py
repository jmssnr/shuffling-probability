import numpy as np
import json


def riffle(deck: list[int]) -> list[int]:
    x = np.sort(np.random.uniform(low=0, high=1, size=len(deck)))
    y = 2 * x % 1
    return [deck[i] for i in np.argsort(y)]


def strip(deck: list[int]) -> list[int]:
    n = len(deck)
    shuffled_deck = []
    while len(deck) > 0:
        slice = np.random.binomial(n, 0.25)
        shuffled_deck = deck[:slice] + shuffled_deck
        deck = deck[slice:]
    return shuffled_deck


def cut(deck: list[int]) -> list[int]:
    slice = np.random.binomial(len(deck), 0.5)
    return deck[slice:] + deck[:slice]


def shuffle(deck: list[int], steps: list[callable]) -> list[int]:
    for step in steps:
        deck = step(deck)
    return deck


shuffle_sequences = {
    "Single Riffle": [riffle],
    "Two Riffles": [riffle, riffle],
    "Three Riffles": [riffle, riffle, riffle],
    "Four Riffles": [riffle, riffle, riffle, riffle],
    "RRS": [riffle, riffle, strip],
    "RSR": [riffle, strip, riffle],
    "Strip": [strip],
    "Cut": [cut],
    "RRSRC": [riffle, riffle, strip, riffle, cut],
    "RSRC": [riffle, strip, riffle, cut],
}


def run_experiment(repeats: int, steps: list[callable]):
    results = []
    for _ in range(0, repeats):
        deck = list(range(1, 53))
        deck = shuffle(deck, steps)
        results.append(deck)
    return [idx for sim in results for idx, c in enumerate(sim) if c == 1]


def simulation():
    results = []
    repeats = 300
    for key, sequence in shuffle_sequences.items():
        results.append({"key": key, "values": run_experiment(repeats, sequence)})

    return results


data = simulation()

# Serializing json
json_object = json.dumps(data)

# Writing to sample.json
with open("./src/data.json", "w") as outfile:
    outfile.write(json_object)
