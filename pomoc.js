document.addEventListener('DOMContentLoaded', () => {
    const product = document.querySelector('[data-id="products"]');
    const quantityInput = document.querySelector("#products");
    const productPrice = document.querySelector(".product__price");
    const productCalc = document.querySelector(".product__calc");
    const orders = document.querySelector('[data-id="orders"]');
    const ordersInput = document.querySelector("#orders");
    const ordersPrice = document.querySelector(".orders__price");
    const ordersCalc = document.querySelector(".orders__calc");
    const selectInput = document.querySelector(".select__input");
    const dropdown = document.querySelector(".select__dropdown");
    const allOptions = dropdown.querySelectorAll('[data-id="option"]');
    const namePackage = document.querySelector(".package__name");
    const pricePackage = document.querySelector(".package__price");
    const package = document.querySelector('[data-id="package"]');
    const checkboxAccounting = document.querySelector("#accounting");
    const accounting = document.querySelector('[data-id="accounting"]');
    const accountingInput = document.querySelector(".accounting__input");
    const checkboxTerminal = document.querySelector("#terminal");
    const terminal = document.querySelector('[data-id="terminal"]');
    const terminalInput = document.querySelector(".terminal__input");
    const allPrices = document.querySelectorAll(".item__price");
    const totalPrice = document.querySelector(".summary__total");
    const total = document.querySelector(".total__price");
    dropdown.style.display = "none";

    quantityInput.addEventListener("input", e => {
        productCalc.innerHTML = quantityInput.value + ` * ` + `$` + 3;
        productPrice.innerHTML = `$` + quantityInput.value * 3;

        if (quantityInput.value > 0) {
            product.classList.add("open");
        } else {
            product.classList.remove("open");
        }
        sum();
    })
    ordersInput.addEventListener("input", e => {
        ordersCalc.innerHTML = ordersInput.value + ` * ` + `$` + 2;
        ordersPrice.innerHTML = `$` + ordersInput.value * 2;

        if (ordersInput.value > 0) {
            orders.classList.add("open");
        } else {
            orders.classList.remove("open");
        }
        sum();
    })

    let click = 1;
    selectInput.addEventListener("click", e => {
        click += 1;
        if (click % 2 === 0) {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    })
    allOptions.forEach(el => {
        el.addEventListener("click", () => {
            selectInput.innerHTML = el.innerHTML;
            namePackage.innerHTML = selectInput.innerHTML;

            if (namePackage.innerHTML === "Basic") {
                pricePackage.innerHTML = `$` + 0;
                dropdown.style.display = "none";
            }
            if (namePackage.innerHTML === "Professional") {
                pricePackage.innerHTML = `$` + 25;
                dropdown.style.display = "none";
            }
            if (namePackage.innerHTML === "Premium") {
                pricePackage.innerHTML = `$` + 60;
                dropdown.style.display = "none";
            }
            if (namePackage.innerHTML === "Basic" || namePackage.innerHTML === "Professional" || namePackage.innerHTML == "Premium") {
                package.classList.add("open");
            }
            sum();
        })
    })
    checkboxAccounting.addEventListener("change", e => {
        if (checkboxAccounting.checked) {
            accounting.classList.add("open");
            accountingInput.innerHTML = `$` + 20;
        } else {
            accounting.classList.remove("open");
            accountingInput.innerHTML = `$` + 0;
        }
        sum();
    })
    checkboxTerminal.addEventListener("change", e => {
        if (checkboxTerminal.checked) {
            terminal.classList.add("open");
            terminalInput.innerHTML = `$` + 20;

        } else {
            terminal.classList.remove("open");
            terminalInput.innerHTML = `$` + 0;
        }
        sum();
    })


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
            total.innerHTML = `$` + sum;
            totalPrice.classList.add("open");
        }
    }
    sum();
});