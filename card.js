
var product_total_amt = document.getElementById('product_total_amt');
var total_cart_amt = document.getElementById('total_cart_amt');
var shipping_charge = document.getElementById('shipping_charge');
var discount_code1 = document.getElementById('discount_code1');

const decreaseNum = (incdec, itemprice) =>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    
    if(itemval.value <= 0){
        itemval.value = 0;
        alert('Nagetive quantity not allowed');
    }else{
        itemval.value =parseInt(itemval.value) -1;
        itemval.background = '#fff'
        itemval.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) -15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) -15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
    }
}
const increaseNum = (incdec, itemprice) =>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    
    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background= 'red';
        itemval.style.color = '#fff';
    }else{
        itemval.value =parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) +15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) +15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
    }
}

let discount_code = () =>{
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discount_code1.value == 'MrSSK'){
        let newtotalamt = totalamtcurr -15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = 'Congratulation! code is valid';
    }else{
        error_trw.innerHTML = 'Try agian! may be you enter a inncorrect code';
    }
}