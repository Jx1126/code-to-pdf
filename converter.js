const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Create a new PDF document
const doc = new PDFDocument();
const outputFilePath = path.join(__dirname, 'output', 'combined_code.pdf');

// Create the output folder if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'output'))) {
  fs.mkdirSync(path.join(__dirname, 'output'));
}

// Pipe the PDF document to a writable stream
doc.pipe(fs.createWriteStream(outputFilePath));

// Read the source_code folder
const sourceCodeFolder = path.join(__dirname, 'source_code');
const files = fs.readdirSync(sourceCodeFolder);

files.forEach((file, index) => {
  const filePath = path.join(sourceCodeFolder, file);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Add the filename to the PDF
  doc.font('Helvetica-Bold').fontSize(16).text(`"${file}":`, {
    underline: true,
  });

  // Add the file contents to the PDF
  doc.font('Courier').fontSize(12).text(fileContents, {
    paragraphGap: 10,
    indent: 20,
    align: 'left',
  });

  // Add a page break after each file, except the last one
  if (index < files.length - 1) {
    doc.addPage();
  }
});

// Finalize the PDF file
doc.end();

console.log(`PDF created at ${outputFilePath}`);
