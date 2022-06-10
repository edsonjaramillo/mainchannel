import { AddressType, EventType } from '@/lib/graphcms/types';

interface AddressJSONLD {
  locationName: string;
  address: AddressType;
}

export class AddressManager {
  getEventLocation = ({ isExternal, extLocation, extAddress, store }: EventType): string => {
    if (isExternal) {
      return `${extLocation} - ${extAddress.city}, ${extAddress.state}`;
    }
    return `${store.name} - ${store.address.city}, ${store.address.state}`;
  };

  getEventAddress = ({ isExternal, extAddress, store }: EventType): string => {
    if (isExternal) {
      return `${extAddress.street} ${extAddress.city}, ${extAddress.state} ${extAddress.zipcode}`;
    }
    return `${store.address.street} ${store.address.city}, ${store.address.state} ${store.address.zipcode}`;
  };

  getGoogleMapsURL = ({ isExternal, extAddress, store }: EventType): string => {
    let addressQuery = '';

    if (isExternal) addressQuery = this.querifyAddress(extAddress);
    else addressQuery = this.querifyAddress(store.address);

    return `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;
  };

  getAppleMapsURL = ({ isExternal, extAddress, store }: EventType): string => {
    let addressQuery = '';
    if (isExternal) addressQuery = this.querifyAddress(extAddress);
    else addressQuery = this.querifyAddress(store.address);
    return `https://maps.apple.com/?daddr=${addressQuery}`;
  };

  getLocationJSONLD = (event: EventType): AddressJSONLD => {
    if (event.isExternal) {
      return {
        locationName: event.extLocation,
        address: event.extAddress,
      };
    }

    return {
      locationName: event.store.name,
      address: event.store.address,
    };
  };

  private querifyAddress = ({ street, city, state, zipcode }: AddressType): string => {
    return `${street} ${city} ${state} ${zipcode}`.replaceAll(' ', '+');
  };
}
