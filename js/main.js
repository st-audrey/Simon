new Game;

// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//       left: Math.round(rect.left),
//       top: Math.round(rect.top),
//       right:rect.right, 
//       bottom: rect.bottom, 
//       width: rect.width, 
//       height:rect.height
//     };
// }

// var board = document.getElementById("board");
// var touche1 = document.getElementById("touche1");
// var touche5 = document.getElementById("touche5");


// var test = document.createElement("DIV");
// test.setAttribute("style", "width:" + getOffset(touche1).width +"px;height:" + getOffset(touche1).height+"px;top:" + getOffset(touche1).top + "px;left:" + getOffset(touche1).left +"px;background:red;position:absolute;");

// var test2 = document.createElement("DIV");
// test2.setAttribute("style", "width:" + getOffset(touche5).width +"px;height:" + getOffset(touche5).height+"px;top:" + getOffset(touche5).top + "px;left:" + getOffset(touche5).left +"px;background:blue;position:absolute;");

// board.appendChild(test);
// board.appendChild(test2);

// var testCenter = document.createElement("DIV");
// testCenterWidth = 20;
// testCenterHeight = 20;
// yCenterTest = (getOffset(touche1).top + (getOffset(touche1).height/2)) - (testCenterWidth/2);
// xCenterTest = (getOffset(touche1).left + (getOffset(touche1).width/2)) - (testCenterHeight/2);
// testCenter.setAttribute("style", "width:"+testCenterWidth+"px;height:"+testCenterHeight+"px;background:yellow;position:absolute;top:"+yCenterTest+"px;left:"+xCenterTest+"px;");
// board.appendChild(testCenter);

// var testCenter2 = document.createElement("DIV");
// testCenterWidth2 = 20;
// testCenterHeight2 = 20;
// yCenterTest2 = (getOffset(touche5).top + (getOffset(touche5).height/2)) - (testCenterWidth2/2);;
// xCenterTest2 = (getOffset(touche5).left + (getOffset(touche5).width/2)) - (testCenterHeight2/2);
// testCenter2.setAttribute("style", "width:"+testCenterWidth2+"px;height:"+testCenterHeight2+"px;background:yellow;position:absolute;top:"+yCenterTest2+"px;left:"+xCenterTest2+"px;");
// board.appendChild(testCenter2);

// var rectTest = document.createElement("DIV");
// rectTest.setAttribute("id", "test3");
// rectTestTop = yCenterTest2 + 50;
// rectTestBottom= xCenterTest2 + 50;
// rectTest.setAttribute("style", "top:"+rectTestTop+"px;left:"+rectTestBottom+"px;");
// board.appendChild(rectTest);