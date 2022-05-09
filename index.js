function changeddl(obj) {

    var text = obj.options[obj.selectedIndex].text;
    var ddl2 = document.querySelectorAll('.iOperation option');
    for (var i = 1; i < ddl2.length; i++) {
        var option = ddl2[i];
        option.style.display = 'none';
        if (text == 'Bachelor of Arts (B.A)') {
            if (['B.A in Education', 'B.A in Journalism and Mass Communication','B.A in Politics','B.A in Psychology','B.A in Computer Science','B.A in English Language','B.A in English Literature'].indexOf(option.text) > -1)
                option.style.display = 'block'

        }
        if (text == 'Bachelor of Architecture ( B.Arch)') {
            if (['B.Arch in Commercial', 'B.Arch in Residential','B.Arch in Landscaping','B.Arch in Interior Architecture','B.Arch in Urban Design','B.Arch in Green Building Design','B.Arch in Industrial Architecture'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Bachelor of Business Administration ( B.B.A)') {
            if (['BBA in Aviation', 'BBA in Logistics' ,'BBA in Strategic Finance','BBA in Entrepreneurship' ,'BBA in Business Analytics','BBA in Finance &amp; Accountancy','BBA in Global' ,'BBA in Travel &amp; Tourism Management'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Bachelor of Business Management (B.B.M)') {
            if (['B.B.M in Accounting', 'B.B.M in Finance','B.B.M in International Business','B.B.M in Management Information Systems (MIS)','B.B.M in Human Resource Management','B.B.M in Personal Management or Human Resource Development' ,'B.B.M in Product Research and Development','B.B.M in Sales and Marketing'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Bachelor of Commerce (B.Com)') {
            if (['B.Com in Accounts and Finance', 'B.Com in Economics','B.Com in Investment Management','B.Com in Banking and Insurance','B.Com in Financial Market','B.Com in Computer Applications','B.Com in Statistics','B.Com in Information Technology','B.Com in International Business'
                    ,'B.Com in Banking and Finance',	
                        'B.Com in Accountancy',
                        'B.Com in Banking and Insurance',
                        'B.Com in Business Economics',
                            'B.Com in E-Commerce',
                'B.Com in Foreign Trade Management'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

                    if (text == 'Bachelor of Technology (B.Tech)') {
                        if (['B.Tech in  Aeronautical Engineering',
    'B.Tech in Computer Science and Engineering',
    'B.Tech in Artificial Engineering',
    'B.Tech in Machine Learning',
    'B.Tech in Data Science',
    'B.Tech in Cloud Computing',
    'B.Tech in Mechanical Engineering',
    'B.Tech in Civil Engineering',
    'B.Tech in Electrical Engineering',
    'B.Tech in Electronics and Communication Engineering'].indexOf(option.text) > -1)
                            option.style.display = 'block'
                    }


                    if (text == 'Bachelor of Engineering(B.E)') {
                        if (['B.E in  Aeronautical Engineering',
    'B.E in Computer Science and Engineering',
    'B.E in Artificial Engineering',
    'B.E in Machine Learning',
    'B.E in Data Science',
    'B.E in Cloud Computing',
    'B.E in Mechanical Engineering',
    'B.E in Civil Engineering',
    'B.E in Electrical Engineering',
    'B.E in Electronics and Communication Engineering'].indexOf(option.text) > -1)
                            option.style.display = 'block'
                    }






        if (text == 'Bachelor of Science(B.Sc)') {
            if (['B.Sc. in Agriculture',
    'B.Sc. in Animation',
    'B.Sc. in Aviation',
    'B.Sc. in Biochemistry',
    'B.Sc. in Computer Science',
    'B.Sc. in Electronic',
    'B.Sc. in Fashion Technology',
    'B.Sc. in Food Technology'
    ,'B.Sc. in Forensic Science',
    'B.Sc. in Forestry',
    'B.Sc. in Medical Technology',
    'B.Sc. in Microbiology',
    'B.Sc. in Multimedia',
    'B.Sc. in Nautical Science',
    'B.Sc. in Nursing',
    'B.Sc. in Nutrition',
    'B.Sc. in Physiotherapy',
    'B.Sc. in Psychology',
    'B.Sc. in Genetics',
    'B.Sc. in Information Technology',
    'B.Sc. in Interior Design',
    'B.Sc. in PCM',
    'B.Sc. in Physics',
    'B.Sc. in Chemistry',
    'B.Sc. in Maths',
    'B.Sc. in Zoology',
    'B.Sc. in Statistics',
    'B.Sc. in Botany',
    'B.Sc. in Home Science'].indexOf(option.text) > -1)
                            option.style.display = 'block'
                    }


                    if (text == 'Bachelor of Computer Science(B.C.S)') {
                        if (['B.C.S in AI',
    'B.C.S in ML',
    'B.C.S in Cognitive Science',
    'B.C.S in Computer Graphics',
    'B.C.S in Data Processing',
    'B.C.S in Information Technology',
    'B.C.S in Software Engineering',
    'B.C.S in Theoretical Computer Science',
    'B.C.S in Bioinformatics'].indexOf(option.text) > -1)
                            option.style.display = 'block'
                    }

        if (text == 'Master of Arts(M.A)') {
            if (['MA Political Science','MA History','MA Psychology','MA Communication Studies','MA Philosophy',
'MA Archaeology',
'MA Sociology','MA Religious Studies',
'MA Geography','MA Literature','MA Library & Information Science',
'MA Linguistics','MA Teaching Education','MA International Relations'
].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Arts in Management(M.A.M)') {
            if (['M.A.M Finance',
'M.A.M Consulting',
'M.AM Marketing'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Business Administration(M.B.A)') {
            if (['MBA in General Management',
'MBA in International Management',
'MBA in Strategy',
'MBA in Consulting',
'MBA in Finance Leadership',
'MBA in Entrepreneurship',
'MBA in Marketing',
'MBA in Operations Management'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Human Resource Management(M.H.R.M)') {
            if (['M.H.R.M in Training and Development',
'M.H.R.M in Compensation and Benefits',
    'M.H.R.M in Recruiting',
'M.H.R.M in Organizational Leadership',
'M.H.R.M in Financial Management'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Technology(M.Tech)') {
            if (['M.Tech in Thermal Engineering',
'M.Tech in Computer Integrated Manufacturing',
'M.Tech in Automobile Engineering',
'M.Tech in Manufacturing Engineering',
'M.Tech in Material Technology',
'M.Tech in Industrial Engineering',
'M.Tech in Product Design and Development',
'M.Tech in Industrial Safety Engineering'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Computer Application(M.C.A)') {
            if (['MCA in Management Information Systems (MIS)',
'MCA in Systems Management',
'MCA in Systems Engineering',
'MCA in Systems Development',
'MCA in Cloud Computing',
'MCA in Mobile Computing',
'MCA in Networking',
'MCA in Hardware Technology'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Commerece(M.Com)') {
            if (['M.Com in Finance',
'M.Com in Accounting and Finance',
'M.Com in Marketing',
'M.Com in Computer application',
'M.Com in Financial management',
'M.Com in Business management'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

if (text == 'Master of Sciecne(M.Sc)') {
    if (['M.Sc in Chemistry', 
'M.Sc in Planetology',	
'M.Sc in Cyber Forensic',
'M.Sc in Pharmacy',	
'M.Sc in Data Analytics',
'M.Sc in Stem Cell Therapy',
'M.Sc in Life Science',	
'M.Sc in Forestry', 	
'M.Sc in Systems Engineering',
'M.Sc in Forensic Science',	
'M.Sc in Paediatrics',	
'M.Sc in Design Computing',
'M.Sc in Oceanography', 	
'M.Sc in Physiology',	
'M.Sc in Biochemistry'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Master of Engineering(M.E)') {
            if (['M.E in Civil Engineering',
'M.E in Computer Science and Engineering',
'M.E in Chemical Engineering',
'M.E in Electrical Engineering',
'M.E in Mechanical Engineering',
'M.E in Electronics and Communication Engineering'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }

        if (text == 'Others') {
            if (['Others'].indexOf(option.text) > -1)
                option.style.display = 'block'
        }   
        
    }
}


    // let myButton = document.getElementById('sub').onclick = function(){
    //     location.href="C:\VS Code\Web_To_Lead\registration-successful-message-html\index.html";
    // }



























