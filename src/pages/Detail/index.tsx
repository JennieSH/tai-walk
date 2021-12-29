import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledDetail } from "./styles";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import Information from "@/components/Information";
import Card from "@/components/Card";
import type { SearchParams, ClassKey } from "./types";
import { RecommendTextMap, RecommendLinkTextMap } from "./types";
import type { CityText } from "@/types/city";
import { CityMap } from "@/types/city";
import type { TourismBaseCard, TourismDetailInfo } from "@/types/tourism";
import { useTourismApi, SearchType } from "@/hooks/useTourismApi";

const tagKeys: ClassKey[] = ["Class", "Class1", "Class2", "Class3"];

const formatSearchData = <T extends TourismBaseCard | TourismDetailInfo>(data: T): T => {
  if ("ScenicSpotID" in data && "ScenicSpotName" in data) {
    return {
      ...data,
      id: data.ScenicSpotID,
      name: data.ScenicSpotName || ""
    };
  } else if ("RestaurantID" in data && "RestaurantName" in data) {
    return {
      ...data,
      id: data.RestaurantID,
      name: data.RestaurantName || ""
    };
  } else if ("ActivityID" in data && "ActivityName" in data) {
    return {
      ...data,
      id: data.ActivityID,
      name: data.ActivityName || ""
    };
  } else {
    return data;
  }
};

const Detail = () => {
  const [detailData, setDetailData] = useState<TourismDetailInfo | null>(null);
  const [recommendData, setRecommendData] = useState<TourismBaseCard[] | null>(null);
  const { fetchTourismData } = useTourismApi();
  const { category, id } = useParams<SearchParams>();

  useEffect(() => {
    const fetchDetailData = async () => {
      const data = await fetchTourismData<TourismDetailInfo>({
        page: SearchType.DETAIL,
        category: category,
        id: id
      });

      setDetailData(formatSearchData(data[0]));
    };
    fetchDetailData();
  }, [id]);

  useEffect(() => {
    const fetchRecommendData = async () => {
      const recommendData = await fetchTourismData<TourismBaseCard>({
        page: SearchType.BASE,
        category: category,
        city: CityMap[detailData?.City as CityText]
      });

      setRecommendData(recommendData.map(item => formatSearchData(item)));
    };

    if (detailData?.City) {
      fetchRecommendData();
    }
  }, [detailData]);

  return (
    <StyledDetail className="container">
      {detailData && (
        <>
          <Breadcrumb
            category={category}
            city={detailData.City as CityText}
            title={detailData.name}
          />
          <div className="img-container">
            <img
              src={detailData.Picture?.PictureUrl1}
              alt={detailData.Picture?.PictureDescription1}
            />
          </div>
          <h1>{detailData.name}</h1>
          <div className="tag-list">
            {tagKeys.map(
              key =>
                detailData[key] && (
                  <div key={`tag-${detailData[key]}`} className="tag">{`# ${detailData[key]}`}</div>
                )
            )}
          </div>
          <article className="description">
            <h2>介紹：</h2>
            <p>{detailData.DescriptionDetail || detailData.Description}</p>
          </article>

          <Information category={category} informationData={detailData} />

          {recommendData && (
            <div className="recommend">
              <div className="recommend-title">
                <h2>{RecommendTextMap[category]}</h2>
                <Link
                  to={`/${category}?city=${CityMap[detailData?.City as CityText]}`}
                  className="recommend-link"
                >
                  <span>
                    查看更多{detailData.City}
                    {RecommendLinkTextMap[category]}
                  </span>
                  <Icon name="arrow-right-r" width="16px" />
                </Link>
              </div>
              <div className="recommend-list">
                {recommendData.map(recommend => (
                  <Card key={`recommed-${recommend.id}`} card={recommend} category={category} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </StyledDetail>
  );
};

export default Detail;
