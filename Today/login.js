var myform=document.forms[0];
var sbtn = myForm[3];
var details = {};

sbtn.addEventListner( "click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    for (const element of myForm ){
        if( element.type == "submit"){
            continue;
        }
        details[element.name] = element.value;

    }
    console.log(details);
}