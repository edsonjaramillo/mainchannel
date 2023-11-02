import { Blur } from '../blur';
import { ENV } from '../env';
import type { CallToAction, Employee, Event, Product, Store, OurStory } from '../types';
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

  async getEvents(now: string) {
    const { events } = await this.gql.request<Res<Event[]>>(Query.getEvents, { variables: { now } });
    return events;
  }

  async getCTA() {
    const { callToActions } = await this.gql.request<Res<CallToAction[]>>(Query.getCTA);
    for (let i = 0; i < callToActions.length; i++) {
      if (!callToActions[i].image.blurDataUrl) {
        console.log(`Processing ${callToActions[i].header} blur...`);
        callToActions[i].image = await Blur.process(callToActions[i].image);
      }
    }

    return callToActions.at(-1)!;
  }

  async getOurStory() {
    const { ourStories } = await this.gql.request<Res<OurStory[]>>(Query.getOurStory);
    return ourStories.at(-1)!;
  }

  async getBeers() {
    const { products } = await this.gql.request<Res<Product[]>>(Query.getBeers, {
      // cache: 'no-cache',
    });

    for (let i = 0; i < products.length; i++) {
      if (!products[i].image.blurDataUrl) {
        console.log(`Processing ${products[i].name} blur...`);
        products[i].image = await Blur.process(products[i].image);
      }
    }

    return products;
  }

  async getBeer(slug: string) {
    const { product } = await this.gql.request<Res<Product>>(Query.getBeerBySlug, {
      variables: { slug },
      // cache: 'no-cache',
    });

    if (!product.image.blurDataUrl) {
      console.log(`Processing ${product.name} blur...`);
      product.image = await Blur.process(product.image);
    }

    return product;
  }

  async getStores() {
    const { stores } = await this.gql.request<Res<Store[]>>(Query.getStores, {
      // cache: 'no-cache',
    });

    for (let i = 0; i < stores.length; i++) {
      if (!stores[i].storeImages.firstImage.blurDataUrl) {
        console.log(`Processing ${stores[i].name} blur...`);
        stores[i].storeImages.firstImage = await Blur.process(stores[i].storeImages.firstImage);
      }

      if (!stores[i].storeImages.secondImage.blurDataUrl) {
        console.log(`Processing ${stores[i].name} blur...`);
        stores[i].storeImages.secondImage = await Blur.process(stores[i].storeImages.secondImage);
      }

      if (!stores[i].storeImages.thirdImage.blurDataUrl) {
        console.log(`Processing ${stores[i].name} blur...`);
        stores[i].storeImages.thirdImage = await Blur.process(stores[i].storeImages.thirdImage);
      }

      if (!stores[i].storeImages.fourthImage.blurDataUrl) {
        console.log(`Processing ${stores[i].name} blur...`);
        stores[i].storeImages.fourthImage = await Blur.process(stores[i].storeImages.fourthImage);
      }
    }

    return stores;
  }

  async getEmployees() {
    const { employees } = await this.gql.request<Res<Employee[]>>(Query.getEmployees, { cache: 'no-cache' });

    for (let i = 0; i < employees.length; i++) {
      if (!employees[i].image.blurDataUrl) {
        console.log(`Processing ${employees[i].name} blur...`);
        employees[i].image = await Blur.process(employees[i].image);
      }
    }

    return employees;
  }

  async createEvent(event: createEventVariables) {
    const { createEvent } = await this.gql.request<Res<Event>>(Query.createEvent, {
      variables: {
        title: event.title,
        startTime: event.startTime,
        endTime: event.endTime,
        storeId: event.storeId,
      },
    });
    return createEvent;
  }

  async updateBlurDataURL(id: string, blur: string) {
    const { updateAsset: blurDataUrl } = await this.gql.request<Res<string>>(Query.updateBlur, {
      variables: {
        id,
        blurDataUrl: blur,
      },
    });

    return { blurDataUrl };
  }

  async publishAsset(id: string) {
    await this.gql.request<Res<any>>(Query.publishAsset, {
      variables: {
        id,
      },
    });
  }
}

export type createEventVariables = Pick<Event, 'title' | 'startTime' | 'endTime'> & {
  storeId: string;
};
