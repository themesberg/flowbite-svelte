export const canChangeSlide = ({
  lastSlideChange,
  slideDuration,
  slideDurationRatio = 1
}: {
  lastSlideChange: number;
  slideDuration: number;
  slideDurationRatio?: number; // Allows for starting a new transition before the previous completes
}) => {
  if (lastSlideChange && Date.now() - lastSlideChange < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }

  return true;
};
