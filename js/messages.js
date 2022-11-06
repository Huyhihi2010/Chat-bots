var mess = {
    message: function(type, text) {
        if(type != '') {
            const d = new Date();
            const Hours = d.getHours();
            const Minutes = d.getMinutes();
            const MESSAGE = document.createElement('div');
            MESSAGE.id = type;
            // setTimeout(() => {
            //     MESSAGE.remove();
            // }, 60000)
            if(type == 'right') {
                if(Minutes < 10) {
                    MESSAGE.innerHTML = `<span>You: ${text}</span><span>     <${Hours}:0${Minutes}></span>`;
                } else {
                    MESSAGE.innerHTML = `<span>You: ${text}</span><span>     <${Hours}:${Minutes}></span>`;
                }
            } else {
                if(Minutes < 10) {
                    MESSAGE.innerHTML = `<span>Mark: ${text}</span><span>     <${Hours}:0${Minutes}></span>`;
                } else {
                    MESSAGE.innerHTML = `<span>Mark: ${text}</span><span>     <${Hours}:${Minutes}></span>`;
                }
            }
            return message_send_show.appendChild(MESSAGE);
        }
    },
    messwarn: function(text) {},
}

mess.message('left', 'Welcom to chat bots!');
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

// setInterval(() => {
    mess.message('left', `Rate stars!<button title="Very bad!" class="stars" id="stars1">⭐</button><button title="bad" class="stars" id="stars2">⭐</button><button title="Normal" class="stars" id="stars3">⭐</button><button title="Good!" class="stars" id="stars4">⭐</button><button title="Very good!" class="stars" id="stars5">⭐</button>`);
// }, 60000)

var _stars_ = {
    _1: document.getElementById('stars1'),
    _2: document.getElementById('stars2'),
    _3: document.getElementById('stars3'),
    _4: document.getElementById('stars4'),
    _5: document.getElementById('stars5'),
}

_stars_._1.addEventListener('mouseover', () => {
    mess.message('left', "Me very bad 🥺? <1 stars>");
})

_stars_._2.addEventListener('click', () => {
    mess.message('left', "Me bad 😥? <2 stars>");
})

_stars_._3.addEventListener('click', () => {
    mess.message('left', "thanks you for rate my app <3 stars>");
})

_stars_._4.addEventListener('click', () => {
    mess.message('left', "thanks you for rate my app good😁 <4 stars>");
})

_stars_._5.addEventListener('click', () => {
    mess.message('left', "thanks you for rate my app very good😘😘😘 <5 stars>");
})
