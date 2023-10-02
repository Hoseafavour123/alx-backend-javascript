export default function cleanSet(set, startString) {
  let clean = '';

  if (!(startString) || !(startString.length)) {
    return clean;
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      clean = `${clean}-${value.substring(startString.length)}`;
    }
  }

  if (clean.startsWith('-')) {
    clean = clean.slice(1);
  }
  return clean;
}
