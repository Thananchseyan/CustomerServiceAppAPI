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
    to:String!
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
    
    type CustomerReview{
    id:ID!
    by:Customer!
    to:ServiceProvider!
    createdAt:Date!
    content:String
    rating:Float
    publish:Boolean!
    }
    
    type Moderator{
    id:ID!
    serviceProvider:ServiceProvider!
    username:String!
    name:String!
    email:String!
    nic:String!
    address:String!
    contact_no:String!
    rating:Float!
    profile:String!
    no_of_vote:Int!
    left_date:Date
    }
    
    type Worker{
    id:ID!
    serviceProvider:ServiceProvider!
    username:String!
    name:String!
    email:String!
    contact_no:String!
    nic:String!
    address:String!
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
    duration:String
    worker:[Worker]
    state:String!
    paid:Boolean!
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
    message:String!
    date:Date!
    state:String
    }
    
    type NotificationSP{
    id:ID!
    serviceProvider:ServiceProvider!
    message:String!
    date:Date!
    state:String
    }
    
    type NotificationWorker{
    id:ID!
    worker:Worker!
    message:String!
    date:Date!
    state:String
    }
    
    type Booking{
    id:ID!
    by:Customer!
    to:ServiceProvider!
    state:String
    workStationAddress:String!
    workStationDistrict:String!
    workStation:WorkStation
    description:String
    date:Date!
    }
    
    type Service{
    id:ID!
    service_name:String!
    description:String
    icon:String!
    }
    
    type Image{
    id:ID!
    name:String!
    url:String!
    description:String
    }
    
    type Customer{
    id:ID!
    username:String!
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
    valid_date:String!
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
    
    type CountFeed{
    _id:String!
    Count:Int
    }
    
    type Query{
    SP_me:ServiceProvider!
    Customer_me:Customer!
    moderator_me:Moderator!
    worker_me:Worker!
    getServices:[Service]
    showProvinces:[Province!]!
    showDistricts:[District]
    showDistricts_pagination(offset:Int!,page:Int!):[District!]!
    showOwners:[Owner!]!
    showCustomers:[Customer!]!
    getProvinceID(provinceName:String!):String!
    districtsByProvince(ProvinceName:String!):[District!]!
    showServiceProviders:[ServiceProvider!]!
    checkDistrictOnServiceProvider(districtName:String!):[ServiceProvider]
    getServiceProvidersByService(service:String!):[ServiceProvider] 
    defaultSorting:[ServiceProvider]
    sortingByRating:[ServiceProvider]
    getMembership(membership_name:String!):Membership!
    showWorkers:[Worker]
    getMyWorkers:[Worker]
    getMyMessages:[Message] 
    getMyBooking:[Booking]
    getMyOngoingWorks:[Appointment]
    getMyWorks:[Appointment]
    getMyReviews:[CustomerReview]
    getMyFinishedWorks:[Appointment]
    getMyNotification:[NotificationSP]
    worker_getMyAssignedWorks:[Appointment]
    worker_getMyNotification:[NotificationWorker]
    customer_getMyNotification:[NotificationCustomer]
    bookingFeed:[CountFeed]
    workStats:[CountFeed]
    }
    
    type Mutation{
    signUPAdmin(username:String!,password:String!):SystemAdmin!
    signINAdmin(username:String!,password:String!):String!
    signUPSP(username:String!,password:String!,name:String!,address:String!,contact_no:[String!]!,email:String!,bank_acc_no:String!,owner:ID!,service:[String!]!,membership:ID!,workingRange:[String]!):ServiceProvider!
    signINSP(username:String!,password:String!):String!
    signUPCustomer(username:String!,password:String!,name:String!,contact_no:String!,email:String!):Customer!
    signINCustomer(username:String!,password:String!):String!
    signINModerator(username:String!,password:String!):String!
    signINWorker(username:String!,password:String!):String!
    addService(service_name:String!,icon:String!):Service!
    addModerator(username:String!,password:String!,name:String!,nic:String!,email:String!,contact_no:String!,address:String!):Moderator!
    addProvince(provinceName:String!):Province!
    addDistrict(province:ID!,districtName:String!):District!
    addOwner(owner_name:String!,owner_NIC:String!,contact_no:String!):Owner!
    addMembership(membership_name:String!,membership_period:Int!,membership_value:Int!):Membership!
    addWorker(username:String!,password:String!,name:String!,nic:String!,email:String!,contact_no:String!,address:String!):Worker!
    approveServiceProvider(username:String!):Boolean!
    blockServiceProvider(username:String!):Boolean!
    saveCustomerAccountDetails(acc_no:String!,valid_date:String!,name_on_card:String!):CustomerAccount!
    sendReview(to:ID!,rating:Float!,content:String):CustomerReview!
    sendMessage(to:String!,message:String!):Message!
    booking(to:ID!,workStationAddress:String!,workStationDistrict:String!,description:String!):Booking!
    appointment(booking:ID!,appointment_id:String!,starting_date:Date!,duration:String!,worker:[ID]):Appointment!
    confirmBooking(id:ID!):Boolean
    cancelBooking(id:ID!):Boolean
    initiateAppointment(appointment_id:String!):Boolean
    finishAppointment(appointment_id:String!):Boolean
    payment(from:String!,to:String!,appointment:ID!,amount:Float!):Payment!
    saveImage(name:String!,url:String!,description:String):Image!
    addToCustomerNotification(customer:ID!,message:String!):NotificationCustomer!
    addToServiceProviderNotification(serviceProvider:ID!,message:String!):NotificationSP!
    addToWorkerNotification(worker:ID!,message:String!):NotificationWorker!
    CustomerReadNotification(id:ID!):Boolean!
    ServiceProviderReadNotification(id:ID!):Boolean!
    WorkerReadNotification(id:ID!):Boolean!
    
    }
`;
