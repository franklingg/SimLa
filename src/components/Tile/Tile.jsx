import { useEffect, useRef } from "react";
import styles from "./Tile.module.css";

export default function Tile({ data }) {
  const TileImg = data.TileImg;
  const tileRef = useRef();

  useEffect(()=>{
    if(tileRef.current){
      const clickables = [...tileRef.current.getElementsByTagName('path'), ...tileRef.current.getElementsByTagName('g')]
      clickables.filter(c => c.getAttribute('data-name')?.length == 1).forEach(element => {
        element.addEventListener('click', (e)=> {
          console.log('clicou em: ', element.getAttribute('data-name'))
        })
      });
    }
  }, [])

  return (
    <div className={styles.tile} ref={tileRef}>
      <TileImg width="17rem" height="17rem"  />
    </div>
  );
}
