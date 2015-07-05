var mocha = require('mocha')
var expect = require('expect')
var cli = require('../cli')

var describe = mocha.describe
var it = mocha.it
var beforeEach = mocha.beforeEach

describe('nickd-cli', function () {
  describe('commands', function() {
    it('should exist', function() {
      expect(cli.commands).toExist()
    })

    it('should define "add"', function() {
      expect(cli.commands.add).toExist()      
    })

    it('should define "remove"', function() {
      expect(cli.commands.remove).toExist()      
    })

    it('should define "edit"', function() {
      expect(cli.commands.edit).toExist()      
    })

    it('should define "liss"', function() {
      expect(cli.commands.list).toExist()      
    })
  })
})
