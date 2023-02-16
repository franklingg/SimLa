import React, { useCallback, useState, useEffect } from "react";
import styles from "./home.module.css";
import Select from "react-select";
import ModelPicker from "~/components/ModelPicker";
import Tile from '../../components/Tile';
import TileImg from '../../assets/center_tiles/teste.svg';
import { useDrop } from "react-dnd";
import colors from '../../assets/colors.json';

const modelOptions = [
  { value: false, label: "Sem Moldura" },
  { value: true, label: "Com Moldura" },
];

export default function Index() {
  const [modelBorder, setModelBorder] = useState(modelOptions[0]);
  const tiles = [...Array.from(Array(5)).map((_) => ({
    TileImg,
    code: "CO 002",
    size: 20,
    type: 'CENTER_TILE'
  })),
  ];


  const [centerTile, setCenterTile] = useState();
  const [sideTile, setSideTile] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const [{ isOver: isOverCenter }, dropCenter] = useDrop(() => ({
    accept: "CENTER_TILE",
    drop: (item, monitor) => {
      if (monitor.isOver()) {
        setCenterTile(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  }));
  const [{ isOver: isOverSide }, dropSide] = useDrop(() => ({
    accept: "SIDE_TILE",
    drop: (item, monitor) => {
      if (monitor.isOver()) {
        setSideTile(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  }));

  const cleanModels = useCallback(() => {
    setSideTile();
    setCenterTile();
  }, []);

  const changeColor = useCallback((color) => {
    if(selectedColor && selectedColor == color) setSelectedColor()
    else setSelectedColor(color)
  }, [selectedColor]);

  useEffect(() => { }, []);

  return (
    <main className={styles.home}>
      <section className={styles.model}>
        <p>Escolha os modelos:</p>
        <Select
          options={modelOptions}
          value={modelBorder}
          onChange={(v) => {
            setModelBorder(v);
            cleanModels();
          }}
          classNames={{
            container: () => styles.model__picker,
          }}
        />
        <ModelPicker
          title="Área de Centro"
          type="CENTER_TILE"
          options={tiles}
        />
        {modelBorder.value && <ModelPicker
          title="Área de Moldura"
          type="SIDE_TILE"
          options={tiles}
        />}
        <button className={styles.model__clean} onClick={cleanModels}>Limpar Área(s)</button>
      </section>
      <section className={styles.board}>
        <h2>Modelo escolhido:</h2>
        <p>Clique numa cor e depois numa área do ladrilho para colorir</p>
        {modelBorder.value ? (
          <div
            className={`${styles.board__area} ${isOverSide && styles.board__area__highlight}`}
            ref={dropSide}
            role={"Dustbin"}
          >
            {sideTile && Array.from(Array(5)).map((_, idx) => <Tile data={sideTile} key={idx} />)}
            <div
              className={`${styles.board__center} ${isOverSide && styles.board__center__noHighlight} ${isOverCenter && styles.board__center__highlight}`}
              ref={dropCenter}
              role={"Dustbin"}
            >
              {centerTile && Array.from(Array(4)).map((_, idx) => <Tile data={centerTile} key={idx} />)}
            </div>
          </div>) : (
          <div
            className={`${styles.board__area} ${styles.board__center__unique} ${isOverCenter && styles.board__center__highlight}`}
            ref={dropCenter}
            role={"Dustbin"}
            style={{ backgroundColor: centerTile ? 'white' : 'var(--center)' }}
          >
            {centerTile && Array.from(Array(9)).map((_, idx) => <Tile data={centerTile} key={idx} />)}
          </div>
        )}
      </section>
      <section className={styles.picker}>
        <h2>Escolha a cor:</h2>
        <div className={styles.picker__colors}>
          {colors.map((color, idx) => (
            <div className={selectedColor === color ? styles.picker__selectedColor : styles.picker__colorItem} key={idx} onClick={(e)=>changeColor(color)}>
              <span style={{ backgroundColor: color.value }} />
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
