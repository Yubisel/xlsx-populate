import XlsxPopulate from "xlsx-populate";

async function main() {
  const workbook = await XlsxPopulate.fromFileAsync("./readRange.xlsx");
  const sheet = workbook.sheet("Sheet1");

  const data = sheet.usedRange().value();
  const data2 = sheet.range("A1:B2").value();

  console.log(data);
  console.log(data2);
}

main();
