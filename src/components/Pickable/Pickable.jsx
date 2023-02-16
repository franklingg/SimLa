import styles from "./Pickable.module.css";
import Image from "next/image";
import { useDrag } from "react-dnd";

export default function Pickable({ data }) {
  const TileImg = data.TileImg;

  const [{}, drag] = useDrag(() => ({
    type: data.type,
    item: { ...data },
    options: {dropEffect: 'copy'},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    }),
  }));

  return (
    <div className={styles.pickable} role="Handle" ref={drag}>
      <div className={styles.pickable__image}>
        <TileImg alt={`Ladrilho ${data.code}`} width="10rem" height="10rem" />
      </div>
      <span>{`${data.code} (${data.size} X ${data.size} CM)`}</span>
    </div>
  );
}
