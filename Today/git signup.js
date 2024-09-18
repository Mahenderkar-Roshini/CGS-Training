let currentStep = 1;

        function nextStep() {
            let valid = false;
            if (currentStep === 1) {
                valid = document.getElementById("name").value !== "";
            } else if (currentStep === 2) {
                valid = document.getElementById("email").value !== "";
            } else if (currentStep === 3) {
                valid = document.getElementById("password").value !== "";
            }

            // Proceed to the next step if valid
            if (valid) {
                // Show the next step and hide the Next button if on the last step
                document.getElementById("step" + currentStep).classList.remove("hidden");
                currentStep++;

                if (currentStep <= 4) {
                    document.getElementById("step" + currentStep).classList.remove("hidden");
                }

                // Move the "Next" button to the next step or show the Submit button if on the last step
                if (currentStep === 4) {
                    document.getElementById("nextBtn").classList.add("hidden");
                    document.getElementById("submitBtn").classList.remove("hidden");
                }
            } else {
                alert("Please fill out the required field.");
            }
        }

        function submitForm() {
            const age = document.getElementById("age").value;
            if (age !== "") {
                alert("Form Submitted Successfully!");
                resetForm(); // Optionally reset the form after submission
            } else {
                alert("Please fill out the required field.");
            }
        }

        function resetForm() {
            // Reset all form values and return to the first step
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("age").value = "";

            // Hide all steps except the first one
            currentStep = 1;
            document.getElementById("step1").classList.remove("hidden");
            document.getElementById("step2").classList.add("hidden");
            document.getElementById("step3").classList.add("hidden");
            document.getElementById("step4").classList.add("hidden");

            // Show the Next button and hide the Submit button
            document.getElementById("nextBtn").classList.remove("hidden");
            document.getElementById("submitBtn").classList.add("hidden");
        }