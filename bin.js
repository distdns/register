#!/usr/bin/env node

var register = require('./')

if (!process.argv[2]) {
  console.log('Usage: dregister [name]')
  process.exit(0)
}

register(process.argv[2])
