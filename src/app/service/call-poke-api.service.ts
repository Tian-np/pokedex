import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallPokeApiService {

  constructor(private http:HttpClient) { }

  callPokemonApi() {
    return this.http.get('https://pokeapi.co/api/v2/');
  }

  callPokemonAbility() {
    return this.http.get('https://pokeapi.co/api/v2/ability/');
  }

  callPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }

  callPokemonDetail(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
