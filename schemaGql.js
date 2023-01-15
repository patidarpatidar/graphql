import { gql } from "apollo-server";

const typeDefs = gql`
type Query{
    greet:String
    users:[User]
    user(id:ID!):User
    quotes:[Quote]
    quote(by:ID):[Quote]
}
type User{
    id:ID
    firstName:String
    lastName:String
    email:String
    quotes:[Quote]
}
type Quote{
    by:ID
    name:String
}
type Mutation{
    signupUserDummy(userNew:UserInput!):User
}
input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}
`

export default typeDefs;