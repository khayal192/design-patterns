class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return 'Hello'
    }
}

const Url = new Server()
console.log(Url.getUrl())