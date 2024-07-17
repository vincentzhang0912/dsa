//topological sorting
const nodes = [
  {name:"socks",degree:0},
  {name:"shoes", degree:2, dependsOn:["socks","pant"]},
  {name:"pant", degree: 0},
  {name:"shirt",degree: 0},
  {name:"jacket",degree:1, dependsOn:["shirt"]},
  {name:"office",degree:2,dependsOn:["jacket","shoes"]}
  ];
  
  function topologicalSort(nodes){
      const sortedArray = [];
      
      //get all zero degree nodes to zeroDegreeNodes
      const zeroDegreeNodes = nodes.filter((node)=>node.degree === 0);
      //get all non-zero degree nodes to nonZeroDegreeNodes
      const nonZeroDegreeNodes = nodes.filter((node)=>node.degree !== 0);
      
      // console.log(zeroDegreeNodes);
      // console.log(nonZeroDegreeNodes);
      
      while(zeroDegreeNodes.length){
          const currentNode = zeroDegreeNodes.shift();
          // console.log(currentNode);
          if(!currentNode)
              zeroDegreeNodes.length = 0;
          else{
              sortedArray.push(currentNode);
              for(let i = 0; i < nonZeroDegreeNodes.length; i++){
                  let node = nonZeroDegreeNodes[i];
                  // console.log(node);
                  const hasDependency = node.dependsOn.find((dependency) => {return dependency === currentNode.name});
                  // console.log(hasDependency);
                  
                  if(hasDependency){
                      nonZeroDegreeNodes[i].degree--;
                      if(nonZeroDegreeNodes[i].degree === 0)
                          zeroDegreeNodes.push(nonZeroDegreeNodes[i]);
                  }
                  // console.log("------------",zeroDegreeNodes);
              }
          }
      }
      
      return sortedArray;
      
  }
  
  const result = topologicalSort(nodes);
  console.log(result);
  
  