export const themeColor = (scrollPosition) => {
  // console.log("yo", scrollPosition)
  if (Number.isInteger(scrollPosition) &&  scrollPosition >= 150 && scrollPosition <= 3016 ) {
    // console.log("In true");
    return true;
  } else {
    // console.log("In false");
    return false;
  }
};

export function isEmptyObject(obj) {
  var name;
  for (name in obj) {
      if (obj.hasOwnProperty(name)) {
          return false;
      }
  }
  return true;
}
