import api from "../api";

// search for car brands
export const getBrands =  async () => {
  try {
     const response = await api.get("/OnlineChallenge/Make")
     return response
  } catch (error) {
    console.log(`error: ${error}`);
  } 
  
};

// search for car models depending on the brand id
export const getModels =  async (idBrand) => {

  try {
     const response = await api.get(`/OnlineChallenge/Model?MakeID=${idBrand}`)
     return response
  } catch (error) {
    console.log(`error: ${error}`);
  } 
  
};

// search for the car version depending on the car model id
export const getVersion =  async (idModel) => {

  try {
     const response = await api.get(`/OnlineChallenge/Version?ModelID=${idModel}`)
     return response
  } catch (error) {
    console.log(`error: ${error}`);
  } 
  
};