const form=document.querySelector('form');
const list=document.getElementById('list');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inpText=form.elements[0].value;
    getMovies(inpText);
    form.elements[0].value="";
})

function getMovies(searchtext){

    //Remove all displayed movies first
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    // Fetching API using axios
    const url=`https://api.tvmaze.com/search/shows?q=${searchtext}`;

    axios.get(url)
    .then((res)=>{
        for(let item of res.data){
            if(item.show.image){
              const image=document.createElement('img');
              image.src=item.show.image.medium;
              image.style.margin= '10px';
              list.append(image);
            }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}