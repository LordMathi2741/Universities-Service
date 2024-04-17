import axios from 'axios';
export class ApiFakeService{
  async getAll(){
    const response = await axios.get('http://universities.hipolabs.com/search?country=peru');
    return response.data;
  }
}
