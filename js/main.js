// Відкривання блоку з дівчиною

//Знаходимо елементи які нам потрібні
const brandImg = document.querySelector('.brand__img')
const brandButton = document.querySelector('.brand__button img')
const brandButton1 = document.querySelector('.brand__button')
const doc = document.querySelector('body')


let buttonClick = false;

brandButton.addEventListener('click', () => {
  if (!buttonClick) {
    brandImg.style.height = '300px';
    brandButton.style.rotate = '0deg';
    brandButton1.style.marginTop = '300px';
    buttonClick = true;
    
  } else {
    brandImg.style.height = '400px';
    brandButton.style.rotate = '-180deg'
    brandButton1.style.marginTop = '400px';
    buttonClick = false;
  }
});


//код для закриття картинки при кліку в іншому місці крім картинки і кнопки 

doc.addEventListener('click', (event) => {
  if (event.target !== brandImg && event.target !== brandButton) {
    brandImg.style.height = '300px';
    brandButton.style.rotate = '0deg';
    brandButton1.style.marginTop = '300px';
  }
});


//Валідація форми

const form = document.getElementById('form')
const userName = document.getElementById('form__name--name')
const userLastName = document.getElementById('form__name--last-name')
const email = document.getElementById('form__contacts--email')
const tel = document.getElementById('form__contacts--phone')
const subject = document.getElementById('form__subject--subject')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateInputs();
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
  const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(String(email).toLowerCase());
}

//видаляємо пробіли з обох сторін
const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const userLastNameValue = userLastName.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const subjectValue = subject.value.trim();


  if (userNameValue === '') {
    setError(userName, 'First Name is required');
  } else {
    setSuccess(userName);
  }

  if (userLastNameValue === '') {
    setError(userLastName, 'Last Name is required')
  } else {
    setSuccess(userLastName);
  }

  if (emailValue === '') {
    setError(email, 'Email is required')
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address')
  } else {
    setSuccess(email)
  }


  if (telValue === '') {
    setError(tel, 'Number phone is required')
  } else if (isNaN(telValue)){
    setError(tel, 'The phone number must not contain letters')
  } else if (telValue.length < 13 || telValue.length > 13 ) {
    setError(tel, 'Must be at least 13 characters')
  } else if (telValue[0] !== '+') {
    setError(tel, 'the first character must be +')
  }else {
    setSuccess(tel);
  }
  
  if (subjectValue === '') {
    setError(subject, 'Subject is required')
  } else {
    setSuccess(subject);
  }
};

// плавний скролл до форми по кнопці join hydra

const anchors = document.getElementById('down')

const scroll = (element) => {
    element.addEventListener('click', (event) => {
    event.preventDefault();
    const blockID = element.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block:'start'
    })
  })
}
scroll(anchors)

