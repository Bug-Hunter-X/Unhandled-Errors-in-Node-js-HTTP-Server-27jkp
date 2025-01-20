# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: inadequate error handling. The provided `bug.js` file contains a simple HTTP server that lacks proper error handling.  If an error occurs (e.g., attempting to access a non-existent file), the server will crash without providing useful debugging information.

The `bugSolution.js` file shows how to improve the code by implementing comprehensive error handling using `try...catch` blocks and event listeners to gracefully manage unexpected situations.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Observe that the server starts, but it crashes without helpful error messages if errors occur.

## Solution

The solution involves adding error handling to properly manage exceptions and provide detailed error messages. The `bugSolution.js` provides a corrected version of the code with proper error handling.