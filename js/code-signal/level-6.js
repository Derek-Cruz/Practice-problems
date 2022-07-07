function solution(statues) {
    var max=statues[0]
    var min=statues[0]
    var i=0
    while(i<statues.length){
       if(statues[i]>max){
          max = statues[i]
       }
       if(statues[i]<min){
          min = statues[i]
       }
       i++
    }
    return max - min +1 -statues.length
 }
 
