import { useReducer } from "react";

// 상태 타입
type State = {
    [key: string]: string;
};

// 액션 타입
type Action = {
    name: string;
    value: string;
};

// 리듀서 함수
function reducer(state: State, action: Action): State {
    return {
        ...state,
        [action.name]: action.value,
    };
}

// 커스텀 훅
export default function useInputs(initialForm: State): [State, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [state, dispatch] = useReducer(reducer, initialForm);

    // onChange 이벤트 핸들러
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ name: e.target.name, value: e.target.value });
    };

    return [state, onChange];
}
