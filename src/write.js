import XlsxPopulate from "xlsx-populate";

// example with promises
XlsxPopulate.fromBlankAsync().then(workbook => {
  const sheet = workbook.sheet("Sheet1");
  sheet.cell("A1").value("Hello, World!");
  return workbook.toFileAsync("./write_promises.xlsx");
});


// example with async/await
async function main() {
  const workbook = await XlsxPopulate.fromBlankAsync();
  const sheet = workbook.sheet("Sheet1");
  sheet.cell("A1").value("Hello, World!");
  workbook.toFileAsync("./write_async_await.xlsx");
}

main();
