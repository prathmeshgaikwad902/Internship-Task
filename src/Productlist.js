import { useEffect, useState } from "react";
import Product from "./Product";
import useApi from "./Hooks/useApi";


function Produclist(){


   // const[product,setProduct] =useState('');
    const [url,setUrl]=useState('http://localhost:3000/products');

   const { data: products, loading } = useApi(url);
 



// useEffect(()=>{
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>setProduct(data))
//     .catch(err=>console.error(`Fetch error:`,err));
// },[url]);
// console.log(products);
    return(
                <div className="container">         
             <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products')}>All</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=mobile')}>Mobile</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=laptop')}>Laptop</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=headphones')}>Headphones</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=television')}>Television</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=camera')}>Camera</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=footwear')}>Footware</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=watch')}>Watch</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=tablet')}>Tablet</button>
            <button className="button-style"  onClick={()=>setUrl('http://localhost:3000/products?category=accessory')}>Accessory</button>
            <button className="button-style" onClick={()=>setUrl('http://localhost:3000/products?category=home appliance')}>Home Appliances</button>


        <p style={{color:'blue'}}>Card List</p>
        {loading &&<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>}
        {/* <Product  {...product[0]}/>
         {/* <Product  {...product[1]}/>
          <Product  {...product[2]}/>
           <Product  {...product[3]}/>
            <Product  {...product[4]}/>
             <Product  {...product[5]}/> 
             <Product  {...product[6]}/>
             <Product  {...product[7]}/>
             <Product  {...product[8]}/>
             <Product  {...product[9]}/> */} 
          {
  products && products.map((p, index) => {
    return <Product key={index} {...p} />;
  })
}

        
        </div>
    );
}
export default Produclist;