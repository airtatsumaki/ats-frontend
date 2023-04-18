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

  static async postDataToApi(path, dataObj){
    try{
      const response = await axios.post(path,dataObj);
      console.log(response);
      return response
    } catch(err){
      console.log(err);
      return null;
    }
  }
}