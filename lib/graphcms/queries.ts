import { gql } from 'graphql-request';

export const getHomepageProps = gql`
  query getHomepageProps {
    callToAction(where: { id: "cl40i0pxjkccz0ake49eck7xh" }) {
      header
      subheader
      image {
        url
      }
      imageDescription
    }
    communities(orderBy: sort_ASC) {
      id
      image {
        url
      }
      description
    }
    ourStory(where: { id: "cl41op4por9nk0akevo4k3f87" }) {
      description
    }
  }
`;

export const getYearRound = gql`
  query getYearRound {
    products(where: { isYearRound: true, isUpcoming: false }) {
      id
      name
      slug
      image {
        url
      }
      description
      prices {
        singlePrice
      }
      details {
        abv
      }
    }
  }
`;

export const getSeasonal = gql`
  query getSeasonal {
    products(where: { isYearRound: false, isUpcoming: false }) {
      id
      name
      slug
      image {
        url
      }
      description
      prices {
        singlePrice
      }
      details {
        abv
      }
    }
  }
`;

export const getUpcoming = gql`
  query getUpcoming {
    products(where: { isUpcoming: true }) {
      id
      name
      slug
      image {
        url
      }
      description
      prices {
        singlePrice
      }
      details {
        abv
      }
    }
  }
`;

export const getProduct = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      name
      slug
      description
      image {
        url
      }
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

export const getProductSlugs = gql`
  query getProductSlugs {
    products {
      id
      slug
    }
  }
`;

export const getStores = gql`
  query getStores {
    stores {
      id
      name
      description
      slug
      phoneNumber
      employees(orderBy: sort_ASC) {
        id
        name
        position
        image {
          url
        }
      }
      address {
        city
        stage
        state
        street
        zipcode
      }
      hours {
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        sundayHours
      }
      storeImages {
        firstImage {
          url
        }
        firstImageDescription
        secondImage {
          url
        }
        secondImageDescription
        thirdImage {
          url
        }
        thirdImageDescription
        fourthImage {
          url
        }
        fourthImageDescription
      }
    }
  }
`;

export const getStore = gql`
  query getStore($slug: String!) {
    store(where: { slug: $slug }) {
      id
      name
      description
      slug
      image {
        id
        url(transformation: { image: { resize: { fit: clip, width: 800 } } })
        width
        height
        alt
      }
      address {
        id
        street
        city
        state
        zipcode
      }
      article {
        raw
      }
      hasExternalPage
      externalUrl
    }
  }
`;

export const getEvents = gql`
  query getEvents($yesterday: DateTime!) {
    events(orderBy: startTime_ASC, where: { startTime_gte: $yesterday }) {
      id
      title
      description
      startTime
      endTime
      store {
        name
        address {
          street
          city
          state
          zipcode
        }
      }
      isExternal
      extLocation
      extAddress {
        street
        city
        state
        zipcode
      }
    }
  }
`;

// export const getJobListing = gql`
//   query getJobListing($id: ID!) {
//     joblisting(where: { id: $id }) {
//       id
//       title
//       description
//       datePosted
//       isFulltime
//       wage
//       estimatedHours
//       article {
//         raw
//       }
//       store {
//         id
//         name
//         description
//         address {
//           id
//           street
//           city
//           state
//           zipcode
//         }
//       }
//     }
//   }
// `;

export const getSitemapLinks = gql`
  query getSitemapLinks {
    products {
      id
      slug
      name
    }
  }
`;
