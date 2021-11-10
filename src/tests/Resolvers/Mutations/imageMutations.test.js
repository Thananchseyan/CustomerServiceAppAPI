const imageMutationsTest=require('../../../Resolvers/Mutations/Image');
describe("Given mutations are about image",()=>{
    describe("when saveImage called",()=>{
        it("should create in Image moder",function (){
            const mock=jest.fn()
            const models={
                Images: {
                    create:mock
                }
            }
            const data={}
            imageMutationsTest.saveImage({},data,{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
            //expect(imageMutationsTest.saveImage({},data,{models})).rejects.toThrow("image didn't store");
        })
    })
})
