import styles from "./ModelPicker.module.css";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function ModelPicker({ title, picked, updateOperation, options }) {
  const [openPicker, setOpenPicker] = useState(false);
  
  return (
    <div className={styles.picker}>
      <div
        className={styles.picker__title}
        onClick={() => setOpenPicker((isOpen) => !isOpen)}
        >
        <h2>{title}</h2>
        {openPicker ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      <Collapse in={openPicker}>
        <div className={styles.picker__content}>
          {options
            .map((option, idx) => {
              const TileImg = option.img;
              return (
                <div key={idx} className={`${styles.picker__item} ${picked?.code == option.code && styles.picker__item__selected}`} onClick={_=>updateOperation(option)}>
                  <div className={styles.picker__item__image}>
                    <TileImg alt={`Ladrilho ${option.code}`} width="10rem" height="10rem" />
                  </div>
                  <span>{`${option.code} (${option.size} X ${option.size} CM)`}</span>
                </div>
              );
            })
          }
        </div>
      </Collapse>
    </div>
  );
}
