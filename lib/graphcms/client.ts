import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const GRAPHCMS_AUTH_TOKEN = process.env.NEXT_PUBLIC_GRAPHCMS_AUTH_TOKEN as string;

export const graphCMSClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_AUTH_TOKEN}`,
  },
});
