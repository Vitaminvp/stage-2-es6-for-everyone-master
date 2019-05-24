import { callApi } from "../helpers/apiHelper";

class FighterService {

  async getFighters() {
    try {
      // const endpoint = "fighters.json";
      const endpoint = "fighters";
      const apiResult = await callApi(endpoint, "GET");
      //return JSON.parse(atob(apiResult.content));
      return JSON.parse(apiResult);
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, "GET");
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
