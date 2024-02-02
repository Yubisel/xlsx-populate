import XlsxPopulate from "xlsx-populate";


async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./read.xlsx");
  const sheet = workbook.sheet("Sheet1");

  const name = sheet.cell("A2").value();
  const age = sheet.cell("B2").value();

  console.log(name, age);
}

main();