import DLL from './DLL';

DLL.prototype.reverse = function() {
  if (!this.head || !this.head.next) return this.head;
  this.dupHead = this.head;
  
}
