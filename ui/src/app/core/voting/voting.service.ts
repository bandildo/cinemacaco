import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CoposVote } from './copos-vote.model';

@Injectable()
export class VotingService {
    constructor(private http: HttpClient) {
    }

    castCoposVote(vote: CoposVote) {

    }
}