var factList = [
  "Understanding and remembering information for a test takes time, so developing good study habits long before test day is really important.",
  "Avoid the temptation to stay up late reviewing your notes. Last-minute cramming is far less likely to improve your grade than developing good study habits and getting a good night’s sleep.",
  "Before going to bed (early, so you get a good night’s sleep), gather everything you need for the test and have it ready to go.",
  "A good night’s sleep will help you think more clearly during the test. It will also make it easier to cope with test-taking stress and anxiety.",
  "Arriving early at a test location can help decrease stress. And it allows you to get into a positive state of mind before the test starts.",
  "The teacher or proctor may offer details about the structure of the test, time limitations, grading techniques, or other items that could impact your approach. Be sure to pay close attention to their instructions before you get started.",
  "If possible, look over the entire test quickly before you get started. Doing so will help you understand the structure of the test and identify areas that may need more or less time.",
  "For certain types of tests, remembering facts, data, or formulas is key. For these tests, it can be helpful to take a few minutes to write down all the information you need on a scrap paper before you get started.",
  "When possible, do a first pass through the test to answer the “easy” questions or the ones you know right away. When you come to a question that you can’t answer (relatively) quickly, skip it on this first pass.",

];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}