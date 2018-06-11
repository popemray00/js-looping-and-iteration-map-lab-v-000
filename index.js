// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (name) {
    return name.toLowerCase()
  })
}

function nameToAttributes(arr) {
  return arr.map(function(name) {
    const driverFirst = name.split(' ')[0]
    const driverLast = name.split(' ')[1]
    return {firstName: driverFirst, lastName: driverLast}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`

  })

=======
    
  })
  
>>>>>>> d614b0fe9223d34900635ad29c5c11b98d58ef21
}
