const mapArrayToHashByKey = require('./index');

describe('test mapArrayToHashByKey', () => {
   it('check key as age', () => {
       const data = [
           {
               id: 1,
               age: 25,
               address: {
                   city: "New York",
                   zipCode: 10001,
               },
               name: "John",
               surname: "Doe",
               bool: true,
               nullValue: null,
               undefinedValue: undefined,
           },
           {
               id: 2,
               age: 30,
               address: {
                   city: "Los Angeles",
                   zipCode: 90001,
               },
               name: "Jane",
               surname: "Smith",
               bool: true,
               nullValue: null,
               undefinedValue: undefined,
           },
       ];

       const expectedData = {
           "25": {
               id: 1,
               age: 25,
               address: {
                   city: "New York",
                   zipCode: 10001,
               },
               name: "John",
               surname: "Doe",
               bool: true,
               nullValue: null,
               undefinedValue: undefined,
           },
           "30": {
               id: 2,
               age: 30,
               address: {
                   city: "Los Angeles",
                   zipCode: 90001,
               },
               name: "Jane",
               surname: "Smith",
               bool: true,
               nullValue: null,
               undefinedValue: undefined,
           },
            _ages: ["25", "30"]
       }

       expect(mapArrayToHashByKey(data, 'age')).toStrictEqual(expectedData);
   })
});