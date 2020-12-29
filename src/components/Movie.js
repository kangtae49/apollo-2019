import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;


const Movie = ({id, bg}) => {

    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={bg}>{id}</Poster>
            </Link>
        </Container>
    );
}
export default Movie;
