'use strict';

const supertest = require('supertest');
const fastify = require('../../src/app');

describe('Exemplo', () => {

    beforeAll(async () => {
        await fastify.ready();
    });

    afterAll(() => {
        fastify.close();
    });


    it('deve executar exemplo de teste', async done => {
        const { status, body } = await supertest(fastify.server)
            .get('/api')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8');

        expect(status).toBe(200);
        expect(body).toStrictEqual({ hello: 'WORLD', lower: 'lower' });

        done();
    });
});
