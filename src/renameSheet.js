import XlsxPopulate from "xlsx-populate";


async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./renameSheet.xlsx");
  workbook.sheet(0).name("New Name");

  workbook.toFileAsync("./renameSheet.xlsx");
}

main();