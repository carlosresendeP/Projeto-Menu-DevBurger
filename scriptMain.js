const list = document.querySelector('.content-list')
const buttonallProducts = document.querySelector(".all-products")
const buttonVeganProducts = document.querySelector(".vegan-products")

let mylist = ""

function showAll(products) {

    mylist = ""
    products.forEach((product) => {

        mylist += 
        `
        <li>
        <img src="${product.src}" alt="img">
        <div>
            <p>${product.name}</p>
                
            <p class="item-price">R$ ${product.price}</p>

        </div>
        </li>
        `
    });

    list.innerHTML = mylist

}

function veganFilter(){
    const vegan = menuOptions.filter((procucts) =>{
        return procucts.vegan == true
    })
    
    showAll(vegan)
}




document.body.addEventListener("load", showAll((menuOptions)))

buttonallProducts.addEventListener("click", () => showAll((menuOptions)))

buttonVeganProducts.addEventListener("click", veganFilter)

