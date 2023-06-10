

document.addEventListener('DOMContentLoaded', getExpenses);


document.getElementById("submitbtn").addEventListener("click",(event)=>{
  event.preventDefault()
  addExpense();
});



async function deleteExpense(e){
  const elements=e.parentElement.parentElement.parentElement.children;
  const id=elements[0].textContent;
  console.log(id)
  await axios.get('http://localhost:3300/delete/'+id);
  getExpenses();
}

async function getExpenses(){
  try{
      let obj=await axios.get('http://localhost:3300/');
      console.log('inside axios get');
      console.log(obj)
      displayHome(obj.data);
  }catch(err){
      console.log(err);
  }
  
}


async function addExpense(){
  //e.preventDefault();
  let itemname = document.querySelector('#itemname').value;
  let cost = document.querySelector('#cost').value;

  let obj = {
      "itemname": itemname,
      "cost": cost,
  }

  try {
    console.log('inside try');
    console.log(obj);
    await axios.post('http://localhost:3300/addExpense', obj);
    location.reload();
    } catch (err) {
    console.log(err);
  }

}

async function displayHome(obj){

  let listParent = document.querySelector('.list-group');
  let listChildren = document.querySelectorAll('.list-group-item');
  listChildren.forEach((listChild)=>{
    listChild.remove();
  })

  let text = "";

  for (let i = 0; i < obj.length; i++) {
        text += `<li class="list-group-item"><div id="itemID" style="display: none;">${obj[i].id}</div> 
        <div class="row align-items-center">
        <div class="col">Item : ${obj[i].itemname}</div>
        <div class="col">Cost : ${obj[i].cost}</div>
        <div class="col">
            <button type="button" class="btn btn-primary delete">Delete</button>
        </div>
           
    </li>`;
    }

    listParent.innerHTML = text;

    let deletebtns=document.querySelectorAll(".delete");
    deletebtns.forEach((deletebtn)=>{
      deletebtn.addEventListener("click",(event)=>{
        deleteExpense(deletebtn);
      });
    })
};


