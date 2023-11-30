document.addEventListener('DOMContentLoaded', function () {

   //here is elment which you want to update the total value
    let total = document.querySelector('.total');

    // get all checkboxes
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // if you have a radio then you have to grab another variable 
    let radios = form.querySelectorAll('input[type="radio"]');

    //this is dynamically updated and add or substract a values which comes from selected checbox or radio
    let totalValue = 0;

    //loop through the checkboxes
    checkboxes.forEach(function (checkbox) {

        //add eventlistener individual checkboxes
        checkbox.addEventListener('change', function () {

            //call update function
            updateTotal();
        });
    });


      //loop through the radio
    radios.forEach(function (radio) {

        //add eventlistener individual radio
        radio.addEventListener('change', function () {

            //call update function
            updateTotal();
        });
    });

    //this function works when checkbox or radio is checked then get their values in @totalValue variable
    function updateTotal() {
        totalValue = 0;

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                totalValue += parseFloat(checkbox.value) || 0;
            }
        });

        radios.forEach(function (radio) {
            if (radio.checked) {
                totalValue += parseFloat(radio.value) || 0;
            }
        });

        //update and display you showing element where you want to display selected value
        if(total){
            if(totalValue > 0){

                total.innerHTML = totalValue;
            }else{
                total.innerHTML = '0';

            }
        }
    }
});
