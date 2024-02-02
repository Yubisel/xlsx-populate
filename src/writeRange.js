import XlsxPopulate from "xlsx-populate";

async function main() {
  const workbook = await XlsxPopulate.fromBlankAsync();
  const sheet = workbook.sheet("Sheet1");

  sheet.cell("A1").value("Name");
  sheet.cell("B1").value("Age");

  const data = [
    ["John Doe", 30],
    ["Jane Doe", 29]
  ];

  sheet.cell("A2").value(data);

  workbook.toFileAsync("./writeRange.xlsx");
}

main();
