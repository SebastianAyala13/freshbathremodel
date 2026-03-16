const AUTHORIZED_ZIP_CODES = [
  "33101",
  "33125",
  "33126",
  "33130",
  "33131",
  "33132",
  "33133",
  "33134",
  "33135",
  "33136",
  "33137",
  "33138",
  "33139",
  "33140",
  "33141",
  "33142",
  "33143",
  "33144",
  "33145",
  "33146"
];

export function isValidZipCode(zip: string): boolean {
  const normalized = zip.trim();
  return AUTHORIZED_ZIP_CODES.includes(normalized);
}

export { AUTHORIZED_ZIP_CODES };
