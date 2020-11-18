import Products from "./Products.json";


export function getAll(){
    return Promise.resolve(Products);
}
export function getByType(type){
    console.log(Products.find((e)=>{
        return e.type === type;
    }
    ));
    return Promise.resolve(Products.find((e)=>{
        return e.type === type;
    }
    ));
}

export function getById(id){
    const product = Products.find(item => item.id === id);

    return Promise.resolve(product);
}

export default {
    getAll,
    getById,
    getByType
}