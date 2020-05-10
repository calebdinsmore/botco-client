import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../../dto/response.dto';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiService: ApiService) {}

  getUserId() {
    return this.apiService.get<ResponseDto<string>>('id');
  }
}
