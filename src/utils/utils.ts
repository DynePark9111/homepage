type NType = {
  clamp: (min: number, value: number, max: number) => number;
  rand: (min: number, max: number) => number;
};

export const N: NType = {
  clamp: (min: number, value: number, max: number) =>
    Math.min(Math.max(min, value), max),
  rand: (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min),
};

type TType = {
  format: (date: Date) => string;
  formatHours: (hours: number) => string;
  formatSegment: (segment: number) => string;
};

export const T: TType = {
  format: (date: Date): string => {
    const hours: string = T.formatHours(date.getHours()),
      minutes: string = date.getMinutes().toString(),
      seconds: string = date.getSeconds().toString();

    return `${hours}:${T.formatSegment(Number(minutes))}`;
  },
  formatHours: (hours: number): string => {
    return (hours % 12 === 0 ? 12 : hours % 12).toString();
  },
  formatSegment: (segment: number): string => {
    return (segment < 10 ? `0${segment}` : segment).toString();
  },
};
