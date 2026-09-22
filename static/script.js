let sidebar = document.querySelectorAll(".sidebar span");
let clear1=document.getElementById("clear1");
let student_dashboard = document.querySelector(".student_dashboard");
let main_dashboard = document.querySelector(".main_dashboard");
let part2=document.querySelector(".part2");
let total_student1=document.getElementById("total_student1");
let total_student2=document.getElementById("total_student2");
let total_student10=document.getElementById("total_student10");
let total_student11=document.getElementById("total_student11");
let total_student22=document.getElementById("total_student22");
let total_student33=document.getElementById("total_student33");
let marks_dash=document.querySelector(".marks_dash");
let Report=document.getElementById("Report");
let hanif=document.querySelector(".hanif");
let search=document.getElementById("search");
let student_add=document.querySelector(".student_add");
let sameer=document.querySelector(".sameer");
let invalid=document.querySelector(".invalid");
let invalid1=document.querySelector(".invalid1");
let invalid3=document.querySelector(".invalid3");
let invalidpro=document.querySelector(".invalidpro");
let delete1=document.getElementById("delete1");
let delete10=document.getElementById("delete10");
let attendence_data=document.querySelector(".attendence_data");
let ys=document.getElementById("ys");
let w=document.getElementById("w");
let m2=document.getElementById("m2");
let m1=document.getElementById("m1");
let z=document.getElementById("z");
let z1=document.getElementById("z1");
let v=document.getElementById("v");
let v1=document.getElementById("v1");
let w1=document.getElementById("w1");
let l=document.getElementById("l");
let zaid=document.getElementById("zaid");
let zaid7=document.getElementById("zaid7");
let add1=document.getElementById("add1");
let add3=document.getElementById("add3");
let add20=document.getElementById("add20");
let a0=document.getElementById("a0");
let a01=document.getElementById("a01");
let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a5=document.getElementById("a5");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let a1t=document.getElementById("a1t");
let a2t=document.getElementById("a2t");
let a3t=document.getElementById("a3t");
let name_a=document.getElementById("name_a");
let roll_b=document.getElementById("roll_b");
let done=document.getElementById("done");
let done1=document.getElementById("done1");
let donex=document.getElementById("donex");
let add=document.getElementById("add");
let markss=document.getElementById("markss");
let markss1=document.getElementById("markss1");
let pop=document.getElementById("pop");
let stack=document.querySelector(".stack");
let bob=document.getElementById("bob");
let king=document.querySelector(".king");
let informetion=document.querySelector(".informetion");
let uwise3=document.querySelector(".uwise3");
student_dashboard.style.display = "none";
informetion.style.display="none";
marks_dash.style.display="none";
hanif.style.overflow="auto";
let point=0;
let oop=0;
  student_add.style.display="none";
  stack.style.display="none";
  king.style.display="none";

add.addEventListener("click",()=>{
    if (point == 0){
        student_add.style.display="block";
        point=1;
    }
    else{
        student_add.style.display="none";
        point=0;
    }

     
})
a0.addEventListener("click",()=>{
    student_add.style.display="none";
    point=1;

})
add3.addEventListener("click",()=>{
    if (oop == 0){
      stack.style.display="block";
      oop=1;
    }
    else{
        stack.style.display="none";
        oop=0;
    }
})
a01.addEventListener("click",()=>{
    stack.style.display="none";
    point=1;

})
clear1.addEventListener("click",()=>{
    a1.value="";
    a2.value="";
    a3.value="";
    a4.value="";
    a5.value="";

})


