import avatar1 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar1.webp'
import avatar2 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar2.jpg';
import avatar3 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar3.jpg';


let state = {
    profilePage: {
        postText: [
            { text: 'Hi! Who is here?', like: '5' },
            { text: 'Hello, it\'s me', like: '3' }
        ]
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "Andrey " },
            { id: 2, name: "Dima " },
            { id: 3, name: "Alex " },
            { id: 4, name: "Anastasiia" },
            { id: 5, name: "Jake " },
            { id: 6, name: "Molly " },
            { id: 7, name: "Arianna " },
            { id: 8, name: "Avery " },
            { id: 9, name: "Gabriella " },
            { id: 10, name: "User not found " }
        ],
        messageList: [
            { message: 'Hello', name: 'Me' },
            { message: 'Hi!', name: 'Anastasiia' },
            { message: 'How are you?', name: 'Me' },
            { message: 'I\'m fine! What about you?', name: 'Anastasiia' },
            { message: 'I\'m fine too, thanks.', name: 'Me' }
        ]
    },
    navbarPage: {
        avatarList: [
            { avatarka: avatar1, altAvatar: 'Avatar1' },
            { avatarka: avatar2, altAvatar: 'Avatar2' },
            { avatarka: avatar3, altAvatar: 'Avatar3' }
        ]
    }
}

export default state;