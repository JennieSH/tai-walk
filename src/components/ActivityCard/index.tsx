import { Link } from "react-router-dom";
import { StyledActivityCard } from "./styles";
import type { ActivityCardProps } from "./types";
import Icon from "@/components/Icon";
import { formatTime, formatTitle } from "@/utils/format";

const maxTitleCount = 28;

const ActivityCard = ({ category, activityCard }: ActivityCardProps) => {
  return (
    <StyledActivityCard>
      <Link to={`/${category}/${activityCard.ID}`} title={activityCard.Name}>
        <div className="card-img">
          <img
            src={activityCard.Picture.PictureUrl1}
            alt={activityCard.Picture.PictureDescription1}
            title={activityCard.Picture.PictureDescription1}
          />
        </div>
        <div className="card-content">
          <span>{`${formatTime(activityCard.StartTime)} - ${formatTime(
            activityCard.EndTime
          )}`}</span>

          <h3 className="card-title">{formatTitle(maxTitleCount, activityCard.Name)}</h3>
          <div className="card-info">
            <div>
              <Icon name="spot-line" width="16px" />
              <span>{activityCard.City}</span>
            </div>
            <div className="card-more">
              <span>詳細介紹</span>
              <Icon name="arrow-right" width="16px" />
            </div>
          </div>
        </div>
      </Link>
    </StyledActivityCard>
  );
};

export default ActivityCard;
