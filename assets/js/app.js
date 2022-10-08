
const markAllasRead = document.querySelector('#read')
const notificationItem = document.querySelectorAll('.item')
const unread = document.querySelectorAll('.unread')
const itemNumber = document.querySelector('#n-number')
const mark = document.querySelectorAll("img[alt='read']")

markAllasRead.addEventListener('click', ()=>{
    for (let i = 0; i < notificationItem.length; i++) {
        notificationItem[i].classList.remove('unread');
        itemNumber.style.display = 'none';
    }
})

for (let i = 0; i < mark.length; i++) {
    mark[i].addEventListener('click', ()=>{
        mark[i].style.display = 'none';
        notificationItem[i].classList.remove('unread');
        // Deduction
        number = itemNumber.textContent;
        new_number = number - 1;
        itemNumber.textContent = new_number;
        if (itemNumber.textContent == 0) {
            itemNumber.style.display = 'none';
        }
    })
    
}
