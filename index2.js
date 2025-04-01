const buttons = document.querySelectorAll('button'); 
            console.log(buttons)
            let size = 100;

            buttons[0].addEventListener('click', ()=>{
                size += 20;
                document.body.style.setProperty( '--size', `${size}%` )
            });

            buttons[1].addEventListener('click', ()=>{
                size -= 20;
                document.body.style.setProperty( '--size', `${size}%` )
            })
