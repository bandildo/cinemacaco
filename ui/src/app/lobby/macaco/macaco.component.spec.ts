import { CoreModule } from 'src/app/core/core.module';
import { LobbyModule } from './../lobby.module';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { MacacoComponent } from './macaco.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MacacoComponent', () => {
  let component: MacacoComponent;
  let fixture: ComponentFixture<MacacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LobbyModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
