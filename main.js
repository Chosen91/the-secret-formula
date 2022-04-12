// 1st form
function getText() {
    alert(text.value);
  }
  
  const text = document.querySelector(".text__gen");
  const submit = document.querySelector(".text__gen__btn");
  let genText = submit.addEventListener("click", getText);
  
  // 2nd form
  
  let sandwichIng = "";
  const ingredient__btn = document.querySelector(".ingredient__btn");
  const secondFormDiv = document.querySelector(".second__form__div");
  const secondFormDivChildren = secondFormDiv.querySelectorAll("input");
  
  function getSandwichIngredients() {
    for (let it of secondFormDivChildren) {
      if (it.checked === true) {
        sandwichIng += it.name + " ";
      } else {
        continue;
      }
    }
    alert(`Your sandwich contains: ${sandwichIng}`);
  }
  
  let getIngredients = ingButton.addEventListener(
    "click",
    getSandwichIngredients
  );
  
  //3rd form
  let hairAptArr = [];
  let third_form_div = document.querySelector(".third__form__div");
  let thirdFormDivChildren = thirdFormDiv.querySelectorAll("input");
  
  function getHairAptFunc() {
    for (let it of thirdFormDivChildren) {
      if (it.type !== "radio") {
        hairAptArr.push(it.value);
      } else if (it.type === "radio" && it.checked === true) {
        hairAptArr.push(it.name);
      }
    }
    alert(
      `Haircut scheduled for ${hairAptInfoArr[0]} with ${hairAptInfoArr[1]} for ${hairAptInfoArr[2]} hair.`
    );
  }
  const hair__btn = document.querySelector(".hair__btn");
  const getHairAptInfo = hairSubmitBtn.addEventListener(
    "click",
    getHairAptInfoFunc
  );
  //4th form
  let newAccount = [];
  const fourthFormDiv = document.querySelector(".fourth__form__div");
  const fourthFormDivChildren = fourthFormDiv.querySelectorAll("input");
  let password = document.querySelector(".password");
  let confirmPassword = document.querySelector(".confirm__password");
  console.log(fourthFormDivChildren);
  
  function newUserInfo() {
    if (password.value !== confirmPassword.value) {
      return alert("Passwords must match!!!!");
    } else {
      for (let it of fourthFormDivChildren) {
        if (it.type !== "password") {
          newAccount.push(it.value);
        }
      }
      alert(`Username: ${newAccount[0]} Email: ${newAccount[1]}`);
    }
  }
  
  const createAccount_btn = document.querySelector(".account__btn");
  const getUserInfo = createAccount_btn.addEventListener("click", newUserInfo);