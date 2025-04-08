import { Component } from '@angular/core';

@Component({
  selector: 'app-viewhome',
  templateUrl: './viewhome.component.html',
  styleUrl: './viewhome.component.css'
})
export class ViewhomeComponent {
  data=[
    {value:30, label: '# all users'   },
    {value:15, label: '# active users',},
    {value:10, label: '# new users',},
    {value:5, label: '# inactive users'} 
  ]
  items=[
    {image: '/assets/images/me.png',
      title:'My Picture',
      desc: 'this is my public card'
    },
    {image: '/assets/images/inthename.jpg',
      title:'StartByGod',
      desc: 'in the name of god'
    },
    {image: '/assets/images/masjed.jpeg',
      title:'Masjed',
      desc: 'this is the picture of masjed'
    },
  ]
}
