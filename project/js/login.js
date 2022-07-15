const url = 'https://json-server-production-cf59.up.railway.app/usuarios';
let users = [];

$(window).on("load", (function() {

    $('#formulario').on('submit', function(e) {

        e.preventDefault();


        axios.get(`${url}`)
            .then( response => {
                //console.log(response.data)
                //console.log(response.data[0].username)
                users = response.data;
                signup(...users)
            })
            .catch( err => {
                console.log(err)
            })

        //axios.post(`${url}`, {create_UUID, usuario, pass});
    })
}))

const signup = () => {


    var element = document.getElementById('form-alert');
    var wrapper = document.getElementById('sections-wrapper');

    const popAlert = () => {
        if(element) return;
        var alert = document.createElement('section');
        alert.id = "form-alert";
        alert.className = "alert alert-danger text-center col-xs-8 col-md-6 col-lg-4"
        alert.innerHTML = "El username o el password son incorrectos";
        wrapper.insertBefore( alert, wrapper.firstChild);
    };

    const popLog = () => {
        if(element) return;
        var alertLog = document.createElement('section');
        alertLog.id = "form-alert";
        alertLog.className = "alert alert-info text-center col-xs-8 col-md-6 col-lg-4"
        alertLog.innerHTML = "Login succsesfull!";
        wrapper.insertBefore( alertLog, wrapper.firstChild);
    };
    
    const cleanAlert = () => {
        if(!element) return;
        wrapper.removeChild(element);
    }

    let username = $('#signin-username').val();
    let password = $('#signin-password').val();

    let us = users[0].username;

    //console.log(users.length)

    for(let i = 0; i < users.length; ++i) {
        //console.log(users[i])
        if (users[i].username == username && users[i].password == password) {
            /*alert(`Bienvenid@ ${username}`);
            return cleanAlert();*/
            window.location.href = "./index.html";
        }
    }

    popAlert();

        

    //axios.post(`${url}`, {create_UUID, usuario, pass});


}