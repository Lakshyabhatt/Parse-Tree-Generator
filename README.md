🌳 Parse Tree Generator

A Web-Based Parse Tree Generator that allows users to input a grammar and an input string, then visualize the corresponding parse tree using Recursive Descent Parsing.

This project is designed as an educational tool to help students understand how parsing works internally in Compiler Design.

📘 Project Overview

Parsing is a fundamental concept in compiler construction. It analyzes whether a given input string conforms to a specified grammar and generates a parse tree representing the syntactic structure of the input.

However, many students struggle to understand parsing through traditional methods such as manual derivations on paper.

This project solves that problem by providing an interactive web-based visualization tool that allows users to experiment with grammar rules and immediately see how the parse tree is constructed.

With this tool, users can:

✏️ Enter grammar rules

⌨️ Provide an input string

🌳 Generate and visualize the parse tree

✨ Features

📥 Grammar input through a simple web interface

🔍 Detection of left recursion in grammar

⚙️ Implementation of Recursive Descent Parsing

🌳 Automatic parse tree generation

📊 Dynamic tree visualization using D3.js

❌ Error handling for invalid input strings

🛠 Technologies Used
Technology	Purpose
HTML	User Interface
CSS	Styling
JavaScript	Parsing logic
D3.js	Parse tree visualization
Git & GitHub	Version control
📁 Project Structure
parse-tree-generator
│
├── index.html      # Main user interface
├── style.css       # Styling for the webpage
├── parser.js       # Grammar processing and recursive descent parser
├── tree.js         # Parse tree visualization using D3.js
└── README.md       # Project documentation
⚙️ How It Works

The application follows these steps:

1️⃣ The user enters grammar rules.
2️⃣ The system processes the grammar and checks for left recursion.
3️⃣ The input string is tokenized.
4️⃣ A recursive descent parser validates the string according to the grammar.
5️⃣ During parsing, a tree structure is created dynamically.
6️⃣ The generated tree is visualized using D3.js in the browser.

🚀 How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/Lakshyabhatt/Parse-Tree-Generator.git
2️⃣ Open the project folder
cd Parse-Tree-Generator
3️⃣ Run the project

Open index.html in any web browser.

4️⃣ Use the application

Enter grammar rules

Enter the input string

Click Generate Parse Tree

👥 Team Members

Team Name: The Optimizers

👨‍💻 Lakshya Bhatt (Team Lead)

👨‍💻 Arpit Uniyal

👨‍💻 Yanjana Butola

👨‍💻 Harshini T

📚 References

Compilers: Principles, Techniques, and Tools
Aho, Lam, Sethi, Ullman

D3.js Documentation
https://d3js.org

MDN Web Docs
https://developer.mozilla.org
