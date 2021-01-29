// TESTING FUNCTION REPLACEWITH

    describe("replaceWith", function(){
    it ("Should return a string with replacements", function(){
    expect( replaceWith("awesome", "e", "z")).toBe("awzsomz")
    })
    it ("should be case sensitive", function(){
    expect(replaceWith("Foo", "F", "B")).toBe("Boo")
    })
     
    }) 
//TESTION FUNCTION EXPAND

    describe("expand", function(){
    it ("Should return a copy of the array with as many numbers as specified", function(){
    expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
     })
    it ("Should return a copy of the array with as many numbers as specified", function(){
    expect(expand(["foo","test"],1)).toEqual(["foo","test"])

     })
         
    }) 

// TESTING FUNCTION ACCEPTNUMBERSONLY 
    describe("acceptNumbersOnly", function(){
    it ("should return false if all are not numbers", function(){
    expect(acceptNumbersOnly(1,"foo")).toEqual(false)
     })
    it ("should return true if all are numbers", function(){
    expect(acceptNumbersOnly(1,2,3,4,5,6,7) ).toEqual(true)
     })

    it ("should return false if NaN is included", function(){
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false)

     })
         
    }) 

//TESTING FUNCTION MERGEARRAYS

    describe("mergeArrays", function(){
    it ("should return one array with the values sorted", function(){
    expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
     })
     }) 

//TESTING FUNCTION MERGEOBJECTS

    describe("mergeObjects", function(){
    it ("should return an object with the keys and values combined", function(){
    expect(mergeObjects(obj1, obj2)).toEqual(
        {   
            name: "Foo",
            test: "thing",
            num: 55
        }
            )
        })
     }) 
