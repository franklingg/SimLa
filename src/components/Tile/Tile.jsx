import { useEffect, useRef } from "react";
import styles from "./Tile.module.css";

export default function Tile({ data, updateTile, selectedColor }) {
  const TileImg = data.TileImg;
  const tileRef = useRef();

  useEffect(() => {
    if (tileRef.current && selectedColor && updateTile) {
      const clickables = [...tileRef.current.querySelectorAll('[data-name]')];
      clickables.filter(c => c.getAttribute('data-name')?.length == 1).forEach(element => {
        element.addEventListener('click', (e) => {
          updateTile(old => {
            return ({...old, layoutChanges: {...old.layoutChanges, [element.getAttribute('data-name')]: selectedColor.value}})
          });
        });
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

  return (
    <div className={styles.tile} ref={tileRef}>
      <TileImg width="17rem" height="17rem" />
    </div>
  );
}
