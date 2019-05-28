import fetch from 'cross-fetch';
var postPromise2 = fetch('https://randomuser.me/api/');

var postPromise2 = fetch('https://randomuser.me/api/');

postPromise2.then((data) => data.json())
.then(data => data.results.map (obj => {return {name:obj.name, location:obj.location}} ) )
.then(data=> console.log(data))
.catch( (err) => console.log(err) )

postPromise2.then((data) => data.json())
.then(data => data.results.map (
    function(obj) {
        console.log ( { name:obj.name , location:obj.location})
    }
    ) )
.catch( (err) => console.log(err) )