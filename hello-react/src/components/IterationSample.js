import { useState } from "react";

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // return (
    //     <ul>{nameList}</ul>
    // )

    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
        nextNames.map((name) => console.log(name.id + ': ' + name.text));
    }

    const namesList = names.map((name =>
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
        nextNames.map((name) => console.log(name.id + ': ' + name.text));
    };
    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )
}

export default IterationSample;