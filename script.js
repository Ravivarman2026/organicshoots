function discountCalculator(){
    let valueGetter = document.getElementById('input_DOB').value;
    let view_place = document.getElementById('view_point');
    // let discountToBeApplied = valueGetter /100;
    // let finalValue = 700*discountToBeApplied;
    // let totalValue = 700 -finalValue

    let finalValue =700 *(1-(valueGetter/100));

    view_place.value=finalValue;
    console.log(view_place);
}






































