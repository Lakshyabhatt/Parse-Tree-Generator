Parse Tree Generator 🌳

A Web-based Parse Tree Generator that allows users to input a grammar and a string, and then visualize the corresponding parse tree using Recursive Descent Parsing.

This project is designed as an educational tool to help students understand how parsing works internally in compiler design.

Project Overview

Parsing is a fundamental concept in compiler construction. It checks whether an input string follows a specific grammar and generates a parse tree representing the syntactic structure of the input.

Many students find it difficult to understand parsing through manual derivations. This project solves that problem by providing an interactive visualization of parse trees.

Users can:

Enter grammar rules

Provide an input string

Generate and visualize the parse tree

Features

Grammar input through a simple web interface

Detection of left recursion

Implementation of Recursive Descent Parsing

Automatic parse tree generation

Dynamic tree visualization using D3.js

Error handling for invalid input strings

Technologies Used

HTML – User Interface

CSS – Styling

JavaScript – Parsing logic

D3.js – Tree visualization

Git & GitHub – Version control

Project Structure
parse-tree-generator
│
├── index.html      # Main UI of the application
├── style.css       # Styling for the webpage
├── parser.js       # Grammar processing and recursive descent parser
├── tree.js         # Parse tree visualization using D3.js
└── README.md       # Project documentation
How It Works

The user enters grammar rules.

The system processes the grammar and checks for left recursion.

The input string is tokenized.

A recursive descent parser validates the string.

During parsing, a tree structure is created.

The tree is visualized using D3.js.

How to Run the Project

Clone the repository

git clone https://github.com/Lakshyabhatt/Parse-Tree-Generator.git

Open the project folder.

Open index.html in any web browser.

Enter grammar and input string.

Click Generate Parse Tree.

Team Members

Team Name: The Optimizers

Lakshya Bhatt (Team Lead)

Arpit Uniyal

Yanjana Butola

Harshini T

References

Compilers: Principles, Techniques, and Tools – Aho, Lam, Sethi, Ullman

D3.js Documentation – https://d3js.org

MDN Web Docs – https://developer.mozilla.org
