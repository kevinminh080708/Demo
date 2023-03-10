let http = new XMLHttpRequest();
http.open('get', '/json/index.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `  
            <div class="products">
            
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}