import bcrypt from 'bcryptjs';


const data = {
  users: [
    {
      name: 'Example',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Adidas Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 40,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'This adidas golf polo shirt combines a classic look with modern performance to keep you splitting fairways in comfort and style. Crouch, bend and rotate naturally as you follow through on every shot. Then head for the clubhouse feeling as fresh as you did on the first tee. This product is made with recycled content as part of our ambition to end plastic waste.',
      from: 'Lazada',
      url: 'https://www.google.com/'
    },
    {
      name: 'NIKE FC DRI-FIT FOOTBALL SHIRT',
      category: 'Shirts',
      image: 'https://laz-img-sg.alicdn.com/p/a2eeb5f2b994d7427f12f201537f44dd.jpg_720x720q80.jpg_.webp',
      price: 29,
      countInStock: 20,
      brand: 'Nike',
      rating: 5.0,
      numReviews: 1,
      description: 'high quality product',
      from: 'Lazada',
      url: 'https://www.lazada.sg/products/nike-fc-dri-fit-football-shirt-i880304183-s3039674068.html'
    },
    {
      name: '[Ready Stock] White Shirt Men Summer 100%',
      category: 'Shirts',
      image: 'https://cf.shopee.sg/file/b1ae6e892a60d227c5eb801269d7eb52',
      price: 14.81,
      countInStock: 2518,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 667,
      description: '[Ready Stock] White Shirt Men Summer 100%Cotton Short Sleeve Slim Shirts Plain Work Clothing Kurta',
      from: 'Shopee',
      url: 'https://shopee.sg/-Ready-Stock-White-Shirt-Men-Summer-100-Cotton-Short-Sleeve-Slim-Shirts-Plain-Work-Clothing-Kurta-i.162765436.4002997047?__hybrid_pc__=1&stm_referrer='
    },
    {
      name: 'Nike Slim Pants',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
      from: 'Lazada',
      url: 'https://www.google.com/'
    },
    {
      name: 'Puma Slim Pants',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      from: 'Qoo10',
      url: 'https://www.google.com/'
    },
    {
      name: 'Adidas Fit Pants',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 65,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
      from: 'Shopee',
      url: 'https://www.google.com/'
    },
  ],
};

export default data;
