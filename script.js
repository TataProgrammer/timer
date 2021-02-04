const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 300,
        amount: 0,
        get Summ(){
            return this.price * this.amount;
        },
        get kcall(){
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ(){
            return this.price * this.amount;
        },
        get kcall(){
            return this. kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 800,
        amount: 0,
        get Summ(){
            return this.price * this.amount;
        },
        get kcall(){
            return this. kcall * this.amount;
        }
    }
}


const extraproduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: 'Салатный лист',
        price: 300,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 400,
        kcall: 30
    }
}
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
      checkExtraProduct = document.querySelectorAll('.main__product-checkbox');



   for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function(){
        plusOrMinus(this);
    })
       
   }

   function plusOrMinus(elem) {
       const parent = elem.closest('.main__product'),
       parentId = parent.getAttribute('id'),
       out = parent.querySelector('.main__product-num'),
       price = parent.querySelector('.main__product-price span'),
       kcall =parent.querySelector('.main__product-kcall span'),
       elementdate = elem.getAttribute('data-symbol');

   }
// ========================== timer =========================//

   const LVL = document.querySelector('.header__timer-extra');
   var speed = 50;


  function timer(i=0) {
    LVL.innerHTML = i;
    i++;


    if(i <= 100){
        setTimeout(() => timer(i), speed);
    }

    if(i > 50 && i < 75) {
        speed = 150;
    }else if(i > 74 && i < 90){
        speed = 250;
    }else if(i > 89){
        speed = 300;
    }
  }
  timer();
  // ========================== timer =========================//