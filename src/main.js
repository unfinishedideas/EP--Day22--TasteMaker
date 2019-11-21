import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './apicall.js';

$(document).ready(function(){
  $(".taste").submit(function(event){
    event.preventDefault();
    (async () => {
      // API
      let key = process.env.API_KEY;
      let apiCall = new ApiCall(key);
      const response = await apiCall.getTastes();
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
    }
  });
});
