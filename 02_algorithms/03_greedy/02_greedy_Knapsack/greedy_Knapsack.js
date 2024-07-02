/* Write a JS program to implement knapsack problem using Greedy approach.

Input Format :
--------------
Line 1 : N space separated numbers, weigths[]
Line 2 : N space separated numbers, values[]
Line 3 : A number, capacity

Output Format : 
---------------
Line 1 : Number, maximum profit / 0 for boundary conditions

Sample Input 1 :
----------------
5 3 4
20 40 30
10

Sample Output 1 :
-----------------
70

Sample Input 2 :
----------------
5 3 4
20 40 30
0

Sample Output 2 :
-----------------
0


*/

let readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout
});
let weights;
let values;
let capacity;
let il=1;
readline.on('line',function(line){
  if(il==1){
      weights=line.split(" ").map(Number);
      il++;
  }
  else if(il == 2){
      values=line.split(" ").map(Number);
      il++;
  }
  else if(il==3)
  {
    capacity = line;
    console.log(knapsack(weights.length,weights,values,capacity,0));
    readline.close();
  }
});

function knapsack(n,weights,values,capacity,index){
 //Write your code here and return maximum profit
 // If the capacity is zero,return zero
 if (capacity === 0)
  return 0;
  
  //calculate value to weight ration form each item
  let items = [];
  for (let i = 0; i < n; i++){
      //items.push({weight: weights[i], value :value[i], ratio: values[i]/weight[i]});
      let weight = weights[i];
      let value = values[i];
      let ratio = values[i]/weights[i];
      let item = {weight:weight, value:value, ratio:ratio};
      items.push(item);
  }
  //console.log(items);
  //sort items by ratio in descending order
  items.sort((a, b) =>b.ratio - a.ratio );
  // console.log(items);
  let maxProfit = 0;
  for (let i = 0; i < n; i++){
      if (capacity === 0)
          break;
      if (items[i].weight <= capacity){
          //take the whole item
          capacity = capacity - items[i].weight;
          maxProfit = maxProfit + items[i].value;
      } else {
          maxProfit = maxProfit + (capacity / items[i].weight) * items[i].value;
          capacity = 0;
      }
  }
  
  return maxProfit;
}
