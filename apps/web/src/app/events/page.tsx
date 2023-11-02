import Events from '../../components/events/Events';
import PageHeader from '../../components/shared/PageHeader';

export default async function EventsPage() {
  return (
    <>
      <PageHeader text="Events" />
      <Events />
    </>
  );
}
