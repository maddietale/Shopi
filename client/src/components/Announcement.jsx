import styled from "styled-components";

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

const Announcement = () => {
  return <Container>SUPER DEAL!</Container>;
};

export default Announcement;
