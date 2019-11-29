import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";
import Card from "../../Components/Card";
import CardCopy from "../../Components/CardCopy";
import Footer from "../../Components/Footer"
import "./style.css";
import Skeleton from "react-loading-skeleton";
import Loaders from "../../Components/Loaders"
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      visible: 12,
      isLoading: true,
      loadmore: false
    };

    this.loadMore = this.loadMore.bind(this);
  }
  async componentDidMount () {
    await this.getProduct();
  }

  /**
   * gets a list of products
   */

  getProduct = async () => {
    await this.setState({
      isLoading: true
    });

    //url to make the post requets to
    const URL =
      "https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11";

    const data = {
      filter: "offer_benefit_type eq 'Percentage'",
      select:
        "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value"
    };

    const headers = {
      "api-key": "4F2408C83BBB69BB31AE97737ED6EE2F"
    };
    await axios
      .post(URL, data, { headers: headers })
      .then(response => {
        this.setState({
          isLoading: false,
          products: response.data.value
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };
  render() {
    const count = this.state.visible;
    const { products } = this.state;
    let product_list = products ? products.slice(0, count) : null;
     console.log(product_list);
    return (
      <div className="wrapper">
        <div className="products">
          {(product_list && !this.state.isLoading)
            ? product_list.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            : <Loaders/>}
        </div>
        <button
          type="button"
          className="btn btn-success btn-lg"
          onClick={this.loadMore}
        >
          LOAD MORE
        </button>
        <div className="row content-holder">
          <Card />
          <CardCopy />
        </div>
        <Footer />
      </div>
    );
  }
}
