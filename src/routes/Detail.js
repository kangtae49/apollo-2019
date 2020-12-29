import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import styled from 'styled-components';

const GET_MOVIE = gql`
 query getMovie($id: Int!) {
    movie(id: $id) {
        title
        medium_cover_image
        language
        rating
        description_intro
    }
 }
`

const Container = styled.div``;
const Column = styled.div``;
const Title = styled.h1``;
const Subtitle = styled.h4``;
const Description = styled.p``;
const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 500px;
    width: 500px;
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;

function Detail () {
    const {id} = useParams();
    const {loading, data} = useQuery(GET_MOVIE, {
        variables: {id: parseInt(id)}
    });

    return (
        <Container>
        <Column>
          <Title>
            {loading
              ? "Loading..."
              : data.movie.title}
          </Title>
          <Subtitle>
            {data?.movie?.language} · {data?.movie?.rating}
          </Subtitle>
          <Description>{data?.movie?.description_intro}</Description>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </Container>
    )



    // console.log(loading, data);
    // if(loading) {
    //     return "loading";
    // }
    // if(data && data.movie) {
    //     return data.movie.title;
    // }
    // return <h1>Detail</h1>;
} 

export default Detail;
