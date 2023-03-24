import styled from "styled-components";
import 'modern-normalize'

export const Wrapper = styled.div`
    display: flex;
    gap: 4px;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: inherit;
    border: none;
    margin-left: auto;
    border-radius: 50%;


    :hover {
        background-color: grey;
    }
    svg {
        color: black;
    }
`

export const Text = styled.p`
    margin: 0;
    padding: 4px;
`