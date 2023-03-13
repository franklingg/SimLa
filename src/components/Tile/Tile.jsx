import { useEffect, useRef } from "react";
import styles from "./Tile.module.css";

export default function Tile({ data, vertical, tileIndex, updateTile, selectedColor }) {
  const TileImg = data.img;
  const tileRef = useRef();

  useEffect(() => {
    if (tileRef.current && selectedColor && updateTile) {
      const clickables = [...tileRef.current.querySelectorAll('[data-name]')];
      clickables.filter(c => c.getAttribute('data-name')?.length == 1).forEach(element => {
        element.addEventListener('click', _ => updateTile(element));
      });
    }
  }, [selectedColor, updateTile]);

  useEffect(()=>{
    if(tileRef.current){
      const clickables = [...tileRef.current.querySelectorAll('[data-name]')];
      Object.keys(data.layoutChanges).forEach(key => {
      const elementToFill = clickables.find(el => el.getAttribute('data-name') == key );
        elementToFill.style.fill = data.layoutChanges[key]
      });
    }
  }, [data.layoutChanges]);

  useEffect(()=>{
    if(tileRef.current && tileIndex != 0){
      if(data.type == 'NORMAL'){
        tileRef.current.style.transform = '';
      } else if(data.type == 'REFLECTIVE'){
        tileRef.current.style.transform = `scale(${tileIndex != 2 ? -1 : 1}, ${tileIndex != 1 ? -1 : 1})`;
      } else if(data.type == 'ROTATION'){
        tileRef.current.style.transform = `rotate(${tileIndex == 1 ? 90 : tileIndex == 3 ? 180 : 270}deg)`;
      }
    }
  }, [tileIndex, data.type]);

  useEffect(()=> {
    if(tileRef.current && vertical){
      tileRef.current.style.transform = `rotate(${data.asym ? 90 : 270}deg)`;
    }
  }, [data.asym, vertical]);

  return (
    <div className={styles.tile} ref={tileRef}>
      <TileImg width="16.5rem" height="16.5rem" />
    </div>
  );
}
