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

  const centerTiles = center_tiles.map(tile => ({
    ...tile,
    layoutChanges: {}
  }));
  const sideTiles = edge_tiles.map(tile => ({
    ...tile,
    layoutChanges: {}
  }));

  const [centerTile, setCenterTile] = useState();
  const [sideTile, setSideTile] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const cleanModels = useCallback(() => {
    setSideTile();
    setCenterTile();
    setSelectedColor();
  }, []);

  const changeCenterTile = useCallback((newTile) => {
    setCenterTile(newTile);
  }, []);

  const changeSideTile = useCallback((newTile) => {
    setSideTile(newTile);
  }, []);

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
          picked={centerTile}
          updateOperation={changeCenterTile}
          options={centerTiles}
        />
        <ModelPicker
          title="Área de Moldura"
          picked={sideTile}
          updateOperation={changeSideTile}
          options={sideTiles}
        />
        <button className={styles.model__export} onClick={(_)=>exportModel(boardRef, centerTile, sideTile)}>Exportar Modelo</button>
        <button className={styles.model__clean} onClick={cleanModels}>Limpar Áreas</button>
      </section>
      <section className={styles.board}>
        <h2>Modelo escolhido:</h2>
        <p>Clique numa cor e depois numa área do ladrilho para colorir</p>
        <div className={styles.board__area} ref={boardRef}>
          {sideTile 
            ? Array.from(Array(5)).map((_, idx) => <Tile data={sideTile} key={idx} updateTile={setSideTile} selectedColor={selectedColor} />)
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
          <div className={styles.board__center}>
            {centerTile 
              ? Array.from(Array(4)).map((_, idx) => <Tile data={centerTile} tileIndex={idx} key={idx} updateTile={setCenterTile} selectedColor={selectedColor} />) 
              : <div className={styles.board__center__placeholder}>
                  <h2>Área de Centro,<br/> Florão ou Tozeto</h2>
                  <p>Selecione o ladrilho</p>
                </div>}
          </div>
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
