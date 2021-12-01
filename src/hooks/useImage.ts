const useImage = (): Record<
  string,
  {
    [key: string]: any;
  }
> => {
  const activityImages = import.meta.globEager("/src/assets/imgs/activity/*.jpg");
  const restaurantImages = import.meta.globEager("/src/assets/imgs/restaurant/*.jpg");
  const scenicSpotImages = import.meta.globEager("/src/assets/imgs/scenic-spot/*.jpg");

  return {
    activity: activityImages,
    restaurant: restaurantImages,
    "scenic-spot": scenicSpotImages
  };
};

export default useImage;
