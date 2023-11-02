export class Query {
  static getCTA = /* GraphQL */ `
    query GetCTA {
      callToActions {
        header
        subheader
        image {
          id
          url
          blurDataUrl
          width
          height
        }
      }
    }
  `;

  static getOurStory = /* GraphQL */ `
    query GetOurStory {
      ourStories {
        id
        description
      }
    }
  `;
  static getStores = /* GraphQL */ `
    query GetStores {
      stores {
        id
        name
        description
        slug
        phoneNumber
        hours {
          sundayHours
          mondayHours
          tuesdayHours
          wednesdayHours
          thursdayHours
          fridayHours
          saturdayHours
        }
        storeImages {
          firstImage {
            id
            url
            blurDataUrl
            width
            height
          }
          secondImage {
            id
            url
            blurDataUrl
            width
            height
          }
          thirdImage {
            id
            url
            blurDataUrl
            width
            height
          }
          fourthImage {
            id
            url
            blurDataUrl
            width
            height
          }
        }
        address {
          street
          city
          state
          zipcode
        }
      }
    }
  `;

  static getBeers = /* GraphQL */ `
    query GetBeers {
      products {
        id
        slug
        name
        image {
          id
          url
          url
          width
          height
          blurDataUrl
        }
        description
        isYearRound
        isUpcoming
        prices {
          singlePrice
          sixPackPrice
          kegPrice
        }
        details {
          abv
          ibu
          flavors
        }
      }
    }
  `;

  static getBeerBySlug = /* GraphQL */ `
    query GetBeers($slug: String!) {
      product(where: { slug: $slug }) {
        id
        slug
        name
        image {
          id
          url
          blurDataUrl
        }
        description
        isYearRound
        isUpcoming
        prices {
          singlePrice
          fourPackPrice
          sixPackPrice
          kegPrice
        }
        details {
          abv
          ibu
          flavors
        }
      }
    }
  `;

  static getEvents = /* GraphQL */ `
    query GetEvents($now: DateTime!) {
      events(orderBy: startTime_ASC, where: { startTime_gte: $now }) {
        id
        title
        startTime
        endTime
        store {
          name
          address {
            street
            state
            city
            zipcode
          }
        }
        extAddress {
          street
          state
          city
          zipcode
        }
        isExternal
      }
    }
  `;

  static getEmployees = /* GraphQL */ `
    query GetEmployees {
      employees(orderBy: sort_ASC) {
        id
        name
        position
        image {
          id
          url
          blurDataUrl
          width
          height
        }
      }
    }
  `;

  static createEvent = /* GraphQL */ `
    mutation CreateEvent($title: String!, $startTime: DateTime!, $endTime: DateTime!, $storeId: ID!) {
      createEvent(
        data: {
          title: $title
          startTime: $startTime
          endTime: $endTime
          isExternal: false
          store: { connect: { id: $storeId } }
        }
      ) {
        id
      }
    }
  `;

  static updateBlur = /* GraphQL */ `
    mutation UpdateBlurDataUrl($id: ID!, $blurDataUrl: String!) {
      updateAsset(where: { id: $id }, data: { blurDataUrl: $blurDataUrl }) {
        blurDataUrl
      }
    }
  `;

  static publishAsset = /* GraphQL */ `
    mutation PublishAsset($id: ID!) {
      publishAsset(to: PUBLISHED, where: { id: $id }) {
        id
      }
    }
  `;
}
