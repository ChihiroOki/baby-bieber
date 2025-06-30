// Description: This code checks if the lyrics of "Baby" by Justin Bieber contain the word "baby"
// and counts how many times it appears.
import bieberBaby from './baby-bieber-lyrics';
// Function to check if the lyrics contain the word "baby"
function hasBaby(lyrics: string[]): boolean {
  return lyrics.some(line => line.toLowerCase().includes('baby'));
}
console.log(hasBaby(bieberBaby)); // true
function numBaby(lyrics: string[]): number {
  return lyrics.reduce((count, line) => {
    const matches = line.match(/baby/gi);
    return count + (matches ? matches.length : 0);
  }, 0);
}
console.log(numBaby(bieberBaby)); // 26
