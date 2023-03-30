import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import styles from "./App.module.scss";

export default ({ imgs }) => {
  const [visieble, setVisieble] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  function visibleToggle() {
    setVisieble(!visieble);
  }

  function gotoPrevious() {
    setCurrImg(currImg - 1);
  }

  function gotoNext() {
    setCurrImg(currImg + 1);
  }

  function imgClick(index) {
    setCurrImg(index);
    visibleToggle();
  }

  return (
    <div className={styles["img_wrap"]}>
      {Array.isArray(imgs) && (
        <>
          {imgs.map((item, index) => {
            return (
              <img
                className={styles["img_wrap_item"]}
                src={item?.src}
                key={item?.src}
                onClick={imgClick.bind(null, index)}
              />
            );
          })}
          <ImgsViewer
            imgs={imgs}
            currImg={currImg}
            isOpen={visieble}
            onClickPrev={gotoPrevious}
            onClickNext={gotoNext}
            onClose={visibleToggle}
          />
        </>
      )}
    </div>
  );
};
