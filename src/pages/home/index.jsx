import React, { useCallback, useState, useEffect } from "react";
import styles from "./home.module.css";
import Select from "react-select";
import ModelPicker from "~/components/ModelPicker";
import tileImg from "../../assets/tile.png";
import { useDrop } from "react-dnd";
import Tile from "../../components/Tile";

const modelOptions = [
  { value: true, label: "Com Moldura" },
  { value: false, label: "Sem Moldura" },
];

export default function Index() {
  const [modelBorder, setModelBorder] = useState(modelOptions[0]);
  const tiles = Array.from(Array(20)).map((_) => ({
    img: tileImg.src,
    code: "CO 002",
    size: 20,
    type: 'CENTER_TILE'
  }));
  const tiles2 = Array.from(Array(20)).map((_) => ({
    img: tileImg.src,
    code: "CO 002",
    size: 20,
    type: 'SIDE_TILE'
  }));
  const colors = [{
    name: 'BRANCO C01',
    value: '#fff'
  },
  {
    name:  'CINZA C03',
    value: '#888'
  },
  {
    name:  'ROSA',
    value: 'pink'
  },
  {
    name:  'verde',
    value: 'green'
  }
]


  const [centerTile, setCenterTile] = useState();
  const [sideTile, setSideTile] = useState();

  const [{isOver: isOverCenter}, dropCenter] = useDrop(() => ({
    accept: "CENTER_TILE",
    drop: (item, monitor) => {
      if(monitor.isOver()){
        setCenterTile(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({shallow: true}),
      canDrop: monitor.canDrop()
    })
  }));
  const [{isOver: isOverSide}, dropSide] = useDrop(() => ({
    accept: "SIDE_TILE",
    drop: (item, monitor) => {
      if(monitor.isOver()){
        setSideTile(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({shallow: true}),
      canDrop: monitor.canDrop()
    })
  }));

  const cleanModels = useCallback(()=>{
    setSideTile();
    setCenterTile();
  }, []);

  const paintTile = useCallback((color)=>{
    alert(color.name);
  }, []);

  useEffect(() => {}, []);

  return (
    <main className={styles.home}>
      <section className={styles.model}>
        <p>Escolha os modelos:</p>
        <Select
          options={modelOptions}
          value={modelBorder}
          onChange={(v) => setModelBorder(v)}
          classNames={{
            container: () => styles.model__picker,
          }}
        />
        <ModelPicker
          title="Área de Centro"
          type="CENTER_TILE"
          options={tiles}
        />
        <ModelPicker
          title="Área de Moldura"
          type="SIDE_TILE"
          options={tiles2}
        />
        <button className={styles.model__clean} onClick={cleanModels}>Limpar Áreas</button>
      </section>
      <section className={styles.board}>
        <h2>Modelo escolhido:</h2>
        <p>Clique numa cor e depois numa área do ladrilho para colorir</p>
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
          </div>
      </section>
      <section className={styles.picker}>
        <h2>Escolha a cor:</h2>
        <div className={styles.picker__colors}>
          {colors.map((color, idx) => (
            <div className={styles.picker__colorItem} key={idx} onClick={(e) => paintTile(color)}>
              <span style={{backgroundColor: color.value}} />
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
