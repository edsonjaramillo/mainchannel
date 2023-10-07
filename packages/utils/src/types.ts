export type Event = {
  id: string;
  store: Store;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  isExternal: boolean;
  extLocation?: string;
  extAddress?: Address;
};

export type Store = {
  id: string;
  name: string;
  description: string;
  slug: string;
  storeImages: StoreImages;
  address: Address;
  phoneNumber: string;
  hours: Hours;
};

export type CMSImage = {
  url: string;
  width: number;
  height: number;
  blurhash?: string;
  alt?: string;
};

export type StoreImages = {
  firstImage: CMSImage;
  secondImage: CMSImage;
  thirdImage: CMSImage;
  fourthImage: CMSImage;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: CMSImage;
  isYearRound: boolean;
  isUpcoming: boolean;
  prices: Price;
  details: Detail;
};

export type Price = {
  singlePrice: number;
  fourPackPrice: number;
  sixPackPrice: number;
  kegPrice: number;
};

export type Detail = {
  abv: number;
  ibu: number;
  flavors: string;
};

export type Employee = {
  id: string;
  name: string;
  position: string;
  image: CMSImage;
  sort: number;
};

export type OurStore = {
  description: string;
};

export type CallToAction = {
  header: string;
  subheader: string;
  image: CMSImage;
};

export type Hours = {
  sundayHours: string;
  mondayHours: string;
  tuesdayHours: string;
  wednesdayHours: string;
  thursdayHours: string;
  fridayHours: string;
  saturdayHours: string;
};
