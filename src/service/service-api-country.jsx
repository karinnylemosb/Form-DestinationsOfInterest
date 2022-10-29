import { useEffect, useState,  } from "react";


export function Paises() {
   
  const [paises, setPaises] = useState("Paises");

  useEffect(() => {
     getPaises();
  }, []);

}
        
export const getPaises = async () => {
  const response = await fetch("https://amazon-api.sellead.com/country", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const paises = await response.json();
  
   const listaPaises = paises.map((paises) => {
        return paises.name_ptbr;
  });

  return listaPaises;
};

    



       

  


