import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Imovie } from '../imovie';
import { FormBuilder,FormControl } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentParent = 'tv';
  
  MovieForm :any;
  displayedColumns: string[] = ['NameMovie', 'TypeMovie', 'MoviePrice', 'Movieid'];
  public Imovie: Imovie | undefined;
  movieId: string ='';
  movieType: string | undefined;
  moviePrice: Number| undefined;
  movieName: string | undefined;
  constructor( private MovieService: MovieService ,private formBuilder: FormBuilder) { }
  newItem(newItem : any) {
    console.log(this.currentParent);
  }
 
  ngOnInit(): void { 
    this.MovieForm = this.formBuilder.group({
      movieId: new FormControl('')
    });

  }
  MovieData(movieList : Imovie):void{
    this.Imovie = movieList;
    console.log(this.Imovie);
    this.movieId = this.Imovie.Movieid;
    this.movieType = this.Imovie.TypeMovie;
    this.moviePrice = this.Imovie.MoviePrice;
    this.movieName = this.Imovie.NameMovie;
  }
  submit(): void {
    this.movieId = this.MovieForm.get('movieId') ?. value;
  }
 
}
