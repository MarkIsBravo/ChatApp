window.onload=function(){
    var element = function(id){
        return document.getElementById(id);
    }

    // get elements
    var status = element('status');
    var messages = element('messages');
    var textarea = element('textarea');
    var username = element('username');
    var clearBtn = element('clear');
    var usernameInput = element('username-input');
    var passwordInput = element('password-input');
    var loginForm = element('login-form');
    var registerForm = element('register-form');
    var registerNameInput = element('registername-input');
    var registerPwdInput = element('registerpassword-input');
    var loginBtn = element('login');
    var registerBtn = element('register');

    // set default status
    var statusDefault = status.textContent;

    var setStatus = function(s){
        // set status
        status.textContent = s;
        // if(s !== statusDefault){
            var delay = setTimeout(function(){
                setStatus(statusDefault)
            }, 4000);
        // }
    }

    // 'register' button action
    registerBtn.addEventListener('click', function(){
        loginForm.style.display = 'none';
        registerBtn.style.display = 'none';
        registerForm.style.display = 'inline';
        loginBtn.style.display = 'inline';
    });

    loginBtn.addEventListener('click', function(){
        registerForm.style.display = 'none';
        loginBtn.style.display = 'none';
        loginForm.style.display = 'inline';
        registerBtn.style.display = 'inline';
    });

    //login controll
    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        socket.emit('authenticate', {
            username: usernameInput.value,
            password: passwordInput.value
        })
    })

    registerForm.addEventListener('submit', function(event){
        event.preventDefault();
        socket.emit('register', {
            username: registerNameInput.value,
            password: registerPwdInput.value
        })
    })

    // connect to socket.io
    var socket = io.connect('http://localhost:3000');

    //check for connection
    if(socket !== undefined){
        console.log('Connected to socket');
        
        //handle output
        socket.on('output', function(data){
            // console.log(data)
            if(data.length){
                for(var x = 0; x < data.length; x++){
                    //build out message div
                    var message = document.createElement('div');
                    message.setAttribute('class', 'chat-message');
                    message.textContent = data[x].name + ': ' + data[x].message;
                    messages.appendChild(message);
                    messages.insertBefore(message, messages.firstChild);
                }
            }
        });

        // show username
        socket.on('login-required', function(data){
            username.setAttribute('value',data);
            element('chat').style.display = 'inline';
            loginForm.style.display = 'none';
            registerBtn.style.display = 'none';
        })

        // get status from server
        socket.on('status', function(data){
            // get message status
            setStatus((typeof data === 'object') ? data.message : data);

            //check if status is clear, clear text
            if(data.clear){
                textarea.value = '';
            }
        });

        // handle input
        textarea.addEventListener('keydown', function(event){
            if(event.which === 13 && event.shiftKey == false){
                //emit to server input
                socket.emit('input', {
                    name: username.value,
                    message: textarea.value
                });

                event.preventDefault();
            }
        });

        // handle chat clear
        clearBtn.addEventListener('click', function(){
            socket.emit('clear');
        });

        //clear message
        socket.on('cleared', function(){
            messages.textContent = '';
        })
    }
}