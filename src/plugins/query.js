import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`mutation LoginUser($email: String!, $password: String!){
  user: loginUser (email:$email,password: $password) {
    token  
    user{id}
  }
}`;


export const REGISTERATION_QUERY = gql`mutation RegisterUser($name: String!, $email: String!, $password: String!){
  newUser: createUser(name: $name, email: $email, password: $password){
    token
    user{id}
  }
 }`;


export const GET_ALL_COURSES = gql`query courses{
    courses{
      id
      title
      banner
      description
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

