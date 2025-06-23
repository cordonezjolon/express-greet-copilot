class HealthService {
  getStatus() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}

module.exports = new HealthService();
