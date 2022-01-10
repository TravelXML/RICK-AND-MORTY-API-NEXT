var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var Appserver = supertest.agent("http://localhost:3000");
var RickNMortyMaleEndpoint = supertest.agent("https://rickandmortyapi.com/api/character/?gender=male&status=alive&page=1");
var RickNMortyFemaleEndpoint = supertest.agent("https://rickandmortyapi.com/api/character/?gender=female&status=dead&page=1");
var RickNMortyLocationEndpoint = supertest.agent("https://rickandmortyapi.com/api/location/?type=planet");
// UNIT test begin
describe("SAMPLE unit test for end points",function(){
 
  
  // #1 should check male endpoint working perfectly 
    it("should check Male fetch",function(done){
      // calling home page api
      RickNMortyMaleEndpoint.get("/")    
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(200);      
        done();
      });
    });

  // #2 should check female endpoint working perfectly 
  it("should check Female fetch",function(done){
    // calling home page api
    RickNMortyFemaleEndpoint
    .get("/")    
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);      
      done();
    });
  });

  // #3 should check location endpoint working perfectly 
  it("should check Location fetch",function(done){
    // calling home page api
    RickNMortyLocationEndpoint
    .get("")    
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      //console.log(res);
      res.status.should.equal(200);      
      done();
    });
  }); 
  
  // #4 should return home page
  it("should return home page",function(done){
    // calling home page api
    Appserver
    .get("/")    
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);      
      done();
    });
  });
});