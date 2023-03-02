import JsPDF from 'jspdf';
import 'svg2pdf.js';
import autoTable from 'jspdf-autotable';

const titleOffset = {x: 50, y: 230}
const modelOffset = {x: 250, y: 42}
const infoOffset = {x: 50, y: 270}

const exportModel = async (boardRef, center, side) => {
    if(boardRef.current){
      const model = new JsPDF('landscape','pt','a4');
      // TITULO
      model.text('XX Ladrilhos', titleOffset.x, titleOffset.y)
    
      autoTable(model, {
        pageBreak: 'avoid',
        tableWidth: 150,
        styles: {halign: 'center', fontSize: 14},
        margin: {top: infoOffset.y, left: infoOffset.x},
        head: [['Centro', 'Moldura']],
        body: [[center.code, side.code]]
      })

      // LADRILHOS
      const modelDims = boardRef.current.getBoundingClientRect();
      await Promise.all([...boardRef.current.getElementsByTagName('svg')].map( svgElement => {
        const dims = svgElement.getBoundingClientRect();
        return model.addSvgAsImage(
          svgElement.outerHTML, 
          modelOffset.x + dims.x - modelDims.x, 
          modelOffset.y + dims.y - modelDims.y, 
          dims.width, 
          dims.height
        );
      }));      

      model.save('Modelo_Gerado.pdf');
    }
};

export default exportModel;