export default function addDashesToUUID(uuidString: string) {
  const uuidPattern = /(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/;
  const formattedUUID = uuidString.replace(uuidPattern, "$1-$2-$3-$4-$5");
  return formattedUUID;
}
