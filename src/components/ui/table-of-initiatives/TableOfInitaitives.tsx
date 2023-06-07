import styles from './table-of-initiatives.module.scss';

import InitiativeCard from './initiative-card/InitiativeCard';
import Image from 'next/image';

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
          <h5>{`${page.toString()} / ${totalPages.toString()}`}</h5>

          <div className={styles.moves}>
            <Image
              src='/initiatives/move-left.svg'
              alt='Move left svg.'
              width={77}
              height={77}
              onClick={onPageBack}
            />
            <Image
              src='/initiatives/move-right.svg'
              alt='Move right svg.'
              width={77}
              height={77}
              onClick={onPageNext}
            />
          </div>
        </div>
      </section>
    </>
  );
}
