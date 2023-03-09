export default function findAddress(zipCode: string){
    let response;

    if(zipCode){
        response = fetch(`http://viacep.com.br/ws/${zipCode}/json/`);
    }
    
    return response;
}