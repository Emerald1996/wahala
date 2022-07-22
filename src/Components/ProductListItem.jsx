import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import "../Styles/ProductListItem.css"

export class ProductListItem extends Component {
  render() {
    const product = this.props.product;
    const category = this.props.category;
    

    const availabilityStock = product.inStock ? "item_list" : 'no_item'
    const noStock = !product.inStock ? 'no_stock': 'item_list'

    
    
    return (
      <>
      
      <Link to={  `/${category}/${product.id}`} className='link_tag'>
        <div className={availabilityStock}>
          <div className='products' >
            <img
                src={product.gallery[0]}
                title={product.name}
                alt={product.name}
                width="350px"
                height="200px"
              />
              <hr />
          {!product.inStock && (
              <p className={noStock}>Out of stock</p>
            )}
            <div className='product_tag'>
              <h3>{product.name}</h3>
              <p>${product.prices[0].amount}</p>
            </div>
          </div>
         </div>
        <div>
        </div>

        </Link>
      </>

    )
  }
}



export default ProductListItem