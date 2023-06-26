import styled from "styled-components";

const Announcement = () => {
  // STYLE
  const Container = styled.div`
    height: 30px;
    display: flex;
    color: white;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    background-color: teal;
  `;

  return <Container>SUPER DEAL!</Container>;
};

export default Announcement;
