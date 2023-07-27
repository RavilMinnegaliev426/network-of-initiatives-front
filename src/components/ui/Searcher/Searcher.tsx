import { useCustomSelector } from "../../../redux/customHooks/useCustomSelector";
import { SvgSelector } from "../../../shared/SvgSelector";
import { Toggel } from "../toggel/Toggel";
import s from "./searcher.module.scss";
type Props = {};
export const Searcher = (props: Props) => {
  const Check = useCustomSelector((state) => state.chekout);
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
      <div className={s.searchEngine}>
        <div className={s.svgWrapper}>
          <SvgSelector id={"searcher"} />
        </div>
        <input
          className={s.searcher}
          placeholder="НАХОДИТСЯ В РАЗРАБОТКЕ"
        ></input>
      </div>
    </div>
  );
};
