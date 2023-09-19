function distanceFromHqInBlocks(distance){
    const distanceFromHqInBlocks= 42;
    const location=distance;
    const totalDistance= Math.abs(distance-distanceFromHqInBlocks);
    return totalDistance;
}
function distanceFromHqInFeet(distance){
const distanceFromHqInFeet=264;
const blocks=distanceFromHqInBlocks(distance);
return distanceFromHqInFeet*blocks;
}
function distanceTravelledInFeet(distance1, distance2){
    const distanceFromHqInFeet=264;
    const totalDistance= Math.abs (distance1-distance2)
 return totalDistance*distanceFromHqInFeet;
}
function calculatesFarePrice(start, destination){
    const distanceFromHqInFeet=264;
    const totalDistance=Math.abs ((destination-start)*distanceFromHqInFeet)
    if (totalDistance<400){
        return 0;
}
else if (totalDistance>400 && totalDistance<2000)
{
return ((totalDistance-400)*0.02);
}
else if (totalDistance>2000 && totalDistance<2500)
{
    return 25;
}
else return ('cannot travel that far')
}
