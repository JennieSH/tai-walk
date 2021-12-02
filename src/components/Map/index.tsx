import { StyledMap } from "./styles";
import { MapProps } from "./types";
import Links from "@/types/links";

const Map = ({ position }: MapProps) => {
  const googleMapUrl = Links.GOOGLE_MAP_URL;
  const googleMapKey = import.meta.env.VITE_APP_GOOGLE_MAP_KEY;
  const { PositionLat, PositionLon } = position;

  return (
    <StyledMap>
      <iframe
        title="Google Map"
        loading="lazy"
        allowFullScreen
        src={`${googleMapUrl}?key=${googleMapKey}&q=${PositionLat} ,${PositionLon}`}
      />
    </StyledMap>
  );
};

export default Map;
