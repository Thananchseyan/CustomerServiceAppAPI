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
    district:[District]
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
    username:String!
    password:String!
    name:String!
    address:String!
    contact_no:[String!]!
    email:String!
    no_of_vote:Int!
    rating:Float!
    bank_acc_no:String!
    owner:Owner!
    service:[Service!]!
    membership:Membership!
    workingRange:[WorkingRange!]!
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
    
    type Appointment{
    id:ID!
    booking:Booking!
    appointment_id:String!
    starting_date:Date!
    duration:Int
    worker:[Worker!]!
    state:String 
    }
    
    type Payment{
    id:ID!
    from:String!
    to:String!
    appointment:Appointment!
    amount:Float!
    payedOn:Date!
    }
    
    type NotificationCustomer{
    id:ID!
    customer:Customer!
    appointment:Appointment!
    state:String
    }
    
    type NotificationSP{
    id:ID!
    serviceProvider:ServiceProvider!
    booking:Booking!
    state:String
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
    email:String
    no_of_vote:Int!
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
    showWorkingRange:[WorkingRange!]!
    showServiceProviders:[ServiceProvider!]!
    }
    
    type Mutation{
    signUPSP(username:String!,password:String!,name:String!,address:String!,contact_no:[String!]!,email:String!,bank_acc_no:String!,owner:ID!,service:[ID!]!,membership:ID!,workingRange:[ID],joined_at:Date!):ServiceProvider!
    signINSP(username:String!,password:String!):String!
    signUPCustomer(username:String!,password:String!,name:String!,contact_no:String!,email:String,joined:Date!):Customer!
    signINCustomer(username:String!,password:String!):String!
    addService(service_name:String!,icon:String!):Service!
    addProvince(provinceName:String!):Province!
    addDistrict(province:ID!,districtName:String!):District!
    addOwner(owner_name:String!,owner_NIC:String!,contact_no:String!):Owner!
    addMembership(membership_name:String!,membership_period:Int!,membership_value:Int!):Membership!
    addWorkingRange(range_type:String!,district:[ID]):WorkingRange!
    }
`;