export const getPaises = async () => {
  const response = await fetch("https://amazon-api.sellead.com/country", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const paises = await response.json();
  
  const listaPaises = paises.map(p => ({value: p.code, label: p.name_ptbr}) )

  return listaPaises;
};

    



       

  

