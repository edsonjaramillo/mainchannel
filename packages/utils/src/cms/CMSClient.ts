import { Blur } from '../blur';
import { ENV } from '../env';
import type { CallToAction, Employee, Event, Product, Store } from '../types';
import { GQLRequest } from './GQLRequest';
import { Query } from './Query';

type Res<T> = {
  [key: string]: T;
};

export class CMSClient {
  private gql: GQLRequest;
  constructor() {
    this.gql = new GQLRequest(ENV.HYGRAPH_ENDPOINT);
  }

  async getEvents() {
    const { events } = await this.gql.request<Res<Event[]>>(Query.getEvents);
    return events;
  }

  async getCTA() {
    const { callToActions } = await this.gql.request<Res<CallToAction[]>>(Query.getCTA);
    return callToActions.at(-1)!;
  }

  async getBeers() {
    const { products } = await this.gql.request<Res<Product[]>>(Query.getBeers);

    for (let i = 0; i < products.length; i++) {
      products[i].image = await Blur.process(products[i].image);
    }

    return products;
  }

  async getBeer(slug: string) {
    const { product } = await this.gql.request<Res<Product>>(Query.getBeerBySlug, { variables: { slug } });
    product.image = await Blur.process(product.image);
    return product;
  }

  //   async getStory() {
  //     const { ourStories } = await this.gql.request<Res<OurStory[]>>(Query.getStory());
  //     return ourStories.at(-1)!;
  //   }

  async getStores() {
    const { stores } = await this.gql.request<Res<Store[]>>(Query.getStores);

    for (let i = 0; i < stores.length; i++) {
      stores[i].storeImages = await Blur.storeGallery(stores[i].storeImages);
    }

    return stores;
  }

  async getEmployees() {
    const { employees } = await this.gql.request<Res<Employee[]>>(Query.getEmployees);

    for (let i = 0; i < employees.length; i++) {
      employees[i].image = await Blur.process(employees[i].image);
    }

    return employees;
  }
}
