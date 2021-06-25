import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
  } from '@naotickets/common';
  
  export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  }