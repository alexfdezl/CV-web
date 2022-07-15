const url = 'https://json-server-production-cf59.up.railway.app/usuarios';
let users = [];




function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

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
        alert.innerHTML = "Este username ya existe";
        wrapper.insertBefore( alert, wrapper.firstChild);
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
        if (users[i].username == username) {
            return popAlert();
        }
    }

    cleanAlert();

    axios.post(`${url}`, {create_UUID, username, password});

    //window.location.href = "./login.html";


}
