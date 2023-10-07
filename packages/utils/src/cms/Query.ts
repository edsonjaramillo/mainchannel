export class Query {
  static getCTA = /* GraphQL */ `
    query GetCTA {
      callToActions {
        header
        subheader
        image {
          url
          width
          height
        }
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
            url
            width
            height
          }
          secondImage {
            url
            width
            height
          }
          thirdImage {
            url
            width
            height
          }
          fourthImage {
            url
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
          url
          width
          height
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
          url
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
    query GetEvents {
      events(orderBy: startTime_ASC) {
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
          url
          width
          height
        }
      }
    }
  `;
}
