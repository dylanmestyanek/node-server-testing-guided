const server = require("./server");
const request = require("supertest");

describe('Server Tests', () => {
    describe('GET /', () => {

        it('Should set db environment to testing', () => {
            request(server).get("/").then(res => {
                expect(res.body.environment).toBe("testing");
            });
        });

        it('Should return 200 OK', () => {
            return request(server).get("/").then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('Content-type should be json', () => {
            return request(server).get("/").then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

        it('Should return JS object with api value as "up"', () => {
            return request(server).get("/").then(res => {
                // expect(res.body).toEqual({ api: "up" });
                expect(res.body.api).toBe("up");
            });
        });
    });
});

// the endpoint returns the correct http status code on input 
// the endpoint returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input