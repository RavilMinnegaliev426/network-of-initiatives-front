import axios, { AxiosResponse } from "axios";
import { useCustomSelector } from "../../../redux/customHooks/useCustomSelector";
import { SvgSelector } from "../../../shared/SvgSelector";
import { Toggel } from "../toggel/Toggel";
import s from "./searcher.module.scss";
import { ChangeEvent, useState } from "react";
type Props = {};
export const Searcher = (props: Props) => {
  const Check = useCustomSelector((state) => state.chekout);
  const [Search1, setSearch1] = useState("");
  const [Search2, setSearch2] = useState("");

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch1(event.target.value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch2(event.target.value);
  };

  const Searcher1 = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        "https://psp.mephi.ru/initiatives/api/search/initiative",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: Search1 }),
        }
      );
      console.log(response.data); // Обработка полученных данных
    } catch (error) {
      console.error(error);
    }
  };
  const Searcher2 = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        "https://psp.mephi.ru/initiatives/api/search/resume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: Search2 }),
        }
      );
      console.log(response.data); // Обработка полученных данных
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={s.searcherContainer}>
      <div className={s.searchWrapper}>
        {!Check.value ? (
          <SvgSelector id={"lighting"} />
        ) : (
          <SvgSelector id={"people"} />
        )}
        <div id={"ActiveInit"} className={s.searcherText}>
          Активные {!Check.value ? "иницитивы" : "содеятели"}
        </div>
        <Toggel />
      </div>
      {!Check.value ? (
        <div className={s.searchEngine}>
          <div className={s.svgWrapper}>
            <SvgSelector id={"searcher"} />
          </div>
          <input
            className={s.searcher}
            placeholder="ПОИСК ИНИЦИАТИВ НАХОДИТСЯ В РАЗРАБОТКЕ"
            onChange={handleChange1}
          ></input>
          <button className={s.button} onClick={Searcher1}>
            Поиск
          </button>
        </div>
      ) : (
        <div className={s.searchEngine}>
          <div className={s.svgWrapper}>
            <SvgSelector id={"searcher"} />
          </div>
          <input
            className={s.searcher}
            placeholder="ПОИСК СОДЕЯТЕЛЕЙ НАХОДИТСЯ В РАЗРАБОТКЕ"
            onChange={handleChange2}
          ></input>
          <button className={s.button} onClick={Searcher2}>
            Поиск
          </button>
        </div>
      )}
    </div>
  );
};
