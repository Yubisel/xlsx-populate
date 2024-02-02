import XlsxPopulate from "xlsx-populate";


async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./sheetName.xlsx");
  const sheet = workbook.sheet(0);

  console.log(sheet.name());
}

main();