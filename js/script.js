const displayAPiData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();

    // dynamic card 

    const mainCardContainer = document.getElementById('main-card-container');
    
    data.posts.forEach(element => {
        const div =document.createElement('div');
        div.classList.add('mb-6');
        div.innerHTML =`
        <div class="hero hover:bg-[#797DFC1A] rounded-xl bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="indicator">
                    <span class="indicator-active indicator-item badge bg-red-500"></span> 
                    <img src="${element?.image}" class="grid w-20 h-20 bg-base-300 place-items-center">
                </div>
              <div>
                <div>
                    <div class="flex gap-8">
                        <h5 class="font-mulish">#${element?.category}</h5>
                        <h5 class="font-mulish">Author : ${element?.author?.name}</h5>
                    </div>
                    <h1 class="text-2xl font-mulish font-bold">${element?.title}</h1>
                    <p class="py-6 font-mulish">${element?.description}</p>
                    <div class="border-t-2 border-dashed border-gray-400 py-5 gap-5 grid grid-cols-1 lg:grid-cols-2">
                        <div class="flex gap-6 justify-between">
                            <div class="flex gap-3 items-center">
                                <i class="fa-solid fa-message text-3xl"></i>
                                <p class="font-semibold  font-mulish">${element?.comment_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-eye text-3xl"></i>
                                <p class="font-semibold font-mulish">${element?.view_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-clock text-3xl"></i>
                                <p class="font-semibold font-mulish">${element?.posted_time}</p>
                            </div>
                        </div>
                        <div class="flex gap-3 lg:justify-end items-center">
                            <button class="btn rounded-full text-white bg-[#10B981]">
                                <i class="fa-solid fa-envelope-open-text"></i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>`;
          mainCardContainer.appendChild(div)
          
       
    });
    
    
    

}
displayAPiData();