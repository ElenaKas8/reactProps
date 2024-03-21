import Product from "./components/Product";

function App() {

  let products = [
    {id: 1, title: 'Яблоко', price: 300, img: 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/apple-600-600x600.jpeg' },
    {id: 2, title: 'Банан', price: 400, img: 'https://freepngdownload.com/image/thumb/free-banana-png.png' },
    {id: 3, title: 'Монитор', price: 2500, img: 'https://images.icecat.biz/img/gallery_mediums/img_1656299_medium_1479389615_8295_15686.jpg' },
  ]

  return (
    <div className="product_wrapper">
      {/* 
      <Product title='Яблоко' price={300} img='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/apple-600-600x600.jpeg'/>
      <Product title='Банан' price={400} img='https://freepngdownload.com/image/thumb/free-banana-png.png'/>
      <Product title='Монитор' price={2500} img='https://images.icecat.biz/img/gallery_mediums/img_1656299_medium_1479389615_8295_15686.jpg'/> 
      */}

      {products.map( elem => <Product key={elem.id} title={elem.title} price={elem.price} img={elem.img}/>)} 


    </div>
  );
}

export default App;