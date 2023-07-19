import styles from "./table-of-initiatives.module.scss";

import InitiativeCard from "./initiative-card/InitiativeCard";
import Image from "next/image";
import { useCustomSelector } from "../../../redux/customHooks/useCustomSelector";
import ResumeCard from "./initiative-card/ResumeCard";
import { useEffect, useState } from "react";

interface TableOfInitaitivesProps {
  initiatives: Initiative[];
  onSelect: (initiative: Initiative) => void;
  onPropose: () => void;
  onPageBack: () => void;
  onPageNext: () => void;
  page: number;
  totalPages: number;
}

export default function TableOfInitaitives({
  initiatives,
  onSelect,
  onPageBack,
  onPageNext,
  page,
  totalPages,
  onPropose,
}: TableOfInitaitivesProps) {
  const Check = useCustomSelector((state) => state.chekout);

  return (
    <>
      <section className={styles.table}>
        {initiatives.map((initiative) =>
          !Check.value ? (
            <InitiativeCard
              key={initiative.id}
              initiative={initiative}
              onSelect={() => onSelect({ ...initiative })}
            />
          ) : (
            <ResumeCard
              key={initiative.id}
              initiative={initiative}
              onSelect={() => onSelect({ ...initiative })}
            />
          )
        )}

        <button className={styles.propose} onClick={onPropose}>
          Предложить свою инициативу
        </button>
        <div className={styles.pageControls}>
          <div className={styles.movesWrapper}>
            <div className={styles.moves1}>
              {" "}
              <a href="#ActiveInit">
                <Image
                  src="/initiatives/move-left.svg"
                  alt="Move left svg."
                  width={77}
                  height={77}
                  onClick={onPageBack}
                />
              </a>
            </div>
            <h5
              className={styles.pageCounter}
            >{`${page.toString()} / ${totalPages.toString()}`}</h5>

            <div className={styles.moves2}>
              <a href="#ActiveInit">
                <Image
                  src="/initiatives/move-right.svg"
                  alt="Move right svg."
                  width={77}
                  height={77}
                  onClick={onPageNext}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
