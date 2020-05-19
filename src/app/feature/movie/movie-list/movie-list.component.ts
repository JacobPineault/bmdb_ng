import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent extends BaseComponent implements OnInit {
  title: string = 'Movie-List';
  // movies will hold out list of movies from backend
  // will be one way bound to html to provide a table view of movies
  movies: Movie[] = [];

  constructor(private movieSvc: MovieService) {
    super();
  }

  // service calls for the page
  ngOnInit(): void {
    super.ngOnInit();
    // call out movie service to populate the list of movies p.139
    this.movieSvc.list().subscribe((jr) => {
      this.movies = jr.data as Movie[];
      console.log('List of movies', this.movies);
    });
  }
}
