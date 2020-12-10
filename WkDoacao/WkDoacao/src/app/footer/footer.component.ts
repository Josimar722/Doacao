import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
