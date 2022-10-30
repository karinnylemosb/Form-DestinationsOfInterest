export async function getCidades(){
  const response = await fetch('https://amazon-api.sellead.com/city', {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })

  const cidades = await response.json();
  
  return cidades;
   
} 

