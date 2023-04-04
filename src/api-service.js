import axios from "axios";

export class API{
  static async getDataFromApi(path){
    try{
      const response = await axios.get(path);
      console.log(response);
      return response
    } catch(err){
      console.log(err);
      return null;
    }
  }
}