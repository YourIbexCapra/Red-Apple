// Set TEST env.
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");

// Import server.
const { app } = require("../app");

// Chai HTTP config.
chai.use(chaiHttp);

// Test GET /
describe("GET /", () => {
  it("it should GET home", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        done();
      });
  });
});
