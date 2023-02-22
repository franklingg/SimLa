import React, { useCallback, useState, useEffect } from "react";
import styles from "./home.module.css";
import ModelPicker from "~/components/ModelPicker";
import Tile from '../../components/Tile';
import center_tiles from '../../assets/center_tiles';
import edge_tiles from '../../assets/edge_tiles';
import colors from '../../assets/colors.json';

export default function Index() {
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

  useEffect(() => { }, []);

  return (
    <main className={styles.home}>
      <section className={styles.model}>
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
        <button className={styles.model__clean} onClick={cleanModels}>Limpar Área(s)</button>
      </section>
      <section className={styles.board}>
        <h2>Modelo escolhido:</h2>
        <p>Clique numa cor e depois numa área do ladrilho para colorir</p>
        <div className={styles.board__area}>
          {sideTile && Array.from(Array(5)).map((_, idx) => <Tile data={sideTile} key={idx} updateTile={setSideTile} selectedColor={selectedColor} />)}
          <div className={styles.board__center}>
            {centerTile && Array.from(Array(4)).map((_, idx) => <Tile data={centerTile} tileIndex={idx} key={idx} updateTile={setCenterTile} selectedColor={selectedColor} />)}
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
