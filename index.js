// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return street - 42
}

function distanceFromHqInFeet(value){
    distanceFromHqInBlocks(value)
    return value * 264   
}

function distanceTravelledInFeet(start,destination){
    return (destination - start) * 264

}

function calculatesFarePrice(start,destination){
    fareDistance = distanceTravelledInFeet(start,destination)
    if( fareDistance <= 400){
        return 0
    }else if(fareDistance > 400 && fareDistance <= 2000){
        return 0.2 * (fareDistance - 400)
    }else if(fareDistance > 2000 && fareDistance <= 2500){
        return 25
    }else{
        console.log("Cannot travel that far")
    }
}