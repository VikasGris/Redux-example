import React from "react";


export default function MobileItem(props){
    const {product} = props;

    return (
        <div style={{
            columns: '100px 2',
            borderBottom:'solid 1px',
            paddingBottom:'20px',
            paddingTop:'20px',
            width:'100%'
            }}>
            <tr>
                <img src={product.image} className="card-img-top" alt="..." />
            </tr>
            <tr> 
                <div className="card-body">
                    <h5 className="card-title" style={{
                        textAlign:'left',
                        fontSize:'20px'
                    }}>
                    {product.name}
                    </h5>
                <ul style={{
                    textAlign:'left'
                    }}>
                    <li>{product.price}</li>
                    <li> {product.details}</li>
                    <li>{product.feature}</li>
                    <li>{product.os}</li>
                    <li>{product.Warranty}</li>{}
                    
                    
                </ul>  
            </div>
            </tr>
            <br/>
        </div>
    );
    }
    