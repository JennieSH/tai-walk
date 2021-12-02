import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledHome, StyledActivityCardList, StyledCardList } from "./styles";
import Banner from "@/components/Banner";
import Icon from "@/components/Icon";
import Carousel from "@/components/Carousel";
import ActivityCard from "@/components/ActivityCard";
import Card from "@/components/Card";
import { useTourismApi, SearchType } from "@/hooks/useTourismApi";
import { Category } from "@/types/category";
import type {
  ActivityCard as ActivityCardType,
  ScenicSpotCard as ScenicSpotCardType,
  RestaurantCard as RestaurantCardType
} from "@/types/tourism";

const Home = () => {
  const [activityData, setActivityData] = useState<ActivityCardType[]>([]);
  const [scenicSpotData, setScenicSpotData] = useState<ScenicSpotCardType[]>([]);
  const [restaurantData, setRestaurantData] = useState<RestaurantCardType[]>([]);
  const { fetchTourismData } = useTourismApi();

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await fetchTourismData<ActivityCardType>({
        page: SearchType.BASE,
        category: Category.ACTIVITY
      });
      setActivityData(data);
    };

    const fetchScenicSpot = async () => {
      const data = await fetchTourismData<ScenicSpotCardType>({
        page: SearchType.BASE,
        category: Category.SCENIC_SPOT
      });
      setScenicSpotData(data);
    };

    const fetchRestaurant = async () => {
      const data = await fetchTourismData<RestaurantCardType>({
        page: SearchType.BASE,
        category: Category.RESTAURANT
      });
      setRestaurantData(data);
    };

    fetchActivity();
    fetchScenicSpot();
    fetchRestaurant();
  }, []);

  return (
    <StyledHome className="container">
      <Banner />

      <Carousel />

      <StyledActivityCardList>
        <div className="sub-title">
          <h2>近期活動</h2>
          <Link to="/activity" className="checkout">
            <span>查看更多活動</span>
            <Icon name="arrow-right-r" width="16px" />
          </Link>
        </div>

        <div className="card-list">
          {activityData.length &&
            activityData.map(activity => (
              <ActivityCard
                key={`ac-${activity.ID}`}
                activityCard={activity}
                category={Category.ACTIVITY}
              />
            ))}
        </div>
      </StyledActivityCardList>

      <StyledCardList>
        <div className="sub-title">
          <h2>熱門打卡景點</h2>
          <Link to="/scenic-spot" className="checkout">
            <span>查看更多景點</span>
            <Icon name="arrow-right-r" width="16px" />
          </Link>
        </div>

        <div className="spot-list">
          {scenicSpotData.length &&
            scenicSpotData.map(spot => (
              <Card key={`spot-${spot.ID}`} card={spot} category={Category.SCENIC_SPOT} />
            ))}
        </div>
      </StyledCardList>

      <StyledCardList>
        <div className="sub-title">
          <h2>一再回訪美食</h2>
          <Link to="/restaurant" className="checkout">
            <span>查看更多美食</span>
            <Icon name="arrow-right-r" width="16px" />
          </Link>
        </div>

        <div className="spot-list">
          {restaurantData.length &&
            restaurantData.map(restaurant => (
              <Card
                key={`restaurant-${restaurant.ID}`}
                card={restaurant}
                category={Category.RESTAURANT}
              />
            ))}
        </div>
      </StyledCardList>
    </StyledHome>
  );
};

export default Home;
