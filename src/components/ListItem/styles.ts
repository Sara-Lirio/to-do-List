import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color: #333052;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-itens: center;

    input {
        width: 25px;
    }

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through': 'initial'};
    }
`
));