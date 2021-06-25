import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProverbeService {

  constructor() { }

  private liste = [
    "Tout vient à point à qui sait attendre",
    "Rien ne sert de courir, il faut partir à point",
    "Si vous ne réalisez pas vos rêves, quelqu'un vous embauchera pour réaliser les siens (S. Jobs)",
    "Dans la vie il y a 10 sortes de gens, ceux qui savent compter en binaire et les autres (A. Einstein)",
    "Il n'y a que les montagnes qui ne se rencontrent jamais",
    "Les voyages forment la jeunesse",
    "Tu vois, je sais que, grâce à ma propre vérité c'est un très, très gros travail et cette officialité peut vraiment retarder ce qui devrait devenir... Et tu as envie de le dire au monde entier, including yourself.",
    "Tot l' monde a dreût al vèye, al lîbèrté, al sûreté.",
    "Je manque d'imagination pour la suite...."
  ];

  // fonction qui permettra d'afficher un proverbe au hasard à chaque appel
  // Math.floor arrondit toujours en dessous: 8.99 => 8.
  // Rappel le JS compte le tableau de 0 à 8
  afficher()
  {
    let index = Math.floor(Math.random() * this.liste.length) ;
    return this.liste[index];
  }
}
