# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: a `TypeError` when accessing the `length` property of a non-array object.

## Bug Description

The `foo` function attempts to handle null, undefined, and empty arrays gracefully. However, it fails when an object that does not have a `length` property is passed in.

## Solution

The solution involves checking if the input is an array before accessing the `length` property. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., node.js, browser console).
4. Observe the `TypeError` when calling `foo({})`.
5. Open `bugSolution.js` to see the corrected code.