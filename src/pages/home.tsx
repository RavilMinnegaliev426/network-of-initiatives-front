import InitiativeCard from '../components/ui/table-of-initiatives/initiative-card/InitiativeCard';
import InitiativeModal from '../components/ui/table-of-initiatives/initiative-modal/InitiativeModalDetails';

import initiative from '../dummy';

export default function Home() {
  return (
    <>
      <InitiativeCard {...initiative} />
    </>
  );
}
