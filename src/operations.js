
export function clearObject(object) {
  for (const key in object) {
    object[key] = null;
  }
}