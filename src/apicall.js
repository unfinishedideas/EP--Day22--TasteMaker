export class ApiCall{
  constructor(type, userString, key){
    this.key = key;
    this.type = type;
    this.userString = userString;
  }
  async getTastes(){
    try {
      let response = `https://tastedive.com/api/similar?q=${this.userString}&type=${this.type}&k${this.key}&info=1&limit=5`;
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
