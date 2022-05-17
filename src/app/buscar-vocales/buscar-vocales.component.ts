import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-vocales',
  templateUrl: './buscar-vocales.component.html',
  styleUrls: ['./buscar-vocales.component.css']
})
export class BuscarVocalesComponent {
  sentence ='';
  vowels = ['a', 'e', 'i', 'o', 'u'];
  vowelsFind: string[] = [];
  vowelsCount: any = [];

  checkVowels() {
    this.vowelsFind = [];
    for (const letter of this.sentence) {
      for (const vowel of this.vowels) {
        if (letter === vowel) {
          this.vowelsFind.push(letter);
        }
      }
    }
    this.countEachVowel();
  }

  countEachVowel() {
    for (const vowel of this.vowels) {
      let count = 0;
      for (const letter of this.vowelsFind) {
        if (letter === vowel) {
          count++;
        }
      }
      if(vowel === '') return;
      this.vowelsCount.push({[vowel]: count});
    }
  }
    
}
