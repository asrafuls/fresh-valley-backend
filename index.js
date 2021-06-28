const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())

// Connect mongodb
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.yqdvo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1});

client.connect(err => {

  const productsCollection = client.db("fresh-valley").collection("products");

  const products = [
    {
      name: "Marks Milk Powder Poly",
      img: "https://chaldn.com/_mpimage/marks-milk-powder-poly-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59270&q=best&v=1&m=400&webp=1",
      seller: "Abul Khair Food & Beverage",
      sellerUrl: "abul-khair-f-b",
      pdUrl: "marks-milk-powder-poly",
      id: "C34563D34DYT347D6DYS",
      weight: "500gm",
      price: 350,
      pdDetails: [
        "Origin: Bangladesh",
        "Manufacturer: Abul khair and company",
        "Nutrition: Vitamin A, Vitamin B, Vitamin D, calcium, zinc, protien."
      ],
      item: "food",
      category: "beverages",
      subCategory: "milk"
    },
    {
      name: "Ispahani Mirzapore Best Leaf Tea",
      img: "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69906&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Ispahani-Mirzapore-Best-Leaf-Tea",
      id: "C345398UDX34S38DY3D3SD",
      weight: "400gm",
      price: 210,
      pdDetails: [
        "'Ispahani Mirzapore Best Leaf' is produced by blending the BEST tea leaves of the finest tea gardens in Bangladesh. It comes to you in the most modern packing, designed to protect its excellent aroma and taste.",
      ],
      item: "food",
      category: "beverages",
      subCategory: "tea"
    },
    {
      name: "Brooke Bond Taaza Black Tea",
      img: "https://chaldn.com/_mpimage/brooke-bond-taaza-black-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D75776&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Brooke-Bond-Taaza-Black-Tea",
      id: "CWR3DX345D456V567H65GV",
      weight: "400gm",
      price: 199,
      pdDetails: [
        "In order to stay on top of your packed day, all you need is a clear mind – what's better than a cup of new Brooke Bond Taaza to refresh & clear your mind. Because only new Brooke Bond Taaza is a tea with High Quality fresh Tea Leaves, packed with the Natural Goodness of Theanine, that helps to clear your mind and enables you to manage the demands of everyday life. This tea is perfect for those Spirited Aspirers who believe that the brighter future of their family is the center of their universe. Our world-class tea tasters and experts blend the tea that results in the exceptional colour, superior taste and impeccable aroma of each “Dana” of our brand. Strong processes ensure that the quality remains consistent throughout the year. Taaza makes sure that this phenomenal journey also resonates in every end cup as absolute refreshment!",
      ],
      item: "food",
      category: "beverages",
      subCategory: "tea"
    },
    {
      name: "Red Label Black Tea",
      img: "https://chaldn.com/_mpimage/red-label-black-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D75791&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Red-Label-Black-Tea",
      id: "C345398UDX34S38DY3D3SD",
      weight: "400GM",
      price: 270,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "tea"
    },
    {
      name: "Nestea Iced Tea Lemon",
      img: "https://chaldn.com/_mpimage/nestea-iced-tea-lemon-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D50317&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Nestea-Iced-Tea-Lemon",
      id: "CERTC345CG45FC45Y4V4C4",
      weight: "500 gm",
      price: 300,
      pdDetails: [
        "Nestea Iced Tea Lemon has Vitamin C, which supports the body's immune system. And which can meet 60 percent of your daily requirement. So, order it from Chaldal and enjoy the taste.",
        "Brand: Nestle.",
        "Product Type: Iced Tea."
      ],
      item: "food",
      category: "beverages",
      subCategory: "tea"
    },
    {
      name: "Ispahani Blender's Choice Premium Green Tea",
      img: "https://chaldn.com/_mpimage/ispahani-blenders-choice-premium-green-tea-50-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D62946&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Ispahani-Blender-Choice-Premium-Green-Tea",
      id: "CV45YVHRYYHV55YFG6Y65V56V",
      weight: "50 pcs",
      price: 200,
      pdDetails: [
        "Origin: Bangladesh",
        "Manufacturer: Ispahani tea Ltd.",
        "Only teas of the finest high elevation tea gardens of China are used in this blend. The subtle fragrances and flavours of this superb tea combines health giving properties with an impeccable taste. Full of natural antioxidents."
      ],
      item: "food",
      category: "beverages",
      subCategory: "tea"
    },
    {
      name: "Tetley Premium Tea Bags 100 gm",
      img: "https://chaldn.com/_mpimage/tetley-premium-tea-bags-100-gm-50-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70996&q=low&v=1&m=400&webp=1",
      seller: "",
      sellerUrl: "",
      pdUrl: "Tetley-Premium-Tea-Bags-100-gm",
      id: "B7UHJN877685B85IB7I578OKB",
      weight: "50 pcs",
      price: 75,
      pdDetails: [
        "Tetley Premium Leaf Tea bag is an energizing taste that would take you through your day. A premium blend of tea that provides you with rich colour, good flavor and strong taste. Best enjoyed any time of day.",
      ],
      item: "food",
      category: "beverages",
      subCategory: "milk"
    },
    {
      name: "Nestlé Nescafé Classic Instant Coffee Jar",
      img: "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-jar-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70689&q=low&v=1&m=400&webp=1",
      seller: "Nestle Bangladesh",
      sellerUrl: "nestle",
      pdUrl: "Nestlé-Nescafé-Classic-Instant-Coffee-Jar",
      id: "N76B56UB567BN67587IB57875",
      weight: "50gm",
      price: 165,
      pdDetails: [
        "Start your day right with the first sip of NESCAFÉ Classic NESCAFÉ Classic soluble coffee is perfect for any time of the day  Add a teaspoon (1.5g) of NESCAFÉ Classic and 5g Nestlé Coffeemate into 120ml hot (80°C) water. Add sugar as per your taste and stir up well to get a perfect cup of NESCAFÉ",
        "Variant: NESCAFÉ CLASSIC",
        "Net Weight: 50g",
        "Origin: India",
        "Marketed by Nestlé Bangladesh Limited"
      ],
      item: "food",
      category: "beverages",
      subCategory: "coffee"
    },
    {
      name: "Nestle Coffee Mate Coffee Creamer Box",
      img: "",
      seller: "Nestle Bangladesh",
      sellerUrl: "Nestle",
      pdUrl: "Nestle-Coffee-Mate-Coffee-Creamer-Box",
      id: "34D3IFUD87353F4F65FV45GV",
      weight: "450gm",
      price: 270,
      pdDetails: [
        "Start your day right with the first sip of NESCAFÉ Classic NESCAFÉ Classic soluble coffee is perfect for any time of the day  Add a teaspoon (1.5g) of NESCAFÉ Classic and 5g Nestlé Coffeemate into 120ml hot (80°C) water. Add sugar as per your taste and stir up well to get a perfect cup of NESCAFÉ",
        "Variant: NESCAFÉ CLASSIC",
        "Net Weight: 50g",
        "Origin: India",
        "Marketed by Nestlé Bangladesh Limited"
      ],
      item: "food",
      category: "beverages",
      subCategory: "coffee"
    },
    {
      name: "Nestle Nescake Gold Choco Mocha Coffee Mix 5 Sachets",
      img: "https://chaldn.com/_mpimage/nestle-nescake-gold-choco-mocha-coffee-mix-5-sachets-125-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74170&q=low&v=1&m=400&webp=1",
      seller: "Nestle ",
      sellerUrl: "Nestle",
      pdUrl: "Nestle-Nescake-Gold-Choco-Mocha-Coffee-Mix-5-Sachets",
      id: "V543C54VB46B455VVVVVVV6UB54",
      weight: "125gm",
      price: 180,
      pdDetails: [
        "Pour coffee mix from 25g sachet into 120ml hot (80°C) water. Stir up well to get a perfect cup Choco Mocha Coffee",
        "Variant: NESCAFÉ GOLD Choco Mocha",
        "Quantity: Pack contains 5 single-serve sachets (25g each) for fresh coffee every time",
        "Origin: India",
        "Marketed by Nestlé Bangladesh Limited"
      ],
      item: "food",
      category: "beverages",
      subCategory: "coffee"
    },
    {
      name: "Nescafe Original Coffee (Indonesia)",
      img: "https://chaldn.com/_mpimage/nescafe-original-coffee-indonesia-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D45823&q=low&v=1&m=400&webp=1",
      seller: "Nestle",
      sellerUrl: "Nestle",
      pdUrl: "Nescafe-Original-Coffee-(Indonesia)",
      id: "B43EV65EC6Y536U5466C6Y5CYC5Y",
      weight: "200 gm",
      price: 519,
      pdDetails: [
        "Nescafe Original Coffee Savor the wonderfully rich and refreshing aroma of this medium-dark roast.Quality beans has been blend then roast them to medium-dark deliciousness to deliver the pleasurable experience you’ve come to expect from Nescafe Original Coffee. Let the intense taste of Nescafe Original Coffee awaken your senses to new opportunities as the rich aroma of this distinctive blend unfolds.",
      ],
      item: "food",
      category: "beverages",
      subCategory: "coffee"
    },
    {
      name: "Shezan Mango Juice",
      img: "https://chaldn.com/_mpimage/shezan-mango-juice-250-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D45898&q=low&v=1&m=400&webp=1",
      seller: "Shezan",
      sellerUrl: "Shezan",
      pdUrl: "Shezan-Mango-Juice",
      id: "V453V6347V543V467V45H6YTU54",
      weight: "250 ml",
      price: 20,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
    {
      name: "Slice Mango Juice",
      img: "https://chaldn.com/_mpimage/slice-mango-juice-200-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69603&q=low&v=1&m=400&webp=1",
      seller: "Slice",
      sellerUrl: "Slice",
      pdUrl: "Slice-Mango-Juice",
      id: "64B345V35CERTRVE5466V4C4",
      weight: "200 ml",
      price: 20,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
    {
      name: "Latina 100 % Juice (Orange)",
      img: "https://chaldn.com/_mpimage/latina-100-juice-orange-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D45878&q=low&v=1&m=400&webp=1",
      seller: "Latina",
      sellerUrl: "Latina",
      pdUrl: "Latina-100-Juice-(Orange)",
      id: "456456HFDTYHUTUUTURETUR",
      weight: "1 ltr",
      price: 200,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
    {
      name: "Pran Drinko Pineapple Juice",
      img: "https://chaldn.com/_mpimage/pran-drinko-pineapple-juice-250-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64963&q=low&v=1&m=400&webp=1",
      seller: "Pran",
      sellerUrl: "Pran",
      pdUrl: "Pran-Drinko-Pineapple-Juice",
      id: "56HTUYTYUJHGJEQA6435AD",
      weight: "250 ml",
      price: 25,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
    {
      name: "Pran Frooto Mango Fruit Drink",
      img: "https://chaldn.com/_mpimage/pran-frooto-mango-fruit-drink-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70037&q=low&v=1&m=400&webp=1",
      seller: "Pran",
      sellerUrl: "Pran",
      pdUrl: "Pran-Frooto-Mango-Fruit-Drink",
      id: "KKV5F6FYYTH57JN85K6J90",
      weight: "1 ltr",
      price: 70,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
    {
      name: "Sajeeb Litchi Flavored Drink",
      img: "https://chaldn.com/_mpimage/sajeeb-litchi-flavored-drink-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D51870&q=best&v=1&m=400&webp=1",
      seller: "Sajeeb",
      sellerUrl: "Sajeeb",
      pdUrl: "Sajeeb-Litchi-Flavored-Drink",
      id: "3V6GTYHBGHNM78I75N5NNB7",
      weight: "170 ml",
      price: 10,
      pdDetails: [],
      item: "food",
      category: "beverages",
      subCategory: "juice"
    },
  ]


  // Default Api
  app.get('/', (req, res) => {
    res.send('Running...')
  })

  // Get all products Api
  app.get("/products", (req, res) => {
    productsCollection.find({})
      .toArray((err, docx) => {
        res.send(docx)
      })
  })

  // Set all products Api
  // app.get("/products-add", (req, res) => {
  //   productsCollection.insertMany(products)
  //     .then(() => {
  //       res.send("added...")
  //     })
  // })
});

app.listen(port)