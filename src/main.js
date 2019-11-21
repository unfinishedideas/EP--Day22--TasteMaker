import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ApiCall } from './apicall.js';

$(document).ready(function(){
  $(".taste").submit(function(event){
    event.preventDefault();
    let userInput = $("#userString").val();
    let type = $("#typeForm").val();
    console.log(type, userInput);
    (async () => {
      // API
      let apiCall = new ApiCall(type, userInput);
      const response = await apiCall.getTastes();
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
    }
  });
});
