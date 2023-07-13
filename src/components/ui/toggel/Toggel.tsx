import React from "react";
import s from "./toggel.module.scss";

type Props = {};

export const Toggel = (props: Props) => {
  return (
    <div className={s.toggle}>
      <input type="checkbox" className={s.check} />
      <b className={s.switch} />
      <b className={s.track} />
    </div>
  );
};
