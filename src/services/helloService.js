class HelloService {
  getMessage(name) {
    return { message: `Hello, ${name || 'World'}!` };
  }
}

module.exports = new HelloService();
