import { useState } from "react"

const Say = () => {
    // state : onClick에 의해 값이 변경될 state
    const [message, setMessage] = useState('');
    // function: onClick에 사용될 함수를 화살표 함수 문법으로 작성
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    // state : message 를 감싼 h1 태그의 스타일값을 가질 state
    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
        </div>
    )
}

export default Say;