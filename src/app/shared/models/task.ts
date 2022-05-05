export class Task {
  static readonly pomodoroLimit: number = 5; // nombre maximun de pomodor
  completed: boolean; // tache terminé ou non
  done: number; // nombre de pomodoros effectués
  title: string; // intitulé de la tache
  todo: number; // nombre de pomodoros prévus

  constructor(options: {
    completed?: boolean, // tache terminé ou non
    done?: number, // nombre de pomodoros effectués
    title?: string, // intitulé de la tache
    todo?: number,
  } = {}) {
    this.completed = options.completed || false;
    this.done = options.done || 0;
    this.title = options.title || '';
    this.todo = options.todo || 1;
  }
}
