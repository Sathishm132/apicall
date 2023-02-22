

function BasicExample() {
    function loghandler(event){
        event.preventDefault()
        const title=document.getElementById("Title").value;
        const text=document.getElementById("Text").value;
        const date=document.getElementById("date").value;
        const obj={
            title:title,
            text:text,
            date:date
        }
        console.log(obj);
    }
  return (
   <form >
    <label for="Title" >Input title</label>
    <input id="Title" type={"text"}></input><br/>
    <label for="Text">opening text</label>
    <input id="Text" type={"text"}></input><br></br>
    <label for="date">release date</label>
    <input id="date" type={"date"}></input><br/>
    <button onClick={loghandler}>Add new movies</button>
   </form>
  );
}

export default BasicExample;