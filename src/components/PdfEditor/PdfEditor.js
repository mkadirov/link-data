import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver"; // for saving the edited PDF
import fontkit from "@pdf-lib/fontkit"; // Import fontkit

export const editPdf = async (
  pdf,
  result,
  region,
  subRegion,
  district,
  numberOfRooms,
  area,
  floor,
  floorOfHouse,
  publicPlaces,
  equipped,
  furniture,
  buildingTypeName,
  planTypeName,
  bathroomTypeTypeName,
  repairTypeName,
  marketTypeName,
  owner,
  rebateType,
  commisionName,
  pricingMonth,
  pricingYear
) => {
  // Fetch the existing PDF file
  const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
  // Register fontkit instance
  pdfDoc.registerFontkit(fontkit);

  // Embed a standard font (Helvetica)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the pages of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const secondPage = pages[1];

  // Define the text position and style
  const { width, height } = firstPage.getSize();
  firstPage.drawText(`${result} AQSH Dollari`, {
    x: 175,
    y: height - 196, // adjust according to your layout
    size: 30,
    font: helveticaFont, // Use the embedded standard font
    color: rgb(0, 0.53, 0.71),
  });

  firstPage.drawText(String('45643788765'), {
    x: 83,
    y: height - 306, // adjust according to your layout
    size: 14,
    font: helveticaFont, // Use the embedded standard font
    color: rgb(0, 0.53, 0.71),
  });

  // Function to format the current time
  const formatCurrentTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Get the day and pad with zeros if necessary
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Get the month (0-based, so add 1) and pad
    const year = now.getFullYear(); // Get the year
    const hours = String(now.getHours()).padStart(2, '0'); // Get the hours and pad
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get the minutes and pad

    return `${day}.${month}.${year} ${hours}:${minutes}`; // Format the date and time
  };

  const currentTime = formatCurrentTime(); // Get the formatted current time

  firstPage.drawText(currentTime, {
    x: 349,
    y: height - 323, // adjust according to your layout
    size: 14,
    font: helveticaFont, // Use the embedded standard font
    color: rgb(0, 0.53, 0.71),
  });

  firstPage.drawText("Eshonov Bahodir", {
    x: 168,
    y: height - 342, // adjust according to your layout
    size: 14,
    font: helveticaFont, // Use the embedded standard font
    color: rgb(0, 0.53, 0.71),
  });

  const textData = [
    { text: region, heightOffset: 407 },
    { text: subRegion, heightOffset: 424 },
    { text: district, heightOffset: 441 },
    { text: String(numberOfRooms), heightOffset: 458 },
    { text: `${area} m²`, heightOffset: 475 },
    { text: String(floorOfHouse), heightOffset: 492 },
    { text: String(floor), heightOffset: 509 },
  ];

  // Loop through the array and draw each text item
  textData.forEach(({ text, heightOffset }) => {
    firstPage.drawText(text, {
      x: 331,
      y: height - heightOffset, // Use the provided heightOffset for positioning
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  });

  // Increment y position for each public place and draw it
  let heightY = 509;
  publicPlaces.forEach((item) => {
    heightY += 17; // Increment heightY for each item
    firstPage.drawText(item, {
      x: 331,
      y: height - heightY, // Use the updated heightY
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  });

  firstPage.drawText(equipped, {
    x: 331,
    y: height - 717, // adjust according to your layout
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  let heightY2 = 158;
  furniture.forEach((item) => {
    heightY2 += 17; // Increment heightY for each item
    secondPage.drawText(item, {
      x: 331,
      y: height - heightY2, // Use the updated heightY
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  });

  const values = [
    buildingTypeName,
    planTypeName,
    bathroomTypeTypeName,
    repairTypeName,
    marketTypeName,
    owner,
    rebateType,
    commisionName,
    pricingMonth,
    pricingYear,
  ];

  let heightY3 = height - 343; // Starting height for drawing text

  values.forEach((value, index) => {
    secondPage.drawText(String(value), {
      x: 331,
      y: heightY3 - index * 17, // Adjust y position for each value
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the download
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  saveAs(blob, "edited_pdf.pdf");
};