sidebar.forEach((pl) => {

    pl.addEventListener("click", (e) => {

        let s = e.currentTarget.innerText;

        if (s == "Dashboard") {
            main_dashboard.style.display = "block";
            student_dashboard.style.display = "none";
            marks_dash.style.display="none";
            king.style.display="none";
            informetion.style.display="none";

        }
        else if (s == "Students") {
            student_dashboard.style.display = "block";
            main_dashboard.style.display = "none";
             marks_dash.style.display="none";
             king.style.display="none";
              informetion.style.display="none";
        }
        else if (s == "Marks") {
            student_dashboard.style.display = "none";
            main_dashboard.style.display = "none";
             marks_dash.style.display="block";
             king.style.display="none";
              informetion.style.display="none";
        }
        else if(s == "Attendance"){
            king.style.display="block";
            student_dashboard.style.display = "none";
            main_dashboard.style.display = "none";
             marks_dash.style.display="none";
              informetion.style.display="none";

        }
        else if(s == "About"){
            king.style.display="none";
            student_dashboard.style.display = "none";
            main_dashboard.style.display = "none";
             marks_dash.style.display="none";
              informetion.style.display="block";

        }


    });

});
function hanas(fazil){
    fazil.style.height="150px";
    fazil.style.width="100%";
    fazil.style.borderRadius="20px";
    fazil.style.border="1px solid #E2E8F0";
    fazil.style.margin="20px";
    fazil.style.backgroundColor="#D1FAE5";
    fazil.style.display="flex";
    fazil.style.justifyContent="space-between";
    fazil.style.alignItems="center";
    fazil.style.fontSize="60px";
    // fazil.style.poition="relative";


}
function noor(umar){
    umar.style.height="100px";
    umar.style.width="400px"
     umar.style.setProperty("font-size","50px","important")
     umar.style.textAlign="center";
     umar.style.padding="10px";
      umar.style.setProperty("padding","10px","important")
    
}
function usman(deletebtn){
    deletebtn.style.height="150px";
    deletebtn.style.width="210px";
    deletebtn.style.backgroundColor="red";
    deletebtn.style.border="1px solid black";
    deletebtn.style.margin="10px";
    deletebtn.style.fontSize="50px";
    deletebtn.style.padding="10px";
    deletebtn.style.borderRadius="10px";
}



fetch("/students")
.then(response=>response.json())
.then(data=>{
    data.ms.forEach((student,index)=>{
         let fazil=document.createElement("div");
        hanas(fazil);
         
         hanif.append(fazil);
          for(j=0; j<5; j++){
            let umar=document.createElement("span");
             noor(umar);
              umar.innerText=student[j];
            fazil.append(umar);
           
         }
        let deletebtn=document.createElement("button");
         fazil.append(deletebtn);
         usman(deletebtn);
         deletebtn.innerText="DELETE";
         deletebtn.dataset.row=index+2;
         deletebtn.addEventListener("click",()=>{
            let row3=deletebtn.dataset.row;
            fetch("/delete_student",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    row3:row3
                })
            }).then(response=>response.json()).then(data=>{
                if(data.yes){
                    fazil.remove();
                }
            })
         })
        total_student1.innerText=data.love;
        
       
    });
});
//data in attendence
let kk=document.querySelector(".kk");
let kk1=document.querySelector(".kk1");
fetch("/ali")
.then(responce=>responce.json())
.then(data=>{
     data.jj.forEach((student,index)=>{
         let fazil=document.createElement("div");
        hanas(fazil);
         
         kk.append(fazil);
          for(j=0; j<3; j++){
            let umar=document.createElement("span");
             noor(umar);
              umar.innerText=student[j];
            fazil.append(umar);
           
         }
        });
    
});
fetch("/ali1")
.then(responce=>responce.json())
.then(data=>{
        data.pp.forEach((student1,index1)=>{
         let fazil=document.createElement("div");
        hanas(fazil);
         
         kk1.append(fazil);
          for(t=0; t<4; t++){
            let umar=document.createElement("span");
             noor(umar);
              umar.innerText=student1[t];
            fazil.append(umar);
           
         }
        });
    
});
//data sending
done.addEventListener("click",()=>{
name=a1.value;
roll=a2.value;
branch=a3.value;
year=a4.value;
phone=a5.value;
if(name===""||roll === ""|| branch ===""||year ===""||phone===""){
    invalid.innerText="Fill every data..";
            invalid.style.display="block";
           
            setTimeout(()=>{
                
          invalid.style.display="none";
            },2000);

}

    else{
fetch("/add_student",{
    method:"post",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        name:name,
        roll:roll,
        branch:branch,
        year:year,
        phone:phone
    })
}).then(response=>response.json()).then(data=>{
     if(data.ok){
     invalid.innerText="Data added succefully";
     invalid.style.display="block";
           
            setTimeout(()=>{
                
          invalid.style.display="none";
            },2000);
    console.log(data)
        }
});
    }

});
//seaching data
add1.addEventListener("click",()=>{
    let go=search.value;
    fetch("/seaching",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            },
        body:JSON.stringify({
            go:go
        })

    }).then(responce=>responce.json()).then(data=>{
        if (data.found){
             hanif.children[data.row].style.backgroundColor="red";
           
            setTimeout(()=>{
                 hanif.children[data.row].style.backgroundColor="#D1FAE5";
          
            },2000);

        }
        else{
            invalid.innerText="Student not found..";
            invalid.style.display="block";
           
            setTimeout(()=>{
                
          invalid.style.display="none";
            },2000);
        }
    });
});
// marks system
markss.addEventListener("click",()=>{
    let go1=zaid.value;


    fetch("/seaching1",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            go1:go1
        })
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.found==true){
           roll_b.innerText=data.row1[0];
            w.innerText=data.row1[1]; // Physics
            m2.innerText=data.row1[2]; // Chemistry
            v.innerText=data.row1[3]; // Social
            z.innerText=data.row1[4]; // English
            
            l.innerText=data.row1[5]; // Python

            w1.innerText=data.row1[6]; // Total
            v1.innerText=data.row1[7]; // Result
            m1.innerText=data.row1[8]; // Percentage
            z1.innerText=data.row1[9]; // Grade
            console.log(data.name[0]);
            name_a.innerText=data.name[0];
            ys.innerText=data.row1[7];
            invalid3.innerText="Student marks data found..";
            invalid3.style.display="block";
            delete_marks_row=go1;
            setTimeout(()=>{
                invalid3.style.display="none";
            },2000);
            let jock=data.row1[6];
            if(jock>=450){
                sameer.style.backgroundColor="green";
                sameer.innerText="GOOD RESULT";
             
             
            }
           else if((jock>=400) && (jock<450)){
              sameer.style.backgroundColor="orenge";
              sameer.innerText="MODERENT RESULT";
             
            }
            else if((jock>=350) && (jock<400)){
              sameer.style.backgroundColor="yellow";
              sameer.innerText="AVERAGE RESULT";
            
            }
            else if((jock>200) && (jock<350)){
              sameer.style.backgroundColor="red";
              sameer.innerText="BETTER RESULT";
             
            }
            

                }

        else{

            invalid3.innerText="Student marks data not found..";
            invalid3.style.display="block";

            setTimeout(()=>{
                invalid3.style.display="none";
            },2000);

        }

    });
});
//marks deleting
delete1.addEventListener("click",()=>{
    delete_marks_row=zaid.value;
            fetch("/delete_marks",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     delete_marks_row:delete_marks_row
                })
            }).then(response=>response.json())
            .then(data=>{
                if(data.perfect){
                    invalid3.innerText="Student marks data deleted..";
            invalid3.style.display="block";

            setTimeout(()=>{
                invalid3.style.display="none";
            },2000);
                }
                else{
                    invalid3.innerText="Sorry try agin..";
            invalid3.style.display="block";
            setTimeout(()=>{
                invalid3.style.display="none";
            },2000);

                }
            });
        });
        

