import type { Metadata } from 'next';

import { Responsive } from 'ui/src/Responsive';
import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { SEO } from 'utils/src/metadata/SEO';

import EmployeeCard from '../../components/locations/EmployeeCard';
import StoreCard from '../../components/locations/StoreCard';
import PageHeader from '../../components/shared/PageHeader';

export async function generateMetadata(): Promise<Metadata> {
  const stores = await new CMSClient().getStores();
  const namesOfStores = stores.map((store) => store.address.city);
  const storesByCommonName = namesOfStores.join(', ');

  return SEO.metadata({
    title: 'Locations',
    description: `Main Channel Brewing Company has locations in ${storesByCommonName}. Come visit us and enjoy a beer!`,
    robots: 'index, follow',
    canonical: '/locations',
  });
}

export default async function LocationPage() {
  const client = new CMSClient();
  const stores = await client.getStores();
  const employees = await client.getEmployees();

  return (
    <>
      <PageHeader text="Locations" />
      <Responsive>
        <div className="flex flex-col">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </Responsive>
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
