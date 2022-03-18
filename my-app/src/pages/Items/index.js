export const Items = ({products = [], cart = [], setCart }) => {
  const onItemClick = (item) => {
    const canAdd = window.confirm(`do you want to add ${item.title} to your cart ?`);
    if (canAdd) {
      setCart([item, ...cart])
    }
  }
  return (
    <div className="container bootstrap snipets">
   <h1 className="text-center text-muted">Product catalog</h1>
    <div className="row flow-offset-1">
    {products.map(product =>  <div className="col-xs-6 col-md-4 border m-3 flex-" style={{
         width: '20%',
         maxheight: '20%',
       }}>
       <div >
       <div className="product tumbnail thumbnail-3 w-4"><a href="#" onClick={() => onItemClick(product)}><img src={product.image} alt="" width={100} height={100}/></a>
         <div className="caption">
           <h6 className="turnicate"><a href="#" onClick={() => onItemClick(product)}>{product.title}</a></h6>
             <span className="price sale">{product.price}</span>
         </div>
       </div>
       </div>
     </div>)}
   </div>
 </div>
  );
}

