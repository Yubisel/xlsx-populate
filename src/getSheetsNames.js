import XlsxPopulate from "xlsx-populate";


async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./getSheetsNames.xlsx");
  const sheets = workbook.sheets();

  console.log(sheets.map((sheet) => sheet.name()));
}

main();