import React, { useState } from "react";
import s from "./toggel.module.scss";
import { useCustomDispatch } from "../../../redux/customHooks/useCustomDispatch";
import { setChekout } from "../../../redux/slice/chekoutSclice";

type Props = {};

export const Toggel = (props: Props) => {
  const [check, setCheck] = useState(false);
  const dispatch = useCustomDispatch();
  dispatch(setChekout(check));

  return (
    <div className={s.toggle}>
      <input
        onClick={() => setCheck(!check)}
        type="checkbox"
        className={s.check}
      />
      <b className={s.switch} />
      <b className={s.track} />
    </div>
  );
};
