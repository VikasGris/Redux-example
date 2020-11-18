import React , {Component} from 'react';
import Header from './Header';
import TvItem from './TvItem'
import ProductsApi from '../api/Tv';



export default class Tv extends Component {

  state = {
      products: [],
  };

  componentDidMount(){

    var arr=[];
    if(this.props.match.params.name === "tvs"){
        ProductsApi.getAll()
          .then( data => {            
            this.setState({
                products: data
            })
          });

    }else{
        ProductsApi.getAll()
          .then( data => {            
            data.filter(p =>p.type === this.props.match.params.name).map(product=>(
                arr.push(product)
            ))
            this.setState({
                products: arr
            })
          });

    }
  }
render() {
    let products=this.state.products;
  return (
      <div className="mobiles">
        <Header/>
        <h1>TVs</h1>
        <div className="row"> 
          {products.map(product=>(
              <div className={'col-2'} key={product.id}>
                <TvItem product={product} />
                {/* {product} */}
            </div>
          ))}
      </div>
  </div>
  );
}
}
