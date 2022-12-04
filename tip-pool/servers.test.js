describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    //https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
    // delete 
    delete allServers['server' + serverId];
    updateServerTable()

  });
});
