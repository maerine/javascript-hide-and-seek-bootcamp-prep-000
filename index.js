function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  
  for(let i = 0; i < rankedLists.length; i++){
    var children = rankedLists[i].children;
  
    for(let j = 0; j < children.length; j++){
      var rank = parseInt(children[j].innerHTML);
      rank += n;
      children[j].innerHTML = rank.toString();
    }
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node');
  let next = current.children[0];
  
  while(current) {
    if (current.children[0] === undefined) {
      return current;
    } else {
      current = next;
      next = current.children[0];
    }
  }
}