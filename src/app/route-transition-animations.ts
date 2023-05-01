import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('landing => portfolio', [
      style({ position: 'relative' }),
      query(':leave', [
        style({
          position: 'fixed',
          'z-index': 1,
          top: 0,
          right: 0,
          width: '100%',
          scale: '1.0'
        })
      ]),
      group([
        query(':leave', [
          animate('0.3s 0s ease-in', style({scale: '0.9'}))
        ]),
        query(':leave', [
          animate('0.5s 0.1s ease-in', style({ top: '-100vh'}))
        ]),
      ]),
    ])


  // trigger('routeAnimations', [
  //   transition('landing => portfolio', [
  //     style({ position: 'relative' }),
  //     // query(':enter, :leave', [
  //     //   style({
  //     //     position: 'absolute',
  //     //     top: 0,
  //     //     left: 0,
  //     //     width: '100%'
  //     //   })
  //     // ]),
  //     query(':leave', [
  //       style({
  //         position: 'absolute',
  //         'z-index': 1,
  //         top: 0,
  //         right: 0,
  //         width: '100%'
  //       })
  //     ]),
  //     // query(':enter', [
  //     //   style({ top: '100vh' })
  //     // ]),
  //     // query(':leave', animateChild()),
  //     group([
  //       query(':leave', [
  //         animate('600ms ease-out', style({ top: '-100vh', scale: '0.8'}))
  //       ]),
  //       // query(':enter', [
  //       //   animate('000ms ease-out', style({ top: '0vh' }))
  //       // ]),
  //     ]),
  //   ])
    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ]),
    //     query('@*', animateChild())
    //   ]),
    // ])
  ]);