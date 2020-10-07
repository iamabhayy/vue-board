import gql from 'graphql-tag';

export const GET_ALL_COURSES = gql`query courses{
    courses{
      id
      title
      status
      createdAt
    }
}`;

export const GET_ALL_STUDENTS = gql`query students{
    students{
      id
      name
      email
    }
}`;