function sortAndCount(n, ar) {
  // Store the count of each sock in a hash map.
  let sockHashMap = {};
  
  
  // Map through each items in the array and find the frequency of each sock type
  ar.map((item) => {
    if(sockHashMap.hasOwnProperty(item)){
      sockHashMap[item] = sockHashMap[item] + 1;
    }else{
      sockHashMap[item] = 1;
    }
  });

  let pairs = 0;
  for(var stock in sockHashMap){
    if(sockHashMap.hasOwnProperty(stock)){
      if(sockHashMap[stock] % 2 == 0){
        pairs+= (sockHashMap[stock]/2);
      }else if((sockHashMap[stock] - 1) % 2 == 0){
        pairs+= ((sockHashMap[stock] - 1) / 2);
      }
    }
  }
  
  return pairs;
}
console.log(sortAndCount(17, [10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40 ]));