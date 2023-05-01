import { useState } from 'react';
import TableOfInitaitives from '../../table-of-initiatives/TableOfInitaitives';

import initiatives from '../../../../dummy';
import InitiativeModalDetails from '../../table-of-initiatives/initiative-modal/initiative-modal-details/InitiativeModalDetails';

import styles from './initiative-section.module.scss';
import InitiativeModalForm from '../../table-of-initiatives/initiative-modal/initiative-modal-form/InitiativeModalForm';
import InitiativeModalFormSent from '../../table-of-initiatives/initiative-modal/initiative-modal-form/initiative-modal-form-sent/InitiativeModalFormSent';
import InitiativeModalPropose from '../../table-of-initiatives/initiative-modal/initiative-modal-propose/InitiativeModalPropose';
import InitiativeModalProposeSent from '../../table-of-initiatives/initiative-modal/initiative-modal-propose/initiative-modal-propose-sent/InitiativeModalProposeSent';

export default function InitiativeSection() {
  const [proposePage, setProposePage] = useState(0);

  const handleProposeBack = () => setProposePage(proposePage - 1);
  const handleProposeNext = () => setProposePage(proposePage + 1);

  const handleProposeSelect = () => setProposePage(1);

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
        onPropose={handleProposeSelect}
      />

      {(modalPage !== 0 || proposePage !== 0) && (
        <div className={styles.overlay}></div>
      )}

      {proposePage === 1 && (
        <InitiativeModalPropose
          onCancel={handleProposeBack}
          onSubmit={handleProposeNext}
        />
      )}

      {proposePage === 2 && (
        <InitiativeModalProposeSent onSubmit={() => setProposePage(0)} />
      )}

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
