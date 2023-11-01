import { Responsive } from 'ui/src/Responsive';
import { CMSClient } from 'utils/src/cms/CMSClient';

import BulkEventsForm from '../components/forms/BulkEventsForm';

export default async function HomePage() {
  const stores = await new CMSClient().getStores();

  return (
    <>
      <Responsive className="my-16">
        <BulkEventsForm stores={stores} />
      </Responsive>
    </>
  );
}
