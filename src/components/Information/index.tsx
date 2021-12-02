import { Link } from "react-router-dom";
import { StyledInformation } from "./styles";
import type {
  InformationProps,
  ScenicSpotKey,
  ActivityKey,
  RestaurantKey,
  InfoData
} from "./types";
import { ScenicSpotTextMap, ActivityTextMap, RestaurantTextMap } from "./types";
import Routes from "@/types/routes";
import { Category } from "@/types/category";
import type { CategoryType } from "@/types/category";
import type { TourismDetailInfo } from "@/types/tourism";
import { formatTime } from "@/utils/format";
import Map from "@/components/Map";
import Icon from "@/components/Icon";

const restaurantKeys: RestaurantKey[] = ["OpenTime", "Phone", "Address", "WebsiteUrl"];
const activityKeys: ActivityKey[] = [
  "StartTime",
  "EndTime",
  "Phone",
  "Organizer",
  "Address",
  "WebsiteUrl",
  "Charge",
  "Remarks"
];
const scenicSpotKeys: ScenicSpotKey[] = [
  "OpenTime",
  "Phone",
  "Address",
  "WebsiteUrl",
  "TicketInfo",
  "Remarks"
];

const mapInfoData = (category: CategoryType, informationData: TourismDetailInfo): InfoData[] => {
  let data: InfoData[] = [];

  switch (category) {
    case Category.SCENIC_SPOT:
      data = scenicSpotKeys.map(key => {
        return {
          key: key,
          text: ScenicSpotTextMap[key],
          value: informationData[key]
        };
      });
      break;
    case Category.ACTIVITY:
      data = activityKeys.map(key => {
        return {
          key: key,
          text: ActivityTextMap[key],
          value: informationData[key]
        };
      });
      break;
    case Category.RESTAURANT:
      data = restaurantKeys.map(key => {
        return {
          key: key,

          text: RestaurantTextMap[key],
          value: informationData[key]
        };
      });
      break;
    default:
      break;
  }
  return data;
};

// NEED to refactor !
const formatInfoText = (category: CategoryType, informationData: TourismDetailInfo): InfoData[] => {
  const rawList = mapInfoData(category, informationData);
  const time: (undefined | string)[] = [undefined, undefined];
  let validList: InfoData[] = [];
  let formattedList: InfoData[] = [];

  // reset Remark value when the value is undefined
  rawList.forEach(item => {
    if (item.key === "Remarks" && !item.value) item.value = "無";
  });

  // filter undefined value
  validList = rawList.filter(item => item.value);

  // format <a/>
  validList.forEach(item => {
    if (item.key === "Phone") {
      item.href = `tel:${item.value}`;
    }

    if (item.key === "WebsiteUrl") {
      item.href = informationData.WebsiteUrl;
    }
  });

  // format time
  validList.forEach(item => {
    if (item.key === "StartTime") {
      time[0] = formatTime(item.value);
    }
    if (item.key === "EndTime") {
      time[1] = formatTime(item.value);
    }
  });

  formattedList = validList
    .map(item => {
      if (item.key === "StartTime") return { ...item, value: time.join(" - ") };
      return item;
    })
    .filter(item => item.key !== "EndTime");

  return formattedList;
};

const Information = ({ category, informationData }: InformationProps) => {
  const infoList = formatInfoText(category, informationData);
  const position = informationData.Position;

  return (
    <StyledInformation>
      <div className="block">
        {infoList.map(info => {
          return info.href ? (
            <div key={`info-${info.key}`}>
              <span className="title">{info.text}：</span>
              <a href={info.href} target="_blank" rel="noreferrer noopener">
                {info.value}
              </a>
            </div>
          ) : (
            <div key={`info-${info.key}`}>
              <span className="title">{info.text}：</span>
              <span>{info.value}</span>
            </div>
          );
        })}
      </div>

      {informationData.Position && (
        <div className="position">
          <Map position={informationData.Position} />
          <div>
            <h2>周邊資訊：</h2>
            <div className="position-info">
              <Link
                to={`${Routes.SCENIC_SPOT}?position=${position?.PositionLat},${position?.PositionLon},5000`}
                title="附近景點"
              >
                <Icon name="scenic" />
                <span>附近景點</span>
              </Link>
              <Link
                to={`${Routes.ACTIVITY}?position=${position?.PositionLat},${position?.PositionLon},5000`}
                title="附近活動"
              >
                <Icon name="activity" />
                <span>附近活動</span>
              </Link>
              <Link
                to={`${Routes.RESTAURANT}?position=${position?.PositionLat},${position?.PositionLon},5000`}
                title="附近美食"
              >
                <Icon name="restaurant" />
                <span>附近美食</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </StyledInformation>
  );
};

export default Information;
