// generated from test/fixtures/testing-peer-deps-unresolvable
module.exports = t => ({
  "package.json": JSON.stringify({
    "name": "unacceptable-condition",
    "version": "1.2.3",
    "dependencies": {
      "@isaacs/testing-peer-deps-c": "1",
      "@isaacs/testing-peer-deps-b": "2"
    }
  })
})
