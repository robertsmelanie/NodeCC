const fs = require('fs');
console.log(fs)
//reading files

fs.readFile('./docs/blog2.txt',
    (err,data) =>{
        if(err){
            console.log(err)
        }
        console.log(data.toString())
        }
    
)
fs.writeFile('./docs/blog.txt', 'some string', () =>{
    console.log('file was written to')
})

fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err)
    }
    console.log('folder created')
   
})

//writing files
fs.writeFile('./docs/blog.txt', 'some string', () =>{
    console.log('file was written to')
})


//directories
if(fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>
    {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })

        } else {
            fs.rmdir('./assets', (err) =>{
                if(err){
                    console.log(err)
                }
                console.log('folder deleted')
        })
                }


                }
                }
            })
        }
    


//deleting files
if(fs.existsSync('./doc/deleteme.txt')){}


//streams and buffers


