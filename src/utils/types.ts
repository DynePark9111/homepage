import { ReactNode } from "react";

export enum UserStatus {
  LoggedIn = "Logged In",
  LoggingIn = "Logging In",
  LoggedOut = "Logged Out",
  LogInError = "Log In Error",
  VerifyingLogIn = "Verifying Log In",
}

export type childrenProps = {
  children: ReactNode;
};

export enum WeatherType {
  Cloudy = "Cloudy",
  Rainy = "Rainy",
  Stormy = "Stormy",
  Sunny = "Sunny",
}
