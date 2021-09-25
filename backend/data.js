import  bcrypt from "bcrypt";

export default {
  users:[
    {
      name:'victor',
      email: 'nwaosevictor1234@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name:'isioma',
      email: 'nwaosevictor@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: "suits",
      category: "suits",
      image: "/image/suits.jpeg",
      price: 160,
      brand: "MEN",
      rating: 4.9,
      numReview: 10,
      countInStock: 6,
    },
    {
     
      name: "corporate",
      category: "corporateWear",
      image: "/image/corporate.jpeg",
      price: 90,
      brand: "KINGS",
      rating: 7,
      numReview: 19,
      countInStock: 6,
    },
    {
      
      name: "native_1",
      category: "nativeWears",
      image: "/image/native.jpeg",
      price: 60,
      brand: "isioma",
      rating: 7,
      numReview: 19,
      countInStock: 5,
    },
    {
     
      name: "native_2",
      category: "nativeWears",
      image: "/image/navtive1.jpeg",
      price: 80,
      brand: "isioma",
      rating: 7,
      numReview: 10,
      countInStock: 6,
    },
    {
      
      name: "native_3",
      category: "nativeWears",
      image: "/image/native2.jpeg",
      price: 60,
      brand: "isioma",
      rating: 7,
      numReview: 10,
      countInStock: 6,
    },

    {
      
      name: "shirt and jeans",
      category: "shirts",
      image: "/image/native3.jpeg",
      price: 60,
      brand: "isioma",
      rating: 7,
      numReview: 10,
      countInStock: 6,
    },
    {
      
      name: "native_4",
      category: "nativeWears",
      image: "/image/shirt_and_jeans.jpeg",
      price: 60,
      brand: "isioma",
      rating: 7,
      numReview: 10,
      countInStock: 6,
    },
  ],
};
