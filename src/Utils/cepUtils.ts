function zipCodeValidate(zipCode:string){

    const regexCEP = /^[0-9]{5}-?[0-9]{3}$/;

    if (!regexCEP.test(zipCode)) {
        return false;
    }

    return true;
}

export { zipCodeValidate };