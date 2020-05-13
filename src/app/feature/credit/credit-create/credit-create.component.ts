import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css'],
})
export class CreditCreateComponent implements OnInit {
  title: string = 'Credit-create';
  actors: Actor[] = [];
  movies: Movie[] = [];
  credit: Credit = new Credit();
  submitBtnTitle: string = 'Create';
  // router navigates to other pages
  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actorSvc.list().subscribe((jr) => {
      this.actors = jr.data as Actor[];
    });
    this.movieSvc.list().subscribe((jr) => {
      this.movies = jr.data as Movie[];
    });
  }

  create() {
    this.creditSvc.create(this.credit).subscribe((jr) => {
      if (jr.errors == null) {
        this.router.navigateByUrl('/credit/list');
      } else {
        console.log('***Error creating credit***', this.credit, jr.errors);
        alert('Error creating Credit. Try Again.');
      }
    });
  }
}
