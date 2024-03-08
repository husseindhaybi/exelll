fetch('http://localhost:3000/allstudents')
      .then(response => response.json())
      .then(json => {
        let ul =document.getElementById('students')
        json.forEach(student => {
            let option =document.createElement('option')
            option.innerHTML=student.name
            ul.appendChild(option);
        });
      }
        )