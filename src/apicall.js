export class ApiCall{
  constructor(type, userString){
    this.type = type;
    this.userString = userString;
  }
  async getTastes(){
    try {
      console.log(`https://tastedive.com/api/similar?q=${this.userString}&type=${this.type}&k${process.env.API_KEY}&info=1&limit=5`);
      let response = await fetch(`https://tastedive.com/api/similar?q=${this.userString}&type=${this.type}&k${process.env.API_KEY}&info=1&limit=5`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
