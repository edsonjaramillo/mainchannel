import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';

import EmployeeCard from '../../components/locations/EmployeeCard';
import StoreCard from '../../components/locations/StoreCard';

export default async function LocationPage() {
  const client = new CMSClient();
  const stores = await client.getStores();
  const employees = await client.getEmployees();

  return (
    <>
      <Section header="Locations" headerAs="h1">
        <div className="flex flex-col">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </Section>
      <Section header="Employees" headerAs="h2">
        <div className="grid grid-cols-fluid gap-6">
          {employees.map((employees) => (
            <EmployeeCard key={employees.id} employee={employees} />
          ))}
        </div>
      </Section>
    </>
  );
}
