function drawTree(treeData) {

    document.getElementById("tree").innerHTML = "";

    const width = 800;
    const height = 500;

    const svg = d3.select("#tree")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(50,50)");

    const root = d3.hierarchy(treeData);

    const treeLayout = d3.tree().size([width - 200, height - 200]);

    treeLayout(root);

    svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
        .attr("stroke", "black");

    svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 15)
        .attr("fill", "#4CAF50");

    svg.selectAll(".text")
        .data(root.descendants())
        .enter()
        .append("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y + 5)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text(d => d.data.name);

}
