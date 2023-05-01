import styles from './table-of-initiatives.module.scss';

import initiative from '../../../dummy';
import InitiativeCard from './initiative-card/InitiativeCard';
import { useState } from 'react';
import Image from 'next/image';

export default function TableOfInitaitives() {
  const pages = 10; //REMOVE

  const [page, setPage] = useState(1);

  return (
    <>
      <section className={styles.table}>
        <InitiativeCard initiative={initiative} />
        <InitiativeCard initiative={initiative} />
        <InitiativeCard initiative={initiative} />
        <InitiativeCard initiative={initiative} />

        <button className={styles.propose}>Предложить свою инициативу</button>
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
