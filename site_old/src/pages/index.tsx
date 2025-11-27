import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Footer from "@theme/Footer";

//
// types
//

type CarouselModel = {
  cards: CardModel[];
  options?: EmblaOptionsType;
};

type CardModel = {
  image: string;
  title: string;
};

//
// Card
//

const cardPageStyle = {
  overflow: "visible",
  width: "140px",
  height: "160px",
  // backgroundColor: "orange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  overflow: "visible",
  width: "120px",
  height: "120px",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  margin: "0px 10px",
  boxShadow: "10px 10px 10px -5px rgba(0, 0, 0, 0.2)",
  zIndex: 2,
};

const cardImageStyle = {
  width: "90px",
  height: "60px",
  marginBottom: "10px",
  objectFit: "contain" as const,
};

const cardTextStyle = { color: "#777", fontSize: "20px", margin: "0" };

const Card = (model: CardModel) => {
  return (
    <div style={cardStyle}>
      <img src={model.image} style={cardImageStyle} />
      <p style={cardTextStyle}>{model.title}</p>
    </div>
  );
};

//
// Carousel
//

const carouselStyle = {
  overflow: "hidden",
  padding: "0px",
  width: "100%",
  // backgroundColor: "blue", // DEBUG
  height: "160px",
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowX: "auto" as const,
};

const Carousel = (model: CarouselModel) => {
  const [emblaRef] = useEmblaCarousel(model.options, [WheelGesturesPlugin()]);

  return (
    // カルーセルに ref が必須なので div でラップ
    <div ref={emblaRef}>
      <div style={carouselStyle}>
        {model.cards.map((card, index) => (
          // カルーセルアイテムに key が必須 なので div でラップ
          <div key={index}>
            <div style={cardPageStyle}>
              <Card {...card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//
// Home
//

const rubydogHomeStyle = {
  display: "flex",
  alignItems: "flex-end",
  // backgroundColor: "yellow",
};

const rubydogHomeTextStyle = {
  color: "white",
  fontSize: "28px",
  margin: "0",
  lineHeight: "1",
};

const rubydogHomeImageStyle = {
  width: "40px",
  height: "auto",
  margin: "0 10px",
  filter: "brightness(0) invert(1)",
};

function RubydogHome() {
  return (
    <div style={rubydogHomeStyle}>
      <p style={rubydogHomeTextStyle}>Rubydog</p>
      <img src="img/house.png" style={rubydogHomeImageStyle} />
      <p style={rubydogHomeTextStyle}>Home</p>
    </div>
  );
}

function Gap(props: { height: string }) {
  return <div style={{ height: props.height }}></div>;
}

const emblaOptions: EmblaOptionsType = {
  align: "center",
  containScroll: false,
  startIndex: 1,
};

const cardModels: CardModel[] = [
  {
    image: "img/youtube.png",
    title: "動画",
  },
  {
    image: "img/flutter-note.png",
    title: "Flutter",
  },
  {
    image: "img/hunny-cell.png",
    title: "共同開発",
  },
];

const carouselModel: CarouselModel = {
  options: emblaOptions,
  cards: cardModels,
};

const buttonStyle = {
  backgroundColor: "#2196f3",
  borderRadius: "100px",
  color: "white",
  fontSize: "1.5rem",
  padding: "8px 40px",
  textTransform: "none" as const,
  textDecoration: "none" as const,
};

const backgroundStyle = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "0px",
  backgroundColor: "#e32d39",
};

const bodyStyle = {
  maxWidth: "1000px",
  width: "100%",
  backgroundColor: "#e4000f",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default function Home() {
  return (
    <>
      {/* CSSをリセット */}
      <CssBaseline />
      <div style={backgroundStyle}>
        <div style={bodyStyle}>
          <RubydogHome />
          <Gap height={"30px"} />
          <Button variant="contained" style={buttonStyle} href="/works">
            Enter
          </Button>
          <Carousel {...carouselModel} />
        </div>
      </div>
      <Footer />
    </>
  );
}
