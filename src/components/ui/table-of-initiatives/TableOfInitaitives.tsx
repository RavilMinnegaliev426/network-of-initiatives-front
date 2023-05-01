import styles from './table-of-initiatives.module.scss';

import InitiativeCard from './initiative-card/InitiativeCard';
import { useState } from 'react';
import Image from 'next/image';

interface TableOfInitaitivesProps {
  initiatives: Initiative[];
  onSelect: (initiative: Initiative) => void;
  onPropose: () => void;
}

export default function TableOfInitaitives({
  initiatives,
  onSelect,
  onPropose,
}: TableOfInitaitivesProps) {
  const pages = 10; //REMOVE

  const [page, setPage] = useState(1);

  return (
    <>
      <section className={styles.table}>
        {initiatives.map((initiative) => (
          <InitiativeCard
            key={initiative.id}
            initiative={initiative}
            onSelect={() => onSelect({ ...initiative })}
          />
        ))}

        <button
          className={styles.propose}
          onClick={onPropose}>
          Предложить свою инициативу
        </button>
        <div className={styles.pageControls}>
          <h5>{`${page.toString()} / ${pages.toString()}`}</h5>

          <div className={styles.moves}>
            <Image
              src='/move-left.svg'
              alt='Move left svg.'
              width={77}
              height={77}
            />
            <Image
              src='/move-right.svg'
              alt='Move right svg.'
              width={77}
              height={77}
            />
          </div>
        </div>
      </section>
    </>
  );
}
