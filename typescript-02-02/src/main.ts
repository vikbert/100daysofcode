class ClassBalance {
  balance = 2000;
}

function FunctionBalance() {
  this.balance = 3000;
}

const objectCreation = Object.create({
  balance: 5000
});

const balanceObjects = {
  plain: {
    balance: 4000
  },
  class: new ClassBalance(),
  function: new FunctionBalance(),
  objectCreate: objectCreation
};

const render = (function() {
  document.querySelector("#root").innerHTML = `
    <ul>
      <li>plain object:${balanceObjects.plain.balance}</li>
      <li>class object:${balanceObjects.class.balance}</li>
      <li>func object:${balanceObjects.function.balance}</li>
      <li>object.create object:${balanceObjects.objectCreate.balance}</li>
    </ul>
    `;
})();
