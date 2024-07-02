/* You are given a set of N jobs. Each job i has a deadline d[i] and a profit p[i]. 
Each job takes 1 unit of time to complete, and a job can only be completed if it starts before its deadline. 
Your task is to find the maximum profit that can be earned by sequencing the jobs optimally.

Input Format :
--------------
Line 1: An integer N representing the number of jobs.
Line 2: N space-separated integers representing the deadlines of the jobs.
Line 3: N space-separated integers representing the profits of the jobs.

Output Format : 
---------------
Line 1: A number representing the maximum profit.

Sample Input 1 :
----------------
5
2 1 2 1 3
100 19 27 25 15


Sample Output 1 :
-----------------
142

Explanation: The maximum profit is achieved by scheduling jobs in the order: 
Job 3 (Profit 27), Job 1 (Profit 100), and Job 2 (Profit 19).

Sample Input 2 :
----------------
4
4 1 1 1
20 10 40 30

Sample Output 2 :
-----------------
60

Explanation: The maximum profit is achieved by scheduling jobs in the order: 
Job 3 (Profit 40) and Job 4 (Profit 30).

*/

let readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, deadlines, profits, il = 0;
readline.on('line', function(line) {
  if (il === 0) {
      n = parseInt(line);
      il++;
  } else if (il == 1) {
      deadlines = line.split(" ").map(Number);
      il++;
  } else if (il == 2) {
      profits = line.split(" ").map(Number);
      console.log(jobSequencing(n, deadlines, profits));
      readline.close();
  }
});

function jobSequencing(n, deadlines, profits) {
  //Write your code here and return maximum profit
  let maxProfit = 0;
  let jobs = [];
  for (let i = 0; i < n; i++){
      // jobs.push({deadline: deadlines[i], profit: profits[i]});
      let deadline = deadlines[i];
      let profit = profits[i];
      let job = {deadline: deadline, profit: profit};
      jobs.push(job);
      // console.log(jobs);
  }
  jobs.sort((a, b) => b.profit - a.profit);
  let maxDeadline = Math.max(...deadlines);
  let slots = Array(maxDeadline).fill(false);
  
  for (let i = 0; i < n; i++){
      
      let job_deadline = jobs[i].deadline - 1;
      for (let j = job_deadline; j >= 0; j--){
          if(!slots[j]){
              slots[j] = true;
              maxProfit = maxProfit + jobs[i].profit;
              break;
          }
      }
  }
  return (maxProfit);
}

