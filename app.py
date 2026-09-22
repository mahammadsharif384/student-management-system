from openpyxl import load_workbook,Workbook
from flask import Flask, render_template, jsonify,request
import os
app = Flask(__name__)
file_name="sharif.xlsx"
file_marks_name="marks1.xlsx"
attendence="attendence.xlsx"
if not os.path.exists(file_name):
        workbook=Workbook()
        sheet=workbook.active
        sheet.append(["name","Roll  number","Branch","Year","Phone number","photo"])
        workbook.save(file_name)

if not os.path.exists(file_marks_name):
        workbook=Workbook()
        sheet=workbook.active
        sheet.append(["student_roll","physices","chemistry","social","english","pythan","total","Result","percentage","Grade"])
        workbook.save(file_marks_name)

if not os.path.exists(attendence):
        workbook=Workbook()
        sheet_attendence=workbook.active
        sheet_attendence.append(["Roll Number","Prsentent days","Absent days","Overal attendence"])
        workbook.save(attendence)


# Complete webpage
@app.route("/")
def home():
    return render_template("index.html")


# Student data API
@app.route("/students")
def students():
    workbook = load_workbook("sharif.xlsx")
    sheet = workbook.active

    maaz = sheet.max_row - 1
    ms = []

    for i in range(2, maaz + 2):
        ms.append([
            sheet.cell(i, 1).value,
            sheet.cell(i, 2).value,
            sheet.cell(i, 3).value,
            sheet.cell(i, 4).value,
            sheet.cell(i, 5).value
        ])
    love=0
    for mp in range(2,maaz+2):
        if sheet.cell(mp,1) is not None:
            love=love+1
   
    return jsonify(ms=ms,love=love)
#delete student
@app.route("/delete_student", methods=["POST"])
def delete_student():

    data = request.get_json()

    row3 = int(data["row3"])

    workbook = load_workbook("sharif.xlsx")
    sheet = workbook.active

    sheet.delete_rows(row3, 1)

    workbook.save("sharif.xlsx")
    return jsonify({
        "yes": True
    })
# retriving data
@app.route("/add_student",methods=["POST"])
def add_student():

    data=request.get_json()
    name=data["name"]
    roll=data["roll"]
    branch=data["branch"]
    year=data["year"]
    phone=data["phone"]
    workbook=load_workbook("sharif.xlsx")
    sheet=workbook.active
    sheet.append([name,roll,branch,year,phone])
    workbook.save("sharif.xlsx")
    return jsonify({
        "ok":True
    })
# seaching in xl
@app.route("/seaching",methods=["POST"])
def seaching():
    data=request.get_json()
    go=data["go"]
    workbook=load_workbook("sharif.xlsx")
    sheet=workbook.active
    found=0
    for i in range(2,sheet.max_row+1):
        if str(go) == str(sheet.cell(i,2).value):
          return jsonify({
            "found":True,
            "row":i-1
          })
          
    return jsonify({
        "found":False
    })
# marks system
@app.route("/seaching1", methods=["POST"])
def seaching1():

    data = request.get_json()
    go1 = data["go1"]
    workbook=load_workbook("sharif.xlsx")
    sheet=workbook.active
    workbook = load_workbook("marks1.xlsx")
    sheet1 = workbook.active
    name=[]
    for k in range(2,sheet.max_row+1):
        if str(go1)==str(sheet.cell(k,2).value):
                name=[sheet.cell(k,1).value]
                break
            
            
    for i in range(2, (sheet1.max_row -1)+2):

        if str(go1) == str(sheet1.cell(i,1).value):
            print(name)
            return jsonify({
                "found": True,
                
                "row1":[
                    sheet1.cell(i,1).value,
                    sheet1.cell(i,2).value,
                    sheet1.cell(i,3).value,
                    sheet1.cell(i,4).value,
                    sheet1.cell(i,5).value,
                    sheet1.cell(i,6).value,
                    sheet1.cell(i,7).value,
                    sheet1.cell(i,8).value,
                    sheet1.cell(i,9).value,
                    sheet1.cell(i,10).value
                ],
                "name":name
            })

    return jsonify({"found":False})
        

   

@app.route("/usman",methods=["POST"])
def usman():
    data=request.get_json()
    def iran(percentage):
        if percentage>=90:
            grade="A"
            return grade
        elif percentage<90 and percentage>=50:
            grade="B"
            return grade
        elif percentage<50 and percentage>=30:
            grade="c"
            return grade
        else:
            grade="d"
            return grade

    student_roll=data["student_roll"]
    phy=data["phy"]
    ch=data["ch"]
    en=data["en"]
    so=data["so"]
    py=data["py"]
    total_marks=data["total"]
    result=data["result"]
    percentage=data["percentage"]
    Grade_marks=iran(percentage)
    workbook=load_workbook("marks1.xlsx")
    sheet1=workbook.active
    sheet1.append([student_roll,phy,ch,so,en,py,total_marks,result,percentage,Grade_marks])
    workbook.save("marks1.xlsx")

    return jsonify({
        "as":True,
        
    })


