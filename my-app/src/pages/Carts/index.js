export const Carts = ({cart = [], setCart }) => {
  const onItemClick = (item) => {
    const canAdd = window.confirm(`do you want to add ${item.title} to your cart ?`);
    if (canAdd) {
      setCart([item, ...cart])
    }
  }
  return (
  <div className="container bootstrap snipets">
   <h1 className="text-center text-muted">Your Cart</h1>
    <div className="">
    {cart.map(product =>  <div className="" >
       <div className="d-flex justify-content-between align-items-center border p-3 m-3 w-100">
       <div className="product tumbnail thumbnail-3 "><a href="#" onClick={() => onItemClick(product)}><img src={product.image} alt="" width={100} height={100}/></a>
       </div>
         <div className="caption">
           <h6 className="turnicate"><a href="#" onClick={() => onItemClick(product)}>{product.title}</a></h6>
         </div>
             <span className="price sale">{product.price}</span>
       </div>
     </div>)}

     <p>Total: {cart.length > 0 ? cart.reduce((a,b) => (a?.price || a) + b.price) : 0}</p>
     <div className="d-flex justify-content-end">
     <button className="btn btn-primary" onClick={() => setCart([])}>Checkout</button>
     </div>
   </div>
 </div>
  );
}