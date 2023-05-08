import React, { useEffect, useRef, useState } from "react";
import {
  GlitchImageStyled,
  DivGlitchSection,
  ImgGlitch,
  ImgGlitchBase,
} from "./GlitchImage.styled";
import { useSplitImage } from "./Split";

type GlitchImageInput = {
  image: string;
  width?: number | string;
  splitSize?: number;
  animationInterval?: number;
  animationDuration?: number;
  variations?: Array<number>;
  inside?: boolean;
  opacity?: number;
  brightness?: number;
  filter?: boolean;
  customFilter?: string;
  activeFxOnInterval?: boolean;
  activeFxOnHover?: boolean;
  useCanvas?: boolean;
  layerColors?: Array<string> | boolean;
  onActiveFx?: (time: number) => void;
};
const GlitchImage = ({
  image,
  width = 20,
  splitSize = 8,
  animationInterval = 4000,
  animationDuration = 500,
  variations = [2, 3],
  inside = false,
  opacity = 0.3,
  brightness = 2,
  filter = true,
  customFilter,
  activeFxOnInterval = true,
  activeFxOnHover = true,
  useCanvas = true,
  layerColors = false,
  onActiveFx,
}: GlitchImageInput) => {
  const prom = 100 / splitSize;
  const ref = useRef<HTMLDivElement>(null);
  const { pieces } = useSplitImage(image, splitSize);

  const getLayerColors = (index: number) => {
    let layers: Array<string> = [];

    if (layerColors === true) {
      layers = ["rgba(255,0,0,0.04)", "rgba(0,0,255, 0.04)"];
    } else if (layerColors === false) {
      layers = ["unset"];
    } else {
      layers = layerColors;
    }
    return layers[index % layers.length];
  };

  const getFilter = () => {
    if (filter && !customFilter)
      return `hue-rotate(${Math.floor(
        Math.random() * 250
      )}deg) brightness(${brightness})`;

    if (customFilter) {
      const regex = /\$([0-9]*)/gm;
      let m;
      const dataToReplace: Record<string, string> = {};
      while ((m = regex.exec(customFilter)) !== null) {
        m.index === regex.lastIndex && regex.lastIndex++;
        dataToReplace[m[0]] = m[1];
      }
      return Object.keys(dataToReplace).reduce((acum, key) => {
        acum = acum.replace(
          key,
          String(Math.floor(Math.random() * Number(dataToReplace[key]) || 100))
        );
        return acum;
      }, customFilter);
    }

    return "";
  };

  const setFiletersInLayers = () => {
    const imgs = ref.current?.querySelectorAll(
      ".GlitchImageFilter canvas, .GlitchImageFilter img"
    );
    imgs?.length &&
      imgs.forEach((x) => ((x as HTMLImageElement).style.filter = getFilter()));
  };

  const activeFx = () => {
    setTimeout(() => {
      ref.current?.classList.remove("GlitchImageActive");
    }, animationDuration);

    setFiletersInLayers();

    onActiveFx && onActiveFx(animationDuration);
    ref.current?.classList.add("GlitchImageActive");
  };

  useEffect(() => {
    var intervalTime: NodeJS.Timeout;

    const resetTimeAndSetFx = () => {
      if (activeFxOnInterval) {
        clearInterval(intervalTime);
        intervalTime = setInterval(activeFx, animationInterval);
      }
    };

    if (activeFxOnHover) {
      const el: HTMLDivElement | null = ref.current;
      if (el) {
        el.onmouseenter = () => {
          clearInterval(intervalTime);
          setFiletersInLayers();
          el.classList.add("GlitchImageActive");
        };
        el.onmouseleave = () => {
          el.classList.remove("GlitchImageActive");
          resetTimeAndSetFx();
        };
      }
    }

    resetTimeAndSetFx();

    return () => clearInterval(intervalTime);
  }, [activeFxOnInterval, activeFxOnHover]);

  useEffect(() => {
    const imgs = ref.current?.querySelectorAll(
      ".GlitchImageFilter canvas, .GlitchImageFilter img"
    );
    imgs?.length &&
      imgs.forEach((x) => ((x as HTMLImageElement).style.filter = getFilter()));
  }, [image, pieces]);

  if (useCanvas)
    return (
      <GlitchImageStyled className="GlitchImage" width={width}>
        <img src={image} loading="lazy" />
        <DivGlitchSection
          ref={ref}
          inside={inside}
          variations={variations}
          activeFxOnHover={activeFxOnHover}
        >
          {pieces && (
            <>
              {pieces.map((canvas, index) => (
                <ImgGlitchBase
                  key={index}
                  prom={prom}
                  index={index}
                  opacity={1}
                >
                  {canvas}
                </ImgGlitchBase>
              ))}
              {pieces.map((canvas, index) => (
                <ImgGlitch
                  key={index}
                  className="GlitchImageFilter"
                  prom={prom}
                  index={index}
                  opacity={opacity}
                >
                  <div style={{ backgroundColor: getLayerColors(index) }} />
                  {canvas}
                </ImgGlitch>
              ))}
            </>
          )}
        </DivGlitchSection>
      </GlitchImageStyled>
    );

  return (
    <GlitchImageStyled className="GlitchImage" width={width}>
      <img src={image} loading="lazy" />
      <DivGlitchSection
        ref={ref}
        inside={inside}
        variations={variations}
        activeFxOnHover={activeFxOnHover}
      >
        {Array(splitSize)
          .fill(0)
          .map((x, index) => (
            <ImgGlitchBase key={index} prom={prom} index={index} opacity={1}>
              <img src={image} loading="lazy" />
            </ImgGlitchBase>
          ))}
        {Array(splitSize)
          .fill(0)
          .map((x, index) => (
            <ImgGlitch
              className="GlitchImageFilter"
              key={index}
              prom={prom}
              index={index}
              opacity={opacity}
            >
              <div style={{ backgroundColor: getLayerColors(index) }} />
              <img src={image} loading="lazy" />
            </ImgGlitch>
          ))}
      </DivGlitchSection>
    </GlitchImageStyled>
  );
};

export { GlitchImage };
