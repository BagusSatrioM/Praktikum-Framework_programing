import { map } from 'rxjs/operators';
export class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe(map((data) => ({
            data,
            timestamp: new Date(),
            path: context.switchToHttp().getRequest().url,
        })));
    }
}
//# sourceMappingURL=response.interceptor.js.map