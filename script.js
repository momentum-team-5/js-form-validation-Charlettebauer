const form = document.querySelector('#parking-form')
form.addEventListener('submit', function(){
    e.preventDefault()
    let total = document.querySelector('#total')
    let days = document.querySelector('#days').value
    total.innerHTML = "The cost is $" + days * 5
})





// object.addEventListener("load", myScript);

// if (confirm("Please press Make Reservation button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }

// const frm = document.querySelector('form');
// // trigger the submit event
// frm.submit();

// // trigger the reset event
// frm.reset();


    
// if (formIsValid) {
//     fetch('https://momentum-server.glitch.me/parking', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ formData: { name: nameFromYourForm }})
//         })
//         .then(res => res.json())
//         .then(res => {
//         })
//         <script>
//         $("#frmDemo").submit(function(e) {
//             e.preventDefault();
//             var name = $("#name").val();
//             var comment = $("#comment").val();
            
//             if(name == "" || comment == "" ) {
//                 $("#error_message").show().html("All Fields are Required");
//             } else {
//                 $("#error_message").html("").hide();
//                 $.ajax({
//                     type: "POST",
//                     url: "post-form.php",
//                     data: "name="+name+"&comment="+comment,
//                     success: function(data){
//                         $('#success_message').fadeIn().html(data);
//                         setTimeout(function() {
//                             $('#success_message').fadeOut("slow");
//                         }, 2000 );
        
//                     }
//                 });
//             }
//         })
//         </script>	