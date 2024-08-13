import { Slide } from "react-slideshow-image";

import slideImages from "../../Data/images";


import '../../styles.css';
import styles from "./Slider.css";

export default function Slider() {
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}