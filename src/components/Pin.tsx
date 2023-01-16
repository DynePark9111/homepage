import styles from "../styles/Pin.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { UserStatus } from "../utils/types";
import { getStatusStyle, logIn } from "../utils/utils";
import PinNumber from "./PinNumber";

export default function Pin() {
  const { userStatus, setUserStatus } = useContext(UserContext);
  const [pin, setPin] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      userStatus === UserStatus.LoggingIn ||
      userStatus === UserStatus.LogInError
    ) {
      ref.current && ref.current.focus();
    } else {
      setPin("");
    }
  }, [userStatus]);

  useEffect(() => {
    if (pin.length === 4) {
      const verify = async () => {
        try {
          setUserStatus(UserStatus.VerifyingLogIn);
          if (await logIn.verify(pin)) {
            setUserStatus(UserStatus.LoggedIn);
          }
        } catch (err) {
          console.error(err);
          setUserStatus(UserStatus.LogInError);
        }
      };
      verify();
    }
    if (userStatus === UserStatus.LogInError) {
      setUserStatus(UserStatus.LoggingIn);
    }
  }, [pin]);

  const onClick = (): void => {
    ref.current && ref.current.focus();
  };

  const onChange = (e: any): void => {
    if (e.target.value.length <= 4) {
      setPin(e.target.value.toString());
    }
  };

  return (
    <div className={styles.Pin} id={getStatusStyle(userStatus, styles)}>
      <input
        disabled={
          userStatus !== UserStatus.LoggingIn &&
          userStatus !== UserStatus.LogInError
        }
        maxLength={4}
        ref={ref}
        type="number"
        value={pin}
        onChange={onChange}
      />
      <div className={styles.pinNumbers} onClick={onClick}>
        <PinNumber focused={pin.length === 0} value={pin[0]} />
        <PinNumber focused={pin.length === 1} value={pin[1]} />
        <PinNumber focused={pin.length === 2} value={pin[2]} />
        <PinNumber focused={pin.length === 3} value={pin[3]} />
      </div>
      <h3 className={styles.label}>
        Enter password(1234)
        {userStatus === UserStatus.LogInError && <ErrorText />}
        <CancelText />
      </h3>
    </div>
  );
}

function CancelText() {
  const { setUserStatus } = useContext(UserContext);

  return (
    <span
      className={styles.cancel}
      onClick={() => setUserStatus(UserStatus.LoggedOut)}
    >
      Cancel
    </span>
  );
}

function ErrorText() {
  return <span className={styles.error}>Invalid</span>;
}
