document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the student ID entered by the user
    let stdemail = document.getElementById('email').value
    
    // Define grades for each student ID
    const grades = {
        "khaledyosry00@gmail.com": { name: "خالد يسري", totalGrades: 74.00 },
        "esraa1691ahmed@gmail.com": { name: "إسراء أحمد عبد الفتاح محمد", totalGrades: 0.00 },
        "ahmadaymansobeh@gmail.com": { name: "احمد ايمن", totalGrades: 0.00 },
        "ahmedrafat.mohomed@gmail.com": { name: "Ahmed Rafat", totalGrades: 93.00 },
        "ameeraahmed200027@gmail.com": { name: "Ameera Ahmed Jaffer", totalGrades: 100.00 },
        "shehabhany2027@gmail.com": { name: "Shehab eldin hany elskaly", totalGrades: 0.00 },
        "mustafasabrri@gmail.com": { name: "Mostafa Sabry", totalGrades: 96.00 },
        "olaalabdallua@gmail.com": { name: "علا العبد الله", totalGrades: 102.00 },
        "basmaamen255@gmail.com": { name: "بسمه أمين محمد", totalGrades: 0.00 },
        "mohamedismail71655@gmail.com": { name: "Mohamed Ismail", totalGrades: 98.00 },
        "noureleslam96@gmail.com": { name: "نور الاسلام مجدي عبد اللطيف", totalGrades: 97.00 },
        "mohabawad191@gmail.com": { name: "مهاب عواد عبد الفتاح", totalGrades: 91.00 },
        "rehamatta1000@gmail.com": { name: "ريهام محمد", totalGrades: 99.00 },
        "gelanabdelaziz306@gmail.com": { name: "جيلان عبد العزيز", totalGrades: 0.00 },
        "hishammostafa7766@gmail.com": { name: "Hisham Mostafa ahmed", totalGrades: 0.00 },
        "sara.y.mhmd@gmail.com": { name: "sara kholif", totalGrades: 68.00 },
        "raedmohamed.info@gmail.com": { name: "Raed Mohamed Badr Ahmed", totalGrades: 100.00 },
        "minaatefmm1342004@gmail.com": { name: "مينا عاطف", totalGrades: 0.00 },
        "abdelrahmanmamdouh256@gmail.com": { name: "Abdelrahman Mamdouh Salaheldin", totalGrades: 0.00 },
        "hamohanafy26@gmail.com": { name: "محمد أحمد حنفي محمود", totalGrades: 0.00 },
        "eng.eman.gamal92@gmail.com": { name: "Eman Gamal", totalGrades: 0.00 },
        "rawashdehdima@gmail.com": { name: "ديمة بسام الرواشدة", totalGrades: 97.00 },
        "sarah.metwaly.internships@gmail.com": { name: "Sarah Metwaly", totalGrades: 98.00 },
        "banoobnagy@gmail.com": { name: "بانوب ناجي أدوار نصرالله", totalGrades: 97.00 },
        "habibaadel73583@gmail.com": { name: "حبيبة عادل علي غالب", totalGrades: 96.00 },
        "yousefelithy7766@gmail.com": { name: "يوسف خالد عمر حسن الليثي", totalGrades: 0.00 },
        "zeinab.nadi.2020@gmail.com": { name: "زينب نادي صالح", totalGrades: 91.00 },
        "adhamdoom811@gmail.com": { name: "Adham Ehab", totalGrades: 80.00 },
        "mahmmoudnayel2004@gmail.com": { name: "Mahmoud Mohamed Nayel", totalGrades: 92.00 },
        "m.mansy2026@gmail.com": { name: "محمد احمد منسي", totalGrades: 63.00 },
        "helananemr692@gmail.com": { name: "Helana Nemr", totalGrades: 94.00 },
        "km7020602@gmail.com": { name: "كريم محمد عبدربه", totalGrades: 100.00 },
        "mf01000009120@gmail.com": { name: "محمد فكري", totalGrades: 93.00 },
        "mohisham22545@gmail.com": { name: "اماني هشام عبدالجليل على", totalGrades: 90.00 },
        "Abdulrahmansalah881@gmail.com": { name: "Abdelrahman salah mohammed", totalGrades: 92.00 },
        "mohamednour.sca@gmail.com": { name: "محمد نور الدين فوزي", totalGrades: 99.00 },
        "ahmedtalha40498@gmail.com": { name: "احمد خالد السيد احمد", totalGrades: 98.00 },
        "mohamedalaa333216@gmail.com": { name: "محمد علاء الدين طلعت", totalGrades: 0.00 },
        "Ahmedibghandour@gmail.com": { name: "Ahmed Ibrahim Mohamed Ibrahim ElGhandour", totalGrades: 0.00 },
        "lailamostafa2311@gmail.com": { name: "ليلى مصطفى", totalGrades: 0.00 },
        "ba2377120@gmail.com": { name: "بدر احمد الجبالي الصوباري", totalGrades: 68.00 },
        "ahmedhassan0765479854@gmail.com": { name: "Ahmed Hassan El Sayed Abdallah Ali Elhelaly", totalGrades: 0.00 },
        "youssefaniss.2001@gmail.com": { name: "يوسف أنيس", totalGrades: 0.00 },
        "Youssefbahaa211@gmail.com": { name: "Youssef bahaa", totalGrades: 75.00 },
        "Nardeenashraf2014@gmail.com": { name: "Nardine ashraf karam", totalGrades: 0.00 },
        "mennahahmed2005@gmail.com": { name: "Menna Ahmed", totalGrades: 0.00 },
        "mostafa.saidabdelwahed@gmail.com": { name: "مصطفي ابو النيل", totalGrades: 0.00 },
        "akrmyasser2003@gmail.com": { name: "اكرم ياسر", totalGrades: 0.00 },
        "Olaali2815@gmail.com": { name: "علا عبد الله طه علي", totalGrades: 95.00 },
        "alhassan6saeed@gmail.com": { name: "الحسن سعيد", totalGrades: 0.00 },
        "nehad.boody74@gmail.com": { name: "Nehad elsayed", totalGrades: 98.00 },
        "F.alzhraamohamed@gmail.com": { name: "فاطمة الزهراء محمد كامل", totalGrades: 0.00 },
        "mooaz.frontend2020@gmail.com": { name: "معاذ محمد مطاوع", totalGrades: 0.00 },
        "ayayahya232@gmail.com": { name: "آيه يحي عصمت", totalGrades: 86.00 },
        "nadaismael287@gmail.com": { name: "Nada Ismail", totalGrades: 0.00 },
        "hanaaeltahawy450@gmail.com": { name: "هناء عماد الطحاوي", totalGrades: 52.00 },
        "ahmedmzika11@gmail.com": { name: "احمد اشرف عبد العال على", totalGrades: 0.00 },
        "mahmoud.elboraey24@gmail.com": { name: "محمود البرعي", totalGrades: 94.00 },
        "shehaoh55@gmail.com": { name: "شهاب حمدي", totalGrades: 78.00 },
        "mada5072@gmail.com": { name: "محمد سليمان محمد", totalGrades: 0.00 },
        "mhmdabwalla748@gmail.com": { name: "محمد عبد المهيمن ابو العلا", totalGrades: 0.00 },
        "kiroloskameel1@gmail.com": { name: "كرولس كمال", totalGrades: 82.00 },
        "nadamogheth@gmail.com": { name: "Nada mogheth", totalGrades: 89.00 },
        "abdo285mohamed01010@gmail.com": { name: "عبدالرحمن محمد سعد", totalGrades: 100.00 },
        "ammarmohamedah@gmail.com": { name: "Ammar Mohamed", totalGrades: 0.00 },
        "Nourhansayed165@gmail.com": { name: "نورهان السيد حسين احمد", totalGrades: 0.00 },
        "emanelnady2001@gmail.com": { name: "ايمان عوض السيد", totalGrades: 97.00 },
        "maherblbse@gmail.com": { name: "Maher", totalGrades: 0.00 },
        "mohamedvets98@gmail.com": { name: "محمد رمضان عبد الحليم", totalGrades: 67.00 },
        "marwananwarpls@gmail.com": { name: "مروان عمرو", totalGrades: 0.00 },
        "alizaghloul62@gmail.com": { name: "على عبدالرحمن زغلول", totalGrades: 100.00 },
        "aodawood78@gmail.com": { name: "Abdalla Dawood", totalGrades: 53.00 },
        "mostafanassar630@gmail.com": { name: "مصطفي ايهاب نصار", totalGrades: 70.00 },
        "mariamelashkar0@gmail.com": { name: "مريم الاشقر", totalGrades: 0.00 },
        "aya.alabd.18@gmail.com": { name: "آية محمد", totalGrades: 0.00 },
        "basantgamal070@gmail.com": { name: "بسنت جمال كامل", totalGrades: 101.00 },
        "rowydadesoky7@gmail.com": { name: "رويدا السيد محمد", totalGrades: 99.00 },
        "malassmar141@gmail.com": { name: "محمد الاسمر", totalGrades: 0.00 },
        "desha18h@gmail.com": { name: "Mohamed ahmed mostafa hamza", totalGrades: 0.00 },
        "emanshehata258@gmail.com": { name: "ايمان عبدالفتاح شحاته", totalGrades: 100.00 },
        "dnyaalsbay@gmail.com": { name: "Donia Mohamed", totalGrades: 0.00 },
        "eslam352005@gmail.com": { name: "Eslam ayman", totalGrades: 94.00 },
        "yousefvelsafty115@gmail.com": { name: "يوسف خالد الصفتى", totalGrades: 0.00 },
        "fatmaelfar13@gmail.com": { name: "Fatma Elfar", totalGrades: 82.00 },
        "ahmeddahaia3@gmail.com": { name: "Ahmed Elsayed", totalGrades: 0.00 },
        "ibrahimhashem2005@gmail.com": { name: "ibrahim hashem hashem", totalGrades: 0.00 },
        "Shabanyasean7@gmail.com": { name: "Shaban yasean", totalGrades: 0.00 },
        "Mostafagoweda99@gmail.com": { name: "مصطفي صبري جويده", totalGrades: 0.00 },
        "nassefmohamed571@gmail.com": { name: "محمد أحمد محمد ناصف", totalGrades: 0.00 },
        "eslam.fadl2338@gmail.com": { name: "اسلام فضل شلقامي", totalGrades: 92.00 },
        "youssef2002065@gmail.com": { name: "يوسف محمد فؤاد يوسف احمد", totalGrades: 97.00 },
        "elnagarshereen150@gmail.com": { name: "شيرين صبحي النجار", totalGrades: 0.00 },
        "ahmedmohamed00521@gmail.com": { name: "ahmed mohamed fawzy", totalGrades: 98.00 },
        "IbraheemShaheen59@gmail.com": { name: "إبراهيم فتحي صابر شاهين", totalGrades: 0.00 },
        "nourataalla13@gmail.com": { name: "نور صفوت احمد عطاالله", totalGrades: 0.00 },
        "mohamad.hesham.code@gmail.com": { name: "محمد هشام محمد ابراهيم", totalGrades: 0.00 },
        "mennagabr478@gmail.com": { name: "منه الله محمود على", totalGrades: 93.00 },
        "mokh4997@gmail.com": { name: "محمد الدسوقي", totalGrades: 100.00 },
        "ahmedsetita599@gmail.com": { name: "ahmed walid setita", totalGrades: 0.00 },
        "amr2amr3@gmail.com": { name: "عمرو احمد العربي", totalGrades: 99.00 },
        "alimohamedabo12334@gmail.com": { name: "علي محمد ابو النصر", totalGrades: 0.00 },
        "hanehatemelbasuony20@gmail.com": { name: "هاني حاتم علي علي البسيوني", totalGrades: 94.00 },
        "modyelprince41@gmail.com": { name: "محمود محمد سيد احمد", totalGrades: 0.00 },
        "mohamedelganzory621@gmail.com": { name: "Mohamed Adel Elganzory", totalGrades: 98.00 },
        "dodygh@gmail.com": { name: "محمود عبد المنعم محمد حسن غنيم", totalGrades: 74.00 },
        "Ahmed.badawy1003@gmail.com": { name: "Ahmed badawy sedeek", totalGrades: 91.00 },
        "a7medsalem1598@gmail.com": { name: "أحمد سالم", totalGrades: 0.00 },
        "Malak.abozied6@gmail.com": { name: "ملاك محمد المبروك ابوزيد", totalGrades: 0.00 },
        "ahmedashraf121281@gmail.com": { name: "Ahmed Ashraf Mohamed", totalGrades: 0.00 },
        "mohamedsalamma25@gmail.com": { name: "محمد السيد محمد على سلامة", totalGrades: 97.00 },
        "shahdgaber32@gmail.com": { name: "شهد جابر فؤاد", totalGrades: 0.00 },
        "salmaelrayan731@gmail.com": { name: "Salma Khaled Elrayan", totalGrades: 92.00 },
        "mennaamged67@gmail.com": { name: "منه الله أمجد السيد", totalGrades: 96.00 },
        "ahmedsaiedmalcomx@gmail.com": { name: "احمد سعيد منصور السيد", totalGrades: 0.00 },
        "ahmedbarakat6581@gmail.com": { name: "Ahmed Safaa Barakat", totalGrades: 0.00 },
        "ahmedtaha885@gmail.com": { name: "Ahmed Taha Mohamed", totalGrades: 0.00 }
    };
    
    
    let gradeDisplay = document.getElementById('gradeDisplay');
    
    if (stdemail in grades) {
        // Display grades for the student
        let gradeList = '<h2>Your Grades : ' +  '</h2>';
        gradeList += '<ul>';
            gradeList += '<li>' +'Name : '+ grades[stdemail].name + '</li>';
            gradeList += '<li>' +'Grade : '+ grades[stdemail].totalGrades + '</li>';
        gradeList += '</ul>';
        gradeList +='<p>'+'Bravo! May success always be with you.'+'<p>';
        gradeDisplay.innerHTML = gradeList;

    } else {
        // Display error message if ID is not found
        gradeDisplay.innerHTML = '<p>email not found</p>';
    }
});



document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
  document.addEventListener('keydown', (event) => {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && ['I', 'J'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'U')) {
      event.preventDefault();
    }
  });
  const detectDevTools = () => {
    let threshold = 160;
    setInterval(() => {
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        alert("Developer tools detected. Please close it.");
        window.location.reload();
      }
    }, 500);
  };
  
  detectDevTools();
      