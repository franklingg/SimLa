import styles from "./Pickable.module.css";
import Image from "next/image";
import { useDrag } from "react-dnd";

export default function Pickable({ data }) {
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
        <Image src={data.img} alt={`Ladrilho ${data.code}`} layout="fill" />
      </div>
      <span>{`${data.code} (${data.size} X ${data.size} CM)`}</span>
    </div>
  );
}
