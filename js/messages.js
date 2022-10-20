var mess = {
    message: function(type, text) {
        if(type != '') {
            const MESSAGE = document.createElement('div');
            MESSAGE.id = type;
            setTimeout(() => {
                MESSAGE.remove();
            }, 60000)
            if(type == 'right') {
                MESSAGE.innerHTML = `<span>You: ${text}</span>`;
            } else {
                MESSAGE.innerHTML = `<span>Mark: ${text}</span>`;
            }
            return message_send_show.appendChild(MESSAGE);
        }
    },
    messwarn: function(text) {},
}

mess.message('left', 'Wellcom to chat bots!');
setTimeout(() => {
    mess.message('left', "All message [");
}, 5000)

setTimeout(() => {
    mess.message('left', "What your name's?");
    mess.message('left', "Are you finish?");
    mess.message('left', "How are you?");
    mess.message('left', "Copy message on! and Copy message off!");
    mess.message('left', "Hi");
    mess.message('left', "20/10");
    mess.message('left', "version ]");
}, 5100)