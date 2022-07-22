// import React, { Component } from 'react'


// export class ProductPageInfo extends Component {
//   componentDidMount(){
//     document.title = 'Product'
//   }
 
//   render() {
//     const product = this.props.product
//     return (
//       <>
      
//         <div className='product_page_info'>
//         <div>
//             {product.map((image)=>{
//                 return (
                
//                 <img
//                   src={image}
//                   key={image}
//                   alt={product.name}
//                   title={product.name}
//                   width="79"
//                   height="80"
                  
//                 />
//                 )
//             })}
//         </div>

//         <div >
//             <img
//               src={this.state.cover}
//               alt={product.name}
//               title={product.name}
//               width="610"
//               height="511"
//               />
//           </div>
//       </div>

//       <aside>
//         <h1>{product.name}</h1>
//         <h2>{product.brand}</h2>
//       </aside>

//       </>
//     )
//   }
// }

// export default ProductPageInfo