import React, { useCallback, useState, useEffect, useRef } from "react";
import styles from "./home.module.css";
import ModelPicker from "~/components/ModelPicker";
import Tile from '../../components/Tile';
import center_tiles from '../../assets/center_tiles';
import edge_tiles from '../../assets/edge_tiles';
import colors from '../../assets/colors.json';
import exportModel from "../../util/exportBoard";
import Image from "next/image";
import logo from '../../assets/logo.png';

export default function Index() {

  const boardRef = useRef();

  const centerModels = center_tiles.map(tile => ({
    ...tile,
    layoutChanges: {}
  }));
  const sideModels = edge_tiles.map(tile => ({
    ...tile,
    layoutChanges: {}
  }));

  const [centerModel, setCenterModel] = useState();
  const [sideModel, setSideModel] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const cleanModels = useCallback(() => {
    setSideModel();
    setCenterModel();
    setSelectedColor();
  }, []);

  const updateTile = useCallback((modelStateChanger) => {
    const updateTrigger = (element) => {
      modelStateChanger(oldTile => {
        return ({...oldTile, layoutChanges: {...oldTile.layoutChanges, [element.getAttribute('data-name')]: selectedColor.value}})
      });
    }
    return updateTrigger;
  }, [selectedColor]);

  const changeColor = useCallback((color) => {
    if (selectedColor && selectedColor == color) setSelectedColor()
    else setSelectedColor(color)
  }, [selectedColor]);

  return (
    <main className={styles.home}>
      <section className={styles.model}>
        <a className={styles.company} href="http://www.metromateriais.com.br" target="_blank" rel="noreferrer">
          <Image src={logo} alt="Logotipo da Metro Hidráulicos" layout="responsive" />
        </a>
        <p>Escolha os modelos:</p>
        <ModelPicker
          title="Área de Centro"
          picked={centerModel}
          updateOperation={setCenterModel}
          options={centerModels}
        />
        <ModelPicker
          title="Área de Moldura"
          picked={sideModel}
          updateOperation={setSideModel}
          options={sideModels}
        />
        <button className={styles.model__export} onClick={(_)=>exportModel(boardRef, centerModel, sideModel)}>Exportar Modelo</button>
        <button className={styles.model__clean} onClick={cleanModels}>Limpar Áreas</button>
      </section>
      <section className={styles.board}>
        <h2>Modelo escolhido:</h2>
        <p>Clique numa cor e depois numa área do ladrilho para colorir</p>
        <div className={styles.board__area} ref={boardRef}>
          {sideModel
            ? <>
                {Array.from(Array(4)).map((_, idx) => <Tile data={sideModel} key={idx} updateTile={updateTile(setSideModel)} selectedColor={selectedColor} />)}
                <Tile data={{...sideModel.cornerModel, layoutChanges: {...sideModel.layoutChanges}}} updateTile={updateTile(setSideModel)} selectedColor={selectedColor} />
              </>
            : 
            <>
              <div className={styles.board__side__placeholder}>
                <h2>Área de Moldura e Rodapé</h2>
                <p>Selecione o ladrilho</p>
              </div>
              <div className={styles.board__side__placeholder}>
                <h2>Área de Moldura</h2>
                <p>Selecione o ladrilho</p>
              </div>
            </>
          }
          <section className={styles.board__center}>
            {centerModel 
              ? Array.from(Array(4)).map((_, idx) => <Tile data={centerModel} tileIndex={idx} key={idx} updateTile={updateTile(setCenterModel)} selectedColor={selectedColor} />) 
              : <div className={styles.board__center__placeholder}>
                  <h2>Área de Centro,<br/> Florão ou Tozeto</h2>
                  <p>Selecione o ladrilho</p>
                </div>}
          </section>
        </div>
      </section>
      <section className={styles.picker}>
        <h2>Escolha a cor:</h2>
        <div className={styles.picker__colors}>
          {colors.map((color, idx) => (
            <div className={selectedColor === color ? styles.picker__selectedColor : styles.picker__colorItem} key={idx} onClick={(e) => changeColor(color)}>
              <span style={{ backgroundColor: color.value }} />
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
