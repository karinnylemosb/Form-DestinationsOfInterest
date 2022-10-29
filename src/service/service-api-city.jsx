import { Paises } from "./service-api-country";


export const getCidades = async () => {
  const response = await fetch("https://amazon-api.sellead.com/city", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const cidades = await response.json();
  
  const listaCidades = cidades.map((cidades) => {
        return cidades.name;  });

   return listaCidades;
};
console.log(getCidades);

  
export function getCidadesById(code){
  const paisEscolhido = Paises.code
  const listaCidades = paisEscolhido.map(() => {
    
    return listaCidades;
    
  }) 
} 