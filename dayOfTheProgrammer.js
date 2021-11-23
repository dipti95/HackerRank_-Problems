function dayOfProgrammer(year) {
  if (year == 1918) return "26.09.1918";
  else if (
    // we are checking year is leep year or not
    // In the question  it is given that the leap year;
    //Divisible by 400.
    // Divisible by 4 and not divisible by 100.
    (year <= 1917 && year % 4 == 0) ||
    year % 400 == 0 ||
    (year % 4 == 0) & (year % 100 != 0)
  )
    return "12.09." + year;
  else return "13.09." + year;
}
