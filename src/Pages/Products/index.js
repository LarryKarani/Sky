import React, { Component } from 'react'
import axios from "axios";
import ProductCard from '../../Components/ProductCard'
import './style.css'
export default class Products extends Component {
    state = {
        preview_products: null,
        isLoading: false
    }
    componentDidMount () {
        this.getProduct()
    }

    /**
     * gets a list of products 
     */

    getProduct = async () => {
        await this.setState({
            isLoading: true
        })

        //url to make the post requets to
        const URL = "https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11"

        const  data = {     
        "filter": "offer_benefit_type eq 'Percentage'",
        "select": "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value"
       }

        const headers = {
            "api-key": "4F2408C83BBB69BB31AE97737ED6EE2F"
        }
        await axios
          .post(URL, data, { headers: headers })
          .then(response => {
           this.setState({
             isLoading: false,
             products: response.data.value,
             preview_products: response.data.value.slice(0, 12)
           });
           console.log("Success", response.data.value.slice(0, 10));
          })
          .catch(error => {
           console.log('Error', error)
          });
    }
    render() {
        const product_list = this.state.products
        const {preview_products} = this.state
        return (
          <div className="products">
            {preview_products &&
              preview_products.map(product => (
                <ProductCard product={product} />
              ))}
          </div>
        );
    }
}
