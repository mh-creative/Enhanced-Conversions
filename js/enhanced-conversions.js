//Alter this Script to fit your requirements.

//Description - The code initialises a dataLayer array if it doesn't already exist and sets up a jQuery function that runs when the document is ready. It checks for the presence of a form with the ID 'e.g. contact'. If the form exists, it defines a function to extract data from the form fields and push this data to the dataLayer. It then attaches a submit event listener to the form to prevent the default submission, serialise the form data, and call the function to send the data to the dataLayer.

//Description - Enhanced Conversions configuration tutorial using Google Tag Manager - https://www.youtube.com/watch?v=QbFMSEXEt5g

//Contact Form

window.dataLayer = window.dataLayer || [];

jQuery(document).ready(function($) {
    // Check if the form with ID 'contact' exists on the page
    var contactForm = $('#contact');
    
    if (contactForm.length > 0) {
        // Define function to send data to data layer
        function sendDataToDataLayer(formData) {
            // Extract required fields
            var name, number, email, address, subject, message;
            formData.forEach(function(field) {
                if (field.name === 'form_fields[email]') {
                    email = field.value;
                } else if (field.name === 'form_fields[name]') {
                    name = field.value;
                } else if (field.name === 'form_fields[field_176a14b]') {
                    number = field.value;
                } else if (field.name === 'form_fields[field_849fb1f]') {
                    address = field.value;
                } else if (field.name === 'form_fields[field_c3fad76]') {
                    subject = field.value;
                } else if (field.name === 'form_fields[message]') {
                    message = field.value;
                }
            });

            // Create the data layer object
            var formDataObj = {
                'event': 'formSubmissionContact',
                'formName': 'dromona-contact-page',
                'name': name,
                'number': number,
                'email': email,
                'address': address,
                'subject': subject,
                'message': message
            };

            console.log("Form Data: ", formDataObj); // Log the form data to check

            // Convert the data layer object to a JSON string
            var dataLayerScript = '<script>window.dataLayer = window.dataLayer || []; dataLayer.push(' + JSON.stringify(formDataObj) + ');<\/script>';

            // Append the data layer script to the body
            $('body').append(dataLayerScript);
        }

        // Attach submit event listener to the form with ID 'contact'
        contactForm.on('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            var formData = $(this).serializeArray(); // Get form data as an array
            
            sendDataToDataLayer(formData); // Call the function to send data to data layer
        });
    }
});



//Newsletter - Static Form

window.dataLayer = window.dataLayer || [];

jQuery(document).ready(function($) {
    // Check if the newsletter form exists on the page
    if ($('#newsletter_static').length > 0) {
        // Define function to send data to data layer
        function sendDataToDataLayer(formData) {
            // Extract email field
            var email;
            formData.forEach(function(field) {
                if (field.name === 'form_fields[email]') {
                    email = field.value;
                }
            });

            // Create the data layer object
            var formDataObj = {
                'event': 'formSubmissionNewsletterBlock',
                'formName': 'form-recipes-subscribe-section',
                'email': email
            };

            console.log("Form Data: ", formDataObj); // Log the form data to check

            // Convert the data layer object to a JSON string
            var dataLayerScript = '<script>window.dataLayer = window.dataLayer || []; dataLayer.push(' + JSON.stringify(formDataObj) + ');<\/script>';

            // Append the data layer script to the body
            $('body').append(dataLayerScript);
        }

        // Attach submit event listener to the newsletter form
        $('#newsletter_static').on('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            var formData = $(this).serializeArray(); // Get form data as an array
            
            sendDataToDataLayer(formData); // Call the function to send data to data layer
        });
    }
});



//Newsletter - Navigation Form

window.dataLayer = window.dataLayer || [];

jQuery(document).ready(function($) {
    // Check if the newsletter form exists on the page
    if ($('#newsletter_header').length > 0) {
        // Define function to send data to data layer
        function sendDataToDataLayer(formData) {
            // Extract email field
            var email;
            formData.forEach(function(field) {
                if (field.name === 'form_fields[email]') {
                    email = field.value;
                }
            });

            // Create the data layer object
            var formDataObj = {
                'event': 'formSubmissionNavigationForm',
                'formName': 'newsletter-navigation-form',
                'email': email
            };

            console.log("Form Data: ", formDataObj); // Log the form data to check

            // Convert the data layer object to a JSON string
            var dataLayerScript = '<script>window.dataLayer = window.dataLayer || []; dataLayer.push(' + JSON.stringify(formDataObj) + ');<\/script>';

            // Append the data layer script to the body
            $('body').append(dataLayerScript);
        }

        // Attach submit event listener to the newsletter form
        $('#newsletter_header').on('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            var formData = $(this).serializeArray(); // Get form data as an array
            
            sendDataToDataLayer(formData); // Call the function to send data to data layer
        });
    }
});


// Newsletter - Pop Up

window.dataLayer = window.dataLayer || [];

jQuery(document).ready(function($) {
    // Attach submit event listener to a static parent element (in this case, 'body')
    $('body').on('submit', '#newsletter_popup', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var formData = $(this).serializeArray(); // Get form data as an array
        
        // Define function to send data to data layer
        function sendDataToDataLayer(formData) {
            // Extract email field
            var email;
            formData.forEach(function(field) {
                if (field.name === 'form_fields[email]') {
                    email = field.value;
                }
            });

            // Create the data layer object
            var formDataObj = {
                'event': 'formSubmissionNewsletterPopUp',
                'formName': 'form-recipes-subscribe',
                'email': email
            };

            console.log("Form Data: ", formDataObj); // Log the form data to check

            // Convert the data layer object to a JSON string
            var dataLayerScript = '<script>window.dataLayer = window.dataLayer || []; dataLayer.push(' + JSON.stringify(formDataObj) + ');<\/script>';

            // Append the data layer script to the body
            $('body').append(dataLayerScript);
        }
        
        sendDataToDataLayer(formData); // Call the function to send data to data layer
    });
});