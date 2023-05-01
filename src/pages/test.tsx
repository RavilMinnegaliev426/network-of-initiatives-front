import Modal from '../components/ui/modal/Modal';
import InitiativeModalForm from '../components/ui/table-of-initiatives/initiative-modal/initiative-modal-form/InitiativeModalForm';

import initiative from '../dummy';

export default function Test() {
  return (
    <>
      <InitiativeModalForm {...initiative} />
    </>
  );
}
