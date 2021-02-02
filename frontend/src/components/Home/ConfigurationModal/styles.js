import styled from "styled-components";
import circle from '../../../assets/icons/circle.svg';

export const ConfigModalPageStyled = styled.div`

position: absolute;
width: 100vw;
height: 100vh;
background-color: rgba(255, 255, 255, 0);
display: flex;
justify-content: flex-end;
z-index: 3;
`;


export const ConfigModalStyled = styled.section`

width: 60vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color:${props => props.theme.backgrounds.greyLight};

.close-button {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px;
}

.x-closebutton {
    outline: none;
    border: none;
}

.x-button {
    display: flex;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.main-content {
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    width: 65%;
}

.main-header {
    color: ${props => props.theme.text.mainColor};
    font-size: 26px;
    font-weight: 600;
    height: auto;
    width: 100%;    
}

//SLIDER

input[type=range]{
    -webkit-appearance: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #573E8C;
    margin-top: -4px;
}

.slidecontainer,
.slidecontainer-2 {
  width: 100%;
  margin-top: 30px;
}

#slider,
#slider-2 {
  width: 100%;
  height: 2.5px;
  background-color: #573E8C;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.main-2 {
    width: 65%;
    margin: 0 auto;
}

#selector {
    height: 104px;
    width: 48px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    color:  ${props => props.theme.text.mainColor};
    z-index: 2;
}

.slidecontainer-label {
    padding-bottom: 5px;
}

.slidecontainer-label-2 {
    margin-left: 130px;
}

.text-n-numbers {
    display: flex;
    justify-content: space-between;
    
}

.underline {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 2px solid ${props => props.theme.text.mainColor};
    width: 120px;
    text-align: right;

}

.text-field,
.text-field-2 {
    background-color:${props => props.theme.backgrounds.greyLight};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
    text-align: right;
    width: 88px;
   font-size: 16px;
   font-weight: 600;
    color: ${props => props.theme.text.mainColor};
}
                
.cash-money,
.cash-money-2 {
    color: ${props => props.theme.text.mainColor};
    font-weight: 600;    
}


//Section 1

.section-1 {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    //padding-top: -50px;
       
}

.category,
.category-2,
.long-box,
.unique-box,
.slidecontainer-label,
.slidecontainer-label-2 {
    color: ${props => props.theme.text.mainColor};
    font-size: 12px;
    padding: 5px;
}

.category-2 {
    margin-right: 42px;
}

.year-of-birth-partner-one {
    flex-basis: 50%;
    margin-left: 128px;

}

.year-of-birth-partner-two {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    //margin-right: 125px;
}

.dropdown {
    display: flex;
    flex-direction: column;

}

.dropdown-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: -87px;
}

.required,
.required-2 {
  background-color:${props => props.theme.backgrounds.greyLight};
  color: ${props => props.theme.text.mainColor};
  font-size: 15px;
  font-weight: 100;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  width: 200px;
  height: 55px;
  border-color: ${props => props.theme.text.mainColor};
}


//Section 2

.section-2,
.section-3 {
    display: flex;
    flex-direction: row;  
    margin: 0 auto;
    margin-top: 30px;
}
 
#kids {
    margin-left: 10px;
    width: 130px;
    border: 1px solid ${props => props.theme.text.mainColor};
    z-index: 1;
}

.children {
    color: ${props => props.theme.text.mainColor};
    font-size: 12px;
    padding: 5px;
}

#status {
    margin-right: 35px;
    width: 300px;
    
}

//Section 3

#kids {
    margin-left: 10px;
    width: 130px;
}

.children {
    color: ${props => props.theme.text.mainColor};
    font-size: 12px;
    padding: 5px;
}

#status {
    margin-right: 35px;
    width: 300px;
}

.apply {
    margin-left: 30px;
}

.apply-button {
  background-color: ${props => props.theme.text.mainColor};
  color: ${props => props.theme.backgrounds.white};
  font-size: 16px;
  font-weight: 200;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.text.mainColor};
  width: 130px;
  height: 55px;
  margin-left: 10px;
}

.apply-button,
img {
    display: flex;
    align-items: center;
    justify-content: space-around;
}



img {
    width: 20px;
    height: 20px;
}

input[type=number] {
  line-height: 30px;
  background-color:${props => props.theme.backgrounds.greyLight};

}

input[type=number]::-webkit-inner-spin-button {
  width: 50px;
  height: 50px;
}
`;





 

