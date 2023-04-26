export const formatDuration = (date: string | null) => {
  if (date === null) return null;
  const check = Date.parse(date);

  if (isNaN(check)) return null;
  
  const previousDate = new Date(date);
  const previousYear = previousDate.getFullYear();
  const previousTime = previousDate.getTime();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentTime = currentDate.getTime();

  const seconds = (currentTime - previousTime) / 1000;

  let result = '';

  const timeCounts = {
    year: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  timeCounts.second = Math.floor(seconds % 60);
  timeCounts.minute = Math.floor((seconds / 60) % 60);
  timeCounts.hour = Math.floor((seconds / 3600) % (24 * 365));
  timeCounts.year = currentYear - previousYear;

  let key: keyof typeof timeCounts;

  for (key in timeCounts) {
    if (timeCounts[key] > 0) {
      result += `${timeCounts[key]} ${timeCounts[key] > 1 ? key + 's' : key}, `;
    }
  }

  result = result.trim().replace(/,$/, '');

  const endComma = result.lastIndexOf(',');
  if (endComma !== -1) {
    result = `${result.substring(0, endComma)} and${result.substring(
      endComma + 1
    )}`;
  }

  return result;
};
