export default function () {
  this.get('/tickets');
  this.post('/tickets');

  this.get('/tickets/:id');
  this.put('/tickets/:id'); // or this.patch
  this.patch('/tickets/:id'); // or this.patch
  this.del('/tickets/:id');
}
