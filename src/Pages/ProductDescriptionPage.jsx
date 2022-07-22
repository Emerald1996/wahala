import React, { Component } from 'react'
// import ProductPageInfo from '../Components/ProductPageInfo'
import { gql } from '@apollo/client'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import { Query } from '@apollo/client/react/components'
import "../Styles/ProductDescriptionPage.css"
import ProductChoice from '../Components/ProductChoice'

export const GET_PRODUCT = gql`
 query eachProduct($productId: String!) {
        product(id: $productId) {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency{
              label
              symbol
            }
            amount
          }
          brand
        }
        
      }
`

export class ProductDescriptionPage extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      imageArrIndex: 0,
   }
 }

 imageOnclick = (index) =>{
    this.setState({imageArrIndex: index})
  }
  render() {
    
    return (
      <>

    <Query query={GET_PRODUCT} variables={{ productId: 'jacket-canada-goosee'}}>
      {({data, error, loading})=>{
        if (error) return <Error />;
        if (loading) return <Loading />;
        if (data) console.log(data)
         return (
          <>
         <div className="product_desc_page">

          <div className='product_image'>
            <img src={data.product.gallery[this.state.imageArrIndex]} alt={data.product.name} />
             
            <div className='small_image'>
            {data.product.gallery.map((img, index)=>{
               return <img src={img} key={img}  alt={img}  onClick={()=>this.imageOnclick(index)}/>
            })}
            </div>
          </div>

          <div className="product_info">
              <h1>{data.product.name}</h1>
              <h2>Price: ${data.product.prices[0].amount}</h2>
              <h2>Brand: ${data.product.brand}</h2>
              <ProductChoice data={data.product}/>
              
          </div>

         </div>

          </>
         )
      }}
    </Query>

      </> 
    )
  }
}
   
export default ProductDescriptionPage

     