// marks data adding
 function hello(phy,ch,en,so,py){
       if ((phy>=30) && (ch>=30) && (en>=30) && (so>=30) && (py>=30)){
        return "pass";
       }
       else{
        return "fail";
       }
  }

bob.addEventListener("click",()=>{
 
  student_roll=b6.value;
  phy=Number(b1.value);
  ch=Number(b2.value);
  en=Number(b3.value);
  so=Number(b4.value);
  py=Number(b5.value);
  total_marks=phy+ch+en+so+py;
  percentage=(total_marks/500)*100;
  result=hello(phy,ch,en,so,py);
  if (student_roll ==="" || phy ==="" || ch ==="" || en ==="" || so ==="" || py ===""){
     invalid1.innerText="pleace fill  all data... ";
     invalid1.style.display="block";
           
            setTimeout(()=>{
                
          invalid1.style.display="none";
            },2000);
            total_student2.innerText=Number(total_student2.innerText)+1;

  }
  else{
  fetch("/usman",{
    method:"post",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify({
        phy:phy,
        ch:ch,
        en:en,
        so:so,
        py:py,
        total:total_marks,
        result:result,
        percentage:percentage,
        student_roll:student_roll
    }),
  }).then(response=>response.json()).then(data=>{
    
     if(data.as){
         invalid1.innerText="Data added succefully";
     invalid1.style.display="block";
           
            setTimeout(()=>{
                
          invalid1.style.display="none";
            },2000);
            
     }
     else{
        invalid1.innerText="Data not add..";
     invalid1.style.display="block";
           
            setTimeout(()=>{
                
          invalid1.style.display="none";
            },2000);


     }
  });
}
});
//marks count
fetch("/count")
.then(response=>response.json())
.then(data=>{
    total_student2.innerText=data.marks_rows;
    total_student10.innerText=data.marks_rows;

})
//attendence adding
invalidpro.style.display="none";
let student_add8=document.querySelector(".student_add8");
let a09=document.getElementById("a09");
let clear18=document.getElementById("clear18");
a09.addEventListener("click",()=>{
    student_add8.style.display="none";
})
student_add8.style.display="none";
add20.addEventListener("click",()=>{
    student_add8.style.display="block";


})
clear18.addEventListener("click",()=>{
    a1t.value="";
    a2t.value="";
    a3t.value="";
})
//adding attendence
donex.addEventListener("click",()=>{
    rollc=a1t.value;
    present=a2t.value;
    working=a3t.value;
    if (rollc === "" || present ==="" || working ===""){
        invalidpro.innerText="Pleace fill currectly";
     invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);

    }
    else{
    fetch("/add_attendence",{
        method:"POST",
        headers:{
             "Content-Type":"application/json"
        },
        body:JSON.stringify({
            rollc:rollc,
            present:present,
            working:working
        }),
    }).then(responce=>responce.json())
    .then(data=>{
        if(data.ji){
         invalidpro.innerText="Attendence added succefully";
     invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);
            
     }
     else{
        invalidpro.innerText="sorry try agin..";
     invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);
        }
    });
}

});
//seaching attendence1
function seachattendence(){
   let u=zaid7.value;
    if(u==""){
        invalidpro.innerText="pleace enter...";
     invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);

    }
    else{
    fetch("/ali0",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            },
        body:JSON.stringify({
            u:u
        })

    }).then(responce=>responce.json()).then(data=>{
        
        if (data.found9){
             kk.children[data.rowpo].style.backgroundColor="red";
           
            setTimeout(()=>{
                 kk.children[data.rowpo].style.backgroundColor="#D1FAE5";
          
            },2000);
            
        }
        else{
            invalidpro.innerText="Student not found..";
            invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);
        }
    });
