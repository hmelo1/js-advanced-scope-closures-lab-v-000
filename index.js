function produceDrivingRange(blockRange){
  return function(startRange, endRange){
    let requestRangerange = endRange - startRange;
    if (requestRange > blockRange){
      return `${endRange - startRange} blocks out of range`;
    } else {
      return `within range by ${endRange - startRange}`;
    }
  }
}
