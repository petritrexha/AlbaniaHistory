// document.addEventListener("DOMContentLoaded", function () {
//     const pathNames = {
        
//       "ALB1494": "Tirane",
//       "ALB1495": "Fier",
//       "ALB1498": "Shkodër",
//       "ALB1502": "Kukës",
//       "ALB1504": "Vlore",
//       "ALB1521": "Korce",
//       "ALB1523": "Berat",
//       "ALB1524": "Elbasan",
//       "ALB1525": "Gjirokaster",
//       "ALB1526": "Diber",
//       "ALB1528": "Lezhe",
//       "ALB1529": "Durres"
//     };
  
//     for (const id in pathNames) {
//       const path = document.getElementById(id);
      
//       if (path) {
//         path.textContent = pathNames[id];
//       }
//       console.log(path);
//     }
  
//   });

document.addEventListener("DOMContentLoaded", function () {
    const pathNames = {
      "ALB1494": "Tirane",
      "ALB1495": "Fier",
      "ALB1498": "Shkodër",
      "ALB1502": "Kukës",
      "ALB1504": "Vlore",
      "ALB1521": "Korce",
      "ALB1523": "Berat",
      "ALB1524": "Elbasan",
      "ALB1525": "Gjirokaster",
      "ALB1526": "Diber",
      "ALB1528": "Lezhe",
      "ALB1529": "Durres"
    };
  
    const svg = document.getElementById("svg-map"); // Replace with your actual SVG ID
  
    for (const id in pathNames) {
      const path = document.getElementById(id);
  
      if (path) {
        const name = document.createElementNS("http://www.w3.org/2000/svg", "text");
        name.textContent = pathNames[id];
        name.setAttribute("x", path.getAttribute("x")); // Adjust x and y as needed
        name.setAttribute("y", path.getAttribute("y") - 10); // Adjust x and y as needed
        svg.appendChild(name);
      }
    }
  });
  
