export function validateInstagramUrl(value: string) {
  return !value || value.toLowerCase().includes("instagram.com");
}
