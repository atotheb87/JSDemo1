var maxOuterNum = 12;
    maxInnerNum = 12;

for(var i = 0; i <= maxOuterNum; i++){
    // console.log("i = " + i);
    console.log("The " + i + "'s Table");
    for(var j = 0; j <= maxInnerNum; j++){
        // 
        console.log(i + " x " + j + " = " + (i * j));
    }

    if(i != maxOuterNum){
        console.log("________________________________________");
    }
    
}