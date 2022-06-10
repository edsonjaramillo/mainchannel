import { Formatter } from '@/lib/Formatter';
import { AddressType, StoreType } from '@/lib/graphcms/types';
import { Employee, ImageGrid } from '@/components/index';

const Store = (store: StoreType) => {
  const phoneNumber = new Formatter().formatPhoneNumber(store.phoneNumber);

  return (
    <article className={`store${store.isOdd ? '' : ' store--odd'}`} id={store.slug}>
      <div className='store__grid responsive-width'>
        <div className='store__main'>
          <h2 className='store__name'>{store.name}</h2>
          <p className='store__description'>{store.description}</p>
        </div>
        <div className='store__information'>
          <div>
            <h3 className='store__header'>Address</h3>
            <Address {...store.address} />
          </div>
          <ul className='store__hourslist'>
            <h3 className='store__header'>Hours</h3>
            <Hour day='Monday' hours={store.hours.mondayHours} />
            <Hour day='Tuesday' hours={store.hours.tuesdayHours} />
            <Hour day='Wednesday' hours={store.hours.wednesdayHours} />
            <Hour day='Thursday' hours={store.hours.thursdayHours} />
            <Hour day='Friday' hours={store.hours.fridayHours} />
            <Hour day='Saturday' hours={store.hours.saturdayHours} />
            <Hour day='Sunday' hours={store.hours.sundayHours} />
          </ul>
          <div>
            <h3 className='store__header'>Contact</h3>
            <a href={`tel:${store.phoneNumber}`} className='store__link'>
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>
      <ImageGrid {...store.storeImages} />
      <h3 className='store__header responsive-width'>Meet the Team</h3>
      <div className='employeesgrid responsive-width'>
        {store.employees.map((employee) => (
          <Employee key={employee.id} {...employee} />
        ))}
      </div>
    </article>
  );
};

const Address = ({ street, city, state, zipcode }: AddressType) => (
  <span>{`${street}, ${city}, ${state} ${zipcode}`}</span>
);

interface HourProps {
  day: string;
  hours: string;
}

const Hour = ({ day, hours }: HourProps) => (
  <li className='store__hour'>
    <strong>{`${day}:`}</strong>
    <span>{hours}</span>
  </li>
);

export default Store;
