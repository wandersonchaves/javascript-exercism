//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([firstColor, secondColor]) => {
  let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  let first = colors.indexOf(firstColor)
  let second = colors.indexOf(secondColor)
  let sumColors = `${first}${second}`
  return parseInt(sumColors)
};
