import { UserStatus } from "./types";

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

export function getStatusStyle(status: UserStatus, styles: CSSModuleClasses) {
  if (status === UserStatus.LoggedIn) return styles.LoggedIn;
  if (status === UserStatus.LoggingIn) return styles.LoggingIn;
  if (status === UserStatus.LoggedOut) return styles.LoggedOut;
  if (status === UserStatus.LogInError) return styles.LogInError;
  if (status === UserStatus.VerifyingLogIn) return styles.VerifyingLogIn;
}

type logIn = {
  verify: (pin: string) => Promise<boolean>;
};

const PIN_NUBMER = "9111";
export const logIn: logIn = {
  verify: async (pin) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (pin === PIN_NUBMER) {
          res(true);
        } else {
          rej(`Invalid pin: ${pin}`);
        }
      }, N.rand(300, 700));
    });
  },
};

export function openGithub(link: string) {
  window.open(`https://github.com/DynePark9111/${link}`, "_blank");
}
