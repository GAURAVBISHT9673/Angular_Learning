import { Component, computed, Input, signal, input, output, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    
  /* For signal Purpose */
  // selectedValue = signal (DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => '../../asserts/users/' + this.selectedValue().avatar);
  
  /* For Single Purpose */
  // selectedValue = DUMMY_USERS[randomIndex];
  // get imagePath(){
  //   return '../../asserts/users/' + this.selectedValue().avatar;
  // }
  @Input({required:true}) id !: string;
  @Input({required:true}) avatar !: string;
  @Input({required:true}) name !: string;
  @Input({ required: true }) selected !: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  //  avatar = input.required<string>();
  // name = input.required<string>();


  imagePath = computed(()=> {
    return '../../asserts/users/' + this.avatar;
  })

  // get imagePath(){
  //   return '../../asserts/users/' + this.avatar;
  // }

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedValue.set(DUMMY_USERS[randomIndex]);
    // this.select.emit(this.id);
    this.select.emit(this.id);
    console.log('Clicked');
  }

}
