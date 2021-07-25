import express from 'express';
import PythonShell from 'python-shell';
import expressAsyncHandler from 'express-async-handler';
import setTimeout  from 'timers';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';



const searchRouter = express.Router();

let searchText = "";

export var finalProduct = []

searchRouter.post('/', expressAsyncHandler(async (req, res) => {
  res.status(201).send({message: 'received'});
  searchText = req.body.data.searchText;

  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './backend',
    args: [searchText]
};

async function pythonScript() {
  PythonShell.run('scrapersShopee.py', options, function(err, results) {
    if (err) throw err;
    var result = results[0]
    var arrayResult = result.split(', ')
    //final product list = productShopee
    var productShopee = []
    for (let i = 0; i < arrayResult.length; i = i + 9) {
        const product = {
          name: arrayResult[i].substring(2, arrayResult[i].length - 1).length >= 30 
          ? arrayResult[i].substring(2, arrayResult[i].length - 1).slice(0, 30) + '...'
          : arrayResult[i].substring(2, arrayResult[i].length - 1),
          category: searchText,
          image: arrayResult[i + 1].substring(1, arrayResult[i + 1].length - 1),
          price: arrayResult[i + 2],
          countInStock: arrayResult[i + 4],
          brand: 'None',
          rating: arrayResult[i + 3],
          numReviews: arrayResult[i + 6],
          description: 'high quality product',
          from: 'Shopee',
          url: 'shopee.sg'
        };
        // productShopee.push(product)
        finalProduct.push(product)
      }
      // for (var i = 0; i < productShopee.length; i++) {
      //   finalProduct.push(productShopee[i])
      // }
  }) 
    
  PythonShell.run('scrapersLazada.py', options, function(err, results) { 
    if (err) throw err;
    
    var result = results[0]
    var arrayResult = result.split(', ')
    var productLazada = []
    for (let i = 0; i < arrayResult.length || i === 108; i = i + 9) {
        const product = {
          name: arrayResult[i].substring(2, arrayResult[i].length - 1).replace('`', '').length >= 30 
          ? arrayResult[i].substring(2, arrayResult[i].length - 1).replace('`', '').slice(0 , 30) + '...' 
          : arrayResult[i].substring(2, arrayResult[i].length - 1).replace('`', ''),
          category: searchText,
          image: arrayResult[i + 1].substring(1, arrayResult[i+1].length - 1),
          price: arrayResult[i + 2],
          countInStock: arrayResult[i + 4],
          brand: arrayResult[i + 5].substring(1, arrayResult[i + 5].length - 1),
          rating: arrayResult[i + 3],
          numReviews: arrayResult[i + 6],
          description: arrayResult[i].substring(2, arrayResult[i].length),
          from: 'Lazada',
          url: arrayResult[i + 7].substring(1, arrayResult[i +7 ].length - 1),
        };
        finalProduct.push(product)
      }
      // for (var i = 0; i < productLazada.length; i++) {
      //   finalProduct.push(productLazada[i])
      // }
    })
    
    return finalProduct
}

async function myAsyncFunction() {
  try {
    const finalResult = await pythonScript();
    setTimeout(myFunction, 28000)
    async function myFunction() {
      console.log(finalResult)
      const finallestProduct = finalResult
      const seller = await User.findOne({ isSeller: true });
      if (seller) {
        // console.log(finallestProduct)
        const products = finallestProduct.map((product) => ({
          ...product,
          seller: seller._id
        }))
        const scrapedProducts = await Product.insertMany(products)
      }
    }
    } catch(error) {
      console.log(error)
    }
  }

  myAsyncFunction();
}))


export default searchRouter;