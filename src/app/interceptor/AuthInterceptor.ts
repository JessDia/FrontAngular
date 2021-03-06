import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenService } from "../services/token.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.tokenService.obtenerToken();
        console.log(accessToken, 'token x');
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
        return next.handle(request);
    }
}