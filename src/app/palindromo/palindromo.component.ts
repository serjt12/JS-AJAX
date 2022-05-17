import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  text = "";
  isPalindrome = false;

  checkText() {
    let stringArray = this.text.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('')
    let results = []
    let stringLength = stringArray.length

    for(let i = 0; i < stringLength; i++) {
      if(stringArray[i] === stringArray[stringLength - (i + 1)]) {
        results.push(true)
      } else {
        results.push(false)
      }
    }

    for(const element of results) {
      if(element === false) {
        return
      }

      this.isPalindrome = true
    }
  }

  reset() {
    this.text = ""
    this.isPalindrome = false
  }


}


/*
 function palindrome(str) {
  let stringArray = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('')
  let results = []
  let result = false
  let stringLength = stringArray.length
  for(let i = 0; i < stringLength; i++) {
    if(stringArray[i] === stringArray[stringLength - (i + 1)]) {
      results.push(true)
    } else {
      results.push(false)
    }
  }
  for(let i = 0; i < results.length; i++) {
    if(results[i] === true) {
      result = true
    } else {
      return result = false
    }
  }

  return result
}

*/