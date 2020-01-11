import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResult } from '../models/http-result';
import { Emotion } from '../models/emotion';
import {environment} from '../../environments/environment';
const apiUrl = environment.apiUrl;

enum EmotionPosition {
  HAPPY,
  GOOD,
  NORMAL,
  BAD,
  ANGER
}

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  private emotions: Emotion[] = [
    {
      name: 'happy',
      imageLink: '/assets/emotions/5.jpg',
      description: 'Siêu hạnh phúc'
    },
    {
      name: 'good',
      imageLink: '/assets/emotions/4.jpg',
      description: 'Khá hạnh phúc'
    },
    {
      name: 'normal',
      imageLink: '/assets/emotions/3.jpg',
      description: 'Bình thường'
    },
    {
      name: 'bad',
      imageLink: '/assets/emotions/2.jpg',
      description: 'Không tốt'
    },
    {
      name: 'anger',
      imageLink: '/assets/emotions/1.jpg',
      description: 'Tào lao'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  updateToday(data: any): Observable<HttpResult<any>> {
    const emotion = {
      emotion: data.emotion.name,
      userId: data.user.userId,
      note: {
        content: data.note,
        isPublic: true
      },
      user: data.user
    };
    return this.httpClient.post<HttpResult<any>>(apiUrl + 'today', emotion);
  }

  getHistory(userId: string): Observable<HttpResult<Emotion[]>> {
    return this.httpClient.get<HttpResult<Emotion[]>>(apiUrl + 'history?userId=' + userId);
  }

  getEmotionImageLink(emotion: string): string {
    switch (emotion) {
      case 'happy': return this.emotions[EmotionPosition.HAPPY].imageLink;
      case 'good': return this.emotions[EmotionPosition.GOOD].imageLink;
      case 'normal': return this.emotions[EmotionPosition.NORMAL].imageLink;
      case 'bad': return this.emotions[EmotionPosition.BAD].imageLink;
      case 'anger': return this.emotions[EmotionPosition.ANGER].imageLink;
    }
  }

  getEmotionDescription(emotion: string): string {
    switch (emotion) {
      case 'happy': return this.emotions[EmotionPosition.HAPPY].description;
      case 'good': return this.emotions[EmotionPosition.GOOD].description;
      case 'normal': return this.emotions[EmotionPosition.NORMAL].description;
      case 'bad': return this.emotions[EmotionPosition.BAD].description;
      case 'anger': return this.emotions[EmotionPosition.ANGER].description;
    }
  }
}
