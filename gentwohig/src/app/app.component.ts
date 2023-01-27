import { AfterViewInit, Component, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  title = 'gentwohig';
  public windowSize: number = 0;
  constructor() {
  }
public displayWindowSize(): any {
  // Get width and height of the window excluding scrollbars
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  // Display result inside a div element
  let image = document.getElementsByTagName('img');
  // let imgWidth = image.documentElement.clientWidth;
  return image;
}

public ngAfterViewInit(): void {
  console.log(this.displayWindowSize()[0].clientWidth)
  console.log(' test')
}



public OnChanges(change: SimpleChanges)  {
  if (change) {
    console.log('paste')
  }
  window.addEventListener("resize", (event) => {
    if (event) {
      console.log(this.displayWindowSize())
      console.log('resize test')
    }
  });
}
}
