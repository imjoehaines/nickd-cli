var foreach = require('lodash/collection/forEach')
var mocha = require('mocha')
var expect = require('expect')
var cli = require('../cli')

var describe = mocha.describe
var it = mocha.it

describe('nickd-cli', function () {
  describe('commands', function () {
    it('should exist', function () {
      expect(cli.commands).toExist()
    })

    it('should define "add"', function () {
      expect(cli.commands.add).toExist()
    })

    it('should define "remove"', function () {
      expect(cli.commands.remove).toExist()
    })

    it('should define "edit"', function () {
      expect(cli.commands.edit).toExist()
    })

    it('should define "list"', function () {
      expect(cli.commands.list).toExist()
    })

    it('should define a function for each command', function () {
      foreach(cli.commands, function (command) {
        expect(command.func).toExist()
        expect(typeof command.func === 'function').toBe(true)
      })
    })

    it('should define a description for each command', function () {
      foreach(cli.commands, function (command) {
        expect(command.description).toExist()
      })
    })

    it('should define help for each command', function () {
      foreach(cli.commands, function (command) {
        expect(command.help).toExist()
      })
    })
  })
})
