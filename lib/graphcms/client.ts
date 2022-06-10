import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
export const graphCMSClient = new GraphQLClient(GRAPHCMS_ENDPOINT);
