
export function clearObject(object) {
  if (!object) return null;
  for (const key in object) {
    object[key] = null;
  }
}