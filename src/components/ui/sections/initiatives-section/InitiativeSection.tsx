import { useState } from 'react';
import TableOfInitaitives from '../../table-of-initiatives/TableOfInitaitives';

import initiatives from '../../../../dummy';
import InitiativeModalDetails from '../../table-of-initiatives/initiative-modal/initiative-modal-details/InitiativeModalDetails';

import styles from './initiative-section.module.scss';
import InitiativeModalForm from '../../table-of-initiatives/initiative-modal/initiative-modal-form/InitiativeModalForm';
import InitiativeModalFormSent from '../../table-of-initiatives/initiative-modal/initiative-modal-form/initiative-modal-form-sent/InitiativeModalFormSent';

export default function InitiativeSection() {
  const [selectedInitiative, setSelectedInitiative] =
    useState<Initiative | null>(null);
  const [modalPage, setModalPage] = useState(0);

  const handleInitiativeSelect = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
    setModalPage(1);
  };

  const handleModalNext = () => setModalPage(modalPage + 1);
  const handleModalBack = () => setModalPage(modalPage - 1);

  return (
    <>
      <TableOfInitaitives
        initiatives={initiatives}
        onSelect={handleInitiativeSelect}
      />

      {modalPage !== 0 && <div className={styles.overlay}></div>}

      {modalPage === 1 && selectedInitiative !== null && (
        <InitiativeModalDetails
          initiative={selectedInitiative}
          onCancel={handleModalBack}
          onSubmit={handleModalNext}
        />
      )}

      {modalPage === 2 && selectedInitiative !== null && (
        <InitiativeModalForm
          initiative={selectedInitiative}
          onCancel={handleModalBack}
          onSubmit={handleModalNext}
        />
      )}

      {modalPage === 3 && selectedInitiative !== null && (
        <InitiativeModalFormSent onSubmit={() => setModalPage(0)} />
      )}
    </>
  );
}
