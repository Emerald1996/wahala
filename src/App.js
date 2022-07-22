import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import Navbar from "./Components/Navbar";
import CategoryPage from "./Pages/CategoryPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import Home from "./Pages/Home";


export const GET_DATA = gql`
  query {
    categories {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          type
          name
          items {
            value
            displayValue
            id
          }
        }
      }
    }
  }
`;

export class App extends Component {
  render() {
    return (
      <div>
        <Query query={GET_DATA} >
          {({ error, loading, data }) => {
            if (error) return <Error />;
            if (loading) return <Loading />;
            if (data)
              return (
                <>
                  
                 {data.categories.map((category) => {
                  <Navbar categories={data.categories} />
                      return (
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route
                            path={`/${category.name}`}
                            element={
                              <CategoryPage
                                products={category.products}
                                name={category.name}
                              />
                            }
                          />

 
                              <Route
                                path={`/${category.name}/:productId`}
                                key={category.name}
                                element={<ProductDescriptionPage />}
                              />
                            
                          
                        </Routes>
                      );
                    })}
                  
                </>
              );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
