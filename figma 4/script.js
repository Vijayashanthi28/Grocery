function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('active');
}
// Show popup
        function showPopup() {
            document.getElementById('popup-overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close popup
        function closePopup() {
            document.getElementById('popup-overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close popup when clicking outside
        function closePopupOutside(event) {
            if (event.target.id === 'popup-overlay') {
                closePopup();
            }
        }

        // Account popup functions
        function showAccountPopup() {
            document.getElementById('account-popup-overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAccountPopup() {
            document.getElementById('account-popup-overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeAccountPopupOutside(event) {
            if (event.target.id === 'account-popup-overlay') {
                closeAccountPopup();
            }
        }
        // Login popup functions
        function showLoginPopup() {
            document.getElementById('login-popup-overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLoginPopup() {
            document.getElementById('login-popup-overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeLoginPopupOutside(event) {
            if (event.target.id === 'login-popup-overlay') {
                closeLoginPopup();
            }
        }

         let cartVisible = false;

        function toggleCart() {
            cartVisible = !cartVisible;
            if (cartVisible) {
                showCart();
            } else {
                hideCart();
            }
        }

        function showCart() {
            cartVisible = true;
            document.body.style.overflow = 'hidden';
            const overlay = document.getElementsByClassName('cart-overlay')[0];
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
        }

        function closeCart() {
            hideCart();
        }

        function hideCart() {
            cartVisible = false;
            document.body.style.overflow = 'auto';
            const overlay = document.getElementsByClassName('cart-overlay')[0];
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
   

        //Payment options
         var selectedPaymentMethod = 'credit';
        
        function selectPayment(method) {
            selectedPaymentMethod = method;
            
            // Update UI
            var options = document.getElementsByClassName('payment-option');
            for (var i = 0; i < options.length; i++) {
                if (options[i].getAttribute('onclick').includes(method)) {
                    options[i].classList.add('selected');
                    options[i].querySelector('input').checked = true;
                } else {
                    options[i].classList.remove('selected');
                    options[i].querySelector('input').checked = false;
                }
            }
        }
        
        function processPayment() {
            if (selectedPaymentMethod === 'paypal') {
                window.location.href = 'confirmed.html';
            } else if (selectedPaymentMethod === 'credit') {
                window.location.href = 'credit card.html';
            }
        }
       

      

        


        