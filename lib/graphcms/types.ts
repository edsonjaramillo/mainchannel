export interface StoreType {
  id: number;
  name: string;
  description: string;
  image: ImageType;
  slug: string;
  storeImages: StoreImagesType;
  address: AddressType;
  hours: HoursType;
  events: EventType[];
  phoneNumber: string;
  employees: EmployeeType[];
  isOdd?: boolean;
}

export interface HoursType {
  mondayHours: string;
  tuesdayHours: string;
  wednesdayHours: string;
  thursdayHours: string;
  fridayHours: string;
  saturdayHours: string;
  sundayHours: string;
}

export interface AddressType {
  id: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface ImageType {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface EventType {
  id: string;
  store: StoreType;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  isExternal: boolean;
  extLocation: string;
  extAddress: AddressType;
}

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: ImageType;
  prices: PriceType;
  details: DetailType;
}

export interface PriceType {
  singlePrice: number;
  sixPackPrice: number;
  kegPrice: number;
}

export interface DetailType {
  abv: number;
  ibu: number;
  flavors: string;
}

export interface EmployeeType {
  id: string;
  name: string;
  position: string;
  image: ImageType;
  sort: number;
}

export interface CommunityType {
  id: string;
  image: ImageType;
  description: string;
}

export interface OurStoryType {
  id: string;
  description: string;
}

export interface CallToActionType {
  header: string;
  subheader: string;
  image: ImageType;
  imageDescription: string;
}

export interface StoreImagesType {
  firstImage: ImageType;
  firstImageDescription: string;
  secondImage: ImageType;
  secondImageDescription: string;
  thirdImage: ImageType;
  thirdImageDescription: string;
  fourthImage: ImageType;
  fourthImageDescription: string;
}
