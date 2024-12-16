import styled, { css, CSSObject } from 'styled-components';
interface ButtonProps {
    inverted?: boolean;
}

const sizes = {
    desktop: 1024,
    tablet: 768,
} as const;

// sizes의 키 타입
type Sizes = keyof typeof sizes;

// media 타입 정의
type Media = {
    [key in Sizes]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: ReturnType<typeof css>[]
    ) => ReturnType<typeof css>;
};


const media: Media = Object.keys(sizes).reduce((acc, label) => {
    const key = label as Sizes;
    acc[key] = (...args: Parameters<typeof css>) => css`
    @media (max-width: ${sizes[key] / 16}em) {
      ${css(...args)};
    }
  `;
    return acc;
}, {} as Media);

const Box = styled.div<{ color?: string }>`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px`}
    ${media.tablet`width: 100%`}
`

const Button = styled.button<ButtonProps>`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;


    &:hover{
        background: rgba(255,255,255,0.9);
    }

    ${props =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `
    };
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => {
    return (
        <Box color="black">
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    )
};

export default StyledComponent