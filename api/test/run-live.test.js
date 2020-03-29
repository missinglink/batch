'use strict';

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const srv = require('../index.js');
const test = require('tape');
const request = require('request');
let app;

test('start', async (t) => {
    let pool = new Pool({
        connectionString: 'postgres://postgres@localhost:5432/postgres'
    });

    try {
        await pool.query('DROP DATABASE IF EXISTS openaddresses_test');
        await pool.query('CREATE DATABASE openaddresses_test');
        await pool.end();
    } catch (err) {
        t.error(err);
    }

    pool = new Pool({
        connectionString: 'postgres://postgres@localhost:5432/openaddresses_test'
    });

    try {
        await pool.query(String(fs.readFileSync(path.resolve(__dirname, '../schema.sql'))));
    } catch (err) {
        t.error(err);
    }

    srv({
        postgres: 'postgres://postgres@localhost:5432/openaddresses_test'
    }, (a) => {
        app = a;
        t.end();
    });
});

test('POST: api/run', (t) => {
    request({
        url: 'http://localhost:5000/api/run',
        method: 'POST',
        json: true,
        body: {
            live: true
        }
    }, (err, res) => {
        t.error(err);

        t.equals(res.body.id, 1);
        t.ok(res.body.created);
        t.deepEquals(res.body.github, {});
        t.deepEquals(res.body.closed, false);

        t.end();
    });
});

test('GET: api/run', (t) => {
    request({
        url: 'http://localhost:5000/api/run',
        method: 'GET',
        json: true
    }, (err, res) => {
        t.error(err);

        // Run will not return as it has not yet been populated
        t.equals(res.body.length, 0);

        t.end();
    });
});

test('POST: api/run/:run/jobs', (t) => {
    request({
        url: 'http://localhost:5000/api/run/1/jobs',
        method: 'POST',
        json: true,
        body: {
            jobs: [
                'https://raw.githubusercontent.com/openaddresses/openaddresses/39e3218cee02100ce614e10812bdd74afa509dc4/sources/us/dc/statewide.json'
            ]
        }
    }, (err, res) => {
        t.error(err);

        t.deepEquals(res.body, {
            run: 1,
            jobs: [1]
        });
        t.end();
    });
});

test('GET: api/data', (t) => {
    request({
        url: 'http://localhost:5000/api/data',
        method: 'GET',
        json: true
    }, (err, res) => {
        t.error(err);

        t.deepEquals(res.body, []);
        t.end();
    });
});

test('PATCH: api/job/:job', (t) => {
    request({
        url: 'http://localhost:5000/api/job/1',
        method: 'PATCH',
        json: true,
        body: {
            status: 'Success'
        }
    }, (err, res) => {
        t.error(err);

        t.equals(res.body.id, 1);
        t.equals(res.body.run, 1);
        t.ok(res.body.created);
        t.equals(res.body.source, 'https://raw.githubusercontent.com/openaddresses/openaddresses/39e3218cee02100ce614e10812bdd74afa509dc4/sources/us/dc/statewide.json');
        t.equals(res.body.layer, 'addresses');
        t.equals(res.body.name, 'dcgis');
        t.deepEquals(res.body.output, {
            cache: false,
            output: false,
            preview: false
        });
        t.equals(res.body.loglink, null);
        t.equals(res.body.status, 'Success');
        t.equals(res.body.version, '0.0.0');
        t.end();
    });
});

test('GET: api/data', (t) => {
    request({
        url: 'http://localhost:5000/api/data',
        method: 'GET',
        json: true
    }, (err, res) => {
        t.error(err);

        t.ok(res.body[0].updated);
        delete res.body[0].updated;

        t.deepEquals(res.body, [{
            source: 'us/dc/statewide',
            layer: 'addresses',
            name: 'dcgis',
            job: 1,
            output: {
                cache: false,
                output: false,
                preview: false
            }
        }]);
        t.end();
    });
});

test('stop', (t) => {
    app.close();
    t.end();
});
