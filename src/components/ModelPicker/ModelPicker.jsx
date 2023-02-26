import styles from "./ModelPicker.module.css";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import Pickable from "../Pickable";

export default function ModelPicker({ title, options }) {
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
            .map((option, idx) => (
                <Pickable key={idx} data={option} />
            ))}
        </div>
      </Collapse>
    </div>
  );
}
