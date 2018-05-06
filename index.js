function produceDrivingRange(blockRange){
  return function(startRange, endRange){
    let requestRange = parseInt(endRange) - parseInt(startRange);
    if (requestRange > blockRange){
      return `${requestRange} blocks out of range`;
    } else {
      return `within range by ${requestRange}`;
    }
  }
}