//    data taking
   fetch("/ali78",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            },
        body:JSON.stringify({
            ui:u
        }),
    }).then(response=>response.json()).then(data=>{
        total_student11.innerText=data.pipo[3]
         total_student22.innerText=data.pipo[1]
          total_student33.innerText=data.pipo[2]
            
        
    });

//seaching attendence2
    fetch("/ali01",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            },
        body:JSON.stringify({
            up:u
        }),

    }).then(response=>response.json()).then(data=>{
        if (data.found99){
             kk1.children[data.rowpo1].style.backgroundColor="red";
           
            setTimeout(()=>{
                 kk1.children[data.rowpo1].style.backgroundColor="#D1FAE5";
          
            },2000);
            
        }
    });
}
}
markss1.addEventListener("click",()=>{
    
   seachattendence();
   
});
//delete option
delete10.addEventListener("click",()=>{
    jaan=zaid7.value;
    fetch("/gohead",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            },
        body:JSON.stringify({
           jaan:jaan
        }),

    }).then(response=>response.json()).then(data=>{
        console.log(data.bye);
          if(data.bye){
             invalidpro.innerText="marks data deleted..";
            invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);

          }
          else{
             invalidpro.innerText="sorry try again..";
            invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);

          }
    });
});
//makrs data showing
fetch("/studentsmmm")
.then(response=>response.json())
.then(data=>{
    data.ms1.forEach((student99,index99)=>{
         let fazil=document.createElement("div");
        hanas(fazil);
         
         uwise3.append(fazil);
          for(j=0; j<4; j++){
            let umar=document.createElement("span");
             noor(umar);
              umar.innerText=student99[j];
            fazil.append(umar);
           
         }
        let deletebtn=document.createElement("button");
         fazil.append(deletebtn);
         usman(deletebtn);
         deletebtn.innerText="DELETE";
         deletebtn.dataset.row=index99+2;
         deletebtn.addEventListener("click",()=>{
            let row8=deletebtn.dataset.row;
            fetch("/delete_student10",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    row8:row8
                })
            }).then(response=>response.json()).then(data=>{
                console.log(data.oo)
                if(data.oo){
                    fazil.remove();
                     invalidpro.innerText="marks data deleted..";
            invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);
                }
                else{
                     invalidpro.innerText="sorry try again..";
            invalidpro.style.display="block";
           
            setTimeout(()=>{
                
          invalidpro.style.display="none";
            },2000);

                }
            })
         })
        
       
    });
});
