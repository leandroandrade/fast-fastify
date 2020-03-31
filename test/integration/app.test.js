'use strict';

const supertest = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoServer = new MongoMemoryServer();
const fastify = require('../../src/app');

describe('Exemplo', () => {

    beforeAll(async () => {
        process.env.MONGODB_URI = await mongoServer.getUri();

        await fastify.ready();
    });

    afterAll(async () => {
        await fastify.close();
        await mongoServer.stop();
    });


    it('deve executar exemplo de teste', async done => {
        const { status, body } = await supertest(fastify.server)
            .get('/api/hello')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8');

        expect(status).toBe(200);
        expect(body).toStrictEqual({ hello: 'WORLD' });

        done();
    });
});
