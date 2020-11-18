import React , {Component} from 'react';
import Header from './Header';
import MobileItem from './MobileItem'
import ProductsApi from '../api/Products';



export default class Electronics extends Component {

  state = {
      products: [],
  };

  componentDidMount(){

    var arr=[];
    if(this.props.match.params.name === "mobiles"){
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
        <h1>Mobiles</h1>
        <div className="row"> 
          {products.map(product=>(
              <div className={'col-2'} key={product.id}>
                <MobileItem product={product} />
                {/* {product} */}
            </div>
          ))}
      </div>
  </div>
  );
}
}
