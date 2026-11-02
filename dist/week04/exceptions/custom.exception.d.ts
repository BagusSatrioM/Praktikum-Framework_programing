import { HttpException } from '@nestjs/common';
export declare class CustomException extends HttpException {
    constructor(message: string, statusCode: number);
}
export declare class NotFoundException extends HttpException {
    constructor(message?: string);
}
export declare class BadRequestException extends HttpException {
    constructor(message?: string);
}
