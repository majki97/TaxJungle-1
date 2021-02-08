import styled from "styled-components";


export const BlogOverviewStyle = styled.section`

position: absolute;
z-index: -1;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.greyLight};
/* border: 1px solid red; */


.upper-header {
    display: flex;
    font-weight:500;
    font-size:36px;
    width: 100%;
    height: 10%;
    color: white;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
    background-color: ${props => props.theme.text.mainColor};
    align-items: center;
    justify-content: center;
    /* border: 1px solid yellow;  */
}


.title {
    display: flex;
    font-weight:500;
    font-size:36px;
    width: 100%;
    height: 100%;
    color: white;
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */
}

.overall-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    /* border: 1px solid green; */
}

.category-flexcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;
    width: 90%;
    height: 100%;
    /* border: 1px solid yellow; */
}

.main-container {
    position: relative;
    display: flex;
    margin: 2% 0;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 85%;
    /* border: 1px solid red; */
}

.back-img {
    position: fixed;
    width: 100%;
    height: 35%;
    z-index: -1;
    bottom: 0;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
    /* border: 1px solid yellow;  */
}
.rec.rec-arrow:hover {
    background-color: ${props => props.theme.text.mainColor};
}

.rec.rec-arrow {
    background-color: ${props => props.theme.text.mainColor};
}

.rec.rec-arrow {
    background-color: ${props => props.theme.text.mainColor};
    color: white;
}

.rec.rec-dot {
/*     background-color: ${props => props.theme.text.mainColor};; */
    box-shadow: none;
    border: 1px solid white;
}

.rec.rec-dot:hover {
    background-color: #D1CADB;

}

.rec.rec-dot_active {
    background-color: white;
}
`
