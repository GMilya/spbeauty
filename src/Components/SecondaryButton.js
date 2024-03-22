import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '146px' : props.minWidth;
    const Button = styled.div`
        border: 1px solid #64748B;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        border-Radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: #64748B1F;
        }
        &:active {
            background: ##FFFFFF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;