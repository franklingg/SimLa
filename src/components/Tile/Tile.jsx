import styles from "./Tile.module.css";
import Image from "next/image";

export default function Tile({ data }) {

  return (
    <div className={styles.tile}>
      <Image src={data.img} layout="fill" alt={data.code} />
    </div>
  );
}
