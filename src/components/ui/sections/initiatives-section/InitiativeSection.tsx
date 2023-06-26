import { useState } from "react";
import TableOfInitaitives from "../../table-of-initiatives/TableOfInitaitives";

import InitiativeModalDetails from "../../table-of-initiatives/initiative-modal/initiative-modal-details/InitiativeModalDetails";

import styles from "./initiative-section.module.scss";
import InitiativeModalForm from "../../table-of-initiatives/initiative-modal/initiative-modal-form/InitiativeModalForm";
import InitiativeModalFormSent from "../../table-of-initiatives/initiative-modal/initiative-modal-form/initiative-modal-form-sent/InitiativeModalFormSent";
import InitiativeModalPropose from "../../table-of-initiatives/initiative-modal/initiative-modal-propose/InitiativeModalPropose";
import InitiativeModalProposeSent from "../../table-of-initiatives/initiative-modal/initiative-modal-propose/initiative-modal-propose-sent/InitiativeModalProposeSent";

import useSWR from "swr";
import dataFetcher from "../../../../lib/dataFetcher";

import config from "../../../../config";
import Loading from "../../Loading/Loading";

export default function InitiativeSection() {
  const {
    data: allInitaitives,
    error,
    isLoading,
  } = useSWR(config.GET_INITATIVES_ROUTE, dataFetcher);

  const [initiativePage, setInitiativePage] = useState(1);

  const [proposePage, setProposePage] = useState(0);

  const [selectedInitiative, setSelectedInitiative] =
    useState<Initiative | null>(null);
  const [modalPage, setModalPage] = useState(0);

  if (error || isLoading) return <Loading />;

  const handleProposeBack = () => setProposePage(proposePage - 1);
  const handleProposeNext = () => setProposePage(proposePage + 1);

  const handleProposeSelect = () => setProposePage(1);

  const handleInitiativeSelect = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
    setModalPage(1);
  };

  const handleModalNext = () => setModalPage(modalPage + 1);
  const handleModalBack = () => setModalPage(modalPage - 1);

  const handlePageNext = () => {
    if (allInitaitives.length - 4 * initiativePage > 0)
      setInitiativePage(initiativePage + 1);
  };

  const handlePageBack = () => {
    if (initiativePage - 1 > 0) setInitiativePage(initiativePage - 1);
  };

  let initiatives = allInitaitives;
  let totalPages = 0;

  if (initiatives && initiatives.length !== 0) {
    initiatives = allInitaitives.slice(
      initiativePage * 4 - 4,
      initiativePage * 4
    );
    totalPages = Math.ceil(allInitaitives.length / 4);
  }

  return (
    <div className={styles.container}>
      {initiatives && (
        <TableOfInitaitives
          initiatives={initiatives}
          onSelect={handleInitiativeSelect}
          onPropose={handleProposeSelect}
          onPageBack={handlePageBack}
          onPageNext={handlePageNext}
          page={initiativePage}
          totalPages={totalPages}
        />
      )}
      {/* //{" "} */}
      {(modalPage !== 0 || proposePage !== 0) && (
        <div className={styles.overlay}></div>
      )}
      {/* //{" "} */}
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
    </div>
  );
}
