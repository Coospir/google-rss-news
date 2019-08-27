const chai = require('chai')
let expect = chai.expect
let ParserSummary = require('./parser')

describe('ParserSummary', function() {
  it('parse() should return array of news headers', function() {
    let parserSummary = new ParserSummary([])
    expect(parserSummary.parser()).to.equal(array)
  })
})
