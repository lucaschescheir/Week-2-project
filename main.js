// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1() {
  let x= 0;
  for(let i = 0; i < data.length; i++){
  x = x + data[i].price;
  }


console.log('The average is $' + (x / data.length));// Answer:
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2 () {
  let priceList= '';
  for( let i = 0; i < data.length; i++){
    if(data[i].price > 13.99 && data[i].price < 18.01){
       priceList+= (data[i].title);
    }
  }

console.log(priceList);  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let gbp= [];
  let t = [];
  for(let i = 0; i < data.length; i ++){
    if(data[i].currency_code === "GBP"){
      gbp.push(data[i].title);
      t.push(data[i].price);
    }
  }
console.log(gbp +' cost ' + t + ' pounds');  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let x = 0;
  let i = 0;
  let g =[];
  for(let i = 0; i < data.length; i++){
    if(data[i].materials[x] === 'wood'){
      g.push(data[i].title)
    }
    for(let x = 0; x < data[i].materials.length; x++){
      if(data[i].materials[x] === 'wood'){
        g.push(data[i].title)
      }
      }
    }

console.log('' + g)
}



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let x= [];
  for(i = 0; i < data.length; i++){
    if(data[i].materials.length > 8){
    x.push(data[i].title);
    x.push(data[i].materials);
  }
}
console.log(x)  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let own = [];
  for(i = 0; i < data.length; i ++){
    if(data[i].who_made === "i_did"){
      own.push(data[i]);
    }
  }

console.log(own.length + " items were made by seller.");  // Answer:
}





let u= 0;
let y= 0;
let t=0;
let Mlist = [0];
let list= [0];
function mat() {
  for(i = 0; i < data.length; i++){
    if(data[i].materials.length > 0){

    for(x = 0; x < data[i].materials.length; x++){
      list.push(data[i].materials[x])
    }
  }
}
    return list;
    for(y = 0; y < list.length; y++){
      if(list[y] === list[u]){
        Mlist.push(list[u])
      }

}
return Mlist;
      }





console.log(Mlist)
  console.log(mat())
console.log(list.length)
console.log(list[3])
