import {test } from 'node:test';
import assert from 'node:assert';
import 'dotenv/config';
import process from 'node:process';
import KeyVox from '../src/KeyVox.js';

const kv = new KeyVox(process.env.KEY, {
    baseURL: process.env.BASE_URL
});

test('authors.list()', {skip: true}, async () => {
    const list = await kv.authors.list()

    console.log(list.data.authors)
});

test('authors.retrieve()', {skip: false}, async () => {
    const idOrSlug = process.env.AUTHOR_ID

    const author = await kv.authors.retrieve(idOrSlug)

    console.log(author)
});