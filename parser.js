function generateTree() {

    let grammarText = document.getElementById("grammar").value.trim();
    let input = document.getElementById("inputString").value.trim();

    if (grammarText === "" || input === "") {
        alert("Please enter grammar and input string");
        return;
    }

    let grammar = processGrammar(grammarText);

    if (checkLeftRecursion(grammar)) {
        document.getElementById("result").textContent =
            "Error: Left Recursion detected in grammar.";
        return;
    }

    let tokens = input.split(" ");
    let index = 0;

    function parse(symbol) {

        let node = { name: symbol, children: [] };

        if (!grammar[symbol]) {

            if (tokens[index] === symbol) {
                index++;
                return node;
            } else {
                throw "Unexpected token: " + tokens[index];
            }

        }

        let productions = grammar[symbol];

        for (let prod of productions) {

            let savedIndex = index;
            let children = [];

            let symbols = prod.split(" ");

            try {

                for (let s of symbols) {

                    if (s === "ε") continue;

                    let child = parse(s);
                    children.push(child);

                }

                node.children = children;
                return node;

            } catch (e) {

                index = savedIndex;

            }

        }

        throw "No valid production for " + symbol;

    }

    try {

        let startSymbol = Object.keys(grammar)[0];
        let tree = parse(startSymbol);

        if (index !== tokens.length) {
            throw "Input string not fully parsed.";
        }

        document.getElementById("result").textContent =
            "Parsing Successful!";

        drawTree(tree);

    } catch (err) {

        document.getElementById("result").textContent =
            "Parsing Error: " + err;

    }

}

function processGrammar(text) {

    let grammar = {};
    let lines = text.split("\n");

    for (let line of lines) {

        let parts = line.split("->");

        if (parts.length !== 2) continue;

        let left = parts[0].trim();
        let right = parts[1].trim();

        let productions = right.split("|").map(p => p.trim());

        grammar[left] = productions;

    }

    return grammar;

}

function checkLeftRecursion(grammar) {

    for (let nonTerminal in grammar) {

        let productions = grammar[nonTerminal];

        for (let prod of productions) {

            let firstSymbol = prod.split(" ")[0];

            if (firstSymbol === nonTerminal) {
                return true;
            }

        }

    }

    return false;

}
