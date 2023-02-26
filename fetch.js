
let fetched='';


async function get(){
    try{
        let data=await fetch('./api.json')
        data=await data.json()
        console.log(data)
        display(data)
        fetched=data
    }
    catch(err){
        console.log(err)
    }
}


get();



let searchEl=document.querySelector('#logo > input');
  


searchEl.addEventListener('Keypress',function(e){
    if(e.Key=='Enter'){
        e.preventDefault()
        // if(searchEl.value==)

    }
})

let div=document.getElementById('text');
function display(data){
// div.innerHTML='';
data.forEach((ele) => {
    let div2=document.createElement('div');
    let image=document.createElement('img');
    let price=document.createElement('p');
    let review=document.createElement('p');
    let button=document.createElement('button');

    image.src=ele.img;
    price.textContent=ele.price;
    review.textContent=ele.reviews;
    button.textContent='Add to Cart';

    div2.append(image,price,review,button)
    div.append(div2);

});
}


console.log(fetched)
let men=document.getElementById('men');

men.addEventListener('click',()=>{
    div.innerHTML='';

    fetched.forEach((ele)=>{
        let div2=document.createElement('div');
        let image=document.createElement('img');
        let price=document.createElement('h3');
        let review=document.createElement('p');
        let button=document.createElement('button');

        image.src=ele.img;
        price.textContent=ele.price;
        review.textContent=ele.Reviews;
        button.textContent='Add to Cart';




    //    div.style.display=grid;
    //    div.style.gridTemplateColumns= 25% 25% 25% 25%

        div2.append(image,price,review,button)
        div.append(div2)
    })

})


