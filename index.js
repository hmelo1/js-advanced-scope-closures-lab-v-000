function produceDrivingRange(blockRange){
  return function(startRange, endRange){
    if (endRange - startRange > blockRange){
      return `${endRange - startRange} blocks out of range`;
    } else {
      return `within range by ${endRange - startRange}`;
    }
  }
}
