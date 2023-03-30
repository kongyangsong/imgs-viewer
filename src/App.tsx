import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
// import styles from "./App.module.scss";

interface IProps {
  imgs: Image[];
}

interface Image {
  src: string;
}

export default (props: IProps) => {
  const { imgs } = props || {};
  const [visieble, setVisieble] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<number>(0);

  function visibleToggle() {
    setVisieble(!visieble);
  }

  function gotoPrevious() {
    setCurrImg(currImg - 1);
  }

  function gotoNext() {
    setCurrImg(currImg + 1);
  }

  function imgClick(index: number) {
    setCurrImg(index);
    visibleToggle();
  }

  return (
    <div className={"img_wrap"} style={{ display: "flex" }}>
      {Array.isArray(imgs) && (
        <>
          {imgs.map((item, index) => {
            return (
              <img
                className={"img_wrap_item"}
                style={{ width: 40, height: 40, marginRight: 20 }}
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
