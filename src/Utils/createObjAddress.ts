import type IAddress from '../interfaces/IAddress';

export default function createObjAddress(address: any): IAddress {
    return {
      zipCode: address.cep,
      address: address.logradouro,
      compl: address.complemento,
      neighborhood: address.bairro,
      location: address.localidade,
      state: address.uf
    };
  }