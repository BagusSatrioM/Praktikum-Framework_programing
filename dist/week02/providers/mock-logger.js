export class MockLogger {
    log(message) {
        console.log(`[MOCK] ${message}`);
    }
    error(message, trace) {
        console.error(`[MOCK ERROR] ${message}`, trace);
    }
    warn(message) {
        console.warn(`[MOCK WARN] ${message}`);
    }
}
//# sourceMappingURL=mock-logger.js.map