export default function createIteratorObject(report) {
  const allemps = [];

  for (const el of Object.values(report.allEmployees)) {
    allemps.push(...el);
  }
  return allemps;
}
