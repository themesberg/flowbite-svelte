export function createCountdown(initialSeconds = 60) {
  let timeLeft = $state(initialSeconds);
  let isRunning = $state(false);
  let animationId: number | null = null;
  let lastTimestamp: DOMHighResTimeStamp | null = null;

  function tick(timestamp: DOMHighResTimeStamp) {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const elapsed = timestamp - lastTimestamp;

    if (elapsed >= 1000) {
      timeLeft--;
      lastTimestamp = timestamp;

      if (timeLeft <= 0) {
        stop();
        timeLeft = 0;
        return;
      }
    }

    if (isRunning) {
      animationId = requestAnimationFrame(tick);
    }
  }

  function start() {
    if (timeLeft > 0 && !isRunning) {
      isRunning = true;
      lastTimestamp = null;
      animationId = requestAnimationFrame(tick);
    }
  }

  function stop() {
    isRunning = false;
    lastTimestamp = null;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function reset(seconds: number) {
    stop();
    timeLeft = seconds;
  }

  function destroy() {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  }

  // ensures cleanup happens automatically when the component using createCountdown unmounts
  $effect(() => {
    return () => destroy();
  });

  return {
    get timeLeft() {
      return timeLeft;
    },
    get isRunning() {
      return isRunning;
    },
    start,
    stop,
    reset,
    destroy
  };
}
