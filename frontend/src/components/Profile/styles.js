import styled from "styled-components";

export const ProfileStyle = styled.section`


position: absolute;
z-index: -1;
width: 100vw;
height: 100%; 
display: flex;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.greyLight};
/* border: 1px solid red; */
justify-content: flex-start;

.left {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-height: 100%;
    /* border: 1px solid yellow; */
}

a {
    text-decoration: none;
    color: white;
    padding: 20px;
}

.title {
    display: flex;
    width: 100%;
    margin-top: 70px;
    opacity: 1;
    padding: 10px;
    color: white;
    /* color: ${props => props.theme.text.mainColor}; */
    justify-content: center;
    font-size: 60px;
    font-weight: 700;
    /* border: 1px solid red; */
    /* text-shadow: 1px 1px 2px rgba(150, 150, 150, 1); */
}

.back-img {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    width: 30%;
    min-height: 100%;
    z-index: -1;
    top: 0;
    /* opacity: 50%; */ 
    background-color: ${props => props.theme.text.mainColor};
    /* border: 1px solid yellow;  */
}



.round-pic {
    display: flex;
    justify-content: flex-start;
    margin-left: 70%;
    margin-top:100px;
    /* border: 1px solid yellow; */

    .blog-img {
        border-radius: 50%;
        height: 280px;
        width: 300px;
        /* border: 1px solid yellow; */
    }
}

.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 55%;
    /* border: 1px solid blue; */
    margin-left: 150px;
}

.personal-info {
    margin-top: 70px;
    display: flex;
    width: 60%;
    height: 28%;
    justify-content: space-between;
   /*  border: 1px solid yellow; */
}

.names {
    display: flex;
    width: 40%;
    flex-direction: column;
    /* border: 1px solid red; */
}


.un-label,
.email-label {
    display: flex;
    height: 50%;
    width: 40%;
    flex-direction: column;
    /* border: 1px solid green; */
}
.fn-label,
.ln-label {
    margin-top: 10px;
    display: flex;
    height: 40%;
    width: 100%;
    flex-direction: column;
    /* border: 1px solid green; */
}


.firstname,
.lastname {
    margin-top: 20px;
    padding: 7px;
    border: none;
    width: 100%;
    height: 40px;
    outline: none;
}

.username,
.email {
    outline: none;
    margin-top: 20px;
    padding: 7px;
    border: none;
    width: 100%;
    height: 40px; 
    /* border: 1px solid yellow; */
    color: ${props => props.theme.text.mainColor};
}


.location-box {
    margin-top: 10px;
    display: flex;
    height: 83%;
    width: 40%;
    flex-direction: column;
    /* border: 1px solid blue; */
}

.location {
    margin-top: 20px;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 7px;
}

.about-box {
    width: 60%;
    height: 20%;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */

    .about {
        margin-top: 20px;
        padding: 7px;
        width: 100%;
        height: 100px;
        border: none;
        outline: none;
    }
}


.known-credentials {
    margin-top: 20px;
    width: 60%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}


.footer-btn {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 10%;
    width: 400px;
    /* border: 1px solid red; */
}

.edit,
.save {
    border: none;
    color: white;
    margin: 20px;
    border-radius: 8px;
    background-color: ${props => props.theme.text.mainColor};
    width: 120px;
    height: 40px;
    outline: none;
}

`