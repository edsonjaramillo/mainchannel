export class ENV {
  static NODE_ENV = process.env.NODE_ENV as 'development' | 'production' | 'test';
  static DOMAIN = process.env.DOMAIN as string;
  static HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;
}
