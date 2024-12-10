
$(function() {
var smsg="Hi";
$("#form").submit(function(){
$("#msend").trigger("click");
return false;
});
var k="";
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 t=t-2;
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h)+":"+t+" pm";
 $(".status").html("last seen today at " + time);
var lastmsg="" ;var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
$(".tick").html(tick);
  
$(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
$("#msend").click(function(){
eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
var a="";
var scroll=($(".conversation-container").scrollTop())+1550;
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
var msg=$("#val").val().trim();
var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
msg==""?$("#val").focus():($("#ap").append(para),$(".status").css("margin-left","0"),
$("#form")[0].reset(),setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("typing... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
});
function send(){
var sr=lastmsg.split(" ");
var search="";
 scroll=($(".conversation-container").scrollTop())+155065;
for(x=0;x<sr.length;x++){
    search+=sr[x]+"+";
    
}
var a="";
var pq=["Really?"," Okay","Really? "];
var p=pq[Math.floor(Math.random()*3)];
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
 var hello=["HELLO","HI", "HELLO SA","HEY THERE","HEY","HI DUDE","HI SA","HELLO Jarvis","HI Serhat","HLO","MRB","H"];
 var coin=["FLIP A COIN"];
 var gm=["GM","GOOD MORNING","GOOD MORNING JARVIS", "GOOD MORNING SA","GOOD M","G MORNING"];
  
var goo =["WHAT IS GOOGLE"];
 var bad=["BAD","NOT BAD","USELESS","NOT WORKING","NOT GOOD"];
 var ge=["GOOD EVNG","GOOD EVENING","GOOD EVENING Jarvis","GOOD EVENING DC"];
 var gn=["GOON NIGHT","I'M FEELING SLEEPY"];
 var welcome=["NICE WORKING", "NICE CODE","NICE","WOW","WOW IT'S WORKING","GREAT CODE","AWESOME CODE","IT'S NICE","AWESOME CODE BRO","IT'S GOOD","OH MY GOD","OMG","OHO","NICE TO MEET YOU","NICE TO MEET U","NICE TO SEE YOU","NICE TO C U","YOU ARE GREAT", "YOU ARE AWESOME"];
 var s2u=["I HATE YOU","I LOVE YOU","I MISS YOU"];
 var gaf=["GOOD AFTERNOON","GOOD AFTERNOON DC",
          "GOOD AFTERNOON SHAMS" ];
 var ly=["NO YOU ARE LYING", "NO YOU ARE LIAR","NO", "NO YOU ARE WRONG"];
  var exit=["EXIT"];
  var jp = ["CAN YOU SPEAK JAPANESE"];
 var like=["GOOD","👍🏻", "☺️","😅","LOL","ME TOO","YES","YEAH","YUPS"];
 var hru=["HOW R U?","H R U?", "HOW ARE YOU?", "HRU?","HRU", "HOW R U","H R U", "HOW ARE YOU"]; 
 var good=["I'M GOOD","I'M FINE","I AMFINE","I AM FINE AND YOU", "I'M FINE AND YOU", "I'M FINE U", "I AM FINE","I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE","FINE:)","FINE :)", "MARVELOUS","AWESOME","FINE☺️","GREAT"];
 var yes=["REALLY","JARVIS","HEY JARVIS","HEY","I AM YOUR BOSS","AI"];
 var wru=["WHO R U?","W R U?", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
 var wrud=["WHAT R U DOING?","WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY","WHAT ARE YOU DOING"];
  var bye=["OKAY BYE","GOOD BYE", "BYE","GOODBYE","TATA","SEE YOU LATER","SEE YOU AGAIN"];
  var th=["THANKS","THANK YOU"];
  var farmers=["i need seeds","i need fruits","i need fruits","i need farm medicines"];
  var st=["SHUT UP","SHUT YOUR MOUTH","FUCK YOU"];
  var qu=["WHAT","WHAT?","WHICH","WHICH?","WHEN","WHEN?","REALLY?"];
  var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH","OH YEAH"];
  var elon=["ELON","ELON MUSK","MUSK"];
  var farmingQuestions = [
  "HOW TO GROW TOMATOES",
  "BEST CROPS FOR RAINY SEASON",
  "HOW TO PROTECT CROPS FROM DROUGHT",
  "WHY ARE MY PLANTS' LEAVES YELLOW",
  "HOW TO WATER PLANTS PROPERLY",
  "WHEN TO HARVEST RICE",
  "HOW TO INCREASE SOIL FERTILITY",
  "BEST TIME TO PLANT CORN",
  "HOW TO GROW VEGETABLES IN SMALL SPACE",
  "HOW TO IMPROVE CROP",
  "HOW TO FIGHT PESTS WITHOUT CHEMICALS",
  "BENEFITS OF ORGANIC FARMING",
  "HOW TO PREPARE SOIL FOR PLANTING",
  "COMPANION PLANTS FOR TOMATOES",
  "HOW TO MAKE COMPOST",
  "CHUP",

];

  var merhaba =["MERHABA","SELAM","MERHABALAR","SELAMUN ALEYKÜM","SA"]; 
  var sbh =["GÜNAYDIN","GÜNAYDIN NASILSIN","İYİ SABAHLAR"];
  var kotu=["KÖTÜYÜM","KÖTÜ DEĞİLİM"];
  var lord=["CALL ME MY LORD"];
  var make=["WHO MADE YOU","WHO"];
  var death=["ARE YOU DEATH"]; 
  var oright=["FINE","THATS RIGHT","DONE"];
  var weather = ["WHATS THE WEATHER?", "WHAT IS THE WEATHER", "TELL ME THE WEATHER"];

  var command =["COMMAND","COMMANDS","SHOW COMMANDS"];
  
 function isInArray(x, y) { return x.indexOf(y) > -1; }
isInArray(hello, lastmsg)==true?(smsg="Hello, How are you? 😊", k="Hello, How are you? "):
isInArray(weather, lastmsg) == true ? (smsg = "Today's weather is sunny with a high of 25°C.", k = smsg) :

isInArray(coin, lastmsg)==true?(smsg="its tails😊", k="sure"):
isInArray(lord, lastmsg)==true?(smsg="Hi,MY LORD 😊", k="Hi,MY LORD"):
isInArray(merhaba,lastmsg)==true?(smsg="Merhaba,Nasılsın ?",k="Merhaba,Nasılsın ?"):
isInArray(sbh,lastmsg)==true?(smsg="Günyadın?",k="Merhaba,Nasılsın ?"):
isInArray(exit,lastmsg)==true?(smsg="exit yourself",k="i am not helping you?"):
isInArray(oright,lastmsg)==true?(smsg="oright",k=smsg):

isInArray(farmingQuestions, lastmsg) == true 
    ? (smsg = farmingResponse(lastmsg), k = smsg) :

isInArray(kotu,lastmsg)==true?(smsg="öyle mi?",k=smsg):
isInArray(yes, lastmsg)==true?(smsg="Yes, Boss", k=smsg):
isInArray(wru, lastmsg)==true?(smsg="I am Jarvis made by Dhairyashil Shinde", k=smsg):
isInArray(jp, lastmsg)==true?(smsg="hai watashi wa nihon go hanase masu", k=smsg):
isInArray(bad, lastmsg)==true?(smsg="Thanks for your precious feedback, I'll try to improve that.", k=smsg):
isInArray(wrud, lastmsg)==true?(k="Nothing special and you? ", smsg=k+"☺️"):
isInArray(bye, lastmsg)==true?(smsg="ok...Bye", k=smsg, 
setTimeout(function(){$(".status").html("last seen today at "+time)},6000),
setTimeout(function(){$(".status").css("margin-left","-50")},8000)):
isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+""):
isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+""):
isInArray(farmers,lastmsg)==true?(smsg="Alright, don't worry you can order it from our shoping section",k=smsg):
isInArray(goo, lastmsg)==true?(k="Biggest company in the world ", smsg=k+""):
isInArray(command, lastmsg)==true?(k="Just talk with me i am real person you dont need commands", smsg=k+""):

isInArray(gn, lastmsg)==true?(smsg="Good night", k=smsg):
isInArray(welcome, lastmsg)==true?(smsg="Thanks", k=smsg):
isInArray(s2u, lastmsg)==true?(smsg="Same to you", k=smsg):
isInArray(st, lastmsg)==true?(smsg="No, You Shut up", k=smsg):
isInArray(elon, lastmsg)==true?(smsg="Shape the reality", k=smsg):
isInArray(qu, lastmsg)==true?(k="I don't know ", smsg=k+"😕"):
isInArray(make, lastmsg)==true?(k="Elon Musk", smsg=k+"😕"):
isInArray(st, lastmsg)==true?(smsg="No, You Shut up", k=smsg):
isInArray(ge, lastmsg)==true?(k="Good Evening ", smsg=k+""):
isInArray(ok, lastmsg)==true?(smsg="hmm", k=smsg):
isInArray(gaf, lastmsg)==true?(k="Good Afternoon",smsg=k+""):
isInArray(like, lastmsg)==true?(smsg=p, k=p):
isInArray(good, lastmsg)==true?(smsg="Nice to hear it. 😊", k="Nice to hear it. "):
isInArray(death, lastmsg)==true?(smsg="Yes,I am death", k=smsg):
isInArray(hru, lastmsg)==true?(smsg="I'm good, What about you ? ", k=smsg):


lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q="+search+"'></iframe>",k="This are the, Top results" ):
(smsg="Sorry, I have no answer for that. If you say so I can search for you. To search, <br> type <q><b> Search Your keyword </b></q> for example type : <b>Search Sololearn</b>",k="Sorry, I have no answer for that.   If you say, so I can search for you. To search,type,Search Your keyword,for example, type, Search sololearn, ");
para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
setTimeout(function() { $('#ap').append(para);$(".status").html("online");
$(".conversation-container").scrollTop(scroll);
},1100);speak();
  
  
  
  
function farmingResponse(query) {
    if (query.includes("HOW TO GROW TOMATOES")) {
        return "To grow tomatoes, plant them in well-drained soil with plenty of sunlight. Water regularly and provide support like stakes or cages.";
    } else if (query.includes("BEST CROPS FOR RAINY SEASON")) {
        return "Rice, millet, and soybeans thrive in the rainy season due to their resistance to excess water.";
    } else if (query.includes("HOW TO PROTECT CROPS FROM DROUGHT")) {
        return "Use mulching to retain moisture, and consider drought-resistant crops such as sorghum or pearl millet.";
    } else if (query.includes("WHY ARE MY PLANTS' LEAVES YELLOW")) {
        return "Yellow leaves may indicate overwatering, nutrient deficiencies, or pests. Check soil moisture and consider adding compost or fertilizers.";
    } else if (query.includes("HOW TO WATER PLANTS PROPERLY")) {
        return "Water plants deeply and less frequently to encourage deep root growth. Watering early in the morning or late in the evening is ideal.";
    } else if (query.includes("WHEN TO HARVEST RICE")) {
        return "Rice should be harvested when the grains are hard and golden in color. A moisture level of around 20% is ideal for harvesting.";
    } else if (query.includes("HOW TO INCREASE SOIL FERTILITY")) {
        return "Add organic matter like compost or green manure, and practice crop rotation to keep soil fertile.";
    } else if (query.includes("BEST TIME TO PLANT CORN")) {
        return "The best time to plant corn is when the soil temperature reaches 60°F (15°C) or higher, usually in late spring or early summer.";
    } else if (query.includes("HOW TO GROW VEGETABLES IN SMALL SPACE")) {
        return "Use container gardening, raised beds, or vertical farming to grow vegetables in small spaces like balconies or rooftops.";
    } else if (query.includes("HOW TO IMPROVE CROP")) {
        return "Use quality seeds, provide proper irrigation, control pests, and apply appropriate fertilizers to maximize crop yield.";
    } else if (query.includes("HOW TO FIGHT PESTS WITHOUT CHEMICALS")) {
        return "Use natural remedies like neem oil, garlic spray, or insecticidal soap to control pests. You can also encourage beneficial insects like ladybugs.";
    } else if (query.includes("BENEFITS OF ORGANIC FARMING")) {
        return "Organic farming improves soil health, reduces pesticide use, and helps preserve biodiversity. It also leads to healthier produce.";
    } else if (query.includes("HOW TO PREPARE SOIL FOR PLANTING")) {
        return "Start by clearing the land of weeds and debris. Till the soil to a depth of 6-8 inches, and add compost or manure to improve fertility.";
    } else if (query.includes("COMPANION PLANTS FOR TOMATOES")) {
        return "Basil, onions, and marigolds are great companion plants for tomatoes as they help repel pests and improve growth.";
    } else if (query.includes("HOW TO MAKE COMPOST")) {
        return "Compost can be made by mixing organic waste like vegetable scraps, leaves, and grass clippings. Turn it regularly to speed up decomposition.";
    } else if (query.includes("HOW TO STORE CROPS AFTER HARVESTING")) {
        return "After harvesting, clean and dry the crops thoroughly. Store them in cool, dry, and dark conditions to prevent spoilage.";
    } else if (query.includes("HOW TO PREVENT PLANT DISEASES")) {
        return "Use resistant plant varieties, practice crop rotation, and remove infected plants to prevent disease spread.";
    } else if (query.includes("WHAT IS CROP ROTATION")) {
        return "Crop rotation is the practice of planting different crops in a sequence to improve soil health, reduce pest buildup, and prevent diseases.";
    } else if (query.includes("HOW TO TREAT SICK PLANTS")) {
        return "Isolate infected plants, remove affected parts, and use appropriate treatments like organic fungicides or pesticides.";
    } else if (query.includes("DROUGHT-RESISTANT CROPS")) {
        return "Crops like sorghum, millet, and barley are drought-resistant and can survive with minimal water.";
    } else if (query.includes("WHAT IS GREENHOUSE FARMING")) {
        return "Greenhouse farming involves growing plants in a controlled environment to optimize temperature, humidity, and light conditions for better yields.";
    } else if (query.includes("HOW TO START ORGANIC FARMING")) {
        return "Start by choosing organic seeds, using natural fertilizers, and avoiding chemical pesticides. Follow organic farming guidelines and get certified if necessary.";
    } else if (query.includes("HOW TO FIX SOIL ACIDITY")) {
        return "To fix soil acidity, add lime to raise the pH. Conduct a soil test to determine the right amount of lime to apply.";
    } else if (query.includes("BEST FERTILIZERS FOR WHEAT")) {
        return "For wheat, use a balanced fertilizer with a good ratio of nitrogen, phosphorus, and potassium. Urea and DAP are common choices.";
    } else if (query.includes("PEST CONTROL FOR CORN")) {
        return "Use organic methods like neem oil or natural predators to control pests on corn. Regularly monitor your crops for signs of infestation.";
    } else if (query.includes("HOW TO USE CROP STUBBLE")) {
        return "Crop stubble can be used as mulch to retain moisture and improve soil quality. It can also be composted to enhance soil fertility.";
    } else if (query.includes("HOW TO PLANT RICE")) {
        return "To plant rice, prepare your field by leveling it and ensuring proper irrigation. Use high-quality seeds and plant them 1-2 cm deep.";
    } else if (query.includes("WHAT TO DO AFTER HARVESTING")) {
        return "After harvesting, store crops in cool, dry conditions. You can also prepare the soil for the next planting season by adding compost or manure.";
    } else if (query.includes("HOW TO KEEP SOIL HEALTHY")) {
        return "Maintain soil health by practicing crop rotation, using organic fertilizers, and avoiding overuse of chemicals.";
    } else if (query.includes("TIPS FOR INCREASED MILK PRODUCTION IN DAIRY FARMING")) {
        return "Ensure your cows have a balanced diet, adequate water, and proper care. Provide comfortable housing and regular milking routines.";
    } else if (query.includes("HOW TO IMPROVE WATER CONSERVATION IN FARMING")) {
        return "Install drip irrigation systems, use mulching, and harvest rainwater to improve water conservation on your farm.";
    } else if (query.includes("WHAT IS AQUAPONICS")) {
        return "Aquaponics is a sustainable farming method that combines fish farming and plant cultivation in a symbiotic environment.";
    } else if (query.includes("HOW TO GROW FRUIT TREES")) {
        return "Plant fruit trees in well-drained soil with full sunlight. Water regularly and prune the trees to ensure proper growth.";
    } else if (query.includes("HOW TO GROW SPICES")) {
        return "Spices like ginger, turmeric, and chili can be grown in warm, tropical climates with well-drained soil.";
    } else if (query.includes("HOW TO PROTECT CROPS FROM STRONG WINDS")) {
        return "Plant windbreaks such as trees or tall shrubs around your farm to protect crops from strong winds.";
    } else if (query.includes("CHUP")) {
      
        return "tu gapabus , satvi fail";
    
      
    } else if (query.includes("HOW TO DEAL WITH CROP FAILURES")) {
        return "Assess the cause of failure, whether it's drought, pests, or disease, and take appropriate corrective actions like replanting or adjusting farming practices.";
    } else {
        return "I'm still learning about that. Can I help with something else?";
    }
}

  
  

  
  
  
  
  
  
 
  
    
function speak2(){
  setTimeout(function(){$("#speak").click();})
}
$("#speak").click(function(){
    responsiveVoice.speak(k);
})
function speak(){
    responsiveVoice.speak(k);
}

}
});



const voiceButton = document.getElementById('voice-btn');
const inputField = document.getElementById('val');
const statusText = document.getElementById('ap');

voiceButton.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.onstart = () => {
        statusText.innerText = 'Listening...';
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputField.value = transcript; // Populate the input field with the recognized text
        statusText.innerText = 'You said: ' + transcript;
    };
    recognition.onerror = (event) => {
        statusText.innerText = 'Error: ' + event.error;
    };
    recognition.start();
});
