import XlsxPopulate from "xlsx-populate";

XlsxPopulate.fromBlankAsync().then(workbook => {
  const sheet = workbook.sheet("Sheet1");
  sheet.cell("A1").value("Hello, World!");
  return workbook.toFileAsync("./out.xlsx");
});