// main variables
let theInput=document.querySelector('#searchInput');  
let button=document.querySelector('#btn');  
let txtArea = document.querySelector('#comment');  

button.onclick= function (){
  getRepos();
}

function getRepos(){
  if(theInput.value==""){
    txtArea.innerText="Please write input";
  }
  else{
     
    fetch(`https://www.swapi.tech/api/people/?name=${theInput.value}`)
      .then((response) => response.json())
      .then((data)=> {
        txtArea.innerText= "" ;

     
        console.log(data);
        let results = `Height: ${data.result[0].properties.height}, mass: ${data.result[0].properties.mass} kg, gender: ${data.result[0].properties.gender}, haircolor: ${data.result[0].properties.hair_color}`;        
        
      
        txtArea.innerText = results;
          
       /*   let mainDiv= document.createElement("div");

          let repoName=document.createTextNode(repo.name);

          mainDiv.appendChild(repoName);
          console.log(repoName);
          txtArea.appendChild(mainDiv);*/
        });
      
      
      
      
  }
}
