import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StyledHome, StyledActivityCardList, StyledCardList } from "./styles";
import Banner from "@/components/Banner";
import Icon from "@/components/Icon";
import Carousel from "@/components/Carousel";
import ActivityCard from "@/components/ActivityCard";
import Card from "@/components/Card";
import tourismApi from "@/api/tourism";
import { Category } from "@/types/category";
import type { ActivityCard as ActivityCardType } from "@/types/activity";
import type { ScenicSpotCard as ScenicSpotCardType } from "@/types/scenic-spot";
import type { RestaurantCard as RestaurantCardType } from "@/types/restaurant";
import { LoadingContext, Loading_Action_Type } from "@/context/loadingContext";

const homeSearchCount = 4;

const Home = () => {
  const [activityData, setActivityData] = useState<ActivityCardType[]>([]);
  const [scenicSpotData, setScenicSpotData] = useState<ScenicSpotCardType[]>([]);
  const [restaurantData, setRestaurantData] = useState<RestaurantCardType[]>([]);
  const { loadingDispatch } = useContext(LoadingContext);

  useEffect(() => {
    const fetchActivity = async () => {
      loadingDispatch({ type: Loading_Action_Type.ON });
      const data = await tourismApi.getActivity<ActivityCardType[]>({
        $top: (4).toString(),
        $select: "ID,Name,City,Picture",
        $filter: "Picture/PictureUrl1 ne null",
        $orderBy: "StartTime desc"
      });
      setActivityData(data);
      loadingDispatch({ type: Loading_Action_Type.OFF });
    };

    const fetchScenicSpot = async () => {
      loadingDispatch({ type: Loading_Action_Type.ON });
      const data = await tourismApi.getScenicSpot<ScenicSpotCardType[]>({
        $top: homeSearchCount.toString(),
        $select: "ID,Name,Address,Picture,City",
        $filter: "Picture/PictureUrl1 ne null and City ne null",
        $orderBy: "UpdateTime desc,OpenTime asc"
      });
      loadingDispatch({ type: Loading_Action_Type.OFF });
      setScenicSpotData(data);
    };

    const fetchRestaurantData = async () => {
      loadingDispatch({ type: Loading_Action_Type.ON });
      const data = await tourismApi.getRestaurant<RestaurantCardType[]>({
        $top: homeSearchCount.toString(),
        $select: "ID,Name,Address,Picture,City",
        $filter: "Picture/PictureUrl1 ne null and City ne null",
        $orderBy: "UpdateTime desc,OpenTime desc"
      });
      loadingDispatch({ type: Loading_Action_Type.OFF });
      setRestaurantData(data);
    };

    fetchActivity();
    fetchScenicSpot();
    fetchRestaurantData();
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
                key={activity.ID}
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
              <Card key={spot.ID} card={spot} category={Category.SCENIC_SPOT} />
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
              <Card key={restaurant.ID} card={restaurant} category={Category.RESTAURANT} />
            ))}
        </div>
      </StyledCardList>
    </StyledHome>
  );
};

export default Home;
