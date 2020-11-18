import Tvs from './Tvs.json';

export function getAll(){
    return Promise.resolve(Tvs);
}
export function getByType(type){
    console.log(Tvs.find((e)=>{
        return e.type === type;
    }
    ));
    return Promise.resolve(Tvs.find((e)=>{
        return e.type === type;
    }
    ));
}

export function getById(id){
    const product = Tvs.find(item => item.id === id);

    return Promise.resolve(product);
}

export default {
    getAll,
    getById,
    getByType
}