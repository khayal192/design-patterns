class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `http://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAws = true;
  server.awsInfo = function() {
    return server.url;
  };

  return server;
}

const s1 = aws(new Server("123.23.32.32", 8080));
console.log(s1.isAws);
console.log(s1.awsInfo());
