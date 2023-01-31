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
    }
}

export default state;