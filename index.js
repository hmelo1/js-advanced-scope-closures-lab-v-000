function produceDrivingRange(blockRange){
  return function(startRange, endRange){
    let requestRange = parseInt(endRange) - parseInt(startRange);
    if (requestRange > blockRange){
      return `${endRange - startRange} blocks out of range`;
    } else {
      return `within range by ${endRange - startRange}`;
    }
  }
}
