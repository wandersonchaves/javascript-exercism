//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let resp = ''
  for (let i = 0; i <= dna.length; i++) {
    if (dna[i] == 'A') {
      resp += 'U'
    } else if (dna[i] == 'C') {
      resp += 'G'
    } else if (dna[i] == 'G') {
      resp += 'C'
    } else if (dna[i] == 'T') {
      resp += 'A'
    }
  }
  return resp
};
