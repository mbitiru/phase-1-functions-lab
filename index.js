// function distanceFromHqInBlocks
function distanceFromHqInBlocks (distance){
  if (distance > 42){
    return (distance - 42);
  }
   else {
    return (42 - distance);
  }
}

// function distanceFromHqInFeet distanceFromHqInBlocks * 264
function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

// function distanceTravelledInFeet
let start = m;
let destination = n;
function distanceTravelledInFeet (m, n) {
  if (m < n) {
    return (n - m) * 264;
  } else {
    return (m - n) * 264;
  }
}

//function calculatesFarePrice
function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } 
  else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } 
  else if (distance > 2000 && distance < 2500) {
    return 25;
  } 
  else {
    return "cannot travel that far";
  }
}
