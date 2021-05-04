document.addEventListener("DOMContentLoaded", function () {
    const products = {
        quantity: 0,
        orders: 0,
    };
    const Package = {
        basic: 0,
        professional: 25,
        premium: 60,
        accounting: 35,
        terminal: 5,
    };

    const inputProducts = document.querySelector("#products");
    const accountingLabel = document.querySelector("#accounting");
    const terminalLabel = document.querySelector("#terminal");

    // productQuantity ----------------- orders -----------------------
    inputProducts.addEventListener("change", (e) => {
        const products = document.querySelector(`[data-id="products"]`);
        const itemCalc = products.querySelector(".item__calc");
        let itemPrice = products.querySelector(".item__price");
        products.quantity = inputProducts.value;
        itemCalc.innerHTML = products.quantity + "* $0.5";
        itemPrice.innerHTML = `$` + products.quantity * 0.5;
        products.classList.add("open");
        sum();
    });
    const inputOrders = document.querySelector("#orders");
    inputOrders.addEventListener("change", (e) => {
        const orders = document.querySelector(`[data-id="orders"]`);
        const itemCalc = orders.querySelector(".item__calc");
        const itemPrice = orders.querySelector(".item__price");
        products.orders = inputOrders.value;
        itemCalc.innerHTML = products.orders + "* $0.25";
        itemPrice.innerHTML = `$` + products.orders * 0.25;
        orders.classList.add("open");
        sum();
    });

    // checkedBox-----------------
    accountingLabel.addEventListener("click", (e) => {
        const liAccounting = document.querySelector(`[data-id="accounting"]`);
        const accountingPrice = liAccounting.querySelector(`.item__price`);
        if (accountingLabel.checked) {
            Package.accounting = accountingLabel.value;
            accountingPrice.innerHTML = Package.accounting = `$` + 35;
            liAccounting.classList.add("open");
        } else {
            liAccounting.classList.remove("open");
        }
        sum();
    });
    terminalLabel.addEventListener("click", (e) => {
        const liTerminal = document.querySelector(`[data-id="terminal"]`);
        const terminalPrice = liTerminal.querySelector(`.item__price`);
        if (terminalLabel.checked) {
            Package.terminal = accountingLabel.value;
            terminalPrice.innerHTML = Package.terminal = `$` + 5;
            liTerminal.classList.add("open");
        } else {
            liTerminal.classList.remove("open");
        }
        sum();
    });

    // select package

    const package = document.querySelector("#package");
    const inputSelect = document.querySelector(".select__input");
    const select__dropdown = document.querySelector(".select__dropdown");
    let liPackage = select__dropdown.querySelectorAll(".select__package");

    let click = 1;
    inputSelect.addEventListener("click", (e) => {
        click += 1;
        if (click % 2 === 0) {
            select__dropdown.style.display = "block";
        } else {
            select__dropdown.style.display = "none";
        }
    });
    liPackage.forEach((el) => {
        el.addEventListener("click", () => {
            const dataIdPackage = document.querySelector(`[data-id="package"]`);
            const item__calc = dataIdPackage.querySelector(".item__calc ");
            let item__price = dataIdPackage.querySelector(".item__price");
            inputSelect.innerHTML = el.innerHTML;
            item__calc.innerHTML = inputSelect.innerHTML;
            dataIdPackage.classList.add("open");
            console.log(item__price);

            if (item__calc.innerHTML === "Basic") {
                item__price.innerHTML = `$` + Package.basic;
                select__dropdown.style.display = "none";
            }

            if (item__calc.innerHTML === "Professional") {
                item__price.innerHTML = `$` + Package.professional;
                select__dropdown.style.display = "none";
            }

            if (item__calc.innerHTML === "Premium") {
                item__price.innerHTML = `$` + Package.premium;
                select__dropdown.style.display = "none";
            }
        });
    });

    const allPrices = document.querySelectorAll('.item__price')
    const totalPrice = document.querySelectorAll('.totalPrice')

    function sum() {
        const totalArr = [];
        allPrices.forEach(el => {
            if (el.innerHTML.indexOf("$") > -1) {
                totalArr.push(parseInt((el.innerHTML).match(/\d+$/)));
            }
        });
        let sum = totalArr.reduce((a, b) => {
            return a + b;
        });
        console.log(sum);
        if (sum > 0) {
            totalPrice.innerHTML = 0;
        }
    }
    sum();

});