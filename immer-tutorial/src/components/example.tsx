import { produce } from "immer";

type State = {
    somewhere: {
        deep: {
            inside: number;
        };
    };
};

const originalState: State = {
    somewhere: {
        deep: {
            inside: 0,
        },
    },
};

const nextState = produce(originalState, draft => {
    draft.somewhere.deep.inside = 5;
})