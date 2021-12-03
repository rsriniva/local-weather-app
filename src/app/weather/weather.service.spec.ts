import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { MaterialModule } from '../material.module'
import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  let service: WeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule],
    })
    service = TestBed.inject(WeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
