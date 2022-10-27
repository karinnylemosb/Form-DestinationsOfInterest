import { useEffect, useState,  } from "react";


export default function Paises() {


  const [paises, setPaises] = useState("Paises");

  useEffect(() => {
    getPaises();
  }, []);

  const getPaises = async () => {
    const response = await fetch("https://amazon-api.sellead.com/country", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const paises = await response.json();
    setPaises(paises);

    const listaPaises = paises.map((paises) => {
      return paises.name_ptbr;
    });

    console.log(listaPaises);

  };
  
}
        

       
    



       

  



// function meuPais (paises){

//   paises.map(d => {
//     const escolherPais =[];
//     escolherPais.push({nome: d.name_ptbr });
//     return escolherPais;
//     console.log(escolherPais)
//   })
// }