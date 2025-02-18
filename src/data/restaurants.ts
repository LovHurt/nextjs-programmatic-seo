export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  cuisine: string;
  address: string;
  phone: string;
  hours: string;
  reviews: number;
  tags: string[];
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Sushi Berlin",
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "Alexanderplatz 1, 10178 Berlin",
    phone: "+49 30 1234567",
    hours: "11:00 - 23:00",
    reviews: 120,
    tags: ["Lunch", "Dinner", "Sushi"],
  },
  {
    id: 2,
    name: "Golden Dragon Berlin",
    image:
      "https://img.freepik.com/free-photo/fried-green-bean-with-chili-pepper-black-table_141793-1656.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$",
    cuisine: "Chinese",
    address: "Potsdamer Platz 2, 10785 Berlin",
    phone: "+49 30 2345678",
    hours: "11:00 - 22:00",
    reviews: 98,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 3,
    name: "Taco Fiesta Berlin",
    image:
      "https://img.freepik.com/free-photo/mexican-tacos-with-meat-vegetables-red-onion_2829-8665.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.6,
    price: "$",
    cuisine: "Mexican",
    address: "Kurfürstendamm 3, 10707 Berlin",
    phone: "+49 30 3456789",
    hours: "10:00 - 22:00",
    reviews: 150,
    tags: ["Lunch", "Dinner", "Mexican"],
  },
  {
    id: 4,
    name: "Steak & Wine Berlin",
    image:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "Unter den Linden 4, 10117 Berlin",
    phone: "+49 30 4567890",
    hours: "17:00 - 23:00",
    reviews: 85,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 5,
    name: "Pizza Romana Berlin",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    price: "$$",
    cuisine: "Pizza",
    address: "Friedrichstraße 5, 10117 Berlin",
    phone: "+49 30 5678901",
    hours: "11:00 - 22:00",
    reviews: 110,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 6,
    name: "Brunch am Tiergarten",
    image:
      "https://img.freepik.com/free-photo/people-sitting-around-breakfast-table-restaurant_114579-1914.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.4,
    price: "$$",
    cuisine: "Breakfast",
    address: "Tiergartenstraße 6, 10785 Berlin",
    phone: "+49 30 6789012",
    hours: "08:00 - 15:00",
    reviews: 95,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  // Hamburg Restoranları
  {
    id: 7,
    name: "Sushi Hamburg",
    image:
      "https://img.freepik.com/free-photo/fried-sushi-with-fish-rice-ginger-wasabi_140725-24.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$$",
    cuisine: "Japanese",
    address: "Reeperbahn 7, 20359 Hamburg",
    phone: "+49 40 1234567",
    hours: "11:00 - 23:00",
    reviews: 130,
    tags: ["Lunch", "Dinner", "Sushi"],
  },
  {
    id: 8,
    name: "Golden Dragon Hamburg",
    image:
      "https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks_2829-10785.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.6,
    price: "$$",
    cuisine: "Chinese",
    address: "Jungfernstieg 8, 20095 Hamburg",
    phone: "+49 40 2345678",
    hours: "11:00 - 22:00",
    reviews: 110,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 9,
    name: "Deep Dish Hamburg",
    image:
      "https://img.freepik.com/free-photo/top-view-tomato-soup-copper-bowl-garnished-with-cream-top_140725-8887.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$",
    cuisine: "Pizza",
    address: "Mönckebergstraße 9, 20095 Hamburg",
    phone: "+49 40 3456789",
    hours: "11:00 - 23:00",
    reviews: 140,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 10,
    name: "Steakhouse Hamburg",
    image:
      "https://img.freepik.com/free-photo/meat-burger-bread-bun-cut-into-two-pieces_114579-3302.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.8,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "Speicherstadt 10, 20457 Hamburg",
    phone: "+49 40 4567890",
    hours: "17:00 - 23:00",
    reviews: 90,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 11,
    name: "Hamburg Mexican Grill",
    image:
      "https://img.freepik.com/free-photo/fire-meat-burger-wooden-hemp_140725-7009.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.5,
    price: "$",
    cuisine: "Mexican",
    address: "Alsterufer 11, 20354 Hamburg",
    phone: "+49 40 5678901",
    hours: "10:00 - 22:00",
    reviews: 105,
    tags: ["Lunch", "Dinner", "Mexican"],
  },
  {
    id: 12,
    name: "Brunch am Universität",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/55/9e/21/location.jpg?w=900&h=500&s=1",
    rating: 4.6,
    price: "$$",
    cuisine: "Breakfast",
    address: "Universitätsstraße 22, 50679 Köln",
    phone: "+49 22 11111111",
    hours: "08:00 - 15:00",
    reviews: 115,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  // Munich Restoranları
  {
    id: 13,
    name: "Sushi Munich",
    image:
      "https://img.freepik.com/free-photo/chopsticks-holding-roll-uguri-made-nori-pickled-rice-eel-perch-unagi_8353-6025.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "Marienplatz 13, 80331 Munich",
    phone: "+49 89 1234567",
    hours: "11:00 - 23:00",
    reviews: 125,
    tags: ["Lunch", "Dinner", "Sushi"],
  },
  {
    id: 14,
    name: "Golden Dragon Munich",
    image:
      "https://img.freepik.com/free-photo/korean-fish-cake-vegetable-soup-table_1150-42984.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$",
    cuisine: "Chinese",
    address: "Maximilianstraße 14, 80333 Munich",
    phone: "+49 89 2345678",
    hours: "11:00 - 22:00",
    reviews: 115,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 15,
    name: "Steak & Bavarian Munich",
    image:
      "https://img.freepik.com/free-photo/beef-steak-with-french-fries-sour-cream-mayonnaise-sauce-herbs-wooden-plate_114579-33.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "Ludwigstraße 15, 80333 Munich",
    phone: "+49 89 3456789",
    hours: "17:00 - 23:00",
    reviews: 95,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 16,
    name: "Little Bavarian Cafe",
    image:
      "https://img.freepik.com/free-photo/cozy-coffee-shop-serves-gourmet-desserts-rustic-wooden-table-generated-by-artificial-intelligence_188544-129932.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.8,
    price: "$$",
    cuisine: "Breakfast",
    address: "Viktualienmarkt 16, 80331 Munich",
    phone: "+49 89 4567890",
    hours: "08:00 - 15:00",
    reviews: 130,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  {
    id: 17,
    name: "Pizza Romana Munich",
    image:
      "https://img.freepik.com/free-photo/italian-food-wood-slice-pepperoni-gourmet_1122-2443.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.5,
    price: "$$",
    cuisine: "Pizza",
    address: "Sendlinger Straße 17, 80331 Munich",
    phone: "+49 89 5678901",
    hours: "11:00 - 22:00",
    reviews: 110,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 18,
    name: "Coffee & Brunch Munich",
    image:
      "https://img.freepik.com/free-photo/n-roissants-served-with-cup-coffee_140725-1870.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.6,
    price: "$$",
    cuisine: "Breakfast",
    address: "Theresienstraße 18, 80333 Munich",
    phone: "+49 89 6789012",
    hours: "08:00 - 15:00",
    reviews: 120,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  // Frankfurt Restoranları
  {
    id: 19,
    name: "Sushi Frankfurt",
    image:
      "https://img.freepik.com/free-photo/salmon-sushi-roll-plate_1147-566.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.8,
    price: "$$$",
    cuisine: "Japanese",
    address: "Zeil 19, 60313 Frankfurt",
    phone: "+49 69 1234567",
    hours: "11:00 - 23:00",
    reviews: 125,
    tags: ["Lunch", "Dinner", "Sushi"],
  },
  {
    id: 20,
    name: "Golden Dragon Frankfurt",
    image:
      "https://img.freepik.com/free-photo/chinese-reunion-dinner_23-2151910017.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$",
    cuisine: "Chinese",
    address: "Hauptwache 20, 60311 Frankfurt",
    phone: "+49 69 2345678",
    hours: "11:00 - 22:00",
    reviews: 115,
    tags: ["Lunch", "Dinner", "Chinese"],
  },
  {
    id: 21,
    name: "Steakhouse Köln",
    image:
      "https://img.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.9,
    price: "$$$$",
    cuisine: "Steakhouse",
    address: "Domkloster 4, 50667 Köln",
    phone: "+49 221 3456789",
    hours: "17:00 - 23:00",
    reviews: 95,
    tags: ["Dinner", "Steak", "Fine Dining"],
  },
  {
    id: 22,
    name: "Pizza Romana Frankfurt",
    image:
      "https://img.freepik.com/free-photo/margarita-pizza-with-mushrooms-tomato-sauce_114579-1909.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.5,
    price: "$$",
    cuisine: "Pizza",
    address: "Kaiserstraße 23, 60311 Frankfurt",
    phone: "+49 69 5678901",
    hours: "11:00 - 22:00",
    reviews: 105,
    tags: ["Lunch", "Dinner", "Pizza"],
  },
  {
    id: 23,
    name: "Brunch am Main Frankfurt",
    image:
      "https://img.freepik.com/free-photo/top-view-sausages-with-pretzels-beer_23-2148754968.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$",
    cuisine: "Breakfast",
    address: "Mainkai 24, 60311 Frankfurt",
    phone: "+49 69 6789012",
    hours: "08:00 - 15:00",
    reviews: 115,
    tags: ["Breakfast", "Brunch", "Coffee"],
  },
  // Türk Mutfağı Örnekleri
  {
    id: 24,
    name: "Anatolia Lezzet Berlin",
    image:
      "https://img.freepik.com/free-photo/morning-breakfast-set-by-window_140725-9917.jpg?t=st=1739866381~exp=1739869981~hmac=eca71dfcc3aa94fcb173ee302348bdb1b5ae9dc21e4af93a4c2bb398f752dbcc&w=740",
    rating: 4.8,
    price: "$$",
    cuisine: "Turkish",
    address: "Prenzlauer Allee 24, 10178 Berlin",
    phone: "+49 30 7890123",
    hours: "11:00 - 23:00",
    reviews: 135,
    tags: ["Lunch", "Dinner", "Turkish"],
  },
  {
    id: 25,
    name: "Istanbul Grill Hamburg",
    image:
      "https://img.freepik.com/free-photo/grilled-beef-steak-served-with-salt-herbs-grilled-tomato_140725-5833.jpg?ga=GA1.1.2042092471.1739862194&semt=ais_hybrid",
    rating: 4.7,
    price: "$$$",
    cuisine: "Turkish",
    address: "Schanzenviertel 25, 20357 Hamburg",
    phone: "+49 40 7890123",
    hours: "11:00 - 23:00",
    reviews: 128,
    tags: ["Lunch", "Dinner", "Turkish"],
  },
];

export async function searchRestaurants(q: string, location: string) {
  // Pretend we're making a request to our DB/API
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const searchWords = q?.split(" ").filter(Boolean) || [];

  return restaurants
    .filter((restaurant) =>
      searchWords.every(
        (word) =>
          restaurant.name.toLowerCase().includes(word.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(word.toLowerCase()) ||
          restaurant.tags.some((tag) =>
            tag.toLowerCase().includes(word.toLowerCase()),
          ),
      ),
    )
    .filter((restaurant) =>
      restaurant.address.toLowerCase().includes(location.toLowerCase()),
    )
    .sort((a, b) => b.rating - a.rating);
}

export const locations = [
  "Berlin",
  "Hamburg",
  "Munich",
  "Frankfurt",
  "Köln"
];

export async function getAllTags({ limit }: { limit?: number } = {}) {
  // Pretend we're fetching these from the DB
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return restaurants.slice(0, limit).reduce<string[]>(function (
    acc,
    restaurant,
  ) {
    return acc.concat(restaurant.tags);
  }, []);
}
