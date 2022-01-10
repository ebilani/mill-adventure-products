export type Category = {
    id: string;
    slug: string;
    name: string;
    products: Product[]
  }
  
  export type Product = {
    id: number;
    slug: string;
    name: string;
    image: any;
    description: string;
    price: string;
    
    
  }

  