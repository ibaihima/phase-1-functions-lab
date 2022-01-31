// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const block = 42
    if (someValue > block){
        return someValue - block;
    }
    else 
        return block - someValue
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination){
    const distance = (start - destination) 
    return Math.abs (distance * 264)
}
function calculatesFarePrice(start, destination){
    const dist = distanceTravelledInFeet(start, destination)
    if (dist <= 400){
    return 0;    
    }
    else if (dist > 400 && dist <= 2000){
    return (dist - 400) *0.02
    }
    else if (dist > 2000 && dist <= 2500){
    return 25
    }
    else 
    return "cannot travel that far"
}   

