describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should delete a server from allServers on deleteServerID()', function () {
    deleteServerID('server1')
    console.log(allServers)
    expect(Object.keys(allServers).length).toEqual(0)
    updateServerTable()
  })

  afterAll(function () {
    // teardown logic
    serverNameInput.value = ''
    updateServerTable()
  });
});
