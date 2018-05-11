let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Book API GET', () => {
    it('should return a valid book when requesting a book', (done) => {
        chai.request(server)
            .get('/api/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');

                const response = res.body;
                response.should.have.property('title').which.is.a('string');
                response.should.have.property('author').which.is.a('string');
                done();
            })
    })
});