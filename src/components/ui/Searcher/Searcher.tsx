import { SvgSelector } from "../../../shared/SvgSelector";
import s from "./searcher.module.scss";
type Props = {};
export const Searcher = (props: Props) => {
  return (
    <div className={s.searcherContainer}>
      <div className={s.searchWrapper}>
        <SvgSelector id={"lighting"} />
        <div className={s.searcherText}>Активные инициативы</div>;
      </div>
      <div className={s.searchEngine}></div>
    </div>
  );
};
