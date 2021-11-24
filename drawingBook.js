function pageCount(n, p) {
  //GIVEN
  //When they open the book,
  //page  is always on the right side.
  //When they flip page 1 , they see pages 2 and3 ;
  //Each page except the last page will always be printed on both sides.
  let frontFlip = Math.floor(p / 2);
  let backFlip = Math.floor(n / 2 - frontFlip);

  let result = Math.min(frontFlip, backFlip);
  return result;
}
