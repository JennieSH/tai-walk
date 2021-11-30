import { useContext, useEffect } from "react";
import { LoadingContext } from "@/context/loadingContext";
import { StyledLoading } from "./styles";

const Loading = () => {
  const { loadingState } = useContext(LoadingContext);

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLDivElement;
    if (loadingState) {
      root!.style.height = "100vh";
      root!.style.overflow = "hidden";
    } else {
      root!.style.height = "auto";
      root!.style.overflow = "auto";
    }
  }, [loadingState]);

  return (
    <StyledLoading>
      {loadingState && (
        <div className="loading-container">
          <div className="loading">
            <div className="loading-inner"></div>
          </div>
          <span>Loading...</span>
        </div>
      )}
    </StyledLoading>
  );
};

export default Loading;
