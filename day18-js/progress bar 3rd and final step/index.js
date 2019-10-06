    
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const bar1 = new ProgressBar (10, 30, 'red');
  bar1.mount(app);
  const bar2 = new ProgressBar (50, 55, 'blue');
  bar2.mount(app);
});