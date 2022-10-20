send_chat.addEventListener('click', () => {
    if(message_send_chat.value != '') {
        mess.message('right', message_send_chat.value);
                if(!copyMessageBots) {
                    if(message_send_chat.value == 'Are you finish?') {
                        mess.message('left', "Sorry, i isn't finish!");
                    } else if (message_send_chat.value == "What your name's?") {
                        mess.message('left', "Mark");
                    } else if (message_send_chat.value == 'hi' || message_send_chat.value == 'hi!' || message_send_chat.value == 'Hi' || message_send_chat.value == 'hI' || message_send_chat.value == 'HI' || message_send_chat.value == 'Hi!' || message_send_chat.value == 'hI!' || message_send_chat.value == 'HI!') {
                        if(Math.random() > 0.5) {
                            mess.message('left', "Hello!");
                        } else {
                            mess.message('left', "Hi!");
                        }
                    } else if(message_send_chat.value == '20/10') {
                        mess.message('left', "Nhân ngày 20/10, chúc một nửa thế giới luôn duyên dáng, xinh đẹp và thành công trong cuộc sống");
                    } else if(message_send_chat.value == 'version') {
                        mess.message('left', "'version: 1.0.1' 'Bots : true' 'Name : Mark Bots'");
                    } else if(message_send_chat.value == 'How are you?') {
                        if(Math.random() > 0.5) {
                            mess.message('left', "Am fine, thanks you!");
                        } else {
                            mess.message('left', "Am don't good");
                        }
                    } else {
                        if(message_send_chat.value != "Copy message off!" && message_send_chat.value != "Copy message on!") {
                            mess.message('left', `I not can reading "${message_send_chat.value}" because am isn't finish...`);
                        }
                    }
                } else {
                    if(message_send_chat.value != "Copy message off!" && message_send_chat.value != "Copy message on!") {
                        mess.message('left', `Say "${message_send_chat.value}"`);
                    }
                }
                if(message_send_chat.value == "Copy message on!") {
                    if(!copyMessageBots) {
                        mess.message('left', "COPY MODE : ON");
                    } else {
                        mess.message('left', "COPY MODE has ON");
                    }
                    copyMessageBots = true;
                }
                if(message_send_chat.value == "Copy message off!") {
                    if(copyMessageBots) {
                        mess.message('left', "COPY MODE : OFF");
                    } else {
                        mess.message('left', "COPY MODE has OFF");
                    }
                    copyMessageBots = false;
                }
        message_send_chat.value = '';
    }
})

addEventListener('keypress', ({keyCode}) => {
    switch (keyCode) {
        case 13:
            if(message_send_chat.value != '') {
                mess.message('right', message_send_chat.value);
                        if(!copyMessageBots) {
                            if(message_send_chat.value == 'Are you finish?') {
                                mess.message('left', "Sorry, i isn't finish!");
                            } else if (message_send_chat.value == "What your name's?") {
                                mess.message('left', "Mark");
                            } else if (message_send_chat.value == 'hi' || message_send_chat.value == 'hi!' || message_send_chat.value == 'Hi' || message_send_chat.value == 'hI' || message_send_chat.value == 'HI' || message_send_chat.value == 'Hi!' || message_send_chat.value == 'hI!' || message_send_chat.value == 'HI!') {
                                if(Math.random() > 0.5) {
                                    mess.message('left', "Hello!");
                                } else {
                                    mess.message('left', "Hi!");
                                }
                            } else if(message_send_chat.value == '20/10') {
                                mess.message('left', "Nhân ngày 20/10, chúc một nửa thế giới luôn duyên dáng, xinh đẹp và thành công trong cuộc sống");
                            } else if(message_send_chat.value == 'version') {
                                mess.message('left', "'version: 1.0.1' 'Bots : true' 'Name : Mark Bots'");
                            } else if(message_send_chat.value == 'How are you?') {
                                if(Math.random() > 0.5) {
                                    mess.message('left', "Am fine, thanks you!");
                                } else {
                                    mess.message('left', "Am don't good");
                                }
                            } else {
                                if(message_send_chat.value != "Copy message off!" && message_send_chat.value != "Copy message on!") {
                                    mess.message('left', `I not can reading "${message_send_chat.value}" because am isn't finish...`);
                                }
                            }
                        } else {
                            if(message_send_chat.value != "Copy message off!" && message_send_chat.value != "Copy message on!") {
                                mess.message('left', `Say "${message_send_chat.value}"`);
                            }
                        }
                        if(message_send_chat.value == "Copy message on!") {
                            if(!copyMessageBots) {
                                mess.message('left', "COPY MODE : ON");
                            } else {
                                mess.message('left', "COPY MODE has ON");
                            }
                            copyMessageBots = true;
                        }
                        if(message_send_chat.value == "Copy message off!") {
                            if(copyMessageBots) {
                                mess.message('left', "COPY MODE : OFF");
                            } else {
                                mess.message('left', "COPY MODE has OFF");
                            }
                            copyMessageBots = false;
                        }
                message_send_chat.value = '';
            }
            break;
    }
})