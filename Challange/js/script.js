var name,role,availability,age,locationInput,years_of_experience,email;
    
    function getData(){
        name = document.getElementById("name").value;
        role = document.getElementById("role").value;
        availability = document.getElementById("availability").value;
        age = document.getElementById("age").value;
        locationInput = document.getElementById("locationInput").value;
        years_of_experience = document.getElementById("experience").value;
        email = document.getElementById("email").value;

        setValue();
    }

    function setValue(){
        document.getElementById("name_value").innerHTML = name;
        document.getElementById("role_value").innerHTML = role;
        document.getElementById("availability_value").innerHTML = availability;
        document.getElementById("usia_value").innerHTML = age;
        document.getElementById("location_value").innerHTML = locationInput;
        document.getElementById("experience_value").innerHTML = years_of_experience;
        document.getElementById("email_value").innerHTML = email;

        resetForm();
    }

    function resetForm(){
        document.getElementById("name").value = "";
        document.getElementById("role").value = "";
        document.getElementById("availability").value = "";
        document.getElementById("age").value = "";
        document.getElementById("locationInput").value = "";
        document.getElementById("experience").value = "";
        document.getElementById("email").value = "";

        alert_sukses();
    }

    function alert_sukses(){
        Swal.fire({
            title: "Success",
            text: "Data Berhasil Diubah!",
            icon: "success"
          });
    }
