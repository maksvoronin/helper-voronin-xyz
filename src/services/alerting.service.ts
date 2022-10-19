import { Observable, Subject } from 'rxjs';
import { IAlert } from '../types/alert.interface';
import React from 'react';

const alertsSubject = new Subject<IAlert>();
const closedAlertsSubject = new Subject<number>();

const alert = (type: "default" | "error", title: string, message: string, time: number): void => {
  alertsSubject.next({
    id: Math.round(window.performance.now()*10),
    title, type, message, time
  });
};

const onAlert = (): Observable<IAlert> => {
  return alertsSubject
    .asObservable();
};

const close = (id: number): void => {
  closedAlertsSubject.next(id);
};

const onClosed = (): Observable<number> => {
  return closedAlertsSubject
    .asObservable()
};

export {alert, onAlert, close, onClosed};