import cliProgress from "cli-progress";

export function getProgressBar() {
  // Custom ETA formatter
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    const parts = [];
    if (days) parts.push(`${days} days`);
    if (hours) parts.push(`${hours} hours`);
    if (minutes) parts.push(`${minutes} minutes`);
    if (seconds || parts.length === 0) parts.push(`${seconds}s`);

    return parts.join(" ");
  };

  // Initialize the progress bar with custom formatting
  return new cliProgress.SingleBar(
    {
      format: "{bar} {percentage}% | ETA: {eta_formatted} | {value}/{total}",
      etaBuffer: 100,
      formatTime,
    },
    cliProgress.Presets.shades_grey
  );
}
