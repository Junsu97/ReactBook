import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers: Array<number>) => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>('');
    const inputEl = useRef<HTMLInputElement>(null);
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number, 10)); // 숫자로 변환하여 추가
        setList(nextList);
        setNumber(''); // 입력값 초기화
        if (inputEl.current) {
            inputEl.current.focus(); // current가 null이 아닌 경우에만 focus 호출
        }
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <p>
                <b>평균값:</b> {avg}
            </p>
        </div>
    );
};

export default Average;
