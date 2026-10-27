$(document).ready(function() {
  var words = [
    { text: "Ruby on Rails", weight: 7 },
    { text: "PHP", weight: 4 },
    { text: "AI", weight: 6 },
    { text: "Agentic Development", weight: 9 },
    { text: "Agile", weight: 7 },
    { text: "community", weight: 10 },
    { text: "DevOps", weight: 3 },
    { text: "decentralization", weight: 7 },
    { text: "blockchain", weight: 3 },
    { text: "bioregionalism", weight: 8 },
    { text: "cleantech", weight: 6 },
    { text: "All Beings Thriving", weight: 10 },
    { text: "React.js", weight: 9 },
    { text: "solar", weight: 6 },
    { text: "Universal Basic Income", weight: 5 },
    { text: "social justice", weight: 7 },
    { text: "regeneration", weight: 10 },
    { text: "re-villaging", weight: 5 },
    { text: "dancing", weight: 3 },
    { text: "co-ops", weight: 6 },
    { text: "startups", weight: 8 },
    { text: "full-stack", weight: 5 },
    { text: "magic", weight: 2 },
    { text: "Node.js", weight: 9 },
    { text: "ethereum", weight: 3 },
    { text: "values", weight: 6 }
  ];

  $('#tag-cloud').jQCloud(words, { autoResize: true, delay: 10 });
});