const graphql=require('graphql');
const load=require('lodash')
const {Ahotr,Book}=require('./Data')

const{
  GraphQLObjectType,
 GraphQLString,
 GraphQLID,
 GraphQLSchema,
 GraphQLInt
}=graphql;



const BookType=new GraphQLObjectType({
  name : "book",
  fields:()=>({
    id:{type:  GraphQLID},
    name:{type:  GraphQLString},
    group:{type:  GraphQLString},
  })
})

const AhotrType=new GraphQLObjectType({
  name : "ahotr",
  fields:()=>({
    id:{type:  GraphQLID},
    name:{type:  GraphQLString},
    age:{type:  GraphQLInt},
  })
})


const rootQuery= new GraphQLObjectType({
  name:"RootQueryType",
  fields: {
    book:{
      type : BookType,
      args:{id:{type:GraphQLID}},
      resolve(param,args){
        return load.find(Book,{id:args.id})
      }
    },
    ahotr:{
      type:AhotrType,
      args:{id:{type: GraphQLID}},
      resolve(param,args){
        return load.find(Ahotr,{id:args.id});
      }
    }
  }

})




module.exports = new GraphQLSchema({
  query:rootQuery,
})
