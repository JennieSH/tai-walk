import { StyledCard } from "./styles";
import type { CardProps } from "./types";
import Icon from "@/components/Icon";
import { formatTitle } from "@/utils/format";
import { Link } from "react-router-dom";

const maxTitleCount = 15;

const Card = ({ card, className, category }: CardProps) => {
  return (
    <StyledCard className={className}>
      <Link to={`/${category}/${card.id}`} title={card.name}>
        <div className="card-img">
          <img
            src={card.Picture.PictureUrl1}
            alt={card.Picture.PictureDescription1}
            title={card.Picture.PictureDescription1}
          />
        </div>

        <h3 className="card-title">{formatTitle(maxTitleCount, card.name)}</h3>
        <div className="card-spot">
          <Icon name="spot-line" width="16px" />
          <span>{card.City}</span>
        </div>
      </Link>
    </StyledCard>
  );
};

export default Card;
