/*eslint-disable*/
require('dotenv').config();
import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { retry, mergeMap, catchError } from 'rxjs/operators';
import { HttpBodyRequestComptroller } from '../interfaces/HttpBodyRequestComptroller';

@Injectable()
export class ControlTourismService {
  constructor(private httpService: HttpService) {}

  httpComptroller(req: HttpBodyRequestComptroller): Observable<any> {
    return this.httpService
      .post(
        `http://${
          process.env.DOCKER ? 'tourism_control' : 'localhost'
        }:8080/operacion`,
        { ...req },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .pipe(
        mergeMap((val: any) => {
          if (val.status >= 400) {
            return throwError(`${val.status}`);
          }
          return of(val.data);
        }),
        retry(10),
        catchError((err) => {
          if (!err.response) {
            return of({ status: 500 });
          }
          return of({ status: err.response.status });
        }),
      );
  }

  async validate(req: HttpBodyRequestComptroller): Promise<boolean> {
    const response = await this.httpComptroller(req).toPromise();
    if (response.aprobada) {
      return true;
    }
    if (response.status >= 400) {
      throw new InternalServerErrorException('Max re-try Exceded');
    }
    return false;
  }
}
