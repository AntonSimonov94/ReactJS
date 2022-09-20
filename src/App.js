import './App.scss';
import {useEffect, useState} from "react";

export default function App() {
    const [messageList, setMessageList] = useState(
        []
    )
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(event);
        if ((author !== '') && (text !== '')) {
            setMessageList(prevState => [...prevState, {author: author, text: text}])
        }
    }

    useEffect(() => {
            setTimeout(() => {
                const authorEnd = messageList[messageList.length - 1].author;
                if (authorEnd !== 'BOT') {
                    setMessageList(prevState => [...prevState, {
                        author: "BOT",
                        text: "Cообщение отправлено от " + authorEnd
                    }])
                }
            }, 2000)
        }, [messageList]
    )
    return (
        <div className={"main"}>
            <div className="main-content">
                <form onSubmit={handleSubmit} className={"form"}>

                    <label>
                        Автор:
                        <input
                            type="text"
                            value={author}
                            name="author"
                            onChange={(event) => setAuthor(event.target.value)}
                        />
                    </label>
                    <label>
                        Текст:
                        <input
                            type="text"
                            value={text}
                            name="text"
                            onChange={(event) => setText(event.target.value)}
                        />
                    </label>
                    <label>
                        <button>Отправить</button>
                    </label>
                </form>
                {messageList.map((item) => <h2>{item.author + ': ' + item.text}</h2>)}
            </div>
        </div>
    );
}
