import JsPDF from 'jspdf';
import 'svg2pdf.js';
import autoTable from 'jspdf-autotable';
import banner from '../assets/banner.png';
import * as htmlToImage from "html-to-image";

const titleOffset = { x: 30, y: 200 }
const modelOffset = { x: 270, y: 42 }
const infoOffset = { x: 50, y: 290 }

const exportModel = async (boardRef, center, side) => {
  if (!boardRef.current || !center || !side) {
    alert('Selecione ambas as áreas antes de exportar');
  } else if([center, side].some(tile => Object.keys(tile.layoutChanges).length !== tile.numColors)) {
    alert('Escolha cores para todas as partes dos ladrilhos selecionados')
  } else {
    const model = new JsPDF('landscape', 'pt', 'a4');
    // TITULO
    const img = document.createElement('img');
    img.src = banner.src;
    model.addImage(img, 'png', titleOffset.x, titleOffset.y, 200, 65)

    autoTable(model, {
      pageBreak: 'avoid',
      tableWidth: 150,
      styles: { halign: 'center', fontSize: 14 },
      margin: { top: infoOffset.y, left: infoOffset.x },
      head: [['Centro', 'Moldura']],
      body: [[center.code, side.code]]
    })

    // LADRILHOS
    const modelDims = boardRef.current.getBoundingClientRect();
    const dataURI = await htmlToImage.toPng(boardRef.current);
    model.addImage(
      dataURI,
      modelOffset.x,
      modelOffset.y,
      modelDims.width,
      modelDims.height
    );

    model.save('Modelo_Gerado.pdf');
  }
};

export default exportModel;