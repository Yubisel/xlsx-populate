import XlsxPopulate from "xlsx-populate";


async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./addSheet.xlsx");
  workbook.addSheet("Sheet2");

  workbook.toFileAsync("./addSheet.xlsx");
}

main();