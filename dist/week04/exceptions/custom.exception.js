import { HttpException, HttpStatus } from '@nestjs/common';
export class CustomException extends HttpException {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
export class NotFoundException extends HttpException {
    constructor(message = 'Resource not found') {
        super(message, HttpStatus.NOT_FOUND);
    }
}
export class BadRequestException extends HttpException {
    constructor(message = 'Bad request') {
        super(message, HttpStatus.BAD_REQUEST);
    }
}
//# sourceMappingURL=custom.exception.js.map