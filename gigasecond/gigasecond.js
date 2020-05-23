//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (getDate) => {
  let dateUTC = getDate.getTime()
  let mathGS = Math.pow(10, 9) * 1000
  let time = new Date(dateUTC + mathGS)
  return time
};
