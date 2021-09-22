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
    
    type SystemAdmin{
    id:ID!
    username:String!
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
    
    type Message{
    id:ID!
    by:String!
    from:String!
    message:String!
    read:Boolean
    received_date:Date!
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
    service:[String!]!
    membership:Membership!
    workingRange:[String!]!
    joined_at:Date!
    state:String!
    }
    
    type Moderator{
    id:ID!
    serviceProvider:ServiceProvider!
    username:String!
    password:String!
    name:String!
    email:String!
    contact_no:String!
    profile:String!
    appointed_at:Date!
    left_date:Date
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
    serviceProvider:ServiceProvider!
    username:String!
    password:String!
    name:String!
    email:String!
    contact_no:String!
    rating:Float!
    profile:String!
    no_of_vote:Int!
    left_date:Date
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
    
    type Record{
    id:ID!
    appointment_id:String!
    images:[Image!]!
    }
    
    type Query{
    getServices:[Service]
    showProvinces:[Province!]!
    showDistricts:[District!]!
    showOwners:[Owner!]!
    getProvinceID(provinceName:String!):String!
    districtsByProvince(ProvinceName:String!):[District!]!
    showServiceProviders:[ServiceProvider!]!
    checkDistrictOnServiceProvider(districtName:String!):[ServiceProvider]
    getServiceProvidersByService(service:String!):[ServiceProvider] 
    defaultSorting:[ServiceProvider]
    sortingByRating:[ServiceProvider]
    getMembership(membership_name:String!):Membership!
    }
    
    type Mutation{
    signUPAdmin(username:String!,password:String!):SystemAdmin!
    signINAdmin(username:String!,password:String!):String!
    signUPSP(username:String!,password:String!,name:String!,address:String!,contact_no:[String!]!,email:String!,bank_acc_no:String!,owner:ID!,service:[String!]!,membership:ID!,workingRange:[String]!):ServiceProvider!
    signINSP(username:String!,password:String!):String!
    signUPCustomer(username:String!,password:String!,name:String!,contact_no:String!,email:String!):Customer!
    signINCustomer(username:String!,password:String!):String!
    signINModerator(username:String!,password:String!):String!
    addModerator(username:String!,password:String!,name:String!,email:String!,contact_no:String!):Moderator!
    addService(service_name:String!,icon:String!):Service!
    addProvince(provinceName:String!):Province!
    addDistrict(province:ID!,districtName:String!):District!
    addOwner(owner_name:String!,owner_NIC:String!,contact_no:String!):Owner!
    addMembership(membership_name:String!,membership_period:Int!,membership_value:Int!):Membership!
    addWorker(serviceProvider:ID!,username:String!,password:String!,name:String!,contact_no:String!):Worker!
    approveServiceProvider(username:String!):Boolean!
    blockServiceProvider(username:String!):Boolean!
    }
`;