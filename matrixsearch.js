// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance is 25 (8+13+4).

function totalDistance(carr, testPoint) {
  var total = 0;
  // calculate total disstance each customer walks
  for(var customer of carr) {
      total += Math.abs(customer[0] - testPoint[0]);
      total += Math.abs(customer[1] - testPoint[1]);
  }
  return total;
}

// console.log(totalDistance([ [10,0], [-1,-10], [2,4] ], [0,0] ));

function tacoTruck(carr){
  var maxX = carr[0][0];
  var minX = carr[0][0];
  var maxY = carr[0][1];
  var minY = carr[0][1];
  for(var i=0; i<carr.length; i++) {
      if(carr[i][0] > maxX){
          maxX = carr[i][0];
      }
      if(carr[i][0] < minX) { 
          minX = carr[i][0];
      }
      if(carr[i][1] > maxY) { 
          maxY = carr[i][1];
      }
      if(carr[i][1] < minY) { 
          minY = carr[i][1];
      }
      }
      // console.log(maxX, minX, maxY, minY);
      // var bestPos = {x: Infinty, y: Infinty};
      // var bestTotal = Infinty;
  
      var bestPos = {x: minX, y: minY};
      var bestTotal = totalDistance(carr, [minX, minY]);
  
      console.log(bestPos, bestTotal);
  
      for(var j=minX; j<maxX; j++){
      for(var m=minY; m<maxY; m++){
          // console.log([j, m]);
          var tempDist = totalDistance(carr, [j, m]);
          // console.log(tempDist, [j, m]);
          if(tempDist < bestTotal) {
          bestTotal = tempDist;
          bestPos.x = j;
          bestPos.y = m;
          }
      }
  }
  
  return bestPos;

}

console.log(tacoTruck( [ [10,0], [-1,-10], [2,4] ] ))