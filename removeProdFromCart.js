import { getCartProductFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

  export const removeProdFromCart= (id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd)=> curProd.id=== id);

    localStorage.setItem("carProductsLS",JSON.stringify(arrLocalStorageProducts));

    let removeDiv = document.getElementById('card${id}');
    if(removeDiv){
        removeDiv.remove();
        showToast("delete", id);
    }

    updateCartProductTotal();

    updateCartValue(cartProducts); 
     
  };