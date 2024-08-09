/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
       let res = []
       for(let i = 0 ; i < list1.length ; i++){
           if( list2.indexOf(list1[i]) !==  -1 ) 
              res.push( [ list1[i] , i+ list2.indexOf(list1[i])  ] )
           
       }
    res.sort((a,b)=>a[1]-b[1] )
    let index = res[0][1]
    let final = res.filter(el=>index===el[1]   )
    let result =  final.map( el => el[0] )
    
  //  console.log( result)
   return result 
    
};