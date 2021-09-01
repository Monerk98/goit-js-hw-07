const focus = document.querySelector('#validation-input')

const colorChange = () => {
    let valueLength = focus.value.length;
    const valueDataAtribute = Number(focus.getAttribute("data-length"));

  if(valueDataAtribute === valueLength){
      return validBorder() 
  } else {
      return invalidBorder();
  }
    //  addValideBorderColor() : addInavalidBorderColor();
  }


  function validBorder () {
    focus.classList.remove('invalid');
    focus.classList.add('valid');
  }
  
  function invalidBorder() {
    focus.classList.remove('valid');
    focus.classList.add('invalid');
  }
  
  focus.addEventListener('focus', colorChange);

//   console.log(focus)




