
const displayAPiData = async (categoryId) => {

    document.getElementById('load-bars').classList.remove('hidden');
    // api search
    categoryId = ( categoryId) ? `posts?category=${categoryId}` :  categoryId = 'posts?';
    console.log(categoryId);
        
    
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/${categoryId}`);
    const data = await response.json();
    if (data.posts.length === 0) {
        alert('No data found')
    }

    // dynamic card 
    const mainCardContainer = document.getElementById('main-card-container');
    mainCardContainer.innerHTML = '';

    data.posts.forEach(element => {
        // show dynamic active status
        function activeStatus(){
            let active = ``;
            if(element.isActive){
                active = `<span  class="indicator-item badge bg-green-500"></span>` 
            }else{
                active =`<span  class="indicator-item badge bg-red-500"></span>`
            }
            return active;
        }

        // create dynamic card 
        const div =document.createElement('div');
        div.classList.add('mb-6');
        div.innerHTML =`
        <div class="hero hover:bg-[#797DFC1A] rounded-xl bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="indicator">
                    ${activeStatus()}
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
                            <i class="flex items-center read-btn btn rounded-full text-white bg-[#10B981] fa-solid fa-envelope-open-text"></i>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>`;
          mainCardContainer.appendChild(div);
          
            
                
          
          
        });

        // read button 
        let count = 0;
        const tableContainer = document.getElementById('table-container');
         const readBtn = document.getElementsByClassName('read-btn');
        for (const btn of readBtn) {
            btn.addEventListener('click',(e) => {
                count += 1;
                const title = e.target.parentNode.parentNode.parentNode.children[1].innerText;
                const views = e.target.parentNode.parentNode.children[0].children[1].children[1].innerText;
                console.log();
                

                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td class="text-[##12132DCC] font-mulish">${title}</td>
                <td class="text-[##12132DCC] font-mulish"><i class="fa-regular fa-eye text-xl"></i> ${views}</td>
                `;
                tableContainer.appendChild(tr);
                const totalRead = document.getElementById('total-read');
                totalRead.innerText = count;
                

            });
        }

        document.getElementById('load-bars').classList.add('hidden');

}
displayAPiData();

// add search button
document.getElementById('search-btn').addEventListener('click', () =>{
    const textFiled = document.getElementById('input-filed').value;
    displayAPiData(textFiled);
})