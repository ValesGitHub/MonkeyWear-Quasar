import { Product, ProductResponse } from '../components/models';
import {
  AvailableProductCategories,
  AvailableGenders,
} from '../components/models';

const DATA_BASE: Record<
  AvailableGenders,
  Record<AvailableProductCategories, Product[]>
> = {
  [AvailableGenders.woman]: {
    [AvailableProductCategories.clothing]: [
      {
        id: '1',
        description: 'Donna T-shirt la grande onda di Kanagawa',
        price: 15.99,
        url: '/public/images/products/f1.jpg',
      },
      {
        id: '2',
        description: 'T-shirt Van Gogh The Met',
        price: 15.99,
        url: '/public/images/products/f2.jpg',
      },
      {
        id: '3',
        description: 'Felpa con cappuccio sfumata',
        price: 29.99,
        url: '/public/images/products/f4.jpg',
      },
      {
        id: '4',
        description: 'Felpa basic cerniera e cappuccio',
        price: 39.99,
        url: '/public/images/products/f3.jpg',
      },
    ],
    [AvailableProductCategories.shoes]: [
      {
        id: '5',
        description: 'Donna Ciabatte con fascietta blu',
        price: 10.99,
        url: '/public/images/products/s1.jpg',
      },
      {
        id: '6',
        description: 'Ciabatte con fascietta verde',
        price: 10.99,
        url: '/public/images/products/s2.jpg',
      },
      {
        id: '7',
        description: 'Sneaker casual blu e nera',
        price: 39.99,
        url: '/public/images/products/s3.jpg',
      },
      {
        id: '8',
        description: 'Sneaker casual grigia e gialla',
        price: 39.99,
        url: '/public/images/products/s4.jpg',
      },
    ],
    [AvailableProductCategories.accessories]: [
      {
        id: '7',
        description: 'Collana con ciondolo serpente',
        price: 4.99,
        url: '/public/images/products/c1.jpg',
      },
      {
        id: '8',
        description: 'Collezione di 3 collane argento',
        price: 6.99,
        url: '/public/images/products/c3.jpg',
      },
      {
        id: '9',
        description: 'Cappello basic con logo',
        price: 12.99,
        url: '/public/images/products/c2.jpg',
      },
      {
        id: '9',
        description: 'Cappello con stay chill ricamato',
        price: 12.99,
        url: '/public/images/products/c4.jpg',
      },
    ],
  },
  [AvailableGenders.man]: {
    [AvailableProductCategories.clothing]: [
      {
        id: '1',
        description: 'T-shirt la grande onda di Kanagawa',
        price: 15.99,
        url: '/public/images/products/f1.jpg',
      },
      {
        id: '2',
        description: 'T-shirt Van Gogh The Met',
        price: 15.99,
        url: '/public/images/products/f2.jpg',
      },
      {
        id: '3',
        description: 'Felpa con cappuccio sfumata',
        price: 29.99,
        url: '/public/images/products/f4.jpg',
      },
      {
        id: '4',
        description: 'Felpa basic cerniera e cappuccio',
        price: 39.99,
        url: '/public/images/products/f3.jpg',
      },
    ],
    [AvailableProductCategories.shoes]: [
      {
        id: '5',
        description: 'Ciabatte con fascietta blu',
        price: 10.99,
        url: '/public/images/products/s1.jpg',
      },
      {
        id: '6',
        description: 'Ciabatte con fascietta verde',
        price: 10.99,
        url: '/public/images/products/s2.jpg',
      },
      {
        id: '7',
        description: 'Sneaker casual blu e nera',
        price: 39.99,
        url: '/public/images/products/s3.jpg',
      },
      {
        id: '8',
        description: 'Sneaker casual grigia e gialla',
        price: 39.99,
        url: '/public/images/products/s4.jpg',
      },
    ],
    [AvailableProductCategories.accessories]: [
      {
        id: '7',
        description: 'Collana con ciondolo serpente',
        price: 4.99,
        url: '/public/images/products/c1.jpg',
      },
      {
        id: '8',
        description: 'Collezione di 3 collane argento',
        price: 6.99,
        url: '/public/images/products/c3.jpg',
      },
      {
        id: '9',
        description: 'Cappello basic con logo',
        price: 12.99,
        url: '/public/images/products/c2.jpg',
      },
      {
        id: '9',
        description: 'Cappello con stay chill ricamato',
        price: 12.99,
        url: '/public/images/products/c4.jpg',
      },
    ],
  },
};

/*
const clothingsProductsMan: Product[] = [
  {
    id: '1',
    description: 'T-shirt la grande onda di Kanagawa',
    price: 15.99,
    url: '/public/images/products/f1.jpg',
  },
  {
    id: '2',
    description: 'T-shirt Van Gogh The Met',
    price: 15.99,
    url: '/public/images/products/f2.jpg',
  },
  {
    id: '3',
    description: 'Felpa con cappuccio sfumata',
    price: 29.99,
    url: '/public/images/products/f4.jpg',
  },
  {
    id: '3',
    description: 'Felpa basic cerniera e cappuccio',
    price: 39.99,
    url: '/public/images/products/f3.jpg',
  },
];

const shoesProductsMan: Product[] = [
  {
    id: '4',
    description: 'Ciabatte con fascietta blu',
    price: 10.99,
    url: '/public/images/products/s1.jpg',
  },
  {
    id: '5',
    description: 'Ciabatte con fascietta verde',
    price: 10.99,
    url: '/public/images/products/s2.jpg',
  },
  {
    id: '6',
    description: 'Sneaker casual blu e nera',
    price: 39.99,
    url: '/public/images/products/s3.jpg',
  },
  {
    id: '6',
    description: 'Sneaker casual grigia e gialla',
    price: 39.99,
    url: '/public/images/products/s4.jpg',
  },
];

const accessoriesProductsMan: Product[] = [
  {
    id: '7',
    description: 'Collana con ciondolo serpente',
    price: 4.99,
    url: '/public/images/products/c1.jpg',
  },
  {
    id: '8',
    description: 'Collezione di 3 collane argento',
    price: 6.99,
    url: '/public/images/products/c3.jpg',
  },
  {
    id: '9',
    description: 'Cappello basic con logo',
    price: 12.99,
    url: '/public/images/products/c2.jpg',
  },
  {
    id: '9',
    description: 'Cappello con stay chill ricamato',
    price: 12.99,
    url: '/public/images/products/c4.jpg',
  },
];
*/

export function getProducts(
  gender: AvailableGenders,
  prodType: AvailableProductCategories
): Promise<ProductResponse> {
  let payloadToReturn: ProductResponse;

  if (
    Object.values(AvailableGenders).includes(gender) &&
    Object.values(AvailableProductCategories).includes(prodType)
  ) {
    payloadToReturn = {
      products: DATA_BASE[gender][prodType],
      result: {
        message: '',
        messageTitle: '',
        success: true,
      },
    };
  } else {
    payloadToReturn = {
      products: [],
      result: {
        message: 'Category not valid',
        messageTitle: 'Category Error',
        success: false,
      },
    };
  }

  const myPromise = new Promise<ProductResponse>((resolve) => {
    setTimeout(() => {
      resolve(payloadToReturn);
    }, 2000);
  });

  return myPromise;
}