@app.route("/count")
def count():
    workbook=load_workbook("marks1.xlsx")
    sheet1=workbook.active
    return jsonify({
        "marks_rows":sheet1.max_row-1

    })
#delete marks row
@app.route("/delete_marks",methods=["POST"])
def delete_marks():
    data=request.get_json()
    delete_marks_row=data["delete_marks_row"]
    workbook=load_workbook("marks1.xlsx")
    sheet1=workbook.active
    
    
    found=0
    for i in range(2,sheet1.max_row+1):
        if str(delete_marks_row)==str(sheet1.cell(i,1).value):
            sheet1.delete_rows(i,1)
            found=1
            break
    
    
    if found == 1:
        workbook.save("marks1.xlsx")
        return jsonify({
            "perfect":True
        })

    else:
        return jsonify({
            "perfect":False
        })

            

#attendence adding
@app.route("/add_attendence",methods=["POST"])
def add_attendence():
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    data=request.get_json()
    rollc=data["rollc"]
    present=data["present"]
    working=data["working"]
    absent_days=int(working)-int(present)
    overal=round((int(present)/int(working))*100,2)
    sheet_attendence.append([rollc,present,absent_days,overal])
    workbook.save("attendence.xlsx")
    return jsonify({
        "ji":True
    })
@app.route("/ali")
def ali():
    workbook=load_workbook("sharif.xlsx")
    sheet=workbook.active
    jj=[]
    for i in range(2,sheet.max_row+1):
        jj.append([sheet.cell(i,1).value,
        sheet.cell(i,2).value,
        sheet.cell(i,3).value,])
    
    return jsonify({
        "jj":jj
    })
@app.route("/ali1")
def ali1():
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    pp=[]
    for u in range(2,sheet_attendence.max_row+1):
        pp.append([sheet_attendence.cell(u,1).value,
        sheet_attendence.cell(u,2).value,
        sheet_attendence.cell(u,3).value,
        sheet_attendence.cell(u,4).value,])
    return jsonify({
        "pp":pp
    })

@app.route("/ali0",methods=["POST"])
def ali0():
    data=request.get_json()
    u=data["u"]
    workbook=load_workbook("sharif.xlsx")
    sheet=workbook.active
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    found9=False
    for i in range(2,sheet.max_row+1):
        if str(u) == str(sheet.cell(i,2).value):
           return jsonify({
            "found9":True,
            "rowpo":i-1
           })
    return jsonify({
            "found9":False
           })
@app.route("/ali01",methods=["POST"])
def ali01():
    data=request.get_json()
    up=data["up"]
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    found99=False
    for j in range(2,sheet_attendence.max_row+1):
        if str(up) == str(sheet_attendence.cell(j,2).value):
           print(j-1,"hello")
           return jsonify({
            "found99":True,
            "rowpo1":j-1
           })
    return jsonify({
            "found99":False
           }) 
@app.route("/ali78",methods=["POST"])
def ali78():
    data=request.get_json()
    ui=data["ui"]
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    for i in range(2,sheet_attendence.max_row+1):
        if str(ui) == str(sheet_attendence.cell(i,1).value):
                return jsonify({
                "good":True,
                "pipo":[sheet_attendence.cell(i,1).value,
                sheet_attendence.cell(i,2).value,
                sheet_attendence.cell(i,3).value,
                sheet_attendence.cell(i,4).value
                ]
           })

@app.route("/gohead",methods=["POST"])
def gohead():
    data=request.get_json()
    jaan=data["jaan"]
    pip=int(jaan)
    workbook=load_workbook("attendence.xlsx")
    sheet_attendence=workbook.active
    
    for i in range(2,sheet_attendence.max_row+1):
        if str(jaan) == str(sheet_attendence.cell(i,1).value):
            sheet_attendence.delete_rows(pip,1)
            workbook.save(attendence)
            return jsonify({
                "bye":True
           })
            break
    return jsonify({
        "bye":False
    })
#marks data showing
@app.route("/studentsmmm")
def studentsmmm():
    workbook = load_workbook("marks1.xlsx")
    sheet1 = workbook.active

    maaz1 = sheet1.max_row - 1
    ms1 = []

    for i in range(2, maaz1 + 2):
        ms1.append([
            sheet1.cell(i, 1).value,
            sheet1.cell(i, 2).value,
            sheet1.cell(i, 3).value,
            sheet1.cell(i, 4).value,
            sheet1.cell(i, 5).value
        ])
    love1=0
    for mp in range(2,maaz1+2):
        if sheet1.cell(mp,1) is not None:
            love1=love1+1
   
    return jsonify(ms1=ms1,love1=love1)
#delete student
@app.route("/delete_student10", methods=["POST"])
def delete_student10():

    data = request.get_json()
    workbook = load_workbook("marks1.xlsx")
    sheet1 = workbook.active
    row8 =int( data["row8"])
    print(type(row8))
    print(type(sheet1.cell(1,1).value))
    if row8>=2 and row8<=sheet1.max_row:
        sheet1.delete_rows(row8, 1)
        workbook.save("marks1.xlsx")
        return jsonify({
            "oo": True
        })
    return jsonify({
                "oo": False
            })
app.run(debug=True)