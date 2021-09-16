const { gql }=require('apollo-server-express');
module.exports=gql`
    scalar Date
    scalar DateTime
    
    type Province{
    id:ID!
    provinceName:String
    }
    
    type District{
    id:ID!
    province:Province!
    districtName:String!
    }
    
    type WorkingRange{
    id:ID!
    range_type:String!
    districts:[District!]!
    }
    
    type SystemAdmin{
    id:ID!
    user_name:String!
    password:String!
    profile:String!
    }
    
    type Owner{
    id:ID!
    owner_name:String!
    owner_NIC:String!
    contact_no:String!
    profile:String!
    }
    
    type Manager{
    id:ID!
    user_name:String!
    password:String!
    profile:String!
    }
    
    type Moderator{
    id:ID!
    user_name:String!
    password:String!
    profile:String!
    }
    
    type Membership{
    id:ID!
    membership_name:String!
    membership_period:Int!
    membership_value:Int!
    description:String
    }
    
    type ServiceProvider{
    id:ID!
    name:String!
    address:String!
    contact_no:[String!]!
    email:String!
    rating:Float!
    bank_acc_no:String!
    owner:Owner!
    Service:[Service!]!
    membership:Membership!
    workingRange:WorkingRange!
    joined_at:Date!
    state:String!
    }
    
    type CustomerReview{
    id:ID!
    by:Customer!
    to:ServiceProvider!
    createdAt:DateTime!
    content:String
    rating:Int 
    publish:Boolean!
    }
    
    type Worker{
    id:ID!
    workerId:String!
    serviceProvider:ServiceProvider!
    username:String!
    password:String!
    name:String!
    contact_no:String!
    rating:Float!
    }
    
    type Booking{
    id:ID!
    by:Customer!
    to:ServiceProvider!
    state:String
    workStation:WorkStation!
    description:String
    }
    
    type Service{
    id:ID!
    service_name:String!
    description:String
    icon:String!
    }
    
    type Image{
    id:ID!
    url:String!
    description:String
    }
    
    type Customer{
    id:ID!
    username:String!
    password:String!
    profile:String
    name:String!
    contact_no:String!
    rating:Float!
    joined:Date!
    }
    
    type CustomerAccount{
    id:ID!
    card_holder:Customer!
    acc_no:String!
    valid_date:Date!
    name_on_card:String!
    }
    
    type WorkStation{
    id:ID!
    address:String!
    district:District!
    customer:Customer!
    }
    
    type Query{
    showProvinces:[Province!]!
    showDistricts:[District!]!
    showOwners:[Owner!]!
    getProvinceID(provinceName:String!):String!
    districtsByProvince(ProvinceName:String!):[District!]!
    }
    
    type Mutation{
    addProvince(provinceName:String!):Province!
    addDistrict(province:ID!,districtName:String!):District!
    addOwner(name:String!,nic:String!,no:String!):Owner!
    }
`;