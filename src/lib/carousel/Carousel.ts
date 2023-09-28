export const canChangeSlide = ({
  lastSlideChange,
  slideDuration,
  slideDurationRatio = 1
}: {
  lastSlideChange: Date;
  slideDuration: number;
  slideDurationRatio?: number; // Allows for starting a new transition before the previous completes
}) => {
  if (lastSlideChange && new Date().getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }

  return true;
};
