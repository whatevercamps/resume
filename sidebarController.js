//Console.log() no los pondría
//Explicar un poco lo que hace

const watchSidebar = () => {
  if (window.innerWidth < 600 && $('#sidebar')[0].className != 'active') {
    $('#sidebar').toggleClass('active');
  }
  if (window.innerWidth > 600 && $('#sidebar')[0].className == 'active') {
    $('#sidebar').toggleClass('active');
  }
};

window.onload = watchSidebar;
window.onresize = watchSidebar;
