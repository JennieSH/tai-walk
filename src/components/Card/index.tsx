import { StyledCard } from "./styles";
import type { CardProps } from "./types";
import Icon from "@/components/Icon";
import { formatTitle } from "@/utils/format";

const maxTitleCount = 15;

const Card = ({ card }: CardProps) => {
  return (
    <StyledCard>
      <div className="card-img">
        <img
          src={card.Picture.PictureUrl1}
          alt={card.Picture.PictureDescription1}
          title={card.Picture.PictureDescription1}
        />
      </div>

      <h3 className="card-title">{formatTitle(maxTitleCount, card.Name)}</h3>
      <div className="card-spot">
        <Icon name="spot-line" width="16px" />
        <span>{card.City}</span>
      </div>
    </StyledCard>
  );
};

export default Card;
