import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    height: auto;
`;

export const Label = styled.label`
    display: block;
    width: 100%;
    margin-bottom: 5px;
    // height: 22px;
    float: left;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #777;
`;

export const SectionTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ToggleButton = styled.span`
    border: 1px solid black;
    padding: 10px;
    border-radius: 50%;
`;