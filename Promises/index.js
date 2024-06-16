// Creating and Consuming Promises

const Promisesone = new Promise (function(resolve, reject) { 
  setTimeout(function() {
    console.log('async task to be done')
    resolve()
  },1000)
})

Promisesone.then(function() {
  console.log('task compeleted')
})

new Promise(function(resolve, reject){ 
  setTimeout(function() { 
    console.log('async task 2 is completed')
    resolve()
  }, 1000)
}).then(function () { 
  console.log('task 2 is resolved')
})


const promisefour = new Promise(function(resolve, reject) { 
  setTimeout(function() { 
    let error = false
    if (!error) { 
      resolve({username: "Rider" , password: "12231"})
    } else { 
      reject(console.log('ERROR :something is wrong'))
    }
  }, 1000)
})

promisefour.then((user) => {
  console.log(user)
  return(user.username)
}).then((username) => {
 console.log(username)
}).catch(function(error) { 
  console.log(error)
})