import axios from 'axios';
import { assert } from 'chai';
import { it } from 'mocha';


describe('Ticker', () => {

    let response: any;
    before(async() => {
        response = await axios.get('https://api-pub.bitfinex.com/v2/ticker/tETHUSD');
    });

    it('should have 200 response status code',async () => {
        assert.equal(response.status, 200);
    });

    it('should contain 10 values',async () => {
        assert.equal(response.data.length, 10);
    });

    it('should be numbers',async () => {

        for(let i = response.data.length - 1 ; i >= 0; i--){
            assert.isNumber(response.data[i], 'value is not a number');
            console.log('Index: ' + i  + ' / Value: ' + response.data[i]);
        }
    });
});