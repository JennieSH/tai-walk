import { useEffect, useState } from "react";
import { StyledCarousel } from "./styles";
import Icon from "@/components/Icon";
import carouselList from "@/constants/carouselList";

type actionType = "next" | "prev";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexHandler = (action: actionType) => {
    let index = Math.abs(currentIndex);
    const divisor = carouselList.length;

    if (action === "next") {
      index += 1;
    } else {
      index -= 1;
    }
    setCurrentIndex(index % divisor);
  };

  useEffect(() => {
    const timer = setInterval(() => indexHandler("next"), 4000);

    return () => clearInterval(timer);
  });

  return (
    <StyledCarousel>
      {carouselList.map((item, index) => (
        <div
          key={item.title}
          className={index === currentIndex ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${item.url})` }}
        >
          <h2 className="slide-title">{item.title}</h2>
        </div>
      ))}

      {currentIndex > 0 && (
        <Icon
          className="controller controller-left"
          name="circle-left"
          clickHandler={() => indexHandler("prev")}
        />
      )}

      {currentIndex < carouselList.length - 1 && (
        <Icon
          className="controller controller-right"
          name="circle-right"
          clickHandler={() => indexHandler("next")}
        />
      )}

      <ul className="dot-list">
        {carouselList.map((item, index) => (
          <li
            className={currentIndex === index ? "active" : ""}
            key={`dot-${item.title}`}
            onClick={() => setCurrentIndex(index)}
            aria-hidden="true"
          />
        ))}
      </ul>
    </StyledCarousel>
  );
};

export default Carousel;
